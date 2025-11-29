<template>
    <section id="vision" ref="visionSection" class="vision-section">
        <!-- Éléments décoratifs de fond -->
        <div class="background-elements">
            <div class="deco-circle deco-1"></div>
            <div class="deco-square deco-2"></div>
            <div class="deco-circle deco-3"></div>
        </div>

        <div class="container">
            <!-- En-tête -->
            <div class="header" :class="{ 'animate-in': isSectionVisible }">
                <div class="title-decoration">
                    <div class="line left-line"></div>
                    <span class="badge">Notre Ambition</span>
                    <div class="line right-line"></div>
                </div>
                
                <h2 class="main-title">
                    Notre <span class="highlight">Vision</span>
                </h2>
                
                <p class="subtitle">
                    Une approche stratégique articulée autour de 4 piliers fondamentaux
                    pour façonner l'avenir de l'économie numérique
                </p>
            </div>

            <!-- Grille des visions -->
            <div class="visions-grid">
                <!-- Vision 1 -->
                <div class="vision-card" :class="{ 'animate-in': isSectionVisible }" data-delay="0">
                    <div class="card-inner">
                        <div class="card-header">
                            <div class="number-badge">
                                <span class="number">01</span>
                                <div class="badge-glow"></div>
                            </div>
                            <h3 class="card-title">FORMER</h3>
                            <div class="title-underline"></div>
                        </div>
                        
                        <div class="card-content">
                            <p class="card-text">
                                Former des étudiants hautement qualifiés, aptes à intégrer immédiatement
                                le marché de l'emploi ou à créer leur propre start-up innovante dans
                                l'écosystème numérique mondial avec des compétences pratiques et théoriques solides.
                            </p>
                        </div>

                        <div class="card-corners">
                            <div class="corner top-right"></div>
                            <div class="corner bottom-left"></div>
                        </div>
                    </div>
                </div>

                <!-- Vision 2 -->
                <div class="vision-card" :class="{ 'animate-in': isSectionVisible }" data-delay="1">
                    <div class="card-inner">
                        <div class="card-header">
                            <div class="number-badge">
                                <span class="number">02</span>
                                <div class="badge-glow"></div>
                            </div>
                            <h3 class="card-title">CONNECTER</h3>
                            <div class="title-underline"></div>
                        </div>
                        
                        <div class="card-content">
                            <p class="card-text">
                                Connecter étroitement la formation universitaire avec les réalités dynamiques
                                du marché de l'emploi et l'évolution constante de l'économie numérique moderne,
                                créant ainsi un pont essentiel entre théorie académique et pratique professionnelle.
                            </p>
                        </div>

                        <div class="card-corners">
                            <div class="corner top-left"></div>
                            <div class="corner bottom-right"></div>
                        </div>
                    </div>
                </div>

                <!-- Vision 3 -->
                <div class="vision-card" :class="{ 'animate-in': isSectionVisible }" data-delay="2">
                    <div class="card-inner">
                        <div class="card-header">
                            <div class="number-badge">
                                <span class="number">03</span>
                                <div class="badge-glow"></div>
                            </div>
                            <h3 class="card-title">CONTRIBUER</h3>
                            <div class="title-underline"></div>
                        </div>
                        
                        <div class="card-content">
                            <p class="card-text">
                                Contribuer activement au développement de l'écosystème économique et numérique
                                grâce à l'émergence d'une nouvelle génération de spécialistes, d'experts et
                                d'entrepreneurs formés aux technologies les plus avancées du secteur digital.
                            </p>
                        </div>

                        <div class="card-corners">
                            <div class="corner top-right"></div>
                            <div class="corner bottom-left"></div>
                        </div>
                    </div>
                </div>

                <!-- Vision 4 -->
                <div class="vision-card" :class="{ 'animate-in': isSectionVisible }" data-delay="3">
                    <div class="card-inner">
                        <div class="card-header">
                            <div class="number-badge">
                                <span class="number">04</span>
                                <div class="badge-glow"></div>
                            </div>
                            <h3 class="card-title">PLATEFORME<br>DE RÉFÉRENCE</h3>
                            <div class="title-underline"></div>
                        </div>
                        
                        <div class="card-content">
                            <p class="card-text">
                                Faire d'ESCEN une plateforme d'excellence et de référence internationale
                                où se forment et s'épanouissent les futurs champions et leaders de
                                l'Économie Numérique en Afrique et dans le monde entier.
                            </p>
                        </div>

                        <div class="card-corners">
                            <div class="corner top-left"></div>
                            <div class="corner bottom-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visionSection = ref(null)
const isSectionVisible = ref(false)

const observer = ref(null)

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isSectionVisible.value) {
                    isSectionVisible.value = true
                }
            })
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
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
/* Variables CSS */
.vision-section {
    --primary-color: #01b4d5;
    --primary-dark: #0056b3;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-white: #ffffff;
    --bg-gray: #f9fafb;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 25px 50px -12px rgba(1, 180, 213, 0.25);
    --border-radius: 20px;
    --transition: all 0.3s ease;
}

/* Section principale */
.vision-section {
    position: relative;
    padding: 5rem 1rem;
    background: var(--bg-white);
    overflow: hidden;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
}

/* Éléments de fond */
.background-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
}

.deco-circle,
.deco-square {
    position: absolute;
    border: 1px solid var(--primary-color);
    opacity: 0.1;
    animation: float 15s ease-in-out infinite;
}

.deco-circle {
    border-radius: 50%;
}

.deco-square {
    border-radius: 8px;
    transform: rotate(45deg);
}

.deco-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 5%;
    animation-delay: 0s;
}

.deco-2 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    right: 5%;
    animation-delay: 5s;
}

.deco-3 {
    width: 60px;
    height: 60px;
    top: 40%;
    right: 15%;
    animation-delay: 10s;
}

/* En-tête */
.header {
    text-align: center;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
}

.header.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.title-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    flex: 1;
    max-width: 100px;
    transition: var(--transition);
}

.badge {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: var(--transition);
}

.header.animate-in .line {
    max-width: 120px;
}

.header.animate-in .badge {
    transform: scale(1.05);
}

.main-title {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.highlight {
    color: var(--primary-color);
}

.subtitle {
    font-size: 1.25rem;
    color: var(--text-light);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Grille des visions - CORRECTION APPLIQUÉE ICI */
.visions-grid {
    display: grid;
    gap: 2rem;
    /* Desktop large - 4 colonnes */
    grid-template-columns: repeat(4, 1fr);
}

/* Tablette et desktop moyen - 2 colonnes à partir de 1025px jusqu'à 1279px */
@media (min-width: 1025px) and (max-width: 1279px) {
    .visions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.75rem;
    }
    
    .card-inner {
        min-height: 360px;
        padding: 1.75rem 1.5rem;
    }
    
    .main-title {
        font-size: 2.75rem;
    }
}

/* Tablette classique */
@media (max-width: 1024px) {
    .visions-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .main-title {
        font-size: 2.5rem;
    }
    
    .subtitle {
        font-size: 1.125rem;
    }
    
    .card-inner {
        min-height: 350px;
        padding: 1.5rem 1.25rem;
    }
    
    .number {
        width: 60px;
        height: 60px;
        font-size: 1.125rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .vision-section {
        padding: 3rem 1rem;
    }
    
    .visions-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
    
    .header {
        margin-bottom: 3rem;
    }
    
    .title-decoration {
        gap: 1rem;
    }
    
    .line {
        max-width: 60px !important;
    }
    
    .badge {
        font-size: 0.8rem;
    }
    
    .main-title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .subtitle {
        font-size: 1rem;
    }
    
    .card-inner {
        min-height: 300px;
        padding: 1.5rem 1rem;
    }
    
    .number {
        width: 55px;
        height: 55px;
        font-size: 1rem;
    }
    
    .card-title {
        font-size: 1.25rem;
    }
    
    .card-text {
        font-size: 0.9rem;
        line-height: 1.6;
    }
    
    .deco-1,
    .deco-2,
    .deco-3 {
        display: none;
    }
}

/* Petit mobile */
@media (max-width: 480px) {
    .vision-section {
        padding: 2rem 0.5rem;
    }
    
    .container {
        padding: 0 0.5rem;
    }
    
    .main-title {
        font-size: 1.75rem;
    }
    
    .subtitle {
        font-size: 0.9rem;
    }
    
    .card-inner {
        min-height: 280px;
        padding: 1.25rem 1rem;
    }
    
    .number {
        width: 50px;
        height: 50px;
        font-size: 0.9rem;
    }
    
    .card-title {
        font-size: 1.125rem;
    }
}

/* Cartes de vision */
.vision-card {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: var(--transition);
}

.vision-card.animate-in {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.vision-card[data-delay="0"].animate-in { transition-delay: 0.1s; }
.vision-card[data-delay="1"].animate-in { transition-delay: 0.2s; }
.vision-card[data-delay="2"].animate-in { transition-delay: 0.3s; }
.vision-card[data-delay="3"].animate-in { transition-delay: 0.4s; }

.card-inner {
    position: relative;
    background: linear-gradient(135deg, var(--bg-white), var(--bg-gray));
    border: 2px solid rgba(1, 180, 213, 0.2);
    border-radius: var(--border-radius);
    padding: 2rem 1.5rem;
    height: 100%;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow);
    transition: var(--transition);
    overflow: hidden;
}

.vision-card:hover .card-inner {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-hover);
    border-color: rgba(1, 180, 213, 0.4);
}

/* En-tête de carte */
.card-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.number-badge {
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
}

.number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    color: white;
    font-weight: 800;
    font-size: 1.25rem;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(1, 180, 213, 0.3);
    position: relative;
    z-index: 2;
    transition: var(--transition);
}

.badge-glow {
    position: absolute;
    inset: -4px;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
    border-radius: 20px;
    opacity: 0.5;
    filter: blur(8px);
    z-index: 1;
    transition: var(--transition);
}

.vision-card:hover .number {
    transform: scale(1.1) rotate(5deg);
}

.vision-card:hover .badge-glow {
    opacity: 0.8;
    filter: blur(12px);
}

.card-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    transition: var(--transition);
}

.vision-card:hover .card-title {
    letter-spacing: 0.05em;
}

.title-underline {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
    margin: 0 auto;
    border-radius: 2px;
    transition: var(--transition);
}

.vision-card:hover .title-underline {
    width: 80px;
}

/* Contenu de carte */
.card-content {
    flex: 1;
    display: flex;
    align-items: center;
}

.card-text {
    color: var(--text-dark);
    line-height: 1.7;
    text-align: justify;
    font-size: 0.95rem;
    transition: var(--transition);
}

.vision-card:hover .card-text {
    color: var(--text-dark);
    line-height: 1.75;
}

/* Coins décoratifs */
.card-corners {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.corner {
    position: absolute;
    width: 24px;
    height: 24px;
    border-color: var(--primary-color);
    opacity: 0.4;
    transition: var(--transition);
}

.top-right {
    top: 12px;
    right: 12px;
    border-top: 2px solid;
    border-right: 2px solid;
    border-top-right-radius: 8px;
}

.top-left {
    top: 12px;
    left: 12px;
    border-top: 2px solid;
    border-left: 2px solid;
    border-top-left-radius: 8px;
}

.bottom-right {
    bottom: 12px;
    right: 12px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    border-bottom-right-radius: 8px;
}

.bottom-left {
    bottom: 12px;
    left: 12px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-bottom-left-radius: 8px;
}

.vision-card:hover .corner {
    opacity: 0.8;
    width: 28px;
    height: 28px;
}

/* Animations */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
    }
    33% {
        transform: translateY(-20px) translateX(10px) rotate(120deg);
    }
    66% {
        transform: translateY(10px) translateX(-15px) rotate(240deg);
    }
}

/* Réduction des animations pour les préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
    .vision-card,
    .header,
    .card-inner,
    .number,
    .badge-glow,
    .card-title,
    .title-underline,
    .card-text,
    .corner,
    .deco-circle,
    .deco-square {
        transition: none !important;
        animation: none !important;
    }
    
    .vision-card.animate-in,
    .header.animate-in {
        opacity: 1;
        transform: none;
    }
}
</style>