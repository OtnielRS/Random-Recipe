const recipe = [
    {
        nama: "Nasi Goreng",
        bahan: [
            "Nasi",
            "Telur",
            "Bawang Putih",
            "Kecap"
        ],
        langkah: [
            
         "Panaskan sedikit minyak di wajan", 
         "Tumis bawang putih, bawang merah, dan cabai merah hingga harum dan matang",
         "Masukkan nasi putih, aduk rata bersama orak-arik telur dan bumbu tumis",
         "Tambahkan kecap manis", 
         "Masukkan irisan daun bawang, aduk sebentar, lalu angkat dan sajikan hangat"

        ]
    },

    {
        nama: "Indomie Goreng",
        bahan: [
            "Indomie",
            "Telur",
            "Bawang Merah",
            "Seledri"
        ],
        langkah: [
            "Rebus mie dalam air mendidih selama 2 menit hingga setengah matang, lalu tiriskan.", 
         "Panaskan minyak di wajan",
         "Masukkan telur, buat orak-arik hingga matang.",
         "Masukkan sawi hijau, aduk hingga sedikit layu.", 
         "Masukkan mie yang sudah ditiriskan beserta seluruh bumbu Indomie",
         "Aduk cepat hingga semua bumbu dan bahan tercampur rata dan matang. Angkat dan sajikan."
        ]
    },
    
    {
        nama: "Tempe Mendoan",
        bahan: [
            "1 papan tempe",
            "100 gram tepung terigu",
            "2 sendok makan tepung beras",
            "2 batang daun bawang (iris halus)",
            "Air secukupnya (hingga adonan agak encer)",
            "Minyak goreng secukupnya"
        ],
        langkah: [
            "Campurkan tepung terigu, tepung beras, bumbu halus, dan daun bawang dalam wadah.",
            "Tuang air sedikit demi sedikit sambil diaduk hingga adonan kental encer (khas mendoan).",
            "Celupkan lembaran tempe ke dalam adonan tepung hingga seluruh permukaannya tertutup.",
            "Panaskan minyak dalam jumlah banyak dengan api sedang.",
            "Goreng tempe sebentar saja (sekitar 1-2menit per sisi) hingga adonan matang tetapi tetap lembek dan tidak garing.",
            "Angkat, tiriskan, dan sajikan bersama sambal kecap cabai rawit."

        ]
    },

    {
        nama: "Soto Lamongan",
        bahan: [
            	"1/2 ekor ayam (potong 2 bagian)",
            	"1.5 liter air",
            	"2 batang serai (memarkan)",
            	"3 lembar daun jeruk",
            	"2 lembar daun salam",
            	"1 batang daun bawang (iris)",
            	"Garam, gula, dan kaldu bubuk secukupnya",
            	"Minyak untuk menumis"
        ],
        langkah: [
            "Rebus ayam dalam 1.5 liter air hingga mendidih dan empuk.",
            "Tumis bumbu halus bersama serai, daun jeruk, dan daun salam hingga harum dan matang.",
            "Masukkan tumisan bumbu ke dalam panci rebusan ayam. Tambahkan garam, gula, dan kaldu bubuk.",
            "Angkat ayam dari kuah, lalu goreng sebentar hingga kecokelatan. Suwir-suwir daging ayamnya.",
            "Masukkan irisan daun bawang ke dalam kuah soto, koreksi rasa, lalu matikan api.",
            "Penyajian: Susun soun, kol, ayam suwir, dan telur rebus dalam mangkuk. Tuangkan kuah soto panas, lalu taburi dengan bubuk koya, perasan jeruk nipis, dan sambal."
        ]
    }
    
]

localStorage.setItem("resep", JSON.stringify(recipe))