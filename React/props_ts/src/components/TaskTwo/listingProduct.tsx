import Listing from "./listing";
import etsy from "./etsy.json";
import './main.css';


function ListingProduct() {
    const processedItems = etsy.map(item => ({
        title: item.title || "No description",
        listing_id: item.listing_id || 0,
        url: item.url || "#",
        MainImage: item.MainImage ? item.MainImage.url_570xN : 'https://серебро.рф/img/placeholder.png',
        currency_code: item.currency_code || "-",
        price: item.price || "-",
        quantity: item.quantity || 0,
    }));

    return (
        <div className="container">
            <h2>Список товаров</h2>
            <Listing items={processedItems} />
        </div>
    )
}

export default ListingProduct;