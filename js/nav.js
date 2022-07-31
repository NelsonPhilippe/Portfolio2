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


const home_container = document.getElementById('home-container');
const about_container = document.getElementById('about-container');
const portfolio_container = document?.getElementById('portfolio-container');


const container_array = [home_container, about_container, portfolio_container];

let last_page;

$(document).ready(() => {
    last_page = "home-container";


    if(window.localStorage.getItem('last_btn') !== undefined && window.localStorage.getItem('last_btn') != null){

        last_btn = window.localStorage.getItem('last_btn');

        const last_btn_element = document.getElementById(window.localStorage.getItem('last_btn'));

        click(last_btn_element);
    }


    if(window.localStorage.getItem('last_page') !== undefined && window.localStorage.getItem('last_page') != null){

        last_page = window.localStorage.getItem('last_page');
        nextPage('home-container', last_page)
        return;
    }

    window.localStorage.setItem('last_btn', 'btn-home');
    window.localStorage.setItem('last_page', last_page)

})



for (let i = 0; i < btn_array.length; i++) {


    btn_array[i].addEventListener('mouseenter', (e) => {

        enter(span_array[i])
    })

    btn_array[i].addEventListener('click', (e) => {
        click(span_array[i])


        window.localStorage.setItem('last_btn', span_array[i].id)

        
        if(btn_array[i].id === "btn-home"){
            nextPage(last_page, 'home-container')
        }

        if(btn_array[i].id === "btn-about"){
            nextPage(last_page, 'about-container')
        }


        if(btn_array[i].id === "btn-portfolio"){
            nextPage(last_page, 'portfolio-container')
        }

        for(let c = 0; c < container_array.length; c++){
            const classlist = $(container_array[i]).attr("class").split(/\s+/);
            if(classlist.includes('visible')){
                last_page = classlist[0];
                window.localStorage.setItem('last_page', last_page);
                break;
            }
        }


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



function nextPage(last_page_id, new_page_id){
    const last_page_element = document.getElementById(last_page_id);
    const new_page_element = document.getElementById(new_page_id);
    let last_page = 0;
    let new_page = 0;

    for(let i = 0; i < container_array.length; i++){

        if(container_array[i].id === last_page_id){
            last_page = i;
        }

        if(container_array[i].id === new_page_id){
            new_page = i;
        }
    }

    if(last_page == new_page){
        return;
    }


    if(new_page > last_page){

        for(let i = 0; i <= new_page; i++){

            if(container_array[i].id != new_page_id){
                $(container_array[i]).css('left', '-100vw')

            }

        }


        $(new_page_element).css('left', '0')
        new_page_element.classList.add('visible')
        last_page_element.classList.remove('visible')
    }



    if(new_page < last_page){

        for(let i = new_page; i < last_page; i++){
            $(container_array[i]).css('left', '100vw')
        }



        $(last_page_element).css('left', '100vw')
        $(new_page_element).css('left', '0')
        last_page_element.classList.remove('visible')
        new_page_element.classList.add('visible')

    }

}
