/**
 * Resize.ly jQuery Plugin
 * jQuery plugin that makes your images Retina and responsive when coupled
 * with the dynamic image delivery service Resize.ly
 * @copyright 2013 Resize.ly
 * @link https://github.com/UsabilityDynamics/resizely-jquery
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
if( typeof jQuery == 'function' ){
    ( function( $ ){
        /**
         * Setup our settings variable
         */
        var s = {
            sw: screen.width,
            sh: screen.height,
            d: 'resize.ly',
            dpr: ( 'devicePixelRatio' in window ? devicePixelRatio : '1' ),
            dbg: true,
            bp: 250
        },
        /**
         * Setup our methods
         */
        f = {
            /**
             * Base64 Encoding Method
             * @license Public Domain
             * Based on public domain code by Tyler Akins <http://rumkin.com/>
             * Original code at http://rumkin.com/tools/compression/base64.php
             */
            base64_encode: function( data ){
                var out = "", c1, c2, c3, e1, e2, e3, e4, i,
                    tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*!~";
                for( i = 0; i < data.length; ){
                    c1 = data.charCodeAt( i++ );
                    c2 = data.charCodeAt( i++ );
                    c3 = data.charCodeAt( i++ );
                    e1 = c1 >> 2;
                    e2 = ( ( c1 & 3 ) << 4 ) + ( c2 >> 4 );
                    e3 = ( ( c2 & 15 ) << 2 ) + ( c3 >> 6 );
                    e4 = c3 & 63;
                    if( isNaN( c2 ) ){
                        e3 = e4 = 64;
                    }else if( isNaN( c3 ) ){
                        e4 = 64;
                    }
                    out += tab.charAt( e1 ) + tab.charAt( e2 ) + tab.charAt( e3 ) + tab.charAt( e4 );
                }
                return out;
            },
            /**
             * RC4 symmetric cipher encryption/decryption
             * https://gist.github.com/2185197
             * @license Public Domain
             * @param {string} key - secret key for encryption/decryption
             * @param {string} str - string to be encrypted/decrypted
             * @return {string}
             */
            rc4: function( key, str ){
                var i, y, s = [], j = 0, x, res = '';
                for( i = 0; i < 256; i++ ){
                    s[ i ] = i;
                }
                for( i = 0; i < 256; i++ ){
                    j = ( j + s[ i ] + key.charCodeAt( i % key.length ) ) % 256;
                    x = s[ i ];
                    s[ i ] = s[ j ];
                    s[ j ] = x;
                }
                i = 0;
                j = 0;
                for( y = 0; y < str.length; y++ ){
                    i = ( i + 1 ) % 256;
                    j = ( j + s[ i ] ) % 256;
                    x = s[ i ];
                    s[ i ] = s[ j ];
                    s[ j ] = x;
                    res += String.fromCharCode( str.charCodeAt( y ) ^ s[ ( s[ i ] + s[ j ] ) % 256 ] );
                }
                return res;
            },
            /**
             * This function takes the '_img' attribute for all images and uses it to call out to resize.ly to properly
             * size the other images
             * @param {int} i Counter
             * @param {object} e Image element as discovered by jQuery
             */
            changeSrc: function( i, e ){
                /** Init Vars */
                var $e = $( e ),
                    src = $e.attr( 'data-src' ),
                    x = s.sw + 'x' + s.sh + ',' + s.dpr,
                    o = window.location.protocol + '//' + window.location.host,
                    p = window.location.pathname,
                    newSrc;
                /** We can't find a width or a height, we should replace the image to find its width */
                var transparent_img = '/img/transparent_dot.png';
                if( s.dbg ){
                    transparent_img = '/img/transparent_red_dot.png';
                }
                /** Backup the title attribute */
                $e.attr( {
                    '_title': $e.attr( 'title' )
                } ).removeAttr( 'title' );
                /** Ok, made the src the transparent dot */
                $e.attr( 'src', window.location.protocol + '//' + s.d + transparent_img );
                /** Now, grab the width */
                var ew = $e.width(), eh = $e.height();
                /** Debug */
                if( s.dbg ){
                    console.log( e );
                    console.log( ew + "x" + eh );
                }
                /** If the height and width are only 1px, then we know that we need to try setting the width inline */
                if( ( ew == 1 && eh == 1 ) || ( !ew && !eh ) ){
                    if( s.dbg ){
                        console.log( 'Setting manual width...' );
                    }
                    $e.attr( '_width', $e.attr( 'width' ) );
                    $e.attr( 'width', '100%' );
                    /** We do one final assignment, and that's it */
                    ew = $e.width();
                    /** Now restore it */
                    $e.attr( 'width', ( typeof $e.attr( '_width' ) == 'undefined' ? '' : $e.attr( '_width' ) ) );
                    $e.removeAttr( '_width' );
                }
                /** Debug */
                if( s.dbg ){
                    console.log( ew + "x" + eh );
                }
                /** Restore the title */
                $e.attr( {
                    'title': $e.attr( '_title' )
                } ).removeAttr( '_title' );
                /** Change the src as needed */
                if( !( src.substring( 0, 5 ) == 'http:' || src.substring( 0, 6 ) == 'https:' ) ){
                    if( src.substring( 0, 1 ) == '/' ){
                        src = o + src;
                    }else{
                        src = o + p.substring( 0, p.lastIndexOf( '/' ) + 1 ) + src;
                    }
                }
                /** Generate the new src */
                newSrc = window.location.protocol + '//' + s.d + '/' + ( ew ? ew : '' ) + 'x' + ( eh ? eh : '' ) + '/' + src + '?x=' + f.base64_encode( f.rc4( 'rly', x ) );
                /** Change the attribute */
                $e.attr( 'src', newSrc );
                /** Return this */
                return this;
            },
            /**
             * This function inits the plugin when called on a DOM element
             */
            init: function( o ) {
                s = $.extend( s, o );
                return this.each( f.changeSrc );
            }
        };
        /**
         * Our plugin definition
         * @param {object|string} func An object for plugin initiation, or a string to call a specific function
         */
        $.fn.resizely = function( func ){
            /** We're seeing if we need to call a function, or do our initiation */
            if ( f[ func ] ) {
                return f[ func ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
            } else if ( typeof func === 'object' || !func ) {
                return f.init.apply( this, arguments );
            } else {
                $.error( 'Function \'' +  func + '\' does not exist on jQuery.resizely' );
            }
        };
        /**
         * If we have a window.autoResize function, we should check that before running our search
         */
        if( typeof window.autoResizely != 'boolean' || window.autoResizely === true ){
            $( document ).ready( function (){
                $( 'img[data-src]' ).resizely();
            } );
        }
    } )( jQuery );
}else{
    var msg = 'Oops, looks like jQuery was not included before bringing in the Resize.ly jQuery plugin.';
    if( typeof console.error == 'function' ) console.error( msg );
    else alert( msg );
}