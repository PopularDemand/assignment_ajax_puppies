
var PUPPIES || {};

PUPPIES.controller = (function(model, view){

  var callbacks = {
    refreshList: model.refreshList
  };

  var init = function cInit() {
    view.init(callbacks);
  };

  return {
    init: init
  };
}(PUPPIES.model, PUPPIES.view));
