import ProductItem from './ProductItem.js';
const addProduct = (productList) => {
    const form = document.querySelectorAll('#form-product .form-group input');
    productList.addItem(new ProductItem(form[0].value, form[1].value, form[2].value, Number(form[3].value), Number(form[4].value)));
};
const deleteProduct = (productList) => {
    const codeInput = document.querySelector('#form-code .form-group input');
    productList.deleteByCode(codeInput.value);
};
const findProduct = (productList) => {
    const codeInput = document.querySelector('#form-code .form-group input');
    productList.findByCode(codeInput.value);
};
const addProductInPosition = (productList) => {
    const formProduct = document.querySelectorAll('#form-product .form-group input');
    const codeInput = document.querySelector('#form-code .form-group input');
    productList.insertInPosition(Number(codeInput), new ProductItem(formProduct[0].value, formProduct[1].value, formProduct[2].value, Number(formProduct[3].value), Number(formProduct[4].value)));
};
export default function loadFormTriggers(productList) {
    const btnSendAction = document.querySelector('#btn-send-action');
    btnSendAction.addEventListener('click', () => {
        const action = btnSendAction.dataset.action;
        switch (action) {
            case 'add':
                addProduct(productList);
                break;
            case 'delete':
                deleteProduct(productList);
                break;
            case 'find':
                findProduct(productList);
                break;
            case 'add-in-position':
                addProductInPosition(productList);
                break;
            default:
                alert('Fuck');
                break;
        }
    });
}
//# sourceMappingURL=ProductFormTriggers.js.map