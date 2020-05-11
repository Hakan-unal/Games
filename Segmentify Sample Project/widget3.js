document.addEventListener("DOMContentLoaded", () => {


    const widget3 = document.querySelector("#widget3");
    const leftClick = document.querySelector("#leftclick3");
    const rightClick = document.querySelector("#rightclick3");
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






    getData3 = (index) => {
        fetchProductsData().then(text => {
            const products = text.products;




            for (let i = index; i < index + 6; i++) {

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

                widget3.innerHTML += `
                <div class="col-sm-6 col-md-3 col-lg-2 mt-4">
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
                        <b>${products[i].priceText}</b> <span class="text-muted"><del>${products[i].oldPriceText}</del></span> 
                    </p>
                </div>
                <p class="text-muted text-center"><small>${products[i].params.basePrice}</small></p>

                </div>
                `;
            }

        });
    }





    const leftClickFunction = () => {
        index--;
        widget3.innerHTML = ""
        if (index >= 0) {
            getData3(index)
        } else {
            index = 26;
            getData3(index);
        }
    }


    const rightClickFunction = () => {
        index++;
        widget3.innerHTML = ""
        if (index < 27) {
            getData3(index)
        } else {
            index = 0;
            getData3(index);
        }
    }



    setInterval(() => {
        widget3.innerHTML = "";
        if (index < 27) {
            getData3(Math.round(Math.random() * 26));
        } else {
            index = 0;
            getData3(index);
        }

    }, 2500);




    leftClick.addEventListener("click", leftClickFunction)
    rightClick.addEventListener("click", rightClickFunction)
    getData3(index);


})