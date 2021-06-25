import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
