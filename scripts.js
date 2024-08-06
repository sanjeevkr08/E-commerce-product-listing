// Sample product data
const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, image: 'images/smartphone.jpg' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 999, image: 'images/laptop.jpg' },
    { id: 3, name: 'T-shirt', category: 'clothing', price: 19, image: 'images/tshirt.jpg' },
    { id: 4, name: 'Jeans', category: 'clothing', price: 49, image: 'images/jeans.jpg' },
    { id: 5, name: 'Watch', category: 'accessories', price: 199, image: 'images/watch.jpg' },
    { id: 6, name: 'Sunglasses', category: 'accessories', price: 99, image: 'images/sunglasses.jpg' },
  ];
  
  // Function to display products based on category
  function displayProducts(category) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
  
    const filteredProducts = products.filter(product => product.category === category);
  
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
      `;
      productsGrid.appendChild(productElement);
    });
  }
  
  // Function to filter products by price
  function filterByPrice() {
    const priceRange = document.getElementById('price-range').value;
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
  
    const filteredProducts = products.filter(product => product.price <= priceRange);
  
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
      `;
      productsGrid.appendChild(productElement);
    });
  }
  
  // Event listener for price filter
  document.getElementById('price-range').addEventListener('input', filterByPrice);
  
  // Check for category in URL and display products
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  if (category) {
    displayProducts(category);
  }
  