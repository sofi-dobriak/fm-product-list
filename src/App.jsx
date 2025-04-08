import Container from './components/Container/Container';
import Title from './components/Title/Title';
import ProductList from './components/ProductList/ProductList';
import data from './assets/data.json';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
    return (
        <div className='app'>
            <Container>
                <div className='app-layout'>
                    <div className='menu-section'>
                        <Title />
                        <ProductList data={data} />
                    </div>
                    <div className='cart-section'>
                        <Cart />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default App;
