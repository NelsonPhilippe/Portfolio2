const btn_home = document.getElementById("btn-home");
const btn_about = document.getElementById("btn-about");
const btn_portfolio = document.getElementById("btn-portfolio");
const btn_contact = document.getElementById("btn-contact");

const btn_array = [btn_home, btn_about, btn_portfolio, btn_contact];


let last_page;

let nav_carousel;

window.addEventListener('load', () => {
    nav_carousel = new Carousel(document.querySelector('#container'), 'nav')

    let index = window.localStorage.getItem('last_page')

    if(index !== undefined){
        nav_carousel.setIndex(index)
        update_btn_state(btn_array.indexOf(btn_array[index]))

    }
})

for(let i = 0; i < btn_array.length; i++){
    btn_array[i].addEventListener('click', () => {
        last_page = i
        nav_carousel.navigate(i, (index) => {
            update_btn_state(i)
        })
    })
}

const update_btn_state = (index) => {
    btn_array.forEach((element) => {
        if(element.classList.contains('active')){
            element.classList.remove('active')
            btn_array[index].classList.add('active')
            window.localStorage.setItem('last_page', index)

        }
    })
}

