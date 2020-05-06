document.addEventListener("DOMContentLoaded", () => {

    // First Widget

    const contentRow = document.querySelector("#contentrow");
    const leftClick = document.querySelector("#leftclick");
    const rightClick = document.querySelector("#rightclick");
    let index = 0;


    
    const fetchProductsData = () => {

        return fetch('./sample_products.json')
            .then(response => {
                return response.json()
            }).then(text => {
                return text
            })
            .catch(error => {
                console.log(error)
            })
    }



    const getData = (index) => {
        fetchProductsData().then(text => {
            const products = text.products;
            console.log(products);

            for (let i = index; i < index + 3; i++) {
                contentRow.innerHTML += `
                <div class="col-4">
                    <div class="card">
                        <a href="https://www.google.com">
                        <img src="${products[i].image}" alt=""style="height: 200px; width:100px; class="float-left">
                        </a>

                        <div class="card-title"><b>${products[i].name}</b></div>
                        <div class="card-text text-muted">
                            <span>${products[i].categories[0]} | ${products[i].categories[1]} | ${products[i].categories[2]}</span>     
                        </div>
                        <div class="card-footer bg-white border-0 mt-5 mx-0"><p>
                        <b>${products[i].priceText}</b> <span class="text-danger"><del>${products[i].oldPriceText}</del></span> 
                        </p>
                        <span class="text-muted">${products[i].params.basePrice}</span></div>
                    </div>
                </div>
            `
            }

        })
    }




    const leftClickFunction = () => {
        index--;
        contentRow.innerHTML = ""
        if (index >= 0) {
            getData(index)
        } else {
            index = 26;
            getData(index);
        }
    }


    const rightClickFunction = () => {
        index++;
        contentRow.innerHTML = ""
        if (index < 27) {
            getData(index)
        } else {
            index = 0;
            getData(index);
        }
    }


    leftClick.addEventListener("click", leftClickFunction);
    rightClick.addEventListener("click", rightClickFunction);

    getData(0);




    // Second Widget




})