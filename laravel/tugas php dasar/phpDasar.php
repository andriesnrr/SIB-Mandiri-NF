<?php
function buatSapaan($nama = "Tamu", $waktu = null)
{
  // Jika waktu tidak diberikan, gunakan sapaan default
  if (empty($waktu)) {
    return "Halo, $nama! Selamat datang!";
  }

  // Pilihan sapaan berdasarkan waktu yang diberikan
  $sapaan = "";
  switch (strtolower($waktu)) {
    case "pagi":
      $sapaan = "Selamat pagi, $nama! Semoga harimu cerah dan penuh semangat!";
      break;
    case "siang":
      $sapaan = "Selamat siang, $nama! Semoga hari ini produktif!";
      break;
    case "sore":
      $sapaan = "Selamat sore, $nama! Waktu yang tepat untuk beristirahat sejenak!";
      break;
    case "malam":
      $sapaan = "Selamat malam, $nama! Semoga malam ini tenang dan nyaman!";
      break;
    default:
      $sapaan = "Halo, $nama! Waktu tidak dikenali, tetapi semoga harimu menyenangkan!";
  }
  return $sapaan;
}

// Contoh penggunaan fungsi sapaan
echo buatSapaan("Revan", "pagi");  // Output: Selamat pagi, Revan! Semoga harimu cerah dan penuh semangat!
echo "\n";
echo buatSapaan("Budi Arie", "siang");  // Output: Selamat siang, Budi Arie! Semoga hari ini produktif!
echo "\n";
echo buatSapaan("Cici Cimol");  // Output: Halo, Cici Cimol! Selamat datang!
echo "\n";
echo buatSapaan();  // Output: Halo, Tamu! Selamat datang!
