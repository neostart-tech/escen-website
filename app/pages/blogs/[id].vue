<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb :title="article.title" :subtitle="getCategoryName(article.category)"
            :description="article.excerpt" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: article.title }
            ]" :backgroundImage="article.image" overlay />

        <!-- Contenu Principal -->
        <main class="container mx-auto px-4 sm:px-6 py-6 lg:py-10">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Colonne de gauche : Contenu principal -->
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <!-- Image Hero -->
                            <div class="relative h-64 md:h-72 lg:h-80">
                                <img :src="article.image" 
                                     :alt="article.title"
                                     class="w-full h-full object-cover">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                
                                <!-- Badges alignés à droite -->
                                <div class="absolute top-4 right-4 flex flex-col items-end gap-2">
                                    <span v-if="article.featured" 
                                          class="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        En vedette
                                    </span>
                                    <span class="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#01b4d5]">
                                        {{ getCategoryName(article.category) }}
                                    </span>
                                </div>
                            </div>

                            <!-- En-tête -->
                            <div class="p-6 lg:p-8">
                                <!-- Titre principal à gauche -->
                                <div class="mb-6">
                                    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                        {{ article.title }}
                                    </h1>
                                    
                                    <!-- Métadonnées en ligne : Auteur à gauche, date à droite -->
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                        <!-- Auteur à gauche -->
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-full flex items-center justify-center text-white font-bold">
                                                {{ article.author.charAt(0) }}
                                            </div>
                                            <div>
                                                <h4 class="font-semibold text-gray-900">{{ article.author }}</h4>
                                                <p class="text-xs text-gray-500">Expert en {{ getExpertise(article.category) }}</p>
                                            </div>
                                        </div>
                                        
                                        <!-- Informations à droite -->
                                        <div class="flex items-center gap-4 text-sm text-gray-600">
                                            <div class="flex items-center gap-1">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <span>{{ article.readTime }}</span>
                                            </div>
                                            <div class="flex items-center gap-1">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                                <span>{{ article.date }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Tags à gauche -->
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="tag in article.tags" 
                                              :key="tag"
                                              class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                                            {{ tag }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Bouton de partage aligné à droite -->
                                <div class="flex justify-end mb-6">
                                    <button @click="openShareMenu = !openShareMenu"
                                            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                                        </svg>
                                        Partager cet article
                                    </button>

                                    <!-- Menu de partage (popup) aligné à droite -->
                                    <div v-if="openShareMenu" 
                                         class="absolute mt-2 right-6 lg:right-8 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50">
                                        <div class="flex gap-2">
                                            <button @click="shareOnFacebook"
                                                    class="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                            </button>
                                            <button @click="shareOnTwitter"
                                                    class="p-2 bg-blue-50 text-blue-400 rounded-lg hover:bg-blue-100 transition-colors">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                </svg>
                                            </button>
                                            <button @click="shareOnLinkedIn"
                                                    class="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </button>
                                            <button @click="copyLink"
                                                    class="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contenu de l'article -->
                            <div class="p-6 lg:p-8 border-t border-gray-100">
                                <!-- Introduction alignée à gauche -->
                                <div class="prose prose-lg max-w-none mb-8">
                                    <p class="text-gray-700 leading-relaxed">
                                        {{ article.fullContent.introduction }}
                                    </p>
                                </div>

                                <!-- Sections -->
                                <div class="space-y-10">
                                    <div v-for="section in article.fullContent.sections" 
                                         :key="section.id">
                                        <!-- Titre de section aligné à gauche avec ligne -->
                                        <div class="flex items-center gap-4 mb-6">
                                            <div class="w-1 h-12 bg-gradient-to-b from-[#01b4d5] to-[#0056b3] rounded-full flex-shrink-0"></div>
                                            <h2 class="text-xl lg:text-2xl font-bold text-gray-900">
                                                {{ section.title }}
                                            </h2>
                                        </div>
                                        
                                        <!-- Paragraphes alignés à gauche -->
                                        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed ml-5">
                                            <div class="space-y-4">
                                                <p v-for="(paragraph, pIndex) in section.paragraphs" 
                                                   :key="pIndex"
                                                   class="text-gray-700">
                                                    {{ paragraph }}
                                                </p>
                                            </div>
                                            
                                            <!-- Points clés alignés à droite avec fond -->
                                            <div v-if="section.keyPoints" 
                                                 class="my-8 ml-0 lg:ml-8 p-6 bg-blue-50 border-l-4 border-[#01b4d5] rounded-r-lg">
                                                <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                    <svg class="w-5 h-5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                                    </svg>
                                                    Points clés
                                                </h3>
                                                <ul class="space-y-2">
                                                    <li v-for="(point, pointIndex) in section.keyPoints" 
                                                        :key="pointIndex" 
                                                        class="flex items-start gap-2 text-sm">
                                                        <svg class="w-4 h-4 text-[#01b4d5] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                                        </svg>
                                                        <span class="flex-1">{{ point }}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Citation centrée -->
                                <div v-if="article.fullContent.quote" 
                                     class="my-12 p-8 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-2xl text-white text-center">
                                    <svg class="w-10 h-10 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                    <p class="text-xl italic mb-2">
                                        "{{ article.fullContent.quote.text }}"
                                    </p>
                                    <p class="font-semibold">— {{ article.fullContent.quote.author }}</p>
                                </div>

                                <!-- Conclusion avec ligne à gauche -->
                                <div class="mt-12 pt-8 border-t border-gray-200">
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="w-1 h-12 bg-gradient-to-b from-[#01b4d5] to-[#0056b3] rounded-full flex-shrink-0"></div>
                                        <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Conclusion</h3>
                                    </div>
                                    <div class="prose prose-lg max-w-none ml-5">
                                        <p class="text-gray-700 leading-relaxed">
                                            {{ article.fullContent.conclusion }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Auteur détaillé aligné à gauche -->
                            <div class="p-6 lg:p-8 bg-gray-50 border-t border-gray-200">
                                <div class="bg-white p-6 rounded-xl border border-gray-200">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">À propos de l'auteur</h3>
                                    <div class="flex flex-col md:flex-row gap-6 items-start">
                                        <!-- Avatar à gauche -->
                                        <div class="flex-shrink-0">
                                            <div class="w-16 h-16 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                                {{ article.author.charAt(0) }}
                                            </div>
                                        </div>
                                        <!-- Infos à droite -->
                                        <div class="flex-1">
                                            <h4 class="text-lg font-bold text-gray-900 mb-2">{{ article.author }}</h4>
                                            <p class="text-gray-600 mb-3 text-sm">{{ article.authorBio }}</p>
                                            <div class="flex flex-wrap gap-2">
                                                <span v-for="expertise in article.authorExpertise" 
                                                      :key="expertise"
                                                      class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                    {{ expertise }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Section commentaires dans la colonne de gauche -->
                        <div class="mt-8">
                            <div class="bg-white rounded-2xl shadow-md p-6 lg:p-8">
                                <!-- En-tête commentaires aligné à gauche -->
                                <div class="mb-8">
                                    <h2 class="text-xl font-bold text-gray-900 mb-2">Commentaires ({{ article.comments.length }})</h2>
                                    <p class="text-gray-600 text-sm">Partagez vos pensées et rejoignez la discussion</p>
                                </div>

                                <!-- Formulaire pour ajouter un commentaire -->
                                <div class="mb-8 p-6 bg-gray-50 rounded-xl">
                                    <h3 class="font-semibold text-gray-900 mb-4">Laisser un commentaire</h3>
                                    
                                    <form @submit.prevent="submitComment" class="space-y-4">
                                        <!-- Nom et Email côte à côte -->
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                                                <input v-model="newComment.name"
                                                       type="text"
                                                       required
                                                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent"
                                                       placeholder="Votre nom">
                                            </div>
                                            <div>
                                                <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                                <input v-model="newComment.email"
                                                       type="email"
                                                       required
                                                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent"
                                                       placeholder="votre@email.com">
                                            </div>
                                        </div>
                                        
                                        <!-- Commentaire en dessous -->
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Commentaire *</label>
                                            <textarea v-model="newComment.content"
                                                      required
                                                      rows="4"
                                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent resize-none"
                                                      placeholder="Partagez vos pensées..."></textarea>
                                        </div>
                                        
                                        <!-- Checkbox à gauche, bouton à droite -->
                                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div class="flex items-center">
                                                <input v-model="newComment.saveInfo"
                                                       type="checkbox"
                                                       id="save-info"
                                                       class="w-4 h-4 text-[#01b4d5] border-gray-300 rounded focus:ring-[#01b4d5]">
                                                <label for="save-info" class="ml-2 text-sm text-gray-600">
                                                    Sauvegarder mes informations
                                                </label>
                                            </div>
                                            <button type="submit"
                                                    :disabled="submittingComment"
                                                    class="px-6 py-2 bg-[#01b4d5] text-white font-semibold rounded-lg hover:bg-[#0199b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed md:w-auto w-full">
                                                <span v-if="submittingComment">Envoi en cours...</span>
                                                <span v-else>Publier le commentaire</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <!-- Liste des commentaires -->
                                <div class="space-y-6">
                                    <div v-for="comment in article.comments" 
                                         :key="comment.id" 
                                         class="bg-gray-50 rounded-xl p-5">
                                        <!-- En-tête du commentaire : Avatar à gauche, infos à droite -->
                                        <div class="flex items-start justify-between mb-4">
                                            <div class="flex items-center gap-3">
                                                <div class="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                                                    {{ comment.author.charAt(0) }}
                                                </div>
                                                <div>
                                                    <h4 class="font-semibold text-gray-900">{{ comment.author }}</h4>
                                                    <p class="text-sm text-gray-500">{{ comment.date }}</p>
                                                </div>
                                            </div>
                                            <!-- Boutons d'action à droite -->
                                            <div class="flex items-center gap-2">
                                                <button @click="likeComment(comment.id)"
                                                        class="flex items-center gap-1 text-sm text-gray-600 hover:text-[#01b4d5] px-2 py-1 rounded hover:bg-gray-100">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                                                    </svg>
                                                    <span>J'aime</span>
                                                </button>
                                                <button @click="replyToComment(comment.id)"
                                                        class="flex items-center gap-1 text-sm text-gray-600 hover:text-[#01b4d5] px-2 py-1 rounded hover:bg-gray-100">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                                                    </svg>
                                                    <span>Répondre</span>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- Contenu du commentaire aligné à gauche -->
                                        <p class="text-gray-700 ml-13">{{ comment.content }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Colonne de droite : Articles similaires et autres infos -->
                    <div class="lg:col-span-1">
                        <div class="sticky top-24 space-y-6">
                            <!-- Articles similaires -->
                            <div class="bg-white rounded-xl shadow-md p-6">
                                <h3 class="text-lg font-bold text-gray-900 mb-4">Articles similaires</h3>
                                <div class="space-y-4">
                                    <article v-for="related in relatedArticles" 
                                             :key="related.id"
                                             @click="goToArticle(related.id)"
                                             class="group cursor-pointer">
                                        <!-- Image à gauche, contenu à droite -->
                                        <div class="flex gap-3">
                                            <div class="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                                                <img :src="related.image" 
                                                     :alt="related.title"
                                                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <h4 class="font-semibold text-gray-900 text-sm group-hover:text-[#01b4d5] transition-colors line-clamp-2 mb-1">
                                                    {{ related.title }}
                                                </h4>
                                                <div class="flex items-center text-xs text-gray-500">
                                                    <span>{{ related.date }}</span>
                                                    <span class="mx-1">•</span>
                                                    <span>{{ related.readTime }}</span>
                                                </div>
                                                <span class="inline-block mt-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                    {{ getCategoryName(related.category) }}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <!-- Catégories populaires -->
                            

                            <!-- Newsletter -->
                            <div class="bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl shadow-md p-6 text-white">
                                <h3 class="text-lg font-bold mb-2">Restez informé</h3>
                                <p class="text-sm opacity-90 mb-4">Recevez nos derniers articles directement dans votre boîte mail</p>
                                <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                                    <input v-model="newsletterEmail"
                                           type="email"
                                           required
                                           placeholder="Votre email"
                                           class="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <button type="submit"
                                            class="w-full px-4 py-2 bg-white text-[#01b4d5] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                        S'abonner
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// État pour le menu de partage
const openShareMenu = ref(false)

// État pour le formulaire de commentaire
const newComment = ref({
    name: '',
    email: '',
    content: '',
    saveInfo: false
})
const submittingComment = ref(false)

// Newsletter
const newsletterEmail = ref('')

// Catégories
const categories = ref([
    { id: 'digital', name: 'Transformation Digital', count: 12 },
    { id: 'innovation', name: 'Innovation', count: 8 },
    { id: 'education', name: 'Éducation', count: 15 },
    { id: 'career', name: 'Carrière', count: 10 },
    { id: 'event', name: 'Événements', count: 5 }
])

// Article principal
const article = ref({
    id: 1,
    title: "Rencontre avec le Ministre de l'Enseignement Supérieur et de la Recherche",
    excerpt: "La délégation d'ESCEN reçue par le Ministre Kanka-Malik Natchaba pour discuter de l'avenir de l'enseignement supérieur numérique.",
    category: "event",
    author: "Dr. Sophie Martin",
    authorBio: "Directrice de la Recherche et de l'Innovation à ESCEN, experte en transformation digitale de l'éducation",
    authorExpertise: ["Éducation numérique", "Innovation pédagogique", "Politique éducative"],
    date: "15 Nov 2024",
    readTime: "5 min",
    wordCount: 1200,
    featured: true,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Éducation", "Politique", "Rencontre officielle", "ESCEN"],
    fullContent: {
        introduction: "La délégation d'ESCEN, conduite par le Directeur Général Adjoint Jean-Rene Gangnito, a eu l'immense privilège d'être reçue par le Ministre de l'Enseignement Supérieur et de la Recherche, Kanka-Malik Natchaba. Cette rencontre historique marque un tournant majeur dans la reconnaissance de l'enseignement supérieur numérique au Togo.",
        sections: [
            {
                id: 1,
                title: "Le contexte de la rencontre",
                paragraphs: [
                    "Dans un contexte de transformation digitale accélérée, l'ESCEN s'est positionnée comme un acteur majeur de l'enseignement supérieur numérique en Afrique francophone. La rencontre avec le Ministre Natchaba s'inscrit dans une volonté partagée de moderniser l'écosystème éducatif togolais.",
                    "Le Ministre a particulièrement salué l'approche innovante d'ESCEN, combinant excellence académique, adaptabilité aux réalités africaines et ouverture internationale. Cette reconnaissance institutionnelle ouvre de nouvelles perspectives pour le développement des formations digitales au Togo."
                ],
                keyPoints: [
                    "Reconnaissance officielle de l'enseignement numérique",
                    "Alignement avec les politiques éducatives nationales",
                    "Opportunités de développement pour les étudiants togolais"
                ]
            },
            {
                id: 2,
                title: "Les discussions stratégiques",
                paragraphs: [
                    "Les échanges ont porté sur plusieurs axes stratégiques : l'intégration des compétences digitales dans les cursus traditionnels, la reconnaissance des diplômes en ligne, et le développement de partenariats public-privé pour faciliter l'accès aux formations numériques.",
                    "Le Ministre a exprimé son soutien à la création de programmes hybrides combinant présentiel et distanciel, une approche particulièrement adaptée au contexte togolais où l'accès aux infrastructures numériques est en pleine expansion."
                ],
                keyPoints: [
                    "Intégration des compétences digitales dans les cursus",
                    "Reconnaissance des diplômes en ligne",
                    "Développement de partenariats stratégiques"
                ]
            }
        ],
        quote: {
            text: "La transformation numérique de l'éducation n'est pas une option, c'est une nécessité pour préparer nos jeunes aux défis du 21e siècle.",
            author: "Kanka-Malik Natchaba, Ministre de l'Enseignement Supérieur et de la Recherche"
        },
        conclusion: "Cette rencontre historique marque une étape décisive dans la reconnaissance de l'enseignement supérieur numérique au Togo. Les engagements pris ouvrent la voie à une collaboration fructueuse entre ESCEN et les institutions nationales, avec pour objectif commun de former la nouvelle génération de leaders digitaux africains."
    },
    comments: [
        {
            id: 1,
            author: "Jean Koffi",
            date: "16 Nov 2024",
            content: "Excellent article ! Cette rencontre montre bien l'importance de moderniser notre système éducatif. Félicitations à toute l'équipe ESCEN !"
        },
        {
            id: 2,
            author: "Marie Akofa",
            date: "17 Nov 2024",
            content: "En tant qu'étudiante en digital marketing à ESCEN, je suis fière de voir notre école reconnue au plus haut niveau. Cela donne encore plus de valeur à notre diplôme !"
        }
    ]
})

// Articles similaires
const relatedArticles = ref([
    {
        id: 2,
        title: "Les compétences digitales indispensables en 2024",
        excerpt: "Analyse des compétences techniques et soft skills qui feront la différence sur le marché de l'emploi numérique cette année.",
        category: "career",
        date: "12 Nov 2024",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "L'IA dans le marketing digital : tendances 2024",
        excerpt: "Comment l'intelligence artificielle révolutionne les stratégies marketing et améliore l'expérience client.",
        category: "digital",
        date: "3 Nov 2024",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "La transformation digitale des PME",
        excerpt: "Guide pratique pour les petites et moyennes entreprises pour réussir leur transformation numérique.",
        category: "digital",
        date: "18 Oct 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
])

// Fonctions utilitaires
const getCategoryName = (categoryId) => {
    const categories = {
        'digital': 'Digital',
        'innovation': 'Innovation',
        'education': 'Éducation',
        'career': 'Carrière',
        'event': 'Événement'
    }
    return categories[categoryId] || categoryId
}

const getExpertise = (category) => {
    const expertises = {
        'digital': 'Transformation Digital',
        'innovation': 'Innovation Technologique',
        'education': 'Pédagogie Numérique',
        'career': 'Développement de Carrière',
        'event': 'Événementiel Académique'
    }
    return expertises[category] || 'Sujets Numériques'
}

// Fonctions de partage
const shareOnFacebook = () => {
    const url = window.location.href
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const shareOnTwitter = () => {
    const url = window.location.href
    const text = article.value.title
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const shareOnLinkedIn = () => {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    alert('Lien copié dans le presse-papier !')
    openShareMenu.value = false
}

// Fonctions pour les commentaires
const submitComment = async () => {
    if (!newComment.value.name || !newComment.value.email || !newComment.value.content) {
        alert('Veuillez remplir tous les champs obligatoires')
        return
    }

    submittingComment.value = true

    try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const newCommentObj = {
            id: article.value.comments.length + 1,
            author: newComment.value.name,
            date: new Date().toLocaleDateString('fr-FR', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
            }),
            content: newComment.value.content
        }

        article.value.comments.push(newCommentObj)
        
        newComment.value = {
            name: newComment.value.saveInfo ? newComment.value.name : '',
            email: newComment.value.saveInfo ? newComment.value.email : '',
            content: '',
            saveInfo: newComment.value.saveInfo
        }

        alert('Commentaire publié avec succès !')
    } catch (error) {
        console.error('Erreur:', error)
        alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
        submittingComment.value = false
    }
}

const likeComment = (commentId) => {
    console.log('Like comment:', commentId)
}

const replyToComment = (commentId) => {
    console.log('Reply to comment:', commentId)
}

const goToArticle = (id) => {
    router.push(`/article/${id}`)
}

const filterByCategory = (categoryId) => {
    router.push(`/blog?category=${categoryId}`)
}

const subscribeNewsletter = () => {
    if (!newsletterEmail.value) {
        alert('Veuillez entrer votre email')
        return
    }
    
    alert(`Merci pour votre inscription avec l'email : ${newsletterEmail.value}`)
    newsletterEmail.value = ''
}

// Fermer le menu de partage en cliquant en dehors
onMounted(() => {
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.share-button') && !e.target.closest('.share-menu')) {
            openShareMenu.value = false
        }
    })
    
    window.scrollTo(0, 0)
})
</script>

<style scoped>
.prose {
    color: #374151;
}

.prose p {
    line-height: 1.7;
}

.prose-lg {
    font-size: 1.125rem;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Sticky sidebar */
.sticky {
    position: sticky;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .prose-lg {
        font-size: 1rem;
    }
}
</style>