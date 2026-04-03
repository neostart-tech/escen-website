<template>
    <section id="vision" ref="visionSection" class="vision-section">
        <!-- ===== FOND BLANC ÉLÉGANT AVEC ANIMATIONS SUBTILES ===== -->
        <div class="elegant-background">
            <!-- Motif académique (lignes fines) -->
            <div class="academic-pattern"></div>
            
            <!-- Cercles concentriques très légers -->
            <div class="circles-container">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
                <div class="circle circle-3"></div>
            </div>

            <!-- Traits de lumière horizontaux -->
            <div class="light-lines">
                <div class="light-line" v-for="i in 5" :key="'light-'+i" :style="{ top: (i * 15) + '%' }"></div>
            </div>

            <!-- Particules fines -->
            <div class="fine-particles">
                <div v-for="i in 25" :key="'part-'+i" class="fine-particle" :style="{
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 5 + 's'
                }"></div>
            </div>
        </div>

        <!-- ===== ÉLÉMENTS DÉCORATIFS MINIMALISTES ===== -->
        <div class="minimal-ornaments">
            <svg class="academic-line left" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,100" stroke="rgba(1,180,213,0.1)" stroke-width="1"/>
            </svg>
            <svg class="academic-line right" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M100,0 L0,100" stroke="rgba(1,180,213,0.1)" stroke-width="1"/>
            </svg>
        </div>

        <div class="container">
            <!-- ===== EN-TÊTE ACADÉMIQUE ===== -->
            <div class="header" :class="{ 'revealed': isSectionVisible }">
                <!-- Badge institutionnel -->
                <div class="institution-badge">
                    <span class="badge-dot"></span>
                    <span class="badge-text">ESCEN • VISION PÉDAGOGIQUE</span>
                    <span class="badge-dot"></span>
                </div>

                <!-- Titre élégant -->
                <h2 class="main-title">
                    <span class="title-word">Notre</span>
                    <span class="title-word accent">vision</span>
                    <span class="title-word">pour</span>
                    <span class="title-word">l'excellence</span>
                </h2>

                <!-- Sous-titre -->
                <div class="subtitle-wrapper">
                    <p class="subtitle">
                        Quatre piliers fondamentaux qui structurent notre approche pédagogique
                        et guident notre mission de formation d'excellence.
                    </p>
                </div>
            </div>

            <!-- ===== GRILLE DES VALEURS / PILIERS AVEC EFFET DE RETOURNEMENT ===== -->
            <div class="values-grid">
                <!-- Carte 1 - Former -->
                <div class="flip-card" :class="{ 'revealed': isSectionVisible }" style="transition-delay: 0.1s">
                    <div class="flip-card-inner">
                        <!-- Face avant (titre) -->
                        <div class="flip-card-front">
                            <div class="card-header">
                                <span class="card-number">01</span>
                                <div class="card-icon-wrapper">
                                    <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.2"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="card-title">FORMER</h3>
                            <div class="flip-hint">Survolez pour découvrir</div>
                        </div>
                        
                        <!-- Face arrière (description) -->
                        <div class="flip-card-back">
                            <p class="card-description">
                                Développer des compétences d'excellence chez nos étudiants, en phase avec 
                                les besoins du marché et les évolutions technologiques.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Carte 2 - Innover -->
                <div class="flip-card" :class="{ 'revealed': isSectionVisible }" style="transition-delay: 0.2s">
                    <div class="flip-card-inner">
                        <!-- Face avant (titre) -->
                        <div class="flip-card-front">
                            <div class="card-header">
                                <span class="card-number">02</span>
                                <div class="card-icon-wrapper">
                                    <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 3v2M15 3v2M5 7h14v12H5V7z" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="12" cy="13" r="2" stroke="currentColor" stroke-width="1.2"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="card-title">INNOVER</h3>
                            <div class="flip-hint">Survolez pour découvrir</div>
                        </div>
                        
                        <!-- Face arrière (description) -->
                        <div class="flip-card-back">
                            <p class="card-description">
                                Intégrer les dernières innovations pédagogiques et technologiques pour
                                offrir une expérience d'apprentissage unique et stimulante.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Carte 3 - Connecter -->
                <div class="flip-card" :class="{ 'revealed': isSectionVisible }" style="transition-delay: 0.3s">
                    <div class="flip-card-inner">
                        <!-- Face avant (titre) -->
                        <div class="flip-card-front">
                            <div class="card-header">
                                <span class="card-number">03</span>
                                <div class="card-icon-wrapper">
                                    <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="1.2"/>
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.2"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="card-title">CONNECTER</h3>
                            <div class="flip-hint">Survolez pour découvrir</div>
                        </div>
                        
                        <!-- Face arrière (description) -->
                        <div class="flip-card-back">
                            <p class="card-description">
                                Tisser des liens forts entre nos étudiants et le monde professionnel,
                                en Afrique et à l'international, pour favoriser leur insertion.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Carte 4 - Rayonner -->
                <div class="flip-card" :class="{ 'revealed': isSectionVisible }" style="transition-delay: 0.4s">
                    <div class="flip-card-inner">
                        <!-- Face avant (titre) -->
                        <div class="flip-card-front">
                            <div class="card-header">
                                <span class="card-number">04</span>
                                <div class="card-icon-wrapper">
                                    <svg class="card-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2l3 6h6l-5 4 2 6-6-3-6 3 2-6-5-4h6l3-6z" stroke="currentColor" stroke-width="1.2"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 class="card-title">RAYONNER</h3>
                            <div class="flip-hint">Survolez pour découvrir</div>
                        </div>
                        
                        <!-- Face arrière (description) -->
                        <div class="flip-card-back">
                            <p class="card-description">
                                Devenir une référence de l'enseignement supérieur numérique en Afrique,
                                reconnue pour la qualité de ses formations et de ses diplômés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ===== STATISTIQUES ÉLÉGANTES ===== -->
            <div class="stats-container" :class="{ 'revealed': isSectionVisible }">
                <div class="stat-block">
                    <span class="stat-number" ref="studentStat">0</span>
                    <span class="stat-label">Étudiants formés</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-block">
                    <span class="stat-number" ref="graduateStat">0</span>
                    <span class="stat-label">Diplômés</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-block">
                    <span class="stat-number" ref="partnerStat">0</span>
                    <span class="stat-label">Partenaires</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-block">
                    <span class="stat-number" ref="successStat">0</span>
                    <span class="stat-label">Insertion professionnelle</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visionSection = ref(null)
const isSectionVisible = ref(false)

// Références pour les compteurs
const studentStat = ref(null)
const graduateStat = ref(null)
const partnerStat = ref(null)
const successStat = ref(null)

const observer = ref(null)

// Animation des compteurs
const animateCounter = (element, target, suffix = '') => {
    if (!element) return
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
        current += increment
        if (current >= target) {
            element.textContent = target + suffix
            clearInterval(timer)
        } else {
            element.textContent = Math.floor(current) + suffix
        }
    }, 30)
}

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isSectionVisible.value) {
                    isSectionVisible.value = true
                    
                    // Déclencher les compteurs avec des chiffres réalistes
                    animateCounter(studentStat.value, 520, '+')
                    animateCounter(graduateStat.value, 410, '+')
                    animateCounter(partnerStat.value, 84, '+')
                    animateCounter(successStat.value, 76, '%')
                }
            })
        },
        {
            threshold: 0.2,
            rootMargin: '0px'
        }
    )

    if (visionSection.value) {
        observer.value.observe(visionSection.value)
    }
})

onUnmounted(() => {
    if (observer.value) {
        observer.value.disconnect()
    }
})
</script>

<style scoped>
/* ===== VARIABLES ÉLÉGANTES ===== */
.vision-section {
    --primary: #01b4d5;
    --primary-light: rgba(1, 180, 213, 0.1);
    --primary-soft: rgba(1, 180, 213, 0.05);
    --secondary: #202a50;
    --gray-50: #f9fafb;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;
    --light: #ffffff;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 25px 50px -12px rgba(1, 180, 213, 0.15);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-flip: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.vision-section {
    position: relative;
    min-height: 100vh;
    padding: 6rem 2rem;
    background: var(--light);
    overflow: hidden;
    display: flex;
    align-items: center;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 20;
}

/* ===== FOND BLANC ÉLÉGANT AVEC ANIMATIONS ===== */
.elegant-background {
    position: absolute;
    inset: 0;
    z-index: 1;
}

/* Motif académique (lignes très fines) */
.academic-pattern {
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(var(--gray-200) 1px, transparent 1px),
        linear-gradient(90deg, var(--gray-200) 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.2;
    animation: patternMove 30s linear infinite;
}

@keyframes patternMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
}

/* Cercles concentriques */
.circles-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle {
    position: absolute;
    border: 1px solid var(--primary-light);
    border-radius: 50%;
    animation: circlePulse 8s ease-in-out infinite;
}

.circle-1 {
    width: 300px;
    height: 300px;
    animation-delay: 0s;
}

.circle-2 {
    width: 500px;
    height: 500px;
    animation-delay: -2s;
    opacity: 0.3;
}

.circle-3 {
    width: 700px;
    height: 700px;
    animation-delay: -4s;
    opacity: 0.2;
}

@keyframes circlePulse {
    0%, 100% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(1.05); opacity: 0.2; }
}

/* Lignes de lumière */
.light-lines {
    position: absolute;
    inset: 0;
}

.light-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
    animation: lightMove 6s ease-in-out infinite;
}

@keyframes lightMove {
    0%, 100% { opacity: 0.1; transform: scaleX(0.8); }
    50% { opacity: 0.3; transform: scaleX(1); }
}

/* Particules fines */
.fine-particles {
    position: absolute;
    inset: 0;
}

.fine-particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.1;
    animation: particleDrift 8s ease-in-out infinite;
}

@keyframes particleDrift {
    0%, 100% { transform: translate(0, 0); opacity: 0.1; }
    50% { transform: translate(30px, -30px); opacity: 0.2; }
}

/* Ornements minimalistes */
.minimal-ornaments {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
}

.academic-line {
    position: absolute;
    width: 100%;
    height: 100%;
}

.academic-line.left {
    left: 0;
    top: 0;
}

.academic-line.right {
    right: 0;
    bottom: 0;
    transform: rotate(180deg);
}

/* ===== HEADER ÉLÉGANT ===== */
.header {
    text-align: center;
    margin-bottom: 5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
    transition-delay: 0.1s;
}

.header.revealed {
    opacity: 1;
    transform: translateY(0);
}

.institution-badge {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.badge-dot {
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.5;
}

.badge-text {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.3em;
    color: var(--gray-500);
    text-transform: uppercase;
}

.main-title {
    margin-bottom: 1.5rem;
}

.title-word {
    display: inline-block;
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--gray-900);
    margin: 0 0.25rem;
}

.title-word.accent {
    font-weight: 500;
    color: var(--primary);
}

.subtitle-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

.subtitle {
    font-size: 1.1rem;
    color: var(--gray-600);
    line-height: 1.7;
    font-weight: 300;
}

/* ===== GRILLE DES VALEURS AVEC EFFET DE RETOURNEMENT ===== */
.values-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;
}

.flip-card {
    background: transparent;
    width: 100%;
    height: 320px;
    perspective: 2000px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.flip-card.revealed {
    opacity: 1;
    transform: translateY(0);
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Face avant et arrière */
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--gray-200);
    transition: var(--transition);
}

/* Face avant (titre) */
.flip-card-front {
    background: var(--light);
}

.flip-card-front .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.flip-card-front .card-number {
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray-400);
    letter-spacing: 0.1em;
}

.flip-card-front .card-icon-wrapper {
    width: 48px;
    height: 48px;
    background: var(--primary-soft);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.flip-card:hover .flip-card-front .card-icon-wrapper {
    background: var(--primary-light);
}

.flip-card-front .card-icon {
    width: 24px;
    height: 24px;
    color: var(--primary);
}

.flip-card-front .card-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--gray-900);
    margin-bottom: 2rem;
    letter-spacing: 0.05em;
    text-align: center;
}

.flip-hint {
    font-size: 0.75rem;
    color: var(--gray-400);
    margin-top: auto;
    padding-bottom: 0.5rem;
    opacity: 0.7;
    transition: var(--transition);
}

.flip-card:hover .flip-hint {
    opacity: 1;
    color: var(--primary);
}

/* Face arrière (description) */
.flip-card-back {
    background: var(--light);
    transform: rotateY(180deg);
    align-items: center;
    justify-content: center;
}

.flip-card-back .card-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--gray-700);
    text-align: center;
}

/* ===== STATISTIQUES ===== */
.stats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
    transition-delay: 0.5s;
}

.stats-container.revealed {
    opacity: 1;
    transform: translateY(0);
}

.stat-block {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--primary);
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.85rem;
    color: var(--gray-500);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: var(--gray-300);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
    .values-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .title-word {
        font-size: 3rem;
    }

    .stats-container {
        flex-wrap: wrap;
        gap: 2rem;
    }

    .stat-divider {
        display: none;
    }
    
    .flip-card {
        height: 280px;
    }
    
    .flip-card-front .card-title {
        font-size: 1.75rem;
    }
}

@media (max-width: 768px) {
    .vision-section {
        padding: 4rem 1rem;
    }

    .title-word {
        font-size: 2.5rem;
        display: block;
        margin: 0.25rem 0;
    }

    .subtitle {
        font-size: 1rem;
    }
    
    .flip-card {
        height: 260px;
    }
    
    .flip-card-front .card-title {
        font-size: 1.5rem;
    }
    
    .flip-card-back .card-description {
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .title-word {
        font-size: 2rem;
    }

    .stat-number {
        font-size: 2rem;
    }
    
    .flip-card {
        height: 240px;
    }
    
    .flip-card-front .card-title {
        font-size: 1.25rem;
    }
}

/* Réduction d'animations */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
    
    .flip-card:hover .flip-card-inner {
        transform: none;
    }
}
</style>