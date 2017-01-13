
var PUPPIES = PUPPIES || {};

PUPPIES.model = (function(){

  var list;

  var refreshList = function(e) {
    return $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      error: _refreshListError
    });
  };

  var _refreshListError = function(e) {
    list = [];
  };

  return {
    refreshList: refreshList
  };

}());
