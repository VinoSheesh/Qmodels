function animateCounter(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = range / (duration / 16);

    function updateCounter() {
        current += increment;
        element.textContent = Math.floor(current);
        if (current < end) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end; // Pastikan angka akhir benar
        }
    }

    updateCounter();
}

// Ambil semua elemen dengan class 'counter'
document.querySelectorAll(".counter").forEach((el) => {
    animateCounter(el, 0, 2014, 2000);
});