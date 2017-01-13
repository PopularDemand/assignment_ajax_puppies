
var PUPPIES = PUPPIES || {};

PUPPIES.view = (function(){

  var init = function vInit(callbacks) {
    _findEventSources();
    _addEventListeners(callbacks);
  };

  var _findEventSources = function() {
    _$refreshButton = $("#refresh-list");
  };

  var _findDynamicElements = function() {
    _$puppyList = $("#puppy-list");
  }

  var _addEventListeners = function(callbacks) {
    _$refreshButton.on("click", callbacks.refreshList);
  };

  var refreshList = function(list) {
    for (var i = 0; i < list.length; i++) {
      var puppy = list[i];
      var $li = $("<li>");
      var name = $("<strong>").text(puppy.name);
      var breed = "(" + puppy.breed + "), ";
      var adoptLink = $("<a>").text("adopt");
      $li.html(name + breed + puppy.createdAgo + "--" + adoptLink);

      _$puppyList.prepend($li);
    }
  };

  var _$refreshButton,
      _$puppyList;

  return {
    init: init,
    refreshList: refreshList
  };

}());
