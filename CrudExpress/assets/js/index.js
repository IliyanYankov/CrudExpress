//const { $where } = require("../../server/model/model");

$("#add_user").submit(function (event) {
  alert("Data inserted");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  let unindexed_array = $(this).serializeArray();
  let data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(unindexed_array);

  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    let request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Are you sure?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted");
        location.reload();
      });
    }
  });
}
