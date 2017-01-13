
var PUPPIES = PUPPIES || {};

PUPPIES.controller = (function(model, view){

  var refreshList = function(e) {
    e.preventDefault();
    var list = model.getList();
    view.refreshList(list);
  };

  var callbacks = {
    refreshList: refreshList
  };

  var init = function cInit() {
    view.init(callbacks);
  };

  return {
    init: init
  };
}(PUPPIES.model, PUPPIES.view));
