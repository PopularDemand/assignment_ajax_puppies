var PUPPIES = PUPPIES || {};

PUPPIES.model = (function($){

  var list;

  var getList = function() {
    var listPromise = _refreshList();
    // Same this below
    // return listPromise.then(function(listData) {
    //   return _formatList(listData);
    // })
    return listPromise
  };

  var removePuppy = function(id) {
    var removalPromise = _removePuppyData(id)
          .then(function(data){
            return getList();
          });
    return removalPromise;
  };

  var addPuppy = function(puppyData) {
    var postPromise = _sendPuppyData(puppyData)
          .then(function(data) {
            return getList();
          });
    return postPromise
  };

  var _refreshList = function() {
    var apiGetReq = $.ajax({
      method: "GET",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      async: true,
      error: _refreshListError
    })
    .then(_formatList);
    return apiGetReq;
  };

  var _refreshListError = function(e) {
    list = [];
  };

  var _sendPuppyData = function(puppyData) {
    return $.ajax({
      type: "POST",
      url: "https://ajax-puppies.herokuapp.com/puppies.json",
      data: JSON.stringify(puppyData),
      async: true,
      dataType: "json",
      contentType: "application/json",
      success: function(data) { console.log(data) },
      error: function(error) { console.log(error.message) }
    })
  };

  var _removePuppyData = function(id) {
    var url = 'https://ajax-puppies.herokuapp.com/puppies/' + id + '.json';
    return $.ajax({
      type: 'DELETE',
      url: url
    })
  }

  var _formatList = function(apiList) {
    return apiList.map(function(puppy) {
      return {
        name: puppy.name,
        breed: puppy.breed.name,
        createdAgo: puppy.created_at,
        id: puppy.id
      }
    });
  };

  var _dummyList = function(error) {
    return {
      name: "Error Pup",
      breed: "Cat",
      createdAgo: "do not adopt"
    }
  }

  return {
    getList: getList,
    addPuppy: addPuppy,
    removePuppy: removePuppy
  };

})($);
