import styles from './ProductList.module.css';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ data }) => {
    return (
        <ul className={styles.productList}>
            {data.map(data => (
                <ProductItem key={data.id} product={data} />
            ))}
        </ul>
    );
};

export default ProductList;
