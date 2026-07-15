<template>
  <div class="page-root">

    <!-- ═══════════════════ PANNEAU GAUCHE ══════════════════════════════════ -->
    <aside class="left-panel">
      <img src="/slider/slider-1.jpg" alt="" class="left-bg">
      <div class="left-overlay"></div>
      <div class="left-body">
        <NuxtLink to="/" class="block">
          <img src="/logo/ESECN_LOGO.png" alt="ESCEN" class="left-logo">
        </NuxtLink>
        <div class="left-text">
          <p class="left-kicker">Dossier de candidature</p>
          <h1 class="left-heading">
            Votre avenir<br>
            <em class="left-heading-gold">commence ici</em>
          </h1>
          <p class="left-desc">
            Quatre étapes, une quinzaine de minutes. Munissez-vous de vos bulletins, de votre relevé de BAC et d'une pièce d'identité avant de commencer.
          </p>
        </div>
        <div class="left-note">
          <span class="left-note-icon">
            <svg fill="currentColor" viewBox="0 0 256 256"><path d="M236,128a108,108,0,1,1-108-108A108.12,108.12,0,0,1,236,128Zm-96-52v56a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm-12,92a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z"/></svg>
          </span>
          <p><strong>Important :</strong> seules les séries <strong>C, D, E</strong> et <strong>F2</strong> sont acceptées pour cette procédure.</p>
        </div>
      </div>
    </aside>

    <!-- ═══════════════════ PANNEAU DROIT ═══════════════════════════════════ -->
    <main class="right-panel">

      <!-- Barre de navigation -->
      <div class="topbar">
        <NuxtLink to="/" class="lg:hidden">
          <img src="/logo/ESECN_LOGO.png" alt="ESCEN" class="mobile-logo">
        </NuxtLink>
        <div class="hidden lg:block"></div>
        <NuxtLink to="/" class="back-link">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Retourner au site
        </NuxtLink>
      </div>

      <!-- Indicateur d'étapes -->
      <div class="step-nav">
        <div class="step-track">
          <div class="step-line-bg"></div>
          <div class="step-line-progress" :style="`width:${(etapeActive / (etapes.length - 1)) * 100}%`"></div>
          <div v-for="(etape, i) in etapes" :key="i" class="step-item">
            <div class="step-bubble" :class="i < etapeActive ? 'step-done' : i === etapeActive ? 'step-active' : 'step-future'">
              <svg v-if="i < etapeActive" class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span class="step-label" :class="i === etapeActive ? 'step-label-active' : i < etapeActive ? 'step-label-done' : 'step-label-future'">{{ etape }}</span>
          </div>
        </div>
      </div>

      <!-- Zone de formulaire -->
      <div class="form-zone">
        <div class="panel-card">

          <!-- En-tête de la carte -->
          <div class="panel-head">
            <p class="panel-kicker">Étape {{ etapeActive + 1 }} / {{ etapes.length }}</p>
            <h2 class="panel-title">{{ panelTitles[etapeActive] }}</h2>
            <p class="panel-sub">{{ panelSubs[etapeActive] }}</p>
          </div>

          <!-- Contenu animé selon l'étape -->
          <Transition name="slide-step" mode="out-in" @after-enter="initPhoneWidgetsForStep">
          <div :key="etapeActive">

            <!-- ─── ÉTAPE 0 : Identité ─────────────────────────────────────── -->
            <form v-if="etapeActive === 0" @submit.prevent="nextStep" class="form-body">
              <div class="field-grid">
                <div class="field">
                  <label class="field-label">Nom <span class="req">*</span></label>
                  <input v-model="formData.nom" @input="formData.nom = formData.nom.replace(/\d/g, '')" type="text" required class="field-input" placeholder="Nom de famille">
                </div>
                <div class="field">
                  <label class="field-label">Prénom(s) <span class="req">*</span></label>
                  <input v-model="formData.prenom" @input="formData.prenom = formData.prenom.replace(/\d/g, '')" type="text" required class="field-input" placeholder="Prénom(s)">
                </div>
                <div class="field">
                  <label class="field-label">Nom de jeune fille <span class="opt">(si mariée)</span></label>
                  <input v-model="formData.nom_jeune_fille" type="text" class="field-input" placeholder="Nom de jeune fille">
                </div>
                <div class="field">
                  <label class="field-label">Sexe <span class="req">*</span></label>
                  <select v-model="formData.genre" required class="field-input">
                    <option value="">Sélectionner</option>
                    <option>Masculin</option>
                    <option>Féminin</option>
                  </select>
                </div>
                <div class="field">
                  <label class="field-label">Date de naissance <span class="req">*</span></label>
                  <input v-model="formData.date_naissance" type="date" :min="minDateString" :max="maxDateString" required class="field-input">
                </div>
                <div class="field">
                  <label class="field-label">Lieu de naissance <span class="req">*</span></label>
                  <input v-model="formData.lieu_naissance" type="text" required class="field-input" placeholder="Ville, Pays">
                </div>
                <div class="field field--full">
                  <label class="field-label">Nationalité <span class="req">*</span></label>
                  <div class="nat-wrap" ref="dropdownRef">
                    <button type="button" @click="isDropdownOpen = !isDropdownOpen" class="field-input nat-btn">
                      <div v-if="formData.nationalite" class="nat-selected">
                        <img :src="`https://flagcdn.com/w20/${nationalitesList.find(n => n.value === formData.nationalite)?.code}.png`" class="nat-flag">
                        <span class="nat-value">{{ formData.nationalite }}</span>
                      </div>
                      <span v-else class="nat-placeholder">Sélectionner une nationalité</span>
                      <svg class="nat-chevron" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div v-if="isDropdownOpen" class="nat-menu">
                      <div class="nat-search-row">
                        <input type="text" v-model="searchNat" placeholder="Rechercher un pays..." class="nat-search">
                      </div>
                      <div class="nat-options">
                        <p v-if="filteredNationalites.length === 0" class="nat-empty">Aucun résultat.</p>
                        <button type="button" v-for="nat in filteredNationalites" :key="nat.value" @click="selectNat(nat.value)"
                          class="nat-option" :class="{ 'nat-option--sel': formData.nationalite === nat.value }">
                          <img :src="`https://flagcdn.com/w20/${nat.code}.png`" class="nat-flag">
                          <span>{{ nat.label }}</span>
                          <svg v-if="formData.nationalite === nat.value" class="nat-check" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="section-sep">
                <span class="section-sep-label">Informations du BAC</span>
              </div>

              <div class="field-grid">
                <div class="field">
                  <label class="field-label">Numéro de table <span class="opt">(optionnel)</span></label>
                  <input v-model="formData.numero_table" @input="formData.numero_table = formData.numero_table.replace(/\D/g, '')" type="text" class="field-input" placeholder="Numéro de table BAC">
                </div>
                <div class="field">
                  <label class="field-label">Année d'obtention du BAC <span class="opt">(optionnel)</span></label>
                  <input v-model="formData.annee_bac" type="number" :min="1990" :max="today.getFullYear()" class="field-input" :placeholder="today.getFullYear().toString()">
                </div>
                <div class="field">
                  <label class="field-label">Série du BAC <span class="opt">(optionnel)</span></label>
                  <select v-model="formData.serie" class="field-input">
                    <option value="">Sélectionner</option>
                    <option>C</option><option>D</option><option>E</option><option>F2</option>
                  </select>
                </div>
                <div class="field">
                  <label class="field-label">Mention au BAC <span class="opt">(optionnel)</span></label>
                  <select v-model="formData.mention_bac" class="field-input">
                    <option value="">Sélectionner</option>
                    <option>Passable</option><option>Assez Bien</option><option>Bien</option><option>Très Bien</option>
                  </select>
                </div>
                <div class="field field--full">
                  <label class="field-label">Type du dernier diplôme <span class="opt">(optionnel)</span></label>
                  <select v-model="formData.type_diplome" class="field-input">
                    <option value="">Sélectionner</option>
                    <option>Bac 2</option><option>BTS</option><option>Licence</option><option>Master</option>
                  </select>
                </div>
              </div>

              <div class="step-actions">
                <div></div>
                <button type="submit" class="btn-primary">Continuer <span aria-hidden="true">→</span></button>
              </div>
            </form>

            <!-- ─── ÉTAPE 1 : Coordonnées ──────────────────────────────────── -->
            <form v-else-if="etapeActive === 1" @submit.prevent="nextStep" class="form-body">
              <div class="field-grid field-grid--1col">
                <div class="field">
                  <label class="field-label">Téléphone principal <span class="req">*</span></label>
                  <div class="w-full"><input type="tel" ref="phoneInput" required class="field-input"></div>
                  <p class="field-hint">Numéro togolais ou étranger.</p>
                </div>
                <div class="field">
                  <label class="field-label">Téléphone 2 <span class="opt">(optionnel)</span></label>
                  <div class="w-full"><input type="tel" ref="phone2Input" class="field-input"></div>
                </div>
                <div class="field">
                  <label class="field-label">Téléphone 3 <span class="opt">(optionnel)</span></label>
                  <div class="w-full"><input type="tel" ref="phone3Input" class="field-input"></div>
                </div>
                <div class="field">
                  <label class="field-label">Adresse email <span class="req">*</span></label>
                  <input v-model="formData.email" type="email" required class="field-input" placeholder="mon.adresse@domaine.com">
                </div>
              </div>
              <div class="step-actions">
                <button type="button" @click="prevStep" class="btn-ghost">← Retour</button>
                <button type="submit" class="btn-primary">Continuer <span aria-hidden="true">→</span></button>
              </div>
            </form>

            <!-- ─── ÉTAPE 2 : Documents ────────────────────────────────────── -->
            <form v-else-if="etapeActive === 2" @submit.prevent="nextStep" class="form-body">
              <div class="field-grid field-grid--1col">
                <div class="field">
                  <label class="field-label">Niveau visé <span class="req">*</span></label>
                  <select v-model="formData.niveau_id" required class="field-input" @change="updateFilieres">
                    <option value="">Sélectionnez un niveau</option>
                    <option v-for="n in niveaux" :key="n.id" :value="n.id">{{ n.libelle || n.nom }}</option>
                  </select>
                </div>
                <div class="field">
                  <label class="field-label">Filière souhaitée <span class="req">*</span></label>
                  <select v-model="formData.filiere_id" required class="field-input" :disabled="!formData.niveau_id || loadingFilieres" @change="fetchDynamicDocuments">
                    <option value="">{{ loadingFilieres ? 'Chargement des filières...' : 'Sélectionnez une filière' }}</option>
                    <option v-for="f in filieres" :key="f.id" :value="f.id">{{ f.nom }}</option>
                  </select>
                </div>
              </div>

              <!-- Boîte récapitulatif des pièces -->
              <div v-if="fileInputs.length > 0" class="docs-recap">
                <div class="docs-recap-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                  <p class="docs-recap-title">Pièces à fournir pour ce niveau</p>
                  <ul class="docs-recap-list">
                    <li v-for="doc in fileInputs" :key="doc.key">
                      {{ doc.label }}<span v-if="!doc.is_obligatoire" class="opt"> (optionnel)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Upload grid -->
              <template v-if="formData.niveau_id">
                <div class="section-sep">
                  <span class="section-sep-label">Joindre les documents</span>
                </div>
                <p v-if="fileInputs.length === 0" class="field-hint" style="text-align:center;padding:2rem 0">Aucune pièce configurée pour ce niveau.</p>
                <div v-else class="docs-grid">
                  <div v-for="doc in fileInputs" :key="doc.key"
                       class="dropzone" :class="{ 'dropzone--filled': isFileSelected(doc.key) }">
                    <input type="file"
                           @change="handleFile(doc.key, $event, doc.multiple)"
                           :multiple="doc.multiple"
                           class="dropzone-input"
                           :accept="doc.accepted_formats === 'image' ? 'image/*' : (doc.accepted_formats === 'pdf' ? 'application/pdf' : '.pdf,image/*')">
                    <!-- État rempli -->
                    <div v-if="isFileSelected(doc.key)" class="dropzone-filled">
                      <div class="dropzone-check-ring">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <p class="dropzone-filename">{{ getFileName(doc.key) }}</p>
                      <p class="dropzone-ready-label">Fichier prêt</p>
                    </div>
                    <!-- État vide -->
                    <div v-else class="dropzone-empty">
                      <div class="dropzone-upload-icon">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 7.5L12 3m0 0L7.5 7.5M12 3v13.5"/></svg>
                      </div>
                      <p class="dropzone-doc-label">
                        <strong>{{ doc.label }}</strong><span v-if="doc.is_obligatoire" class="req"> *</span>
                      </p>
                      <p class="dropzone-doc-hint">{{ doc.multiple ? 'Plusieurs fichiers acceptés' : 'Un seul fichier' }}</p>
                    </div>
                  </div>
                </div>
              </template>

              <div class="step-actions">
                <button type="button" @click="prevStep" class="btn-ghost">← Retour</button>
                <button type="submit" class="btn-primary">Continuer <span aria-hidden="true">→</span></button>
              </div>
            </form>

            <!-- ─── ÉTAPE 3 : Tuteur(s) ────────────────────────────────────── -->
            <form v-else-if="etapeActive === 3" @submit.prevent="soumettreFormulaire" class="form-body">
              <div class="tuteurs-list">
                <div v-for="(tuteur, index) in tuteurs" :key="index" class="tuteur-card">
                  <div class="tuteur-head">
                    <h3 class="tuteur-title">{{ index === 0 ? 'Tuteur / Parent 1' : `Tuteur / Parent ${index + 1}` }}</h3>
                    <button v-if="tuteurs.length > 1" type="button" @click="removeTuteur(index)" class="remove-btn">Retirer</button>
                  </div>
                  <div class="field-grid">
                    <div class="field">
                      <label class="field-label">Nom <span class="req">*</span></label>
                      <input v-model="tuteur.nom" @input="tuteur.nom = tuteur.nom.replace(/\d/g, '')" type="text" required class="field-input" placeholder="Nom">
                    </div>
                    <div class="field">
                      <label class="field-label">Prénom <span class="req">*</span></label>
                      <input v-model="tuteur.prenom" @input="tuteur.prenom = tuteur.prenom.replace(/\d/g, '')" type="text" required class="field-input" placeholder="Prénom">
                    </div>
                    <div class="field">
                      <label class="field-label">Profession <span class="req">*</span></label>
                      <input v-model="tuteur.profession" type="text" required class="field-input" placeholder="Profession">
                    </div>
                    <div class="field">
                      <label class="field-label">Employeur <span class="opt">(optionnel)</span></label>
                      <input v-model="tuteur.employeur" type="text" class="field-input" placeholder="Nom de l'employeur">
                    </div>
                    <div class="field">
                      <label class="field-label">Email <span class="opt">(optionnel)</span></label>
                      <input v-model="tuteur.email" type="email" class="field-input" placeholder="Email">
                    </div>
                    <div class="field">
                      <label class="field-label">Téléphone <span class="req">*</span></label>
                      <div class="w-full">
                        <input :ref="el => { if(el) tuteurPhoneEls[index] = el }" type="tel" required class="field-input">
                      </div>
                    </div>
                    <div class="field field--full">
                      <label class="field-label">Adresse / Quartier <span class="req">*</span></label>
                      <input v-model="tuteur.adresse" type="text" required class="field-input" placeholder="Adresse / Quartier de résidence">
                    </div>
                    <div class="field field--full">
                      <label class="check-label">
                        <input v-model="tuteur.responsable_des_frais" type="checkbox" class="check-box">
                        <span>Responsable des frais de scolarité</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button type="button" @click="addTuteur" class="add-tuteur-btn">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Ajouter un autre tuteur / parent
              </button>

              <div class="consent-row">
                <input v-model="acceptCgu" type="checkbox" id="accept_cgu" class="check-box">
                <label for="accept_cgu" style="text-transform:none;font-weight:500;letter-spacing:normal;color:#6b7280;cursor:pointer;">
                  J'ai lu et j'accepte les
                  <NuxtLink to="/conditions-generales" target="_blank" class="consent-link">conditions générales d'utilisation</NuxtLink>
                  <span class="req ml-1">*</span>
                </label>
              </div>

              <div class="step-actions">
                <button type="button" @click="prevStep" class="btn-ghost">← Retour</button>
                <button type="submit" class="btn-primary btn-submit" :disabled="isSubmitting">
                  <svg v-if="isSubmitting" class="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  {{ isSubmitting ? 'Traitement...' : 'Soumettre ma candidature' }}
                </button>
              </div>
            </form>

          </div>
          </Transition>

        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
definePageMeta({ layout: false })

import { ref, reactive, computed, onMounted, watch, nextTick } from 'vue'
import swal from 'sweetalert'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { useNuxtApp } from '#app'
import { useNiveauStore } from '~/stores/niveau'
import { useFiliereStore } from '~/stores/filiere'
import { useCandidatureStore } from '~/stores/candidature'

const { $intlTelInput } = useNuxtApp()
const niveauStore = useNiveauStore()
const filiereStore = useFiliereStore()
const candidatureStore = useCandidatureStore()

// Phone inputs — step 1
const phoneInput  = ref(null)
const phone2Input = ref(null)
const phone3Input = ref(null)
let itiTel  = null
let itiTel2 = null
let itiTel3 = null

// Tuteur phone inputs — step 3 (dynamic array of DOM elements and ITI instances)
const tuteurPhoneEls = ref([])
let itiTelTuteurs = []

// ── Panel labels ──────────────────────────────────────────────────────────────
const etapes = ['Identité', 'Coordonnées', 'Documents', 'Tuteur(s)']

const panelTitles = [
  'Identité',
  'Coordonnées',
  'Vos pièces à fournir',
  'Parent(s) ou tuteur(s)',
]
const panelSubs = [
  'Renseignez vos informations personnelles et votre parcours académique.',
  'Vos coordonnées permettront à notre équipe de vous contacter.',
  'Sélectionnez votre niveau et filière pour voir les pièces à joindre à votre dossier.',
  'Renseignez au moins un parent ou tuteur légal. Vous pouvez en ajouter plusieurs si nécessaire.',
]

// ── Nationalité dropdown ──────────────────────────────────────────────────────
const nationalitesList = [
  { label: "Afghane", value: "Afghane", code: "af" },
  { label: "Sud-africaine", value: "Sud-africaine", code: "za" },
  { label: "Albanaise", value: "Albanaise", code: "al" },
  { label: "Algérienne", value: "Algérienne", code: "dz" },
  { label: "Allemande", value: "Allemande", code: "de" },
  { label: "Américaine", value: "Américaine", code: "us" },
  { label: "Angolaise", value: "Angolaise", code: "ao" },
  { label: "Argentine", value: "Argentine", code: "ar" },
  { label: "Arménienne", value: "Arménienne", code: "am" },
  { label: "Australienne", value: "Australienne", code: "au" },
  { label: "Autrichienne", value: "Autrichienne", code: "at" },
  { label: "Azerbaïdjanaise", value: "Azerbaïdjanaise", code: "az" },
  { label: "Bangladaise", value: "Bangladaise", code: "bd" },
  { label: "Belge", value: "Belge", code: "be" },
  { label: "Béninoise", value: "Béninoise", code: "bj" },
  { label: "Biélorusse", value: "Biélorusse", code: "by" },
  { label: "Bolivienne", value: "Bolivienne", code: "bo" },
  { label: "Brésilienne", value: "Brésilienne", code: "br" },
  { label: "Britannique", value: "Britannique", code: "gb" },
  { label: "Bulgare", value: "Bulgare", code: "bg" },
  { label: "Burkinabée", value: "Burkinabée", code: "bf" },
  { label: "Burundaise", value: "Burundaise", code: "bi" },
  { label: "Camerounaise", value: "Camerounaise", code: "cm" },
  { label: "Canadienne", value: "Canadienne", code: "ca" },
  { label: "Cap-Verdienne", value: "Cap-Verdienne", code: "cv" },
  { label: "Centrafricaine", value: "Centrafricaine", code: "cf" },
  { label: "Chilienne", value: "Chilienne", code: "cl" },
  { label: "Chinoise", value: "Chinoise", code: "cn" },
  { label: "Colombienne", value: "Colombienne", code: "co" },
  { label: "Comorienne", value: "Comorienne", code: "km" },
  { label: "Congolaise (RDC)", value: "Congolaise (RDC)", code: "cd" },
  { label: "Congolaise (Rép)", value: "Congolaise (Rép)", code: "cg" },
  { label: "Costaricaine", value: "Costaricaine", code: "cr" },
  { label: "Croate", value: "Croate", code: "hr" },
  { label: "Cubaine", value: "Cubaine", code: "cu" },
  { label: "Danoise", value: "Danoise", code: "dk" },
  { label: "Djiboutienne", value: "Djiboutienne", code: "dj" },
  { label: "Dominicaine", value: "Dominicaine", code: "do" },
  { label: "Égyptienne", value: "Égyptienne", code: "eg" },
  { label: "Émirienne", value: "Émirienne", code: "ae" },
  { label: "Espagnole", value: "Espagnole", code: "es" },
  { label: "Éthiopienne", value: "Éthiopienne", code: "et" },
  { label: "Finlandaise", value: "Finlandaise", code: "fi" },
  { label: "Française", value: "Française", code: "fr" },
  { label: "Gabonaise", value: "Gabonaise", code: "ga" },
  { label: "Gambienne", value: "Gambienne", code: "gm" },
  { label: "Géorgienne", value: "Géorgienne", code: "ge" },
  { label: "Ghanéenne", value: "Ghanéenne", code: "gh" },
  { label: "Grecque", value: "Grecque", code: "gr" },
  { label: "Guinéenne", value: "Guinéenne", code: "gn" },
  { label: "Équato-guinéenne", value: "Équato-guinéenne", code: "gq" },
  { label: "Bissau-guinéenne", value: "Bissau-guinéenne", code: "gw" },
  { label: "Haïtienne", value: "Haïtienne", code: "ht" },
  { label: "Hongroise", value: "Hongroise", code: "hu" },
  { label: "Indienne", value: "Indienne", code: "in" },
  { label: "Indonésienne", value: "Indonésienne", code: "id" },
  { label: "Irakienne", value: "Irakienne", code: "iq" },
  { label: "Iranienne", value: "Iranienne", code: "ir" },
  { label: "Irlandaise", value: "Irlandaise", code: "ie" },
  { label: "Israélienne", value: "Israélienne", code: "il" },
  { label: "Italienne", value: "Italienne", code: "it" },
  { label: "Ivoirienne", value: "Ivoirienne", code: "ci" },
  { label: "Jamaïcaine", value: "Jamaïcaine", code: "jm" },
  { label: "Japonaise", value: "Japonaise", code: "jp" },
  { label: "Jordanienne", value: "Jordanienne", code: "jo" },
  { label: "Kényane", value: "Kényane", code: "ke" },
  { label: "Koweïtienne", value: "Koweïtienne", code: "kw" },
  { label: "Libanaise", value: "Libanaise", code: "lb" },
  { label: "Libérienne", value: "Libérienne", code: "lr" },
  { label: "Libyenne", value: "Libyenne", code: "ly" },
  { label: "Malgache", value: "Malgache", code: "mg" },
  { label: "Malaisienne", value: "Malaisienne", code: "my" },
  { label: "Malienne", value: "Malienne", code: "ml" },
  { label: "Marocaine", value: "Marocaine", code: "ma" },
  { label: "Mauricienne", value: "Mauricienne", code: "mu" },
  { label: "Mauritanienne", value: "Mauritanienne", code: "mr" },
  { label: "Mexicaine", value: "Mexicaine", code: "mx" },
  { label: "Monégasque", value: "Monégasque", code: "mc" },
  { label: "Mozambicaine", value: "Mozambicaine", code: "mz" },
  { label: "Namibienne", value: "Namibienne", code: "na" },
  { label: "Nigérienne", value: "Nigérienne", code: "ne" },
  { label: "Nigériane", value: "Nigériane", code: "ng" },
  { label: "Norvégienne", value: "Norvégienne", code: "no" },
  { label: "Ougandaise", value: "Ougandaise", code: "ug" },
  { label: "Pakistanaise", value: "Pakistanaise", code: "pk" },
  { label: "Panaméenne", value: "Panaméenne", code: "pa" },
  { label: "Néerlandaise", value: "Néerlandaise", code: "nl" },
  { label: "Péruvienne", value: "Péruvienne", code: "pe" },
  { label: "Philippine", value: "Philippine", code: "ph" },
  { label: "Polonaise", value: "Polonaise", code: "pl" },
  { label: "Portugaise", value: "Portugaise", code: "pt" },
  { label: "Qatarienne", value: "Qatarienne", code: "qa" },
  { label: "Roumaine", value: "Roumaine", code: "ro" },
  { label: "Russe", value: "Russe", code: "ru" },
  { label: "Rwandaise", value: "Rwandaise", code: "rw" },
  { label: "Saoudienne", value: "Saoudienne", code: "sa" },
  { label: "Sénégalaise", value: "Sénégalaise", code: "sn" },
  { label: "Serbe", value: "Serbe", code: "rs" },
  { label: "Somalienne", value: "Somalienne", code: "so" },
  { label: "Soudanaise", value: "Soudanaise", code: "sd" },
  { label: "Suédoise", value: "Suédoise", code: "se" },
  { label: "Suisse", value: "Suisse", code: "ch" },
  { label: "Syrienne", value: "Syrienne", code: "sy" },
  { label: "Tanzanienne", value: "Tanzanienne", code: "tz" },
  { label: "Tchadienne", value: "Tchadienne", code: "td" },
  { label: "Tchèque", value: "Tchèque", code: "cz" },
  { label: "Thaïlandaise", value: "Thaïlandaise", code: "th" },
  { label: "Togolaise", value: "Togolaise", code: "tg" },
  { label: "Tunisienne", value: "Tunisienne", code: "tn" },
  { label: "Turque", value: "Turque", code: "tr" },
  { label: "Ukrainienne", value: "Ukrainienne", code: "ua" },
  { label: "Uruguayenne", value: "Uruguayenne", code: "uy" },
  { label: "Vénézuélienne", value: "Vénézuélienne", code: "ve" },
  { label: "Vietnamienne", value: "Vietnamienne", code: "vn" },
  { label: "Zambienne", value: "Zambienne", code: "zm" },
  { label: "Zimbabwéenne", value: "Zimbabwéenne", code: "zw" },
]

const searchNat = ref('')
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)
const filteredNationalites = computed(() => {
  if (!searchNat.value) return nationalitesList
  const q = searchNat.value.toLowerCase()
  return nationalitesList.filter(n => n.label.toLowerCase().includes(q))
})
const selectNat = (val) => { formData.nationalite = val; isDropdownOpen.value = false; searchNat.value = '' }

// ── Form state ────────────────────────────────────────────────────────────────
const niveaux = ref([])
const filieres = ref([])
const loadingFilieres = ref(false)
const isSubmitting = ref(false)
const acceptCgu = ref(false)
const etapeActive = ref(0)
const today = new Date()
const maxDateString = `${today.getFullYear() - 15}-12-31`
const minDateString = `${today.getFullYear() - 60}-01-01`

const formData = reactive({
  nom: '', prenom: '', nom_jeune_fille: '', genre: '', date_naissance: '', lieu_naissance: '', nationalite: '',
  numero_table: '', annee_bac: '', serie: '', mention_bac: '', type_diplome: '',
  email: '', tel: '', tel2: '', tel3: '',
  niveau_id: '', filiere_id: '',
})

// Tuteurs — dynamic array
const tuteurs = ref([{ nom: '', prenom: '', profession: '', employeur: '', email: '', tel: '', adresse: '', responsable_des_frais: false }])

// ── Files ─────────────────────────────────────────────────────────────────────
const files = ref({})
const fileInputs = ref([])

const isFileSelected = (key) => { const f = files.value[key]; return Array.isArray(f) ? f.length > 0 : !!f }
const getFileName = (key) => {
  const f = files.value[key]
  if (Array.isArray(f)) { if (!f.length) return ''; return f.length === 1 ? f[0].name : `${f.length} fichiers` }
  return f ? f.name : ''
}

const MAX_FILE_SIZE = 5 * 1024 * 1024

const handleFile = (key, event, multiple) => {
  const label = fileInputs.value.find(f => f.key === key)?.label || key
  if (multiple) {
    const selected = Array.from(event.target.files)
    const big = selected.find(f => f.size > MAX_FILE_SIZE)
    if (big) { toastr.error(`"${big.name}" est trop volumineux (max 5 Mo) pour <strong>${label}</strong>.`, 'Fichier trop lourd', { escapeHtml: false }); event.target.value = ''; return }
    files.value[key] = selected
  } else {
    const file = event.target.files[0]
    if (!file) return
    if (file.size > MAX_FILE_SIZE) { toastr.error(`"${file.name}" est trop volumineux (max 5 Mo) pour <strong>${label}</strong>.`, 'Fichier trop lourd', { escapeHtml: false }); event.target.value = ''; return }
    files.value[key] = file
  }
}

const defaultDocs = [
  { key: 'photo_identite_file', label: "Photo d'identité", multiple: false, is_obligatoire: true, accepted_formats: 'image' },
  { key: 'nationalite_file', label: "Pièce d'identité", multiple: false, is_obligatoire: true, accepted_formats: 'all' },
  { key: 'naissance_file', label: 'Acte de naissance', multiple: false, is_obligatoire: true, accepted_formats: 'all' },
  { key: 'diplome_file', label: 'Dernier Diplôme', multiple: false, is_obligatoire: true, accepted_formats: 'all' },
  { key: 'certificat_medical_file', label: 'Certificat médical', multiple: false, is_obligatoire: false, accepted_formats: 'all' },
  { key: 'cv_file', label: 'Curriculum Vitae', multiple: false, is_obligatoire: false, accepted_formats: 'pdf' },
  { key: 'releve_bac1', label: 'Relevés Année 1', multiple: true, is_obligatoire: false, accepted_formats: 'all' },
  { key: 'releve_bac2', label: 'Relevés Année 2', multiple: true, is_obligatoire: false, accepted_formats: 'all' },
]

const fetchDynamicDocuments = async () => {
  if (!formData.niveau_id) return
  try {
    const { $axios } = useNuxtApp()
    let url = `/public/niveau/${formData.niveau_id}/document-requirements`
    if (formData.filiere_id) url += `?filiere_id=${formData.filiere_id}`
    const res = await $axios.get(url)
    const reqs = res.data || []
    fileInputs.value = reqs.length > 0
      ? reqs.map(r => ({ key: r.document_key, label: r.nom_affichage, multiple: r.is_multiple == 1 || r.is_multiple === true, is_obligatoire: r.is_obligatoire == 1 || r.is_obligatoire === true, accepted_formats: r.accepted_formats || 'all' }))
      : defaultDocs
  } catch(e) {
    console.error('Erreur chargement documents', e)
    fileInputs.value = defaultDocs
  }
}

// ── intl-tel-input helper ─────────────────────────────────────────────────────
let countryCodePromise = null
const getCountryCode = () => {
  if (!countryCodePromise) {
    countryCodePromise = fetch('https://api.country.is/').then(r => r.json()).then(d => d.country ? d.country.toLowerCase() : 'tg').catch(() => 'tg')
  }
  return countryCodePromise
}

const initIti = (inputRef) => {
  if (!inputRef || !$intlTelInput) return null
  return $intlTelInput(inputRef, {
    initialCountry: 'auto',
    geoIpLookup: cb => getCountryCode().then(c => cb(c)),
    separateDialCode: true,
    useFullscreenPopup: false,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.15.0/build/js/utils.js',
  })
}

const getItiNumber = (iti, inputEl) => {
  if (!iti) return ''
  const num = iti.getNumber()
  if (num) return num
  const cd = iti.getSelectedCountryData()
  return (cd ? '+' + cd.dialCode : '') + (inputEl?.value || '')
}

// ── Init/destroy ITI once the step's enter transition has actually completed ──
// (avec mode="out-in", le nouveau contenu n'est monté dans le DOM qu'après la fin
// de la transition de sortie précédente : un simple nextTick() est trop tôt.)
const initPhoneWidgetsForStep = () => {
  if (etapeActive.value === 1) {
    if (itiTel) itiTel.destroy()
    if (itiTel2) itiTel2.destroy()
    if (itiTel3) itiTel3.destroy()
    itiTel  = initIti(phoneInput.value)
    itiTel2 = initIti(phone2Input.value)
    itiTel3 = initIti(phone3Input.value)
    if (itiTel  && formData.tel)  itiTel.setNumber(formData.tel)
    if (itiTel2 && formData.tel2) itiTel2.setNumber(formData.tel2)
    if (itiTel3 && formData.tel3) itiTel3.setNumber(formData.tel3)
  }

  if (etapeActive.value === 3) {
    tuteurPhoneEls.value.forEach((el, i) => {
      if (itiTelTuteurs[i]) itiTelTuteurs[i].destroy()
      itiTelTuteurs[i] = initIti(el)
      if (itiTelTuteurs[i] && tuteurs.value[i]?.tel) itiTelTuteurs[i].setNumber(tuteurs.value[i].tel)
    })
  }
}

// ── Tuteur management ─────────────────────────────────────────────────────────
const addTuteur = async () => {
  tuteurs.value.push({ nom: '', prenom: '', profession: '', employeur: '', email: '', tel: '', adresse: '', responsable_des_frais: false })
  await nextTick()
  const idx = tuteurs.value.length - 1
  const el = tuteurPhoneEls.value[idx]
  if (el) {
    if (itiTelTuteurs[idx]) itiTelTuteurs[idx].destroy()
    itiTelTuteurs[idx] = initIti(el)
  }
}

const removeTuteur = (index) => {
  if (itiTelTuteurs[index]) { itiTelTuteurs[index].destroy(); itiTelTuteurs.splice(index, 1) }
  tuteurs.value.splice(index, 1)
  tuteurPhoneEls.value.splice(index, 1)
}

// ── Niveau / filière ──────────────────────────────────────────────────────────
const updateFilieres = async () => {
  formData.filiere_id = ''
  filieres.value = []
  fileInputs.value = []
  if (formData.niveau_id) {
    loadingFilieres.value = true
    filieres.value = await filiereStore.fetchFilieresByNiveau(formData.niveau_id)
    loadingFilieres.value = false
    fetchDynamicDocuments()
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
const savePhoneFields = () => {
  if (etapeActive.value === 1) {
    formData.tel  = getItiNumber(itiTel,  phoneInput.value)
    formData.tel2 = getItiNumber(itiTel2, phone2Input.value)
    formData.tel3 = getItiNumber(itiTel3, phone3Input.value)
  }
  if (etapeActive.value === 3) {
    tuteurs.value.forEach((t, i) => {
      t.tel = getItiNumber(itiTelTuteurs[i], tuteurPhoneEls.value[i])
    })
  }
}

const nextStep = () => {
  savePhoneFields()

  if (etapeActive.value === 0) {
    if (!formData.genre)      { toastr.error('Veuillez sélectionner un sexe.'); return }
    if (!formData.nationalite){ toastr.error('Veuillez sélectionner une nationalité.'); return }
  }

  if (etapeActive.value === 2) {
    if (!formData.niveau_id)  { toastr.error('Veuillez sélectionner un niveau.'); return }
    if (!formData.filiere_id) { toastr.error('Veuillez sélectionner une filière.'); return }
    const missingRequired = fileInputs.value.filter(doc => doc.is_obligatoire && !isFileSelected(doc.key))
    if (missingRequired.length > 0) {
      toastr.error(`Documents obligatoires manquants : <strong>${missingRequired.map(d => d.label).join(', ')}</strong>`, 'Documents manquants', { escapeHtml: false })
      return
    }
  }

  if (etapeActive.value < etapes.length - 1) {
    etapeActive.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  savePhoneFields()
  if (etapeActive.value > 0) { etapeActive.value--; window.scrollTo({ top: 0, behavior: 'smooth' }) }
}

// ── Submit ────────────────────────────────────────────────────────────────────
const soumettreFormulaire = async () => {
  savePhoneFields()

  if (!acceptCgu.value) { toastr.error("Vous devez accepter les conditions générales d'utilisation."); return }

  const isConfirmed = await swal({
    title: 'Confirmer la soumission',
    text: 'Voulez-vous vraiment soumettre votre candidature ? Vérifiez que toutes les informations sont correctes.',
    icon: 'warning',
    buttons: ['Annuler', 'Oui, soumettre'],
  })
  if (!isConfirmed) return

  isSubmitting.value = true
  try {
    const data = new FormData()
    Object.entries(formData).forEach(([k, v]) => { if (v) data.append(k, v) })
    data.append('accept_cgu', '1')
    tuteurs.value.forEach((tuteur, i) => {
      Object.entries(tuteur).forEach(([k, v]) => {
        if (k === 'responsable_des_frais') data.append(`tuteurs[${i}][${k}]`, v ? '1' : '0')
        else if (v) data.append(`tuteurs[${i}][${k}]`, v)
      })
    })
    fileInputs.value.forEach(doc => {
      if (doc.multiple) {
        if (files.value[doc.key]?.length) files.value[doc.key].forEach((f, j) => data.append(`${doc.key}[${j}]`, f))
      } else {
        if (files.value[doc.key]) data.append(doc.key, files.value[doc.key])
      }
    })
    await candidatureStore.soumettreCandidature(data)
    toastr.success('Votre dossier a été envoyé avec succès.', 'Félicitations !')
    etapeActive.value = 0
    Object.keys(formData).forEach(k => formData[k] = '')
    tuteurs.value = [{ nom: '', prenom: '', profession: '', employeur: '', email: '', tel: '', adresse: '', responsable_des_frais: false }]
    files.value = {}
    acceptCgu.value = false
  } catch(e) {
    console.error(e)
    let msg = "Une erreur est survenue lors de l'envoi."
    if (e.response?.data?.errors) msg = Object.values(e.response.data.errors).flat().join('\n')
    else if (e.response?.data?.message) msg = e.response.data.message
    toastr.error(msg, 'Erreur de soumission')
  } finally {
    isSubmitting.value = false
  }
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(async () => {
  niveaux.value = await niveauStore.fetchNiveaux()
  getCountryCode().then(code => {
    if (!formData.nationalite) {
      const nat = nationalitesList.find(n => n.code === code)
      formData.nationalite = nat ? nat.value : 'Togolaise'
    }
  })
  document.addEventListener('click', (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) isDropdownOpen.value = false
  })
})
</script>

<style scoped>
@reference "tailwindcss";

/* ═══════════════════════════════════════════════════════════════
   LAYOUT
═══════════════════════════════════════════════════════════════ */
.page-root  { @apply h-screen flex overflow-hidden; font-family: 'Inter', system-ui, sans-serif; }

/* ═══════════════════════════════════════════════════════════════
   PANNEAU GAUCHE
═══════════════════════════════════════════════════════════════ */
.left-panel  { @apply hidden lg:flex lg:w-5/12 relative overflow-hidden flex-col; }
.left-bg     { @apply absolute inset-0 w-full h-full object-cover object-center; }
.left-overlay{ @apply absolute inset-0; background: linear-gradient(160deg, rgba(13,24,40,0.92) 0%, rgba(13,24,40,0.85) 100%); }
.left-body   { @apply relative z-10 flex flex-col h-full p-12 text-white; }
.left-logo   { @apply h-24 w-auto object-contain object-left -ml-4 -mt-4 opacity-90; }
.left-text   { @apply mt-10 mb-8; }
.left-kicker {
  @apply text-xs font-bold uppercase tracking-[0.2em] mb-4;
  color: #C9A84C;
}
.left-heading {
  @apply text-4xl xl:text-5xl font-bold leading-tight mb-5 text-white;
}
.left-heading-gold {
  @apply not-italic block mt-1;
  color: #C9A84C;
  font-style: italic !important;
}
.left-desc   { @apply text-[15px] leading-relaxed max-w-xs; color: rgba(255,255,255,0.7); }
.left-note   {
  @apply flex items-start gap-3 p-4 rounded-xl text-sm leading-relaxed mt-auto;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.75);
}
.left-note strong { color: white; }
.left-note-icon {
  @apply flex-shrink-0 mt-0.5;
  width: 18px; height: 18px;
  color: #C9A84C;
}
.left-note-icon svg { width: 100%; height: 100%; }

/* ═══════════════════════════════════════════════════════════════
   PANNEAU DROIT
═══════════════════════════════════════════════════════════════ */
.right-panel {
  @apply flex-1 flex flex-col overflow-y-auto overflow-x-hidden;
  background: #F2F1EE;
}

/* Barre du haut */
.topbar {
  @apply flex-shrink-0 flex items-center justify-between px-6 py-4 lg:px-10 lg:py-5 sticky top-0 z-40;
  background: rgba(242, 241, 238, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.mobile-logo { @apply h-16 w-auto object-contain; }
.back-link   { @apply flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors; }

/* ─── Indicateur d'étapes ─────────────────────────────────── */
.step-nav   {
  @apply flex-shrink-0 px-6 py-7 lg:px-10;
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}
.step-track {
  @apply relative flex items-start justify-between mx-auto;
  max-width: 520px;
}
.step-line-bg {
  @apply absolute;
  top: 14px; left: 14px; right: 14px; height: 2px;
  background: #E5E3DF;
}
.step-line-progress {
  @apply absolute transition-all duration-500;
  top: 14px; left: 14px; height: 2px;
  background: #1A2238;
}
.step-item  { @apply relative z-10 flex flex-col items-center gap-2; }
.step-bubble {
  @apply flex items-center justify-center rounded-full font-bold text-sm transition-all duration-300;
  width: 28px; height: 28px;
}
.step-done   { background: #1A2238; color: white; }
.step-active {
  background: #1A2238; color: white;
  box-shadow: 0 0 0 4px rgba(26,34,56,0.12), 0 0 0 8px rgba(26,34,56,0.05);
  width: 34px; height: 34px;
  font-size: 15px;
}
.step-future { background: white; color: #9CA3AF; border: 2px solid #D1CEC9; }
.step-label  {
  @apply text-[10px] font-bold uppercase tracking-widest text-center transition-colors;
  letter-spacing: 0.12em;
}
.step-label-active { color: #1A2238; }
.step-label-done   { color: #6B7280; }
.step-label-future { color: #9CA3AF; }

/* ─── Zone de formulaire ──────────────────────────────────── */
.form-zone {
  @apply flex-1 px-6 py-10 lg:px-10 lg:py-12;
}

/* Carte du formulaire */
.panel-card {
  @apply mx-auto bg-white rounded-2xl w-full;
  max-width: 680px;
  border: 1px solid rgba(0,0,0,0.07);
  box-shadow: 0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}

@media (min-width: 1024px) { .panel-card { max-width: 860px; } }
@media (min-width: 1440px) { .panel-card { max-width: 1040px; } }
@media (min-width: 1800px) { .panel-card { max-width: 1180px; } }

/* En-tête de la carte */
.panel-head {
  @apply px-8 pt-8 pb-6;
  border-bottom: 1px solid #F0EFEC;
}
.panel-kicker {
  @apply text-[10px] font-bold uppercase tracking-[0.18em] mb-2;
  color: #01b4d5;
}
.panel-title { @apply text-2xl font-bold text-[#1A2238] mt-1 mb-2; }
.panel-sub   { @apply text-sm leading-relaxed; color: #6B7280; }

/* Corps du formulaire */
.form-body { @apply px-8 pt-6 pb-8; }

/* ═══════════════════════════════════════════════════════════════
   CHAMPS
═══════════════════════════════════════════════════════════════ */
.iti { width: 100%; }

.field-grid  {
  @apply grid gap-x-5 gap-y-5;
  grid-template-columns: repeat(2, 1fr);
}
.field-grid--1col { grid-template-columns: 1fr; }

.field       { @apply flex flex-col gap-1.5; }
.field--full { grid-column: 1 / -1; }

.field-label {
  @apply text-[11px] font-bold uppercase tracking-[0.12em];
  color: #6B7280;
}
.field-label:has(+ .field-input:focus),
.field:focus-within .field-label { color: #1A2238; }

.field-input {
  @apply w-full outline-none transition-all duration-200;
  height: 46px;
  padding: 0 14px;
  background: #FAFAF8;
  border: 1.5px solid #E2E0DB;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #1A2238;
}
.field-input::placeholder { color: #AFAFAF; font-weight: 400; }
.field-input:hover  { border-color: #C8C5BF; background: white; }
.field-input:focus  {
  border-color: #1A2238;
  background: white;
  box-shadow: 0 0 0 3px rgba(26,34,56,0.08);
}
.field-input:disabled { background: #F4F3F0; color: #AFAFAF; cursor: not-allowed; }
select.field-input { appearance: auto; }
.field-hint  { @apply text-xs mt-0.5; color: #9CA3AF; }

/* ─── Dropdown nationalité ─────────────────────────────────── */
.nat-wrap { @apply relative; }
.nat-btn  {
  @apply flex items-center justify-between text-left cursor-pointer w-full;
}
.nat-selected  { @apply flex items-center gap-2; }
.nat-flag      { @apply w-5 rounded-sm shadow-sm flex-shrink-0; }
.nat-value     { @apply text-sm font-medium text-[#1A2238]; }
.nat-placeholder { @apply text-sm; color: #AFAFAF; font-weight: 400; }
.nat-chevron   { @apply w-4 h-4 transition-transform duration-200; color: #9CA3AF; }
.nat-menu      {
  @apply absolute z-50 w-full mt-1 bg-white rounded-xl overflow-hidden flex flex-col;
  border: 1.5px solid #E2E0DB;
  box-shadow: 0 8px 32px -4px rgba(0,0,0,0.12);
  max-height: 260px;
}
.nat-search-row { @apply p-2; border-bottom: 1px solid #F0EFEC; }
.nat-search     {
  @apply w-full px-3 py-2 text-sm rounded-lg outline-none;
  background: #F8F7F4; border: 1.5px solid #E2E0DB;
}
.nat-search:focus { border-color: #1A2238; }
.nat-options    { @apply overflow-y-auto p-1; }
.nat-empty      { @apply text-sm text-center py-4; color: #9CA3AF; }
.nat-option     { @apply w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#F8F7F4] transition-colors; }
.nat-option--sel { color: #1A2238; background: #F0EFEC; }
.nat-check      { @apply w-4 h-4 ml-auto; color: #1A2238; }

/* ═══════════════════════════════════════════════════════════════
   SÉPARATEUR DE SECTION
═══════════════════════════════════════════════════════════════ */
.section-sep {
  @apply flex items-center gap-4 my-7;
}
.section-sep::before, .section-sep::after {
  content: '';
  @apply flex-1 h-px;
  background: #E8E6E0;
}
.section-sep-label {
  @apply text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap;
  color: #9CA3AF;
}

/* ═══════════════════════════════════════════════════════════════
   DOCUMENTS
═══════════════════════════════════════════════════════════════ */
.docs-recap {
  @apply flex gap-4 p-4 mt-2 rounded-xl;
  background: #F0F9FB;
  border: 1px solid rgba(1,180,213,0.2);
}
.docs-recap-icon {
  @apply flex-shrink-0 rounded-lg w-9 h-9 flex items-center justify-center;
  background: rgba(1,180,213,0.15);
  color: #01b4d5;
}
.docs-recap-icon svg { width: 18px; height: 18px; }
.docs-recap-title { @apply text-sm font-bold text-[#1A2238] mb-1.5; }
.docs-recap-list  { @apply list-disc list-inside space-y-0.5; }
.docs-recap-list li { @apply text-sm; color: #374151; }

.docs-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(2, 1fr);
}

.dropzone {
  @apply relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200;
  border: 2px dashed #D1CEC9;
  background: #FAFAF8;
  min-height: 120px;
}
.dropzone:hover  { border-color: #1A2238; background: white; }
.dropzone--filled { border-style: solid; border-color: #1A2238; background: white; }

.dropzone-input { @apply absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10; }

.dropzone-filled { @apply flex flex-col items-center justify-center text-center p-4 gap-1.5; }
.dropzone-check-ring {
  @apply w-10 h-10 rounded-full flex items-center justify-center;
  background: #ECFDF5; color: #059669;
}
.dropzone-filename { @apply text-xs font-bold text-[#1A2238] truncate max-w-full px-2; }
.dropzone-ready-label { @apply text-[10px] font-bold uppercase tracking-widest; color: #059669; }

.dropzone-empty { @apply flex flex-col items-center justify-center text-center p-4 gap-1.5; }
.dropzone-upload-icon {
  @apply w-9 h-9 rounded-lg flex items-center justify-center;
  background: white;
  border: 1.5px solid #E2E0DB;
  color: #6B7280;
}
.dropzone-upload-icon svg { width: 18px; height: 18px; }
.dropzone-doc-label { @apply text-xs text-gray-700; }
.dropzone-doc-label strong { @apply font-bold; }
.dropzone-doc-hint { @apply text-[10px]; color: #9CA3AF; }

/* ═══════════════════════════════════════════════════════════════
   TUTEURS
═══════════════════════════════════════════════════════════════ */
.tuteurs-list { @apply space-y-5 mb-5; }
.tuteur-card  {
  @apply rounded-xl p-6;
  border: 1.5px solid #E2E0DB;
  background: #FAFAF8;
}
.tuteur-head  { @apply flex items-center justify-between mb-5; }
.tuteur-title { @apply text-sm font-bold text-[#1A2238]; }
.remove-btn   { @apply text-xs font-semibold transition-colors; color: #EF4444; }
.remove-btn:hover { color: #B91C1C; }

.add-tuteur-btn {
  @apply w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 mb-7;
  border: 2px dashed #D1CEC9;
  color: #6B7280;
}
.add-tuteur-btn:hover { border-color: #1A2238; color: #1A2238; background: white; }

.consent-row {
  @apply flex items-start gap-3 p-4 rounded-xl mb-6;
  background: #FAFAF8;
  border: 1.5px solid #E2E0DB;
}
.consent-row label { font-size: 14px; line-height: 1.5; }
.consent-link { @apply font-semibold text-[#1A2238] underline hover:text-[#01b4d5] transition-colors; }

.check-label { @apply flex items-center gap-3 cursor-pointer text-sm font-medium; color: #374151; }
.check-box   {
  @apply rounded flex-shrink-0 transition-colors cursor-pointer;
  width: 16px; height: 16px;
  border: 1.5px solid #D1CEC9;
  accent-color: #1A2238;
}

/* ═══════════════════════════════════════════════════════════════
   BOUTONS & ACTIONS
═══════════════════════════════════════════════════════════════ */
.step-actions { @apply flex items-center justify-between pt-6 mt-4; border-top: 1px solid #F0EFEC; }

.btn-primary {
  @apply inline-flex items-center justify-center gap-2 font-bold transition-all duration-200;
  height: 44px;
  padding: 0 28px;
  background: #1A2238;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  letter-spacing: 0.01em;
}
.btn-primary:hover { background: #111827; box-shadow: 0 4px 16px -4px rgba(26,34,56,0.35); transform: translateY(-1px); }
.btn-primary:active { transform: translateY(0); }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }
.btn-submit   { padding: 0 32px; height: 48px; }

.btn-ghost {
  @apply inline-flex items-center gap-1 font-semibold transition-colors;
  height: 44px;
  padding: 0 16px;
  font-size: 14px;
  color: #6B7280;
  border-radius: 10px;
  border: 1.5px solid #E2E0DB;
}
.btn-ghost:hover { color: #1A2238; border-color: #1A2238; background: white; }

.req { @apply text-red-500; }
.opt { @apply text-[11px] font-normal normal-case tracking-normal; color: #9CA3AF; }

/* ═══════════════════════════════════════════════════════════════
   TRANSITION
═══════════════════════════════════════════════════════════════ */
.slide-step-enter-active { transition: all 0.28s ease; }
.slide-step-leave-active { transition: all 0.2s ease; }
.slide-step-enter-from   { opacity: 0; transform: translateX(18px); }
.slide-step-leave-to     { opacity: 0; transform: translateX(-12px); }

/* Responsive */
@media (max-width: 640px) {
  .field-grid { grid-template-columns: 1fr; }
  .docs-grid  { grid-template-columns: 1fr; }
  .form-body, .panel-head { padding-left: 1.25rem; padding-right: 1.25rem; }
}
</style>

<style>
.swal-modal  { border-radius: 1rem !important; padding: 2rem !important; }
.swal-button { border-radius: 10px !important; font-weight: 700 !important; padding: 0.75rem 2rem !important; }
.swal-button--confirm { background: #1A2238 !important; color: white !important; }
.swal-button--confirm:hover { background: #111827 !important; }
.swal-button--cancel  { background: transparent !important; color: #9ca3af !important; box-shadow: none !important; }
.swal-button--cancel:hover { background: #f3f4f6 !important; color: #374151 !important; }
</style>
