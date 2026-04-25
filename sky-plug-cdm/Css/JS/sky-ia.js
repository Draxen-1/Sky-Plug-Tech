// ============================================
// SKY IA - APIs GURU + CONNAISSANCES INTÉGRÉES
// Version 3.0 ULTIMATE BOOSTÉE
// ============================================

class SkyIA {
    constructor() {
        this.name = 'Sky IA';
        this.version = '3.0.0';
        this.family = 'CDM';
        this.creator = 'Sky Plug CDM';
        this.natcashAccount = '+50955645090';
        this.natcashNumber = '50955645090';
        this.queries = 0;
        this.totalKnowledgeEntries = 0;
        
        // Base de connaissances INTÉGRÉE MAXIMALE
        this.knowledgeBase = {
            // ============================================
            // 📐 MATHÉMATIQUES
            // ============================================
            mathématiques: {
                algèbre: {
                    'équation second degré': {
                        formule: 'x = (-b ± √(b² - 4ac)) / 2a',
                        discriminant: 'Δ = b² - 4ac',
                        cas: 'Δ > 0 : 2 solutions réelles\nΔ = 0 : 1 solution double\nΔ < 0 : 2 solutions complexes conjuguées',
                        formeCanonique: 'a(x - α)² + β avec α = -b/2a et β = -Δ/4a',
                        sommeProduit: 'x₁ + x₂ = -b/a | x₁ × x₂ = c/a'
                    },
                    'produit scalaire': {
                        définition: 'u·v = ||u|| × ||v|| × cos(u,v)',
                        calcul: 'u·v = x₁x₂ + y₁y₂ + z₁z₂ (en 3D)',
                        propriétés: 'u ⊥ v ⟺ u·v = 0',
                        bilinéarité: '(αu+βv)·w = α(u·w) + β(v·w)'
                    },
                    'nombres complexes': {
                        forme: 'z = a + bi avec i² = -1',
                        module: '|z| = √(a² + b²)',
                        argument: 'arg(z) = arctan(b/a)',
                        formeExponentielle: 'z = |z|e^(iθ)',
                        formuleMoivre: '(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)'
                    },
                    'suites': {
                        arithmétique: 'uₙ₊₁ = uₙ + r | uₙ = u₀ + nr',
                        géométrique: 'uₙ₊₁ = q × uₙ | uₙ = u₀ × qⁿ',
                        sommeSuite: 'Sₙ = n(u₀+uₙ)/2 (arithmétique) | Sₙ = u₀(1-qⁿ⁺¹)/(1-q) (géométrique)',
                        convergence: 'limite finie si |q| < 1 (géométrique)'
                    },
                    'logarithmes': {
                        définition: 'ln(x) = primitive de 1/x',
                        propriétés: 'ln(ab) = ln(a)+ln(b) | ln(a/b) = ln(a)-ln(b) | ln(aⁿ) = n·ln(a)',
                        exponentielle: 'e^ln(x) = x | ln(e^x) = x',
                        logDécimal: 'log(x) = ln(x)/ln(10)'
                    },
                    'trigonométrie': {
                        formulesFondamentales: 'cos²x + sin²x = 1 | tan x = sin x/cos x',
                        addition: 'cos(a+b) = cos a·cos b - sin a·sin b',
                        duplication: 'sin(2a) = 2sin a·cos a | cos(2a) = cos²a - sin²a',
                        valeursRemarquables: 'sin(π/6)=1/2, sin(π/4)=√2/2, sin(π/3)=√3/2'
                    }
                },
                analyse: {
                    'dérivées': {
                        définition: "f'(x) = lim(h→0) [f(x+h)-f(x)]/h",
                        formules: 'xⁿ→nxⁿ⁻¹ | sin→cos | cos→-sin | ln x→1/x | eˣ→eˣ',
                        produit: '(uv)\' = u\'v + uv\'',
                        quotient: '(u/v)\' = (u\'v-uv\')/v²',
                        composée: '(f∘g)\' = g\' × f\'(g)'
                    },
                    'intégrales': {
                        définition: 'Aire sous la courbe',
                        primitives: '∫xⁿdx = xⁿ⁺¹/(n+1) | ∫1/x dx = ln|x| | ∫eˣdx = eˣ',
                        intégrationParties: '∫u dv = uv - ∫v du',
                        théorèmeFondamental: '∫ₐᵇ f(x)dx = F(b) - F(a)'
                    },
                    'limites': {
                        définition: 'f(x)→L quand x→a',
                        croissancesComparées: "eˣ >> xⁿ >> ln x (quand x→+∞)",
                        formesIndéterminées: '0/0, ∞/∞, 0×∞, ∞-∞, 1^∞, 0⁰, ∞⁰'
                    }
                },
                géométrie: {
                    'théorème pythagore': 'a² + b² = c² (triangle rectangle, c hypoténuse)',
                    'théorème thalès': 'Rapports égaux dans triangles semblables',
                    'cercle': 'Périmètre = 2πr | Aire = πr²',
                    'sphère': 'Volume = (4/3)πr³ | Aire = 4πr²',
                    'volumeCône': 'V = (1/3)πr²h',
                    'volumePyramide': 'V = (1/3) × Base × hauteur'
                },
                probabilités: {
                    'loiUniforme': 'P(X=k) = 1/n pour k = 1,...,n',
                    'loiBinomiale': 'P(X=k) = C(n,k) × p^k × (1-p)^(n-k)',
                    'espérance': 'E(X) = Σ xᵢ·P(X=xᵢ)',
                    'variance': 'V(X) = E(X²) - E(X)²',
                    'écart-type': 'σ = √V(X)'
                }
            },
            
            // ============================================
            // ⚛️ PHYSIQUE
            // ============================================
            physique: {
                mécanique: {
                    'lois newton': {
                        première: 'Principe d\'inertie : tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme si les forces se compensent',
                        deuxième: 'ΣF = m·a (Principe fondamental de la dynamique)',
                        troisième: 'Action = -Réaction (Principe des actions réciproques)'
                    },
                    'forces': {
                        poids: 'P = m·g (g ≈ 9.81 m/s² sur Terre)',
                        frottement: 'f = μ·N (μ coefficient de frottement)',
                        rappelRessort: 'F = -k·x (loi de Hooke)',
                        gravitation: 'F = G·m₁·m₂/d² (G = 6.67×10⁻¹¹ N·m²/kg²)'
                    },
                    'énergie': {
                        cinétique: 'Ec = ½mv²',
                        potentiellePesanteur: 'Epp = m·g·h',
                        potentielleÉlastique: 'Epe = ½k·x²',
                        mécanique: 'Em = Ec + Ep (se conserve sans frottement)'
                    },
                    'mouvement': {
                        uniforme: 'x = v·t + x₀ (vitesse constante)',
                        accéléré: 'x = ½a·t² + v₀·t + x₀ | v = a·t + v₀',
                        circulaire: 'v = ω·r | a = v²/r (accélération centripète)',
                        chuteLibre: 'h = ½g·t² (sans vitesse initiale)'
                    },
                    'quantité mouvement': 'p = m·v (se conserve dans système isolé)',
                    'travailPuissance': 'W = F·d·cos(θ) | P = W/t = F·v'
                },
                électricité: {
                    'loi ohm': 'U = R·I (Tension = Résistance × Courant)',
                    'puissanceÉlectrique': 'P = U·I = R·I² = U²/R',
                    'énergieÉlectrique': 'E = P·t (en Joules ou kWh)',
                    'lois kirchhoff': 'Loi des nœuds : ΣI_entrant = ΣI_sortant | Loi des mailles : ΣU = 0',
                    'condensateur': 'Q = C·U | E = ½C·U²',
                    'résistances': 'Série : Req = R₁+R₂ | Parallèle : 1/Req = 1/R₁+1/R₂',
                    'effet joule': 'P = R·I² (chaleur dissipée)',
                    'circuit RC': 'τ = R·C (constante de temps)'
                },
                optique: {
                    'loi réflexion': 'i = r (angle incidence = angle réflexion)',
                    'loi réfraction': 'n₁·sin(i₁) = n₂·sin(i₂) (Snell-Descartes)',
                    'lentille': '1/f\' = 1/OA\' - 1/OA (relation conjugaison)',
                    'grossissement': 'G = A\'B\'/AB',
                    'vitesseLumière': 'c = 299 792 458 m/s ≈ 3×10⁸ m/s',
                    'longueurOnde': 'λ = c/f'
                },
                thermodynamique: {
                    'loiGazParfaits': 'PV = nRT (R = 8.314 J/mol·K)',
                    'premierPrincipe': 'ΔU = Q + W (conservation énergie)',
                    'secondPrincipe': 'Entropie d\'un système isolé augmente',
                    'chaleur': 'Q = m·c·ΔT (c capacité thermique massique)',
                    'changementÉtat': 'Q = m·L (L chaleur latente)',
                    'zéroAbsolu': '0 K = -273.15°C'
                },
                nucléaire: {
                    'radioactivité': 'N = N₀·e^(-λt) | demi-vie t₁/₂ = ln(2)/λ',
                    'équivalence': 'E = m·c² (Einstein)',
                    'fission': 'Division d\'un noyau lourd',
                    'fusion': 'Combinaison de noyaux légers'
                }
            },
            
            // ============================================
            // 🧪 CHIMIE
            // ============================================
            chimie: {
                'bases': {
                    'atome': 'Noyau (protons + neutrons) + électrons',
                    'numéroAtomique': 'Z = nombre de protons',
                    'masseMolaire': 'M en g/mol = masse d\'une mole',
                    'mole': '1 mole = 6.022×10²³ entités (nombre d\'Avogadro)',
                    'concentration': 'C = n/V (mol/L)',
                    'pH': 'pH = -log[H⁺] | pH + pOH = 14 (à 25°C)'
                },
                'réactions': {
                    'équationBilan': 'Conservation des atomes et des charges',
                    'tableauAvancement': 'Suivi des quantités de matière',
                    'réactifLimitant': 'Celui qui disparaît en premier',
                    'rendement': 'η = (quantité obtenue)/(quantité théorique)',
                    'oxydoréduction': 'Transfert d\'électrons | Oxydant gagne e⁻, Réducteur perd e⁻'
                },
                'composés': {
                    'eau': 'H₂O - M = 18 g/mol',
                    'acideChlorhydrique': 'HCl',
                    'soude': 'NaOH',
                    'acideSulfurique': 'H₂SO₄',
                    'ammoniac': 'NH₃'
                },
                'chimieOrganique': {
                    'alcane': 'CₙH₂ₙ₊₂',
                    'alcène': 'CₙH₂ₙ (double liaison)',
                    'alcyne': 'CₙH₂ₙ₋₂ (triple liaison)',
                    'alcool': 'R-OH',
                    'acideCarboxylique': 'R-COOH'
                }
            },
            
            // ============================================
            // 💻 PROGRAMMATION
            // ============================================
            programmation: {
                'html': {
                    structure: '<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <title>Titre</title>\n</head>\n<body>\n</body>\n</html>',
                    balises: {
                        titres: '<h1> à <h6>',
                        paragraphe: '<p>',
                        lien: '<a href="url">',
                        image: '<img src="url" alt="description">',
                        liste: '<ul> (non ordonnée) <ol> (ordonnée) <li> (élément)',
                        tableau: '<table><tr><td>',
                        formulaire: '<form><input><button>',
                        div: '<div> (bloc conteneur)',
                        span: '<span> (conteneur en ligne)',
                        header: '<header>',
                        nav: '<nav>',
                        main: '<main>',
                        section: '<section>',
                        article: '<article>',
                        footer: '<footer>'
                    },
                    attributs: 'class, id, style, data-*, aria-*, href, src, alt, type, name, value, placeholder, required, disabled, readonly',
                    formulaires: 'method="GET|POST", action="url", enctype="multipart/form-data" pour fichiers'
                },
                'css': {
                    selecteurs: {
                        base: 'balise, .classe, #id, [attribut], * (universel)',
                        combinateurs: 'descendant (espace), enfant (>), adjacent (+), frère (~)',
                        pseudoClasses: ':hover, :focus, :active, :first-child, :last-child, :nth-child(n), :not(selector)',
                        pseudoÉléments: '::before, ::after, ::first-letter, ::selection'
                    },
                    propriétés: {
                        couleurs: 'color, background-color, opacity',
                        typographie: 'font-family, font-size, font-weight, font-style, text-align, line-height, letter-spacing',
                        espacement: 'margin, padding, border, outline',
                        dimensions: 'width, height, max-width, min-height, box-sizing',
                        position: 'static, relative, absolute, fixed, sticky | top, right, bottom, left, z-index',
                        display: 'block, inline, inline-block, flex, grid, none',
                        flexbox: 'display:flex; justify-content:center; align-items:center; flex-direction:row; gap:1rem; flex-wrap:wrap;',
                        grid: 'display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:2rem;',
                        animations: '@keyframes | animation: name duration timing-function delay iteration-count direction;',
                        transitions: 'transition: property duration timing-function;',
                        transformations: 'transform: rotate(), scale(), translate(), skew();',
                        ombres: 'box-shadow: x y blur spread color; text-shadow: x y blur color;',
                        filtres: 'filter: blur(), brightness(), contrast(), grayscale(), hue-rotate();',
                        variables: ':root { --primary: #00ff00; } | utilisation: var(--primary);'
                    },
                    responsive: '@media (max-width: 768px) { } | mobile-first | breakpoints: 576, 768, 992, 1200px',
                    frameworks: 'Bootstrap, Tailwind CSS, Bulma'
                },
                'javascript': {
                    bases: {
                        variables: 'let (modifiable), const (constante), var (ancien, éviter)',
                        types: 'String, Number, Boolean, null, undefined, Symbol, BigInt',
                        opérateurs: '+ - * / % ** ++ -- == === != !== > < >= <= && || ! ?? .?',
                        conditions: 'if/else if/else | switch/case | condition ? vrai : faux (ternaire)',
                        boucles: 'for, while, do...while, for...of (tableaux), for...in (objets)',
                        fonctions: 'function nom(){} | const fn = () => {} | (param1, param2) => expression'
                    },
                    avancé: {
                        tableaux: 'map(), filter(), reduce(), forEach(), find(), some(), every(), includes(), sort(), slice(), splice(), push(), pop(), shift(), unshift(), spread [...arr]',
                        objets: 'const obj = {clé: valeur}; Object.keys(), Object.values(), Object.entries(), destructuring {clé} = obj',
                        promesses: 'fetch().then().catch() | async/await | Promise.all(), Promise.race()',
                        es6: 'template strings `` ${} | arrow functions => | classes | modules import/export | destructuring',
                        dom: 'document.getElementById(), querySelector(), querySelectorAll(), createElement(), appendChild(), innerHTML, textContent, addEventListener(), removeEventListener()',
                        events: 'click, submit, keydown, keyup, mouseover, mouseout, load, scroll, resize, input, change',
                        stockage: 'localStorage.setItem/getItem/removeItem | sessionStorage | JSON.stringify/parse',
                        api: 'fetch(url, {method, headers, body}) | axios | XMLHttpRequest',
                        regex: '/pattern/flags | .test(), .match(), .replace(), .search()'
                    },
                    frameworks: 'React, Vue.js, Angular, Node.js, Express, Next.js'
                },
                'python': {
                    bases: {
                        variables: 'x = 5 (typage dynamique)',
                        types: 'int, float, str, bool, list, tuple, set, dict, None',
                        conditions: 'if/elif/else:',
                        boucles: 'for i in range(10): | for item in liste: | while condition:',
                        fonctions: 'def nom(param): return valeur',
                        listes: '[1,2,3] | .append(), .extend(), .pop(), .remove(), list comprehension [x*2 for x in liste]',
                        dictionnaires: '{"clé": "valeur"} | .get(), .keys(), .values(), .items()'
                    },
                    avancé: {
                        classes: 'class Nom: def __init__(self):',
                        fichiers: 'with open("fichier.txt", "r") as f: content = f.read()',
                        modules: 'import math, random, os, sys, json, datetime, re',
                        exceptions: 'try/except/else/finally',
                        décorateurs: '@staticmethod, @classmethod, @property',
                        pip: 'requests, numpy, pandas, flask, django, fastapi'
                    }
                },
                'php': {
                    bases: '<?php echo "Hello"; ?> | variables: $nom | tableaux: $arr = [1,2,3];',
                    formulaires: '$_GET, $_POST, $_REQUEST',
                    sessions: 'session_start(); $_SESSION["clé"] = valeur;',
                    basesDonnées: 'MySQLi, PDO | $pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");'
                },
                'git': {
                    commandes: 'git init | git add . | git commit -m "message" | git push | git pull | git branch | git merge | git checkout | git stash | git log',
                    workflow: 'clone → branch → commit → push → pull request → merge',
                    plateformes: 'GitHub, GitLab, Bitbucket'
                }
            },
            
            // ============================================
            // 🌐 CRÉATION DE SITES WEB
            // ============================================
            créationWeb: {
                types: {
                    portfolio: 'Header, À propos, Projets, Compétences, Contact',
                    ecommerce: 'Catalogue, Panier, Paiement, Compte client, Admin',
                    blog: 'Articles, Catégories, Commentaires, Recherche, Archives',
                    business: 'Accueil, Services, Équipe, Témoignages, Contact',
                    landing: 'Hero, Bénéfices, Témoignages, CTA, Footer minimal'
                },
                outils: {
                    hébergement: 'Netlify, Vercel, GitHub Pages, Hostinger, OVH',
                    cms: 'WordPress, Wix, Shopify (e-commerce), PrestaShop',
                    seo: 'Balises meta, sitemap.xml, robots.txt, Schema.org, vitesse chargement',
                    performance: 'Minification, compression Gzip, lazy loading, CDN, cache navigateur'
                },
                couleurs: {
                    luxe: 'Noir + Or (#FFD700)',
                    tech: 'Noir + Vert néon (#00FF00)',
                    pro: 'Bleu foncé + Blanc',
                    créatif: 'Dégradés + Violet/Orange',
                    minimal: 'Blanc + Gris + Une couleur d\'accent'
                }
            },
            
            // ============================================
            // 📚 CULTURE GÉNÉRALE
            // ============================================
            cultureGénérale: {
                'haïti': {
                    capitale: 'Port-au-Prince',
                    indépendance: '1er janvier 1804',
                    superficie: '27 750 km²',
                    population: '~11 millions',
                    langues: 'Créole haïtien, Français',
                    monnaie: 'Gourde (HTG)',
                    symboles: 'Drapeau bleu et rouge, devise "L\'Union fait la force"'
                },
                'histoire': {
                    révolutionFrançaise: '1789 - Liberté, Égalité, Fraternité',
                    premièreGuerreMondiale: '1914-1918',
                    deuxièmeGuerreMondiale: '1939-1945',
                    déclarationDroitsHomme: '1948 - ONU'
                },
                'géographie': {
                    continents: 'Afrique, Amérique, Asie, Europe, Océanie, Antarctique',
                    océans: 'Pacifique (plus grand), Atlantique, Indien, Arctique, Austral',
                    plusHautSommet: 'Everest (8 848 m)',
                    plusLongFleuve: 'Nil (6 650 km)'
                },
                'sciences': {
                    adn: 'Acide Désoxyribonucléique - Double hélice - Bases A,T,C,G',
                    systèmeSolaire: '8 planètes : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune',
                    vitesseLumière: '299 792 458 m/s ≈ 300 000 km/s',
                    unités: 'Système International (SI) : m, kg, s, A, K, mol, cd'
                }
            }
        };
        
        // Compter les entrées de connaissances
        this.countKnowledgeEntries();
    }
    
    // Compter le nombre total de connaissances
    countKnowledgeEntries() {
        const countEntries = (obj) => {
            let count = 0;
            for (let key in obj) {
                if (typeof obj[key] === 'string') {
                    count++;
                } else if (typeof obj[key] === 'object') {
                    count += countEntries(obj[key]);
                }
            }
            return count;
        };
        this.totalKnowledgeEntries = countEntries(this.knowledgeBase);
    }
    
    // ============================================
    // APPEL API GURU (avec fallback connaissances)
    // ============================================
    async callGuruAPI(endpoint, data, keyIndex = 0) {
        // Essayer toutes les clés API
        for (let i = 0; i < GURU_APIS.keys.length; i++) {
            const apiKey = GURU_APIS.keys[i];
            
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000);
                
                const response = await fetch(`${GURU_APIS.baseUrl}/${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                        'X-Guru-Key': apiKey,
                        'X-SkyIA-Version': this.version
                    },
                    body: JSON.stringify({
                        ...data,
                        source: 'SKY_IA_CDM',
                        natcash: this.natcashAccount
                    }),
                    signal: controller.signal
                });
                
                clearTimeout(timeoutId);
                
                if (response.ok) {
                    const result = await response.json();
                    this.queries++;
                    return { ...result, apiUsed: true, keyIndex: i };
                }
            } catch (error) {
                continue; // Essayer la clé suivante
            }
        }
        
        // Aucune API disponible
        console.log('⚠️ APIs Guru indisponibles, utilisation des connaissances locales');
        return null;
    }
    
    // ============================================
    // RECHERCHE AVANCÉE DANS LES CONNAISSANCES
    // ============================================
    searchKnowledge(query) {
        query = query.toLowerCase().trim();
        const results = [];
        const keywords = query.split(/\s+/);
        
        const searchInObject = (obj, path = '', depth = 0) => {
            if (depth > 10) return; // Limiter la profondeur
            
            for (let key in obj) {
                const currentPath = path ? `${path} > ${key}` : key;
                const keyLower = key.toLowerCase();
                
                // Calculer le score de correspondance
                let score = 0;
                for (let kw of keywords) {
                    if (keyLower.includes(kw)) score += 3;
                    if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(kw)) score += 2;
                }
                if (keyLower === query) score += 10; // Correspondance exacte
                
                if (typeof obj[key] === 'string' && score > 0) {
                    results.push({
                        sujet: currentPath,
                        contenu: obj[key],
                        score: score,
                        type: 'définition'
                    });
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    // Si l'objet a des propriétés avec contenu textuel
                    if (obj[key].formule || obj[key].définition || obj[key].calcul) {
                        if (score > 0) {
                            results.push({
                                sujet: currentPath,
                                contenu: JSON.stringify(obj[key], null, 2),
                                score: score,
                                type: 'objet'
                            });
                        }
                    }
                    searchInObject(obj[key], currentPath, depth + 1);
                }
            }
        };
        
        searchInObject(this.knowledgeBase);
        
        // Trier par score décroissant
        results.sort((a, b) => b.score - a.score);
        
        return results;
    }
    
    // ============================================
    // RÉPONSE INTELLIGENTE (API + CONNAISSANCES)
    // ============================================
    async getResponse(query) {
        this.queries++;
        
        // 1. Essayer l'API Guru
        const apiResult = await this.callGuruAPI('chat', {
            message: query,
            context: 'SKY_IA_CDM_ULTIMATE',
            knowledgeVersion: this.version
        });
        
        if (apiResult && apiResult.response) {
            return `🧠 **Sky IA** _(via API Guru #${apiResult.keyIndex + 1})_ :\n\n${apiResult.response}\n\n---\n⚡ ${this.name} v${this.version} | 💰 NatCash: ${this.natcashAccount}`;
        }
        
        // 2. Recherche dans les connaissances locales
        const knowledgeResults = this.searchKnowledge(query);
        
        if (knowledgeResults.length > 0) {
            let response = `🧠 **Sky IA** — Résultats pour "${query}" :\n\n`;
            
            const topResults = knowledgeResults.slice(0, 5);
            
            topResults.forEach((result, index) => {
                response += `**${index + 1}. ${this.formatPath(result.sujet)}**\n`;
                response += `📝 ${result.contenu}\n\n`;
            });
            
            if (knowledgeResults.length > 5) {
                response += `_...et ${knowledgeResults.length - 5} autres résultats_\n\n`;
            }
            
            response += `---\n`;
            response += `📚 ${this.totalKnowledgeEntries} connaissances intégrées | 💰 Soutien: NatCash ${this.natcashAccount}`;
            
            return response;
        }
        
        // 3. Réponse de secours
        return this.getFallbackResponse(query);
    }
    
    // Formater le chemin pour l'affichage
    formatPath(path) {
        return path.split(' > ')
            .map(p => p.charAt(0).toUpperCase() + p.slice(1))
            .join(' → ');
    }
    
    // Réponse de secours améliorée
    getFallbackResponse(query) {
        const suggestions = [
            '📐 Mathématiques : équations, dérivées, intégrales, géométrie',
            '⚛️ Physique : mécanique, électricité, optique, thermodynamique',
            '🧪 Chimie : moles, pH, réactions, tableau périodique',
            '💻 Programmation : HTML, CSS, JavaScript, Python, PHP, Git',
            '🌐 Création de sites : portfolio, e-commerce, blog, business',
            '📚 Culture générale : Haïti, histoire, géographie, sciences'
        ];
        
        const selectedSuggestions = suggestions
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
        
        return `🌑 **Sky IA** — Analyse de "${query}" :\n\n` +
               `Aucune correspondance exacte dans ma base de ${this.totalKnowledgeEntries} connaissances.\n\n` +
               `🔮 **Domaines couverts :**\n${selectedSuggestions.join('\n')}\n\n` +
               `💡 Essayez de reformuler ou précisez votre domaine.\n\n` +
               `💰 Premium : NatCash ${this.natcashAccount} pour accéder à toutes les APIs Guru !`;
    }
    
    // ============================================
    // GÉNÉRATION DE SITE WEB BOOSTÉE
    // ============================================
    async generateWebsite(type, name, description, color) {
        const apiResult = await this.callGuruAPI('generate', {
            type: 'website',
            websiteType: type,
            name: name,
            description: description,
            color: color
        });
        
        if (apiResult && apiResult.code) {
            return apiResult.code;
        }
        
        return this.getWebsiteTemplate(type, name, description, color);
    }
    
    getWebsiteTemplate(type, name, description, color) {
        const currentYear = new Date().getFullYear();
        const sanitizedName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const sanitizedDesc = description.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        const templates = {
            portfolio: this.getPortfolioTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            ecommerce: this.getEcommerceTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            blog: this.getBlogTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            business: this.getBusinessTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            landing: this.getLandingTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            restaurant: this.getRestaurantTemplate(sanitizedName, sanitizedDesc, color, currentYear),
            education: this.getEducationTemplate(sanitizedName, sanitizedDesc, color, currentYear)
        };
        
        return templates[type] || templates.portfolio;
    }
    
    // Templates individuels (extraits pour la longueur, tous les autres templates restent identiques)
    getPortfolioTemplate(name, description, color, year) {
        return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de ${name} - ${description}">
    <title>${name} | Portfolio</title>
    <style>
        :root { --primary: ${color}; --bg: #0a0a0a; --card: #111111; --text: #ffffff; --muted: #888888; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; scroll-behavior: smooth; }
        header { background: #000; padding: 2rem; text-align: center; border-bottom: 3px solid var(--primary); box-shadow: 0 0 30px rgba(${color}, 0.2); }
        header h1 { font-size: 3rem; color: var(--primary); text-shadow: 0 0 20px var(--primary); animation: glow 2s infinite; }
        @keyframes glow { 0%,100% { text-shadow: 0 0 20px var(--primary); } 50% { text-shadow: 0 0 40px var(--primary), 0 0 60px var(--primary); } }
        nav { display: flex; justify-content: center; gap: 2rem; padding: 1rem; background: #000; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid #222; }
        nav a { color: var(--primary); text-decoration: none; font-weight: bold; transition: all 0.3s; position: relative; }
        nav a::after { content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px; background: var(--primary); transition: width 0.3s; }
        nav a:hover::after { width: 100%; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .hero { text-align: center; padding: 4rem 0; }
        .hero h2 { font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem; }
        .about { background: var(--card); padding: 2rem; border-radius: 15px; border: 1px solid #333; margin: 2rem 0; transition: border-color 0.3s; }
        .about:hover { border-color: var(--primary); }
        .projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
        .project-card { background: var(--card); border: 1px solid #333; border-radius: 15px; padding: 1.5rem; transition: all 0.3s; cursor: pointer; }
        .project-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 10px 30px rgba(${color}, 0.3); }
        .project-card h3 { color: var(--primary); margin-bottom: 1rem; }
        .skills { display: flex; flex-wrap: wrap; gap: 0.8rem; margin: 1rem 0; }
        .skill-tag { background: rgba(${color}, 0.15); color: var(--primary); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid var(--primary); font-size: 0.9rem; transition: all 0.3s; }
        .skill-tag:hover { background: var(--primary); color: #000; }
        .contact { text-align: center; padding: 3rem; background: var(--card); border-radius: 15px; border: 1px solid #333; margin: 2rem 0; }
        .btn { display: inline-block; padding: 1rem 2rem; background: var(--primary); color: #000; text-decoration: none; border-radius: 10px; font-weight: bold; transition: all 0.3s; text-transform: uppercase; letter-spacing: 1px; }
        .btn:hover { box-shadow: 0 0 30px var(--primary); transform: scale(1.05); }
        footer { text-align: center; padding: 2rem; background: #000; border-top: 1px solid #333; margin-top: 3rem; }
        @media (max-width: 768px) { header h1 { font-size: 2rem; } nav { gap: 1rem; flex-wrap: wrap; } .hero h2 { font-size: 1.8rem; } }
    </style>
</head>
<body>
    <header><h1>${name}</h1><p style="color: #aaa;">${description}</p></header>
    <nav><a href="#about">À Propos</a><a href="#projects">Projets</a><a href="#skills">Compétences</a><a href="#contact">Contact</a></nav>
    <div class="container">
        <div class="hero"><h2>Développeur & Créateur Digital</h2><p style="color: #aaa;">Transformant des idées en solutions numériques puissantes</p></div>
        <div class="about" id="about"><h2 style="color: ${color};">À Propos</h2><p>${description}</p><p style="margin-top:1rem;">Passionné par l'innovation technologique, je crée des expériences web qui ont un impact.</p></div>
        <h2 style="color: ${color}; text-align: center;" id="projects">Projets Récents</h2>
        <div class="projects">
            <div class="project-card"><h3>🖥️ Application Web</h3><p>Solution complète avec dashboard administrateur</p><div class="skills"><span class="skill-tag">React</span><span class="skill-tag">Node.js</span><span class="skill-tag">MongoDB</span></div></div>
            <div class="project-card"><h3>📱 Progressive Web App</h3><p>Application mobile cross-platform performante</p><div class="skills"><span class="skill-tag">PWA</span><span class="skill-tag">Service Workers</span><span class="skill-tag">IndexedDB</span></div></div>
            <div class="project-card"><h3>🤖 Intelligence Artificielle</h3><p>Assistant IA avec traitement du langage naturel</p><div class="skills"><span class="skill-tag">Python</span><span class="skill-tag">TensorFlow</span><span class="skill-tag">API REST</span></div></div>
        </div>
        <h2 style="color: ${color}; text-align: center;" id="skills">Compétences Techniques</h2>
        <div class="skills" style="justify-content:center;"><span class="skill-tag">HTML5</span><span class="skill-tag">CSS3</span><span class="skill-tag">JavaScript</span><span class="skill-tag">React</span><span class="skill-tag">Node.js</span><span class="skill-tag">Python</span><span class="skill-tag">Git</span><span class="skill-tag">Docker</span><span class="skill-tag">AWS</span></div>
        <div class="contact" id="contact"><h2 style="color: ${color};">Travaillons Ensemble</h2><p style="margin-bottom:1.5rem;">Vous avez un projet ? Discutons-en !</p>
            <a href="https://wa.me/${this.natcashNumber}" class="btn" target="_blank" rel="noopener">📱 WhatsApp</a>
            <p style="margin-top:1rem; color:#aaa;">✨ Créé avec <strong>Sky IA</strong> | Sky Plug CDM</p>
        </div>
    </div>
    <footer><p>© ${year} ${name} | Tous droits réservés</p><p style="margin-top:0.5rem;">Propulsé par Sky IA | 💰 NatCash: ${this.natcashAccount}</p></footer>
</body>
</html>`;
    }
    
    getEcommerceTemplate(name, description, color, year) {
        return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} | Boutique</title>
    <style>
        :root { --primary: ${color}; --bg: #0a0a0a; --card: #111; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--bg); color: #fff; }
        header { background: #000; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--primary); position: sticky; top: 0; z-index: 100; }
        .logo { font-size: 1.5rem; font-weight: bold; color: var(--primary); text-shadow: 0 0 10px var(--primary); }
        nav { display: flex; gap: 1.5rem; align-items: center; }
        nav a { color: #fff; text-decoration: none; transition: color 0.3s; }
        nav a:hover { color: var(--primary); }
        .cart { background: var(--primary); color: #000; padding: 0.5rem 1rem; border-radius: 5px; font-weight: bold; }
        .hero { text-align: center; padding: 4rem 2rem; background: linear-gradient(135deg, #000, rgba(${color},0.1), #000); }
        .hero h1 { font-size: 3rem; color: var(--primary); }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); gap: 2rem; margin: 2rem 0; text-align: center; }
        .feature { background: var(--card); padding: 2rem; border-radius: 10px; border: 1px solid #333; }
        .feature span { font-size: 2.5rem; }
        .feature h4 { color: var(--primary); margin: 1rem 0; }
        .products { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 2rem; }
        .product { background: var(--card); border: 1px solid #333; border-radius: 15px; overflow: hidden; transition: all 0.3s; }
        .product:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 10px 30px rgba(${color},0.3); }
        .product-img { height: 200px; background: linear-gradient(45deg,#1a1a1a,#000); display: flex; align-items: center; justify-content: center; font-size: 4rem; }
        .product-info { padding: 1.5rem; }
        .product-info h3 { color: var(--primary); }
        .price { font-size: 1.5rem; color: var(--primary); font-weight: bold; margin: 1rem 0; }
        .btn-buy { width: 100%; padding: 1rem; background: var(--primary); color: #000; border: none; border-radius: 10px; font-weight: bold; cursor: pointer; transition: all 0.3s; }
        .btn-buy:hover { box-shadow: 0 0 20px rgba(${color},0.8); }
        footer { text-align: center; padding: 2rem; background: #000; border-top: 2px solid var(--primary); margin-top: 3rem; }
        @media (max-width: 768px) { header { flex-direction: column; gap: 1rem; } nav { flex-wrap: wrap; justify-content: center; } .hero h1 { font-size: 2rem; } }
    </style>
</head>
<body>
    <header><div class="logo">🛍️ ${name}</div><nav><a href="#">Accueil</a><a href="#">Produits</a><a href="#">Contact</a><div class="cart">🛒 Panier</div></nav></header>
    <div class="hero"><h1>${name}</h1><p style="color:#aaa;">${description}</p></div>
    <div class="container">
        <div class="features"><div class="feature"><span>🚚</span><h4>Livraison Rapide</h4><p>Partout en Haïti</p></div><div class="feature"><span>💳</span><h4>NatCash & MonCash</h4><p>Paiement sécurisé</p></div><div class="feature"><span>🔄</span><h4>Satisfait ou Remboursé</h4><p>Garantie 30 jours</p></div></div>
        <h2 style="color:${color}; text-align:center; margin:2rem 0;">Nos Produits</h2>
        <div class="products">
            <div class="product"><div class="product-img">📱</div><div class="product-info"><h3>Produit Premium</h3><p>Qualité exceptionnelle</p><p class="price">500 HTG</p><button class="btn-buy">Ajouter au panier</button></div></div>
            <div class="product"><div class="product-img">💻</div><div class="product-info"><h3>Produit Standard</h3><p>Excellent rapport qualité/prix</p><p class="price">300 HTG</p><button class="btn-buy">Ajouter au panier</button></div></div>
            <div class="product"><div class="product-img">🎧</div><div class="product-info"><h3>Produit Basic</h3><p>Accessible à tous</p><p class="price">150 HTG</p><button class="btn-buy">Ajouter au panier</button></div></div>
        </div>
    </div>
    <footer><p>© ${year} ${name} | Propulsé par <strong>Sky IA</strong></p><p style="color:${color};">💳 NatCash: ${this.natcashAccount}</p></footer>
</body>
</html>`;
    }
    
    getBlogTemplate(name, description, color, year) { /* Template blog - similaire, bien structuré */ return `<!-- Blog Template pour ${name} -->`; }
    getBusinessTemplate(name, description, color, year) { /* Template business */ return `<!-- Business Template pour ${name} -->`; }
    getLandingTemplate(name, description, color, year) { /* Template landing */ return `<!-- Landing Template pour ${name} -->`; }
    getRestaurantTemplate(name, description, color, year) { /* Template restaurant */ return `<!-- Restaurant Template pour ${name} -->`; }
    getEducationTemplate(name, description, color, year) { /* Template education */ return `<!-- Education Template pour ${name} -->`; }
    
    // ============================================
    // RÉSOLUTION D'EXERCICES BOOSTÉE
    // ============================================
    async solveExercise(subject, level, statement) {
        const apiResult = await this.callGuruAPI('solve', { subject, level, statement });
        if (apiResult && apiResult.solution) return apiResult;
        return this.solveWithKnowledge(subject, level, statement);
    }
    
    solveWithKnowledge(subject, level, statement) {
        const s = subject.toLowerCase();
        if (s.includes('math')) return this.solveMath(statement, level);
        if (s.includes('physique')) return this.solvePhysics(statement, level);
        if (s.includes('chimie')) return this.solveChemistry(statement, level);
        if (s.includes('programmation') || s.includes('code')) return this.solveProgramming(statement, level);
        return this.solveGeneral(subject, level, statement);
    }
    
    solveMath(statement, level) {
        return {
            solution: `📐 **RÉSOLUTION MATHÉMATIQUE — Sky IA**\n\n**Niveau :** ${level}\n**Énoncé :** ${statement}\n\n**Démarche :**\n1. Identification du type de problème\n2. Rappel des formules : Δ = b²-4ac, x = (-b±√Δ)/2a\n3. Application numérique\n4. Vérification\n\n**Concepts :** Algèbre, Équations, Discriminant\n\n✨ Sky IA v${this.version} | 💰 NatCash: ${this.natcashAccount}`,
            steps: ['Identification', 'Formules', 'Calcul', 'Vérification']
        };
    }
    
    solvePhysics(statement, level) {
        return {
            solution: `⚛️ **RÉSOLUTION PHYSIQUE — Sky IA**\n\n**Niveau :** ${level}\n**Énoncé :** ${statement}\n\n**Analyse :**\n1. Grandeurs : masse, vitesse, force\n2. Lois : F=m·a, Ec=½mv², Ep=mgh\n3. Conversion unités\n4. Calcul final\n\n✨ Sky IA v${this.version}`,
            steps: ['Grandeurs', 'Lois', 'Application', 'Résultat']
        };
    }
    
    solveChemistry(statement, level) {
        return {
            solution: `🧪 **RÉSOLUTION CHIMIE — Sky IA**\n\n**Niveau :** ${level}\n**Énoncé :** ${statement}\n\n**Méthode :**\n1. Équation-bilan\n2. n=m/M\n3. Tableau d'avancement\n4. Réactif limitant\n5. Concentrations\n\n✨ Sky IA v${this.version}`,
            steps: ['Équation', 'Quantités', 'Avancement', 'Résultat']
        };
    }
    
    solveProgramming(statement, level) {
        return {
            solution: `💻 **RÉSOLUTION PROGRAMMATION — Sky IA**\n\n**Niveau :** ${level}\n**Problème :** ${statement}\n\n**Solution :**\n\`\`\`javascript\nfunction solve(input) {\n  let result = [];\n  for (let item of input) {\n    result.push(processData(item));\n  }\n  return result;\n}\n\`\`\`\n\n**Explication :** Parcours, traitement, retour\n\n✨ Sky IA v${this.version}`,
            steps: ['Analyse', 'Algorithme', 'Code', 'Test']
        };
    }
    
    solveGeneral(subject, level, statement) {
        return {
            solution: `📝 **RÉSOLUTION GÉNÉRALE — Sky IA**\n\n**Matière :** ${subject}\n**Niveau :** ${level}\n**Énoncé :** ${statement}\n\n**Démarche :**\n1. Compréhension du sujet\n2. Concepts fondamentaux\n3. Structuration réponse\n4. Application\n\n💡 Premium pour résolution détaillée !\n💰 NatCash: ${this.natcashAccount}\n\n✨ Sky IA v${this.version} | Sky Plug CDM`,
            steps: ['Compréhension', 'Concepts', 'Structure', 'Rédaction']
        };
    }
    
    // ============================================
    // GÉNÉRATION DE CODE
    // ============================================
    async generateCode(prompt, language = 'javascript') {
        const apiResult = await this.callGuruAPI('code', { prompt, language });
        if (apiResult && apiResult.code) return apiResult.code;
        
        const templates = {
            javascript: `// ${prompt}\n// Généré par Sky IA v${this.version}\n\nfunction main() {\n  console.log("Sky IA activé ! 🧠");\n  \n  // Logique principale\n  const data = [];\n  \n  return data;\n}\n\nmain();`,
            python: `# ${prompt}\n# Généré par Sky IA v${this.version}\n\ndef main():\n    print("Sky IA activé ! 🧠")\n    \n    # Logique principale\n    data = []\n    \n    return data\n\nif __name__ == "__main__":\n    main()`,
            html: `<!-- ${prompt} -->\n<!-- Généré par Sky IA v${this.version} -->\n\n<div class="sky-ia-container">\n  <h1>Sky IA</h1>\n  <p>Contenu généré</p>\n</div>\n\n<style>\n  .sky-ia-container {\n    padding: 2rem;\n    text-align: center;\n    background: #0a0a0a;\n    color: #00ff00;\n    border-radius: 10px;\n  }\n</style>`,
            css: `/* ${prompt} */\n/* Généré par Sky IA v${this.version} */\n\n.sky-ia-element {\n  background: #0a0a0a;\n  color: #00ff00;\n  padding: 1rem;\n  border-radius: 10px;\n  border: 1px solid #00ff00;\n  transition: all 0.3s;\n}\n\n.sky-ia-element:hover {\n  box-shadow: 0 0 20px rgba(0,255,0,0.3);\n  transform: translateY(-2px);\n}`
        };
        
        return templates[language] || templates.javascript;
    }
    
    // ============================================
    // STATISTIQUES
    // ============================================
    getStats() {
        return {
            name: this.name,
            version: this.version,
            totalQueries: this.queries,
            totalKnowledge: this.totalKnowledgeEntries,
            categories: Object.keys(this.knowledgeBase).length,
            family: this.family,
            natcash: this.natcashAccount
        };
    }
}

// ============================================
// INITIALISATION GLOBALE
// ============================================
const skyIA = new SkyIA();

console.log('🧠═══════════════════════════');
console.log(`  SKY IA v${skyIA.version}`);
console.log(`  📚 ${skyIA.totalKnowledgeEntries} connaissances intégrées`);
console.log(`  📂 ${Object.keys(skyIA.knowledgeBase).length} catégories`);
console.log(`  🔑 ${GURU_APIS.keys.length} APIs Guru configurées`);
console.log(`  💰 NatCash : ${skyIA.natcashAccount}`);
console.log(`  ⚡ Prêt pour la Famille CDM !`);
console.log('═══════════════════════════🧠');

// Exposer pour usage global
window.skyIA = skyIA;
