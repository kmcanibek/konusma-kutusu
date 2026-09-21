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

const els = {
  category: document.querySelector('#categorySelect'),
  thinkDuration: document.querySelector('#thinkDuration'),
  speakDuration: document.querySelector('#speakDuration'),
  promptCard: document.querySelector('#promptCard'),
  promptCategory: document.querySelector('#promptCategory'),
  promptText: document.querySelector('#promptText'),
  promptHint: document.querySelector('#promptHint'),
  promptIcon: document.querySelector('.prompt-icon'),
  cardCounter: document.querySelector('#cardCounter'),
  draw: document.querySelector('#drawButton'),
  skip: document.querySelector('#skipButton'),
  start: document.querySelector('#startButton'),
  pause: document.querySelector('#pauseButton'),
  reset: document.querySelector('#resetButton'),
  timerDisplay: document.querySelector('#timerDisplay'),
  timerRing: document.querySelector('#timerRing'),
  timerPanel: document.querySelector('.timer-panel'),
  phaseIcon: document.querySelector('#phaseIcon'),
  phaseLabel: document.querySelector('#phaseLabel'),
  phaseTitle: document.querySelector('#phaseTitle'),
  phaseDescription: document.querySelector('#phaseDescription'),
  soundToggle: document.querySelector('#soundToggle')
};

let currentPrompt = null;
let lastPromptText = '';
let phase = 'idle';
let remaining = Number(els.thinkDuration.value);
let totalForPhase = remaining;
let timerId = null;
let soundEnabled = true;

function filteredPrompts() {
  if (els.category.value === 'all') return prompts;
  return prompts.filter(p => p.category === els.category.value);
}

function updateCardCounter() {
  els.cardCounter.textContent = `${filteredPrompts().length} kart`;
}

function drawPrompt() {
  const pool = filteredPrompts();
  let candidates = pool.filter(p => p.text !== lastPromptText);
  if (!candidates.length) candidates = pool;
  currentPrompt = candidates[Math.floor(Math.random() * candidates.length)];
  lastPromptText = currentPrompt.text;

  els.promptCard.classList.remove('empty', 'drawn');
  requestAnimationFrame(() => els.promptCard.classList.add('drawn'));
  els.promptIcon.textContent = currentPrompt.icon;
  els.promptCategory.textContent = currentPrompt.category;
  els.promptText.textContent = currentPrompt.text;
  els.promptHint.textContent = 'İpucu: Giriş yap → düşünceni anlat → gerekçe ver → örnekle → konuşmanı tamamla.';
  els.skip.disabled = false;
  els.start.disabled = false;
  els.reset.disabled = false;

  resetTimer(false);
  setPhase('think', false);
  remaining = getThinkDuration();
  totalForPhase = remaining;
  updateTimerUI();
  els.start.textContent = '▶ Düşünmeye Başla';
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

  if (phase === 'think') {
    els.phaseIcon.textContent = '💭';
    els.phaseLabel.textContent = 'Düşün';
    els.phaseTitle.textContent = 'Kısa bir plan yap.';
    els.phaseDescription.textContent = 'Ana fikrini, bir gerekçeni ve vereceğin örneği zihninde sırala.';
  } else if (phase === 'speak') {
    els.phaseIcon.textContent = '🎤';
    els.phaseLabel.textContent = 'Konuş';
    els.phaseTitle.textContent = 'Söz sende!';
    els.phaseDescription.textContent = 'Sınıfa dön, anlaşılır bir sesle konuş ve düşünceni örnekle destekle.';
  } else if (phase === 'done') {
    els.phaseIcon.textContent = '👏';
    els.phaseLabel.textContent = 'Bitti';
    els.phaseTitle.textContent = 'Harika, konuşma tamamlandı.';
    els.phaseDescription.textContent = 'Şimdi bir dinleyici olumlu geri bildirim versin. Sonra yeni kart çekebilirsiniz.';
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
  }

  if (timerId) return;

  if (phase === 'think' && remaining <= 0) {
    beginSpeaking();
  }

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

function beginSpeaking() {
  setPhase('speak');
  remaining = getSpeakDuration();
  totalForPhase = remaining;
  updateTimerUI();
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
els.reset.addEventListener('click', () => resetTimer(true));

els.category.addEventListener('change', () => {
  updateCardCounter();
  currentPrompt = null;
  lastPromptText = '';
  els.promptCard.classList.add('empty');
  els.promptIcon.textContent = '🎁';
  els.promptCategory.textContent = 'Hazır mısın?';
  els.promptText.textContent = 'İlk konuşma kartını çekmek için aşağıdaki düğmeye bas.';
  els.skip.disabled = true;
  resetTimer(true);
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
resetTimer(true);

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
