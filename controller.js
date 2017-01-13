
var PUPPIES = PUPPIES || {};

PUPPIES.controller = (function(model, view){


  var callbacks = {
    refreshList: refreshList
  };

  var refreshList = function(e) {
    var list = model.getList;
    view.refreshList(list);
  }

  var init = function cInit() {
    view.init(callbacks);
  };

  return {
    init: init
  };
}(PUPPIES.model, PUPPIES.view));
