const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

console.log('openModalButtons', openModalButtons)

openModalButtons.forEach((button) => {
    console.log('xyz')
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        modal.classList.remove('active');
    })
    overlay.classList.remove('active');
})

function openModal(modal) {
    if(modal != null){
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModal(modal) {
    if(modal != null){
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
}

