import { Component } from 'react';
import './filters.css';
import cards from './listFilter';
import Toolbar from './toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.cards = cards;
        this.state = {
            projects: cards,
            selected: 'All',
        };

        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

// Обработчик события клик
// Принимает строку с названием фильтра.

    onSelectFilter(filter) {
        let cards = this.cards; //  дефолтное значение cards

        // Если фильтр не равен All, то cards фильтруется
        if (filter !== 'All') {
            cards = this.cards.filter(card => card.category === filter);
        }

        // Обновляем состояние projects и selected
        this.setState({
            projects: cards,
            selected: filter,
        })
    }

    render() {
        const { selected, projects } = this.state;

        return (
            <div className='container'>
                <Toolbar
                    filters={['All', 'Websites', 'Flayers', 'Business Cards']}
                    selected={selected}
                    onSelectFilter={this.onSelectFilter} />
                <ProjectList projects={projects}></ProjectList>
            </div>
        );
    }
}