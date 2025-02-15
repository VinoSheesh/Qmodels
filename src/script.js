document.getElementById("viewMoreBtn").addEventListener("click", function () {
    let extraCards = document.getElementById("extraCards");

    if (extraCards.classList.contains("max-h-0")) {
        extraCards.classList.remove("max-h-0");
        extraCards.classList.add("max-h-screen");
        this.textContent = "View Less";
    } else {
        extraCards.classList.add("max-h-0");
        extraCards.classList.remove("max-h-screen");
        this.textContent = "View More";
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
