
    document.addEventListener("DOMContentLoaded", function () {
        const productsPerPage = 6; // Number of products per page
        const products = [
            { img: "img/products/deliver-kit.png", name: "delivery kit", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/angio_kit.jpg", name: "delivery kit", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/apron1.png", name: "apron", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/isolation-gown.jpeg", name: "isolation gown", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/ot-table-sheet.png", name: "isolation gown", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/moppingpad.png", name: "moppingpad", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/patient.png", name: "Patient Gown", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
            { img: "img/products/SURGEONGOWN.png", name: "SURGEON GOWN", description: "SSMMS FABRIC BREATHABLE FABRIC,KNITTED CUFF,LINT FREE" },
        ];

        const totalPages = Math.ceil(products.length / productsPerPage);

        function renderProducts(page) {
            const start = (page - 1) * productsPerPage;
            const end = start + productsPerPage;
            const productsToDisplay = products.slice(start, end);

            const productsDisplay = document.getElementById("produts-display");
            productsDisplay.innerHTML = productsToDisplay.map(product => `
                <div class="col-6 col-sm-4 col-md-2 d-flex justify-content-center">
                    <div class="products-box position-relative">
                        <img src="${product.img}" alt="${product.name}">
                        <h6 class="pt-2 ps-5">${product.name}</h6>
                        <p class="text-start">${product.description}</p>
                        <button class="shop-btn">Shop Now</button>
                    </div>
                </div>
            `).join("");
        }

        function renderPagination() {
            const pagination = document.getElementById("pagination");
            pagination.innerHTML = `
                <li class="page-item"><a class="page-link" href="#" aria-label="Previous" onclick="changePage(1)">«</a></li>
                ${Array.from({ length: totalPages }, (_, i) => `
                    <li class="page-item ${i + 1 === 1 ? 'active' : ''}"><a class="page-link" href="#" onclick="changePage(${i + 1})">${i + 1}</a></li>
                `).join('')}
                <li class="page-item"><a class="page-link" href="#" aria-label="Next" onclick="changePage(${totalPages})">»</a></li>
            `;
        }

        window.changePage = function (page) {
            renderProducts(page);
            document.querySelectorAll(".page-item").forEach(item => item.classList.remove("active"));
            document.querySelectorAll(".page-item")[page].classList.add("active");
        };

        renderProducts(1);
        renderPagination();
    });
