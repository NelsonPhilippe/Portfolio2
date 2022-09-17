const btn_home = document.getElementById("btn-home");
const btn_about = document.getElementById("btn-about");
const btn_portfolio = document.getElementById("btn-portfolio");
const btn_contact = document.getElementById("btn-contact");

const btn_array = [btn_home, btn_about, btn_portfolio, btn_contact];

const home_container = document.getElementById('home-container');
const about_container = document.getElementById('about-container');
const portfolio_container = document?.getElementById('portfolio-container');


const container_array = [home_container, about_container, portfolio_container];

let last_page;

let nav_carousel;

window.addEventListener('load', () => {
    nav_carousel = new Carousel(document.querySelector('#container'))

    if(nav_carousel.getIndex() === 0){
    }
})

for(let i = 0; i < btn_array.length; i++){
    btn_array[i].addEventListener('click', () => {
        nav_carousel.navigate(i, (index) => {
            btn_array.forEach((element) => {
                if(element.classList.contains('active')){
                    element.classList.remove('active')
                    btn_array[i].classList.add('active')
                }
            })

        })
    })
}

