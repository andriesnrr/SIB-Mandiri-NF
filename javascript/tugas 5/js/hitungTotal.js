const hitungTotal = (nama, ...nilai) => {
  const tambahanNilai = [3, 7];
  // Menggabungkan nilai input dengan tambahan nilai
  const semuaNilai = [...nilai, ...tambahanNilai];

  // Menghitung total dari semua nilai
  const total = semuaNilai.reduce((acc, curr) => acc + curr, 0);

  // Mengembalikan hasil dalam bentuk pesan
  return `${nama}, total nilai kamu adalah: ${total}`;
};

const form = document.getElementById('nilaiForm');

// Event listener ketika form di submit
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const nilaiInput = document.getElementById('nilai').value;

  // Konversi string input nilai menjadi array angka
  const nilaiArray = nilaiInput.split(',').map(Number);

  // Panggil fungsi hitungTotal dan tampilkan hasilnya
  const hasil = hitungTotal(nama, ...nilaiArray);

  document.getElementById('hasil').textContent = hasil;
});
