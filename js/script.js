async function getData() {
    try {
        let res = await fetch('http://localhost:3600/products');
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        let data = await res.json();

        console.log("Fetched Data:", data.products);

        // if (!Array.isArray(data)) {
        //     throw new Error("The fetched data is not an array");
        // }
        console.log(data[0]);
        // Process the data and update the HTML
        let html_data = '';
        let count = 0;
        data.products.forEach(product => {
            if (count >= 16) return;

            html_data += ` 
        <div class="product">
            <picture>
                <img src="${product.image}" alt="">
            </picture>
            <div class="detail">
                <div class="product-heading">
                    <h4>${product.name}</h4>
                </div>
                <div class="product-body">
                <ul>
                <li class="mt-3">${product.description}</li>
                <li><span>SIZES: </span>${product.sizes}</li>
                </ul>
                </div>
            </div>
            <div class="about-button">
                <a href="prodcts.html/${product.id}102030405051050" >More About</a>
            </div>
        </div>`;

            count++;
        });

    let html_dats2 = "";
        data.products.forEach(product => {

            html_dats2 += ` 
            <div class="col-md-3 justify-content-center ">
            <figure class="snip1423">
                <div class="img-div text-center " style="background-color: #f7f7f7;">
                    <img src="./img/products/apron1.png" class="w-50" alt="sample57" />
                </div>
                <figcaption>
                    <h3>${product.name} </h3>
                    <ul>
                        <li>
                        ${product.description}
                        </li>
                        <li class="mt-3">
                        ${product.sizes}
                        </li>
                    </ul>
                <a href="/${product.id}/586941235"></a>
            </figure>
        </div>`;
        });

        // Update the DOM
        document.getElementById('products-show').innerHTML = html_data;
        document.getElementById('produts-card').innerHTML = html_dats2;

    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
