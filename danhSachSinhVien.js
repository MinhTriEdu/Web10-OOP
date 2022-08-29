function DanhSachSinhVien() {
  this.list = [];

  this.themSinhVien = function (sinhVien) {
    this.list.push(sinhVien);
  };

  this.timSinhVien = function (masv_input) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == masv_input) {
        return i;
      }
    }
    return -1;
  };

  this.xoaNhanVien = function (id) {
    this.list.splice(id, 1);
  };
}

// xoaNhanVien(id){}
// xoaNhanVien=function(id){}

// function name(){}
// var name=function(){}
