const Card = () => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src='/img/heart-unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='1' />
            <h5>Чоловічі кросовки Nike Blazer Mid Suede</h5>
            <div className='cardContent'>
                <div className='cardPrice'>
                    <span>Ціна:</span>
                    <b>820 грн</b>
                </div>
                <button>
                    <img
                        width={11}
                        height={11}
                        src='/img/plus.svg'
                        alt='plus'
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
