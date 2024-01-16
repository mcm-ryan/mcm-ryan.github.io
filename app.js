const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')

function pageTransitions(){
    // Btn click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtns[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('.active-btn', '');
            this.className += 'active-btn';
        })
    }
}
pageTransitions();