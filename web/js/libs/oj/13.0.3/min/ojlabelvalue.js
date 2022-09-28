/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojcomponentcore","ojs/ojlabel","ojs/ojcore-base"],function(e,t,a,l){"use strict";function i(e){var t,a,l=e.element;this.createDOM=function(){l.classList.add("oj-label-value","oj-form");var e=document.createElement("div");for(e.classList.add("oj-flex"),e.setAttribute("data-oj-context",""),e.setAttribute("data-oj-internal",""),(t=document.createElement("div")).classList.add("oj-flex-item"),t.setAttribute("data-oj-context",""),t.setAttribute("data-oj-internal",""),(a=document.createElement("div")).classList.add("oj-flex-item"),a.setAttribute("data-oj-context",""),a.setAttribute("data-oj-internal","");l.firstElementChild;){var i=l.firstElementChild;switch(i.getAttribute("slot")){case"label":t.appendChild(i);break;case"value":a.appendChild(i),"OJ-FORM-LAYOUT"===i.tagName&&a.classList.add("oj-formlayout-nested-formlayout");break;default:l.removeChild(i)}}e.appendChild(t),e.appendChild(a),l.appendChild(e)},this.updateDOM=function(){var e=function(){for(var e=l.parentElement;e;e=e.parentElement)if(-1!==e.tagName.indexOf("-"))return e;return null}(),i=function(e){var t="top";"inherit"===l.labelEdge?e&&"labelEdge"in e&&(t=e.labelEdge):t=l.labelEdge;return t}(e),o="start"===i?function(e){var t="33%";if("inherit"===l.labelWidth){if(e&&"labelWidth"in e){t=e.labelWidth;var a=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);switch(a[2]){case"vw":case"vmin":case"vmax":case"%":var i=Number(l.getAttribute("data-oj-colspan")),o=l.getAttribute("data-oj-column-gap");i>0&&(t="calc((("+t+" / "+i+") - (("+o+" * ("+(i-1)+") * "+a[1]/i/100+")))")}}}else t=l.labelWidth;return t}(e):"100%",r=function(e){var t="column";e&&"direction"in e&&(t=e.direction);return t}(e);"start"===i?(l.classList.add("oj-formlayout-labels-inline"),l.classList.remove("oj-form-control-label-inside")):"inside"===i?(l.classList.add("oj-form-control-label-inside"),l.classList.remove("oj-formlayout-labels-inline")):(l.classList.remove("oj-formlayout-labels-inline"),l.classList.remove("oj-form-control-label-inside")),"row"===r?l.classList.add("oj-formlayout-form-across"):l.classList.remove("oj-formlayout-form-across"),t.style.flexGrow="0",t.style.flexShrink="1",t.style.flexBasis=o,t.style.width=o,t.style.maxWidth=o,a.style.flex="1 1 0"}}var o;l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l,(o={properties:{colspan:{type:"number",value:1},labelEdge:{type:"string",enumValues:["inherit","inside","start","top"],value:"inherit"},labelWidth:{type:"string",value:"inherit"}},methods:{getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}}).extension._CONSTRUCTOR=i,l.CustomElementBridge.register("oj-label-value",{metadata:l.CollectionUtils.mergeDeep(o,{properties:{labelEdge:{binding:{provide:[{name:"containerLabelEdge"},{name:"labelEdge",transform:{top:"provided",start:"provided"}}],consume:{name:"containerLabelEdge"}}},labelWidth:{binding:{provide:[{name:"labelWidth"}]}}}})})});
//# sourceMappingURL=ojlabelvalue.js.map