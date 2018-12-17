'use strict';

if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var itemHandler = function (e) {
  if ( e.type == 'click' || e.keyCode == 0 || e.keyCode == 32 || e.keyCode == 13) {
    var classlist = this.classList;
    var disabled = classlist.contains('boxBodyDisabled');

    if (!disabled) {
      classlist.toggle('boxDescriptionSelected');
    }
  }
}

var clickHandler = function (e) {
  e.preventDefault();
  var classlist = this.parentNode.parentNode.parentNode.querySelector('boxBody').classList;
  var disabled = classlist.contains('boxBodyDisabled');

  if (!disabled) {
    classlist.toggle('boxBodySelected');
  }
}

var items = document.querySelectorAll('.boxBody .product-card');
var itemsLinks = document.querySelectorAll('.boxBody .boxLink');
var eventList = ['click', 'keydown'];

items.forEach(function (item) {
  eventList.forEach(function (eventName) {
    item.addEventListener(eventName, itemHandler);
  });
});

itemsLinks.forEach(function (item) {
  item.addEventListener('click', clickHandler);
});