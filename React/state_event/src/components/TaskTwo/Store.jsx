import { Component } from 'react';
import products from './products';
import ColumnView from './ColumnView'; // расположение в столбик
import ListView from './ListView'; // расположение в строчку
import IconSwitch from './IconSwitch';


// основной класс
export default class Store extends Component {
    constructor(props) {
        super(props);
        this.products = products;
        this.state = { icon: 'view_module' };

        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {
        const { icon } = this.state;

        if (icon === "view_module") {
            console.log(`icon: ${icon}`);
            this.setState({ icon: 'view_list' })
        } else {
            console.log(`icon: ${icon}`);
            this.setState({ icon: 'view_module' })
        }
    }

    render() {
        const { icon } = this.state;

        return (
            <div className='container'>
                <IconSwitch icon={icon} onSwitch={this.onSwitch} />
                {icon === 'view_module' ? <ColumnView cards={products} /> : <ListView cards={products} />}
            </div>
        );
    }
}