document.addEventListener("DOMContentLoaded", () => {

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



    const getData = () => {
        fetchProductsData().then(text => {
            console.log(text.products);
        })
    }

    getData()






})