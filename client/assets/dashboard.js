$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/auth/user",
  }).then((res) => console.log(res));
});
