let s1 = { nama: 'Ali', Nilai: 80 };
let s2 = { nama: 'Budi', Nilai: 90 };
let s3 = { nama: 'Citra', Nilai: 65 };
let s4 = { nama: 'Dewi', Nilai: 50 };
let s5 = { nama: 'Eko', Nilai: 30 };
let s6 = { nama: 'Fajar', Nilai: 78 };

let siswa = [s1, s2, s3, s4, s5, s6];

function getGrade(nilai) {
  if (nilai >= 85 && nilai <= 100) {
    return 'A';
  } else if (nilai >= 75 && nilai <= 84) {
    return 'B';
  } else if (nilai >= 60 && nilai <= 74) {
    return 'C';
  } else if (nilai >= 30 && nilai <= 59) {
    return 'D';
  } else {
    return 'E';
  }
}

function getPredikat(grade) {
  switch (grade) {
    case 'A':
      return 'Sangat Baik';
    case 'B':
      return 'Baik';
    case 'C':
      return 'Cukup';
    case 'D':
      return 'Kurang';
    case 'E':
      return 'Sangat Kurang';
    default:
      return '';
  }
}

let tbody = document.querySelector('#siswaTable tbody');

siswa.forEach((s, index) => {
  let keterangan = s.Nilai > 60 ? 'Lulus' : 'Tidak Lulus';
  let grade = getGrade(s.Nilai);
  let predikat = getPredikat(grade);

  let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${s.nama}</td>
            <td>${s.Nilai}</td>
            <td>${keterangan}</td>
            <td>${grade}</td>
            <td>${predikat}</td>
        </tr>
    `;
  tbody.innerHTML += row;
});
