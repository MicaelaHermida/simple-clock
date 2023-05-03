(function(){
    let actualizarHora = function(){
        let fecha = new Date(),
            hours = fecha.getHours(),
            ampm,
            minutes = fecha.getMinutes(),
            seconds = fecha.getSeconds(),
            dayOfWeek= fecha.getDay(),
            day = fecha.getDate(),
            month = fecha.getMonth(),
            year = fecha.getFullYear();

        let pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pDayOfWeek = document.getElementById('dayOfWeek'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDayOfWeek.textContent = week[dayOfWeek];

        pDay.textContent = day;

        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMonth.textContent = months[month];

        pYear.textContent = year;


        if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }

        if(hours == 0){
            hours = 12;
        }

        if(hours < 10){
            hours = '0' + hours;
        }
        pHours.textContent = hours;

        pAMPM.textContent = ampm;

        if(minutes < 10){
            minutes = '0' + minutes;
        }
        pMinutes.textContent = minutes;

        if(seconds < 10){
            seconds = '0' + seconds;
        }
        pSeconds.textContent = seconds;
    };
    actualizarHora();
    setInterval(actualizarHora, 1000);/*milisegundos*/
}())

const darkModeButton = document.getElementById('darkModeButton');

darkModeButton.addEventListener('click', ()=>{
    const body = document.body;
    body.classList.toggle('darkMode');
})

const button = document.getElementById('button');
const slide = document.querySelector('.slide');

button.addEventListener('click', () => {
  box.classList.toggle('spin');
});

