
import { useLoaderData } from 'react-router';
import Card from './Card';


const Cards = ({count}= null) => {
    const cardData = useLoaderData();
    const cards = [...cardData];
    const displayCards = count ? cards.filter( card => card.id <= count ) : cards;

    return (
        <div className='min-h-screen bg-gray-100 
                grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-5 sm:gap-6 p-4 sm:p-6 justify-items-center'>
            {
                displayCards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;