
var PUPPIES = PUPPIES || {};

PUPPIES.controller = (function(model, view){

  var refreshList = function(e) {
    e.preventDefault();
    var listPromise = model.getList();
    listPromise.done(view.refreshList);
  };

  var submitForm = function(e) {
    e.preventDefault();
    var formData = view.serializeForm();
    model.addPuppy(formData);
  }

  var callbacks = {
    refreshList: refreshList,
    submitForm: submitForm
  };

  var init = function cInit() {
    view.init(callbacks);
  };

  return {
    init: init
  };

}(PUPPIES.model, PUPPIES.view));
