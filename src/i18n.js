import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions
const resources = {
  fr: {
    translation: {
      // Navbar
      home: "Accueil",
      culture: "Culture Babembe",
      history: "Histoire",
      methali: "Methali (Proverbes)",
      cheria: "Cheria (Lois)",
      language: "Langue Kibembe",
      artsculture: "Arts & Culture",
      gastronomy: "Gastronomie",
      news: "Actualités Kigali",
      allNews: "Toutes les Actualités",
      events: "Événements",
      announcements: "Annonces",
      communityLife: "Vie Communautaire",
      gallery: "Galerie",
      contact: "Contact",
      
      // Home Page
      welcomeTitle: "Bienvenue dans la communauté",
      babembeKigali: "BABEMBE DE KIGALI",
      subtitle: "Une communauté riche en culture et traditions, unie au cœur de Kigali",
      description: "Découvrez notre histoire millénaire, nos traditions ancestrales et restez connecté avec la communauté Babembe de Kigali.",
      ourHistory: "Notre Histoire",
      newsLabel: "Actualités",
      
      // Stats
      yearsOfHistory: "Années d'Histoire",
      membersInKigali: "Membres à Kigali",
      liveTraditions: "Traditions Vivantes",
      weekly: "Weekly",
      
      // Culture Section
      ourCulture: "Notre Culture Babembe",
      culturalHeritage: "Découvrez la richesse de notre patrimoine culturel",
      methaliDesc: "Les proverbes et sagesses ancestrales qui guident notre communauté depuis des générations.",
      cheriaDesc: "Les lois coutumières et traditions qui régissent notre vie sociale et familiale.",
      languageDesc: "Notre langue maternelle, vecteur de notre identité et de notre héritage culturel.",
      discover: "Découvrir",
      
      // News Section
      communityNews: "Actualités de la Communauté",
      stayInformed: "Restez informé des dernières nouvelles de Kigali",
      readMore: "Lire plus",
      seeAllNews: "Voir toutes les actualités",
      
      // CTA
      joinCommunity: "Rejoignez Notre Communauté",
      joinDesc: "Restez connecté, partagez vos expériences et participez à la vie de notre communauté.",
      contactUs: "Nous Contacter",
      
      // Footer
      about: "À Propos",
      aboutDesc: "Site de la communauté Babembe de Kigali. Préservons notre culture et restons connectés.",
      quickLinks: "Liens Rapides",
      contactInfo: "Contact",
      copyright: "Communauté Babembe Kigali. Tous droits réservés.",
      
      // Empty Pages
      emptyMessage: "Cette page est encore vide...",
      comingSoon: "Le contenu sera ajouté bientôt.",
      
      // Footer Info
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      followUs: "Suivez-nous"
    }
  },
  en: {
    translation: {
      // Navbar
      home: "Home",
      culture: "Babembe Culture",
      history: "History",
      methali: "Methali (Proverbs)",
      cheria: "Cheria (Laws)",
      language: "Kibembe Language",
      artsculture: "Arts & Culture",
      gastronomy: "Gastronomy",
      news: "Kigali News",
      allNews: "All News",
      events: "Events",
      announcements: "Announcements",
      communityLife: "Community Life",
      gallery: "Gallery",
      contact: "Contact",
      
      // Home Page
      welcomeTitle: "Welcome to the",
      babembeKigali: "BABEMBE COMMUNITY IN KIGALI",
      subtitle: "A community rich in culture and traditions, united in the heart of Kigali",
      description: "Discover our ancient history, ancestral traditions and stay connected with the Babembe community in Kigali.",
      ourHistory: "Our History",
      newsLabel: "News",
      
      // Stats
      yearsOfHistory: "Years of History",
      membersInKigali: "Members in Kigali",
      liveTraditions: "Living Traditions",
      weekly: "Weekly",
      
      // Culture Section
      ourCulture: "Our Babembe Culture",
      culturalHeritage: "Discover the richness of our cultural heritage",
      methaliDesc: "The proverbs and ancestral wisdom that have guided our community for generations.",
      cheriaDesc: "The customary laws and traditions that govern our social and family life.",
      languageDesc: "Our mother tongue, vehicle of our identity and cultural heritage.",
      discover: "Discover",
      
      // News Section
      communityNews: "Community News",
      stayInformed: "Stay informed with the latest news from Kigali",
      readMore: "Read more",
      seeAllNews: "See all news",
      
      // CTA
      joinCommunity: "Join Our Community",
      joinDesc: "Stay connected, share your experiences and participate in our community life.",
      contactUs: "Contact Us",
      
      // Footer
      about: "About",
      aboutDesc: "Babembe community website in Kigali. Let's preserve our culture and stay connected.",
      quickLinks: "Quick Links",
      contactInfo: "Contact",
      copyright: "Babembe Kigali Community. All rights reserved.",
      
      // Empty Pages
      emptyMessage: "This page is still empty...",
      comingSoon: "Content will be added soon.",
      
      // Footer Info
      phone: "Phone",
      email: "Email",
      address: "Address",
      followUs: "Follow Us"
    }
  },
  sw: {
    translation: {
      // Navbar
      home: "Nyumbani",
      culture: "Utamaduni wa Babembe",
      history: "Historia",
      methali: "Methali",
      cheria: "Cheria (Sheria)",
      language: "Lugha ya Kibembe",
      artsculture: "Sanaa na Utamaduni",
      gastronomy: "Chakula",
      news: "Habari za Kigali",
      allNews: "Habari Zote",
      events: "Matukio",
      announcements: "Matangazo",
      communityLife: "Maisha ya Jamii",
      gallery: "Picha",
      contact: "Wasiliana",
      
      // Home Page
      welcomeTitle: "Karibu katika jamii ya",
      babembeKigali: "BABEMBE KIGALI",
      subtitle: "Jamii yenye utamaduni na mila tajiri, iliyounganishwa katika moyo wa Kigali",
      description: "Gundua historia yetu ya kale, mila za wazee na uendelee kuungana na jamii ya Babembe huko Kigali.",
      ourHistory: "Historia Yetu",
      newsLabel: "Habari",
      
      // Stats
      yearsOfHistory: "Miaka ya Historia",
      membersInKigali: "Wanachama Kigali",
      liveTraditions: "Mila Hai",
      weekly: "Kila Wiki",
      
      // Culture Section
      ourCulture: "Utamaduni Wetu wa Babembe",
      culturalHeritage: "Gundua utajiri wa urithi wetu wa kitamaduni",
      methaliDesc: "Methali na hekima za wazee zinazongoza jamii yetu tangu vizazi.",
      cheriaDesc: "Sheria za jadi na mila zinazosimamia maisha yetu ya kijamii na familia.",
      languageDesc: "Lugha yetu ya mama, chombo cha utambulisho wetu na urithi wa kitamaduni.",
      discover: "Gundua",
      
      // News Section
      communityNews: "Habari za Jamii",
      stayInformed: "Endelea kupata habari mpya kutoka Kigali",
      readMore: "Soma zaidi",
      seeAllNews: "Angalia habari zote",
      
      // CTA
      joinCommunity: "Jiunge na Jamii Yetu",
      joinDesc: "Endelea kuungana, shiriki uzoefu wako na shiriki katika maisha ya jamii yetu.",
      contactUs: "Wasiliana Nasi",
      
      // Footer
      about: "Kuhusu",
      aboutDesc: "Tovuti ya jamii ya Babembe huko Kigali. Tuhifadhi utamaduni wetu na tuendelee kuungana.",
      quickLinks: "Viungo vya Haraka",
      contactInfo: "Mawasiliano",
      copyright: "Jamii ya Babembe Kigali. Haki zote zimehifadhiwa.",
      
      // Empty Pages
      emptyMessage: "Ukurasa huu bado haujajazwa...",
      comingSoon: "Maudhui yataongezwa hivi karibuni.",
      
      // Footer Info
      phone: "Simu",
      email: "Barua pepe",
      address: "Anwani",
      followUs: "Tufuate"
    }
  },
  kb: {
    translation: {
      // Navbar
      home: "Kaya",
      culture: "Obughi bwa Babembe",
      history: "Amateka",
      methali: "Methali",
      cheria: "Cheria (Amasheria)",
      language: "Oluganda lwa Kibembe",
      artsculture: "Obusana n'Obughi",
      gastronomy: "Ebyokulya",
      news: "Amakuru ya Kigali",
      allNews: "Amakuru yonse",
      events: "Ebihango",
      announcements: "Amakuru",
      communityLife: "Obulamu bw'Abembe",
      gallery: "Ebifwani",
      contact: "Twendeshe",
      
      // Home Page
      welcomeTitle: "Mwakaribwa mu bughi bw'",
      babembeKigali: "ABEMBE BA KIGALI",
      subtitle: "Oluganda lw'obughi n'amasheria, lubalanganye mu mutima wa Kigali",
      description: "Mwizighe amateka yacu ya kale, amasheria y'abakulu bacu kandi mushighe mubali n'oluganda lw'Abembe ba Kigali.",
      ourHistory: "Amateka Yacu",
      newsLabel: "Amakuru",
      
      // Stats
      yearsOfHistory: "Emyaka y'Amateka",
      membersInKigali: "Abembe ba Kigali",
      liveTraditions: "Amasheria y'Olami",
      weekly: "Buri Cuma",
      
      // Culture Section
      ourCulture: "Obughi Bwacu bw'Abembe",
      culturalHeritage: "Mumenye obughi bwacu obw'amateka",
      methaliDesc: "Emethali n'obwenge bw'abakulu babatondeye oluganda lwacu kuva mu bijyane.",
      cheriaDesc: "Amasheria y'oluganda n'amakesho y'obulamu bwacu bw'abantu n'oluganda.",
      languageDesc: "Oluganda lwacu olw'amateka, oluhango lw'omwenzi yacu n'obughi bwacu.",
      discover: "Mumenye",
      
      // News Section
      communityNews: "Amakuru y'Oluganda",
      stayInformed: "Mushighe muzigu amakuru mapya ava Kigali",
      readMore: "Soma ebindi",
      seeAllNews: "Labhe amakuru yonse",
      
      // CTA
      joinCommunity: "Mwinjile mu Luganda Lwacu",
      joinDesc: "Mushighe mubali, mugabhe ebiryo byamwe kandi mwinjile mu bulamu bw'oluganda lwacu.",
      contactUs: "Twandike",
      
      // Footer
      about: "Ku lubawo",
      aboutDesc: "Omukono w'oluganda lw'Abembe ba Kigali. Twongereye obughi bwacu kandi tushighe tubali.",
      quickLinks: "Ebikoresho Ebihango",
      contactInfo: "Twandike",
      copyright: "Oluganda lw'Abembe ba Kigali. Amazima yonse yahungirwe.",
      
      // Empty Pages
      emptyMessage: "Olu rupapuro lurukali ruza...",
      comingSoon: "Ebintu bizaongezwa vuba.",
      
      // Footer Info
      phone: "Esimi",
      email: "Ibwandiko",
      address: "Aho tubarizwe",
      followUs: "Mutulondereze"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

