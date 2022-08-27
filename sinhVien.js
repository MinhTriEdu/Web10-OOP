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
    this.DTB = 0,
    this.tinhDiemTrungBinh = function () {
        this.DTB = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3
        return this.DTB;
    }
}

