const contentData = {
    templates: [
        { title: "Salam Pembuka", body: "Halo! Terima kasih telah menghubungi kami. Ada yang bisa kami bantu?" },
        { title: "Minta Bukti Bayar", body: "Boleh kirimkan foto bukti transfernya untuk kami verifikasi kak? Terima kasih." },
        { title: "Penutupan", body: "Sama-sama! Senang bisa membantu. Jika ada pertanyaan lain, hubungi kami lagi ya." }
    ],
    knowledge: [
        { title: "Cara Refund", body: "Proses refund memakan waktu 3-5 hari kerja melalui bank transfer." },
        { title: "Jam Operasional", body: "Senin - Jumat: 09:00 - 18:00 WIB. Sabtu: 09:00 - 13:00 WIB." }
    ],
    tickets: [
        { title: "Gagal Login - Budi", status: "pending", body: "Pelanggan tidak bisa masuk sejak pagi ini." },
        { title: "Tanya Resi - Ani", status: "done", body: "Sudah diinfokan resi JNE: 12345678." }
    ]
};

const contentArea = document.getElementById('content-area');
const tabTitle = document.getElementById('tab-title');
const navLinks = document.querySelectorAll('.nav-links li');

function render(tab) {
    tabTitle.innerText = tab === 'templates' ? "Template Balasan" : tab === 'knowledge' ? "Pengetahuan" : "Daftar Tiket";
    let html = '<div class="card-grid">';
    contentData[tab].forEach(item => {
        html += `
            <div class="card">
                ${item.status ? `<span class="status-badge ${item.status}">${item.status}</span>` : ''}
                <h3>${item.title}</h3>
                <p id="text-${item.title.replace(/\s/g, '')}">${item.body}</p>
                <button class="btn-copy" onclick="copyText('text-${item.title.replace(/\s/g, '')}')">SALIN TEKS</button>
            </div>
        `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
}

function copyText(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert('Teks berhasil disalin!');
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        render(link.dataset.tab);
    });
});

// Load default
render('templates');