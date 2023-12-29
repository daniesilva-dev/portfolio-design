

function openTab(event, tabName) {

    let tabcontent = document.getElementsByClassName("tabcontent");
    
    for ( let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display ="none";
    }

    let tablinks = document.getElementsByClassName("tablinks");

    for ( let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

}

window.onload = () => {
    document.querySelectorAll('.tablinks')[0].click();
}



//Develop Image button
let revealImageI = document.querySelector('#revealImageI');
let hiddenImagesIllust = document.querySelectorAll('.image-none-illust');
let hiddenImagesDesign = document.querySelectorAll('.image-none-design');
revealImageI.addEventListener('click', function() {
    hiddenImagesIllust.forEach(function(image) {
        image.classList.add('image-reveal');
    });
    revealImageI.classList.add('image-none');
});



//FAQ

let accordion = document.querySelectorAll('.accordion');
for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
        //rotação icone seta
        let icon = this.querySelector('.fa-caret-down');
        if (icon) {
            icon.classList.toggle('rotate');
        }
    });
};
