<?php
// Kelas Buku untuk merepresentasikan buku secara umum
class Buku
{
  // Properti untuk judul dan penulis buku
  public $judul;
  public $penulis;

  // Konstruktor untuk menginisialisasi judul dan penulis
  public function __construct($judul, $penulis)
  {
    $this->judul = $judul;
    $this->penulis = $penulis;
  }

  // Method untuk menampilkan informasi dasar buku
  public function infoBuku()
  {
    return "Judul: " . $this->judul . ", Penulis: " . $this->penulis;
  }
}

// Kelas BukuDigital yang mewarisi dari Buku dengan tambahan properti ukuran file
class BukuDigital extends Buku
{
  // Properti khusus untuk ukuran file buku digital
  public $ukuranFile;

  // Konstruktor untuk inisialisasi judul, penulis, dan ukuran file
  public function __construct($judul, $penulis, $ukuranFile)
  {
    // Memanggil konstruktor dari kelas induk
    parent::__construct($judul, $penulis);
    $this->ukuranFile = $ukuranFile;
  }

  // Override method infoBuku untuk menampilkan informasi yang lebih lengkap
  public function infoBuku()
  {
    return parent::infoBuku() . ", Ukuran File: " . $this->ukuranFile . " MB";
  }
}

// Contoh penggunaan kelas Buku
$bukuCetak = new Buku("Pemrograman PHP", "John Doe");
echo $bukuCetak->infoBuku();  // Output: Judul: Pemrograman PHP, Penulis: John Doe

echo "\n";

// Contoh penggunaan kelas BukuDigital
$bukuDigital = new BukuDigital("Pemrograman PHP (Digital)", "Roronoa", 1.8);
echo $bukuDigital->infoBuku();  // Output: Judul: Pemrograman PHP (Digital), Penulis: Roronoa, Ukuran File: 1.8 MB
