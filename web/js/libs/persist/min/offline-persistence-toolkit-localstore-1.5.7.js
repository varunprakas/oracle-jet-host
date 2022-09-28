/**
 * Copyright (c) 2017, Oracle and/or its affiliates.
 * All rights reserved.
 */

define("persist/PersistenceStore",[],(function(){"use strict";var e=function(e){this._name=e};return(e.prototype={}).getName=function(){return this._name},e.prototype.getVersion=function(){return this._version},e.prototype.Init=function(e){return e&&e.version?this._version=e.version:this._version="0",Promise.resolve()},e.prototype.upsert=function(e,r,t,n){throw TypeError("failed in abstract function")},e.prototype.upsertAll=function(e){throw TypeError("failed in abstract function")},e.prototype.find=function(e){throw TypeError("failed in abstract function")},e.prototype.findByKey=function(e){throw TypeError("failed in abstract function")},e.prototype.removeByKey=function(e){throw TypeError("failed in abstract function")},e.prototype.delete=function(e){throw TypeError("failed in abstract function")},e.prototype.keys=function(){throw TypeError("failed in abstract function")},e.prototype.updateKey=function(e,r){throw TypeError("failed in abstract function")},e})),define("persist/impl/storageUtils",["./logger"],(function(e){"use strict";function r(e){var n,s=[];for(var a in e)if(e.hasOwnProperty(a)){var l=e[a];if(0===a.indexOf("$")){if(o(a)){if(!(l instanceof Array))throw new Error("not a valid expression: "+e);n={operator:a,array:[]};for(var u=0;u<l.length;u++){var f=r(l[u]);n.array.push(f)}}else if(i(a))throw new Error("not a valid expression: "+e)}else if("object"!=typeof l)s.push({left:a,right:l,operator:"$eq"});else{var c={left:a};t(c,l),s.push(c)}}return s.length>1?n={operator:"$and",array:s}:1===s.length&&(n=s[0]),n}function t(e,r){var t=!1;for(var n in r)if(r.hasOwnProperty(n)){var o=r[n];if(t||!i(n))throw new Error("parsing error "+r);e.operator=n,e.right=o,t=!0}}function n(e,r){var t=e.operator;if(o(t)){if(!e.left&&e.array instanceof Array){for(var s,u=e.array,f=0;f<u.length;f++){var c=n(u[f],r);if("$or"===t&&!0===c)return!0;if("$and"===t&&!1===c)return!1;s=c}return s}throw new Error("invalid expression tree!"+e)}if(!i(t))throw new Error("not a valid expression!"+e);var y,p=l(e.left,r),h=e.right;if("$lt"===t)return(p=(y=a(p,h))[0])<y[1];if("$gt"===t)return(p=(y=a(p,h))[0])>y[1];if("$lte"===t)return(p=(y=a(p,h))[0])<=y[1];if("$gte"===t)return(p=(y=a(p,h))[0])>=y[1];if("$eq"===t)return p===h;if("$ne"===t)return p!==h;if("$regex"===t)return null!==p.match(h);if("$exists"===t)return h?null!=p:null==p;if("$in"!==t){if("$nin"===t)return h.indexOf(p)<0;throw new Error("not a valid expression! "+e)}for(var v=0;v<h.length;v++)if(h[v]===p)return!0;return!1}function o(e){return"$and"===e||"$or"===e}function i(e){return"$lt"===e||"$gt"===e||"$lte"===e||"$gte"===e||"$eq"===e||"$ne"===e||"$regex"===e||"$exists"===e||"$in"===e||"$nin"===e}function s(e){return null!=e&&(e instanceof String||"string"==typeof e)}function a(e,r){return s(e)&&null==r?r="":s(r)&&null==e&&(e=""),[e,r]}function l(e,r){for(var t=e.split("."),n=r,o=0;o<t.length;o++)n=n[t[o]];return n}return{satisfy:function(t,o){return e.log("Offline Persistence Toolkit storageUtils: Processing selector: "+JSON.stringify(t)),!t||n(r(t),o)},getValue:l,assembleObject:function(e,r){var t;if(r){t={};for(var n=0;n<r.length;n++)for(var o=t,i=e,s=r[n].split("."),a=0;a<s.length;a++)i=i[s[a]],!o[s[a]]&&a<s.length-1&&(o[s[a]]={}),a===s.length-1?o[s[a]]=i:o=o[s[a]]}else t=e;return t},sortRows:function(e,r){return e&&Array.isArray(e)&&!(e.length<1)&&r&&Array.isArray(r)&&r.length?e.sort(function(e){return function(r,t){for(var n=0;n<e.length;n++){var o,i=e[n],s=!0;if("string"==typeof i)o=i;else{if("object"!=typeof i)throw new Error("invalid sort criteria.");var a=Object.keys(i);if(!a||1!==a.length)throw new Error("invalid sort criteria");s="asc"===i[o=a[0]].toLowerCase()}var u=l(o,r),f=l(o,t);if(u!=f)return s?u<f?-1:1:u<f?1:-1}return 0}}(r)):e}}})),define("persist/impl/keyValuePersistenceStore",["../PersistenceStore","./storageUtils","./logger"],(function(e,r,t){"use strict";var n=function(r){e.call(this,r)};return(n.prototype=new e).Init=function(e){return this._version=e&&e.version||"0",Promise.resolve()},n.prototype.getItem=function(e){throw TypeError("failed in abstract function")},n.prototype.removeByKey=function(e){throw TypeError("failed in abstract function")},n.prototype.keys=function(){throw TypeError("failed in abstract function")},n.prototype.findByKey=function(e){return t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: findByKey() with key: "+e),this.getItem(e).then((function(e){return e?Promise.resolve(e.value):Promise.resolve()}))},n.prototype.find=function(e){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: find() with expression: "+JSON.stringify(e));var n=this,o=[],i=[];return e=e||{},this.keys().then((function(t){for(var s=[],a=0;a<t.length;a++){var l=t[a];l&&s.push(function(t){return n.getItem(t).then((function(n){n&&r.satisfy(e.selector,n)&&(n.key=t,i.push(n))}))}(l))}return Promise.all(s).then((function(){for(var t=r.sortRows(i,e.sort),s=0;s<t.length;s++)o.push(n._constructReturnObject(e.fields,t[s]));return Promise.resolve(o)}))}))},n.prototype.updateKey=function(e,r){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: updateKey() with currentKey: "+e+" and new key: "+r);var n=this;return this.getItem(e).then((function(e){return e?n._insert(r,e.metadata,e.value):Promise.reject("No existing key found to update")})).then((function(){return n.removeByKey(e)}))},n.prototype._constructReturnObject=function(e,t){return e?r.assembleObject(t,e):t.value},n.prototype._removeByKeyMapCallback=function(e){var r=this;return function(t){var n;return n=e?t[e]:t,r.removeByKey(n)}},n.prototype.delete=function(e){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: delete() with expression: "+JSON.stringify(e));var r=this;if(!e)return this.deleteAll();var n=e;return n.fields=["key"],r.find(n).then((function(e){if(e&&e.length){var t=e.map(r._removeByKeyMapCallback("key"),r);return Promise.all(t)}return Promise.resolve()}))},n.prototype.deleteAll=function(){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: deleteAll()");var e,r=this,n=[];return this.keys().then((function(t){for(e=0;e<t.length;e++)n.push(r.removeByKey(t[e]));return Promise.all(n)}))},n.prototype.upsert=function(e,r,n,o){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: upsert() for key: "+e);var i=this;return this.getItem(e).then((function(t){if(t&&o){var s=t.metadata.versionIdentifier;return s!==o?Promise.reject({status:409}):r.versionIdentifier!==s?i._insert(e,r,n):Promise.resolve()}return i._insert(e,r,n)}))},n.prototype.upsertAll=function(e){t.log("Offline Persistence Toolkit keyValuePersistenceStore called by subclass: upsertAll()");for(var r=[],n=0;n<e.length;n++){var o=e[n];r.push(this.upsert(o.key,o.metadata,o.value,o.expectedVersionIndentifier))}return Promise.all(r)},n})),define("persist/impl/localPersistenceStore",["./keyValuePersistenceStore","./logger"],(function(e,r){"use strict";var t=function(r){e.call(this,r)};return(t.prototype=new e).Init=function(e){return this._version=e&&e.version||"0",Promise.resolve()},t.prototype._insert=function(e,r,t){var n=this._createRawKey(e),o={key:e,metadata:r,value:t},i=JSON.stringify(o);return localStorage.setItem(n,i),Promise.resolve()},t.prototype.removeByKey=function(e){r.log("Offline Persistence Toolkit localPersistenceStore: removeByKey() with key: "+e);var t=this;return this.findByKey(e).then((function(r){if(r){var n=t._createRawKey(e);return localStorage.removeItem(n),Promise.resolve(!0)}return Promise.resolve(!1)}))},t.prototype._createRawKey=function(e){return this._name+this._version+e.toString()},t.prototype.keys=function(){r.log("Offline Persistence Toolkit localPersistenceStore: keys()");for(var e=Object.keys(localStorage),t=[],n=0;n<e.length;n++){var o=this._name+this._version,i=e[n];if(0===i.indexOf(o)){var s=localStorage.getItem(i);if(s)try{var a=JSON.parse(s).key;a?t.push(a):t.push(i.slice(o.length))}catch(e){r.log("data is not in valid JSON format: "+s);continue}}}return Promise.resolve(t)},t.prototype.getItem=function(e){r.log("Offline Persistence Toolkit localPersistenceStore: getItem() with key: "+e);var t=this._createRawKey(e),n=localStorage.getItem(t);if(!n)return Promise.resolve();try{var o=JSON.parse(n);return Promise.resolve(o)}catch(e){return Promise.resolve()}},t})),define("persist/localPersistenceStoreFactory",["./impl/localPersistenceStore"],(function(e){"use strict";return{createPersistenceStore:function(r,t){return function(r,t){var n=new e(r);return n.Init(t).then((function(){return n}))}(r,t)}}})),define("persist/persistenceStoreFactory",[],(function(){"use strict";return{createPersistenceStore:function(e,r){}}}));