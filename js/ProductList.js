export default class ProductList {
    constructor() {
        this.products = [];
        this.container = document.querySelector('#table-container');
    }
    printTable(products = this.products) {
        this.container.innerHTML = '';
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const hCode = document.createElement('th');
        const hName = document.createElement('th');
        const hDesc = document.createElement('th');
        const hCount = document.createElement('th');
        const hCost = document.createElement('th');
        const hMercVal = document.createElement('th');
        hCode.textContent = 'Código';
        hName.textContent = 'Nombre';
        hDesc.textContent = 'Descripción';
        hCount.textContent = 'Cantidad';
        hCost.textContent = 'Precio';
        hMercVal.textContent = 'Valor mercancia';
        headerRow.append(hCode, hName, hDesc, hCount, hCost, hMercVal);
        table.append(headerRow);
        for (const product of products) {
            table.append(product.htmlElement);
        }
        this.container.appendChild(table);
    }
    addItem(product) {
        if (this.products.length === 20) {
            alert('El numero maximo de items es 20');
            return;
        }
        this.products.push(product);
        this.printTable();
    }
    deleteByCode(code) {
        const newProducts = this.products.filter((p) => p.code !== code);
        if (this.products.length === newProducts.length) {
            alert('Codigo de producto no encontrado');
            return;
        }
        this.products = newProducts;
        this.printTable();
    }
    findByCode(code) {
        this.printTable(this.products.filter((p) => p.code === code));
    }
    listAll() {
        this.printTable();
    }
    listAllReverse() {
        const newProducts = this.products.reduce((prev, currentValue, currentIndex, array) => {
            prev[array.length - 1 - currentIndex] = currentValue;
            return prev;
        }, []);
        this.printTable(newProducts);
    }
    insertInPosition(position, product) {
        if (position < 1 || position > 20)
            alert('Posicion no válida, debe ser entre 1 y 20, incluidos');
        else if (position > this.products.length)
            alert('La posicion no puede ser mayor al numero de elementos');
        else if (this.products.length === 20)
            alert('El numero maximo de items es 20');
        else {
            this.products.splice(position, 0, product);
        }
        this.printTable();
    }
}
//# sourceMappingURL=ProductList.js.map