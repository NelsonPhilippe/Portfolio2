const arrow_left = document.getElementById('arrow-left')
const arrow_right = document.getElementById('arrow-right')


const carousel = document.getElementById('carousel')
const description = document.getElementById('description')

const carousel_1 = document.getElementById('carousel-1');
const carousel_2 = document.getElementById('carousel-2');
const carousel_3 = document.getElementById('carousel-3');
const carousel_4 = document.getElementById('carousel-4');

const desc_1 = document.getElementById('desc-1');
const desc_2 = document.getElementById('desc-2');
const desc_3 = document.getElementById('desc-3');
const desc_4 = document.getElementById('desc-4');

const img_list = [carousel_1, carousel_2, carousel_3, carousel_4];
const desc_list = [desc_1, desc_2, desc_3, desc_4]

let last_carousel = carousel_1;
let last_desc = desc_1;


let portfolio_carousel;
let portfolio_description_carousel;

window.addEventListener('load', () => {
    portfolio_description_carousel = new Carousel(document.querySelector('#description'),
        'description')
    portfolio_carousel = new Carousel(document.querySelector('#carousel-pf'), 'portfolio', {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: true
    }, portfolio_description_carousel)
    portfolio_carousel.createNavigation()

    // portfolio_description_carousel.createNavigation()
})



// $(arrow_right).click(() => {
//     $(last_carousel).css('left', '-100%')
//     $(last_desc).css('left', '-100%')
//
//
//     for (let i = 0; i < img_list.length; i++) {
//
//         if (i == (img_list.length - 1)) {
//             last_carousel = carousel_1;
//             last_desc = desc_1;
//             let pos = 0;
//             img_list.forEach(element => {
//                 if (element.id == last_carousel.id) {
//                     $(element).css('left', '0');
//                     return;
//                 }
//
//                 let left = 100 * (pos + 1) ;
//
//                 $(element).css('left', left + '%')
//
//                 pos++;
//             });
//
//             let pos2 = 0;
//             desc_list.forEach(element => {
//                 if (element.id == last_desc.id) {
//                     $(element).css('left', '0');
//                     return;
//                 }
//
//                 let left = 100 * (pos2 + 1) ;
//
//                 $(element).css('left', left + '%')
//
//                 pos2++;
//             });
//             break;
//         }
//
//
//         if (img_list[i].id == last_carousel.id) {
//
//             $(img_list[i + 1]).css('left', '0')
//             $(desc_list[i + 1]).css('left', '0')
//
//
//             let width = $(carousel).css('width');
//             let width_desc = $(description).css('width');
//
//
//
//             let left_car = $(img_list[i + 2]).css('left')
//             let left_desc = $(desc_list[i + 2]).css('left')
//
//
//             let new_left_car = parseInt(left_car) - (parseInt(width) * (i == 0 ? 1 : (i + 1)));
//             let new_left_desc = parseInt(left_desc) - (parseInt(width_desc) * (i == 0 ? 1 : (i + 1)));
//
//
//             $(img_list[i + 2]).css('left', new_left_car + "px")
//             $(desc_list[i + 2]).css('left', new_left_desc + "px")
//
//
//             last_carousel = img_list[i + 1];
//             last_desc = desc_list[i + 1]
//
//             break
//
//         }
//
//     }
//
// })
//
//
// $(arrow_left).click(() => {
//
//     for (let i = 0; i < img_list.length; i++) {
//
//         if (img_list[0].id === img_list[i].id) {
//             continue;
//         }
//
//
//         if (img_list[i].id == last_carousel.id) {
//
//             $(img_list[i - 1]).css('left', '0')
//             $(desc_list[i - 1]).css('left', '0')
//
//
//             let width = $(carousel).css('width');
//             let width_desc = $(description).css('width');
//
//
//             let left_car = $(img_list[i]).css('left')
//             let left_desc = $(desc_list[i]).css('left')
//
//             let new_left_car = parseInt(left_car) + (parseInt(width) * (i == 0 ? 1 : i));
//             let new_left_desc = parseInt(left_desc) + (parseInt(width_desc) * (i == 0 ? 1 : i));
//
//
//             $(img_list[i]).css('left', new_left_car + "px")
//             $(img_list[i + 1]).css('left', (new_left_car * 2) + "px")
//             $(img_list[i + 2]).css('left', (new_left_car * 3) + "px")
//
//
//             $(desc_list[i]).css('left', new_left_desc + "px")
//             $(desc_list[i + 1]).css('left', (new_left_desc * 2) + "px")
//             $(desc_list[i + 2]).css('left', (new_left_desc * 3) + "px")
//
//
//             last_carousel = img_list[i - 1];
//             last_desc = desc_list[i - 1]
//             break
//
//         }
//
//     }
//
// })