function TaskList() {
  this.arr = [];

  this.addTask = function (task) {
    this.arr.push(task);
  };

  this._findIndex = function (id) {
    var viTri = -1;
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].id == id) {
        viTri = i;
        break;
      }
    }
    return viTri;
  };

  this._deleteToDo = function (id) {
    console.log("ok");
    console.log(id);
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].id == id) {
        this.arr.splice(i, 1);
        break;
      }
    }
  };

  this.getTaskById = function (id) {
    var viTri = this._findIndex(id);
    if (viTri != -1) {
      return this.arr[viTri];
    }
  };

  this.updateTask = function (id) {
    var index = this._findIndex(id);
    if (index !== -1) {
      if (this.arr[index].status === "todo") {
        this.arr[index].status = "completed";
      } else {
        this.arr[index].status = "todo";
      }
    }
  };
}
