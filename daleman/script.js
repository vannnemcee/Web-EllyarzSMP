// Data paket gems
const packages = [
    {
        id: 1,
        name: 'Starter Pack',
        gems: 100,
        price: 10000,
        icon: '💎',
        popular: false
    },
    {
        id: 2,
        name: 'Basic Pack',
        gems: 250,
        price: 20000,
        icon: '💎',
        popular: false
    },
    {
        id: 3,
        name: 'Popular Pack',
        gems: 500,
        price: 35000,
        icon: '💎',
        popular: true
    },
    {
        id: 4,
        name: 'Premium Pack',
        gems: 1000,
        price: 65000,
        icon: '💎',
        popular: false
    },
    {
        id: 5,
        name: 'Ultimate Pack',
        gems: 2500,
        price: 150000,
        icon: '💎',
        popular: false
    },
    {
        id: 6,
        name: 'Mega Pack',
        gems: 5000,
        price: 280000,
        icon: '💎',
        popular: false
    }
];

// Nomor WhatsApp
const WHATSAPP_NUMBER = '6289531053905';

// Format harga ke Rupiah
function formatPrice(price) {
    return price.toLocaleString('id-ID');
}

// Fungsi untuk membeli paket
function buyPackage(packageData) {
    const nickname = document.getElementById('nicknameInput')?.value || '';
    if (nickname.trim() === '') {
        alert('Silakan masukkan nickname Minecraft Anda terlebih dahulu!');
        document.getElementById('nicknameInput').focus();
        return;
    }
    let message = `Halo atmin\nsaya ingin beli nih\n\n*╓──────── ✧ ʟɪsᴛ ✧*\n*║ ɴɪᴄᴋɴᴀᴍᴇ ᴍᴄ* : ${nickname.trim()}\n*║ ɴᴀᴍᴀ ᴘʀᴏᴅᴜᴋ* : ${packageData.name}\n*║ ᴘɪʟɪʜᴀɴ* : (${packageData.gems} Gems)\n*║ ʜᴀʀɢᴀ* : ${formatPrice(packageData.price)}\n║ ᴍᴇᴛᴏᴅᴇ ᴘᴇᴍʙᴀʏᴀʀᴀɴ* : ${paymentMethodText}\n╙──────────────❂*\nʟɪsᴛ sᴜᴅᴀʜ ᴅɪʙᴜᴀᴛ\n\n𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝗮𝘁𝗺𝗶𝗻 𝗺𝗲𝗻𝗷𝗮𝘄𝗮𝗯🙏\n\n*© ᴇʟʟʏᴀʀᴢsᴍᴘ*;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Generate package cards
function generatePackageCards() {
    const packagesGrid = document.getElementById('packagesGrid');
    
    packages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = `package-card ${pkg.popular ? 'popular' : ''}`;
        
        card.innerHTML = `
            ${pkg.popular ? '<div class="popular-badge"><span>⭐</span> Popular</div>' : ''}
            <div class="package-icon">${pkg.icon}</div>
            <h4 class="package-name">${pkg.name}</h4>
            <div class="package-gems">
                <span class="gems-amount">${pkg.gems}</span>
                <span class="gems-label">Gems</span>
            </div>
            <div class="package-price">Rp ${formatPrice(pkg.price)}</div>
            <button class="btn-buy" onclick='buyPackage(${JSON.stringify(pkg)})'>
                <span>🛒</span> Beli Sekarang
            </button>
        `;
        
        packagesGrid.appendChild(card);
    });
}
// Fungsi untuk membeli paket
function buyPackage(packageData) {
    const nickname = document.getElementById('nicknameInput')?.value || '';
    // START: Ambil metode pembayaran yang dipilih
    const paymentMethodElement = document.getElementById('paymentMethod');
    const paymentMethodValue = paymentMethodElement?.value || '';
    const paymentMethodText = paymentMethodElement?.options[paymentMethodElement.selectedIndex]?.text || '';
    // END: Ambil metode pembayaran yang dipilih
    
    if (nickname.trim() === '') {
        alert('Silakan masukkan nickname Minecraft Anda terlebih dahulu!');
        document.getElementById('nicknameInput').focus();
        return;
    }

    // START: Validasi metode pembayaran
    if (paymentMethodValue.trim() === '') {
        alert('Silakan pilih Metode Pembayaran yang Anda inginkan!');
        paymentMethodElement.focus();
        return;
    }
    // END: Validasi metode pembayaran

    // START: Update isi pesan WhatsApp
    let message = `Halo atmin\nsaya ingin beli nih\n*╓──────── ✧ ʟɪsᴛ ✧*\n*║ ɴɪᴄᴋɴᴀᴍᴇ ᴍᴄ* : ${nickname.trim()}\n*║ ɴᴀᴍᴀ ᴘʀᴏᴅᴜᴋ* : ${packageData.name}\n*║ ᴘɪʟɪʜᴀɴ* : (${packageData.gems} Gems)\n*║ ʜᴀʀɢᴀ* : ${formatPrice(packageData.price)}\n║ ᴍᴇᴛᴏᴅᴇ ᴘᴇᴍʙᴀʏᴀʀᴀɴ* : ${paymentMethodText}\n╙──────────────❂*\nʟɪsᴛ sᴜᴅᴀʜ ᴅɪʙᴜᴀᴛ\n\n𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝗮𝘁𝗺𝗶𝗻 𝗺𝗲𝗻𝗷𝗮𝘄𝗮𝗯🙏\n\n*© ᴇʟʟʏᴀʀᴢsᴍᴘ*`;
    // END: Update isi pesan WhatsApp
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generatePackageCards();
});


