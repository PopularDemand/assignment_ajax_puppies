
var PUPPIES = PUPPIES || {};

PUPPIES.controller = (function(model, view){

  var refreshList = function(e) {
    e.preventDefault();
    // TODO
    var listPromise = model.refreshList();
    listPromise.done(function(){
      view.refreshList(model.list);
    });
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
