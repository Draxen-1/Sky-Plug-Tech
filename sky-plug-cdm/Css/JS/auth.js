// Vérification d'accès
function verifyAccess() {
    const code = document.getElementById('verificationCode').value;
    
    if (code === WHATSAPP_CONFIG.verificationCode) {
        // Animation de succès
        const container = document.querySelector('.access-container');
        container.style.animation = 'successPulse 0.5s';
        
        // Stocker l'authentification
        localStorage.setItem('skyplug_auth', 'true');
        localStorage.setItem('skyplug_user', 'CDM_MEMBER');
        
        // Effet matrix intensifié
        intensifyMatrix();
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
        showNotification('✅ ACCÈS AUTORISÉ - Bienvenue dans la famille CDM', 'success');
    } else {
        // Animation d'erreur
        const input = document.getElementById('verificationCode');
        input.style.animation = 'shake 0.5s';
        input.style.borderColor = '#ff0000';
        input.value = '';
        
        showNotification('⛔ ACCÈS REFUSÉ - Rejoignez la chaîne WhatsApp d\'abord', 'error');
        
        setTimeout(() => {
            input.style.animation = '';
            input.style.borderColor = '#00ff00';
        }, 500);
    }
}

// Vérifier si l'utilisateur est déjà authentifié
function checkAuth() {
    if (!localStorage.getItem('skyplug_auth') && 
        !window.location.href.includes('index.html')) {
        window.location.href = 'index.html';
    }
}

// Notification système
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `system-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'rgba(0,255,0,0.9)' : 'rgba(255,0,0,0.9)'};
        color: #000;
        border-radius: 10px;
        font-family: 'Share Tech Mono', monospace;
        z-index: 9999;
        animation: slideIn 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animation shake
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    @keyframes successPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Exécuter la vérification au chargement
checkAuth();
