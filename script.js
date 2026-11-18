// =======================================================
// PROYEK SMART VOUCHER - INPUT FORM REAL-TIME
// Tanpa percabangan (if/else), perulangan, & fungsi custom
// =======================================================

// Menghubungkan event 'input' bawaan DOM langsung ke ekspresi pembaruan
document.addEventListener("input", () => {
  // 1. AMBIL DATA DARI FORM HTML
  const inputNama = document.getElementById("in-nama").value;
  const inputKelas = document.getElementById("in-kelas").value;
  const nomorUrut = document.getElementById("in-urut").value;
  const inputVoucher = document.getElementById("in-voucher").value;
  const hargaVoucher = Number(document.getElementById("in-harga").value);
  const jumlahBeli = Number(document.getElementById("in-jumlah").value);
  const uangBayar = Number(document.getElementById("in-bayar").value);

  // 2. MANIPULASI STRING
  const namaBersih = inputNama.trim();
  const namaKapital = namaBersih.toUpperCase();
  const panjangNama = namaBersih.length;
  const voucherKecil = inputVoucher.toLowerCase();

  // Penggabungan string untuk kode transaksi
  const inisialNama = namaKapital.slice(0, 2);
  const kodeKelas = inputKelas.trim().replaceAll(" ", "").toUpperCase();
  const kodeTransaksi = "SV-" + nomorUrut + "-" + inisialNama + "-" + kodeKelas;

  // 3. PERHITUNGAN ARITMATIKA
  const biayaAdmin = 1000;
  const subtotal = hargaVoucher * jumlahBeli;
  const diskon = subtotal * (5 / 100);
  const totalPembayaran = subtotal - diskon + biayaAdmin;
  const uangKembalian = uangBayar - totalPembayaran;
  const rataRataHarga = (2000 + 5000 + 10000 + 25000 + 75000) / 5;

  // 4. CEK TIPE DATA
  const tipeHarga = typeof hargaVoucher;
  const tipeJumlah = typeof jumlahBeli;
  const tipeNama = typeof namaKapital;

  // 5. TAMPILKAN KE STRUK HTML
  document.getElementById("out-kode").textContent = kodeTransaksi;
  document.getElementById("out-nama").textContent = namaKapital;
  document.getElementById("out-panjang-nama").textContent = panjangNama + " karakter";
  document.getElementById("out-kelas").textContent = inputKelas.toUpperCase();

  document.getElementById("out-voucher").textContent = "voucher " + voucherKecil;
  document.getElementById("out-harga").textContent = "Rp" + hargaVoucher.toLocaleString("id-ID");
  document.getElementById("out-jumlah").textContent = jumlahBeli + " pcs";

  document.getElementById("out-subtotal").textContent = "Rp" + subtotal.toLocaleString("id-ID");
  document.getElementById("out-diskon").textContent = "- Rp" + diskon.toLocaleString("id-ID");
  document.getElementById("out-admin").textContent = "Rp" + biayaAdmin.toLocaleString("id-ID");
  document.getElementById("out-total").textContent = "Rp" + totalPembayaran.toLocaleString("id-ID");

  document.getElementById("out-bayar").textContent = "Rp" + uangBayar.toLocaleString("id-ID");
  document.getElementById("out-kembalian").textContent = "Rp" + uangKembalian.toLocaleString("id-ID");

  document.getElementById("out-typeof").textContent =
    `Harga: ${tipeHarga} | Jumlah: ${tipeJumlah} | Nama: ${tipeNama}`;
  document.getElementById("out-rata-rata").textContent =
    "Rp" + rataRataHarga.toLocaleString("id-ID");

  // 6. TAMPILKAN KE CONSOLE
  console.clear();
  console.log(`
=== SMART VOUCHER - MINI ISP ===
Kode Transaksi : ${kodeTransaksi}
Nama Pelanggan : ${namaKapital} (${panjangNama} karakter)
Kelas          : ${inputKelas.toUpperCase()}
Voucher        : ${voucherKecil} (Rp${hargaVoucher} x ${jumlahBeli})
Subtotal       : Rp${subtotal}
Diskon 5%      : Rp${diskon}
Biaya Admin    : Rp${biayaAdmin}
Total Bayar    : Rp${totalPembayaran}
Uang Bayar     : Rp${uangBayar}
Kembalian      : Rp${uangKembalian}
Tipe Data      : Harga (${tipeHarga}), Jumlah (${tipeJumlah}), Nama (${tipeNama})
  `);
});

// Memicu event input sekali saat halaman pertama kali dibuka agar nilai awal langsung muncul
document.dispatchEvent(new Event("input"));