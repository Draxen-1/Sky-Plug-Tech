// ============================================
// SKY IA - SYSTÈME D'AUTHENTIFICATION
// ============================================

// Configuration
const AUTH_CONFIG = {
    verificationCodeLength: 6,
    resendTimerSeconds: 60,
    maxLoginAttempts: 5,
    sessionDuration: 7 * 24 * 60 * 60 * 1000, // 7 jours
    natcashAccount: '+50955645090'
};

// Gestion des utilisateurs (localStorage)
class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('skyia_users') || '{}');
        this.sessions = JSON.parse(localStorage.getItem('skyia_sessions') || '{}');
        this.pendingVerifications = JSON.parse(localStorage.getItem('skyia_pending_verifications') || '{}');
    }
    
    // Créer un utilisateur
    createUser(name, email, password, whatsapp = '') {
        // Vérifier si l'email existe déjà
        for (let userId in this.users) {
            if (this.users[userId].email === email) {
                throw new Error('Cet email est déjà utilisé');
            }
        }
        
        const userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        const verificationCode = this.generateVerificationCode();
        
        const user = {
            id: userId,
            name: name,
            email: email,
            password: this.hashPassword(password), // Hash simple (à remplacer par vrai hash)
            whatsapp: whatsapp,
            verified: false,
            premium: false,
            premiumPlan: null,
            premiumExpiry: null,
            createdAt: new Date().toISOString(),
            lastLogin: null,
            loginAttempts: 0,
            unlockedFeatures: {},
            queriesCount: 0,
            websitesCreated: 0,
            exercisesSolved: 0,
            natcashPayments: []
        };
        
        this.users[userId] = user;
        this.pendingVerifications[email] = {
            code: verificationCode,
            userId: userId,
            expiresAt: Date.now() + 30 * 60 * 1000 // 30 minutes
        };
        
        this.saveUsers();
        this.savePendingVerifications();
        
        // Simuler l'envoi d'email
        this.simulateEmailSend(email, verificationCode);
        
        return { userId, email, verificationCode };
    }
    
    // Vérifier l'email
    verifyEmail(email, code) {
        const pending = this.pendingVerifications[email];
        
        if (!pending) {
            throw new Error('Aucune vérification en attente pour cet email');
        }
        
        if (Date.now() > pending.expiresAt) {
            delete this.pendingVerifications[email];
            this.savePendingVerifications();
            throw new Error('Le code de vérification a expiré');
        }
        
        if (pending.code !== code) {
            throw new Error('Code de vérification incorrect');
        }
        
        // Marquer l'utilisateur comme vérifié
        const user = this.users[pending.userId];
        if (user) {
            user.verified = true;
            this.users[pending.userId] = user;
        }
        
        // Supprimer la vérification en attente
        delete this.pendingVerifications[email];
        
        this.saveUsers();
        this.savePendingVerifications();
        
        return user;
    }
    
    // Connexion
    login(email, password, rememberMe = false) {
        let user = null;
        let userId = null;
        
        // Trouver l'utilisateur
        for (let id in this.users) {
            if (this.users[id].email === email) {
                user = this.users[id];
                userId = id;
                break;
            }
        }
        
        if (!user) {
            throw new Error('Email ou mot de passe incorrect');
        }
        
        // Vérifier les tentatives de connexion
        if (user.loginAttempts >= AUTH_CONFIG.maxLoginAttempts) {
            throw new Error('Compte bloqué. Trop de tentatives. Réinitialisez votre mot de passe.');
        }
        
        // Vérifier le mot de passe
        if (user.password !== this.hashPassword(password)) {
            user.loginAttempts++;
            this.users[userId] = user;
            this.saveUsers();
            throw new Error(`Email ou mot de passe incorrect. Tentatives restantes : ${AUTH_CONFIG.maxLoginAttempts - user.loginAttempts}`);
        }
        
        // Vérifier si l'email est vérifié
        if (!user.verified) {
            throw new Error('Veuillez vérifier votre email avant de vous connecter');
        }
        
        // Réinitialiser les tentatives
        user.loginAttempts = 0;
        user.lastLogin = new Date().toISOString();
        this.users[userId] = user;
        
        // Créer une session
        const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        const sessionDuration = rememberMe ? AUTH_CONFIG.sessionDuration * 4 : AUTH_CONFIG.sessionDuration;
        
        this.sessions[sessionId] = {
            userId: userId,
            email: email,
            createdAt: Date.now(),
            expiresAt: Date.now() + sessionDuration,
            rememberMe: rememberMe
        };
        
        this.saveUsers();
        this.saveSessions();
        
        // Stocker la session dans le localStorage
        localStorage.setItem('skyia_current_session', JSON.stringify({
            sessionId: sessionId,
            userId: userId,
            email: email,
            name: user.name,
            premium: user.premium,
            verified: user.verified
        }));
        
        return { user, sessionId };
    }
    
    // Vérifier la session actuelle
    checkSession() {
        const currentSession = JSON.parse(localStorage.getItem('skyia_current_session') || 'null');
        
        if (!currentSession) {
            return null;
        }
        
        const session = this.sessions[currentSession.sessionId];
        
        if (!session) {
            localStorage.removeItem('skyia_current_session');
            return null;
        }
        
        if (Date.now() > session.expiresAt) {
            delete this.sessions[currentSession.sessionId];
            this.saveSessions();
            localStorage.removeItem('skyia_current_session');
            return null;
        }
        
        return currentSession;
    }
    
    // Déconnexion
    logout() {
        const currentSession = JSON.parse(localStorage.getItem('skyia_current_session') || 'null');
        
        if (currentSession && this.sessions[currentSession.sessionId]) {
            delete this.sessions[currentSession.sessionId];
            this.saveSessions();
        }
        
        localStorage.removeItem('skyia_current_session');
        localStorage.removeItem('skyia_unlocked');
    }
    
    // Réinitialiser le mot de passe
    resetPassword(email) {
        let user = null;
        let userId = null;
        
        for (let id in this.users) {
            if (this.users[id].email === email) {
                user = this.users[id];
                userId = id;
                break;
            }
        }
        
        if (!user) {
            throw new Error('Aucun compte trouvé avec cet email');
        }
        
        const resetCode = this.generateVerificationCode();
        
        this.pendingVerifications[email + '_reset'] = {
            code: resetCode,
            userId: userId,
            type: 'password_reset',
            expiresAt: Date.now() + 15 * 60 * 1000
        };
        
        this.savePendingVerifications();
        this.simulateEmailSend(email, resetCode, 'password_reset');
        
        return true;
    }
    
    // Mettre à jour le mot de passe
    updatePassword(email, resetCode, newPassword) {
        const pending = this.pendingVerifications[email + '_reset'];
        
        if (!pending || pending.type !== 'password_reset') {
            throw new Error('Aucune réinitialisation en cours');
        }
        
        if (pending.code !== resetCode) {
            throw new Error('Code de réinitialisation incorrect');
        }
        
        const user = this.users[pending.userId];
        user.password = this.hashPassword(newPassword);
        user.loginAttempts = 0;
        this.users[pending.userId] = user;
        
        delete this.pendingVerifications[email + '_reset'];
        
        this.saveUsers();
        this.savePendingVerifications();
        
        return true;
    }
    
    // Passer en premium
    upgradeToPremium(userId, plan, amount) {
        const user = this.users[userId];
        
        if (!user) throw new Error('Utilisateur non trouvé');
        
        const plans = {
            pro: { duration: 30, price: 500 },
            max: { duration: 30, price: 1000 },
            elite: { duration: 30, price: 2000 }
        };
        
        const selectedPlan = plans[plan];
        
        user.premium = true;
        user.premiumPlan = plan;
        user.premiumExpiry = Date.now() + selectedPlan.duration * 24 * 60 * 60 * 1000;
        user.natcashPayments.push({
            plan: plan,
            amount: amount,
            date: new Date().toISOString()
        });
        
        this.users[userId] = user;
        this.saveUsers();
        
        // Mettre à jour la session
        const currentSession = JSON.parse(localStorage.getItem('skyia_current_session') || '{}');
        currentSession.premium = true;
        localStorage.setItem('skyia_current_session', JSON.stringify(currentSession));
        
        return user;
    }
    
    // Utilitaires
    generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    
    hashPassword(password) {
        // Hash simple (à remplacer par bcrypt/SHA256 en production)
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'sky_' + Math.abs(hash).toString(36) + '_' + password.length;
    }
    
    simulateEmailSend(email, code, type = 'verification') {
        console.log(`📧 EMAIL SIMULÉ à ${email}`);
        console.log(`   Type: ${type}`);
        console.log(`   Code: ${code}`);
        console.log(`   Lien: https://sky-ia-cdm.netlify.app/verify-email.html?email=${email}&code=${code}`);
        
        // Stocker pour affichage dans la console de démo
        const sentEmails = JSON.parse(localStorage.getItem('skyia_sent_emails') || '[]');
        sentEmails.push({
            email: email,
            code: code,
            type: type,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('skyia_sent_emails', JSON.stringify(sentEmails.slice(-10)));
    }
    
    saveUsers() {
        localStorage.setItem('skyia_users', JSON.stringify(this.users));
    }
    
    saveSessions() {
        localStorage.setItem('skyia_sessions', JSON.stringify(this.sessions));
    }
    
    savePendingVerifications() {
        localStorage.setItem('skyia_pending_verifications', JSON.stringify(this.pendingVerifications));
    }
}

// Instance globale
const userManager = new UserManager();

// ============================================
// FONCTIONS D'INTERFACE
// ============================================

// Gérer la connexion
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe')?.checked || false;
    
    try {
        const result = userManager.login(email, password, rememberMe);
        
        showAuthMessage('✅ Connexion réussie ! Redirection...', 'success');
        
        // Animation de succès
        document.querySelector('.auth-form').style.animation = 'successPulse 0.5s';
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
    } catch (error) {
        showAuthMessage('❌ ' + error.message, 'error');
        
        // Animation d'erreur
        document.querySelector('.auth-form').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.querySelector('.auth-form').style.animation = '';
        }, 500);
    }
}

// Gérer l'inscription
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const whatsapp = document.getElementById('regWhatsApp')?.value || '';
    
    // Validations
    if (password !== confirmPassword) {
        showAuthMessage('❌ Les mots de passe ne correspondent pas', 'error');
        return;
    }
    
    if (password.length < 8) {
        showAuthMessage('❌ Le mot de passe doit contenir au moins 8 caractères', 'error');
        return;
    }
    
    try {
        const result = userManager.createUser(name, email, password, whatsapp);
        
        showAuthMessage('✅ Compte créé ! Vérifiez votre email.', 'success');
        
        // Stocker l'email pour la vérification
        localStorage.setItem('skyia_pending_email', email);
        
        // Afficher le code de vérification (en démo)
        const sentEmails = JSON.parse(localStorage.getItem('skyia_sent_emails') || '[]');
        const lastEmail = sentEmails[sentEmails.length - 1];
        
        if (lastEmail) {
            showAuthMessage(
                `📧 Email envoyé à ${email}\n🔑 Code (démo) : <strong>${lastEmail.code}</strong>`,
                'info'
            );
        }
        
        setTimeout(() => {
            window.location.href = 'verify-email.html';
        }, 2000);
        
    } catch (error) {
        showAuthMessage('❌ ' + error.message, 'error');
    }
}

// Vérifier le code email
function verifyCode(event) {
    event.preventDefault();
    
    const codeInputs = document.querySelectorAll('.code-input');
    let code = '';
    
    codeInputs.forEach(input => {
        code += input.value;
    });
    
    if (code.length !== 6) {
        showAuthMessage('❌ Veuillez entrer le code complet', 'error');
        return;
    }
    
    const email = localStorage.getItem('skyia_pending_email') || 
                  new URLSearchParams(window.location.search).get('email');
    
    if (!email) {
        showAuthMessage('❌ Email non trouvé. Veuillez vous réinscrire.', 'error');
        return;
    }
    
    try {
        const user = userManager.verifyEmail(email, code);
        
        // Afficher le succès
        document.getElementById('verifyStep1').style.display = 'none';
        document.getElementById('verifyStep2').style.display = 'block';
        
        // Nettoyer
        localStorage.removeItem('skyia_pending_email');
        
        // Notification
        showNotification('✅ Email vérifié ! Sky IA activé.', 'success');
        
    } catch (error) {
        showAuthMessage('❌ ' + error.message, 'error');
    }
}

// Connexion WhatsApp
function loginWithWhatsApp() {
    const natcashNumber = '50955645090';
    const message = encodeURIComponent(
        '🔐 SKY IA - Connexion WhatsApp\n' +
        'Je souhaite me connecter à Sky IA CDM'
    );
    
    window.open(`https://wa.me/${natcashNumber}?text=${message}`, '_blank');
    showAuthMessage('📱 Redirection vers WhatsApp...', 'info');
}

// Réinitialiser le mot de passe
function resetPassword() {
    const email = prompt('Entrez votre email pour réinitialiser le mot de passe :');
    
    if (!email) return;
    
    try {
        userManager.resetPassword(email);
        
        const sentEmails = JSON.parse(localStorage.getItem('skyia_sent_emails') || '[]');
        const lastEmail = sentEmails[sentEmails.length - 1];
        
        showAuthMessage(
            `📧 Email de réinitialisation envoyé à ${email}\n🔑 Code : <strong>${lastEmail?.code || 'Vérifiez vos emails'}</strong>`,
            'info'
        );
    } catch (error) {
        showAuthMessage('❌ ' + error.message, 'error');
    }
}

// Renvoyer le code
function resendCode() {
    const email = localStorage.getItem('skyia_pending_email');
    
    if (!email) {
        showAuthMessage('❌ Email non trouvé', 'error');
        return;
    }
    
    const newCode = userManager.generateVerificationCode();
    userManager.pendingVerifications[email].code = newCode;
    userManager.pendingVerifications[email].expiresAt = Date.now() + 30 * 60 * 1000;
    userManager.savePendingVerifications();
    userManager.simulateEmailSend(email, newCode);
    
    showAuthMessage('📧 Nouveau code envoyé !', 'success');
    
    // Réinitialiser le timer
    startResendTimer();
}

// Timer de renvoi
let resendTimerInterval;
function startResendTimer() {
    let seconds = AUTH_CONFIG.resendTimerSeconds;
    const timerElement = document.getElementById('resendTimer');
    
    if (resendTimerInterval) clearInterval(resendTimerInterval);
    
    resendTimerInterval = setInterval(() => {
        seconds--;
        if (timerElement) {
            timerElement.textContent = `Renvoyer dans ${seconds}s`;
        }
        
        if (seconds <= 0) {
            clearInterval(resendTimerInterval);
            if (timerElement) {
                timerElement.innerHTML = '<a href="#" onclick="resendCode()">Renvoyer le code</a>';
            }
        }
    }, 1000);
}

// Afficher un message d'authentification
function showAuthMessage(message, type = 'info') {
    const messageElement = document.getElementById('authMessage');
    
    if (!messageElement) return;
    
    messageElement.innerHTML = message;
    messageElement.className = `auth-message auth-${type}`;
    messageElement.style.display = 'block';
    
    // Auto-cacher après 5 secondes
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}

// Basculer la visibilité du mot de passe
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// Navigation entre les inputs de code
function nextInput(current) {
    if (current.value.length === 1) {
        const next = current.nextElementSibling;
        if (next && next.classList.contains('code-input')) {
            next.focus();
        }
    }
}

// Vérifier la force du mot de passe
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('regPassword');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strengthBar = document.getElementById('strengthBar');
            const strengthText = document.getElementById('strengthText');
            
            let strength = 0;
            
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/\d/)) strength++;
            if (password.match(/[^a-zA-Z\d]/)) strength++;
            
            const strengthLevels = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'];
            const colors = ['#ff0000', '#ff6600', '#ffaa00', '#00ff00', '#00ff00'];
            
            if (strengthBar) {
                strengthBar.style.width = (strength / 4) * 100 + '%';
                strengthBar.style.background = colors[strength];
            }
            
            if (strengthText) {
                strengthText.textContent = strengthLevels[strength];
                strengthText.style.color = colors[strength];
            }
        });
    }
    
    // Initialiser le timer de renvoi
    if (document.getElementById('resendTimer')) {
        startResendTimer();
    }
});

// Vérifier la session au chargement
function checkAuthAndRedirect() {
    const session = userManager.checkSession();
    const currentPage = window.location.pathname.split('/').pop();
    
    // Pages publiques
    const publicPages = ['index.html', 'login.html', 'register.html', 'verify-email.html', ''];
    
    if (!session && !publicPages.includes(currentPage)) {
        window.location.href = 'login.html';
        return;
    }
    
    if (session && publicPages.includes(currentPage) && currentPage !== 'index.html' && currentPage !== 'verify-email.html') {
        window.location.href = 'dashboard.html';
        return;
    }
    
    return session;
}

// Exécuter au chargement
document.addEventListener('DOMContentLoaded', () => {
    checkAuthAndRedirect();
});
