//GET INPUT ELEMENT
let filterInput = document.getElementById("filterInput");

// GET EVENT LISTENER

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  //GET NAMES UL

  let ul = document.getElementById("names");

  // GET LIs from ul

  let li = ul.querySelectorAll("li.collection-item");

  // LOOP TRU COLLECTION-ITEMS LIs

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    // IF MATCHED
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
