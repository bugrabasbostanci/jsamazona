import Rating from '../components/Rating';
import { getProducts } from '../api';

const HomeScreen = {
  render: async () => {
    const products = await getProducts;
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
    return `
        <ul class="products">
        ${products
          .map(
            (product) => `
        <li>
              <!-- example product -->
              <div class="product">
                <!-- product image -->
                <a href="/#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}" />
                </a>
                <!-- product name -->
                <div class="product-name">
                  <a href="/#/product/1"> ${product.name} </a>
                </div>
                <!-- product rating -->
                <div>
                  ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                </div>
                <!-- product brand -->
                <div class="product-brand">${product.brand}</div>
                <!-- product price -->
                <div class="product-price">$${product.price}</div>
              </div>
        </li>
        `
          )
          .join('\n')}
        </ul>
        `;
  },
};

export default HomeScreen;
