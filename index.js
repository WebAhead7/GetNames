let submit = document.querySelector(".submit");
submit.addEventListener("submit", function (event) {
  event.preventDefault();
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let id = document.querySelector("#id").value;
  getNames(fname, lname, id);
});

// sending the requests to the server::

function getNames(name, family, id) {
  fetch(`/search?name=${name}&family=${family}&id=${id}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      console.log(data);
    });
}
