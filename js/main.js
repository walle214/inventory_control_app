import loadFormTriggers from './ProductFormTriggers.js';
import loadTriggersButtons from './Buttons.js';
import ProductList from './ProductList.js';
import ProductItem from './ProductItem.js';
const productList = new ProductList();
const a = new ProductItem('1', 'xcf', 'xcxc', 21, 4);
const b = new ProductItem('2', 'xcf', 'xcxc', 45, 4);
productList.addItem(a);
productList.addItem(b);
loadFormTriggers(productList);
loadTriggersButtons(productList);
//# sourceMappingURL=main.js.map