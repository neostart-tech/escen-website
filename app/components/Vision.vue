<template>
    <section id="vision" ref="visionSection" class="vision-section">
        <!-- Ligne verticale de connexion -->
        <div class="timeline-line" :class="{ 'animate-in': isSectionVisible }"></div>
        
        <!-- Points de connexion sur la ligne -->
        <div class="connection-points">
            <div class="connection-point" :class="{ 'animate-in': isSectionVisible }" style="top: 20%"></div>
            <div class="connection-point" :class="{ 'animate-in': isSectionVisible }" style="top: 40%"></div>
            <div class="connection-point" :class="{ 'animate-in': isSectionVisible }" style="top: 60%"></div>
            <div class="connection-point" :class="{ 'animate-in': isSectionVisible }" style="top: 80%"></div>
        </div>

        <div class="container">
            <!-- En-tête -->
            <div class="header" :class="{ 'animate-in': isSectionVisible }">
                <div class="header-content">
                    <span class="section-label">Notre Vision</span>
                    <h2 class="main-title">
                        Les <span class="highlight">4 Piliers</span> Fondamentaux
                    </h2>
                    <p class="section-description">
                        Une approche structurée autour de principes essentiels pour façonner 
                        l'avenir de l'économie numérique
                    </p>
                </div>
            </div>

            <!-- Disposition verticale créative -->
            <div class="vision-timeline mx-14 md:mx-16">
                <!-- Vision 1 - Gauche -->
                <div class="vision-item item-1" :class="{ 'animate-in': isSectionVisible }">
                    <div class="item-content">
                        <div class="item-number">01</div>
                        <div class="item-card">
                            <div class="card-header">
                                <h3 class="card-title">FORMER</h3>
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" stroke-width="2"/>
                                        <path d="M12 14v6l9-5M12 20l-9-5" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    Former des étudiants hautement qualifiés, aptes à intégrer immédiatement
                                    le marché de l'emploi ou à créer leur propre start-up innovante dans
                                    l'écosystème numérique mondial avec des compétences pratiques et théoriques solides.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 2 - Droite -->
                <div class="vision-item item-2" :class="{ 'animate-in': isSectionVisible }">
                    <div class="item-content">
                        <div class="item-number">02</div>
                        <div class="item-card">
                            <div class="card-header">
                                <h3 class="card-title">CONNECTER</h3>
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M8 12h8M12 16V8" stroke="currentColor" stroke-width="2"/>
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    Connecter étroitement la formation universitaire avec les réalités dynamiques
                                    du marché de l'emploi et l'évolution constante de l'économie numérique moderne,
                                    créant ainsi un pont essentiel entre théorie académique et pratique professionnelle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 3 - Gauche -->
                <div class="vision-item item-3" :class="{ 'animate-in': isSectionVisible }">
                    <div class="item-content">
                        <div class="item-number">03</div>
                        <div class="item-card">
                            <div class="card-header">
                                <h3 class="card-title">CONTRIBUER</h3>
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2"/>
                                        <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    Contribuer activement au développement de l'écosystème économique et numérique
                                    grâce à l'émergence d'une nouvelle génération de spécialistes, d'experts et
                                    d'entrepreneurs formés aux technologies les plus avancées du secteur digital.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision 4 - Droite -->
                <div class="vision-item item-4" :class="{ 'animate-in': isSectionVisible }">
                    <div class="item-content">
                        <div class="item-number">04</div>
                        <div class="item-card">
                            <div class="card-header">
                                <h3 class="card-title">PLATEFORME DE RÉFÉRENCE</h3>
                                <div class="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="currentColor" stroke-width="2"/>
                                        <path d="M12 7v6l3 3" stroke="currentColor" stroke-width="2"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    Faire d'ESCEN une plateforme d'excellence et de référence internationale
                                    où se forment et s'épanouissent les futurs champions et leaders de
                                    l'Économie Numérique en Afrique et dans le monde entier.
                                </p>
                            </div>
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
            threshold: 0.1,
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
/* Variables */
.vision-section {
    --primary: #01b4d5;
    --primary-dark: #0194b0;
    --secondary: #202a50;
    --light: #ffffff;
    --light-gray: #f8fafc;
    --dark: #1e293b;
    --text: #334155;
    --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 25px 50px -12px rgba(1, 180, 213, 0.15);
    --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Section principale */
.vision-section {
    position: relative;
    padding: 5rem 1.5rem;
    background: linear-gradient(135deg, var(--light) 0%, var(--light-gray) 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 2;
}

/* Ligne de timeline verticale */
.timeline-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 0;
    background: linear-gradient(to bottom, var(--primary), transparent);
    z-index: 1;
    transition: height 1.5s ease-out;
}

.timeline-line.animate-in {
    height: 80%;
}

/* Points de connexion */
.connection-points {
    position: absolute;
    inset: 0;
    z-index: 1;
}

.connection-point {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    border: 4px solid var(--light);
    box-shadow: 0 0 0 4px rgba(1, 180, 213, 0.3);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.connection-point.animate-in {
    transform: translate(-50%, -50%) scale(1);
}

.connection-point:nth-child(1) { transition-delay: 0.3s; }
.connection-point:nth-child(2) { transition-delay: 0.6s; }
.connection-point:nth-child(3) { transition-delay: 0.9s; }
.connection-point:nth-child(4) { transition-delay: 1.2s; }

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
    transition-delay: 0.2s;
}

.section-label {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: linear-gradient(90deg, var(--primary), var(--primary-dark));
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 20px rgba(1, 180, 213, 0.2);
}

.main-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--dark);
    line-height: 1.2;
    margin-bottom: 1rem;
}

.highlight {
    color: var(--primary);
    position: relative;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(1, 180, 213, 0.2);
    border-radius: 4px;
    z-index: -1;
}

.section-description {
    font-size: 1.125rem;
    color: var(--text);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Timeline verticale */
.vision-timeline {
    position: relative;
    z-index: 2;
}

/* Items de vision */
.vision-item {
    display: flex;
    margin-bottom: 4rem;
    opacity: 0;
    transform: translateX(-50px);
    transition: var(--transition);
}

.vision-item.animate-in {
    opacity: 1;
    transform: translateX(0);
}

.item-1 { transition-delay: 0.4s; }
.item-2 { transition-delay: 0.5s; }
.item-3 { transition-delay: 0.6s; }
.item-4 { transition-delay: 0.7s; }

/* Items pairs (droite) */
.item-2,
.item-4 {
    flex-direction: row-reverse;
    transform: translateX(50px);
}

.item-2.animate-in,
.item-4.animate-in {
    transform: translateX(0);
}

.item-content {
    width: 45%;
    position: relative;
}

/* Numéro */
.item-number {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 6rem;
    font-weight: 900;
    color: rgba(1, 180, 213, 0.1);
    line-height: 1;
    z-index: 0;
    transition: var(--transition);
}

.item-1 .item-number,
.item-3 .item-number {
    right: -120px;
}

.item-2 .item-number,
.item-4 .item-number {
    left: -120px;
}

.vision-item:hover .item-number {
    color: rgba(1, 180, 213, 0.15);
    transform: translateY(-50%) scale(1.05);
}

/* Carte */
.item-card {
    position: relative;
    background: var(--light);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: var(--shadow);
    border: 2px solid transparent;
    z-index: 1;
    transition: var(--transition);
}

.vision-item:hover .item-card {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(1, 180, 213, 0.3);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.card-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--dark);
    margin: 0;
    line-height: 1.2;
    transition: var(--transition);
}

.vision-item:hover .card-title {
    color: var(--primary);
}

.card-icon {
    width: 60px;
    height: 60px;
    background: rgba(1, 180, 213, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 1rem;
    transition: var(--transition);
}

.card-icon svg {
    width: 32px;
    height: 32px;
    color: var(--primary);
    transition: var(--transition);
}

.vision-item:hover .card-icon {
    background: var(--primary);
    transform: rotate(10deg);
}

.vision-item:hover .card-icon svg {
    color: var(--light);
}

.card-body {
    position: relative;
    z-index: 1;
}

.card-text {
    color: var(--text);
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0;
    text-align: justify;
    transition: var(--transition);
}

.vision-item:hover .card-text {
    color: var(--dark);
}

/* Effet de bordure dégradée au survol */
.item-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, var(--primary), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: var(--transition);
}

.vision-item:hover .item-card::before {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 992px) {
    .vision-item {
        width: 100%;
        margin-bottom: 3rem;
    }
    
    .item-content {
        width: 100%;
    }
    
    .item-number {
        display: none;
    }
    
    .timeline-line,
    .connection-points {
        display: none;
    }
    
    .vision-item,
    .item-2.animate-in,
    .item-4.animate-in {
        transform: translateX(0) !important;
    }
    
    .card-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .card-icon {
        margin-left: 0;
        margin-top: 1rem;
    }
}

@media (max-width: 768px) {
    .vision-section {
        padding: 4rem 1rem;
    }
    
    .header {
        margin-bottom: 3rem;
    }
    
    .main-title {
        font-size: 2.5rem;
    }
    
    .section-label {
        padding: 0.5rem 1.5rem;
        font-size: 0.8rem;
    }
    
    .section-description {
        font-size: 1rem;
    }
    
    .item-card {
        padding: 2rem;
    }
    
    .card-title {
        font-size: 1.5rem;
    }
    
    .card-icon {
        width: 50px;
        height: 50px;
    }
    
    .card-icon svg {
        width: 26px;
        height: 26px;
    }
    
    .card-text {
        font-size: 1rem;
        line-height: 1.6;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }
    
    .item-card {
        padding: 1.5rem;
    }
    
    .card-title {
        font-size: 1.375rem;
    }
    
    .card-text {
        font-size: 0.95rem;
    }
}

/* Optimisation de la lisibilité */
.card-text {
    hyphens: auto;
    -webkit-hyphens: auto;
    word-break: break-word;
    overflow-wrap: break-word;
}

/* Réduction des animations */
@media (prefers-reduced-motion: reduce) {
    .vision-item,
    .header,
    .timeline-line,
    .connection-point,
    .item-number,
    .item-card,
    .card-icon,
    .card-title,
    .card-text {
        transition: none !important;
    }
    
    .header.animate-in,
    .vision-item.animate-in,
    .timeline-line.animate-in,
    .connection-point.animate-in {
        opacity: 1;
        transform: none;
        height: auto;
    }
}
</style>