var addBtn = document.getElementById('add');

addBtn.addEventListener("click", function (e) {
  var li = document.createElement("label");
  var text = document.getElementById("text").value;
  if (!text) {
    alert('Empty input!');
    return;
  }
  var ll = '<input type="checkbox" id="pickl" name="pickles" value="pickles"><span>' + text + '</span><button>Delete</button>';
  li.innerHTML = ll;
  document.getElementById("shopingList").appendChild(li);
})

var labels = document.querySelectorAll('#shopingList label');

for (var i = 0; i < labels.length; i++) {
  var labell = labels[i];
  labell.onclick = function (event) {
    var target = event.target;
    if (target.tagName != 'BUTTON') return;
    this.remove();
  };
};



