
var PUPPIES || {};

PUPPIES.view = (function(){

  var init = function vInit(callbacks) {
    _findEventSources();
    _addEventListeners(callbacks);
  };

  var _findEventSources = function() {
    _$refreshButton = $("#refresh-list");
  };

  var _addEventListeners = function(callbacks) {
    _$refreshButton.on("click", callbacks.refreshList);
  };

  var _$refreshButton;

  return {
    init: init
  };
}());
