interface MarcupProps {
    item: {
        title: string;
        listing_id: number;
        url: string;
        MainImage: string;
        currency_code: string;
        price: string;
        quantity: number;
    }
}

function Product(props: MarcupProps) {
    const { item } = props;

    const currentPrice = (currency: string, price: string) => {
        if (currency === 'USD') { return `$${price}`; }
        if (item.currency_code === "EUR") { return `€${price}`; }
        return `${currency} ${price}`;
    }

    const currentQuantity = (quantuty: number) => {
        if (quantuty <= 10) { return "level-low"; }
        if (quantuty <= 20) { return "level-medium"; }
        return "level-high";
    }

    return (
            <div className="item" id={item.listing_id + ''}>
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage} alt={item.title} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{currentPrice(item.currency_code, item.price)}</p>
                    <p className={`item-quantity ${currentQuantity(item.quantity)}`}>{item.quantity} left</p>

                </div>
            </div>
    )
}

export default Product;