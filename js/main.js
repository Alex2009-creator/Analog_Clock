let secondsHand = document.getElementById('second_hand'),
    minutesHand = document.getElementById('minute_hand'),
    hoursHand = document.getElementById('hour_hand'),
    inputHours = document.getElementById('input_hours'),
    inputMinute = document.getElementById('input_minute'),
    btnTime = document.getElementById('btn_time');

let date = new Date(),
    hours = date.getHours() - 3,
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

var secondsStart,
    minutesStart,
    hoursStart,
    secondsAngle,
    minutesAngle,
    hoursAngle;

function showTime() {
    if (hours > 12) { // адаптация к цифровому циферблату
        hours -= 12;
    }
    secondsStart = 360 / 60 * seconds; // начальный угол секундной стрелки
    minutesStart = 360 / 60 * minutes; // начальный угол минутной стрелки
    hoursStart = 360 / 12 * hours + 30 / 60 * minutes; // начальный угол часовой стрелки            
    secondsAngle = secondsStart; // текущий угол секундной стрелки
    minutesAngle = minutesStart; // текущий угол минутной стрелки
    hoursAngle = hoursStart; // текущий угол часовой стрелки
}

function showSeconds() { // задание шага секундной стрелки с учетом текущего положения
    secondsAngle += 6; 
    showSecondsStart();
}

function showMinutes() { // задание шага минутной стрелки с учетом текущего положения
    minutesAngle += 6; 
    showMinutesStart();
}

function showHours() { // задание шага часовой стрелки с учетом текущего положения
    hoursAngle += 0.5; 
    showHoursStart();
}

function showSecondsStart() { // установка текущего положения секундной стрелки
    secondsHand.style.transform = 'rotate(' + secondsAngle + 'deg)'; 
}

function showMinutesStart() { // установка текущего положения минутной стрелки
    minutesHand.style.transform = 'rotate(' + minutesAngle + 'deg)'; 
}

function showHoursStart() { // установка текущего положения часовой стрелки
    hoursHand.style.transform = 'rotate(' + hoursAngle + 'deg)'; 
}

window.addEventListener('load', function () { // обработчик установки времени Internet
    showSecondsStart();
    showMinutesStart();
    showHoursStart();
}, false);

btnTime.addEventListener('click', function () { // обработчик установки времени вручную
    hours = Number(inputHours.value) - 3;
    minutes = Number(inputMinute.value);
    showTime();
    showSecondsStart();
    showMinutesStart();
    showHoursStart();
    inputHours.value = '';
    inputMinute.value = '';
});

showTime();
setInterval(showSeconds, 1000);
setInterval(showMinutes, 60000);
setInterval(showHours, 60000);