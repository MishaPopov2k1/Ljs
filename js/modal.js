const moreElem = document.querySelectorAll('.more');
const modalELem = document.querySelector('.modal');

const openModal = () => {
    modalELem.classList.remove('hidden');
};
const closeModal = () => {
    modalELem.classList.add('hidden');
};

//moreElem.addEventListener('click', openModal);
modalELem.addEventListener('click', (event) => {
    console.log(event.target);
    const target = event.target;

    if (target.classList.contains('overlay') ||
        target.classList.contains('modal__close')) {
        closeModal();
    }
})


moreElem.forEach((btn)=> {
    btn.addEventListener('click', (event)=>{
        openModal()
    })
})