define(["require","exports","knockout","ojs/ojbootstrap","./appController","ojs/ojknockout","ojs/ojmodule","ojs/ojnavigationlist","ojs/ojbutton","ojs/ojtoolbar"],(function(require,o,e,t,n){"use strict";function d(){e.applyBindings(n.default,document.getElementById("globalBody"))}Object.defineProperty(o,"__esModule",{value:!0}),(0,t.whenDocumentReady)().then((function(){document.body.classList.contains("oj-hybrid")?document.addEventListener("deviceready",d):d()}))}));