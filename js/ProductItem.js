export default class ProductItem {
    constructor(code, name, description, amount, price) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
    }
    get totalCost() {
        return this.price * this.amount;
    }
    set totalAmount(amount) {
        if (typeof amount !== 'number')
            throw new Error('The amount most be a number');
        this.amount = amount;
    }
    get htmlElement() {
        const row = document.createElement('tr');
        const codeCell = document.createElement('td');
        const nameCell = document.createElement('td');
        const descCell = document.createElement('td');
        const amounCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const merValCell = document.createElement('td');
        codeCell.textContent = this.code;
        nameCell.textContent = this.name;
        descCell.textContent = this.description;
        amounCell.textContent = this.amount.toString();
        priceCell.textContent = this.price.toString();
        merValCell.textContent = this.totalCost.toString();
        row.append(codeCell, nameCell, descCell, amounCell, priceCell, merValCell);
        return row;
    }
}
//# sourceMappingURL=ProductItem.js.map