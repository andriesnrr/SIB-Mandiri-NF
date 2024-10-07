let container = document.getElementById('container');
let gambarArray = [];
let audioArray = [];
let currentAudio = null; // Variable untuk menyimpan audio yang sedang diputar
let currentImageIndex = 0;
let audioFiles = [
  'beef.mp3',
  'burgers.mp3',
  'chicken.mp3',
  'corndog.mp3',
  'fish.mp3',
  'kebab.mp3',
  'nugget.mp3',
  'pasta.mp3',
  'pizza.mp3',
  'salad.mp3',
];
let imageFiles = [
  'beef.jpg',
  'burgers.jpg',
  'chicken.jpg',
  'corndog.jpg',
  'fish.jpg',
  'kebab.jpg',
  'nugget.jpg',
  'pasta.jpg',
  'pizza.jpg',
  'salad.jpg',
];

function tambahGambar() {
  // Hentikan audio yang sedang diputar (jika ada)
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Kembali ke awal audio
  }

  // Hapus gambar yang saat ini ada di container
  // container.innerHTML = '';

  // Cek apakah gambar masih tersedia untuk ditambahkan
  if (currentImageIndex < imageFiles.length) {
    // Membuat elemen gambar baru
    let gambar = document.createElement('img');
    gambar.src = `assets/img/${imageFiles[currentImageIndex]}`;
    gambar.alt = `Gambar ${imageFiles[currentImageIndex].split('.')[0]}`;
    gambar.style.width = '100%';
    gambar.style.height = '100%';
    gambar.style.borderRadius = '18px';

    // Tambahkan gambar ke dalam container
    container.appendChild(gambar);
    gambarArray.push(gambar);

    // Menyimpan objek audio dan mulai memutar
    let audio = new Audio(`assets/audio/${audioFiles[currentImageIndex]}`);
    currentAudio = audio;
    currentAudio.play();

    // Increment untuk gambar dan audio berikutnya
    currentImageIndex++;
  } else {
    alert('Semua gambar sudah ditambahkan!');
  }
}
