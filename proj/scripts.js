const productsContainer = document.getElementById("products_container")
const seeNextPage = document.getElementById("see_more_bt")

let state = {
    nextPageUrl: ""
}

Number.prototype.toReal = function () {
    return this.toLocaleString('pt-br', { minimumFractionDigits: 2 });
}

fetcher = async (pageUrl) => {
    const response = await fetch(pageUrl)
    return await response.json()
}

productBuilder = ({ _, name, image, oldPrice, price, description, installments }) => {
    const product = document.createElement("div");
    product.className = "product";

    product.innerHTML = `
    <img src="${image}" alt="${name}" class="product_image">

    <div class="product_information">
        <span class="product_name">${name}</span>
        <span class="product_description">
            ${description}
        </span>

        <span class="product_price">
            <span class="original_price">De: R$${oldPrice.toReal()}</span>
            <span class="current_price">Por: R$${price.toReal()}</span>
            <span class="installment_price">ou ${installments.count}x de R$${installments.value.toReal()}</span>
        </span>
    </div>
    <button type="button" class="buy_product_bt">Comprar</button>`

    return product;
}

(renderer = async (pageUrl) => {
    const { products, nextPage } = await fetcher(pageUrl || "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1");

    let htmlProducts = products.map(prod => productBuilder(prod));

    htmlProducts.map(htmlProduct => {
        productsContainer.appendChild(htmlProduct)
    })

    return nextPage;
})()

seeNextPage.onclick = () => {
    renderer(state.nextPageUrl).then(nextPageUrl => state.nextPage = "https://" + nextPageUrl)
};