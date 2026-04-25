// ============================================
// SKY IA - SYSTÈME DE MONÉTISATION NATCASH
// ============================================

const NATCASH_ACCOUNT = "+50955645090";
const NATCASH_NUMBER = "50955645090";

// Compteur de tentatives d'accès
let accessAttempts = 0;
const MAX_FREE_ACCESS = 3; // Nombre d'utilisations gratuites avant de devoir payer

// Prix des fonctionnalités
const PRICING = {
    create_website: {
        name: "Création de site web",
        price: 500,
        description: "Génération complète d'un site web professionnel"
    },
    solve_exercise: {
        name: "Résolution d'exercice",
        price: 250,
        description: "Résolution détaillée par Sky IA"
    },
    premium_pro: {
        name: "Sky IA PRO",
        price: 500,
        duration: "1 mois",
        description: "10 créations de sites + 50 exercices"
    },
    premium_max: {
        name: "Sky IA MAX",
        price: 1000,
        duration: "1 mois",
        description: "Sites illimités + Exercices illimités + Images"
    },
    premium_elite: {
        name: "Sky IA ELITE",
        price: 2000,
        duration: "1 mois",
        description: "Tout illimité + Support 24/7 + Badge Légendaire"
    }
};

// Vérifier si l'utilisateur peut accéder gratuitement
function canAccessFreely(feature) {
    const usage = JSON.parse(localStorage.getItem('skyia_usage') || '{}');
    
    if (!usage[feature]) {
        usage[feature] = 0;
    }
    
    return usage[feature] < MAX_FREE_ACCESS;
}

// Incrémenter l'utilisation
function incrementUsage(feature) {
    const usage = JSON.parse(localStorage.getItem('skyia_usage') || '{}');
    usage[feature] = (usage[feature] || 0) + 1;
    localStorage.setItem('skyia_usage', JSON.stringify(usage));
    
    return MAX_FREE_ACCESS - usage[feature]; // Retourne le nombre d'essais restants
}

// Vérifier si premium
function isPremium() {
    const premium = JSON.parse(localStorage.getItem('skyia_premium') || '{}');
    return premium.active && new Date(premium.expires) > new Date();
}

// Forcer à regarder une pub OU payer
function requirePubOrPayment(feature) {
    const remainingFree = MAX_FREE_ACCESS - (JSON.parse(localStorage.getItem('skyia_usage') || '{}')[feature] || 0);
    
    if (isPremium()) {
        return true; // Premium = accès direct
    }
    
    if (remainingFree > 0) {
        // Afficher le choix : pub gratuite ou paiement
        showPubOrPayModal(feature, remainingFree);
        return false;
    } else {
        // Plus d'essais gratuits, doit payer
        showPaymentRequiredModal(feature);
        return false;
    }
}

// Afficher modal : Pub gratuite OU Payer
function showPubOrPayModal(feature, remainingFree) {
    const featureInfo = PRICING[feature] || { name: feature, price: 500 };
    
    const modal = document.createElement('div');
    modal.className = 'pub-pay-modal';
    modal.id = 'pubPayModal';
    modal.innerHTML = `
        <div class="pub-pay-card">
            <div class="modal-header-sky">
                <h2>🧠 SKY IA - ACCÈS REQUIS</h2>
                <button onclick="closePubPayModal()" class="close-btn">✕</button>
            </div>
            
            <div class="modal-body-sky">
                <div class="essais-restants">
                    <p>🎁 <strong>${remainingFree} essai(s) gratuit(s) restant(s)</strong></p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(remainingFree/MAX_FREE_ACCESS)*100}%"></div>
                    </div>
                </div>
                
                <div class="feature-info">
                    <h3>📦 ${featureInfo.name}</h3>
                    <p>${featureInfo.description || ''}</p>
                    <p class="feature-price">💰 ${featureInfo.price} HTG</p>
                </div>
                
                <div class="options-grid">
                    <div class="option-card free-option" onclick="chooseFreeOption('${feature}')">
                        <div class="option-icon">🎬</div>
                        <h4>OPTION GRATUITE</h4>
                        <p>Regarder une pub de 30 secondes</p>
                        <p class="option-badge">GRATUIT</p>
                    </div>
                    
                    <div class="option-card paid-option" onclick="choosePaidOption('${feature}')">
                        <div class="option-icon">⚡</div>
                        <h4>OPTION RAPIDE</h4>
                        <p>Payer directement</p>
                        <p class="option-price">${featureInfo.price} HTG</p>
                        <p class="option-badge-premium">NATCASH</p>
                    </div>
                </div>
                
                <div class="natcash-banner">
                    <p>💳 NatCash : <strong>${NATCASH_ACCOUNT}</strong></p>
                    <p>WhatsApp : <strong>+${NATCASH_NUMBER}</strong></p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Choisir l'option gratuite (pub)
function chooseFreeOption(feature) {
    closePubPayModal();
    
    // Afficher la pub simulée
    showAdvertisement(feature);
}

// Choisir l'option payante
function choosePaidOption(feature) {
    const featureInfo = PRICING[feature] || { name: feature, price: 500 };
    
    const message = encodeURIComponent(
        `💎 SKY IA - ${featureInfo.name}\n` +
        `💰 Montant : ${featureInfo.price} HTG\n` +
        `📱 Mon WhatsApp : [Votre numéro]\n\n` +
        `✅ Envoyez le paiement via NatCash : ${NATCASH_ACCOUNT}\n` +
        `✅ Indiquez "SKY IA - ${feature}" en référence\n\n` +
        `⚡ Activation immédiate après vérification`
    );
    
    // Ouvrir WhatsApp pour le paiement
    window.open(`https://wa.me/${NATCASH_NUMBER}?text=${message}`, '_blank');
    
    // Afficher les instructions de paiement
    showPaymentInstructions(feature, featureInfo.price);
}

// Afficher la pub (simulée car pas de vraie régie)
function showAdvertisement(feature) {
    // Créer un overlay de pub
    const adOverlay = document.createElement('div');
    adOverlay.className = 'ad-overlay';
    adOverlay.id = 'adOverlay';
    
    // Contenu de la pub (à remplacer par ta propre pub/offre)
    adOverlay.innerHTML = `
        <div class="ad-container">
            <div class="ad-header">
                <span class="ad-label">📢 PUBLICITÉ</span>
                <span class="ad-timer" id="adTimer">30s</span>
            </div>
            
            <div class="ad-content">
                <!-- TA PUB PERSONNALISÉE ICI -->
                <div class="ad-sky-ia">
                    <div class="ad-logo-anim">🧠</div>
                    <h2>SKY IA PREMIUM</h2>
                    <p>L'intelligence artificielle de la famille CDM</p>
                    <div class="ad-features">
                        <span>🌐 Sites Web</span>
                        <span>📚 Exercices</span>
                        <span>🤖 IA Puissante</span>
                    </div>
                    <div class="ad-price-tag">
                        <p>À partir de</p>
                        <p class="big-price">500 HTG</p>
                        <p>/mois</p>
                    </div>
                    <p class="ad-natcash">💰 NatCash : ${NATCASH_ACCOUNT}</p>
                    
                    <!-- Ici tu peux mettre une pub pour TES services -->
                    <div class="ad-your-offer">
                        <p>🔥 OFFRE SPÉCIALE 🔥</p>
                        <p>Création de site web professionnel</p>
                        <p>Résolution d'exercices</p>
                        <p>Développement sur mesure</p>
                        <p class="ad-contact">📱 Contact : ${NATCASH_ACCOUNT}</p>
                    </div>
                </div>
            </div>
            
            <div class="ad-footer">
                <div class="timer-bar-ad">
                    <div class="timer-fill-ad" id="timerFillAd"></div>
                </div>
                <p class="ad-skip-info">Patiencez ou <span onclick="skipAdWithPayment('${feature}')" style="color:#ffaa00;cursor:pointer;">payez pour skip</span></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(adOverlay);
    
    // Timer de 30 secondes
    let timeLeft = 30;
    const timerFillAd = document.getElementById('timerFillAd');
    const adTimer = document.getElementById('adTimer');
    
    const timerInterval = setInterval(() => {
        timeLeft--;
        const progress = ((30 - timeLeft) / 30) * 100;
        
        if (timerFillAd) timerFillAd.style.width = progress + '%';
        if (adTimer) adTimer.textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            completeAdvertisement(feature);
        }
    }, 1000);
    
    // Stocker l'intervalle pour pouvoir l'arrêter
    window.adTimerInterval = timerInterval;
}

// Terminer la pub et débloquer
function completeAdvertisement(feature) {
    // Fermer l'overlay
    const adOverlay = document.getElementById('adOverlay');
    if (adOverlay) {
        adOverlay.innerHTML = `
            <div class="ad-container ad-complete">
                <div class="ad-content" style="text-align:center;">
                    <div style="font-size:4rem;">✅</div>
                    <h2 style="color:#00ff00;">Débloqué !</h2>
                    <p>Fonctionnalité accessible</p>
                    <p style="color:#ffaa00; margin-top:1rem;">💰 Pensez à soutenir Sky IA</p>
                    <p style="color:#ffaa00;">NatCash : ${NATCASH_ACCOUNT}</p>
                    <button class="btn-hacker" onclick="closeAdOverlay('${feature}')" style="margin-top:1rem;">
                        ACCÉDER
                    </button>
                </div>
            </div>
        `;
    }
    
    // Incrémenter l'utilisation
    const remaining = incrementUsage(feature);
    
    // Débloquer la fonctionnalité
    unlockFeatureTemporarily(feature);
    
    // Notification
    showNotification(`✅ Accès débloqué ! ${remaining} essai(s) gratuit(s) restant(s)`, 'success');
}

// Fermer l'overlay de pub
function closeAdOverlay(feature) {
    const adOverlay = document.getElementById('adOverlay');
    if (adOverlay) adOverlay.remove();
    if (window.adTimerInterval) clearInterval(window.adTimerInterval);
    
    showUnlockedFeature(feature);
}

// Skip la pub avec paiement
function skipAdWithPayment(feature) {
    if (window.adTimerInterval) clearInterval(window.adTimerInterval);
    
    const featureInfo = PRICING[feature] || { name: feature, price: 500 };
    
    const message = encodeURIComponent(
        `⚡ SKIP PUB - ${featureInfo.name}\n` +
        `💰 Montant : ${featureInfo.price} HTG\n` +
        `📱 NatCash : ${NATCASH_ACCOUNT}\n\n` +
        `Envoyez le paiement pour accès immédiat`
    );
    
    window.open(`https://wa.me/${NATCASH_NUMBER}?text=${message}`, '_blank');
    
    const adOverlay = document.getElementById('adOverlay');
    if (adOverlay) adOverlay.remove();
    
    showPaymentInstructions(feature, featureInfo.price);
}

// Afficher les instructions de paiement
function showPaymentInstructions(feature, amount) {
    const instructions = document.createElement('div');
    instructions.className = 'payment-instructions-overlay';
    instructions.innerHTML = `
        <div class="payment-instructions-card">
            <h2>💳 PAIEMENT NATCASH</h2>
            
            <div class="payment-steps">
                <div class="step">
                    <span class="step-number">1</span>
                    <p>Ouvrez NatCash/MonCash</p>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <p>Envoyez <strong>${amount} HTG</strong></p>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <p>Au numéro :</p>
                    <p class="natcash-display">${NATCASH_ACCOUNT}</p>
                </div>
                <div class="step">
                    <span class="step-number">4</span>
                    <p>Référence : <strong>SKY IA - ${feature}</strong></p>
                </div>
                <div class="step">
                    <span class="step-number">5</span>
                    <p>Contactez sur WhatsApp :</p>
                    <p class="natcash-display">+${NATCASH_NUMBER}</p>
                </div>
            </div>
            
            <div class="payment-actions">
                <button class="btn-whatsapp-contact" onclick="window.open('https://wa.me/${NATCASH_NUMBER}', '_blank')">
                    📱 CONTACTER WHATSAPP
                </button>
                <button class="btn-close-payment" onclick="this.parentElement.parentElement.parentElement.remove()">
                    J'AI PAYÉ
                </button>
            </div>
            
            <p class="activation-note">⚡ Activation manuelle après vérification du paiement</p>
        </div>
    `;
    
    document.body.appendChild(instructions);
}

// Afficher modal "Paiement requis"
function showPaymentRequiredModal(feature) {
    const featureInfo = PRICING[feature] || { name: feature, price: 500 };
    
    const modal = document.createElement('div');
    modal.className = 'pub-pay-modal';
    modal.innerHTML = `
        <div class="pub-pay-card">
            <div class="modal-header-sky" style="border-bottom-color:#ff0000;">
                <h2>🔒 ACCÈS PREMIUM REQUIS</h2>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" class="close-btn">✕</button>
            </div>
            
            <div class="modal-body-sky">
                <div class="essais-epuises">
                    <p>❌ <strong>Essais gratuits épuisés</strong></p>
                    <p>Débloquez l'accès illimité</p>
                </div>
                
                <div class="feature-info">
                    <h3>📦 ${featureInfo.name}</h3>
                    <p class="feature-price">💰 ${featureInfo.price} HTG</p>
                </div>
                
                <div class="premium-cards">
                    <div class="prem-card" onclick="processPremiumPayment('pro', 500)">
                        <h4>🔮 PRO</h4>
                        <p>500 HTG/mois</p>
                        <small>Accès limité</small>
                    </div>
                    <div class="prem-card popular-prem" onclick="processPremiumPayment('max', 1000)">
                        <h4>⚡ MAX</h4>
                        <p>1000 HTG/mois</p>
                        <small>Accès illimité</small>
                    </div>
                    <div class="prem-card" onclick="processPremiumPayment('elite', 2000)">
                        <h4>💀 ELITE</h4>
                        <p>2000 HTG/mois</p>
                        <small>Légendaire</small>
                    </div>
                </div>
                
                <button class="btn-premium-pay" onclick="processFeaturePayment('${feature}')">
                    💰 PAYER ${featureInfo.price} HTG
                </button>
                
                <div class="natcash-banner">
                    <p>💳 NatCash : <strong>${NATCASH_ACCOUNT}</strong></p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Traiter le paiement d'une fonctionnalité
function processFeaturePayment(feature) {
    const featureInfo = PRICING[feature] || { name: feature, price: 500 };
    
    const message = encodeURIComponent(
        `💎 SKY IA - ${featureInfo.name}\n` +
        `💰 Montant : ${featureInfo.price} HTG\n` +
        `📱 NatCash : ${NATCASH_ACCOUNT}\n\n` +
        `Envoyé par : [Votre nom WhatsApp]\n` +
        `Fonctionnalité : ${feature}`
    );
    
    window.open(`https://wa.me/${NATCASH_NUMBER}?text=${message}`, '_blank');
    showNotification(`📱 Redirection WhatsApp - ${featureInfo.price} HTG`, 'success');
}

// Traiter le paiement premium
function processPremiumPayment(plan, amount) {
    const message = encodeURIComponent(
        `👑 SKY IA ${plan.toUpperCase()} - ${amount} HTG/mois\n` +
        `📱 NatCash : ${NATCASH_ACCOUNT}\n\n` +
        `Envoyé par : [Votre nom WhatsApp]\n` +
        `Plan : ${plan}\n\n` +
        `✅ Activation manuelle après paiement`
    );
    
    window.open(`https://wa.me/${NATCASH_NUMBER}?text=${message}`, '_blank');
    showNotification(`📱 Redirection WhatsApp - ${amount} HTG`, 'success');
}

// Fermer le modal pub/pay
function closePubPayModal() {
    const modal = document.getElementById('pubPayModal');
    if (modal) modal.remove();
}

// Débloquer temporairement
function unlockFeatureTemporarily(feature) {
    const tempUnlock = JSON.parse(localStorage.getItem('skyia_temp_unlock') || '{}');
    tempUnlock[feature] = Date.now() + (30 * 60 * 1000); // 30 minutes
    localStorage.setItem('skyia_temp_unlock', JSON.stringify(tempUnlock));
}

// Vérifier si débloqué temporairement
function isTemporarilyUnlocked(feature) {
    const tempUnlock = JSON.parse(localStorage.getItem('skyia_temp_unlock') || '{}');
    return tempUnlock[feature] && tempUnlock[feature] > Date.now();
}

// Fonction principale d'accès
function requestFeatureAccess(feature) {
    // Premium = accès direct
    if (isPremium()) {
        return true;
    }
    
    // Débloqué temporairement
    if (isTemporarilyUnlocked(feature)) {
        return true;
    }
    
    // Vérifier les essais gratuits
    const remainingFree = MAX_FREE_ACCESS - (JSON.parse(localStorage.getItem('skyia_usage') || '{}')[feature] || 0);
    
    if (remainingFree > 0) {
        showPubOrPayModal(feature, remainingFree);
        return false;
    } else {
        showPaymentRequiredModal(feature);
        return false;
    }
}

// Afficher la fonctionnalité débloquée
function showUnlockedFeature(type) {
    if (type === 'website' || type === 'create_website') {
        const alert = document.getElementById('websitePubAlert');
        const builder = document.getElementById('websiteBuilder');
        if (alert) alert.style.display = 'none';
        if (builder) builder.style.display = 'block';
    } else if (type === 'exercise' || type === 'solve_exercise') {
        const alert = document.getElementById('exercisePubAlert');
        const solver = document.getElementById('exerciseSolver');
        if (alert) alert.style.display = 'none';
        if (solver) solver.style.display = 'block';
    }
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si fonctionnalités déjà débloquées
    if (isTemporarilyUnlocked('website') || isTemporarilyUnlocked('create_website') || isPremium()) {
        showUnlockedFeature('website');
    }
    
    if (isTemporarilyUnlocked('exercise') || isTemporarilyUnlocked('solve_exercise') || isPremium()) {
        showUnlockedFeature('exercise');
    }
    
    // Afficher le compteur d'essais dans la console
    console.log('🔑 Sky IA - Système de monétisation activé');
    console.log('💰 NatCash :', NATCASH_ACCOUNT);
});
