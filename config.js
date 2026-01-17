// config.js
const STORE_CONFIG = {
    // 1. INFO TOKO
    storeName: "SheetStore 🛒",
    whatsappNumber: "62882000710173", // Format: 628xxx (Tanpa + atau 0 di depan)
    storeAddress: "Bandung, Jawa Barat", // Alamat Toko untuk info di footer/admin

    // 2. DATA PRODUK
    productCsvUrl: "product.csv", // Nama file CSV produk

    // 3. PEMBAYARAN
    bankAccounts: [
        { bank: "BCA", number: "1234567890", name: "Toko Saya", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" },
        { bank: "BRI", number: "0987654321", name: "Toko Saya", logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg" },
        { bank: "MANDIRI", number: "1122334455", name: "Toko Saya", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" }
    ],
    qrisImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",


    defaultOngkirRate: 45000, 
    provinceBaseRates: {
        '11': 45000, // Aceh
        '12': 35000, // Sumatera Utara
        '13': 30000, // Sumatera Barat
        '14': 25000, // Riau
        '15': 28000, // Jambi
        '16': 22000, // Sumatera Selatan
        '17': 26000, // Bengkulu
        '18': 18000, // Lampung
        '19': 20000, // Kep. Bangka Belitung
        '21': 20000, // Kep. Riau
        '31': 10000, // DKI Jakarta
        '32': 9000,  // Jawa Barat
        '33': 15000, // Jawa Tengah
        '34': 16000, // DI Yogyakarta
        '35': 17000, // Jawa Timur
        '36': 10000, // Banten
        '51': 22000, // Bali
        '52': 28000, // Nusa Tenggara Barat
        '53': 35000, // Nusa Tenggara Timur
        '61': 38000, // Kalimantan Barat
        '62': 36000, // Kalimantan Tengah
        '63': 35000, // Kalimantan Selatan
        '64': 38000, // Kalimantan Timur
        '65': 40000, // Kalimantan Utara
        '71': 42000, // Sulawesi Utara
        '72': 40000, // Sulawesi Tengah
        '73': 38000, // Sulawesi Selatan
        '74': 40000, // Sulawesi Tenggara
        '75': 42000, // Gorontalo
        '76': 42000, // Sulawesi Barat
        '81': 55000, // Maluku
        '82': 58000, // Maluku Utara
        '91': 70000, // Papua Barat
        '94': 75000  // Papua
    }
    
};