const dt1 = document.querySelector('#dato1');
const dt2 = document.querySelector('#dato2');
const btn = document.querySelector('#calcu');
const res = document.querySelector('#res');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    res.innerText = dt1.value + dt2.value
}