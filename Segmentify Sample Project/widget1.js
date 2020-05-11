document.addEventListener("DOMContentLoaded", () => {


    
    const leftClick = document.querySelector("#leftclick");
    const rightClick = document.querySelector("#rightclick");
    const contentRow = document.querySelector("#contentrow");
    let index = 0;




    const fetchProductsData1 = () => {

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
        fetchProductsData1().then(text => {
            const products = text.products;
            for (let i = index; i < index + 4; i++) {
                let discountRate = Math.round(100 - (products[i].price / products[i].oldPrice * 100));
                let icon = "";
                let date = Math.round(products[i].lastUpdateTime - products[i].insertTime) / 1000 / 60 / 60 / 24;
                let isNew = "";

                if (isNaN(discountRate)) {
                    discountRate = "";
                } else {
                    discountRate = "-" + discountRate + "%";
                }

                if (products[i].params.likeCount !== "") {
                    icon = "<i class='fas fa-heart'></i>" + " " + products[i].params.likeCount;
                }

                if (date <= 14) {
                    isNew = "NEU";
                }


                contentRow.innerHTML += `
                        <div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <div class="body">
                                    <div class="row">
                                        <div class="col-2">
                                            <div class="card-text badge badge-danger">${discountRate}</div>
                                            <div class="card-text badge">${icon}</div>
                                            <div class="card-text badge badge-dark">${isNew}</div>
                                        </div>
                                        <div class="col-8">
                                            <div class="card-text">
                                                <a class="d-flex justify-content-center" href="${products[i].url}" target="_blank">
                                                    <img src="${products[i].image}" alt="${products[i].productId}" style="height: 200px; width:75px;">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-2"></div>
                                    </div>
                                <div class="card-body">
                                    <div class="card-title mt-3  text-center"><b>${products[i].name}</b></div>
                                    <div class="card-text text-muted">
                                        <p class="text-center">${products[i].categories[0]} | ${products[i].categories[1]} | ${products[i].categories[2]}</p>     
                                    </div>
                                    <div class="card-footer bg-white border-0 mt-4">
                                        <p class=" text-center">
                                            <b>${products[i].priceText}</b> <span class="text-danger"><del>${products[i].oldPriceText}</del></span> 
                                        </p>
                                        <small class="text-muted text-center">${products[i].params.basePrice}</small>
                                        </div>
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

    getData1(index);

    leftClick.addEventListener("click", leftClickFunction);
    rightClick.addEventListener("click", rightClickFunction);



})