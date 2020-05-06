const getProductsData = () => {

    return fetch('./sample_products.json')
        .then(response => {
            return response.json()
        }).then(text => {
            console.log(text);
        })
        .catch(error => {
            console.log(error);
        })
}


getProductsData().then(products => {
    console.log(products);
})