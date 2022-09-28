/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojdatasource-common","ojs/ojcore-base","jquery","ojs/ojdomutils","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojdatacollection-common"],function(t,e,n,s,i,a,o){"use strict";var r;e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,(r={properties:{context:{type:"object"},expanded:{type:"boolean",writeback:!0},translations:{type:"object",value:{},properties:{accessibleLevelDescription:{type:"string"},accessibleRowCollapsed:{type:"string"},accessibleRowDescription:{type:"string"},accessibleRowExpanded:{type:"string"},accessibleStateCollapsed:{type:"string"},accessibleStateExpanded:{type:"string"}}}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojCollapse:{},ojExpand:{}},extension:{}}).extension._WIDGET_NAME="ojRowExpander",e.CustomElementBridge.register("oj-row-expander",{metadata:r});const h=function(t,e){this.m_parent=t,this.m_start=e};e._registerLegacyNamespaceProp("EmptyNodeSet",h),h.prototype.getParent=function(){return this.m_parent},h.prototype.getStart=function(){return this.m_start},h.prototype.getCount=function(){return 0},h.prototype.getData=function(t){return null},h.prototype.getMetadata=function(t){return null};const d=function(t,e){this.m_nodeSet=t,this.m_start=e};e._registerLegacyNamespaceProp("FlattenedNodeSet",d),d.prototype.getParent=function(){return this.m_nodeSet.getParent()},d.prototype.getStart=function(){return null!=this.m_start?this.m_start:this.m_nodeSet.getStart()},d.prototype.getCount=function(){return void 0===this.m_count&&(this.m_count=this._getCount(this.m_nodeSet,0),null!=this.m_start&&(this.m_count-=this.m_start)),this.m_count},d.prototype._getCount=function(t,e){var n=e,s=t.getStart(),i=t.getCount();if(n+=i,t.getChildNodeSet)for(var a=0;a<i;a++){var o=t.getChildNodeSet(a+s);null!=o&&(n=this._getCount(o,n))}return n},d.prototype.getData=function(t){return this._getDataOrMetadata(this.m_nodeSet,t,{index:this.m_nodeSet.getStart()},this._getData)},d.prototype.getMetadata=function(t){return this._getDataOrMetadata(this.m_nodeSet,t,{index:this.m_nodeSet.getStart()},this._getMetadata)},d.prototype._getMetadata=function(t,e){return t.getMetadata(e)},d.prototype._getData=function(t,e){return t.getData(e)},d.prototype._getDataOrMetadata=function(t,e,n,s){for(var i=t.getStart(),a=t.getCount(),o=0;o<a;o++){var r=n.index;if(r===e)return s.call(this,t,o+i);if(n.index=r+1,t.getChildNodeSet){var h=t.getChildNodeSet(o+i);if(null!=h){var d=this._getDataOrMetadata(h,e,n,s);if(null!=d)return d}}}return null};const l=function(t,e,n,s){this.m_nodeSet=t,this.m_callback=e,this.m_range=n,this.m_collapsedKeys=s};e._registerLegacyNamespaceProp("NodeSetWrapper",l),l.prototype.getParent=function(){return this.m_nodeSet.getParent()},l.prototype.getStart=function(){return null!=this.m_range?this.m_range.start:this.m_nodeSet.getStart()},l.prototype.getCount=function(){var t=this.m_nodeSet.getStart(),e=this.m_nodeSet.getCount();return null!=this.m_range&&(e=Math.min(this.m_range.count,e),this.m_range.start<t&&(e=0)),e},l.prototype.getData=function(t){return this.m_nodeSet.getData(this._getRelativeIndex(t))},l.prototype.getMetadata=function(t){var e=this.m_nodeSet.getMetadata(this._getRelativeIndex(t));e.index=t,e.parentKey=this.getParent();var n=e.key;return this.m_callback.call(null,n,e),e},l.prototype.getChildNodeSet=function(t){if((null==this.m_collapsedKeys||-1===this.m_collapsedKeys.indexOf(this.m_nodeSet.getMetadata(t).key))&&this.m_nodeSet.getChildNodeSet){var e=this.m_nodeSet.getChildNodeSet(t);if(null!=e)return new l(e,this.m_callback,null,this.m_collapsedKeys)}return null},l.prototype._getRelativeIndex=function(t){return null==this.m_range?t:t-this.m_range.start+this.m_nodeSet.getStart()};const c=function(t,e,n){this.m_nodeSet1=t,this.m_nodeSet2=e,this.m_mergeAt=this._findIndex(n)};e._registerLegacyNamespaceProp("MergedNodeSet",c),c.prototype._findIndex=function(t){for(var e=this.m_nodeSet1.getStart(),n=e+this.m_nodeSet1.getCount(),s=e;s<n;s++){if(t===this.m_nodeSet1.getMetadata(s).key)return s}return n-1},c.prototype.getParent=function(){return this.m_nodeSet1.getParent()},c.prototype.getStart=function(){return this.m_nodeSet1.getStart()},c.prototype.getCount=function(){return this.m_nodeSet1.getCount()+this.m_nodeSet2.getCount()},c.prototype.getData=function(t){var e=this._getRelativeIndex(t),n=e.set,s=e.index;return n.getData(s)},c.prototype.getMetadata=function(t){var e=this._getRelativeIndex(t),n=e.set,s=e.index;return n.getMetadata(s)},c.prototype._getRelativeIndex=function(t){if(t<=this.m_mergeAt)return{set:this.m_nodeSet1,index:t};var e=this.m_nodeSet2.getCount();return t>this.m_mergeAt+e?{set:this.m_nodeSet1,index:t-e}:{set:this.m_nodeSet2,index:t-this.m_mergeAt-1+this.m_nodeSet2.getStart()}};const p=function(t,e){this.m_wrapped=t,this.m_options=e||{},p.superclass.constructor.call(this)};e._registerLegacyNamespaceProp("FlattenedTreeDataSource",p),e.Object.createSubclass(p,e.DataSource,"oj.FlattenedTreeDataSource"),p.prototype.Init=function(){p.superclass.Init.call(this),this.m_wrapped.on("change",this._handleModelEvent.bind(this)),this.m_busy=!1,this.m_fetchSize=parseInt(this.m_options.fetchSize,10),isNaN(this.m_fetchSize)&&(this.m_fetchSize=25),this.m_maxCount=parseInt(this.m_options.maxCount,10),isNaN(this.m_maxCount)&&(this.m_maxCount=500);var t=this.m_options.expanded;Array.isArray(t)?this.m_expandedKeys=t:("all"===t&&(this.m_collapsedKeys=[]),this.m_expandedKeys=[]),this.m_cache=[]},p.prototype.handleEvent=function(t,e){return p.superclass.handleEvent.call(this,t,e)},p.prototype.Destroy=function(){delete this.m_cache,delete this.m_expandedKeys,delete this.m_collapsedKeys,this.m_queue&&delete this.m_queue,this.m_wrapped.off("change"),this.m_wrapped.Destroy&&this.m_wrapped.Destroy()},p.prototype.getFetchSize=function(){return this.m_fetchSize},p.prototype.getMaxCount=function(){return this.m_maxCount},p.prototype.getExpandedKeys=function(){return this.m_expandedKeys},p.prototype.getOption=function(t){return null!=this.m_options?this.m_options[t]:null},p.prototype.getWrappedDataSource=function(){return this.m_wrapped},p.prototype._getFetchSizeToUse=function(t){var e=this.getFetchSize(),n=this.getMaxCount();return-1===e?-1===t?n:t:-1===t?Math.min(e,n):e},p.prototype.fetchRows=function(t,e){this.m_busy=!0,this._isExpandAll()?this._fetchRowsFromDescendants(t,e):this._fetchRowsFromChildren(t,e)},p.prototype._fetchRowsFromChildren=function(t,e){var n;if(t.start>this._getLastIndex()){var s=this._getMaxFetchSize();if(this._getLastIndex()<0)return(n={}).start=t.start,n.count=Math.min(s,t.count),void this.m_wrapped.fetchChildren(null,n,{success:function(s){this._handleFetchSuccess(s,null,0,t,n,0,e)}.bind(this),error:function(t){this._handleFetchError(t,e)}.bind(this)});if(s>0){var i=this._getLastEntry(),a=i.parent,o=this.m_wrapped.getChildCount(a),r=i.index,d=i.depth;if(-1===o||r<o-1){var l=this._getFetchSizeToUse(o);(n={}).start=r+1,n.count=-1===o?Math.min(l,t.count):Math.min(s,Math.min(Math.min(l,t.count),o-n.start)),this.m_wrapped.fetchChildren(a,n,{success:function(s){this._handleFetchSuccess(s,a,d,t,n,o,e)}.bind(this),error:function(t){this._handleFetchError(t,e)}.bind(this)})}else{var c=i.key,p=this.m_wrapped.getChildCount(c);if(!(this._isExpanded(c)&&(-1===p||p>0)?this._fetchFromAncestors(i,d+1,t,e,s):this._fetchFromAncestors(a,d,t,e,s))){var u=new h(null,t.start);null!=e&&null!=e.success&&e.success.call(null,u),this.m_busy=!1}}return}}this.handleMaxCountReached(t,e),this.m_busy=!1},p.prototype.moveOK=function(t,e,n){return this.m_wrapped.moveOK(t,e,n)},p.prototype.move=function(t,e,n,s){this.m_wrapped.move(t,e,n,s)},p.prototype._getMaxFetchSize=function(){return this.getMaxCount()-(this._getLastIndex()+1)},p.prototype._handleFetchError=function(t,e){null!=e&&null!=e.error&&e.error.call(null,t),this.m_busy=!1},p.prototype._handleFetchSuccess=function(t,e,n,s,i,a,o,r){var h=[];this._processNodeSet(t,e,n,h);var d={start:s.start,count:t.getCount()};if(t=new l(t,this.insertMetadata.bind(this),d),0!==h.length){var c=[];c.push(h);var p={};p.callbacks={success:function(t){this._verifyFetchResults(t,e,n,s,i,a,o,r)}.bind(this),error:function(t){this._handleFetchError(t,o)}.bind(this)},p.nodeSet=t,p.keys=[],this._syncExpandRows(c,p)}else this._verifyFetchResults(t,e,n,s,i,a,o,r)},p.prototype._verifyFetchResults=function(t,e,n,s,i,a,o,r){var h,d;if(null!=r){var p=r.prevNodeSet;if(null!=p){var u=p.getStart()+p.getCount()-1,_=p.getMetadata(u).key;h=new c(p,t,_)}}if(t.getCount()<s.count&&null!=e&&n>0){var f={start:s.start+t.getCount(),count:s.count-t.getCount()},g={prevNodeSet:null};g.prevNodeSet=null==h?t:h,d=this._fetchFromAncestors(e,n,f,o,void 0,g)}else if(t.getCount()>s.count){var y=t.getCount()-s.count;null!=h?(h=new l(h,this.insertMetadata.bind(this),{start:h.getStart(),count:h.getCount()-y}),this._removeEntry(h.getStart()+h.getCount(),y)):(t=new l(t,this.insertMetadata.bind(this),{start:t.getStart(),count:t.getCount()-y}),this._removeEntry(t.getStart()+t.getCount(),y))}d||null!=o&&null!=o.success&&o.success.call(null,null==h?t:h),this.m_busy=!1},p.prototype.getChildCount=function(t){return this.m_wrapped.getChildCount(t)},p.prototype._fetchFromAncestors=function(t,e,n,s,i,a){var o,r=!1;void 0===i&&(i=this._getMaxFetchSize()),this._isBatchFetching()&&(o={queueOnly:!0});for(var h,d,l,c=this._getFetchSizeToUse(-1),p=this._getLastIndex();p>=0;p--){var u=this._getEntry(p);if((l=u.depth)<e){t=u.parent,h=this.m_wrapped.getChildCount(t);var _=u.index,f=-1===h;if(f||_<h-1){if((d={}).start=_+1,f?(d.count=Math.min(i,Math.max(0,c)),o=null):d.count=Math.min(i,Math.min(c,h-d.start)),0===d.count)break;this.m_wrapped.fetchChildren(t,d,{success:function(t,e,i,o,r){this._handleFetchSuccess(r,t,e,n,i,o,s,a)}.bind(this,t,l,d,h),error:function(t){this._handleFetchError(t,s)}.bind(this)},o),r=!0;break}e-=1}}return null!=o&&(this.m_wrapped.fetchChildren(t,{start:n.count,count:0},{success:function(e){this._handleFetchSuccess(e,t,l,n,d,h,s,a)}.bind(this),error:function(t){this._handleFetchError(t,s)}.bind(this)}),r=!0),r},p.prototype._processNodeSet=function(t,e,n,s){for(var i=t.getStart(),a=t.getCount(),o=0;o<a;o++){var r=t.getMetadata(i+o).key;this._addEntry(r,n,i+o,e),this._isExpanded(r)&&s.push(r)}},p.prototype.insertMetadata=function(t,e){this._isExpanded(t)&&!e.leaf?e.state="expanded":e.leaf?e.state="leaf":e.state="collapsed"},p.prototype._fetchRowsFromDescendants=function(t,e){var n={maxCount:this.getMaxCount()};this._getLastIndex()>=0&&(n.start=this._getEntry(this._getLastIndex()).key),this.m_wrapped.fetchDescendants(null,{success:function(n){this._handleFetchDescendantsSuccess(n,t,e)}.bind(this),error:function(t){this._handleFetchError(t,e)}.bind(this)},n)},p.prototype.getSortCriteria=function(){return this.m_wrapped.getSortCriteria()},p.prototype._handleFetchDescendantsSuccess=function(t,e,n){var s,i,a=t;if(e.start>this._getLastIndex()){var o=this._getMaxFetchSize(),r=Math.min(o,e.count);if(a=new l(a,this.insertMetadata.bind(this),null,this.m_collapsedKeys),this._getLastIndex()>=0){var c=this._getLastEntry();s={index:0,found:!1,count:0},this._processDescendantsNodeSet(a,null,0,c,r,s),i=s.index+1}else s={count:0},this._processDescendantsNodeSet(a,null,0,null,r,s),i=0;null!=n&&null!=n.success&&(a=0===s.count?new h(null,e.start):new d(a,i),n.success.call(null,a))}else this.handleMaxCountReached(e,n);this.m_busy=!1,this._processQueue()},p.prototype._processDescendantsNodeSet=function(t,e,n,s,i,a){for(var o=t.getStart(),r=t.getCount(),h=0;h<r;h++){if(a.count===i)return;var d=t.getMetadata(o+h),l=d.key;if(a.checkDepth&&s&&s.depth>=n&&(a.found=!0,a.checkDepth=!1),(null==s||a.found)&&(this._addEntry(l,n,o+h,e),a.count+=1,d.leaf?d.state="leaf":d.state="expanded"),null==s||a.found||(l===s.key?d.leaf||this._isExpanded(l)?a.found=!0:a.checkDepth=!0:a.index+=1),t.getChildNodeSet&&this._isExpanded(l)){var c=t.getChildNodeSet(h);null!=c&&this._processDescendantsNodeSet(c,l,n+1,s,i,a)}}},p.prototype.expand=function(t){this._expand(t)},p.prototype._expand=function(t,e){this.m_busy=!0;var n=this.m_wrapped.getChildCount(t),s=this._getFetchSizeToUse(n),i=this.getMaxCount();if(this._getLastIndex()+1===i&&this.getIndex(t)===i-1)return void this.handleExpandSuccess(t,new h(t,0),0,e);0!==s?this.m_wrapped.fetchChildren(t,{start:0,count:s},{success:function(s){this.handleExpandSuccess(t,s,n,e)}.bind(this),error:function(e){this.handleExpandError(t,e)}.bind(this)}):this.handleExpandSuccess(t,new h(t,0),0,e)},p.prototype._processQueue=function(){if(this.m_queue&&this.m_queue.length>0){for(var t=this.m_queue.length-1;t>=0;t--){var e=this.m_queue[t];this.collapse(e.key)}this.m_queue.length=0}},p.prototype._queueOp=function(t,e){null==this.m_queue&&(this.m_queue=[]),this.m_queue.push({op:t,key:e})},p.prototype.collapse=function(t){if(this.m_busy)this._queueOp("collapse",t);else{var e=this.getIndex(t)+1,n=this._getEntry(e-1);if(null!=n){for(var s=0,i=n.depth,a=this._getLastIndex(),o=e;o<a+1;o++){var r=this._getEntry(o).depth;if(r>i)s+=1;else if(r===i)break}if(0!==s){this._isExpandAll()?this.m_collapsedKeys.push(t):this._removeExpanded(t);for(var h=[],d=0;d<s;d++)h.push({key:this._getEntry(e+d).key,index:e+d});this._removeEntry(e,s),this.removeRows(h),this.handleEvent("collapse",{rowKey:t})}else this.handleEvent("collapse",{rowKey:t})}}},p.prototype._isExpanded=function(t){return this._isExpandAll()?!(this.m_collapsedKeys&&this.m_collapsedKeys.length>0)||-1===this._getCollapsedKeyIndex(t):!!(this.m_expandedKeys&&this.m_expandedKeys.length>0)&&this._getExpandedKeyIndex(t)>-1},p.prototype._getCollapsedKeyIndex=function(t){return this._getKeyIndex(this.m_collapsedKeys,t)},p.prototype._getExpandedKeyIndex=function(t){return this._getKeyIndex(this.m_expandedKeys,t)},p.prototype._getKeyIndex=function(t,e){for(var n=-1,s=0;s<t.length;s++)t[s]===e&&(n=s);return n},p.prototype._removeExpanded=function(t){var e=this._getExpandedKeyIndex(t);e>-1&&this.m_expandedKeys.splice(e,1)},p.prototype._removeCollapsed=function(t){var e=this._getCollapsedKeyIndex(t);e>-1&&this.m_collapsedKeys.splice(e,1)},p.prototype.handleExpandError=function(t,e){this.handleEvent("expand",{rowKey:t})},p.prototype.handleExpandSuccess=function(t,e,n,s){var i,a;e=new l(e,this.insertMetadata.bind(this));for(var o=this.getIndex(t)+1,r=o,h=e.getStart(),d=e.getCount(),p=this._getEntry(o-1),u=p.depth+1,_=[],f=h;f<d;f++){var g=e.getMetadata(f),y=g.key;this._isExpanded(y)&&_.push(y),this._insertRow(o,g,p.key,f,u),o+=1}if(this._isExpandAll()?this._removeCollapsed(t):-1===this.m_expandedKeys.indexOf(t)&&this.m_expandedKeys.push(t),null!=s&&(i=s.queue,a=s.prevNodeSetInfo),null!=a&&(e=new c(a.nodeSet,e,t)),0===_.length&&(void 0===i||0===i.length)){if(null!=a){var m=a.callbacks;if(null!=m)return m.success.call(null,e),void(this.m_busy=!1);this.insertRows(a.firstIndex,a.firstKey,e)}else this.insertRows(r,t,e);var v=this.getMaxCount();if(-1===n&&d===this.getFetchSize()||n>d||o===v?this._deleteAllRowsBelow(o):this._getLastIndex()>=v&&this._deleteAllRowsBelow(v),null!=a)for(var x=0;x<a.keys.length;x++)this.handleEvent("expand",{rowKey:a.keys[x]});this.m_busy=!1,this.handleEvent("expand",{rowKey:t})}else void 0===i&&(i=[]),_.length>0&&i.push(_),void 0===a&&((a={}).firstIndex=r,a.firstKey=t,a.keys=[]),a.nodeSet=e,a.keys.push(t),this._syncExpandRows(i,a);this.m_busy=!1,i&&0===i.length&&this._processQueue()},p.prototype._syncExpandRows=function(t,e){var n=t[t.length-1],s=n.shift();0===n.length&&t.pop(),this._expand(s,{prevNodeSetInfo:e,queue:t})},p.prototype._insertRow=function(t,e,n,s,i){var a=e.key;t<=this._getLastIndex()?this._addEntry(a,i,s,n,t):this._addEntry(a,i,s,n)},p.prototype._deleteAllRowsBelow=function(t,e){var n=e;null==e&&(n=this._getLastIndex()+1-t);for(var s=[],i=0;i<n;i++)s.push({key:this._getEntry(t+i).key,index:t+i});this._removeEntry(t,n),this.removeRows(s)},p.prototype._handleModelEvent=function(t){var e,n=t.operation,s=t.parent;e=Array.isArray(s)?s[s.length-1]:s;var i=t.index;"insert"===n?this._handleInsertEvent(e,i,t.data):"delete"===n?this._handleDeleteEvent(e,i):"refresh"===n&&this._handleRefreshEvent(e)},p.prototype._handleInsertEvent=function(t,e,n){var s=this.getIndex(t),i=this._getEntry(s).depth+1,a=s+e+1,o=n.getMetadata(n.getStart());this._insertRow(a,o,t,e,i)},p.prototype._handleDeleteEvent=function(t,n){var s=this.getIndex(t),i=this._getEntry(s),a=s+n,o=this._getEntry(a);e.Assert.assert(o.parent===i&&o.depth===i.depth+1);for(var r=a+1,h=this._getLastIndex();r<=h;){if(this._getEntry(r).depth!==o.depth)break;r+=1}this._deleteAllRowsBelow(a,1)},p.prototype._handleRefreshEvent=function(t){null==t&&this.refresh()},p.prototype._isExpandAll=function(){var t=this.m_wrapped.getCapability("fetchDescendants");return null!=this.m_collapsedKeys&&null!=t&&"disable"!==t},p.prototype._isBatchFetching=function(){return"enable"===this.m_wrapped.getCapability("batchFetch")},p.prototype.refresh=function(){this._clearAll()},p.prototype.getIndex=function(t){for(var e=this._getLastIndex(),n=0;n<=e;n++){if(this._getEntry(n).key===t)return n}return-1},p.prototype.getKey=function(t){return t<0||t>this._getLastIndex()?null:this._getEntry(t).key},p.prototype.getFetchedRange=function(){return{start:0,end:this._getLastIndex()+1}},p.prototype.getAncestors=function(t){for(var e=[],n=this.getIndex(t),s=this._getParent(n);null!=s;)e.push(s),n=this.getIndex(s),s=this._getParent(n);return e.reverse()},p.prototype.handleMaxCountReached=function(t,e){null!=e&&null!=e.error&&e.error.call(null)},p.prototype.insertRows=function(t,n,s){e.Assert.failedInAbstractFunction()},p.prototype.removeRows=function(t){e.Assert.failedInAbstractFunction()},p.prototype._getLastIndex=function(){return this.m_cache.length-1},p.prototype._getLastEntry=function(){return this.m_cache[this._getLastIndex()]},p.prototype._getEntry=function(t){return this.m_cache[t]},p.prototype._getParent=function(t){var e=this.m_cache[t];return null!=e?e.parent:null},p.prototype._addEntry=function(t,e,n,s,i){var a={key:t,depth:e,index:n,parent:s};void 0===i?this.m_cache.push(a):this.m_cache.splice(i,0,a)},p.prototype._removeEntry=function(t,e){this.m_cache.splice(t,e)},p.prototype._clearAll=function(){this.m_cache.length=0},p.prototype.getCapability=function(t){return this.m_wrapped.getCapability(t)},e.__registerWidget("oj.ojRowExpander",n.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expanded:null,expand:null,collapse:null},classNames:{root:"oj-rowexpander",icon:"oj-component-icon",clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",depth7:"oj-rowexpander-depth-7"},constants:{MAX_STYLE_DEPTH:7},_ComponentCreate:function(){this._super(),this.element[0].classList.add(this.classNames.root),this._initContent()},_initContent:function(){var t=this.options.context;if(null!==t){if(null!=t.component)this.component="function"==typeof t.component?t.component("instance"):t.component;else if(t.componentElement){var e=t.componentElement;e=e.classList.contains("oj-component-initnode")?e:e.querySelector(".oj-component-initnode"),this.component=i.__GetWidgetConstructor(e)("instance")}this.datasource=t.datasource,!this._subscribed&&this._isDataProvider()&&(this._subscribeToDataProvider(),this._subscribed=!0),this.depth=this._getDepth(t),this.rowKey=this._getRowKey(t);var n=this._getState(t),s=this._getLeaf(t);this.iconState=n||(s?"leaf":this._getDataProviderExpanded().has(this.rowKey)?"expanded":"collapsed"),this.index=this._getIndex(t),this.parentKey=this._getParentKey(t),this._addIndentation(),this._addIcon(),this._setIconStateClass(),"leaf"===this.iconState&&this.icon.setAttribute("tabindex",-1)}else a.warn("Context is not setup for the rowExpander")},_touchEndListener:function(t){t.preventDefault(),this._fireExpandCollapse()},_keyPressListener:function(t){var e=t.key||t.keyCode;(o.isSpaceBarKeyEvent(e)||o.isEnterKeyEvent(e))&&(this._fireExpandCollapse(),t.preventDefault(),t.target.focus())},_clickListener:function(t){t.preventDefault(),this._fireExpandCollapse()},_initExpanded:function(){if(!this._isDataProvider()){var t=this.options.expanded;null!=t?t&&"collapsed"===this.iconState?this._expand():t||"expanded"!==this.iconState||this._collapse():this.options.expanded="collapsed"!==this.iconState}},_isDataProvider:function(){return e.DataProviderFeatureChecker.isDataProvider(this.datasource)},_getDepth:function(t){var e=t;return t.item&&(e=t.item.metadata),this._isDataProvider()?e.treeDepth+1:e.depth},_getRowKey:function(t){var e=t;return t.item&&(e=t.item.metadata),e.key},_getState:function(t){var e=t;return t.item&&(e=t.item.metadata),e.state},_getParentKey:function(t){var e=t;return t.item&&(e=t.item.metadata),e.parentKey},_getIndex:function(t){var e=t;return t.item&&(e=t.item.metadata),this._isDataProvider()?e.indexFromParent:e.index},_getLeaf:function(t){var e=t;return t.item&&(e=t.item.metadata),e.isLeaf},_getDataProviderExpanded:function(){return this._dataSourceExpanded},_getFlattenedDataProvider:function(){return this.datasource.getExpandedObservable?this.datasource:this.datasource.dataProvider},_getChildCount:function(t){return this._isDataProvider()?(null!=t?this._getFlattenedDataProvider().dataProvider.getChildDataProvider(this.parentKey):this._getFlattenedDataProvider().dataProvider).getTotalSize():this.datasource.getWrappedDataSource().getChildCount(this.parentKey)},refresh:function(){this.element.empty(),this._initContent()},_SetupResources:function(){this._super(),this._setupResources()},_ReleaseResources:function(){this._super(),this._releaseResources()},_releaseResources:function(){this.component.element[0].removeEventListener("keydown",this.handleKeyDownCallback,!0),this.toucharea.removeEventListener("touchend",this.handleTouchEndCallback),this.toucharea.removeEventListener("click",this.handleClickCallback),this.element[0].removeEventListener("keydown",this.handleKeyPressCallback),this.component._IsCustomElement()?n(this.component.element).off("ojBeforeCurrentCell",this.handleActiveKeyChangeCallback):n(this.component.element).off("ojbeforecurrentcell",this.handleActiveKeyChangeCallback),this._isDataProvider()?(this._subscribed=!1,this._dataProviderSubscription.unsubscribe()):(this.datasource.off("expand",this.handleExpandCallback,this),this.datasource.off("collapse",this.handleCollapseCallback,this))},_destroy:function(){this._super(),this._releaseResources(),this.element[0].classList.remove(this.classNames.root),this.element.empty()},_setupResources:function(){!this._subscribed&&this._isDataProvider()&&(this._subscribeToDataProvider(),this._subscribed=!0),this.handleKeyDownCallback=this._handleKeyDownEvent.bind(this),this.component.element[0].addEventListener("keydown",this.handleKeyDownCallback,!0),"expanded"!==this.iconState&&"collapsed"!==this.iconState||(this.handleTouchEndCallback=this._touchEndListener.bind(this),this.toucharea.addEventListener("touchend",this.handleTouchEndCallback),this.handleClickCallback=this._clickListener.bind(this),this.toucharea.addEventListener("click",this.handleClickCallback),this.handleKeyPressCallback=this._keyPressListener.bind(this),this.element[0].addEventListener("keydown",this.handleKeyPressCallback),this.handleExpandCallback=this._handleExpandEvent.bind(this),this.handleCollapseCallback=this._handleCollapseEvent.bind(this),this._isDataProvider()||(this.datasource.on("expand",this.handleExpandCallback,this),this.datasource.on("collapse",this.handleCollapseCallback,this))),this.handleActiveKeyChangeCallback=this._handleActiveKeyChangeEvent.bind(this),this.component._IsCustomElement()?n(this.component.element).on("ojBeforeCurrentCell",this.handleActiveKeyChangeCallback):n(this.component.element).on("ojbeforecurrentcell",this.handleActiveKeyChangeCallback),"expanded"!==this.iconState&&"collapsed"!==this.iconState||this._initExpanded()},_subscribeToDataProvider:function(){var t=this,e=this._getFlattenedDataProvider().getExpandedObservable();t._dataProviderSubscription=e.subscribe(function(e){var n=!1,s=!1;if(t._dataSourceExpanded=e.value,"expanded"!==t.iconState||t._dataSourceExpanded.has(t.rowKey)||(n=!0,t._loading()),"collapsed"===t.iconState&&t._dataSourceExpanded.has(t.rowKey)&&(s=!0,t._loading()),s||n){var i=e.completionPromise;i&&i.then(function(){s&&t._handleExpandEvent({rowKey:t.rowKey}),n&&t._handleCollapseEvent({rowKey:t.rowKey})})}})},_expand:function(){return"collapsed"===this.iconState&&(this._isDataProvider()?this._getFlattenedDataProvider().setExpanded(this._getDataProviderExpanded().add([this.rowKey])):(this._loading(),this.datasource.expand(this.rowKey)),!0)},_collapse:function(){return"expanded"===this.iconState&&(this._isDataProvider()?this._getFlattenedDataProvider().setExpanded(this._getDataProviderExpanded().delete([this.rowKey])):(this._loading(),this.datasource.collapse(this.rowKey)),!0)},_setOption:function(t,e,n){"expanded"!==t||this._isDataProvider()||null!=n._context&&!0===n._context.internalSet?(this._super(t,e,n),"context"===t&&null!=n._context&&!0!==n._context.internalSet&&this.refresh()):e?this._expand():this._collapse()},_addIndentation:function(){var t=this.depth-1;if(t<this.constants.MAX_STYLE_DEPTH)this._appendSpacer(t);else{for(var e=1;e<=t/this.constants.MAX_STYLE_DEPTH;e++)this._appendSpacer(this.constants.MAX_STYLE_DEPTH);var n=t%this.constants.MAX_STYLE_DEPTH;n<this.constants.MAX_STYLE_DEPTH&&this._appendSpacer(n)}},_appendSpacer:function(t){var e=document.createElement("span");e.classList.add(this.classNames.indent),e.classList.add(this.classNames["depth"+t]),this.element[0].appendChild(e)},_addIcon:function(){var t=document.createElement("div");t.classList.add(this.classNames.iconspacer),this.toucharea=document.createElement("div"),this.toucharea.classList.add(this.classNames.toucharea),this.icon=document.createElement("a"),this.icon.setAttribute("href","leaf"===this.iconState?"":"#"),this.icon.setAttribute("aria-labelledby",this._getLabelledBy()),this.icon.classList.add(this.classNames.icon),this.icon.classList.add(this.classNames.clickable),this.icon.setAttribute("aria-label",this.getTranslatedString("accessibleLevelDescription",{level:this.depth})),this.toucharea.appendChild(this.icon),t.appendChild(this.toucharea),this.element[0].appendChild(t);this._focusable({element:n(this.icon),applyHighlight:!0})},_addIconClass:function(t){this.icon.classList.add(this.classNames[t])},_removeIconClass:function(t){this.icon.classList.remove(this.classNames[t])},_setIconStateClass:function(){switch(this.iconState){case"leaf":this._removeIconClass("icon"),this._removeIconClass("clickable"),this._addIconClass("leaf");break;case"collapsed":this._addIconClass("expand"),this._ariaExpanded(!1);break;case"expanded":this._addIconClass("collapse"),this._ariaExpanded(!0);break;case"loading":this._removeIconClass("clickable"),this._addIconClass("lazyload")}},_removeIconStateClass:function(){switch(this.iconState){case"leaf":this._removeIconClass("leaf"),this._addIconClass("icon"),this._addIconClass("clickable");break;case"collapsed":this._removeIconClass("expand");break;case"expanded":this._removeIconClass("collapse");break;case"loading":this._removeIconClass("lazyload"),this._addIconClass("clickable")}},_handleActiveKeyChangeEvent:function(t,e){var n;if(null==e&&(e=t.detail),null!=e.currentCell){var s="cell"===e.currentCell.type?e.currentCell.keys.row:e.currentCell.key;if(null!=e.previousValue&&(n="cell"===e.previousCurrentCell.type?e.previousCurrentCell.keys.row:e.previousCurrentCell.key),this.rowKey===s&&n!==s&&this.component._setAccessibleContext){var i,a=this.getTranslatedString("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this._getChildCount(this.parentKey)});i="collapsed"===this.iconState?this.getTranslatedString("accessibleStateCollapsed"):"expanded"===this.iconState?this.getTranslatedString("accessibleStateExpanded"):"",this.component._setAccessibleContext({context:a,state:i})}}},_handleKeyDownEvent:function(t){var e,n=i.__GetWidgetConstructor(this.component.element[0])("getContextByNode",t.target);if(null==n){var a=this.component.options.currentRow;if(null==a||null==a.rowKey)return;e=a.rowKey}else null==(e=n.key)&&(e=n.keys.row);if(this.rowKey===e){var r=t.key||t.keyCode;if(s.isMetaKeyPressed(t))if(o.isArrowRightKeyEvent(r))this._expand()&&t.preventDefault();else if(o.isArrowLeftKeyEvent(r))this._collapse()&&t.preventDefault();else if(t.altKey&&o.isNumberFiveKeyEvent(r)&&this.component._setAccessibleContext){var h;if(!this._isDataProvider()){var d=this.datasource.getAncestors(this.rowKey);if(null!=d&&d.length>0){h=[];for(var l=0;l<d.length;l++)h.push({key:d[l],label:this.getTranslatedString("accessibleLevelDescription",{level:l+1})})}}var c=this.getTranslatedString("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this._getChildCount(this.parentKey)});this.component._setAccessibleContext({context:c,state:"",ancestors:h})}}},_loading:function(){this._removeIconStateClass(),this.iconState="loading",this._setIconStateClass()},_handleExpandEvent:function(t){var e=null!=t.rowKey?t.rowKey:t.detail.key;if(e===this.rowKey){this._removeIconStateClass(),this.iconState="expanded",this._setIconStateClass(),this._ariaExpanded(!0),this._updateContextState("expanded");var n=this.options.expanded;null!=n&&n||(this._trigger("expand",null,{rowKey:e}),this._updateExpandedState(!0))}},_handleCollapseEvent:function(t){var e=null!=t.rowKey?t.rowKey:t.detail.key;if(e===this.rowKey){this._removeIconStateClass(),this.iconState="collapsed",this._setIconStateClass(),this._ariaExpanded(!1),this._updateContextState("collapsed");var n=this.options.expanded;(null==n||n)&&(this._trigger("collapse",null,{rowKey:e}),this._updateExpandedState(!1))}},_updateExpandedState:function(t){this.option("expanded",t,{changed:!0,_context:{internalSet:!0,writeback:!0}})},_updateContextState:function(t){var e=this.options.context;this._setState(e,t),this.option("context",e,{changed:!0,_context:{internalSet:!0}})},_setState:function(t,e){var n=t;t.item&&(n=t.item.metadata),n.state=e},_fireExpandCollapse:function(){var t=this.iconState;this._isDataProvider()||this._loading(),"collapsed"===t?this._isDataProvider()?this._getFlattenedDataProvider().setExpanded(this._getDataProviderExpanded().add([this.rowKey])):this.datasource.expand(this.rowKey):"expanded"===t&&(this._isDataProvider()?this._getFlattenedDataProvider().setExpanded(this._getDataProviderExpanded().delete([this.rowKey])):this.datasource.collapse(this.rowKey))},_ariaExpanded:function(t){this.icon.setAttribute("aria-expanded",t)},getNodeBySubId:function(t){if(null==t)return this.element?this.element[0]:null;var e=t.subId;return"oj-rowexpander-disclosure"!==e&&"oj-rowexpander-icon"!==e||null==this.icon?null:this.icon},getSubIdByNode:function(t){return t===this.icon?{subId:"oj-rowexpander-disclosure"}:null},_NotifyAttached:function(){this._super(),this.icon.setAttribute("aria-labelledby",this._getLabelledBy())},_getLabelledBy:function(){const t=this.element[0].parentElement.closest("[id]");if(t)return t.getAttribute("id")}})});
//# sourceMappingURL=ojrowexpander.js.map