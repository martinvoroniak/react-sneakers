import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
    {
        id: 1,
        title: 'Чоловічі кросовки Nike Blazer Mid Suede',
        price: 1200,
        imgUrl: '/img/sneakers/1.jpg',
    },
    {
        id: 2,
        title: 'Чоловічі кросовки Nike Air Max 270',
        price: 1350,
        imgUrl: '/img/sneakers/2.jpg',
    },
    {
        id: 3,
        title: 'Чоловічі кросовки Nike Blazer ling',
        price: 1860,
        imgUrl: '/img/sneakers/3.jpg',
    },
    {
        id: 4,
        title: 'Чоловічі кросовки Puma X Aka Boku Future Rider',
        price: 1040,
        imgUrl: '/img/sneakers/4.jpg',
    },
];

function App() {
    return (
        <div className='wrapper clear'>
            <Drawer />
            <Header />
            <div className='content'>
                <div className='search-block'>
                    <h1> Всі кросовки </h1>
                    <div className='search-form'>
                        <img src='/img/search.svg' alt='search' />
                        <input placeholder='Пошук...' />
                    </div>
                </div>

                <div className='sneakers'>
                    {arr.map((obj) => (
                        <Card
                            key={obj.id}
                            title={obj.title}
                            price={obj.price}
                            imgUrl={obj.imgUrl}
                            priKlicke={() => window.confirm(`ви хочете купити ${obj.title} ?`)}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
