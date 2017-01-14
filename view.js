
var PUPPIES = PUPPIES || {};

PUPPIES.view = (function(){

  var init = function vInit(callbacks) {
    _findEventSources();
    _findDynamicElements();
    _addEventListeners(callbacks);
  };

  var _findEventSources = function() {
    _$refreshButton = $("#refresh-list");
    _$newPuppyForm = $("#new-puppy");
  };

  var _findDynamicElements = function() {
    _$puppyList = $("#puppy-list");
  }

  var _addEventListeners = function(callbacks) {
    _$refreshButton.on("click", callbacks.refreshList);
    _$newPuppyForm.on("submit", callbacks.submitForm)
  };

  var refreshList = function(list) {
    for (var i = 0; i < list.length; i++) {
      var puppy = list[i];
      var $li = $("<li>");
      var name = $("<strong>").text(puppy.name);
      var breed = "(" + puppy.breed.name + "), ";
      var timestamp = $("<span>").html(puppy.created_at + " ")
      var adoptLink = $("<a>").text("adopt");
      $li.append(name)
         .append(breed)
         .append(timestamp)
         .append(adoptLink);

      _$puppyList.prepend($li);
    }
  };

  var serializeForm = function() {
    return _$newPuppyForm.serializeArray();
  }

  var _$refreshButton,
      _$puppyList,
      _$newPuppyForm;

  return {
    init: init,
    refreshList: refreshList
  };

}());
