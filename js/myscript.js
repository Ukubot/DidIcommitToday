YUI().use('yql', function(Y){

  var details = {};
  var url1 = "https://api.github.com/users/ukubot";
  $.getJSON(url1, function(detail) {
  console.log(detail);
  console.log(detail.followers);
  $("#followersID").append(detail.followers);
  });

});
