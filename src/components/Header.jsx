import React from 'react'

function Header() {
    return (
        <header>
                <div className='headerLeft'>
                    <img
                        width={50}
                        height={50}
                        src='/img/logo.png'
                        alt='logo'
                    />
                    <div className='headerInfo'>
                        <h3>React sneakers</h3>
                        <p>Магазин найкращих кросівок</p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src='/img/cart.svg'
                            alt='cart'
                        />
                        <span>1300 грн</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src='/img/user.svg'
                            alt='user'
                        />
                    </li>
                </ul>
            </header>
    )
}

export default Header
