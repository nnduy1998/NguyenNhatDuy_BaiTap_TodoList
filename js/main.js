var taskList = new TaskList();
var val = new Validation();
getLocalStorege();

function checkInput() {
  var _taskName = document.getElementById("newTask").value;
  var isValid = true;
  isValid =
    val.kiemTraRong(_taskName) && val.kiemTraTrung(_taskName, taskList.arr);
  return isValid;
}

function addTask(event) {
  event.preventDefault();
  if (checkInput()) {
    var _id = Math.random();
    var _taskName = document.getElementById("newTask").value;
    var _status = "todo";
    var task = new Task(_id, _taskName, _status);
    taskList.addTask(task);
    createTable(taskList.arr);
    setLocalStorage();
  }
}

//create Table
function createTable(arr) {
  var contentTodo = "";
  var contentCompleted = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].status === "todo") {
      contentTodo += `
      <li>
          <span>${arr[i].taskName}</span>
          <div class="buttons">
              <button class="remove" onclick="deleteToDo('${arr[i].id}')">
                  <i class="fa fa-trash-alt"></i>
              </button>

              <button class="complete" onclick="changeStatus('${arr[i].id}')">
                  <i class="far fa-check-circle"></i>
                  <i class="fas fa-check-circle"></i>
              </button>
          </div>
      </li>`;
    } else if (arr[i].status === "completed") {
      contentCompleted += `
      <li>
          <span>${arr[i].taskName}</span>
          <div class="buttons">
              <button class="remove" onclick="deleteToDo('${arr[i].id}')">
                  <i class="fa fa-trash-alt"></i>
              </button>

              <button class="complete" onclick="changeStatus('${arr[i].id}')">
                  <i class="far fa-check-circle"></i>
                  <i class="fas fa-check-circle"></i>
              </button>
          </div>
      </li>
  `;
    }
  }
  getEle("todo").innerHTML = contentTodo;
  getEle("completed").innerHTML = contentCompleted;
}

//Delete Task
function deleteToDo(id) {
  taskList._deleteToDo(id);
  alert("Xóa thành công!!!");
  createTable(taskList.arr);
  setLocalStorage();
}

//Change Status
function changeStatus(id) {
  taskList.updateTask(id);
  alert("Thay đổi trạng thái Task thành công!!!");
  createTable(taskList.arr);
  setLocalStorage();
}

//setLocalStorage
function setLocalStorage() {
  //chuyển kiểu JSON => String (JSON.stringify)
  var arrString = JSON.stringify(taskList.arr);
  //Lưu xuống localStorage
  localStorage.setItem("TASKLIST", arrString);
}

//getLocalStorage
/**
 * Lấy danh sách sinh viên từ localStorage
 * chuyển kiểu String => JSON (JSON.parse)
 */
function getLocalStorege() {
  if (localStorage.getItem("TASKLIST")) {
    taskList.arr = JSON.parse(localStorage.getItem("TASKLIST"));
    createTable(taskList.arr);
  }
}

function getEle(id) {
  return document.getElementById(id);
}
