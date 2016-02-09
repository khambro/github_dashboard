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


});
