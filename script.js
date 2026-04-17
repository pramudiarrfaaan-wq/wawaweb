let kategori = "";
let kartuDibuka = 0;
let hasilList = [];

const data = {
    cinta: ["Cinta baru datang", "Hubungan makin kuat", "Ada yang diam-diam suka"],
    karir: ["Kesempatan besar datang", "Kerja keras berhasil", "Coba hal baru"],
    keuangan: ["Rezeki datang", "Hemat ya", "Keuangan stabil"]
};

function pilihKategori(k) {
    kategori = k;
}

function bukaKartu(card) {
    if (!kategori) {
        alert("Pilih kategori dulu!");
        return;
    }

    if (kartuDibuka >= 3) return;

    card.classList.add("flip");

    let random = Math.floor(Math.random() * data[kategori].length);
    hasilList.push(data[kategori][random]);

    kartuDibuka++;

    if (kartuDibuka === 3) {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    let nama = document.getElementById("nama").value || "Kamu";

    document.getElementById("hasil").innerHTML = `
        <div class="hasil-box">
            <h2>🔮 Hasil Tarot untuk ${nama}</h2>
            <p>🕰️ Masa Lalu: ${hasilList[0]}</p>
            <p>✨ Sekarang: ${hasilList[1]}</p>
            <p>🌙 Masa Depan: ${hasilList[2]}</p>
        </div>
    `;
}

/* animasi bintang */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(s => {
        ctx.fillRect(s.x, s.y, s.size, s.size);
        s.y += 0.3;
        if (s.y > canvas.height) s.y = 0;
    });

    requestAnimationFrame(drawStars);
}

drawStars();
