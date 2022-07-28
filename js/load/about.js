const about = document.getElementById('about');
const child_about = about.children;


$('#btn-about').click(() => {
    $('#container').empty();
    load_about()
})

function load_about(){
    let i = 0;
    while (child_about.length > i) {

        let balise = child_about[i].outerHTML
        $(balise).appendTo(".container");

        i++;

    }
}



