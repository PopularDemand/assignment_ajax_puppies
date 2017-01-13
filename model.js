
var PUPPIES = PUPPIES || {};

PUPPIES.model = (function(){

  var list;

  var getList = function() {
    if (list) {
      return $.Deferred().resolve( list );
    } else {
      return refreshList();
    }
  };

  var refreshList = function(e) {
    return $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      success: _refreshListSuccess,
      error: _refreshListError
    });
  };

  var _refreshListSuccess = function(response) {
    var response = response;
    list = response.map(function(puppy) {
      return {
        name: puppy.name,
        createdAgo: _minutesAgo(puppy.created_at),
        breed: puppy.breed.name
      };
    });
    console.log(list)
  };

  var _refreshListError = function(e) {
    list = [];
  };

  var _minutesAgo = function(timeString) {
    var createdDate = new Date(timeString);
    var currentDate = new Date();
    var result = currentDate - createdDate / 3600;
    return "created " + result + " minutes ago ";
  };

  return {
    getList: getList,
    refreshList: refreshList
  };

}());
