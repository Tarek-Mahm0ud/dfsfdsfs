
export default function CartItem({ item, setCart, cart }) {
    const { id, title, quantity , image , price} = item;

    const increaseQunatity = () => {
        const newCart = cart.map((el) => {
            if (el.id === id)
                return { ...el, quantity: el.quantity + 1 }
            return el;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }


    const decreaseQunatity = () => {
        const newCart = cart.map((el) => {
            if (el.id === id)
                return { ...el, quantity: el.quantity - 1 || 1 }
            return el;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }

    const deleteProduct = () => {
        const newCart = cart.filter((el) => el.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <>
            <div className="cartItem">
                <img src={image} alt="photo" width="300" height="300" />
                <div>{title}</div>
                {' '}
                <div>Quantity: {quantity}</div>
                {' '}
                <div>Price: {price * quantity}</div>
                <div className='iconsContainer'>
                    <p onClick={increaseQunatity}>+</p>
                    <p onClick={decreaseQunatity}>-</p>
                </div>
                <h1 style={{ marginTop: '20px', marginLeft: '10px', cursor: 'pointer' }} onClick={deleteProduct}>X</h1>
            </div>
            <br></br>
        </>
    )
}
