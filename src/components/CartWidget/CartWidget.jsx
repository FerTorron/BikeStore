import './CartWidget.css'

function CartWidget() {
    return (
        <div className='cartDiv'>
            <img src="/src/assets/cartBasket.svg" alt="" />
            <span>5</span>
        </div>
    )
}

export default CartWidget