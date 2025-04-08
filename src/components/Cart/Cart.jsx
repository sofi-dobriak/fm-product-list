import styles from './Cart.module.css';
import emprtCart from '../../../public/images/illustration-empty-cart.svg';

const Cart = () => {
    return (
        <div className={styles.cardWrapper}>
            <h2 className={styles.cartTitle}>Your cart (0)</h2>
            <img className={styles.cardEmptyImage} src={emprtCart} alt='Empty cart' />
            <p className={styles.cardEmptyDescription}>Your added items will appear here</p>
        </div>
    );
};

export default Cart;
