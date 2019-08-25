var modalButton = document.querySelector('.button--order');
var order = document.querySelector('.modal-order');

modalButton.addEventListener('click', function () {
    order.classList.add('modal-order--on');
});
