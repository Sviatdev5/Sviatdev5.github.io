import React from "react"
import space from "../img/space.jpg";
import space_ship from "../img/space_ship.jpg";

function Description({paragraphs}){
        return(
            <div>
            <h2>Вітаємо в симуляторі космічної експедиції!</h2>
                  <p>
                    Ласкаво просимо до найреалістичнішого комп'ютерного симулятора, що відкриває перед вами безліч можливостей і викликів! 
                    Зануртесь у світ високоякісних віртуальних моделей, де кожна дія, кожне рішення, має своє значення. Ви будете керувати складними 
                    системами, управляти технічними пристроями або брати участь у симуляціях, що відображають реальні ситуації з дивовижною точністю.
                  </p>
                  <img src={space} alt="Зображення космосу" />
                  <p>
                    Цей симулятор дозволяє вам перевірити свої навички, розвивати стратегію, вчитися на помилках і досягати результатів, які б у реальному житті 
                    вимагали великих зусиль. Будьте готові до різноманітних завдань, що перевірятимуть вашу спостережливість, інтелектуальні здібності та здатність 
                    до швидкого прийняття рішень.
                  </p>
                <img src={space_ship} alt="Космічний корабель" />
                  <p>
                    Модельована реальність змінюється залежно від вашого вибору, створюючи абсолютно нові сценарії і непередбачувані ситуації, які зроблять кожну гру унікальною. 
                    У цьому симуляторі важливо не лише досягти мети, але й розвивати свої навички, експериментувати і знаходити нові способи вирішення проблем. 
                    Чи готові ви взяти на себе відповідальність і пройти цей шлях, де кожне рішення має значення, а результат залежить від вашої рішучості і розуміння? 
                    Почніть свою подорож уже зараз і відкрийте для себе захоплюючий світ віртуальних можливостей!
                  </p>
            </div>      
            
        )
    }

export default Description