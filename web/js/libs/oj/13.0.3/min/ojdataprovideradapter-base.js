/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojeventtarget"],function(t,s){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;class e{constructor(t){var s;this.dataSource=t,this.AsyncIterable=(s=class{constructor(t){this._asyncIterator=t,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},Symbol.asyncIterator,s),this.AsyncIterator=class{constructor(t,s){this._nextFunc=t,this._params=s,this._fetchFirst=!0}next(){const t=this._fetchFirst;return this._fetchFirst=!1,this._nextFunc(this._params,t)}},this.AsyncIteratorYieldResult=class{constructor(t,s){this._parent=t,this.value=s,this[e._VALUE]=s,this[e._DONE]=!1}},this.AsyncIteratorReturnResult=class{constructor(t,s){this._parent=t,this.value=s,this[e._VALUE]=s,this[e._DONE]=!0}},this.FetchListResult=class{constructor(t,s,i,a){this._parent=t,this.fetchParameters=s,this.data=i,this.metadata=a,this[e._FETCHPARAMETERS]=s,this[e._DATA]=i,this[e._METADATA]=a}},this.ItemMetadata=class{constructor(t,s){this._parent=t,this.key=s,this[e._KEY]=s}},this.SortCriterion=class{constructor(t,s,i){this._parent=t,this.attribute=s,this.direction=i,this[e._ATTRIBUTE]=s,this[e._DIRECTION]=i}},this.DataProviderMutationEventDetail=class{constructor(t,s,i,a){this._parent=t,this.add=s,this.remove=i,this.update=a,this[e._ADD]=s,this[e._REMOVE]=i,this[e._UPDATE]=a}},this.DataProviderOperationEventDetail=class{constructor(t,s,i,a,r){this._parent=t,this.keys=s,this.metadata=i,this.data=a,this.indexes=r,this[e._KEYS]=s,this[e._METADATA]=i,this[e._DATA]=a,this[e._INDEXES]=r}},this.DataProviderAddOperationEventDetail=class{constructor(t,s,i,a,r,h,n,c){this._parent=t,this.keys=s,this.afterKeys=i,this.addBeforeKeys=a,this.parentKeys=r,this.metadata=h,this.data=n,this.indexes=c,this[e._KEYS]=s,this[e._AFTERKEYS]=i,this[e._ADDBEFOREKEYS]=a,this[e._METADATA]=h,this[e._DATA]=n,this[e._INDEXES]=c}}}getCapability(t){return t===e._SORT&&"full"===this.dataSource.getCapability(t)?{attributes:"multiple"}:"fetchByKeys"===t||"fetchByOffset"===t?{implementation:"lookup"}:null}addListener(t,s){this._eventHandlerFuncs[t]=s.bind(this),this.dataSource.on(t,this._eventHandlerFuncs[t])}removeListener(t){this.dataSource.off(t,this._eventHandlerFuncs[t])}removeAllListeners(){this._eventHandlerFuncs={}}}return e._SORT="sort",e._DATA="data",e._KEY="key",e._ATTRIBUTE="attribute",e._DIRECTION="direction",e._VALUE="value",e._DONE="done",e._FETCHPARAMETERS="fetchParameters",e._METADATA="metadata",e._KEYS="keys",e._INDEXES="indexes",e._ADD="add",e._REMOVE="remove",e._UPDATE="update",e._AFTERKEYS="afterKeys",e._ADDBEFOREKEYS="addBeforeKeys",s.EventTargetMixin.applyMixin(e),t._registerLegacyNamespaceProp("DataSourceAdapter",e),e});
//# sourceMappingURL=ojdataprovideradapter-base.js.map