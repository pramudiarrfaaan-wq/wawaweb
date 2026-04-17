// status biar cuma bisa pilih 1 kartu
let sudahPilih = false;

// data ramalan (lebih banyak & realistis)
const ramalanData = {
    cinta: [
        "Seseorang mulai memperhatikanmu diam-diam ❤️",
        "Hubunganmu akan memasuki fase lebih serius",
        "Jangan terlalu bergantung pada perasaan orang lain",
        "Cinta datang di waktu yang tidak terduga"
    ],
    karir: [
        "Kesempatan baru akan muncul dalam waktu dekat 💼",
        "Kerja kerasmu mulai terlihat hasilnya",
        "Hati-hati dengan keputusan terburu-buru",
        "Ada peluang besar jika kamu berani mencoba"
    ],
    keuangan: [
        "Keuanganmu cukup stabil saat ini 💰",
        "Hindari pengeluaran impulsif",
        "Ada peluang rezeki tak terduga",
        "Waktunya mulai menabung lebih serius"
    ]
};

// fungsi buka kartu
function bukaKartu(card, jenis) {
    if (sudahPilih) return; // cuma 1x pilih

    sudahPilih = true;

    const hasil = document.getElementById("hasil");

    // flip kartu
    card.classList.add("flip");
    card.style.boxShadow = "0 0 20px gold";

    // disable kartu lain
    document.querySelectorAll(".card").forEach(k => {
        k.style.pointerEvents = "none";
        k.style.opacity = "0.5";
    });

    card.style.opacity = "1";

    // efek loading
    hasil.innerHTML = "🔮 Membaca energi semesta...";

    // ambil random ramalan
    const list = ramalanData[jenis];
    const random = Math.floor(Math.random() * list.length);

    // delay biar dramatis
    setTimeout(() => {
        hasil.innerHTML = `
            <div class="hasil-box">
                <h2>✨ Hasil Tarot</h2>
                <p>${list[random]}</p>
                <button onclick="resetTarot()">🔁 Coba Lagi</button>
            </div>
        `;
    }, 1200);
}

// reset (biar bisa ulang)
function resetTarot() {
    sudahPilih = false;

    const hasil = document.getElementById("hasil");
    hasil.innerHTML = "";

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("flip");
        card.style.pointerEvents = "auto";
        card.style.opacity = "1";
        card.style.boxShadow = "none";
    });
}
