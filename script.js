function kirimData() {
  const nama = document.getElementById("nama").value;
  const telepon = document.getElementById("telepon").value;
  const jenis = document.getElementById("jenis").value;
  const kategori = document.querySelector('input[name="kategori"]:checked');
  const tim = document.getElementById("tim").value || "(Tidak ada)";
  const alamat = document.getElementById("alamat").value;
  const tanggal = document.getElementById("tanggal").value;

  // Validasi input
  if (!nama || !telepon || !jenis || !kategori || !alamat || !tanggal) {
    Swal.fire({
      icon: 'warning',
      title: 'Lengkapi Form!',
      text: 'Semua kolom wajib diisi kecuali nama tim.',
    });
    return;
  }

  // Tampilkan SweetAlert
  Swal.fire({
    icon: 'success',
    title: 'Pendaftaran Berhasil!',
    html: `
      <b>Nama:</b> ${nama}<br>
      <b>Telepon:</b> ${telepon}<br>
      <b>Jenis Motor:</b> ${jenis}<br>
      <b>Kategori:</b> ${kategori.value}<br>
      <b>Nama Tim:</b> ${tim}<br>
      <b>Alamat:</b> ${alamat}<br>
      <b>Tanggal Daftar:</b> ${tanggal}
    `,
    confirmButtonText: 'OK'
  }).then(() => {
    // Ganti layout menjadi fixed dan tengah
    document.body.classList.add('fixed-center');

    // Hapus form dari tampilan
    const formBox = document.querySelector('.form-box');
    if (formBox) formBox.remove();

    // Buat elemen bukti pendaftaran
    const bukti = document.createElement('div');
    bukti.className = 'bukti-box';
    bukti.innerHTML = `
      <h3> Bukti Pendaftaran </h3>
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>No. Telepon:</strong> ${telepon}</p>
      <p><strong>Jenis Motor:</strong> ${jenis}</p>
      <p><strong>Kategori:</strong> ${kategori.value}</p>
      <p><strong>Nama Tim:</strong> ${tim}</p>
      <p><strong>Alamat:</strong> ${alamat}</p>
      <p><strong>Tanggal:</strong> ${tanggal}</p>
      <p style="margin-top:10px;">📌 Harap simpan bukti ini untuk registrasi ulang saat hari lomba.</p>
    `;

    // Tampilkan bukti pada halaman
    const container = document.querySelector('.container');
    container.innerHTML = '';
    container.appendChild(bukti);
  });
}
