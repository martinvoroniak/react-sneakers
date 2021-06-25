import React from 'react';

function Drawer() {
    return (
        <div style={{ display: 'none' }} className='overlay'>
            <div className='drawer'>
                <h2>
                    Корзина
                    <img src='/img/btn-remove.svg' alt='Remove' />
                </h2>

                <div className='items'>
                    <div className='cartItem'>
                        <img
                            className='imgCart'
                            width={70}
                            height={70}
                            src='/img/sneakers/1.jpg'
                            alt='Sneakers'
                        />
                        <div>
                            <p>Чоловічі кросовки Nike Blazer Mid Suede</p>
                            <b>1499</b>
                        </div>
                        <img
                            className='removeBtn'
                            src='/img/btn-remove.svg'
                            alt='Remove'
                        />
                    </div>
                </div>

                <div className='cartTotalBlock'>
                    <ul className='cartTotalBlock'>
                        <li>
                            <span>Загальна ціна:</span>
                            <div></div>
                            <b>4650 грн.</b>
                        </li>
                        <li>
                            <span>Податок 20%:</span>
                            <div></div>
                            <b>930 грн.</b>
                        </li>
                        <button className='greenButton'>
                            Створити замовллення?
                            <img src='/img/arrow.svg' alt='Arrow' />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
