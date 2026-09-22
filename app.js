const prompts = [
  { category: 'Günlük', icon: '🌞', text: 'Bir gün boyunca istediğin bir hayvan olabilseydin hangisi olurdun? Neden?' },
  { category: 'Günlük', icon: '🏫', text: 'Okulda bir şeyi değiştirme hakkın olsaydı neyi değiştirirdin? Neden?' },
  { category: 'Günlük', icon: '🍂', text: 'En sevdiğin mevsimi bize tanıt ve neden sevdiğini anlat.' },
  { category: 'Günlük', icon: '🤝', text: 'Sence iyi bir arkadaşta bulunması gereken üç özellik nedir?' },
  { category: 'Günlük', icon: '📵', text: 'Telefon olmadan bir gün geçirmek zorunda kalsaydın gününü nasıl geçirirdin?' },
  { category: 'Günlük', icon: '👩‍🏫', text: 'Sence iyi bir öğretmen nasıl olmalıdır?' },
  { category: 'Günlük', icon: '🧭', text: 'Okulumuza yeni başlayan bir öğrenciye okulunu tanıt.' },
  { category: 'Günlük', icon: '🍲', text: 'En sevdiğin yemeği daha önce hiç yememiş birine anlat.' },
  { category: 'Günlük', icon: '⏰', text: 'Sence teneffüsler daha uzun olmalı mı? Düşünceni gerekçelendir.' },
  { category: 'Günlük', icon: '📚', text: 'Kitap okumayı sevmeyen bir arkadaşına kitapların neden değerli olabileceğini anlat.' },

  { category: 'Durum', icon: '🏫', text: 'Okula geldin ama okulda senden başka hiç kimse yok. Ne yaparsın?' },
  { category: 'Durum', icon: '🐈', text: 'Sokakta konuşabilen bir kediyle karşılaştın. İlk konuşmanız nasıl olurdu?' },
  { category: 'Durum', icon: '🫥', text: 'Bir sabah uyandığında görünmez olduğunu fark ettin. O gün ne yapardın?' },
  { category: 'Durum', icon: '👽', text: 'Bir uzaylı sınıfınıza geldi. Ona Dünya’yı ve günlük yaşamı tanıt.' },
  { category: 'Durum', icon: '⌛', text: 'Bir zaman makinesi buldun. Geçmişe mi geleceğe mi giderdin? Neden?' },
  { category: 'Durum', icon: '🏝️', text: 'Issız bir adaya gideceksin ve yanına yalnızca üç eşya alabilirsin. Neleri alırsın?' },
  { category: 'Durum', icon: '🧑‍💼', text: 'Bir günlüğüne okul müdürü oldun. İlk üç kararın ne olurdu?' },
  { category: 'Durum', icon: '🦜', text: 'Bütün hayvanların konuşabildiği bir sabaha uyandın. İlk hangi hayvanla konuşurdun?' },
  { category: 'Durum', icon: '💬', text: 'Bir arkadaşın düşük not aldığı için çok üzgün. Onu motive etmek için ne söylersin?' },
  { category: 'Durum', icon: '🏘️', text: 'Yeni taşındığın mahallede hiç arkadaşın yok. İlk arkadaşını nasıl edinirdin?' },

  { category: 'İkna', icon: '🐶', text: 'Aileni bir evcil hayvan sahiplenmeye ikna etmeye çalış.' },
  { category: 'İkna', icon: '📚', text: 'Arkadaşını her gün kısa da olsa kitap okumaya ikna et.' },
  { category: 'İkna', icon: '🚌', text: 'Sınıfını bir gezi düzenlemeye ikna et. Nereye gidileceğini de söyle.' },
  { category: 'İkna', icon: '⚽', text: 'Bir arkadaşını düzenli spor yapmaya ikna et.' },
  { category: 'İkna', icon: '🌳', text: 'Okul yönetimini bahçeye yeni bir alan yapılması gerektiğine ikna et. Nasıl bir alan önerirsin?' },
  { category: 'İkna', icon: '♻️', text: 'Arkadaşlarını çevreyi temiz tutmaya ve atıkları azaltmaya ikna et.' },
  { category: 'İkna', icon: '🌙', text: 'Sürekli geç yatan bir arkadaşını daha erken uyumaya ikna et.' },
  { category: 'İkna', icon: '🥪', text: 'Bir arkadaşını okulda daha dengeli bir beslenme çantası hazırlamaya ikna et.' },

  { category: 'Hayal', icon: '🪐', text: 'Yeni bir gezegen keşfettin. Gezegeninin adını, canlılarını ve kurallarını anlat.' },
  { category: 'Hayal', icon: '🏫', text: 'Hayalindeki okulu tasarla. Bu okulda hangi dersler ve alanlar olurdu?' },
  { category: 'Hayal', icon: '🎉', text: 'Dünyada yeni bir bayram ilan etme hakkın var. Bayramın adı ve gelenekleri ne olurdu?' },
  { category: 'Hayal', icon: '🥏', text: 'Yeni bir spor icat et. Adını ve nasıl oynandığını anlat.' },
  { category: 'Hayal', icon: '🤖', text: 'Bir robot tasarladın. Robotunun ne yaptığını ve insanlara nasıl yardım ettiğini anlat.' },
  { category: 'Hayal', icon: '✍️', text: 'Bir kitap yazacak olsaydın konusu, kahramanı ve adı ne olurdu?' },
  { category: 'Hayal', icon: '🏳️', text: 'Yeni bir ülke kurdun. Ülkenin adını, bayrağını ve üç temel kuralını anlat.' },
  { category: 'Hayal', icon: '🦸', text: 'Bir süper gücün var. Bu gücü ne için ve nasıl kullanırdın?' },
  { category: 'Hayal', icon: '🚪', text: 'Sınıfın duvarında başka bir dünyaya açılan gizli bir kapı buldun. Arkasında ne var?' },
  { category: 'Hayal', icon: '🧪', text: 'Dünyada henüz olmayan bir icat yaptın. İcadını ve ne işe yaradığını tanıt.' },

  { category: 'Rol', icon: '🎙️', text: 'Sen bir televizyon sunucususun. Okulumuzu izleyicilere tanıt.' },
  { category: 'Rol', icon: '🧑‍🚀', text: 'Sen bir astronotsun. Uzaydan yeni döndün. Gördüklerini anlat.' },
  { category: 'Rol', icon: '📰', text: 'Sen bir haber muhabirisin. Okulda sıra dışı ama eğlenceli bir olay yaşandı. Canlı yayında anlat.' },
  { category: 'Rol', icon: '🧑‍💼', text: 'Sen okul müdürüsün. Öğrencilere yeni ve yararlı bir okul kuralını açıklıyorsun.' },
  { category: 'Rol', icon: '🧳', text: 'Sen bir gezginsin. Daha önce kimsenin gitmediği bir ülkeye gittin. Orayı tanıt.' },
  { category: 'Rol', icon: '🔬', text: 'Sen bir bilim insanısın. Çok önemli bir icat yaptın. İcadını insanlara tanıt.' },
  { category: 'Rol', icon: '👨‍🍳', text: 'Sen ünlü bir aşçısın. Yeni bir yemek icat ettin. İçeriğini ve tadını anlat.' },
  { category: 'Rol', icon: '🏛️', text: 'Sen bir müze rehberisin. Hayalî bir eseri ziyaretçilere tanıt.' }
];

const bonusMissions = [
  'Konuşmanda en az bir örnek ver.',
  'Konuşmana dikkat çekici bir giriş cümlesiyle başla.',
  'En az iki gerekçe kullan.',
  'Konuşmanın sonunda güçlü bir kapanış cümlesi kur.',
  'Ses tonunu değiştirerek daha canlı konuş.',
  'Bir duygunu da konuşmana kat.'
];

const levelMap = [
  { min: 0, title: 'Çekingen Serçe', next: 30 },
  { min: 30, title: 'Cesur Papağan', next: 70 },
  { min: 70, title: 'Söz Kaşifi', next: 120 },
  { min: 120, title: 'Mikrofon Ustası', next: 180 },
  { min: 180, title: 'Konuşma Şampiyonu', next: null }
];

const badges = [
  { id: 'ilk', name: 'İlk Adım', emoji: '🌟', need: 1, desc: 'İlk konuşma tamamlandı.' },
  { id: 'uc', name: 'Cesur Ses', emoji: '🎤', need: 3, desc: '3 konuşma tamamlandı.' },
  { id: 'bes', name: 'Söz Avcısı', emoji: '🚀', need: 5, desc: '5 konuşma tamamlandı.' },
  { id: 'sekiz', name: 'Sahne Işığı', emoji: '🎭', need: 8, desc: '8 konuşma tamamlandı.' },
  { id: 'oniki', name: 'Sınıf Yıldızı', emoji: '🏆', need: 12, desc: '12 konuşma tamamlandı.' }
];

const mascotMessages = [
  'Harika! Bugün sınıfta söz pırıltısı var.',
  'Hazırsan sürpriz bir kart seni bekliyor.',
  'Bir örnek verirsen puanın daha da anlamlı hissedilir!',
  'Konuşurken göz teması kurmayı unutma.',
  'Bu sınıfta fikirler sahneye çıkıyor!'
];

const els = {
  category: document.querySelector('#categorySelect'),
  thinkDuration: document.querySelector('#thinkDuration'),
  speakDuration: document.querySelector('#speakDuration'),
  promptCard: document.querySelector('#promptCard'),
  promptCategory: document.querySelector('#promptCategory'),
  promptText: document.querySelector('#promptText'),
  promptHint: document.querySelector('#promptHint'),
  promptIcon: document.querySelector('.prompt-icon'),
  bonusCard: document.querySelector('#bonusCard'),
  bonusText: document.querySelector('#bonusText'),
  cardCounter: document.querySelector('#cardCounter'),
  draw: document.querySelector('#drawButton'),
  skip: document.querySelector('#skipButton'),
  surprise: document.querySelector('#surpriseButton'),
  start: document.querySelector('#startButton'),
  pause: document.querySelector('#pauseButton'),
  skipThink: document.querySelector('#skipThinkButton'),
  reset: document.querySelector('#resetButton'),
  timerDisplay: document.querySelector('#timerDisplay'),
  timerRing: document.querySelector('#timerRing'),
  timerPanel: document.querySelector('.timer-panel'),
  phaseIcon: document.querySelector('#phaseIcon'),
  phaseLabel: document.querySelector('#phaseLabel'),
  phaseTitle: document.querySelector('#phaseTitle'),
  phaseDescription: document.querySelector('#phaseDescription'),
  soundToggle: document.querySelector('#soundToggle'),
  toast: document.querySelector('#toast'),
  confetti: document.querySelector('#confettiLayer'),
  mascotMessage: document.querySelector('#mascotMessage'),
  scoreValue: document.querySelector('#scoreValue'),
  completedValue: document.querySelector('#completedValue'),
  levelValue: document.querySelector('#levelValue'),
  streakValue: document.querySelector('#streakValue'),
  progressBar: document.querySelector('#progressBar'),
  progressText: document.querySelector('#progressText'),
  badgesContainer: document.querySelector('#badgesContainer'),
  badgeCounter: document.querySelector('#badgeCounter')
};

let currentPrompt = null;
let currentBonus = '';
let lastPromptText = '';
let phase = 'idle';
let remaining = Number(els.thinkDuration.value);
let totalForPhase = remaining;
let timerId = null;
let soundEnabled = true;
let score = 0;
let completed = 0;
let streak = 0;
let awardedForCurrentCard = false;
let unlockedBadges = new Set();

function filteredPrompts() {
  if (els.category.value === 'all') return prompts;
  return prompts.filter(p => p.category === els.category.value);
}

function updateCardCounter() {
  els.cardCounter.textContent = `${filteredPrompts().length} kart`;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawPrompt() {
  const pool = filteredPrompts();
  let candidates = pool.filter(p => p.text !== lastPromptText);
  if (!candidates.length) candidates = pool;
  currentPrompt = randomItem(candidates);
  lastPromptText = currentPrompt.text;
  currentBonus = randomItem(bonusMissions);
  awardedForCurrentCard = false;

  els.promptCard.classList.remove('empty', 'drawn');
  requestAnimationFrame(() => els.promptCard.classList.add('drawn'));
  els.promptIcon.textContent = currentPrompt.icon;
  els.promptCategory.textContent = currentPrompt.category;
  els.promptText.textContent = currentPrompt.text;
  els.promptHint.textContent = 'İpucu: Giriş yap → düşünceni anlat → gerekçe ver → örnekle → konuşmanı tamamla.';
  els.bonusCard.classList.remove('hidden');
  els.bonusText.textContent = currentBonus;

  els.skip.disabled = false;
  els.start.disabled = false;
  els.reset.disabled = false;

  resetTimer(false);
  setPhase('think', false);
  remaining = getThinkDuration();
  totalForPhase = remaining;
  updateTimerUI();
  els.start.textContent = '▶ Düşünmeye Başla';

  setMascot(`Yeni görev geldi! Bonus hedefin: ${currentBonus}`);
  showToast('🎲 Yeni kart hazır! Sıra düşünmede.');
}

function getThinkDuration() {
  return clamp(Number(els.thinkDuration.value) || 30, 10, 180);
}

function getSpeakDuration() {
  return clamp(Number(els.speakDuration.value) || 60, 20, 300);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function setPhase(nextPhase, announce = true) {
  phase = nextPhase;
  els.timerPanel.classList.toggle('speaking', phase === 'speak');

  if (els.skipThink) {
    els.skipThink.classList.toggle('hidden', phase !== 'think');
  }

  if (phase === 'think') {
    els.phaseIcon.textContent = '💭';
    els.phaseLabel.textContent = 'Düşün';
    els.phaseTitle.textContent = 'Küçük planını yap.';
    els.phaseDescription.textContent = 'Ana fikrini, bir gerekçeni ve örneğini zihninde sırala.';
  } else if (phase === 'speak') {
    els.phaseIcon.textContent = '🎤';
    els.phaseLabel.textContent = 'Konuş';
    els.phaseTitle.textContent = 'Sahne senin!';
    els.phaseDescription.textContent = 'Sınıfa dön, anlaşılır bir sesle konuş ve bonus görevi de tamamlamaya çalış.';
  } else if (phase === 'done') {
    els.phaseIcon.textContent = '👏';
    els.phaseLabel.textContent = 'Tamam';
    els.phaseTitle.textContent = 'Konuşma tamamlandı!';
    els.phaseDescription.textContent = 'Şimdi sınıftan bir arkadaş olumlu geri bildirim versin. Sonra yeni kart çekebilirsiniz.';
    if (!awardedForCurrentCard) awardCompletion();
  } else {
    els.phaseIcon.textContent = '💭';
    els.phaseLabel.textContent = 'Hazır';
    els.phaseTitle.textContent = 'Önce kartını çek.';
    els.phaseDescription.textContent = 'Kart geldikten sonra “Düşünmeye Başla” düğmesi etkinleşecek.';
  }

  if (announce) beep(phase === 'speak' ? 760 : phase === 'done' ? 920 : 520);
}

function startTimer() {
  if (!currentPrompt) return;

  if (phase === 'done') {
    setPhase('think', false);
    remaining = getThinkDuration();
    totalForPhase = remaining;
    awardedForCurrentCard = false;
  }

  if (timerId) return;

  els.start.disabled = true;
  els.pause.disabled = false;
  els.start.textContent = phase === 'speak' ? '▶ Konuşmaya Devam Et' : '▶ Düşünmeye Devam Et';

  timerId = setInterval(() => {
    remaining -= 1;
    updateTimerUI();

    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;

      if (phase === 'think') {
        beginSpeaking();
        startTimer();
      } else if (phase === 'speak') {
        setPhase('done');
        remaining = 0;
        updateTimerUI();
        els.start.disabled = false;
        els.start.textContent = '↻ Aynı Kartı Yeniden Başlat';
        els.pause.disabled = true;
      }
    }
  }, 1000);
}

function skipThinking() {
  if (phase !== 'think' || !currentPrompt) return;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  beginSpeaking();
  startTimer();
  showToast('⏭ Düşünme süresi atlandı. Konuşma başladı!');
}

function beginSpeaking() {
  setPhase('speak');
  remaining = getSpeakDuration();
  totalForPhase = remaining;
  updateTimerUI();
  setMascot('Söz sende! Konuşurken bonus görevi de unutma.');
  showToast('🎤 Konuşma başladı!');
}

function pauseTimer() {
  if (!timerId) return;
  clearInterval(timerId);
  timerId = null;
  els.start.disabled = false;
  els.pause.disabled = true;
  els.start.textContent = phase === 'speak' ? '▶ Konuşmaya Devam Et' : '▶ Düşünmeye Devam Et';
}

function resetTimer(updatePhase = true) {
  if (timerId) clearInterval(timerId);
  timerId = null;
  els.pause.disabled = true;

  if (!currentPrompt) {
    phase = 'idle';
    remaining = getThinkDuration();
    totalForPhase = remaining;
    els.start.disabled = true;
    els.reset.disabled = true;
  } else {
    phase = 'think';
    remaining = getThinkDuration();
    totalForPhase = remaining;
    els.start.disabled = false;
    els.reset.disabled = false;
    els.start.textContent = '▶ Düşünmeye Başla';
  }

  if (updatePhase) setPhase(phase, false);
  updateTimerUI();
}

function updateTimerUI() {
  const minutes = Math.floor(Math.max(0, remaining) / 60);
  const seconds = Math.max(0, remaining) % 60;
  els.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const elapsedRatio = totalForPhase > 0 ? (totalForPhase - Math.max(0, remaining)) / totalForPhase : 0;
  els.timerRing.style.setProperty('--progress', `${Math.round(elapsedRatio * 360)}deg`);
}

function awardCompletion() {
  awardedForCurrentCard = true;
  completed += 1;
  streak += 1;
  const earned = 10 + Math.min(streak, 5) * 2;
  score += earned;
  updateGameUI();
  createConfetti();
  showToast(`⭐ +${earned} puan! Yeni toplam: ${score}`);
  setMascot('Süperdi! Bir konuşma daha tamamlandı. Rozetlere göz at!');
  unlockBadgesIfNeeded();
}

function getLevelData() {
  let current = levelMap[0];
  for (const level of levelMap) {
    if (score >= level.min) current = level;
  }
  return current;
}

function updateGameUI() {
  const level = getLevelData();
  els.scoreValue.textContent = score;
  els.completedValue.textContent = completed;
  els.levelValue.textContent = level.title;
  els.streakValue.textContent = `${streak}x`;

  if (level.next === null) {
    els.progressBar.style.width = '100%';
    els.progressText.textContent = 'Maksimum seviye!';
  } else {
    const range = level.next - level.min;
    const inLevel = score - level.min;
    const percent = Math.max(0, Math.min(100, (inLevel / range) * 100));
    els.progressBar.style.width = `${percent}%`;
    els.progressText.textContent = `${score} / ${level.next} puan`;
  }
}

function renderBadges() {
  els.badgesContainer.innerHTML = badges.map(badge => {
    const unlocked = unlockedBadges.has(badge.id);
    return `
      <div class="badge-item ${unlocked ? 'unlocked' : ''}">
        <span class="emoji">${badge.emoji}</span>
        <strong>${badge.name}</strong>
        <small>${badge.desc}</small>
      </div>
    `;
  }).join('');
  els.badgeCounter.textContent = `${unlockedBadges.size} / ${badges.length} açıldı`;
}

function unlockBadgesIfNeeded() {
  for (const badge of badges) {
    if (completed >= badge.need && !unlockedBadges.has(badge.id)) {
      unlockedBadges.add(badge.id);
      renderBadges();
      showToast(`🏅 Yeni rozet: ${badge.name}`);
      setMascot(`Tebrikler! "${badge.name}" rozetini kazandınız.`);
      beep(1020);
    }
  }
  renderBadges();
}

function setMascot(message) {
  els.mascotMessage.textContent = message;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => els.toast.classList.add('hidden'), 2600);
}

function createConfetti() {
  const colors = ['#7c3aed', '#ec4899', '#f59e0b', '#10b981', '#0ea5e9'];
  els.confetti.innerHTML = '';
  for (let i = 0; i < 26; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = randomItem(colors);
    piece.style.animationDelay = `${Math.random() * .45}s`;
    piece.style.transform = `translateY(0) rotate(${Math.random() * 180}deg)`;
    els.confetti.appendChild(piece);
  }
  setTimeout(() => { els.confetti.innerHTML = ''; }, 3200);
}

function beep(frequency = 700) {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.27);
  } catch (_) {}
}

els.draw.addEventListener('click', drawPrompt);
els.skip.addEventListener('click', drawPrompt);
els.start.addEventListener('click', startTimer);
els.pause.addEventListener('click', pauseTimer);
if (els.skipThink) els.skipThink.addEventListener('click', skipThinking);
els.reset.addEventListener('click', () => resetTimer(true));

els.surprise.addEventListener('click', () => {
  const msg = randomItem(mascotMessages);
  setMascot(msg);
  showToast(`🎉 ${msg}`);
});

els.category.addEventListener('change', () => {
  updateCardCounter();
  currentPrompt = null;
  lastPromptText = '';
  els.promptCard.classList.add('empty');
  els.promptIcon.textContent = '🎁';
  els.promptCategory.textContent = 'Hazır mısın?';
  els.promptText.textContent = 'İlk konuşma kartını çekmek için yukarıdaki düğmeye bas.';
  els.bonusCard.classList.add('hidden');
  els.skip.disabled = true;
  resetTimer(true);
  setMascot('Kategori değişti. Yeni kartın için hazırım!');
});

[els.thinkDuration, els.speakDuration].forEach(input => {
  input.addEventListener('change', () => {
    input.value = input === els.thinkDuration ? getThinkDuration() : getSpeakDuration();
    if (!timerId) resetTimer(true);
  });
});

els.soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  els.soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  els.soundToggle.textContent = soundEnabled ? '🔔 Ses açık' : '🔕 Ses kapalı';
  if (soundEnabled) beep(620);
});

updateCardCounter();
updateGameUI();
renderBadges();
resetTimer(true);
setMascot('Hazırsan kartını çekelim! Bugün sınıfta söz sende.');

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
