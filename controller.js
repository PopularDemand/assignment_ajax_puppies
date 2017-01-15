
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
    var apiData = {}
    formData.forEach(function(prop) {
      apiData[prop.name] = prop.value
    })
    var additionPromise = model.addPuppy(apiData);
    additionPromise.then(view.refreshList);
  };

  var adoptPuppy = function(e) {
    e.preventDefault();
    var puppyId = $(e.target).attr('data-id');
    var removalPromise = model.removePuppy(puppyId);
    removalPromise.then(view.refreshList)
  }

  var callbacks = {
    refreshList: refreshList,
    submitForm: submitForm,
    adoptPuppy: adoptPuppy
  };

  var init = function cInit() {
    view.init(callbacks);
  };

  return {
    init: init
  };

}(PUPPIES.model, PUPPIES.view));
