document.getElementById("viewMoreBtn").addEventListener("click", function () {
    let hiddenCards = document.querySelectorAll("#servicesGrid .hidden");

    if (hiddenCards.length > 0) {
        // Jika masih ada card yang tersembunyi, tampilkan semua
        hiddenCards.forEach(card => {
            card.classList.remove("hidden");
        });
        this.textContent = "View Less"; // Ubah teks tombol
    } else {
        // Jika semua sudah terlihat, sembunyikan kembali
        let allCards = document.querySelectorAll("#servicesGrid > div:nth-child(n+4)");
        allCards.forEach(card => {
            card.classList.add("hidden");
        });
        this.textContent = "View More"; // Ubah teks tombol kembali
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const counterSection = document.getElementById("counter-section");
    let hasRun = false; // Agar hanya berjalan sekali

    function runCounter() {
        if (hasRun) return;
        hasRun = true;

        const duration = 2000; // Durasi animasi dalam milidetik (2 detik)
        
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target"); // Ambil angka akhir
            let start = 0;
            const intervalTime = duration / target; // Waktu per angka agar timing sama
            
            const updateCounter = setInterval(() => {
                start++;
                counter.textContent = start + (counter.textContent.includes("%") ? "%" : "+");

                if (start >= target) {
                    clearInterval(updateCounter);
                }
            }, intervalTime);
        });
    }

    // Menggunakan Intersection Observer untuk memantau elemen
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            runCounter();
            observer.disconnect(); // Hentikan observer setelah animasi berjalan
        }
    }, { threshold: 0.5 }); // 50% dari elemen harus terlihat sebelum mulai

    observer.observe(counterSection);
});
