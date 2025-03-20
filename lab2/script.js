
const missions = [
    {id: "mars", title:"Дослідження-марса", description: "Марс активно досліджується за допомогою роботизованих місій, таких як марсоходи Perseverance і Curiosity, які вивчають його геологію та можливість існування життя в минулому. У майбутньому плануються пілотовані місії, що можуть прокласти шлях до колонізації Червоної планети."},
    {id: "satelite", title:"Запуск супутника", description: "це складний інженерний процес, що включає підготовку, виведення на орбіту та подальше керування апаратом. Супутники використовуються для зв’язку, навігації, дослідження космосу та спостереження за Землею. Сучасні ракети-носії, такі як Falcon 9 і Ariane 5."},
    {id: "neptun", title:"У пошуках сатурна", description: "Експедиції до Сатурна здійснювалися за допомогою автоматичних міжпланетних станцій, таких як Cassini, яка досліджувала планету, її кільця та супутники. Майбутні місії можуть зосередитися на пошуку життя на супутнику Енцеладі, де виявлено підлідний океан із потенційними умовами для існування мікроорганізмів."},
    {id: "small", title:"Загадка карликових планет", description: "Місія New Horizons вже дала нам неймовірні знімки Плутона, виявивши, що він має складну геологію, льодові рівнини та можливий підповерхневий океан. Також апарат пролетів повз об'єкт пояса Койпера – Аррокот, відкриваючи таємниці далеких рубежів Сонячної системи."},
    {id: "sun", title:"Сонячний зонд", description: "Експедиція до Сонця, здійснювана місією Parker Solar Probe, дозволяє дослідити структуру і динаміку сонячної корони, наближаючись до світила на рекордну відстань. Ці дослідження допоможуть зрозуміти механізми нагрівання корони та походження сонячного вітру, що впливає на космічну погоду та технології на Землі."},
    {id: "moon", title:"Колонізація Місяця", description: "Програма Artemis спрямована на повернення людини на Місяць і створення там постійної дослідницької бази. Це стане важливим кроком для підготовки до майбутніх пілотованих місій на Марс та глибокий космос.Місія Artemis використовує новітніх технологій для висадки астронавтів на Південному полюсі Місяця, де є водяний лід, що може стати ресурсом для майбутніх експедицій."}
];


let missionСontainer =document.querySelector('.missions') ;
for(i=0;i<missions.length; i++){
    let mission = missions[i];
    let missionHTML = `
        <div class="mode-buttonM">
            <div id="${mission.id}" class="button-content">
                <h3 class="button-title">${mission.title}</h3>
                <p class="button-text">${mission.description}</p> 
            </div>
        </div>
    `;
    missionСontainer.innerHTML += missionHTML;
} 


let expeditions = document.getElementsByClassName('mode-buttonM');
function showControls(i) {
    let controls = document.querySelectorAll(".controls");
    controls.forEach(control => control.style.display = "flex");

    let text_ship = document.getElementById("text-ship");
    if (text_ship) {
        text_ship.style.textAlign = "justify";
        text_ship.style.fontSize = "18px";
        text_ship.style.fontFamily = "Arial, sans-serif";
        text_ship.textContent = "Вибір стану корабля та керуйте його параметрами для експедиції: " + expeditions[i].querySelector(".button-title").textContent;
    }

    let myImage = document.getElementById('remove_image');
    if (myImage) myImage.remove();
    searchButton = expeditions[i].querySelector(".button-title").textContent;
    
    
}


function showParam(i){
    let parametres = document.querySelectorAll(".parameters");
    parametres.forEach(parameter => parameter.style.display = "flex");

}

function hideControls() {
    let controls = document.querySelectorAll(".controls");
    controls.forEach(control => control.style.display = "none");
}


for (let i = 0; i < expeditions.length; i++) {
   ( expeditions[i].addEventListener("click",()=> showControls(i)));
}

parametres = document.getElementsByClassName('mode-button');
for (let i = 0; i < parametres.length; i++) {
   ( parametres[i].addEventListener("click",()=> showParam(i)));
}

const modes = {
    normal_mode: {fuel: 70, energy: 50, crew: "6 / 10", shields: 80, hull: 90, hyperdrive: "Так", temperature: "250°C", maneuverability: 70, weapons: "Так", food: "40 днів", oxygen: 65, communication: "Стабільний"},
    hyperspace_flight: {fuel: 30, energy: 90, crew: "6 / 10", shields: 60, hull: 80, hyperdrive: "Заряджається", temperature: "500°C", maneuverability: 50, weapons: "Ні", food: "35 днів", oxygen: 50, communication: "Перешкоди"},
    remont: {fuel: 60, energy: 40, crew: "5 / 10", shields: 90, hull: 100, hyperdrive: "Ні", temperature: "200°C", maneuverability: 40, weapons: "Ні", food: "50 днів", oxygen: 80, communication: "Стабільний"},
    combat_readiness: {fuel: 50, energy: 70, crew: "6 / 10", shields: 100, hull: 85, hyperdrive: "Так", temperature: "300°C", maneuverability: 90, weapons: "Так", food: "30 днів", oxygen: 60, communication: "Посилений сигнал"},
    emergency_mode: {fuel: 20, energy: 20, crew: "4 / 10", shields: 30, hull: 50, hyperdrive: "Ні", temperature: "600°C", maneuverability: 20, weapons: "Ні", food: "10 днів", oxygen: 30, communication: "Відсутній"},
    stels: {fuel: 40, energy: 60, crew: "6 / 10", shields: 70, hull: 80, hyperdrive: "Так", temperature: "150°C", maneuverability: 100, weapons: "Так", food: "45 днів", oxygen: 70, communication: "Приглушений сигнал"}
};

function updateParameters(mode) {
    document.querySelectorAll(".parameters .param").forEach(param => {
        let label = param.querySelector("label").textContent.trim();
        let progress = param.querySelector("progress");
        let span = param.querySelector("span");

        switch (label) {
            case "Паливо:":
                progress.value = modes[mode].fuel;
                progress.nextSibling.textContent = ` ${modes[mode].fuel}%`;
                break;
            case "Енергія:":
                progress.value = modes[mode].energy;
                progress.nextSibling.textContent = ` ${modes[mode].energy}%`;
                break;
            case "Чисельність екіпажу:":
                span.textContent = modes[mode].crew;
                break;
            case "Щити:":
                progress.value = modes[mode].shields;
                progress.nextSibling.textContent = ` ${modes[mode].shields}%`;
                break;
            case "Корпус:":
                progress.value = modes[mode].hull;
                progress.nextSibling.textContent = ` ${modes[mode].hull}%`;
                break;
            case "Гіпердвигун заряджений:":
                span.textContent = modes[mode].hyperdrive;
                break;
            case "Температура корпусу:":
                span.textContent = modes[mode].temperature;
                break;
            case "Маневреність:":
                progress.value = modes[mode].maneuverability;
                progress.nextSibling.textContent = ` ${modes[mode].maneuverability}%`;
                break;
            case "Зброя активована:":
                span.textContent = modes[mode].weapons;
                break;
            case "Запаси продовольства:":
                span.textContent = modes[mode].food;
                break;
            case "Кисень:":
                progress.value = modes[mode].oxygen;
                progress.nextSibling.textContent = ` ${modes[mode].oxygen}%`;
                break;
            case "Стан зв’язку:":
                span.textContent = modes[mode].communication;
                break;
        }
    });
}

document.querySelectorAll(".mode-button").forEach(button => {
    button.addEventListener("click", function () {
        
    // Спочатку скидаємо borderColor для всіх кнопок
    document.querySelectorAll(".mode-button").forEach(b => {
        b.style.borderColor = ""; // Скидаємо стиль
    });

    // Тепер змінюємо borderColor тільки для натиснутої кнопки
    updateParameters(this.id);
    this.style.borderColor = "white";
    document.getElementById("start-mission").style.display = "";

    });
});

let idGenerator = 0;  // Унікальний генератор ID для завершених місій
let currentTimerId = "mission-timer";  // Ідентифікатор поточного таймера

let missionInProgress = false;
let missionButton = document.getElementById("start-mission");
let newMissionContainer = document.querySelector('.journeysNew');
let oldMissionContainer = document.querySelector('.journeysOld');
let allModeButtons = document.querySelectorAll(".mode-button");
let foundMission = null;

// Функція для оновлення стилю та тексту кнопки
function updateMissionButtonState(isInProgress) {
    if (isInProgress) {
        missionButton.style.background = "#ae1b1b";
        missionButton.textContent = "Завершити експедицію";
       
       
    } else {
        missionButton.style.background = "";
        missionButton.textContent = "Почати експедицію";
        
    }
}

// Функція для додавання місії до списку
function addMissionToList(mission) {
    let missionHTML = `
        <div class="mode-buttonT">
            <div id="${mission.id}" class="button-content">
                <h3 class="button-title">${mission.title}</h3>
                <p class="button-text">${mission.description}</p>
                <div class="mission-timer" id="${currentTimerId}">0h 0m 0s</div>
            </div>
        </div>
    `;
    newMissionContainer.innerHTML += missionHTML;
}


// Функція для додавання місії до списку завершених
function addMissionToListOld(mission) {
    let missionHTML = `
        <div class="mode-buttonT">
            <div id="${mission.id}" class="button-content">
                <h3 class="button-title">${mission.title}</h3> 
                <p class="button-text">${mission.description}</p>   
                <div class="mission-timer" id="timer-${idGenerator}">${nowtime}</div>
            </div>
        </div>
    `;
    oldMissionContainer.innerHTML += missionHTML;
    // Збільшуємо idGenerator для наступного таймера
    idGenerator++;
}


// Функція для видалення місій з списку
function clearMissionList() {
    newMissionContainer.innerHTML = "";
    newMissionContainer.innerHTML = `<h3> Поточна експедиція</h3>`;
}

// Функція для вимкнення всіх кнопок
function disableAllButtons() {
    allModeButtons.forEach(btn => {
        btn.disabled = true;
    });
}

// Функція для вмикання всіх кнопок
function enableAllButtons() {
    allModeButtons.forEach(btn => {
        btn.disabled = false;
    });
}

let elapsedTime = 0;
let missionTimer;

// Функція для оновлення часу поточної місії
function updateTimeDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;
    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }
    
   
    
    const paddedMinutes = padZero(minutes);
    const paddedSeconds = padZero(seconds);
    
    if (hours === 0 && minutes === 0) {
        nowtime = `${paddedSeconds}`;
    } else if (hours === 0) {
        nowtime = `${paddedMinutes}:${paddedSeconds}`;
    } else {
        nowtime = `${hours}:${paddedMinutes}:${paddedSeconds}с`;
    }
    
    document.getElementById(currentTimerId).textContent = nowtime;
    

    
  
    
    
}

// Функція для запуску таймера
function startTimer() {
    missionTimer = setInterval(() => {
        elapsedTime++;
        updateTimeDisplay();
    }, 1000);
}

// Функція для зупинки таймера
function stopTimer() {
    clearInterval(missionTimer);  // Зупиняємо таймер
}

// Обробник натискання кнопки місії
missionButton.addEventListener("click", function () {
    if (!missionInProgress) {
        foundMission = missions.find(mission => mission.title === searchButton);
        
        if (foundMission) {
            updateMissionButtonState(true);
            addMissionToList(foundMission);  // Додаємо поточну місію
            disableAllButtons();

            // Запустити таймер
            elapsedTime = 0;  // Скидаємо час перед стартом
            startTimer();

            missionInProgress = true;
        }
    } else {
        // Завершити місію
        updateMissionButtonState(false);
        clearMissionList();
        addMissionToListOld(foundMission);  // Додаємо місію в завершені
        enableAllButtons();

        stopTimer();  // Зупиняємо таймер
        missionInProgress = false;
    }
});



missionButton.addEventListener("mouseenter", function () {
    missionButton.style.background = "green";
    missionButton.textContent = "Ви готові?"
    
});

missionButton.addEventListener("mouseleave", function () {
    if(missionInProgress){
     missionButton.style.background = "#ae1b1b";
    missionButton.textContent = "Завершити експедицію"

    }
    else{
    missionButton.style.background = "";
    missionButton.textContent = "Почати експедицію"
    }
    
});



 
 let enter_form = document.querySelector("form");
 let menuItem= document.querySelector(".menu");
 let password = "23092005S"
 let no_menu = menuItem.style.display = "none"; // До того як обробив форму
 
 


 enter_form.addEventListener('submit',function(e){
    e.preventDefault();
    let attemp_password = document.getElementById("password").value;
    let attemp_email = document.getElementById("email").value;
    let attemp_name = document.getElementById("name").value;

    if(attemp_email == "" || attemp_name == "" ){
        alert("Будь ласка, заповніть всі поля: ім'я та email.");     
    }

    else {

    if(password == attemp_password) {
    menuItem.style.display = "flex";
    enter_form.style.display = "none";
    }

    else{
        alert("Пароль не правильний, спробуйте ще раз");
    }
}
 });














