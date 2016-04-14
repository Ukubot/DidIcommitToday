YUI().use('yql', function(Y){

  var details = {};
  var url1 = "https://github.com/Ukubot";

  var query = 'select * from  where url = "' + url1 + '"';
  var q = Y.YQL(query, function(r){
    console.log(q);

    // var previews = results.forEach(function(feedItem, idx) {
    //   var contentPreview = document.createElement("div");
    //   contentPreview.innerHTML = '<div class="sup">'+
    //   "</div>";
    //
    //   $(".commits").append(contentPreview);
    // });
  });
});
