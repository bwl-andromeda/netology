import Product from './product';


interface ListingProps {
    items: {
        title: string;
        listing_id: number;
        url: string;
        MainImage: string;
        currency_code: string;
        price: string;
        quantity: number;
    }[];
}

function Listing(props: ListingProps) {
    const { items } = props;

    const processedListing = items.map(item => {
        const title = item.title && item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title;
        return {
            ...item,
            title,
        }
    })

    return (
        <div className="item-list">
            { processedListing.map(item => < Product key={item.listing_id} item={item}/>) }
        </div>
    );

}

export default Listing;