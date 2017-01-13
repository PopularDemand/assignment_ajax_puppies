
var PUPPIES = PUPPIES || {};

PUPPIES.model = (function(){

  var list;

  var getList = function() {
    _refreshList();
    return list;
  };

  var _refreshList = function(e) {
    $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      success: _refreshListSuccess,
      error: _refreshListError
    });
  };

  var _refreshListSuccess = function(response) {
    var response = response;
    var parsedResponse = response.map(function(puppy) {
      return {
        name: puppy.name,
        createdAgo: _minutesAgo(puppy.created_at),
        breed: puppy.breed.name
      };
    });
    return parsedResponse;
  };

  var _refreshListError = function(e) {
    list = [];
  };

  var _minutesAgo = function(timeString) {
// TODO
    var createdDate = new Date(timeSTring);
    var currentDate = new Date();
    var result = currentDate - createdDate;
  };

  return {
    getList: getList
  };

}());
