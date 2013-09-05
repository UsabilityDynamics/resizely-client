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
(function(){function b(){}function c(f,d){var g=f.length;while(g--){if(f[g].listener===d){return g}}return -1}var a=b.prototype;a.getListeners=function(e){var g=this._getEvents();var f;var d;if(typeof e==="object"){f={};for(d in g){if(g.hasOwnProperty(d)&&e.test(d)){f[d]=g[d]}}}else{f=g[e]||(g[e]=[])}return f};a.flattenListeners=function(d){var f=[];var e;for(e=0;e<d.length;e+=1){f.push(d[e].listener)}return f};a.getListenersAsObject=function(d){var f=this.getListeners(d);var e;if(f instanceof Array){e={};e[d]=f}return e||f};a.addListener=function(e,g){var d=this.getListenersAsObject(e);var f=typeof g==="object";var h;for(h in d){if(d.hasOwnProperty(h)&&c(d[h],g)===-1){d[h].push(f?g:{listener:g,once:false})}}return this};a.on=a.addListener;a.addOnceListener=function(d,e){return this.addListener(d,{listener:e,once:true})};a.once=a.addOnceListener;a.defineEvent=function(d){this.getListeners(d);return this};a.defineEvents=function(d){for(var e=0;e<d.length;e+=1){this.defineEvent(d[e])}return this};a.removeListener=function(e,g){var d=this.getListenersAsObject(e);var f;var h;for(h in d){if(d.hasOwnProperty(h)){f=c(d[h],g);if(f!==-1){d[h].splice(f,1)}}}return this};a.off=a.removeListener;a.addListeners=function(d,e){return this.manipulateListeners(false,d,e)};a.removeListeners=function(d,e){return this.manipulateListeners(true,d,e)};a.manipulateListeners=function(f,k,h){var e;var g;var j=f?this.removeListener:this.addListener;var d=f?this.removeListeners:this.addListeners;if(typeof k==="object"&&!(k instanceof RegExp)){for(e in k){if(k.hasOwnProperty(e)&&(g=k[e])){if(typeof g==="function"){j.call(this,e,g)}else{d.call(this,e,g)}}}}else{e=h.length;while(e--){j.call(this,k,h[e])}}return this};a.removeEvent=function(e){var g=typeof e;var f=this._getEvents();var d;if(g==="string"){delete f[e]}else{if(g==="object"){for(d in f){if(f.hasOwnProperty(d)&&e.test(d)){delete f[d]}}}else{delete this._events}}return this};a.emitEvent=function(f,k){var h=this.getListenersAsObject(f);var e;var g;var j;var d;for(j in h){if(h.hasOwnProperty(j)){g=h[j].length;while(g--){e=h[j][g];d=e.listener.apply(this,k||[]);if(d===this._getOnceReturnValue()||e.once===true){this.removeListener(f,h[j][g].listener)}}}}return this};a.trigger=a.emitEvent;a.emit=function(d){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(d,e)};a.setOnceReturnValue=function(d){this._onceReturnValue=d;return this};a._getOnceReturnValue=function(){if(this.hasOwnProperty("_onceReturnValue")){return this._onceReturnValue}else{return true}};a._getEvents=function(){return this._events||(this._events={})};if(typeof define==="function"&&define.amd&&false){}else{if(typeof module!=="undefined"&&module.exports){module.exports=b}else{this.EventEmitter=b}}}).call(this);(function(d){var b=document.documentElement;var f=function(){};if(b.addEventListener){f=function(h,g,i){h.addEventListener(g,i,false)}}else{if(b.attachEvent){f=function(e,h,g){e[h+g]=g.handleEvent?function(){var i=d.event;i.target=i.target||i.srcElement;g.handleEvent.call(g,i)}:function(){var i=d.event;i.target=i.target||i.srcElement;g.call(e,i)};e.attachEvent("on"+h,e[h+g])}}}var c=function(){};if(b.removeEventListener){c=function(h,g,i){h.removeEventListener(g,i,false)}}else{if(b.detachEvent){c=function(i,g,j){i.detachEvent("on"+g,i[g+j]);try{delete i[g+j]}catch(h){i[g+j]=undefined}}}}var a={bind:f,unbind:c};if(typeof define==="function"&&define.amd&&false){}else{d.eventie=a}})(this);(function(g){function f(i,a){for(var m in a){i[m]=a[m]}return i}function c(a){return l.call(a)==="[object Array]"}function j(m){var a=[];if(c(m)){a=m}else{if(typeof m.length==="number"){for(var o=0,i=m.length;o<i;o++){a.push(m[o])}}else{a.push(m)}}return a}function h(p,m){function q(t,u,o){if(!(this instanceof q)){return new q(t,u)}if(typeof t==="string"){t=document.querySelectorAll(t)}this.elements=j(t);this.options=f({},this.options);if(typeof u==="function"){o=u}else{f(this.options,u)}if(o){this.on("always",o)}this.getImages();if(k){this.jqDeferred=new k.Deferred}var a=this;setTimeout(function(){a.check()})}function n(a){this.img=a}q.prototype=new p;q.prototype.options={};q.prototype.getImages=function(){this.images=[];for(var x=0,u=this.elements.length;x<u;x++){var z=this.elements[x];if(z.nodeName==="IMG"){this.addImage(z)}var w=z.querySelectorAll("img");for(var a=0,v=w.length;a<v;a++){var y=w[a];this.addImage(y)}}};q.prototype.addImage=function(o){var a=new n(o);this.images.push(a)};q.prototype.check=function(){function w(e,t){if(x.options.debug&&b){d.log("confirm",e,t)}x.progress(e);v++;if(v===r){x.complete()}return true}var x=this;var v=0;var r=this.images.length;this.hasAnyBroken=false;if(!r){this.complete();return}for(var y=0;y<r;y++){var a=this.images[y];a.on("confirm",w);a.check()}};q.prototype.progress=function(o){this.hasAnyBroken=this.hasAnyBroken||!o.isLoaded;var a=this;setTimeout(function(){a.emit("progress",a,o);if(a.jqDeferred){a.jqDeferred.notify(a,o)}})};q.prototype.complete=function(){var o=this.hasAnyBroken?"fail":"done";this.isComplete=true;var a=this;setTimeout(function(){a.emit(o,a);a.emit("always",a);if(a.jqDeferred){var e=a.hasAnyBroken?"reject":"resolve";a.jqDeferred[e](a)}})};if(k){k.fn.imagesLoaded=function(o,s){var a=new q(this,o,s);return a.jqDeferred.promise(k(this))}}var i={};n.prototype=new p;n.prototype.check=function(){var o=i[this.img.src];if(o){this.useCached(o);return}i[this.img.src]=this;if(this.img.complete&&this.img.naturalWidth!==undefined){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}var a=this.proxyImage=new Image;m.bind(a,"load",this);m.bind(a,"error",this);a.src=this.img.src};n.prototype.useCached=function(o){if(o.isConfirmed){this.confirm(o.isLoaded,"cached was confirmed")}else{var a=this;o.on("confirm",function(r){a.confirm(r.isLoaded,"cache emitted confirmed");return true})}};n.prototype.confirm=function(o,a){this.isConfirmed=true;this.isLoaded=o;this.emit("confirm",this,a)};n.prototype.handleEvent=function(o){var a="on"+o.type;if(this[a]){this[a](o)}};n.prototype.onload=function(){this.confirm(true,"onload");this.unbindProxyEvents()};n.prototype.onerror=function(){this.confirm(false,"onerror");this.unbindProxyEvents()};n.prototype.unbindProxyEvents=function(){m.unbind(this.proxyImage,"load",this);m.unbind(this.proxyImage,"error",this)};return q}var k=g.jQuery;var d=g.console;var b=typeof d!=="undefined";var l=Object.prototype.toString;if(typeof define==="function"&&define.amd&&false){}else{g.imagesLoaded=h(g.EventEmitter,g.eventie)}})(window);

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
        $e.imagesLoaded().done( function( instance ){
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
          $e.imagesLoaded().done( function( instance ){
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