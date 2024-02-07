function openModal() {
    const myModal = document.getElementById('myModal');
    myModal.style.display = 'block';
    myModal.style.opacity = '1';
    myModal.style.transition = '1s';
    myModal.style.zIndex = '1';

    const escapeKeyHandler = function(event) {
        if (event.key === 'Escape') {
            myModal.style.display = 'none';
            document.removeEventListener('keydown', escapeKeyHandler);
        }
    };
    document.addEventListener('keydown', escapeKeyHandler);
}

const openModalBtn = document.getElementsByClassName('openModalBtn')[0];
openModalBtn.addEventListener('click', openModal);

// Добавляем обработчик для закрытия модального окна
const closeModalBtn = document.querySelector('.modal .close');
closeModalBtn.addEventListener('click', function() {
    document.getElementById('myModal').style.transition = '1s';
    document.getElementById('myModal').style.opacity = '0';
    document.getElementById('myModal').style.transform = 'translateX(600px)';
    document.getElementById('myModal').style.transform = 'translateX(0px)';
    document.getElementById('myModal').style.zIndex = '-1';
    document.removeEventListener('keydown', escapeKeyHandler); // Удаляем обработчик нажатия клавиши Escape
});