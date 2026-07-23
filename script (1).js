// ============================================================
// Lingo Passport — Language Learning App with Auth
// ============================================================

// --- Language Data ---
const LANGS = {
  es: {name:'Spanish', code:'ES', speech:'es-ES', color:'#e94560', flag:'🇪🇸'},
  fr: {name:'French', code:'FR', speech:'fr-FR', color:'#4a90d9', flag:'🇫🇷'},
  de: {name:'German', code:'DE', speech:'de-DE', color:'#f0c040', flag:'🇩🇪'},
  it: {name:'Italian', code:'IT', speech:'it-IT', color:'#4caf84', flag:'🇮🇹'},
  ja: {name:'Japanese', code:'JA', speech:'ja-JP', color:'#e04040', flag:'🇯🇵'},
};

const CONTENT = {
  es: {
    vocabulary: [
      {word:'hola', translation:'hello', phonetic:'OH-lah', example:'¡Hola! ¿Cómo estás?'},
      {word:'agua', translation:'water', phonetic:'AH-gwah', example:'Un vaso de agua, por favor.'},
      {word:'gracias', translation:'thank you', phonetic:'GRAH-syahs', example:'Muchas gracias por tu ayuda.'},
      {word:'amigo', translation:'friend', phonetic:'ah-MEE-goh', example:'Él es mi mejor amigo.'},
      {word:'casa', translation:'house', phonetic:'KAH-sah', example:'Mi casa es tu casa.'},
      {word:'libro', translation:'book', phonetic:'LEE-broh', example:'Estoy leyendo un libro interesante.'},
      {word:'comida', translation:'food', phonetic:'koh-MEE-dah', example:'La comida está deliciosa.'},
      {word:'tiempo', translation:'time/weather', phonetic:'tee-EM-poh', example:'¿Qué tiempo hace hoy?'},
    ],
    phrases: [
      {word:'¿Cómo estás?', translation:'How are you?', phonetic:'KOH-moh eh-STAHS', example:'¡Hola! ¿Cómo estás?'},
      {word:'Mucho gusto', translation:'Nice to meet you', phonetic:'MOO-choh GOO-stoh', example:'Mucho gusto, soy Ana.'},
      {word:'¿Dónde está el baño?', translation:'Where is the bathroom?', phonetic:'DOHN-deh eh-STAH el BAH-nyoh', example:'Disculpe, ¿dónde está el baño?'},
      {word:'No entiendo', translation:"I don't understand", phonetic:'noh en-tee-EHN-doh', example:'Lo siento, no entiendo.'},
      {word:'Buenas noches', translation:'Good night', phonetic:'BWEH-nahs NOH-chess', example:'Buenas noches, que descanses.'},
      {word:'¿Cuánto cuesta?', translation:'How much does it cost?', phonetic:'KWAN-toh KWEH-stah', example:'¿Cuánto cuesta este libro?'},
    ],
    grammar: [
      {word:'Gender agreement', translation:'Adjectives change to match a noun\'s gender: "el gato negro" (black cat, masc.) vs "la gata negra" (fem.).', phonetic:'', example:'El coche rojo / La casa roja'},
      {word:'Ser vs. Estar', translation:'Spanish has two verbs for "to be": use ser for permanent traits, estar for temporary states or location.', phonetic:'', example:'Soy alto (permanent) / Estoy cansado (temporary)'},
      {word:'Plural nouns', translation:'Add -s after a vowel, -es after a consonant: libro → libros, papel → papeles.', phonetic:'', example:'un amigo → dos amigos, una ciudad → dos ciudades'},
    ],
  },
  fr: {
    vocabulary: [
      {word:'bonjour', translation:'hello', phonetic:'bohn-ZHOOR', example:'Bonjour, comment allez-vous?'},
      {word:'eau', translation:'water', phonetic:'OH', example:'Un verre d\'eau, s\'il vous plaît.'},
      {word:'merci', translation:'thank you', phonetic:'mehr-SEE', example:'Merci beaucoup pour votre aide.'},
      {word:'ami', translation:'friend', phonetic:'ah-MEE', example:'Il est mon meilleur ami.'},
      {word:'maison', translation:'house', phonetic:'meh-ZOHN', example:'Bienvenue dans ma maison.'},
      {word:'livre', translation:'book', phonetic:'LEEV-ruh', example:'Je lis un livre passionnant.'},
      {word:'nourriture', translation:'food', phonetic:'noo-ree-TOOR', example:'La nourriture française est excellente.'},
      {word:'temps', translation:'time/weather', phonetic:'tahm', example:'Quel temps fait-il aujourd\'hui?'},
    ],
    phrases: [
      {word:'Comment ça va ?', translation:'How are you?', phonetic:'koh-mahn sah VAH', example:'Salut ! Comment ça va ?'},
      {word:'Enchanté', translation:'Nice to meet you', phonetic:'ahn-shahn-TAY', example:'Enchanté, je m\'appelle Pierre.'},
      {word:'Où sont les toilettes ?', translation:'Where is the bathroom?', phonetic:'oo sohn lay twah-LET', example:'Pardon, où sont les toilettes ?'},
      {word:'Je ne comprends pas', translation:"I don't understand", phonetic:'zhuh nuh kohm-prahn PAH', example:'Désolé, je ne comprends pas.'},
      {word:'Bonne nuit', translation:'Good night', phonetic:'bun NWEE', example:'Bonne nuit, faites de beaux rêves.'},
      {word:'Combien ça coûte ?', translation:'How much does it cost?', phonetic:'kohm-byen sah koot', example:'Combien ça coûte, ce livre ?'},
    ],
    grammar: [
      {word:'Gender of nouns', translation:'Every noun is masculine or feminine, which changes its article: "le livre" (m.) vs "la maison" (f.).', phonetic:'', example:'le chat (m.) / la table (f.)'},
      {word:'Adjective agreement', translation:'Adjectives usually add -e for feminine and -s for plural: grand → grande, grands, grandes.', phonetic:'', example:'un homme grand / une femme grande'},
      {word:'Negation', translation:'Wrap the verb in ne ... pas: "Je ne sais pas" (I don\'t know).', phonetic:'', example:'Je parle → Je ne parle pas'},
    ],
  },
  de: {
    vocabulary: [
      {word:'hallo', translation:'hello', phonetic:'HAH-loh', example:'Hallo! Wie geht es dir?'},
      {word:'wasser', translation:'water', phonetic:'VAH-ser', example:'Ein Glas Wasser, bitte.'},
      {word:'danke', translation:'thank you', phonetic:'DAHN-keh', example:'Vielen Danke für deine Hilfe.'},
      {word:'freund', translation:'friend', phonetic:'froynd', example:'Er ist mein bester Freund.'},
      {word:'haus', translation:'house', phonetic:'hows', example:'Willkommen in meinem Haus.'},
      {word:'buch', translation:'book', phonetic:'bookh', example:'Ich lese ein interessantes Buch.'},
    ],
    phrases: [
      {word:'Wie geht es dir?', translation:'How are you?', phonetic:'vee gayt es deer', example:'Hallo! Wie geht es dir?'},
      {word:'Freut mich', translation:'Nice to meet you', phonetic:'froyt mikh', example:'Freut mich, ich bin Anna.'},
      {word:'Wo ist die Toilette?', translation:'Where is the bathroom?', phonetic:'voh ist dee toy-LET-teh', example:'Entschuldigung, wo ist die Toilette?'},
      {word:'Ich verstehe nicht', translation:"I don't understand", phonetic:'ikh fer-SHTAY-eh nikht', example:'Es tut mir leid, ich verstehe nicht.'},
    ],
    grammar: [
      {word:'Noun genders', translation:'German has three genders: masculine (der), feminine (die), neuter (das).', phonetic:'', example:'der Mann, die Frau, das Kind'},
      {word:'Verb position', translation:'In main clauses, the verb is always in second position.', phonetic:'', example:'Ich gehe heute ins Kino.'},
    ],
  },
  it: {
    vocabulary: [
      {word:'ciao', translation:'hello/goodbye', phonetic:'CHOW', example:'Ciao! Come stai?'},
      {word:'acqua', translation:'water', phonetic:'AHK-wah', example:'Un bicchiere d\'acqua, per favore.'},
      {word:'grazie', translation:'thank you', phonetic:'GRAH-tsee-eh', example:'Grazie mille per il tuo aiuto.'},
      {word:'amico', translation:'friend', phonetic:'ah-MEE-koh', example:'Lui è il mio migliore amico.'},
      {word:'casa', translation:'house', phonetic:'KAH-zah', example:'Benvenuto a casa mia.'},
      {word:'libro', translation:'book', phonetic:'LEE-broh', example:'Sto leggendo un libro interessante.'},
    ],
    phrases: [
      {word:'Come stai?', translation:'How are you?', phonetic:'KOH-meh STAH-ee', example:'Ciao! Come stai?'},
      {word:'Piacere', translation:'Nice to meet you', phonetic:'pyah-CHEH-reh', example:'Piacere, mi chiamo Marco.'},
      {word:'Dov\'è il bagno?', translation:'Where is the bathroom?', phonetic:'doh-VEH eel BAH-nyoh', example:'Scusi, dov\'è il bagno?'},
      {word:'Non capisco', translation:"I don't understand", phonetic:'non kah-PEES-koh', example:'Mi dispiace, non capisco.'},
    ],
    grammar: [
      {word:'Gender & number', translation:'Nouns ending in -o are usually masculine, -a feminine. Add -i/-e for plural.', phonetic:'', example:'il ragazzo → i ragazzi, la ragazza → le ragazze'},
    ],
  },
  ja: {
    vocabulary: [
      {word:'こんにちは', translation:'hello', phonetic:'kon-ni-chi-wa', example:'こんにちは、元気ですか？'},
      {word:'水', translation:'water', phonetic:'mi-zu', example:'水をください。'},
      {word:'ありがとう', translation:'thank you', phonetic:'a-ri-ga-tou', example:'ありがとうございます。'},
      {word:'友達', translation:'friend', phonetic:'to-mo-da-chi', example:'彼は私の友達です。'},
      {word:'本', translation:'book', phonetic:'hon', example:'面白い本を読んでいます。'},
    ],
    phrases: [
      {word:'お元気ですか？', translation:'How are you?', phonetic:'o-gen-ki desu ka', example:'こんにちは、お元気ですか？'},
      {word:'はじめまして', translation:'Nice to meet you', phonetic:'ha-ji-me-ma-shi-te', example:'はじめまして、田中です。'},
      {word:'トイレはどこですか？', translation:'Where is the bathroom?', phonetic:'to-i-re wa do-ko desu ka', example:'すみません、トイレはどこですか？'},
      {word:'わかりません', translation:"I don't understand", phonetic:'wa-ka-ri-ma-sen', example:'すみません、わかりません。'},
    ],
    grammar: [
      {word:'Particles', translation:'Japanese uses particles like は (topic), を (object), に (direction) to mark word functions.', phonetic:'', example:'私は本を読みます (I read a book)'},
    ],
  },
};

// --- Auth / Current User ---
let currentUser = null;

// --- App State ---
let state = {
  lang: 'es',
  mode: 'lessons',
  category: 'vocabulary',
  lessonIndex: 0,
  flashcardIndex: 0,
  difficulty: 'easy',
  quiz: {pool:[], qIndex:0, score:0, total:5, current:null, answered:false, results:[]},
  favorites: [],
  streak: {count:0, lastDate:''},
  wordsLearned: 0,
  quizScores: [],
};

// --- DOM Elements ---
const authOverlay = document.getElementById('auth-overlay');
const appWrap = document.getElementById('app-wrap');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const langRow = document.getElementById('lang-row');
const categoryRow = document.getElementById('category-row');
const lessonsView = document.getElementById('lessons-view');
const flashcardsView = document.getElementById('flashcards-view');
const quizView = document.getElementById('quiz-view');
const favoritesView = document.getElementById('favorites-view');
const categorySection = document.getElementById('category-section');
const difficultySection = document.getElementById('difficulty-section');
const userBtn = document.getElementById('user-btn');
const userDropdown = document.getElementById('user-dropdown');

// ============================================================
// AUTH SYSTEM
// ============================================================

function getUsers(){
  try { return JSON.parse(localStorage.getItem('lingo_users') || '[]'); }
  catch(e) { return []; }
}

function saveUsers(users){
  localStorage.setItem('lingo_users', JSON.stringify(users));
}

function getRememberedUser(){
  try { return JSON.parse(localStorage.getItem('lingo_remembered') || 'null'); }
  catch(e) { return null; }
}

function setRememberedUser(user){
  if(user){
    localStorage.setItem('lingo_remembered', JSON.stringify({email:user.email}));
  } else {
    localStorage.removeItem('lingo_remembered');
  }
}

function loadUserData(email){
  const prefix = 'lingo_data_' + email.replace(/[^a-zA-Z0-9]/g,'_');
  state.favorites = JSON.parse(localStorage.getItem(prefix+'_favorites') || '[]');
  state.streak = JSON.parse(localStorage.getItem(prefix+'_streak') || '{"count":0,"lastDate":""}');
  state.wordsLearned = JSON.parse(localStorage.getItem(prefix+'_words') || '0');
  state.quizScores = JSON.parse(localStorage.getItem(prefix+'_scores') || '[]');
}

function saveUserData(){
  if(!currentUser) return;
  const prefix = 'lingo_data_' + currentUser.email.replace(/[^a-zA-Z0-9]/g,'_');
  localStorage.setItem(prefix+'_favorites', JSON.stringify(state.favorites));
  localStorage.setItem(prefix+'_streak', JSON.stringify(state.streak));
  localStorage.setItem(prefix+'_words', state.wordsLearned);
  localStorage.setItem(prefix+'_scores', JSON.stringify(state.quizScores));
}

function hashPassword(password){
  let hash = 0;
  for(let i=0; i<password.length; i++){
    const char = password.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36);
}

function login(email, password, remember){
  const users = getUsers();
  const user = users.find(u=>u.email===email);
  if(!user) return 'No account found with this email.';
  if(user.password !== hashPassword(password)) return 'Incorrect password.';
  currentUser = {name:user.name, email:user.email};
  if(remember) setRememberedUser(currentUser);
  else setRememberedUser(null);
  loadUserData(email);
  updateStreak();
  updateStats();
  renderAll();
  showApp();
  return null;
}

function signup(name, email, password, confirmPassword){
  if(password.length < 6) return 'Password must be at least 6 characters.';
  if(password !== confirmPassword) return 'Passwords do not match.';
  const users = getUsers();
  if(users.find(u=>u.email===email)) return 'An account with this email already exists.';
  const newUser = {name, email, password:hashPassword(password)};
  users.push(newUser);
  saveUsers(users);
  currentUser = {name, email};
  setRememberedUser(null);
  loadUserData(email);
  updateStreak();
  updateStats();
  renderAll();
  showApp();
  return null;
}

function logout(){
  currentUser = null;
  saveUserData();
  hideApp();
  clearForms();
}

function showApp(){
  authOverlay.style.display = 'none';
  appWrap.style.display = 'block';
  document.getElementById('user-name-display').textContent = currentUser.name;
  document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
}

function hideApp(){
  appWrap.style.display = 'none';
  authOverlay.style.display = 'flex';
}

function clearForms(){
  loginForm.reset();
  signupForm.reset();
  document.getElementById('login-error').textContent = '';
  document.getElementById('signup-error').textContent = '';
}

// --- Auth Event Listeners ---
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const remember = document.getElementById('remember-me').checked;
  const error = login(email, password, remember);
  if(error) document.getElementById('login-error').textContent = error;
});

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  const error = signup(name, email, password, confirm);
  if(error) document.getElementById('signup-error').textContent = error;
});

document.getElementById('show-signup').addEventListener('click', (e)=>{
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  document.getElementById('login-error').textContent = '';
});

document.getElementById('show-login').addEventListener('click', (e)=>{
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
  document.getElementById('signup-error').textContent = '';
});

// User dropdown toggle
userBtn.addEventListener('click', ()=>{
  userDropdown.style.display = userDropdown.style.display==='none'?'block':'none';
});

document.getElementById('logout-btn').addEventListener('click', ()=>{
  userDropdown.style.display = 'none';
  logout();
});

document.addEventListener('click', (e)=>{
  if(!userBtn.contains(e.target) && !userDropdown.contains(e.target)){
    userDropdown.style.display = 'none';
  }
});

// ============================================================
// APP FUNCTIONS
// ============================================================

function updateStreak(){
  const today = new Date().toDateString();
  const streak = state.streak;
  if(streak.lastDate !== today){
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if(streak.lastDate === yesterday){
      streak.count++;
    } else if(streak.lastDate !== today){
      streak.count = 1;
    }
    streak.lastDate = today;
    state.streak = streak;
  }
  saveUserData();
}

function updateStats(){
  document.getElementById('streak-count').textContent = state.streak.count;
  document.getElementById('words-learned').textContent = state.wordsLearned;
  const scores = state.quizScores;
  const avg = scores.length > 0 ? Math.round(scores.reduce((a,b)=>a+b,0) / scores.length) : 0;
  document.getElementById('avg-score').textContent = avg + '%';
}

function renderLangRow(){
  langRow.innerHTML = Object.keys(LANGS).map(key=>{
    const l = LANGS[key];
    return `<button class="lang-pill ${state.lang===key?'active':''}" data-lang="${key}">
      <span class="flag-badge" style="background:${l.color}">${l.flag}</span>${l.name}
    </button>`;
  }).join('');
  langRow.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.lang = btn.dataset.lang;
      state.lessonIndex = 0;
      state.flashcardIndex = 0;
      resetQuiz();
      renderAll();
    });
  });
}

function renderCategoryRow(){
  const cats = [['vocabulary','Vocab'],['phrases','Phrases'],['grammar','Grammar']];
  categoryRow.innerHTML = cats.map(([key,label])=>
    `<div class="cat-badge ${state.category===key?'active':''}" data-cat="${key}">${label}</div>`
  ).join('');
  categoryRow.querySelectorAll('[data-cat]').forEach(el=>{
    el.addEventListener('click', ()=>{
      state.category = el.dataset.cat;
      state.lessonIndex = 0;
      state.flashcardIndex = 0;
      renderLessons();
      renderFlashcards();
      renderCategoryRow();
    });
  });
}

function speak(text, langCode){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = langCode;
  utter.rate = 0.9;
  speechSynthesis.speak(utter);
}

function toggleFavorite(item){
  const key = `${state.lang}:${item.word}`;
  const idx = state.favorites.findIndex(f=>f.key===key);
  if(idx >= 0){
    state.favorites.splice(idx,1);
  } else {
    state.favorites.push({...item, key, lang:state.lang, langName:LANGS[state.lang].name});
  }
  saveUserData();
  showToast(idx >=0 ? 'Removed from favorites' : 'Added to favorites! ❤️');
  if(state.mode === 'favorites') renderFavorites();
}

function isFavorite(item){
  const key = `${state.lang}:${item.word}`;
  return state.favorites.some(f=>f.key===key);
}

function showToast(msg){
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(), 2000);
}

function incrementWordsLearned(){
  state.wordsLearned++;
  saveUserData();
  updateStats();
}

function renderLessons(){
  if(state.mode !== 'lessons') return;
  const items = CONTENT[state.lang][state.category];
  if(!items) return;
  const item = items[state.lessonIndex];
  const showPhonetic = item.phonetic ? `<div class="lesson-phonetic">/ ${item.phonetic} /</div>` : '';
  const showExample = item.example ? `<div class="lesson-example">💡 ${item.example}</div>` : '';
  const playBtn = state.category !== 'grammar'
    ? `<button class="play-btn" id="play-btn">🔊 Listen</button>` : '';
  const favClass = isFavorite(item) ? 'favorited' : '';
  const favIcon = isFavorite(item) ? '❤️' : '🤍';

  lessonsView.innerHTML = `
    <div class="lesson-card">
      <div class="lesson-word">${item.word}</div>
      ${showPhonetic}
      <div class="lesson-translation">${item.translation}</div>
      ${showExample}
      ${playBtn}
      <button class="fav-btn ${favClass}" id="fav-btn" title="Add to favorites">${favIcon}</button>
    </div>
    <div class="lesson-nav">
      <button class="nav-btn" id="lesson-prev">←</button>
      <span class="lesson-progress">${state.lessonIndex+1} / ${items.length}</span>
      <button class="nav-btn" id="lesson-next">→</button>
    </div>`;

  document.getElementById('lesson-prev').addEventListener('click', ()=>{
    state.lessonIndex = (state.lessonIndex - 1 + items.length) % items.length;
    renderLessons();
  });
  document.getElementById('lesson-next').addEventListener('click', ()=>{
    state.lessonIndex = (state.lessonIndex + 1) % items.length;
    incrementWordsLearned();
    renderLessons();
  });
  const pb = document.getElementById('play-btn');
  if(pb) pb.addEventListener('click', ()=> speak(item.word, LANGS[state.lang].speech));
  document.getElementById('fav-btn').addEventListener('click', ()=>{
    toggleFavorite(item);
    renderLessons();
  });
}

function renderFlashcards(){
  if(state.mode !== 'flashcards') return;
  const items = CONTENT[state.lang][state.category];
  if(!items) return;
  const item = items[state.flashcardIndex];

  flashcardsView.innerHTML = `
    <div class="flashcard-container" style="height:280px;position:relative;">
      <div class="flashcard" id="flashcard">
        <div class="flashcard-front">
          <div class="flashcard-word">${item.word}</div>
          ${item.phonetic ? `<div class="flashcard-phonetic">/ ${item.phonetic} /</div>` : ''}
          <div class="flashcard-hint">🖱️ Click to reveal</div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-translation">${item.translation}</div>
          ${item.example ? `<div class="flashcard-info">${item.example}</div>` : ''}
        </div>
      </div>
    </div>
    <div class="flashcard-nav">
      <button class="nav-btn" id="flashcard-prev">←</button>
      <span class="lesson-progress">${state.flashcardIndex+1} / ${items.length}</span>
      <button class="nav-btn" id="flashcard-next">→</button>
      <button class="play-btn" id="flashcard-speak">🔊 Listen</button>
    </div>`;

  const card = document.getElementById('flashcard');
  card.addEventListener('click', ()=>{
    card.classList.toggle('flipped');
    if(card.classList.contains('flipped')){
      incrementWordsLearned();
    }
  });
  document.getElementById('flashcard-prev').addEventListener('click', ()=>{
    state.flashcardIndex = (state.flashcardIndex - 1 + items.length) % items.length;
    renderFlashcards();
  });
  document.getElementById('flashcard-next').addEventListener('click', ()=>{
    state.flashcardIndex = (state.flashcardIndex + 1) % items.length;
    renderFlashcards();
  });
  document.getElementById('flashcard-speak').addEventListener('click', (e)=>{
    e.stopPropagation();
    speak(item.word, LANGS[state.lang].speech);
  });
}

function renderFavorites(){
  if(state.mode !== 'favorites') return;
  const langFavs = state.favorites.filter(f=>f.lang===state.lang);
  if(langFavs.length === 0){
    favoritesView.innerHTML = `<div class="no-favorites">No favorites yet for ${LANGS[state.lang].name}.<br>❤️ Add words from lessons!</div>`;
    return;
  }
  favoritesView.innerHTML = `
    <div class="favorites-list">
      ${langFavs.map(f=>`
        <div class="fav-item">
          <div>
            <div class="fav-word">${f.word}</div>
            <div class="fav-translation">${f.translation}</div>
          </div>
          <div class="fav-actions">
            <button class="fav-play" data-word="${f.word}">🔊</button>
            <button class="fav-remove" data-key="${f.key}">✕</button>
          </div>
        </div>
      `).join('')}
    </div>`;
  favoritesView.querySelectorAll('.fav-play').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      speak(btn.dataset.word, LANGS[state.lang].speech);
    });
  });
  favoritesView.querySelectorAll('.fav-remove').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.key;
      state.favorites = state.favorites.filter(f=>f.key!==key);
      saveUserData();
      renderFavorites();
      showToast('Removed from favorites');
    });
  });
}

function resetQuiz(){
  const pool = [...CONTENT[state.lang].vocabulary, ...CONTENT[state.lang].phrases];
  state.quiz = {pool, qIndex:0, score:0, total:5, current:null, answered:false, results:[]};
}

function buildQuestion(){
  const pool = state.quiz.pool;
  const total = Math.min(pool.length, 4);
  const correctItem = pool[Math.floor(Math.random()*pool.length)];
  let distractors = pool.filter(p=>p.translation !== correctItem.translation);
  distractors = distractors.sort(()=>Math.random()-0.5).slice(0, total-1);
  const options = [...distractors.map(d=>d.translation), correctItem.translation].sort(()=>Math.random()-0.5);
  state.quiz.current = {item:correctItem, options};
  state.quiz.answered = false;
}

function renderQuiz(){
  if(state.mode !== 'quiz') return;
  if(state.quiz.qIndex >= state.quiz.total){
    const pct = Math.round((state.quiz.score/state.quiz.total)*100);
    state.quizScores.push(pct);
    if(state.quizScores.length > 20) state.quizScores.shift();
    saveUserData();
    updateStats();
    const grade = pct >= 80 ? '🌟 Excellent!' : pct >= 60 ? '👍 Good job!' : '📚 Keep practicing!';
    quizView.innerHTML = `
      <div class="quiz-card quiz-summary">
        <div class="score">${state.quiz.score} / ${state.quiz.total}</div>
        <div class="grade">${grade}</div>
        <div style="color:#6B4C40;font-size:14px;">${LANGS[state.lang].name} — ${state.difficulty} level</div>
        <button class="restart-btn" id="restart-quiz">🔄 Try Again</button>
      </div>`;
    document.getElementById('restart-quiz').addEventListener('click', ()=>{
      resetQuiz(); buildQuestion(); renderQuiz();
    });
    return;
  }
  if(!state.quiz.current) buildQuestion();
  const q = state.quiz.current;
  const stampsHtml = Array.from({length:state.quiz.total}).map((_,i)=>{
    const r = state.quiz.results[i];
    const cls = r === true ? 'correct' : r === false ? 'wrong' : '';
    const glyph = r === true ? '✓' : r === false ? '✕' : '';
    return `<div class="stamp ${cls}">${glyph}</div>`;
  }).join('');

  quizView.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-question">What does "<strong>${q.item.word}</strong>" mean?</div>
      <div class="quiz-options">
        ${q.options.map(opt=>`<button class="quiz-option" data-opt="${encodeURIComponent(opt)}">${opt}</button>`).join('')}
      </div>
      <div class="quiz-footer">
        <div class="stamp-row">${stampsHtml}</div>
        <button class="next-btn" id="next-q" disabled>Next →</button>
      </div>
    </div>`;

  quizView.querySelectorAll('.quiz-option').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(state.quiz.answered) return;
      state.quiz.answered = true;
      const chosen = decodeURIComponent(btn.dataset.opt);
      const isCorrect = chosen === q.item.translation;
      state.quiz.results[state.quiz.qIndex] = isCorrect;
      if(isCorrect) state.quiz.score++;
      quizView.querySelectorAll('.quiz-option').forEach(o=>{
        o.disabled = true;
        const val = decodeURIComponent(o.dataset.opt);
        if(val === q.item.translation) o.classList.add('correct');
        else if(o === btn) o.classList.add('wrong');
      });
      if(isCorrect) speak(q.item.word, LANGS[state.lang].speech);
      document.getElementById('next-q').disabled = false;
    });
  });
  document.getElementById('next-q').addEventListener('click', ()=>{
    state.quiz.qIndex++;
    state.quiz.current = null;
    renderQuiz();
  });
}

function switchMode(mode){
  state.mode = mode;
  lessonsView.style.display = mode==='lessons'?'block':'none';
  flashcardsView.style.display = mode==='flashcards'?'block':'none';
  quizView.style.display = mode==='quiz'?'block':'none';
  favoritesView.style.display = mode==='favorites'?'block':'none';
  categorySection.style.display = (mode==='lessons'||mode==='flashcards')?'block':'none';
  difficultySection.style.display = mode==='quiz'?'block':'none';
  if(mode==='quiz' && state.quiz.pool.length===0) resetQuiz();
  if(mode==='lessons') renderLessons();
  if(mode==='flashcards') renderFlashcards();
  if(mode==='quiz') renderQuiz();
  if(mode==='favorites') renderFavorites();
}

function renderAll(){
  renderLangRow();
  renderCategoryRow();
  switchMode(state.mode);
}

// --- Mode Tabs ---
document.getElementById('mode-tabs').addEventListener('click', (e)=>{
  const btn = e.target.closest('.mode-tab');
  if(!btn) return;
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  switchMode(btn.dataset.mode);
});

// --- Difficulty Tabs ---
difficultySection.addEventListener('click', (e)=>{
  const btn = e.target.closest('.diff-btn');
  if(!btn) return;
  document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  state.difficulty = btn.dataset.diff;
  state.quiz.total = state.difficulty==='easy'?3:state.difficulty==='medium'?5:7;
  resetQuiz();
  renderQuiz();
});

// ============================================================
// INITIALIZATION
// ============================================================
function init(){
  // Check for remembered user
  const remembered = getRememberedUser();
  if(remembered){
    const users = getUsers();
    const user = users.find(u=>u.email===remembered.email);
    if(user){
      currentUser = {name:user.name, email:user.email};
      loadUserData(user.email);
      updateStreak();
      updateStats();
      renderAll();
      showApp();
      return;
    }
  }
  // Show auth overlay
  hideApp();
  clearForms();
}

init();