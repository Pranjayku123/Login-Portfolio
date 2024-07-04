
async function getData() {
    const url = "data.json";
    try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        const container = document.getElementById('product-container');
        json.productKey.map(product => {
            if (product.Addition >= "03") {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <h2>${product["Product Name"]}</h2>
                    <p>Addition: ${product.Addition}</p>
                    <p>Sub Brand of: ${product["sub brand of"]}</p>
                    <p>Description: ${product.Description}</p>
                    <p>Price: ${product.Price}</p>
                `;
                container.appendChild(productDiv);
            }
        });
        console.log(json); 
    } catch (error) {
        console.error(error.message);
    }
}
getData();