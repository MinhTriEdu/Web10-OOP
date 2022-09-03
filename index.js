var dssv = new DanhSachSinhVien();

function getEle(id) {
  return document.getElementById(id);
}

function layDuLieuDauVao() {
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var email = getEle("txtEmail").value;
  var matKhau = getEle("txtPass").value;
  var ngaySinh = getEle("txtNgaySinh").value;
  var khoaHoc = getEle("khSV").value;
  var diemToan = getEle("txtDiemToan").value;
  var diemLy = getEle("txtDiemLy").value;
  var diemHoa = getEle("txtDiemHoa").value;

  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  );
  // sinhVien.tinhDiemTrungBinh();
  return sinhVien;
}

function taoBang(arr) {
  getEle("tbodySinhVien").innerHTML = "";
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    content += `
    <tr>
    <td>${arr[i].maSV}</td>
    <td>${arr[i].tenSV}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].ngaySinh}</td>
    <td>${arr[i].khoaHoc}</td>
    <td>${arr[i].DTB}</td>
    <td class='btn btn-danger' onclick='deleteStudent("${arr[i].maSV}")'>Xóa</td>
    <td class='btn btn-success' onclick='pushToForm("${arr[i].maSV}")'>Cập nhật</td>
    </tr>
    `;
  }
  getEle("tbodySinhVien").innerHTML = content;
}

function deleteStudent(id) {
  // id = masv
  // tim kiem bang masv, ham se tra ve index, la mot vi tri xuat hien cua ma trong mang, neu khong xuat hien thi tra ve -1
  var index = dssv.timSinhVien(id);
  //ham xoa nhan vien, xoa theo vi tri index tim duoc, neu index ===-1 thi khong xoa
  dssv.xoaNhanVien(index);
  saveListStudentToLocal();
   taoBang(dssv.list)
  //sau khi xoa xong can render lai table, goi lai ham taoBang()
  // taoBang(dssv.list);
}
function saveListStudentToLocal() {
  // json.stringify => chuyển đổi kiểu dữ liệu bất kì thành json
  var arr = JSON.stringify(dssv.list);
  // localStorage.setItem lưu dữ liệu vào localStorage
  localStorage.setItem("DSSV", arr);
}

function getDataFromLocal() {
  var data = localStorage.getItem("DSSV");
  // JSON.parse => đổi kiểu json thành kiểu dữ liệu bình thường
  if (data) dssv.list = JSON.parse(data);
  //tạo bảng sau khi đã lấy dữ liệu thành công trong local
  taoBang(dssv.list);
}
getDataFromLocal();

function pushToForm(msv) {
  var sv = dssv.timSinhVienTheoMa(msv);
console.log(sv);
  getEle("txtMaSV").value = sv.maSV;
  getEle("txtTenSV").value = sv.tenSV;
  getEle("txtEmail").value = sv.email;
  getEle("txtPass").value = sv.matKhau;
  getEle("txtNgaySinh").value = sv.ngaySinh;
  getEle("khSV").value = sv.khoaHoc;
  getEle("txtDiemToan").value = sv.diemToan;
  getEle("txtDiemLy").value = sv.diemLy;
  getEle("txtDiemHoa").value = sv.diemHoa;
  getEle("btnUpdate").style.display='inline-block'
}

getEle("btnAdd").addEventListener("click", function () {
  event.preventDefault();
  var sinhVien = layDuLieuDauVao();
  dssv.themSinhVien(sinhVien);
  taoBang(dssv.list);
  saveListStudentToLocal();
});
getEle("btnUpdate").addEventListener('click',function(){
  event.preventDefault()
  var data= layDuLieuDauVao()
  dssv.capNhat(data)
  saveListStudentToLocal(dssv.list)
  taoBang(dssv.list)
  //reset form
  getEle('formSV').reset()
})