import './css/ListView.css';
import ListViewItem from './ListViewItem';


// расположение в строчку
export default function ListView(props) {
    const { cards } = props;

    return (
        <div className='view-list'>
            {cards.map((card, index) => <ListViewItem key={index} card={card} />)}
        </div>
    )
}