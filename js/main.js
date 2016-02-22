"use strict";

function applyDOM(a, b) {
  if (document.querySelector(a)) {
    var elms = document.querySelectorAll(a);
    Array.prototype.map.call(elms, function(elm){
      elm.innerHTML = b;
    });
  }
}
function applySRC(a, b) {
  if (document.querySelector(a)) {
    var elms = document.querySelectorAll(a);
    Array.prototype.map.call(elms, function(elm){
      elm.src = b;
    });
  }
}

function b(obj){
  var vals = [
    [".rpName", obj[`name`] ]
  ];
  vals.forEach( function(a){ applyDOM(a[0],a[1]); } );
  if (typeof obj[`image`] === "undefined"){
    obj[`image`] = ``;
  }
  var srcs = [
    [".rpImage", obj[`image`] ]
  ];
  srcs.forEach( function(a){ applySRC(a[0],a[1]); } );
}

function applyJSONLD(dom, fn){
  var vals = dom.querySelectorAll('script[type="application/ld+json"]');
  Array.prototype.map.call(vals, function(val) {
    return JSON.parse(val.innerHTML);
  }).forEach(function(obj) {
    fn(obj);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  var content = document.querySelector('template').content;
  document.body.appendChild(document.importNode(content, true));
  applyJSONLD(document, b);
});
