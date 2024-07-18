export const ItemFunc = ({ info }) => {
    const { brand, title, description, descriptionFull, currency, price } = info;

    return (
        <div className="main-content">
            <h2 style={{color: "red"}}>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{currency}{price.toFixed(2)}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}

export default ItemFunc;