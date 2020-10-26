export default function loadTriggersButtons(productsList) {
    const addProduct = document.querySelector('#add-product'), deleteProduct = document.querySelector('#delete-product'), findProduct = document.querySelector('#find-product'), listProducts = document.querySelector('#list-products'), listProductsReverse = document.querySelector('#list-productsreverse'), addInPosition = document.querySelector('#add-in-position');
    const btnSendAction = document.querySelector('#btn-send-action');
    const labelAction = document.querySelector('#action');
    const clearInputs = (form) => {
        form.querySelectorAll('.form-group input').forEach((e) => {
            e.value = '';
        });
    };
    const toggleBtnSendAction = (visible) => {
        btnSendAction.style.display = visible ? 'block' : 'none';
    };
    const toggleFormProduct = (visible) => {
        const form = document.querySelector('#form-product');
        form.style.display = visible ? 'block' : 'none';
        clearInputs(form);
    };
    const toggleFormCode = (visible) => {
        const form = document.querySelector('#form-code');
        form.style.display = visible ? 'block' : 'none';
        clearInputs(form);
    };
    const toggleFormPosition = (visible) => {
        const form = document.querySelector('#form-position');
        form.style.display = visible ? 'block' : 'none';
        clearInputs(form);
    };
    addProduct.addEventListener('click', () => {
        btnSendAction.dataset.action = 'add';
        toggleFormCode(false);
        toggleFormPosition(false);
        toggleFormProduct(true);
        toggleBtnSendAction(true);
        labelAction.textContent = 'Añadir';
    });
    deleteProduct.addEventListener('click', () => {
        btnSendAction.dataset.action = 'delete';
        toggleFormCode(true);
        toggleFormPosition(false);
        toggleFormProduct(false);
        toggleBtnSendAction(true);
        labelAction.textContent = 'Eliminar por codigo';
    });
    findProduct.addEventListener('click', () => {
        btnSendAction.dataset.action = 'find';
        toggleFormCode(true);
        toggleFormPosition(false);
        toggleFormProduct(false);
        toggleBtnSendAction(true);
        labelAction.textContent = 'Encontrar por codigo';
    });
    listProducts.addEventListener('click', () => {
        toggleFormCode(false);
        toggleFormPosition(false);
        toggleFormProduct(false);
        toggleBtnSendAction(false);
        labelAction.textContent = 'Listar todos';
        productsList.listAll();
    });
    listProductsReverse.addEventListener('click', () => {
        toggleFormCode(false);
        toggleFormPosition(false);
        toggleFormProduct(false);
        toggleBtnSendAction(false);
        labelAction.textContent = 'Listar todos alreves';
        productsList.listAllReverse();
    });
    addInPosition.addEventListener('click', () => {
        btnSendAction.dataset.action = 'add-in-position';
        toggleFormCode(false);
        toggleFormPosition(true);
        toggleFormProduct(true);
        toggleBtnSendAction(true);
        labelAction.textContent = 'Insertar en una posicion';
    });
}
//# sourceMappingURL=Buttons.js.map