function displayResults(data) {
  $.each(data, function (i, res) {

    var newsData = [{
      title: res.title,
      description: res.description,
      link: res.link
    }];

    console.log(newsData);
    // $("tbody").append("<tr><td>" + res.title + "</td>" + "<td>" + res.description + "</td>" + "<td>" + res.link + "</td>");
  })
}

$.getJSON("/all", function (data) {
  // Call our function to generate a table body
  displayResults(data);
});