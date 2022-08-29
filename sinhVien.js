function SinhVien(
    _maSV,
    _tenSV,
    _email,
    _matKhau,
    _ngaySinh,
    _khoaHoc,
    _toan,
    _ly,
    _hoa
) {
    this.maSV = _maSV,
        this.tenSV = _tenSV,
        this.email = _email,
        this.matKhau = _matKhau,
        this.ngaySinh = _ngaySinh,
        this.khoaHoc = _khoaHoc,
        this.diemToan = _toan,
        this.diemLy = _ly,
        this.diemHoa = _hoa,
        this.DTB = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3
}

// 2 cách viết: class và function


// class SinhVien {
//     // ham khoi tao
//     constructor(_maSV,
//         _tenSV,
//         _email,
//         _matKhau,
//         _ngaySinh,
//         _khoaHoc,
//         _toan,
//         _ly,
//         _hoa) {
//             this.maSV = _maSV,
//             this.tenSV = _tenSV,
//             this.email = _email,
//             this.matKhau = _matKhau,
//             this.ngaySinh = _ngaySinh,
//             this.khoaHoc = _khoaHoc,
//             this.diemToan = _toan,
//             this.diemLy = _ly,
//             this.diemHoa = _hoa,
//             this.DTB = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3
//     }
// }

