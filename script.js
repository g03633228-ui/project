const primeMinisters = [
    {
        name: "Jawaharlal Nehru",
        image: "image/prime-ministers/jawaharlal-nehru.jpg",
        source: "https://en.wikipedia.org/wiki/Jawaharlal_Nehru",
        number: "01",
        term: "15 August 1947 – 27 May 1964",
        party: "INC",
        partyName: "Indian National Congress",
        description: "India's first prime minister helped establish parliamentary democracy and shape the institutions of a newly independent nation.",
        achievement: "Promoted scientific research, public education, industrial development and non-alignment in foreign affairs."
    },
    {
        name: "Gulzarilal Nanda",
        image: "image/prime-ministers/gulzarilal-nanda.jpg",
        source: "https://en.wikipedia.org/wiki/Gulzarilal_Nanda",
        number: "02",
        term: "27 May – 9 June 1964; 11 – 24 January 1966",
        party: "INC",
        partyName: "Indian National Congress",
        description: "He served twice as acting prime minister during transitions following the deaths of Jawaharlal Nehru and Lal Bahadur Shastri.",
        achievement: "A labour and planning specialist, he contributed to early national development and labour welfare."
    },
    {
        name: "Lal Bahadur Shastri",
        image: "image/prime-ministers/lal-bahadur-shastri.jpg",
        source: "https://en.wikipedia.org/wiki/Lal_Bahadur_Shastri",
        number: "03",
        term: "9 June 1964 – 11 January 1966",
        party: "INC",
        partyName: "Indian National Congress",
        description: "Remembered for his modest personal style and the call, “Jai Jawan, Jai Kisan.”",
        achievement: "Led India during the 1965 war and encouraged greater agricultural self-reliance."
    },
    {
        name: "Indira Gandhi",
        image: "image/prime-ministers/indira-gandhi.jpg",
        source: "https://en.wikipedia.org/wiki/Indira_Gandhi",
        number: "04",
        term: "24 January 1966 – 24 March 1977; 14 January 1980 – 31 October 1984",
        party: "INC",
        partyName: "Indian National Congress",
        description: "India's first woman prime minister, she served two separate periods in office during a consequential era.",
        achievement: "Her tenure included the 1971 war and major changes to India's agricultural and political landscape."
    },
    {
        name: "Morarji Desai",
        image: "image/prime-ministers/morarji-desai.jpg",
        source: "https://en.wikipedia.org/wiki/Morarji_Desai",
        number: "05",
        term: "24 March 1977 – 28 July 1979",
        party: "Janata",
        partyName: "Janata Party",
        description: "He became India's first prime minister from outside the Indian National Congress.",
        achievement: "Led the first non-Congress coalition government at the Centre."
    },
    {
        name: "Charan Singh",
        image: "image/prime-ministers/charan-singh.jpg",
        source: "https://en.wikipedia.org/wiki/Charan_Singh",
        number: "06",
        term: "28 July 1979 – 14 January 1980",
        party: "Others",
        partyName: "Janata Party (Secular)",
        description: "A long-time advocate for farmers and rural communities, he served as prime minister in 1979.",
        achievement: "His political work focused on agricultural policy, land reform and rural livelihoods."
    },
    {
        name: "Rajiv Gandhi",
        image: "image/prime-ministers/rajiv-gandhi.jpg",
        source: "https://en.wikipedia.org/wiki/Rajiv_Gandhi",
        number: "07",
        term: "31 October 1984 – 2 December 1989",
        party: "INC",
        partyName: "Indian National Congress",
        description: "At 40, he became India's youngest prime minister and led the country through a period of rapid change.",
        achievement: "His government advanced computerisation, telecommunications and technology education."
    },
    {
        name: "V. P. Singh",
        image: "image/prime-ministers/vp-singh.jpg",
        source: "https://en.wikipedia.org/wiki/V._P._Singh",
        number: "08",
        term: "2 December 1989 – 10 November 1990",
        party: "Others",
        partyName: "Janata Dal",
        description: "His short premiership was marked by major public debate about social justice and representation.",
        achievement: "His government implemented recommendations of the Mandal Commission on reservations."
    },
    {
        name: "Chandra Shekhar",
        image: "image/prime-ministers/chandra-shekhar.jpg",
        source: "https://en.wikipedia.org/wiki/Chandra_Shekhar",
        number: "09",
        term: "10 November 1990 – 21 June 1991",
        party: "Others",
        partyName: "Samajwadi Janata Party (Rashtriya)",
        description: "He led a minority government during a politically and economically challenging period.",
        achievement: "His government navigated a period of economic pressure and political uncertainty."
    },
    {
        name: "P. V. Narasimha Rao",
        image: "image/prime-ministers/pv-narasimha-rao.jpg",
        source: "https://en.wikipedia.org/wiki/P._V._Narasimha_Rao",
        number: "10",
        term: "21 June 1991 – 16 May 1996",
        party: "INC",
        partyName: "Indian National Congress",
        description: "He led India through a major turning point in the country's economic and international outlook.",
        achievement: "His government initiated the 1991 economic liberalisation reforms."
    },
    {
        name: "H. D. Deve Gowda",
        image: "image/prime-ministers/hd-deve-gowda.jpg",
        source: "https://en.wikipedia.org/wiki/H._D._Deve_Gowda",
        number: "11",
        term: "1 June 1996 – 21 April 1997",
        party: "Others",
        partyName: "Janata Dal",
        description: "A former chief minister of Karnataka, he became prime minister in 1996.",
        achievement: "His leadership emphasised rural development and cooperation between states and the Union."
    },
    {
        name: "I. K. Gujral",
        image: "image/prime-ministers/ik-gujral.jpg",
        source: "https://en.wikipedia.org/wiki/I._K._Gujral",
        number: "12",
        term: "21 April 1997 – 19 March 1998",
        party: "Others",
        partyName: "Janata Dal",
        description: "A diplomat and parliamentarian, he is particularly associated with India's neighbourhood policy.",
        achievement: "The Gujral Doctrine outlined a more accommodating approach to India's smaller neighbours."
    },
    {
        name: "Atal Bihari Vajpayee",
        image: "image/prime-ministers/atal-bihari-vajpayee.jpg",
        source: "https://en.wikipedia.org/wiki/Atal_Bihari_Vajpayee",
        number: "13",
        term: "16 May – 1 June 1996; 19 March 1998 – 22 May 2004",
        party: "BJP",
        partyName: "Bharatiya Janata Party",
        description: "A respected parliamentarian, poet and statesman, he served three times as prime minister.",
        achievement: "His tenure saw the Pokhran-II tests, the Golden Quadrilateral project and expanded infrastructure."
    },
    {
        name: "Manmohan Singh",
        image: "image/prime-ministers/manmohan-singh.jpg",
        source: "https://en.wikipedia.org/wiki/Manmohan_Singh",
        number: "14",
        term: "22 May 2004 – 26 May 2014",
        party: "INC",
        partyName: "Indian National Congress",
        description: "An economist who served two consecutive terms, he had earlier been a key figure in India's economic reforms.",
        achievement: "His governments enacted the Right to Information Act and MGNREGA, among other major initiatives."
    },
    {
        name: "Narendra Modi",
        image: "image/prime-ministers/narendra-modi.jpg",
        source: "https://en.wikipedia.org/wiki/Narendra_Modi",
        number: "15",
        term: "26 May 2014 – Present",
        party: "BJP",
        partyName: "Bharatiya Janata Party",
        description: "India's prime minister since 2014, he began a third consecutive term in June 2024.",
        achievement: "His governments have advanced initiatives including Digital India, Swachh Bharat and Make in India."
    }
];

const container = document.getElementById("pmContainer");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const partyFilter = document.getElementById("partyFilter");

function displayPM(data) {
    container.innerHTML = "";
    resultsCount.textContent = `${data.length} ${data.length === 1 ? "leader" : "leaders"}`;

    if (data.length === 0) {
        container.innerHTML = '<p class="no-result">No leaders match your search. Try another name or party.</p>';
        return;
    }

    data.forEach(pm => {
        const card = document.createElement("article");
        card.className = "pm-card";
        card.innerHTML = `
            <div class="pm-image">
                <img src="${pm.image}" alt="${pm.name}" loading="lazy">
                <span class="pm-number">${pm.number}</span>
            </div>
            <div class="pm-info">
                <span class="pm-period">${pm.term}</span>
                <h3>${pm.name}</h3>
                <p>${pm.partyName}</p>
                <p class="pm-description">${pm.description}</p>
                <span class="party">${pm.party}</span>
                <button class="read-btn" type="button">Read biography <span aria-hidden="true">↗</span></button>
            </div>
        `;

        card.querySelector(".read-btn").addEventListener("click", () => showDetails(pm));
        container.appendChild(card);
    });
}

function filterPM() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedParty = partyFilter.value;

    const filteredData = primeMinisters.filter(pm => {
        const matchesName = pm.name.toLowerCase().includes(searchValue);
        const matchesParty = selectedParty === "all" || pm.party === selectedParty;
        return matchesName && matchesParty;
    });

    displayPM(filteredData);
}

searchInput.addEventListener("input", filterPM);
partyFilter.addEventListener("change", filterPM);

const questions = [
    {
        question: "Who was the first Prime Minister of independent India?",
        options: ["Indira Gandhi", "Jawaharlal Nehru", "Rajiv Gandhi", "Narendra Modi"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "Who was India's first woman Prime Minister?",
        options: ["Pratibha Patil", "Sonia Gandhi", "Indira Gandhi", "Droupadi Murmu"],
        answer: "Indira Gandhi"
    },
    {
        question: "Who became Prime Minister in 2014?",
        options: ["Manmohan Singh", "Narendra Modi", "Atal Bihari Vajpayee", "Rajiv Gandhi"],
        answer: "Narendra Modi"
    },
    {
        question: "Who was Prime Minister when the 1991 economic reforms began?",
        options: ["Atal Bihari Vajpayee", "Manmohan Singh", "P. V. Narasimha Rao", "Rajiv Gandhi"],
        answer: "P. V. Narasimha Rao"
    },
    {
        question: "Who was India's youngest Prime Minister?",
        options: ["Rajiv Gandhi", "Indira Gandhi", "Narendra Modi", "Morarji Desai"],
        answer: "Rajiv Gandhi"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const progressElement = document.getElementById("quizProgress");
const nextButton = document.getElementById("nextQuestion");

function showQuestion() {
    const question = questions[currentQuestion];
    answered = false;
    questionElement.textContent = question.question;
    progressElement.textContent = `${String(currentQuestion + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
    resultElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.disabled = true;
    nextButton.innerHTML = 'Next question <span aria-hidden="true">→</span>';

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(button, option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedButton, selectedAnswer) {
    if (answered) {
        return;
    }

    answered = true;
    const correctAnswer = questions[currentQuestion].answer;
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "That's right. Well remembered.";
    } else {
        selectedButton.classList.add("incorrect");
        resultElement.textContent = `Not quite — the answer is ${correctAnswer}.`;
    }

    nextButton.disabled = false;
}

function nextQuestion() {
    if (!answered) {
        return;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        return;
    }

    questionElement.textContent = "A story worth continuing.";
    progressElement.textContent = "COMPLETE";
    optionsElement.innerHTML = "";
    resultElement.textContent = `You scored ${score} out of ${questions.length}. Explore the leaders to learn more.`;
    nextButton.disabled = false;
    nextButton.textContent = "Play again";
    answered = true;
}

nextButton.addEventListener("click", () => {
    if (currentQuestion === questions.length) {
        currentQuestion = 0;
        score = 0;
        showQuestion();
    } else {
        nextQuestion();
    }
});

showQuestion();

const modal = document.getElementById("pmModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");

function showDetails(pm) {
    modalDetails.innerHTML = `
        <div class="modal-profile">
            <img src="${pm.image}" alt="${pm.name}">
            <div>
                <p class="eyebrow">PRIME MINISTER ${pm.number}</p>
                <h2 id="modalName">${pm.name}</h2>
                <p><strong>Tenure:</strong> ${pm.term}</p>
                <p><strong>Political party:</strong> ${pm.partyName}</p>
                <h3>About</h3>
                <p>${pm.description}</p>
                <h3>Legacy and contributions</h3>
                <p>${pm.achievement}</p>
                <a class="source-link" href="${pm.source}" target="_blank" rel="noopener noreferrer">Read more about ${pm.name} <span aria-hidden="true">↗</span></a>
            </div>
        </div>
    `;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    closeModal.focus();
}

function hideModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", event => {
    if (event.target === modal) {
        hideModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
        hideModal();
    }
});

displayPM(primeMinisters);
