function App() {
    return (
        <div className='wrapper clear'>
            <header>
                <div className='headerLeft'>
                    <img width={50} height={50} src="/img/logo.png" alt='logo' />
                    <div className='headerInfo'>
                        <h3>React sneakers</h3>
                        <p>Магазин найкращих кросівок</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img width={18} height={18} src="/img/cart.svg" alt='cart' />
                        <span>1300 грн</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt='user' />
                    </li>
                </ul>
            </header>
            <div className='content'>
                <h1> Всі кросовки </h1>

                <div className='sneakers'>
                <div className='card'>
                    <img width={133} height={112} src='/img/sneakers/1.jpg' alt='1' />
                    <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
                    <div className='cardContent'>
                        <div className='cardPrice'>
                            <span>Ціна:</span>
                            <b>820 грн</b>
                        </div>
                        <button>
                            <img width={11} height={11} src='/img/plus.svg' alt='plus' />
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <img width={133} height={112} src='/img/sneakers/2.jpg' alt='1' />
                    <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
                    <div className='cardContent'>
                        <div className='cardPrice'>
                            <span>Ціна:</span>
                            <b>820 грн</b>
                        </div>
                        <button>
                            <img width={11} height={11} src='/img/plus.svg' alt='plus' />
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <img width={133} height={112} src='/img/sneakers/3.jpg' alt='1' />
                    <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
                    <div className='cardContent'>
                        <div className='cardPrice'>
                            <span>Ціна:</span>
                            <b>820 грн</b>
                        </div>
                        <button>
                            <img width={11} height={11} src='/img/plus.svg' alt='plus' />
                        </button>
                    </div>
                </div>
                <div className='card'>
                    <img width={133} height={112} src='/img/sneakers/4.jpg' alt='1' />
                    <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
                    <div className='cardContent'>
                        <div className='cardPrice'>
                            <span>Ціна:</span>
                            <b>820 грн</b>
                        </div>
                        <button>
                            <img width={11} height={11} src='/img/plus.svg' alt='plus' />
                        </button>
                    </div>
                </div>
                </div>



            </div>
        </div>
    );
}

export default App;
