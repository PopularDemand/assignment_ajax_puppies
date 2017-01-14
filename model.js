
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
      error: _refreshListError
    });
  };

  var _refreshListError = function(e) {
    list = [];
  };

  var addPuppy = function() {

  }

  return {
    refreshList: refreshList,
    getList: getList
  };

}());
