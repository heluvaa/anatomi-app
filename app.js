// ===== STATE MANAGEMENT =====
let currentMode = 'home';
let flashcardIndex = 0;
let flashcardDeck = [];
let cardProgress = {};
let quizQuestions = [];
let quizIndex = 0;
let quizAnswers = [];
let kasusQuestions = [];
let kasusIndex = 0;
let kasusAnswers = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    initNavigation();
    updateStats();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            switchMode(mode);
        });
    });
}

function switchMode(mode) {
    currentMode = mode;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    
    // Update screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(mode + 'Screen').classList.add('active');
    
    // Reset containers
    if (mode === 'flashcard') {
        document.getElementById('flashcardContainer').style.display = 'none';
        document.querySelector('#flashcardScreen .category-selector').style.display = 'flex';
    } else if (mode === 'quiz') {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('quizResult').style.display = 'none';
        document.querySelector('#quizScreen .category-selector').style.display = 'flex';
    } else if (mode === 'kasus') {
        document.getElementById('kasusContainer').style.display = 'none';
        document.getElementById('kasusResult').style.display = 'none';
        document.querySelector('#kasusScreen .category-selector').style.display = 'block';
    } else if (mode === 'stats') {
        updateStats();
    }
}

// ===== FLASHCARD MODE =====
function startFlashcard() {
    const category = document.getElementById('flashcardCategory').value;
    
    // Filter cards by category
    if (category === 'all') {
        flashcardDeck = [...allFlashcards];
    } else {
        flashcardDeck = allFlashcards.filter(card => card.category === category);
    }
    
    // Shuffle deck
    flashcardDeck = shuffleArray(flashcardDeck);
    
    // Apply spaced repetition: cards marked as not mastered appear more frequently
    const progress = getProgress();
    const notMastered = flashcardDeck.filter(card => {
        const key = card.front;
        return !progress.masteredCards || !progress.masteredCards[key];
    });
    
    const mastered = flashcardDeck.filter(card => {
        const key = card.front;
        return progress.masteredCards && progress.masteredCards[key];
    });
    
    // Weighted deck: 70% not mastered, 30% mastered (for review)
    flashcardDeck = [];
    while (notMastered.length > 0 || mastered.length > 0) {
        for (let i = 0; i < 3 && notMastered.length > 0; i++) {
            flashcardDeck.push(notMastered.shift());
        }
        if (mastered.length > 0) {
            flashcardDeck.push(mastered.shift());
        }
    }
    
    flashcardIndex = 0;
    
    document.querySelector('#flashcardScreen .category-selector').style.display = 'none';
    document.getElementById('flashcardContainer').style.display = 'block';
    
    showCard();
}

function showCard() {
    if (flashcardIndex >= flashcardDeck.length) {
        alert('🎉 Selesai! Kamu sudah mempelajari semua kartu di kategori ini.');
        exitFlashcard();
        return;
    }
    
    const card = flashcardDeck[flashcardIndex];
    const flashcard = document.getElementById('flashcard');
    
    flashcard.classList.remove('flipped');
    
    document.getElementById('cardFront').textContent = card.front;
    document.getElementById('cardBack').textContent = card.back;
    
    // Update counter and progress
    document.getElementById('cardCounter').textContent = `Kartu ${flashcardIndex + 1} dari ${flashcardDeck.length}`;
    const progress = ((flashcardIndex + 1) / flashcardDeck.length) * 100;
    document.getElementById('flashcardProgress').style.width = progress + '%';
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function markCard(mastered) {
    const card = flashcardDeck[flashcardIndex];
    const key = card.front;
    
    const progress = getProgress();
    if (!progress.studiedCards) progress.studiedCards = {};
    if (!progress.masteredCards) progress.masteredCards = {};
    if (!progress.categoryStats) progress.categoryStats = {};
    
    progress.studiedCards[key] = true;
    
    if (mastered) {
        progress.masteredCards[key] = true;
    } else {
        // Mark as difficult (for statistics)
        if (!progress.difficultCards) progress.difficultCards = {};
        progress.difficultCards[key] = (progress.difficultCards[key] || 0) + 1;
    }
    
    // Update category stats
    const cat = card.category;
    if (!progress.categoryStats[cat]) {
        progress.categoryStats[cat] = { correct: 0, total: 0 };
    }
    progress.categoryStats[cat].total++;
    if (mastered) progress.categoryStats[cat].correct++;
    
    saveProgress(progress);
    
    flashcardIndex++;
    showCard();
}

function exitFlashcard() {
    document.getElementById('flashcardContainer').style.display = 'none';
    document.querySelector('#flashcardScreen .category-selector').style.display = 'flex';
}

// ===== QUIZ MODE =====
function startQuiz() {
    const category = document.getElementById('quizCategory').value;
    
    // Generate quiz from flashcards
    let pool = [];
    if (category === 'all') {
        pool = [...allFlashcards];
    } else {
        pool = allFlashcards.filter(card => card.category === category);
    }
    
    pool = shuffleArray(pool);
    quizQuestions = pool.slice(0, 10).map(card => {
        const options = [card.back];
        
        // Generate 3 wrong options from same category
        const wrongOptions = allFlashcards
            .filter(c => c.category === card.category && c.front !== card.front)
            .map(c => c.back);
        
        while (options.length < 4 && wrongOptions.length > 0) {
            const idx = Math.floor(Math.random() * wrongOptions.length);
            const opt = wrongOptions.splice(idx, 1)[0];
            if (!options.includes(opt)) {
                options.push(opt);
            }
        }
        
        // Fallback if not enough options
        while (options.length < 4) {
            options.push('(Opsi tidak tersedia)');
        }
        
        const shuffledOptions = shuffleArray(options);
        
        return {
            question: card.front,
            options: shuffledOptions,
            correct: shuffledOptions.indexOf(card.back),
            explanation: card.back,
            category: card.category
        };
    });
    
    quizIndex = 0;
    quizAnswers = [];
    
    document.querySelector('#quizScreen .category-selector').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    showQuizQuestion();
}

function showQuizQuestion() {
    const question = quizQuestions[quizIndex];
    
    document.getElementById('questionText').textContent = `Apa arti dari "${question.question}"?`;
    document.getElementById('questionCounter').textContent = `Soal ${quizIndex + 1} dari ${quizQuestions.length}`;
    
    const progress = ((quizIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt;
        div.onclick = () => selectQuizOption(idx);
        container.appendChild(div);
    });
    
    document.getElementById('nextQuizBtn').style.display = 'none';
}

function selectQuizOption(selected) {
    const question = quizQuestions[quizIndex];
    const isCorrect = selected === question.correct;
    
    quizAnswers.push({
        question: question.question,
        selected: selected,
        correct: question.correct,
        isCorrect: isCorrect,
        category: question.category
    });
    
    // Show feedback
    const options = document.querySelectorAll('#optionsContainer .option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selected) {
            opt.classList.add('wrong');
        }
    });
    
    // Show explanation
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    explanation.innerHTML = `<strong>Penjelasan:</strong> ${question.explanation}`;
    document.getElementById('optionsContainer').appendChild(explanation);
    
    // Update progress
    updateQuizProgress(isCorrect, question.category);
    
    document.getElementById('nextQuizBtn').style.display = 'block';
}

function nextQuestion() {
    quizIndex++;
    
    if (quizIndex >= quizQuestions.length) {
        showQuizResult();
    } else {
        showQuizQuestion();
    }
}

function showQuizResult() {
    const correct = quizAnswers.filter(a => a.isCorrect).length;
    const total = quizAnswers.length;
    const score = Math.round((correct / total) * 100);
    
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    document.getElementById('finalScore').textContent = `${correct}/${total} (${score}%)`;
    
    let message = '';
    if (score >= 90) message = '🌟 Luar biasa! Kamu menguasai materi ini!';
    else if (score >= 70) message = '👍 Bagus! Terus belajar!';
    else if (score >= 50) message = '📚 Cukup baik, masih perlu latihan lagi.';
    else message = '💪 Jangan menyerah! Ulangi materi dan coba lagi.';
    
    document.getElementById('scoreMessage').textContent = message;
    
    // Show summary
    const summary = document.getElementById('quizSummary');
    summary.innerHTML = '<h3>Ringkasan Jawaban</h3>';
    
    quizAnswers.forEach((ans, idx) => {
        const div = document.createElement('div');
        div.className = `summary-item ${ans.isCorrect ? 'correct' : 'wrong'}`;
        
        const question = quizQuestions[idx];
        div.innerHTML = `
            <h4>Soal ${idx + 1}</h4>
            <p><strong>Pertanyaan:</strong> ${ans.question}</p>
            <p><strong>Jawaban kamu:</strong> ${question.options[ans.selected]}</p>
            ${!ans.isCorrect ? `<p><strong>Jawaban benar:</strong> ${question.options[ans.correct]}</p>` : ''}
        `;
        summary.appendChild(div);
    });
    
    // Save quiz score
    const progress = getProgress();
    if (!progress.quizScores) progress.quizScores = [];
    progress.quizScores.push({
        date: new Date().toISOString(),
        score: score,
        correct: correct,
        total: total
    });
    saveProgress(progress);
}

function updateQuizProgress(isCorrect, category) {
    const progress = getProgress();
    if (!progress.categoryStats) progress.categoryStats = {};
    
    if (!progress.categoryStats[category]) {
        progress.categoryStats[category] = { correct: 0, total: 0 };
    }
    
    progress.categoryStats[category].total++;
    if (isCorrect) progress.categoryStats[category].correct++;
    
    saveProgress(progress);
}

function restartQuiz() {
    document.getElementById('quizResult').style.display = 'none';
    document.querySelector('#quizScreen .category-selector').style.display = 'flex';
}

function exitQuiz() {
    switchMode('home');
}

// ===== KASUS PBL MODE =====
function startKasus() {
    kasusQuestions = shuffleArray([...kasusKlinis]);
    kasusIndex = 0;
    kasusAnswers = [];
    
    document.querySelector('#kasusScreen .category-selector').style.display = 'none';
    document.getElementById('kasusContainer').style.display = 'block';
    
    showKasusQuestion();
}

function showKasusQuestion() {
    const kasus = kasusQuestions[kasusIndex];
    
    document.getElementById('kasusScenario').textContent = kasus.scenario;
    document.getElementById('kasusQuestion').textContent = kasus.question;
    document.getElementById('kasusCounter').textContent = `Kasus ${kasusIndex + 1} dari ${kasusQuestions.length}`;
    
    const progress = ((kasusIndex + 1) / kasusQuestions.length) * 100;
    document.getElementById('kasusProgress').style.width = progress + '%';
    
    const container = document.getElementById('kasusOptionsContainer');
    container.innerHTML = '';
    
    kasus.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = opt;
        div.onclick = () => selectKasusOption(idx);
        container.appendChild(div);
    });
    
    document.getElementById('nextKasusBtn').style.display = 'none';
}

function selectKasusOption(selected) {
    const kasus = kasusQuestions[kasusIndex];
    const isCorrect = selected === kasus.correct;
    
    kasusAnswers.push({
        scenario: kasus.scenario,
        question: kasus.question,
        selected: selected,
        correct: kasus.correct,
        isCorrect: isCorrect,
        category: kasus.category
    });
    
    // Show feedback
    const options = document.querySelectorAll('#kasusOptionsContainer .option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === kasus.correct) {
            opt.classList.add('correct');
        } else if (idx === selected) {
            opt.classList.add('wrong');
        }
    });
    
    // Show explanation
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    explanation.innerHTML = `<strong>Penjelasan:</strong> ${kasus.explanation}`;
    document.getElementById('kasusOptionsContainer').appendChild(explanation);
    
    // Update progress
    updateQuizProgress(isCorrect, kasus.category);
    
    document.getElementById('nextKasusBtn').style.display = 'block';
}

function nextKasus() {
    kasusIndex++;
    
    if (kasusIndex >= kasusQuestions.length) {
        showKasusResult();
    } else {
        showKasusQuestion();
    }
}

function showKasusResult() {
    const correct = kasusAnswers.filter(a => a.isCorrect).length;
    const total = kasusAnswers.length;
    const score = Math.round((correct / total) * 100);
    
    document.getElementById('kasusContainer').style.display = 'none';
    document.getElementById('kasusResult').style.display = 'block';
    
    document.getElementById('kasusScore').textContent = `${correct}/${total} (${score}%)`;
    
    let message = '';
    if (score >= 90) message = '🩺 Excellent! Clinical reasoning kamu sangat baik!';
    else if (score >= 70) message = '👨‍⚕️ Good job! Terus asah kemampuan klinis!';
    else if (score >= 50) message = '📖 Perlu lebih banyak latihan kasus klinis.';
    else message = '💪 Review lagi materi anatomi dan hubungannya dengan klinis.';
    
    document.getElementById('kasusMessage').textContent = message;
    
    // Show summary
    const summary = document.getElementById('kasusSummary');
    summary.innerHTML = '<h3>Ringkasan Kasus</h3>';
    
    kasusAnswers.forEach((ans, idx) => {
        const div = document.createElement('div');
        div.className = `summary-item ${ans.isCorrect ? 'correct' : 'wrong'}`;
        
        const kasus = kasusQuestions[idx];
        div.innerHTML = `
            <h4>Kasus ${idx + 1}</h4>
            <p><strong>Skenario:</strong> ${ans.scenario}</p>
            <p><strong>Pertanyaan:</strong> ${ans.question}</p>
            <p><strong>Jawaban kamu:</strong> ${kasus.options[ans.selected]}</p>
            ${!ans.isCorrect ? `<p><strong>Jawaban benar:</strong> ${kasus.options[ans.correct]}</p>` : ''}
            <p><strong>Penjelasan:</strong> ${kasus.explanation}</p>
        `;
        summary.appendChild(div);
    });
    
    // Save score
    const progress = getProgress();
    if (!progress.kasusScores) progress.kasusScores = [];
    progress.kasusScores.push({
        date: new Date().toISOString(),
        score: score,
        correct: correct,
        total: total
    });
    saveProgress(progress);
}

function restartKasus() {
    document.getElementById('kasusResult').style.display = 'none';
    document.querySelector('#kasusScreen .category-selector').style.display = 'block';
}

function exitKasus() {
    switchMode('home');
}

// ===== STATISTICS =====
function updateStats() {
    const progress = getProgress();
    
    const totalStudied = progress.studiedCards ? Object.keys(progress.studiedCards).length : 0;
    const totalMastered = progress.masteredCards ? Object.keys(progress.masteredCards).length : 0;
    const totalQuizzes = (progress.quizScores ? progress.quizScores.length : 0) + 
                         (progress.kasusScores ? progress.kasusScores.length : 0);
    
    let avgScore = 0;
    if (totalQuizzes > 0) {
        const allScores = [
            ...(progress.quizScores || []),
            ...(progress.kasusScores || [])
        ];
        const sum = allScores.reduce((acc, s) => acc + s.score, 0);
        avgScore = Math.round(sum / allScores.length);
    }
    
    document.getElementById('totalCardsStudied').textContent = totalStudied;
    document.getElementById('totalMastered').textContent = totalMastered;
    document.getElementById('totalQuizzes').textContent = totalQuizzes;
    document.getElementById('averageScore').textContent = avgScore + '%';
    
    // Category accuracy
    const categoryAccuracy = document.getElementById('categoryAccuracy');
    categoryAccuracy.innerHTML = '';
    
    const stats = progress.categoryStats || {};
    const categories = {
        tulang: 'Tulang (Osteologi)',
        otot: 'Otot (Miologi)',
        organ: 'Organ (Viscera)',
        istilah: 'Istilah Dasar'
    };
    
    Object.keys(categories).forEach(key => {
        const stat = stats[key] || { correct: 0, total: 0 };
        const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
        
        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <span>${categories[key]}</span>
            <span>${accuracy}% (${stat.correct}/${stat.total})</span>
        `;
        categoryAccuracy.appendChild(div);
    });
    
    // Difficult cards
    const difficultCardsList = document.getElementById('difficultCardsList');
    difficultCardsList.innerHTML = '';
    
    const difficultCards = progress.difficultCards || {};
    const sortedDifficult = Object.entries(difficultCards)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    if (sortedDifficult.length === 0) {
        difficultCardsList.innerHTML = '<p style="color: var(--text-secondary);">Belum ada data kartu yang sulit. Mulai belajar dulu! 🎯</p>';
    } else {
        sortedDifficult.forEach(([cardKey, count]) => {
            const card = allFlashcards.find(c => c.front === cardKey);
            if (card) {
                const div = document.createElement('div');
                div.className = 'difficult-card-item';
                div.innerHTML = `
                    <strong>${card.front}</strong> - ${card.back.split('\n')[0]}<br>
                    <small>Belum hafal: ${count} kali</small>
                `;
                difficultCardsList.appendChild(div);
            }
        });
    }
}

function resetStats() {
    if (confirm('⚠️ Yakin ingin menghapus semua data belajar? Tindakan ini tidak bisa dibatalkan!')) {
        localStorage.removeItem('anatomyAppProgress');
        alert('✅ Data berhasil dihapus.');
        updateStats();
    }
}

// ===== SEARCH =====
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const category = document.getElementById('searchCategory').value;
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length === 0) {
        resultsContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Ketik untuk mulai mencari...</p>';
        return;
    }
    
    let pool = allFlashcards;
    if (category !== 'all') {
        pool = allFlashcards.filter(card => card.category === category);
    }
    
    const results = pool.filter(card => 
        card.front.toLowerCase().includes(query) || 
        card.back.toLowerCase().includes(query)
    );
    
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">Tidak ada hasil ditemukan. Coba kata kunci lain. 🔍</p>';
        return;
    }
    
    const categoryNames = {
        tulang: 'Tulang',
        otot: 'Otot',
        organ: 'Organ',
        istilah: 'Istilah'
    };
    
    results.forEach(card => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <span class="category-badge">${categoryNames[card.category]}</span>
            <h4>${card.front}</h4>
            <p>${card.back}</p>
        `;
        resultsContainer.appendChild(div);
    });
}

// ===== STORAGE & UTILITIES =====
function getProgress() {
    const data = localStorage.getItem('anatomyAppProgress');
    return data ? JSON.parse(data) : {};
}

function saveProgress(progress) {
    localStorage.setItem('anatomyAppProgress', JSON.stringify(progress));
}

function loadProgress() {
    // Initialize if not exists
    if (!localStorage.getItem('anatomyAppProgress')) {
        saveProgress({});
    }
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
