
function saveData() {
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 8; j++) {
      let cellId = cell-${i}-${j};
      let cellValue = document.getElementById(cellId).value;
      localStorage.setItem(cellId, cellValue);
    }
  }
}

function loadData() {
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 8; j++) {
      let cellId = cell-${i}-${j};
      let savedValue = localStorage.getItem(cellId);
      if (savedValue) {
        document.getElementById(cellId).value = savedValue;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadData();
});

let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveData);

let table = document.getElementById("data-table");
table.addEventListener("input", function(event) {
  let cellId = event.target.id;
  let cellValue = event.target.value;
  localStorage.setItem(cellId, cellValue);
});
