function filterProducts() {
        // Get checkbox states
        const filterA = document.getElementById('filterA');
        const filterB = document.getElementById('filterB');
        const filterC = document.getElementById('filterC');
        
    // Get all products
    const products = document.querySelectorAll('.product-grid a');

        /*/ Uncheck the others if one is checked
        if (filterA.checked) {
            filterB.checked = false;
            filterC.checked = false;
        }
        if (filterB.checked) {
            filterA.checked = false;
            filterC.checked = false;
        }
        
        if (filterC.checked) {
            filterA.checked = false;
            filterB.checked = false;
        }*/
    
    

    // Loop through products and filter based on the selected type
    products.forEach(product => {
        const type = product.getAttribute('data-type');

        let showProduct = true;

        // Filter by product type
        if (filterA.checked && type !== 'A') showProduct = false;
        if (filterB.checked && type !== 'B') showProduct = false;
        if (filterC.checked && type !== 'C') showProduct = false;

        // Show or hide the product
        product.style.display = showProduct ? '' : 'none';
    });
}
