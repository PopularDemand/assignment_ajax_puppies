
var PUPPIES = PUPPIES || {};

PUPPIES.model = (function(){

  var list;

  var refreshList = function(e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      success: refreshListSuccess,
      error: refreshListError
    });
  };

  var refreshListSuccess = function(e) {
    var response = this.responseJSON;
    var parsedResponse = response.map(function(puppy) {
      return {
        name: puppy.name,
        createdAgo: minutesAgo(puppy.created_at),
        breed: puppy.breed.name
      }
    })
  };

  var refreshListError = function(e) {
    list = [];
  }

  var getList = function() {
    return list;
  }

  var _minutesAgo(timeString) {
    // TODO 
    // new Date(timeSTring)
  }

  return {
    refreshList: refreshList,
    getList: getList
  };
}());
