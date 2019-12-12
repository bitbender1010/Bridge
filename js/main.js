let divi = document.querySelector('.divi');
let stepOne = document.querySelector('.step-one');
let modalContent = document.querySelector('.modal-content');

let post = document.querySelector('.post');
post.addEventListener('click', show);
/*show*/
function show(e) {
    document.querySelector('.bg-modal').style.display = "flex";
    /*show 2nd child*/
    divi.style.display = "block";
    
    modalContent.style.display = "flex";
    stepOne.style.display = "none";
    /*end*/
    window.scrollTo(0, 0);
    document.querySelector('body').style.overflow = "hidden";
    console.log('show');
    e.preventdefault();
}

/*cancel*/
let cancel = document.querySelector('#plus');
console.log('cancel');
cancel.addEventListener('click', close);

/*close*/
function close(e) {
    document.querySelector('.bg-modal').style.display = "none";
    document.querySelector('body').style.overflow = "scroll";
    console.log('close');
    e.preventdefault();
}

///////////////////////////////////////
/*Move to question 1*/
let next = document.querySelector('.next');
next.addEventListener('click', goNext);

function goNext() {
    //make current page fade & new ppae appear
    modalContent.style.display = "block";
    divi.style.display = "none";
    stepOne.style.display = "block";

    /*child node*/
     
}