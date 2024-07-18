import './css/ColumnViewItem.css';


export default function ColumnViewItem(props) {
    const { card } = props;

    return (
        <div className='product'>
            <img src={card.img} alt={card.name} />
            <h3 className='product-name'>{card.name}</h3>
            <div className='product-color'>{card.color}</div>
            <div className='product-price'>${card.price}</div>
            <button className='add-btn'>Add to card</button>
        </div>
    )
}