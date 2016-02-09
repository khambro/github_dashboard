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
    console.log(data);


  });



  $.get("/repos", function(repos) {
      console.log(repos[5]["name"]);
      for (var i = 0; i < 10; i++) {
        var repo = $("<div>");
        var title = $("<h1>");
        var site = $("<h2>");
        repo.append(title);
        repo.append(site);
        var name = repos[i]["name"];
        var url  = repos[i]["url"];
        var language = repos[i]["language"];
        title.text(name);
        site.text(url)
        console.log(url)
        console.log(name)
        console.log(language)
        $("#repo-container").append(repo);
      };

      // console.log(repos);
  });


  $.get("/user/info", function(response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
      response[i].name = response[i].flavor;
      response[i].y    = response[i].votes;
    }

    // var pieData = response.map(function(pie) {
    //   return {name: pie.flavor, y: pie.votes};
    // });

    $("#chart-container").highcharts({
      chart: {
        type: "pie"
      },
      title: {
        text: "Languages Used"
      },
      series: [{
        name: "Pies",
        data: response
      }]
    });

  });




});
