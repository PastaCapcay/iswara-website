"use client";

import Image from "next/image";
import { useState } from "react";
import OptimizedImage from './components/OptimizedImage';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold text-emerald-800 flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Iswara</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#beranda" className="text-emerald-800 hover:text-emerald-600 transition">Beranda</a>
            <a href="#tentang" className="text-emerald-800 hover:text-emerald-600 transition">Tentang</a>
            <a href="#produk" className="text-emerald-800 hover:text-emerald-600 transition">Produk</a>
            <a href="#proses" className="text-emerald-800 hover:text-emerald-600 transition">Proses</a>
            <a 
              href="https://wa.me/6282221392314" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-800 hover:text-emerald-600 transition"
            >
              Kontak
            </a>
          </nav>
          <button 
            className="md:hidden text-emerald-800 z-20 bg-white p-2 rounded-md shadow-sm" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 pt-16 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col items-center z-10">
            <div className="container flex flex-col items-center gap-4 text-lg py-8 px-4 bg-white rounded-lg shadow-inner">
              <a 
                href="#beranda" 
                className="text-emerald-800 hover:text-emerald-600 transition py-3 px-6 bg-emerald-50 rounded-md w-full max-w-xs text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a 
                href="#tentang" 
                className="text-emerald-800 hover:text-emerald-600 transition py-3 px-6 bg-emerald-50 rounded-md w-full max-w-xs text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang
              </a>
              <a 
                href="#produk" 
                className="text-emerald-800 hover:text-emerald-600 transition py-3 px-6 bg-emerald-50 rounded-md w-full max-w-xs text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produk
              </a>
              <a 
                href="#proses" 
                className="text-emerald-800 hover:text-emerald-600 transition py-3 px-6 bg-emerald-50 rounded-md w-full max-w-xs text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proses
              </a>
              <a 
                href="https://wa.me/6282221392314" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition flex items-center justify-center gap-2 mt-2 w-full max-w-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Responsiveness Improved */}
      <section id="beranda" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" tabIndex={0}>
              Kopi & Vanili Premium dari Lereng Gunung Telomoyo
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8" tabIndex={0}>
              Nikmati kualitas terbaik dari kebun kami yang dibudidayakan dengan penuh dedikasi oleh Pak Is
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#produk" 
                className="px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition text-sm md:text-base"
                aria-label="Lihat produk kami"
              >
                Lihat Produk
              </a>
              <a 
                href="https://wa.me/6282221392314" 
                target="_blank"
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition flex items-center gap-2 text-sm md:text-base"
                aria-label="Chat dengan kami di WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Section - Improved for small screens */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <OptimizedImage
                src="/gambar/pohon-kopi.jpg"
                alt="Kebun Kopi Telomoyo"
                width={800}
                height={600}
                className="object-cover w-full h-full rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-700 text-center md:text-left" tabIndex={0}>Petani dengan Dedikasi Tinggi</h3>
              <p className="text-gray-700 text-sm md:text-base text-justify" tabIndex={0}>
                Pak Is telah mengabdikan hidupnya untuk membudidayakan produk berkualitas tinggi di lereng gunung Telomoyo selama lebih dari 20 tahun. Dengan pemahaman mendalam tentang tanah dan iklim lokal, beliau berhasil menghasilkan produk dengan kualitas terbaik.
              </p>
              <p className="text-gray-700 text-sm md:text-base text-justify" tabIndex={0}>
                Filosofi bertani Pak Is berlandaskan pada keberlanjutan dan ramah lingkungan. Tanpa menggunakan bahan kimia berbahaya, beliau memastikan setiap produk aman dikonsumsi dan memberikan manfaat maksimal bagi konsumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Section - Improved for mobile */}
      <section id="produk" className="py-12 md:py-16 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-emerald-800">Produk Unggulan Kami</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Kopi */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-[200px] sm:h-48 relative">
                <Image 
                  src="/gambar/kopi-closeup.jpg" 
                  alt="Kopi Telomoyo" 
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-2">Kopi Telomoyo</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Kopi arabika premium dengan cita rasa unik, kekentalan yang pas, dan aroma yang memesona. Ditanam pada ketinggian ideal di lereng Telomoyo.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Mulai Rp 85.000/250gr</span>
                  <a 
                    href="https://wa.me/6282221392314?text=Halo%20Pak%20Is,%20saya%20tertarik%20dengan%20Kopi%20Telomoyo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Vanili */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-[200px] sm:h-48 relative">
                <Image
                  src="/gambar/vanili-kering.jpg" 
                  alt="Vanili Telomoyo" 
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-2">Vanili Telomoyo</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Vanili berkualitas tinggi dengan aroma kuat dan rasa yang kaya. Disortir dengan teliti dan diproses secara tradisional untuk menjaga kualitasnya.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Mulai Rp 120.000/100gr</span>
                  <a 
                    href="https://wa.me/6282221392314?text=Halo%20Pak%20Is,%20saya%20tertarik%20dengan%20Vanili%20Telomoyo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Gaharu */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-[200px] sm:h-48 relative">
                <Image 
                  src="/gambar/vanili-hijau.jpg" 
                  alt="Vanili Hijau Telomoyo" 
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-emerald-800 mb-2">Vanili Hijau Telomoyo</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Vanili hijau segar langsung dari kebun dengan kualitas terbaik, menghasilkan aroma wangi yang khas. Dibudidayakan secara berkelanjutan dan dipanen pada waktu yang tepat.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-medium text-sm md:text-base">Hubungi untuk harga</span>
                  <a 
                    href="https://wa.me/6282221392314?text=Halo%20Pak%20Is,%20saya%20tertarik%20dengan%20Vanili%20Hijau%20Telomoyo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Produksi Section - Responsive improvement */}
      <section id="proses" className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-emerald-800">Proses Produksi Kami</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-emerald-700 text-xl md:text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">Budidaya</h3>
              <div className="relative w-full h-36 mb-3 rounded-md overflow-hidden">
                <OptimizedImage
                  src="/gambar/vanili-di-pohon.jpg"
                  alt="Kebun Vanili Telomoyo"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Pemilihan bibit unggul dan perawatan tanaman dengan metode organik di tanah lereng Telomoyo yang subur.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-emerald-700 text-xl md:text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">Panen</h3>
              <div className="relative w-full h-36 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="/gambar/vanili-di-pohon-2.jpg" 
                  alt="Panen vanili" 
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Pemanenan pada waktu yang tepat untuk memastikan kualitas dan rasa terbaik dari setiap produk.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-emerald-700 text-xl md:text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">Pengolahan</h3>
              <div className="relative w-full h-36 mb-3 rounded-md overflow-hidden">
                <Image 
                  src="/gambar/jemur-kopi.jpg" 
                  alt="Pengolahan kopi" 
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Proses pengolahan secara tradisional untuk menjaga kualitas dan meningkatkan cita rasa produk.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-emerald-700 text-xl md:text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">Pengemasan</h3>
              <div className="relative w-full h-36 mb-3 rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-emerald-200 flex items-center justify-center text-center p-4">
                  <span className="text-emerald-800 font-medium">Proses Pengemasan Produk</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 bg-emerald-50 p-4 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl font-semibold text-emerald-700 mb-3 md:mb-4">Komitmen Keberlanjutan</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Pak Is berkomitmen untuk menerapkan praktik pertanian berkelanjutan yang menjaga kesuburan tanah dan ekosistem sekitar. Metode budidaya yang diterapkan memastikan produksi dapat terus berlanjut tanpa merusak lingkungan.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
              <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-800 font-medium">Tanpa Pestisida Kimia</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-800 font-medium">Rotasi Tanaman</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm md:text-base text-gray-800 font-medium">Konservasi Air</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section - Responsive improvement */}
      <section id="kontak" className="py-12 md:py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Hubungi Kami</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telepon</p>
                    <a href="https://wa.me/6282221392314" className="text-emerald-600 hover:text-emerald-700 font-medium">+62 822-2139-2314</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Alamat</p>
                    <p className="text-white">Dusun Kendal Duwur RT 2 RW 2, Kelurahan Wirogomo, Kec Banyubiru, Kab Semarang 50664</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-2 text-sm md:text-base text-center md:text-left">Ikuti Kami</h4>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 flex items-center justify-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 flex items-center justify-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-800 hover:bg-emerald-700 flex items-center justify-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Lokasi Kebun</h3>
              <div className="bg-emerald-800 rounded-lg p-4 md:p-6 text-center h-full">
                <div className="bg-emerald-700/50 h-[200px] sm:h-[250px] rounded-lg overflow-hidden relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.888965085!2d110.3311113!3d-7.3916670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7dda5928df7d%3A0x67592e2ffb468d7!2sDusun%20Kendal%20Duwur%2C%20Wirogomo%2C%20Banyubiru%2C%20Semarang%20Regency%2C%20Central%20Java!5e0!3m2!1sid!2sid!4v1720329987428!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://maps.google.com/maps?q=Dusun+Kendal+Duwur+RT+2+RW+2+Wirogomo+Banyubiru+Semarang" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition text-sm md:text-base"
                  >
                    Lihat di Google Maps
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section - Responsive */}
      <footer className="bg-emerald-950 text-white py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-emerald-400">Iswara</span>
              </a>
              <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md text-center md:text-left">
                Produk alami berkualitas tinggi dari pegunungan Telomoyo, dibudidayakan dengan penuh cinta dan perhatian oleh Pak Is.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 sm:gap-10 text-center md:text-left">
              <div>
                <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Tentang</h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                  <li><a href="#tentang" className="hover:text-emerald-400 transition">Tentang Kami</a></li>
                  <li><a href="#produk" className="hover:text-emerald-400 transition">Produk</a></li>
                  <li><a href="#proses" className="hover:text-emerald-400 transition">Proses Produksi</a></li>
                  <li><a href="#kontak" className="hover:text-emerald-400 transition">Kontak</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm md:text-base font-medium mb-2 md:mb-3">Kontak</h3>
                <ul className="space-y-1.5 text-xs md:text-sm text-gray-300">
                  <li><a href="https://wa.me/6282221392314" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">WhatsApp</a></li>
                  <li><a href="mailto:info@iswara.com" className="hover:text-emerald-400 transition">Email</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition">Facebook</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-emerald-900 mt-8 pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="mb-3 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} Iswara. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-emerald-400 transition">Kebijakan Privasi</a>
              <a href="#" className="hover:text-emerald-400 transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button - Mobile Responsive */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="https://wa.me/6282221392314" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          aria-label="Chat di WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
