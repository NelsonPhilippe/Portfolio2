const btn_home = document.getElementById("btn-home");
const btn_about = document.getElementById("btn-about");
const btn_portfolio = document.getElementById("btn-portfolio");
const btn_contact = document.getElementById("btn-contact");

const btn_array = [btn_home, btn_about, btn_portfolio, btn_contact];

const span_home = document.getElementById('span-home');
const span_about = document.getElementById("span-about");
const span_portfolio = document.getElementById("span-portfolio");
const span_contact = document.getElementById("span-contact");

const span_array = [span_home, span_about, span_portfolio, span_contact];



for (let i = 0; i < btn_array.length; i++) {


    btn_array[i].addEventListener('mouseenter', () => {

        enter(span_array[i])
    })

    btn_array[i].addEventListener('click', (e) => {

        click(span_array[i])
    })

    btn_array[i].addEventListener('mouseleave', (e) => {

        leave(span_array[i])
    })
}


function enter(element) {

    if (element.classList.contains('active')) {
        return;
    }

    element.style.width = "100%";
    element.style.padding = "0 20px";
}

function leave(element) {
    if (element.classList.contains('active')) {
        return;
    }
    element.style.width = "0";
    element.style.padding = "0";
}

function click(element) {

    for (let i = 0; i < span_array.length; i++) {

        span_array[i].classList.add('inactive');
        span_array[i].classList.remove('active');
        leave(span_array[i]);
    }

    enter(element)
    element.classList.add('active');
    element.classList.remove('inactive');


}



function nextPage(element){

    $margin = $(element).css('margin-left')
    $(element).css('margin-left', $margin + " - 100vw")

}

function previousPage(){

}