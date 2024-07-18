import './css/ListViewItem.css';


export default function ListViewItem(props) {
    const { card } = props;

    return (
        <div className='product-list'>
            <img className='img-list' src={card.img} alt={card.name} />
            <h3 className='product-name-list'>{card.name}</h3>
            <div className='product-color-list'>{card.color}</div>
            <div className='product-price-list'>${card.price}</div>
            <button className='add-btn-list'>Add to card</button>
        </div>
    )
}