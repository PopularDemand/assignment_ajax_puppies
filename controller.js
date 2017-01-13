
var PUPPIES = PUPPIES || {};

PUPPIES.controller = (function(model, view){

  var refreshList = function(e) {
    e.preventDefault();
    var listPromise = model.refreshList();
    listPromise.done(view.refreshList);
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
