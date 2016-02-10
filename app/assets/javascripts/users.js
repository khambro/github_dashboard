$(document).ready(function() {

  $.get("/user/info", function(data) {
    $(".username").html(data.login);
    $(".following").html(data.following);
    $(".following").html(data.following);
    $(".followers").html(data.followers);
    $(".public_repos").html(data.public_repos);
    $(".private_repos").html(data.private_repos);
    $(".public_gists").html(data.public_gists);
    $(".private_gists").html(data.private_gists);
    $(".location").html(data.location);
    $(".avatar").attr("src", data.avatar_url);
    // console.log(data);


  });



  $.get("/repos", function(repos) {
      console.log(repos[5]);
      for (var i = 0; i < 10; i++) {
        var repo = $("<div>");
        var title = $("<h3>");
        var site = $("<a href>");
        repo.append(title);
        repo.append(site);
        var name = repos[i]["name"];
        var url  = repos[i]["clone_url"];
        var language = repos[i]["language"];
        title.text(name);
        site.text(url)
        // text.link('href', url);
        // site.write('Your Title'.link(url));
        // console.log(url)
        // console.log(name)
        // console.log(language)
        $("#repo-container").append(repo);
      };


  });


  $.get("/languages", function(languages) {
    

    var arr = []
    for (var key in languages) {
      arr.push({name: key, y: languages[key].length})
    };

    console.log(arr);


    $("#chart-container").highcharts({
      chart: {
        type: "pie"
      },
      title: {
        text: "Languages Used"
      },
      series: [{
        name: "Languages",
        data: arr
      }]
    });

  });




});
