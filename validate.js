function Validation() {
  this.kiemTraRong = function (id, err) {
    var idtag = document.getElementById(id);
    var errtag = document.getElementById(err);
    if (idtag.value.trim() === "") {
      errtag.innerHTML = "Không được để trống nha";
      idtag.style.border = "1px solid red";
      errtag.style.color = "red";
      return true;
    }
    errtag.innerHTML = "";
    idtag.style.border = "1px solid #ced4da";
    errtag.style.color = "black";
    return false;
  };

  this.kiemTraKhoaHoc = function (id, err) {
    var idtag = document.getElementById(id);
    var errtag = document.getElementById(err);
    if (idtag.value.trim() === "Chọn khóa học") {
      errtag.innerHTML = "Phải chọn khoá học nha";
      idtag.style.border = "1px solid red";
      errtag.style.color = "red";
      return true;
    }
    errtag.innerHTML = "";
    idtag.style.border = "1px solid #ced4da";
    errtag.style.color = "black";
    return false;
  };

  this.kiemTraEmail = function (id, err) {
    var idtag = document.getElementById(id);
    var errtag = document.getElementById(err);
    var regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (idtag.value.match(regex)) {
      errtag.innerHTML = "";
      idtag.style.border = "1px solid #ced4da";
      errtag.style.color = "black";
      return false;
    } else {
      errtag.innerHTML = "email sai cú pháp";
      idtag.style.border = "1px solid red";
      errtag.style.color = "red";
      return true;
    }
  };

  // ít nhất 8 kí tự, tối thiểu một chữ cái và một số
  this.kiemTraMatKhau = function (id, err) {
    var idtag = document.getElementById(id);
    var errtag = document.getElementById(err);
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (idtag.value.match(regex)) {
      errtag.innerHTML = "";
      idtag.style.border = "1px solid #ced4da";
      errtag.style.color = "black";
      return false;
    } else {
      errtag.innerHTML = "Mật khẩu ít nhất 8 kí và một từ viết hoa tự nhen";
      idtag.style.border = "1px solid red";
      errtag.style.color = "red";
      return true;
    }
  };
}
