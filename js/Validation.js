function Validation() {
  this.kiemTraRong = function (input) {
    if (input === "") {
      alert("Task Trống!!!");
      return false;
    } else {
      return true;
    }
  };

  this.kiemTraTrung = function (input, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].taskName.toLowerCase() === input.toLowerCase()) {
        alert("Task đã tồn tại!!!");
        return false;
      }
    }
    alert("Thêm task thành công!");
    return true;
  };
}
