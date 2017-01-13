
var PUPPIES || {};

PUPPIES.model = (function(){

  var list;

  var refreshListSuccess = function(e) {
    list = JSON.parse(this.responseText);
  };

  var refreshList = function(e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      success: refreshListSuccess,
      // TODO
        complete: ,
        error:
    });
  };

  return {
    refreshList: refreshList
  };
}());
