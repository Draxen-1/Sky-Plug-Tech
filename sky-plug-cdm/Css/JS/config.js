// ============================================
// CONFIGURATION SKY IA - APIs GURU
// ============================================

const GURU_APIS = {
    // 🔑 TES CLÉS API GURU (fournies par toi)
    keys: [
        'guru_oyotfo9onggy4kfdch3t3r88yk3w0t8j',
        'guru_143ms9jcqrjd5dvhs19qz2ko58ubyygx',
        'guru_vpqo3qsq0mvdou9vcvjszhepln0vaw4s',
        'guru_5fqqfl725y79qa0yl6e19r01b6dbk7ou',
        'guru_b67p3ny2sfsjtyk6h6jpae9idjdjzfk4',
        'guru_9908xlvm43wauwixzciies7mwjep8oxe',
        'guru_ons5rzy3uyxt6gd68v40nz9n6js11mfl',
        'guru_k28a1t5svqgohhv84mdq0p92djdioehk',
        'guru_33a5tdn6bpm42t2kfvuhpoqqy51hd1ax',
        'guru_i8rm5lkguav6aooog2m7ijwy54mj9s4x'
    ],
    
    // Endpoints possibles pour les APIs Guru
    baseUrl: 'https://api.guru.com/v1',
    
    // Obtenir une clé aléatoire
    getRandomKey: function() {
        return this.keys[Math.floor(Math.random() * this.keys.length)];
    },
    
    // Obtenir une clé spécifique
    getKey: function(index) {
        return this.keys[index] || this.keys[0];
    }
};

// Configuration WhatsApp
const WHATSAPP_CONFIG = {
    channelUrl: 'https://whatsapp.com/channel/0029VbCArXO2phHPux5T8D3K',
    groupUrl: 'https://chat.whatsapp.com/DwnzbJJ352Z0VmbFiffNw6',
    verificationCode: 'SKYCDM'
};

// Configuration Sky IA
const SKYIA_CONFIG = {
    name: 'Sky IA',
    version: '2.0.0',
    family: 'CDM',
    natcashAccount: '+50955645090',
    natcashNumber: '50955645090',
    creator: 'Sky Plug CDM'
};
