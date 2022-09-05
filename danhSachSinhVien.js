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
    //khong tim thay vi tri nao co masv tim kiem thi tra ve -1
    return -1;
  };

  this.xoaNhanVien = function (id) {
    //xoa phan tu trong mang bang splice, vi tri bat dau la id, va phan tu xoa la 1
    this.list.splice(id, 1);
  };
  this.timSinhVienTheoMa = function (id) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == id) {
        return this.list[i];
      }
    }
  };
  this.capNhat = function (sv) {
    var index = this.timSinhVien(sv.maSV);
    if (index !== -1) {
      this.list[index] = sv;
      // this.list.splice(index, 1, sv);
    }
  };
  // Abc
  // abc
  //  index of => a
  this.search = function (keyword) {
    var arr = [];
    for (var i = 0; i < this.list.length; i++) {
      if (
        this.list[i].tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        arr.push(this.list[i]);
      }
    }
    return arr;
  };
}

// xoaNhanVien(id){}
// xoaNhanVien=function(id){}

// function name(){}
// var name=function(){}
