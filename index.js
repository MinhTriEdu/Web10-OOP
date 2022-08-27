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
  sinhVien.tinhDiemTrungBinh();
  return sinhVien;
}

getEle("btnAdd").addEventListener("click", function () {
  event.preventDefault();
  var sinhVien = layDuLieuDauVao();

  dssv.themSinhVien(sinhVien);
  console.log(dssv.list);
  taoBang(dssv.list);
});
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
    </tr>
    `;
  }
  getEle("tbodySinhVien").innerHTML = content;
}
