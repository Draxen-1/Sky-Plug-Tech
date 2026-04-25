// Gestion du Dashboard
let currentSection = 'overview';
let requestCount = 0;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initDashboard();
    loadAPICards();
    updateStats();
    addTerminalLog('Dashboard initialisé avec succès');
});

// Navigation entre les sections
function showSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    
    const navItem = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (navItem) navItem.classList.add('active');
    
    currentSection = sectionId;
    addTerminalLog(`Navigation vers: ${sectionId}`);
}

// Initialiser le dashboard
function initDashboard() {
    document.getElementById('overview').classList.add('active');
    
    // Mettre à jour l'heure en temps réel
    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        document.querySelector('.terminal-body').insertAdjacentHTML('afterbegin', 
            `<p>$> [${time}] Sky Plug CDM - Système actif</p>`);
    }, 5000);
}

// Charger les cartes API
function loadAPICards() {
    const apiGrid = document.getElementById('apiGrid');
    if (!apiGrid) return;
    
    apiGrid.innerHTML = '';
    
    GURU_APIS.keys.forEach((key, index) => {
        const maskedKey = key.substring(0, 15) + '...';
        const card = document.createElement('div');
        card.className = 'api-card';
        card.innerHTML = `
            <h3>⚡ Guru API #${index + 1}</h3>
            <div class="api-key-display">${maskedKey}</div>
            <p class="status-active">● Active</p>
            <button onclick="testAPI(${index})" class="btn-hacker" style="margin-top: 1rem; font-size: 0.8rem;">
                Tester
            </button>
        `;
        apiGrid.appendChild(card);
    });
}

// Tester une API
async function testAPI(index) {
    const key = GURU_APIS.keys[index];
    addTerminalLog(`Test API #${index + 1}...`);
    
    try {
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        incrementRequestCount();
        
        showNotification(`✅ API #${index + 1} opérationnelle`, 'success');
        addTerminalLog(`API #${index + 1}: Réponse OK`);
    } catch (error) {
        showNotification(`❌ Erreur API #${index + 1}`, 'error');
        addTerminalLog(`Erreur: ${error.message}`);
    }
}

// Chat AI
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const model = document.getElementById('aiModel').value;
    const message = input.value.trim();
    
    if (!message) return;
    
    const chatMessages = document.getElementById('chatMessages');
    
    // Message utilisateur
    chatMessages.innerHTML += `
        <div class="message user">${message}</div>
    `;
    
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    incrementRequestCount();
    
    // Réponse simulée (à remplacer par vrai appel API)
    setTimeout(() => {
        const responses = [
            "🔮 Analyse en cours selon les protocoles CDM...",
            "💀 Données cryptées reçues. La famille CDM opère dans l'ombre.",
            "⚡ Sky Plug activé. Puissance maximale.",
            "🌑 Les secrets du réseau sont bien gardés.",
            "🎯 Objectif verrouillé. Exécution en cours."
        ];
        
        const response = responses[Math.floor(Math.random() * responses.length)];
        
        chatMessages.innerHTML += `
            <div class="message bot">${response}</div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        addTerminalLog(`Chat: Réponse générée (${model})`);
    }, 1000);
}

// Génération d'image (simulée)
function generateImage() {
    const prompt = document.getElementById('imagePrompt').value;
    const model = document.getElementById('imageModel').value;
    
    if (!prompt) {
        showNotification('❌ Veuillez entrer une description', 'error');
        return;
    }
    
    const imageResult = document.getElementById('imageResult');
    imageResult.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div class="loading-spinner"></div>
            <p>🎨 Génération en cours via ${model}...</p>
            <p style="color: #ffaa00; margin-top: 1rem;">Prompt: "${prompt}"</p>
        </div>
    `;
    
    incrementRequestCount();
    
    setTimeout(() => {
        imageResult.innerHTML = `
            <div style="text-align: center; padding: 2rem; border: 2px dashed #00ff00;">
                <p style="font-size: 3rem;">🖼️</p>
                <p style="color: #ffaa00;">Image générée avec succès</p>
                <p>[Simulation - Connectez l'API pour de vraies images]</p>
            </div>
        `;
        addTerminalLog(`Image générée: ${model}`);
    }, 2000);
}

// Résumé de texte
function summarizeText() {
    const text = document.getElementById('summaryInput').value;
    if (!text) return;
    
    incrementRequestCount();
    
    const result = document.getElementById('summaryResult');
    result.innerHTML = '<p>⏳ Résumé en cours...</p>';
    
    setTimeout(() => {
        result.innerHTML = `
            <p style="color: #ffaa00;">📋 Résumé généré:</p>
            <p>[Simulation - Connectez l'API pour de vrais résumés]</p>
            <p style="opacity: 0.7;">Texte original: ${text.length} caractères</p>
        `;
    }, 1500);
}

// Traduction
function translateText() {
    const text = document.getElementById('translateInput').value;
    const lang = document.getElementById('targetLang').value;
    if (!text) return;
    
    incrementRequestCount();
    
    const result = document.getElementById('translateResult');
    result.innerHTML = '<p>⏳ Traduction en cours...</p>';
    
    setTimeout(() => {
        result.innerHTML = `
            <p style="color: #ffaa00;">🌍 Traduction (${lang}):</p>
            <p>[Simulation - Connectez l'API pour de vraies traductions]</p>
        `;
    }, 1500);
}

// Génération de code
function generateCode() {
    const prompt = document.getElementById('codePrompt').value;
    if (!prompt) return;
    
    incrementRequestCount();
    
    const result = document.getElementById('codeResult');
    result.innerHTML = '// ⏳ Génération en cours...';
    
    setTimeout(() => {
        result.innerHTML = `
// Code généré par SKY PLUG CDM
// [Simulation - Connectez l'API pour du vrai code]

function skyPlugCDM() {
    console.log("⚡ Sky Plug activé");
    console.log("💀 Famille CDM");
    return "Puissance maximale";
}

// ${prompt.substring(0, 50)}...
        `;
    }, 1500);
}

// Debug
function debugCode() {
    const code = document.getElementById('debugInput').value;
    if (!code) return;
    
    incrementRequestCount();
    
    const result = document.getElementById('debugResult');
    result.innerHTML = '<p>🔍 Analyse en cours...</p>';
    
    setTimeout(() => {
        result.innerHTML = `
            <p style="color: #ffaa00;">🐛 Résultat du debug:</p>
            <p>Aucune erreur détectée [Simulation]</p>
            <p style="opacity: 0.7;">Lignes analysées: ${code.split('\n').length}</p>
        `;
    }, 1500);
}

// Thème
function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    document.body.className = `dashboard-bg theme-${theme}`;
    showNotification(`🎨 Thème changé: ${theme}`, 'success');
}

// Utilitaires
function incrementRequestCount() {
    requestCount++;
    document.getElementById('reqCount').textContent = requestCount;
}

function updateStats() {
    setInterval(() => {
        document.getElementById('reqCount').textContent = requestCount;
    }, 1000);
}

function addTerminalLog(message) {
    const terminal = document.querySelector('.terminal-body');
    if (!terminal) return;
    
    const time = new Date().toLocaleTimeString();
    terminal.insertAdjacentHTML('afterbegin', 
        `<p>$> [${time}] ${message}</p>`);
    
    // Limiter le nombre de logs
    const logs = terminal.querySelectorAll('p');
    if (logs.length > 50) {
        logs[logs.length - 1].remove();
    }
}

// Gérer la touche Entrée pour le chat
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.getElementById('chatInput') === document.activeElement) {
        sendMessage();
    }
});
