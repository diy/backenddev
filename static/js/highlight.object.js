/*! highlight.object.js | https://github.com/diy/highlight.object.js | Apache License (v2) */
var highlightObject=function(){Array.isArray||(Array.isArray=function(a){return""+a!==a&&"[object Array]"=={}.toString.call(a)});var c=function(a,b){return'<span class="'+b+'">'+a+"</span>"},e=function(a){this.options=a||{};this.options.tab=this.options.tab||"&nbsp;&nbsp;&nbsp;&nbsp;";this.options.maxDepth=this.options.maxDepth||-1;this.tabs={}};e.prototype.highlight=function(a){return'<span class="line">'+this.any(0,a).split("\n").join('</span>\n<span class="line">')+"</span>"};e.prototype.indent=
function(a){var b,c;if(!this.tabs[a]){c=[];for(b=0;b<a;b++)c.push(this.options.tab);this.tabs[a]=c.join("")}return this.tabs[a]};e.prototype.any=function(a,b){return"object"===typeof b&&null!==b&&!(b instanceof RegExp)?this.object(a,b):this.atom(b)};e.prototype.object=function(a,b){if(Array.isArray(b))return this.array(a,b);var d,e,f;if(a===this.options.maxDepth)return c("{","bracket curly")+" "+c("...","ellipsis")+" "+c("}","bracket curly");e=[];for(d in b)(this.options.inherited||b.hasOwnProperty(d))&&
e.push(this.field(a+1,b,d));return e.length?(d=c("{","bracket curly")+"\n"+this.indent(a+1),f="\n"+this.indent(a)+c("}","bracket curly"),d+e.join(c(",","comma")+"\n"+this.indent(a+1))+f):c("{}","bracket curly")};e.prototype.array=function(a,b){var d,e,f;if(b.length){if(a===this.options.maxDepth)return c("[","bracket square")+" "+c("...","ellipsis")+" "+c("]","bracket square");f=[];for(d=0;d<b.length;d++)f.push(this.any(a+1,b[d]));d=c("[","bracket square")+"\n"+this.indent(a+1);e="\n"+this.indent(a)+
c("]","bracket square");return d+f.join(c(",","comma")+"\n"+this.indent(a+1))+e}return c("[]","bracket square")};e.prototype.field=function(a,b,d){return c('"'+d+'"',"string key")+c(":","colon")+" "+this.any(a,b[d])};e.prototype.atom=function(a){var b;b="";var d=String(a);if(a instanceof RegExp)b="regexp";else if("string"===typeof a)b="string",d='"'+d.replace(/[\\"]/g,"\\$&").replace(/\u0000/g,"\\0").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")+'"';else if("boolean"===
typeof a)b="keyword bool";else if("number"===typeof a)b=isNaN(a)?"number nan keyword":"number";else if("function"===typeof a){b=(a=String(a).match(/^function [^(]*\(([^)]*)\)/))&&a[1].length?a[1].split(","):[];for(a=0;a<b.length;a++)b[a]=c(b[a],"arg");d=c("function","keyword function")+c("(","paren")+b.join(c(",","comma")+" ")+c(")","paren")+" "+c("{","bracket curly")+" "+c("...","ellipsis")+" "+c("}","bracket curly");b=""}else if(null===a||"undefined"===typeof a)b="keyword";return c(d,b)};return function(a,
b){return(new e(b)).highlight(a)}}();