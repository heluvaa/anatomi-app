// ===== DATA MATERI ANATOMI =====

// Data Flashcard: Tulang (Osteologi)
const tulangCards = [
    { front: "Femur", back: "Tulang Paha\nTulang terpanjang dan terkuat di tubuh, menghubungkan pinggul ke lutut", category: "tulang" },
    { front: "Tibia", back: "Tulang Kering\nTulang utama tungkai bawah, menerima beban tubuh", category: "tulang" },
    { front: "Fibula", back: "Tulang Betis\nTulang kecil di lateral tungkai bawah, tempat melekat otot", category: "tulang" },
    { front: "Humerus", back: "Tulang Lengan Atas\nTulang panjang lengan atas, dari bahu ke siku", category: "tulang" },
    { front: "Radius", back: "Tulang Pengumpil\nTulang lengan bawah di sisi ibu jari, dapat rotasi", category: "tulang" },
    { front: "Ulna", back: "Tulang Hasta\nTulang lengan bawah di sisi kelingking, membentuk siku", category: "tulang" },
    { front: "Scapula", back: "Tulang Belikat\nTulang segitiga di punggung atas, tempat otot bahu melekat", category: "tulang" },
    { front: "Clavicula", back: "Tulang Selangka\nTulang berbentuk S menghubungkan sternum ke scapula", category: "tulang" },
    { front: "Sternum", back: "Tulang Dada\nTulang pipih di tengah dada, tempat iga melekat", category: "tulang" },
    { front: "Costae", back: "Tulang Iga\n12 pasang tulang melengkung melindungi organ thorax", category: "tulang" },
    { front: "Vertebrae Cervicalis", back: "Ruas Tulang Leher\n7 ruas tulang belakang di leher, menopang kepala", category: "tulang" },
    { front: "Vertebrae Thoracicae", back: "Ruas Tulang Dada\n12 ruas tulang belakang di dada, tempat iga melekat", category: "tulang" },
    { front: "Vertebrae Lumbales", back: "Ruas Tulang Pinggang\n5 ruas tulang belakang terbesar, menahan beban tubuh", category: "tulang" },
    { front: "Sacrum", back: "Tulang Kelangkang\n5 ruas menyatu membentuk bagian belakang pelvis", category: "tulang" },
    { front: "Coccyx", back: "Tulang Ekor\n3-5 ruas menyatu di ujung tulang belakang", category: "tulang" },
    { front: "Cranium", back: "Tulang Tengkorak\nMelindungi otak, terdiri dari 8 tulang menyatu", category: "tulang" },
    { front: "Mandibula", back: "Tulang Rahang Bawah\nSatu-satunya tulang tengkorak yang dapat bergerak", category: "tulang" },
    { front: "Maxilla", back: "Tulang Rahang Atas\nMembentuk rahang atas dan langit-langit mulut", category: "tulang" },
    { front: "Patella", back: "Tulang Tempurung Lutut\nTulang sesamoid terbesar, melindungi sendi lutut", category: "tulang" },
    { front: "Carpus", back: "Tulang Pergelangan Tangan\n8 tulang kecil tersusun 2 baris", category: "tulang" },
    { front: "Metacarpus", back: "Tulang Telapak Tangan\n5 tulang panjang di telapak tangan", category: "tulang" },
    { front: "Phalanges Manus", back: "Tulang Jari Tangan\n14 tulang (3 per jari, 2 di ibu jari)", category: "tulang" },
    { front: "Tarsus", back: "Tulang Pergelangan Kaki\n7 tulang membentuk bagian belakang kaki", category: "tulang" },
    { front: "Metatarsus", back: "Tulang Telapak Kaki\n5 tulang panjang di telapak kaki", category: "tulang" },
    { front: "Phalanges Pedis", back: "Tulang Jari Kaki\n14 tulang (3 per jari, 2 di ibu jari kaki)", category: "tulang" },
    { front: "Os Coxae", back: "Tulang Pinggul\nTerdiri dari ilium, ischium, pubis yang menyatu", category: "tulang" },
    { front: "Ilium", back: "Tulang Usus\nBagian atas dan terluas dari tulang pinggul", category: "tulang" },
    { front: "Ischium", back: "Tulang Duduk\nBagian bawah belakang tulang pinggul, menahan berat saat duduk", category: "tulang" },
    { front: "Pubis", back: "Tulang Kemaluan\nBagian depan bawah tulang pinggul", category: "tulang" },
    { front: "Calcaneus", back: "Tulang Tumit\nTulang tarsus terbesar, menerima beban tubuh saat berdiri", category: "tulang" }
];

// Data Flashcard: Otot (Miologi)
const ototCards = [
    { front: "Biceps Brachii", back: "Otot Bisep Lengan\nFleksi siku dan supinasi lengan bawah", category: "otot" },
    { front: "Triceps Brachii", back: "Otot Trisep Lengan\nEkstensi siku, meluruskan lengan", category: "otot" },
    { front: "Deltoideus", back: "Otot Delta\nAbduksi, fleksi, dan ekstensi bahu", category: "otot" },
    { front: "Pectoralis Major", back: "Otot Dada Besar\nAdduksi dan rotasi medial lengan", category: "otot" },
    { front: "Latissimus Dorsi", back: "Otot Punggung Lebar\nEkstensi, adduksi, dan rotasi medial lengan", category: "otot" },
    { front: "Trapezius", back: "Otot Trapesium\nElevasi, retraksi, dan rotasi scapula", category: "otot" },
    { front: "Rectus Abdominis", back: "Otot Perut Lurus\nFleksi batang tubuh, menekan abdomen", category: "otot" },
    { front: "Obliquus Externus Abdominis", back: "Otot Serong Luar Perut\nRotasi dan fleksi lateral batang tubuh", category: "otot" },
    { front: "Quadriceps Femoris", back: "Otot Paha Depan (4 kepala)\nEkstensi lutut, fleksi panggul", category: "otot" },
    { front: "Hamstring", back: "Otot Paha Belakang\nFleksi lutut, ekstensi panggul", category: "otot" },
    { front: "Gastrocnemius", back: "Otot Betis\nFleksi plantar kaki (berdiri jinjit)", category: "otot" },
    { front: "Soleus", back: "Otot Soleus\nFleksi plantar kaki, di bawah gastrocnemius", category: "otot" },
    { front: "Tibialis Anterior", back: "Otot Kering Depan\nDorsifleksi dan inversi kaki", category: "otot" },
    { front: "Gluteus Maximus", back: "Otot Bokong Besar\nEkstensi dan rotasi lateral panggul", category: "otot" },
    { front: "Gluteus Medius", back: "Otot Bokong Tengah\nAbduksi dan rotasi medial panggul", category: "otot" },
    { front: "Iliopsoas", back: "Otot Iliopsoas\nFleksor panggul terkuat", category: "otot" },
    { front: "Adductor Magnus", back: "Otot Adduktor Besar\nAdduksi paha", category: "otot" },
    { front: "Sternocleidomastoideus", back: "Otot Sternokleidomastoid\nFleksi dan rotasi kepala", category: "otot" },
    { front: "Masseter", back: "Otot Masseter\nElevasi mandibula (menggigit)", category: "otot" },
    { front: "Temporalis", back: "Otot Temporalis\nElevasi dan retraksi mandibula", category: "otot" },
    { front: "Diaphragma", back: "Otot Diafragma\nOtot utama pernapasan, kontraksi = inspirasi", category: "otot" },
    { front: "Intercostales", back: "Otot Antar Iga\nMembantu pernapasan (elevasi dan depresi iga)", category: "otot" },
    { front: "Serratus Anterior", back: "Otot Gerigi Depan\nProtraksi scapula", category: "otot" },
    { front: "Brachialis", back: "Otot Brakialis\nFleksor siku yang kuat", category: "otot" },
    { front: "Brachioradialis", back: "Otot Brakioradialis\nFleksi siku dalam posisi netral", category: "otot" }
];

// Data Flashcard: Organ (Viscera)
const organCards = [
    { front: "Cor", back: "Jantung\nMemompa darah ke seluruh tubuh", category: "organ" },
    { front: "Pulmo", back: "Paru-paru\nPertukaran gas (O₂ dan CO₂)", category: "organ" },
    { front: "Hepar", back: "Hati\nMetabolisme, detoksifikasi, produksi empedu", category: "organ" },
    { front: "Ren", back: "Ginjal\nFiltrasi darah, produksi urin", category: "organ" },
    { front: "Vesica Urinaria", back: "Kandung Kemih\nMenyimpan urin sementara", category: "organ" },
    { front: "Gaster", back: "Lambung\nMencerna makanan dengan asam dan enzim", category: "organ" },
    { front: "Intestinum Tenue", back: "Usus Halus\nAbsorpsi nutrisi (duodenum, jejunum, ileum)", category: "organ" },
    { front: "Intestinum Crassum", back: "Usus Besar\nAbsorpsi air, pembentukan feses", category: "organ" },
    { front: "Lien (Spleen)", back: "Limpa\nFiltrasi darah, penyimpanan sel darah", category: "organ" },
    { front: "Pancreas", back: "Pankreas\nProduksi enzim pencernaan dan hormon (insulin)", category: "organ" },
    { front: "Vesica Fellea", back: "Kandung Empedu\nMenyimpan dan mengkonsentrasi empedu", category: "organ" },
    { front: "Oesophagus", back: "Kerongkongan\nMenyalurkan makanan dari faring ke lambung", category: "organ" },
    { front: "Trachea", back: "Trakea\nSaluran udara dari laring ke bronkus", category: "organ" },
    { front: "Larynx", back: "Laring\nProduksi suara, melindungi jalan napas", category: "organ" },
    { front: "Pharynx", back: "Faring\nSaluran bersama makanan dan udara", category: "organ" },
    { front: "Thyroidea", back: "Kelenjar Tiroid\nProduksi hormon metabolisme (T3, T4)", category: "organ" },
    { front: "Cerebrum", back: "Otak Besar\nPusat kesadaran, berpikir, memori", category: "organ" },
    { front: "Cerebellum", back: "Otak Kecil\nKoordinasi gerakan dan keseimbangan", category: "organ" },
    { front: "Medulla Spinalis", back: "Sumsum Tulang Belakang\nJalur saraf antara otak dan tubuh", category: "organ" },
    { front: "Medulla Oblongata", back: "Medula Oblongata\nPusat kontrol pernapasan dan jantung", category: "organ" },
    { front: "Uterus", back: "Rahim\nTempat perkembangan janin", category: "organ" },
    { front: "Ovarium", back: "Indung Telur\nProduksi sel telur dan hormon reproduksi", category: "organ" },
    { front: "Testis", back: "Testis\nProduksi sperma dan testosteron", category: "organ" },
    { front: "Prostata", back: "Prostat\nProduksi cairan semen", category: "organ" },
    { front: "Appendix Vermiformis", back: "Apendiks\nBagian usus buntu, fungsi imunologi minor", category: "organ" }
];

// Data Flashcard: Istilah Dasar Anatomi
const istilahCards = [
    { front: "Anterior", back: "Depan / Di bagian depan tubuh", category: "istilah" },
    { front: "Posterior", back: "Belakang / Di bagian belakang tubuh", category: "istilah" },
    { front: "Superior", back: "Atas / Lebih dekat ke kepala", category: "istilah" },
    { front: "Inferior", back: "Bawah / Lebih jauh dari kepala", category: "istilah" },
    { front: "Medial", back: "Tengah / Lebih dekat ke garis tengah tubuh", category: "istilah" },
    { front: "Lateral", back: "Samping / Lebih jauh dari garis tengah tubuh", category: "istilah" },
    { front: "Proximal", back: "Proksimal / Lebih dekat ke batang tubuh", category: "istilah" },
    { front: "Distal", back: "Distal / Lebih jauh dari batang tubuh", category: "istilah" },
    { front: "Superficial", back: "Superfisial / Dekat permukaan kulit", category: "istilah" },
    { front: "Profundus", back: "Dalam / Jauh dari permukaan", category: "istilah" },
    { front: "Ventral", back: "Perut / Bagian depan tubuh", category: "istilah" },
    { front: "Dorsal", back: "Punggung / Bagian belakang tubuh", category: "istilah" },
    { front: "Cranial", back: "Kranial / Menuju kepala", category: "istilah" },
    { front: "Caudal", back: "Kaudal / Menuju ekor/kaki", category: "istilah" },
    { front: "Fleksi", back: "Gerakan menekuk/mengurangi sudut sendi", category: "istilah" },
    { front: "Ekstensi", back: "Gerakan meluruskan/menambah sudut sendi", category: "istilah" },
    { front: "Abduksi", back: "Gerakan menjauhi garis tengah tubuh", category: "istilah" },
    { front: "Adduksi", back: "Gerakan mendekati garis tengah tubuh", category: "istilah" },
    { front: "Pronasi", back: "Rotasi lengan bawah telapak menghadap bawah", category: "istilah" },
    { front: "Supinasi", back: "Rotasi lengan bawah telapak menghadap atas", category: "istilah" }
];

// Data Kasus Klinis PBL
const kasusKlinis = [
    {
        scenario: "Seorang mahasiswi 19 tahun jatuh dari sepeda motor. Dia mengeluh nyeri hebat di lengan atas kanan dan tidak bisa menggerakkan lengan. Pada pemeriksaan tampak deformitas dan bengkak di pertengahan lengan atas.",
        question: "Tulang apa yang paling mungkin mengalami fraktur?",
        options: ["Humerus", "Radius", "Ulna", "Clavicula"],
        correct: 0,
        explanation: "Humerus adalah tulang lengan atas. Fraktur humerus sering terjadi akibat trauma langsung atau jatuh dengan tangan terbuka. Gejala khas: nyeri, deformitas, dan keterbatasan gerak lengan atas.",
        category: "tulang"
    },
    {
        scenario: "Pasien laki-laki 25 tahun datang ke UGD setelah kecelakaan motor. Dia mengeluh nyeri hebat di paha kanan dan tidak bisa berdiri. Tungkai tampak memendek dan rotasi eksternal.",
        question: "Tulang apa yang paling mungkin patah?",
        options: ["Femur", "Tibia", "Fibula", "Patella"],
        correct: 0,
        explanation: "Femur (tulang paha) adalah tulang terpanjang dan terkuat. Fraktur femur biasanya akibat trauma berat. Tanda khas: pemendekan tungkai, rotasi eksternal, dan nyeri hebat.",
        category: "tulang"
    },
    {
        scenario: "Seorang pemain basket mengalami cedera saat mendarat setelah melompat. Dia merasakan nyeri di depan lutut dan tidak bisa meluruskan kaki. Tampak benjolan di bawah lutut.",
        question: "Struktur apa yang kemungkinan mengalami ruptur?",
        options: ["Tendon patella", "Ligamen cruciatum anterior", "Meniscus", "Tendon achilles"],
        correct: 0,
        explanation: "Tendon patella menghubungkan patella dengan tibia. Ruptur tendon patella menyebabkan ketidakmampuan ekstensi lutut aktif dan patella bergeser ke atas (high-riding patella).",
        category: "otot"
    },
    {
        scenario: "Seorang angkat beban mengeluh nyeri mendadak di belakang betis saat mengangkat beban berat. Dia tidak bisa berdiri jinjit dan terasa ada 'cekungan' di belakang betis.",
        question: "Otot atau struktur apa yang kemungkinan ruptur?",
        options: ["Tendon Achilles", "Gastrocnemius", "Soleus", "Tibialis anterior"],
        correct: 0,
        explanation: "Tendon Achilles (tendon calcaneus) menghubungkan otot gastrocnemius-soleus ke calcaneus. Ruptur achilles menyebabkan ketidakmampuan plantar fleksi (berdiri jinjit) dan Thompson test positif.",
        category: "otot"
    },
    {
        scenario: "Pasien wanita 30 tahun mengeluh sesak napas dan nyeri dada setelah kecelakaan. Pada pemeriksaan fisik terdengar suara napas menurun di paru kanan.",
        question: "Organ apa yang kemungkinan mengalami trauma?",
        options: ["Pulmo (paru-paru)", "Cor (jantung)", "Hepar (hati)", "Gaster (lambung)"],
        correct: 0,
        explanation: "Pulmo (paru-paru) terletak di rongga thorax dan dilindungi iga. Trauma thorax dapat menyebabkan pneumothorax (udara di rongga pleura), ditandai dengan sesak napas dan suara napas menurun.",
        category: "organ"
    },
    {
        scenario: "Seorang mahasiswa mengalami nyeri perut kanan atas setelah kecelakaan motor. Pada pemeriksaan abdomen teraba massa di kuadran kanan atas dan ada tanda peritonitis.",
        question: "Organ apa yang paling mungkin mengalami ruptur?",
        options: ["Hepar (hati)", "Gaster (lambung)", "Lien (limpa)", "Ren (ginjal)"],
        correct: 0,
        explanation: "Hepar (hati) terletak di kuadran kanan atas abdomen, di bawah diafragma. Ruptur hepar akibat trauma tumpul menyebabkan perdarahan intra-abdominal dan tanda peritonitis.",
        category: "organ"
    },
    {
        scenario: "Pada pemeriksaan fisik, dokter meminta pasien mengangkat tangan lurus ke samping (abduksi bahu) melawan tahanan.",
        question: "Otot apa yang sedang diperiksa?",
        options: ["Deltoideus", "Pectoralis major", "Latissimus dorsi", "Biceps brachii"],
        correct: 0,
        explanation: "Deltoideus adalah otot utama abduksi bahu (mengangkat lengan ke samping). Otot ini menutupi sendi bahu dan dibentuk oleh 3 bagian: anterior, middle, dan posterior.",
        category: "otot"
    },
    {
        scenario: "Pasien diminta duduk dan meluruskan lutut melawan tahanan untuk menguji kekuatan otot paha depan.",
        question: "Kelompok otot apa yang sedang diperiksa?",
        options: ["Quadriceps femoris", "Hamstring", "Adductor", "Gluteus"],
        correct: 0,
        explanation: "Quadriceps femoris terdiri dari 4 otot (rectus femoris, vastus lateralis, medialis, intermedius) yang berfungsi ekstensi lutut. Kelemahan quadriceps menyebabkan kesulitan berdiri dari posisi duduk.",
        category: "otot"
    },
    {
        scenario: "Seorang pasien post stroke tidak bisa menggerakkan lengan kanannya. Pada pemeriksaan CT scan tampak lesi di hemisfer cerebri kiri.",
        question: "Mengapa lesi di hemisfer kiri menyebabkan kelumpuhan lengan kanan?",
        options: ["Traktus kortikospinalis menyilang di medulla oblongata", "Nervus spinalis bercabang kontralateral", "Cerebellum mengontrol sisi kontralateral", "Medulla spinalis memiliki jalur ipsilateral"],
        correct: 0,
        explanation: "Traktus kortikospinalis (jalur motorik) menyilang (decussatio pyramidum) di medulla oblongata. Sehingga hemisfer cerebri kiri mengontrol sisi tubuh kanan, dan sebaliknya.",
        category: "organ"
    },
    {
        scenario: "Seorang pasien mengalami fraktur basis cranii. Pada pemeriksaan tampak cairan jernih keluar dari hidung (rhinorrhea).",
        question: "Cairan apa yang kemungkinan keluar?",
        options: ["Liquor cerebrospinalis (CSF)", "Darah", "Mucus", "Lymph"],
        correct: 0,
        explanation: "Liquor cerebrospinalis (CSF) mengelilingi otak dan medulla spinalis. Fraktur basis cranii dapat merobek meninges, menyebabkan CSF bocor keluar (rhinorrhea/otorrhea). Tes halo sign dapat mengonfirmasi.",
        category: "organ"
    },
    {
        scenario: "Pada anatomi directional, dokter mendeskripsikan luka 'di anterior cubiti sinistra'.",
        question: "Di mana lokasi luka tersebut?",
        options: ["Depan siku kiri", "Belakang siku kiri", "Depan siku kanan", "Belakang siku kanan"],
        correct: 0,
        explanation: "Anterior = depan, cubiti = siku, sinistra = kiri. Istilah anatomi menggunakan posisi anatomical (tubuh berdiri, telapak tangan menghadap depan) sebagai referensi.",
        category: "istilah"
    },
    {
        scenario: "Dokter bedah menjelaskan insisi akan dibuat di 'regio epigastrica'.",
        question: "Di mana lokasi insisi tersebut?",
        options: ["Perut atas tengah (di bawah sternum)", "Perut bawah tengah", "Perut kanan atas", "Perut kiri atas"],
        correct: 0,
        explanation: "Regio epigastrica adalah area abdomen di tengah atas, di bawah sternum (ulu hati). 9 regio abdomen: hipokondrium kanan/kiri, epigastrium, lumbal kanan/kiri, umbilical, inguinal kanan/kiri, hipogastrium.",
        category: "istilah"
    },
    {
        scenario: "Pasien fraktur radius 1/3 distal. Dokter menjelaskan fragmen tulang 'displacement anterior'.",
        question: "Apa arti 'displacement anterior'?",
        options: ["Fragmen tulang bergeser ke depan", "Fragmen tulang bergeser ke belakang", "Fragmen tulang bergeser ke samping", "Fragmen tulang bergeser ke dalam"],
        correct: 0,
        explanation: "Anterior = depan. Displacement anterior berarti fragmen tulang bergeser ke arah ventral/depan. Pada fraktur radius distal, sering terjadi displacement dorsal (Colles fracture) atau volar (Smith fracture).",
        category: "istilah"
    },
    {
        scenario: "Seorang atlet mengalami cedera bahu saat berenang. Dia kesulitan melakukan gerakan 'adduksi horizontal bahu'.",
        question: "Gerakan apa yang dimaksud?",
        options: ["Memeluk dada (menggerakkan lengan melintasi tubuh)", "Membuka lengan ke samping", "Mengangkat lengan ke atas", "Menurunkan lengan ke bawah"],
        correct: 0,
        explanation: "Adduksi horizontal adalah gerakan lengan melintasi garis tengah tubuh pada bidang horizontal (seperti gerakan memeluk). Otot pectoralis major adalah adduksi horizontal utama.",
        category: "istilah"
    },
    {
        scenario: "Mahasiswi FK belajar tentang tulang-tulang yang melindungi otak. Total ada 8 tulang yang menyatu membentuk cranium.",
        question: "Manakah yang BUKAN termasuk tulang cranium?",
        options: ["Mandibula", "Frontal", "Parietal", "Occipital"],
        correct: 0,
        explanation: "Mandibula adalah tulang rahang bawah, termasuk tulang wajah (facial bones), bukan cranium. 8 tulang cranium: frontal (1), parietal (2), temporal (2), occipital (1), sphenoid (1), ethmoid (1).",
        category: "tulang"
    },
    {
        scenario: "Pada praktikum anatomi, mahasiswa diminta mengidentifikasi tulang tarsus. Total ada 7 tulang tarsus.",
        question: "Manakah yang BUKAN tulang tarsus?",
        options: ["Metatarsal", "Calcaneus", "Talus", "Navicular"],
        correct: 0,
        explanation: "Metatarsal adalah tulang telapak kaki (5 buah), bukan tarsus. 7 tulang tarsus: calcaneus, talus, navicular, cuboid, cuneiform (medial, intermediate, lateral).",
        category: "tulang"
    },
    {
        scenario: "Seorang pasien datang dengan gejala ikterus (kulit kuning). Dokter menjelaskan bahwa organ tertentu mengalami gangguan produksi dan ekskresi bilirubin.",
        question: "Organ apa yang dimaksud?",
        options: ["Hepar (hati)", "Pancreas", "Lien (limpa)", "Gaster (lambung)"],
        correct: 0,
        explanation: "Hepar (hati) memproduksi bilirubin dari pemecahan hemoglobin, lalu mengekskresikannya via empedu. Gangguan hepar menyebabkan akumulasi bilirubin di darah dan jaringan (ikterus).",
        category: "organ"
    },
    {
        scenario: "Pasien diabetes memiliki gangguan produksi insulin. Dokter menjelaskan bahwa sel beta di pulau Langerhans organ tertentu yang bermasalah.",
        question: "Organ apa yang dimaksud?",
        options: ["Pancreas", "Hepar", "Thyroidea", "Adrenal"],
        correct: 0,
        explanation: "Pancreas memiliki fungsi endokrin (pulau Langerhans) yang memproduksi insulin (sel beta) dan glukagon (sel alpha). Kerusakan sel beta menyebabkan Diabetes Mellitus tipe 1.",
        category: "organ"
    },
    {
        scenario: "Pada praktikum, mahasiswa mempelajari otot-otot rotator cuff yang menstabilkan sendi bahu. Total ada 4 otot.",
        question: "Manakah yang BUKAN otot rotator cuff?",
        options: ["Deltoideus", "Supraspinatus", "Infraspinatus", "Subscapularis"],
        correct: 0,
        explanation: "Deltoideus adalah otot bahu superfisial, bukan bagian rotator cuff. 4 otot rotator cuff: Supraspinatus, Infraspinatus, Teres minor, Subscapularis (SITS). Rotator cuff menstabilkan caput humeri di glenoidal cavity.",
        category: "otot"
    },
    {
        scenario: "Seorang pasien post operasi appendectomy. Dokter menjelaskan appendix terletak di pertemuan antara intestinum tenue dan intestinum crassum.",
        question: "Di bagian mana appendix berada?",
        options: ["Caecum (usus buntu)", "Colon ascendens", "Colon transversum", "Rectum"],
        correct: 0,
        explanation: "Appendix vermiformis melekat pada caecum (bagian awal intestinum crassum) di pertemuan ileum (akhir intestinum tenue) dan colon. Posisi paling sering: retrocaecal, namun bisa bervariasi (McBurney's point).",
        category: "organ"
    }
];

// Gabungkan semua kartu flashcard
const allFlashcards = [...tulangCards, ...ototCards, ...organCards, ...istilahCards];
