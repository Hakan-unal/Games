document.addEventListener("DOMContentLoaded", () => {


    const contentRow = document.querySelector("#contentrow");
    const cardDeck = document.querySelector("#carddeck");
    const widget3 = document.querySelector("#widget3");
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



    const getData1 = (index) => {
        fetchProductsData().then(text => {
            const products = text.products;
            for (let i = index; i < index + 3; i++) {
                contentRow.innerHTML += `
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <a class="d-flex justify-content-center" href="${products[i].url}" target="_blank">
                        <img src="${products[i].image}" alt="${products[i].productId}" style="height: 200px; width:100px;">
                        </a>
                        <div class="card-body">
                            <div class="card-title mt-3  text-center"><b>${products[i].name}</b></div>
                            <div class="card-text text-muted">
                                <p class="text-center">${products[i].categories[0]} | ${products[i].categories[1]} | ${products[i].categories[2]}</p>     
                            </div>
                            <div class="card-footer bg-white border-0 mt-4"><p class=" text-center">
                            <b>${products[i].priceText}</b> <span class="text-danger"><del>${products[i].oldPriceText}</del></span> 
                            </p>
                            <p class="text-muted  text-center">${products[i].params.basePrice}</p></div>
                        </div>
                    </div>
                </div>
            `
            }

        })
    }



    const getData2 = (index) => {
        fetchProductsData().then(text => {

            const products = text.products;

            for (let i = index; i < index + 4; i++) {
                cardDeck.innerHTML += `
                <div class="card">
                <a class="d-flex justify-content-center" href="${products[i].url}" target="_blank">
                    <img class="" src="${products[i].image}" alt="${products[i].productId}" style="height:225px; width:100px;">
                </a>
                <div class="card-body">
                        <div class="card-title text-center"> <b>${products[i].name} </b></div>
                        <div class="card-text text-muted">
                            <p class="text-center">${products[i].categories[0]} | ${products[i].categories[1]} | ${products[i].categories[2]}</p>     
                        </div>
                    </div>
                    <div class="card-footer border-0 text-center">
                        <span class="text-success h3">${products[i].priceText}</span>
                        <small class="text-muted h5"><del>${products[i].oldPriceText} </del></small>
                    </div>
                </div>
            `
            }
        });
    }



    getData3 = (index) => {
        fetchProductsData().then(text => {
            const products = text.products;
            console.log(products);

            for (let i = index; i < index + 6; i++) {
                widget3.innerHTML += `
                <div class="col-sm-6 col-md-3 col-lg-2 mt-4">
                    <div class="card">
                        <a class="d-flex justify-content-center" href="${products[i].url}" target="_blank">
                        <img class="" src="${products[i].image}" alt="${products[i].productId}" style="height:225px; width:100px;">
                        </a>
                        <div class="card-body">
                            <div class="card-title text-center"> <b>${products[i].name} </b></div>
                            <div class="card-text text-muted">
                                <p class="text-center">${products[i].categories[0]} | ${products[i].categories[1]} | ${products[i].categories[2]}</p>     
                            </div>

                        </div>
                        <div class="card-footer border-0 text-center">
                            <span class="text-success h3">${products[i].priceText}</span>
                            <small class="text-danger h5"><del>${products[i].oldPriceText} </del></small>
                        </div>
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
            getData1(index)
        } else {
            index = 26;
            getData1(index);
        }
    }


    const rightClickFunction = () => {
        index++;
        contentRow.innerHTML = ""
        if (index < 27) {
            getData1(index)
        } else {
            index = 0;
            getData1(index);
        }
    }


    leftClick.addEventListener("click", leftClickFunction);
    rightClick.addEventListener("click", rightClickFunction);






    getData1(index);
    getData2(0);
    getData3(0);

    setInterval(() => {
        cardDeck.innerHTML = "";
        getData2(Math.round(Math.random() * 26));

    }, 2500);

})