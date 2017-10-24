function displayResults(data) {
  $.each(data, function (i, res) {
    console.log(res);
    $("tbody").append("<tr><td>" + res.title + "</td>" + "<td>" + res._id + "</td>" + "<td>" + res.link + "</td>");
  })
}

$.getJSON("/all", function (data) {
  // Call our function to generate a table body
  displayResults(data);
});