import './css/ColumnView.css';
import ColumnViewItem from './ColumnViewItem';


// расположение в столбик
export default function ColumnView(props) {
    const { cards } = props;

    return (
        <div className='view-module'>
            {cards.map((card, index) => <ColumnViewItem key={index} card={card} />)}
        </div>
    )
}