import styles from './ProductItem.module.css';
import { MdAddShoppingCart } from 'react-icons/md';

const ProductItem = ({ product }) => {
    const { image, name, category, price } = product;
    return (
        <li className={styles.productItem}>
            <picture>
                <source srcSet={image.desktop} media='(min-width: 1440px)' />
                <source srcSet={image.tablet} media='(min-width: 768px)' />
                <source srcSet={image.mobile} media='(max-width: 767px)' />
                <img className={styles.productImage} src={image.mobile} alt={name} />
            </picture>
            <button className={styles.productButton}>
                <MdAddShoppingCart className={styles.productButtonIcon} />
                Add to Cart
            </button>
            <p className={styles.productCategory}>{category}</p>
            <h2 className={styles.productTitle}>{name}</h2>
            <p className={styles.productPrice}>${price}</p>
        </li>
    );
};

export default ProductItem;
