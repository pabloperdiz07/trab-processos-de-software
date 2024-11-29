import React from 'react';
import styles from './produtos.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';
import ProductList from './ProductList';

const Produtos = () => {
    return (
        <div className="customer-list" role="main">
            <Sidebar
                selectedItem={'eCommerce'}
            />
            <TopNav
                title={'E-Commerce'}
                innerNav={[
                    { name: 'Clientes', isSelected: false, link: '/clientes' },
                    { name: 'Produtos', isSelected: true, link: '/produtos' },
                    { name: 'Formas de pagamento', isSelected: false, link: '/formasPagamento' }
                ]}
            />
            <main className={styles.mainContent}>
                <ProductList />
            </main>
        </div>
    );
};

export default Produtos;
