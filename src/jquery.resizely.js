/**
 * Resize.ly jQuery Plugin
 * jQuery plugin that makes your images Retina and responsive when coupled
 * with the dynamic image delivery service Resize.ly
 * @copyright 2013 Resize.ly
 * @link https://github.com/UsabilityDynamics/resizely-jquery
 * @includes imagesLoaded v3.0.4
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

/**
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * @link http://desandro.github.io/imagesloaded/
 * @author David DeSandro
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
(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],o=n.listener.apply(this,t||[]),(o===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,s[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

if( typeof jQuery == 'function' ){
  ( function( $ ){
    'use strict';

    /**
     * Setup our settings variable
     *
     */
    var s = {
      sw: screen.width,
      sh: screen.height,
      d: 'resize.ly',
      dpr: ( 'devicePixelRatio' in window ? devicePixelRatio : '1' ),
      dbg: false,
      bp: 250,
      minbp: 500
    },

    /**
     *
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
          newSrc,
          ew = 0,
          eh = 0;
        /** We can't find a width or a height, we should replace the image to find its width */
        var transparent_img = '/img/transparent_dot.png';
        if( s.dbg ){
          transparent_img = '/img/transparent_red_dot.png';
        }
        /** Backup the title attribute, and change our source to the temp one */
        $e.attr( {
          '_title': $e.attr( 'title' )
        } ).removeAttr( 'title' );
        /** Listen for the image loaded event */
        imagesLoaded( e, function(){
          /** Get our calculated widths */
          ew = $e.width(), eh = $e.height();
          /** Debug */
          if( s.dbg ){
            console.log( '==== Image: ' + $e.attr( 'data-src' ) );
            console.log( 'Calculated dimensions: ' + ew + ' x ' + eh + ' on ' + x );
          }
          /** If the height and width are only 1px, then we know that we need to try setting the width inline */
          if( ( ew == 1 && eh == 1 ) || ( !ew && !eh ) ){
            if( s.dbg ){
              console.log( 'Could not determine dimensions. Setting manual width.' );
            }
            $e.attr( '_style', $e.attr( 'style' ) );
            $e.attr( 'style', ( typeof $e.attr( '_style' ) != 'undefined' ? $e.attr( '_style' ).toString() : '' ) + 'width: 100% !important;' );
            /** We do one final assignment, and that's it */
            ew = $e.width();
            /** Now restore it */
            $e.attr( 'style', ( typeof $e.attr( '_style' ) == 'undefined' ? '' : $e.attr( '_style' ) ) );
            $e.removeAttr( '_style' );
            /** Get rid of our height determination */
            eh = 0;
          }
          /** Ok, if the height and width are equal, change the width to some arbitrary number between 10 and 100 */
          if( ew == eh ){
            /** Backup the width, set the width, and check to see if width and height are still equal */
            $e.attr( '_style', $e.attr( 'style' ) );
            $e.attr( 'style', ( typeof $e.attr( '_style' ) != 'undefined' ? $e.attr( '_style' ).toString() : '' ) + 'width: ' + Math.floor( Math.random() * ( 100 - 10 + 1 ) + 10 ).toString() + 'px !important;' );
            if( $e.width() == $e.height() ){
              /** Ok, so they're equal - this is probably an auto-height element */
              eh = 0;
            }
            /** Restore the width */
            $e.attr( 'style', ( typeof $e.attr( '_style' ) == 'undefined' ? '' : $e.attr( '_style' ) ) );
            $e.removeAttr( '_style' );
          }
          /** Ok, now we should check our breakpoints and see if we should be using them */
          if( ew >= s.minbp ){
            /** Ok, round up to the nearest breakpoint */
            var oew = ew;
            ew = ew - ( ew % s.bp ) + s.bp;
            /** Now if we have a height, calculate the new height */
            if( eh ){
              eh = Math.round( eh * ( ew / oew ) );
            }
          }
          /** Debug */
          if( s.dbg ){
            console.log( 'New Dimensions: ' + ew + "x" + eh );
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
          /** Set a low width/height */
          $e.attr( '_style', $e.attr( 'style' ) );
          $e.attr( 'style', ( typeof $e.attr( '_style' ) != 'undefined' ? $e.attr( '_style' ).toString() : '' ) + 'width: 1px !important; height: 1px !important;' );
          /** Setup our images loaded function to restore width */
          imagesLoaded( e, function( instance ){
            /** Restore the width */
            $e.attr( 'style', ( typeof $e.attr( '_style' ) == 'undefined' ? '' : $e.attr( '_style' ) ) );
            $e.removeAttr( '_style' );
          } );
          /** Change the attribute */
          $e.attr( 'src', newSrc );
        } );
        /** Change our attribute */
        $e.attr( 'src', window.location.protocol + '//' + s.d + transparent_img );
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
     *
     */
    if( typeof window.autoResizely != 'boolean' || window.autoResizely === true ){
      $( document ).ready( function (){
        $( 'img[data-src]' ).resizely();
      });
    }
  })( jQuery );
} else {
  if( typeof console.error == 'function' ) console.error( 'Oops, looks like jQuery was not included before bringing in the Resize.ly jQuery plugin.' );
}