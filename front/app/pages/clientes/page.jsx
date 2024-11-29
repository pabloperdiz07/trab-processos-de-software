import React from 'react';
import styles from './clientes.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';
import CustomerList from './CustomerList';

const CLientes = () => {
    return (
        <div className={styles.pageContent} role="main">
            <Sidebar
                selectedItem={'eCommerce'}
            />
            <TopNav
                title={'E-Commerce'}
                innerNav={[
                    { name: 'Clientes', isSelected: true, link: '/clientes' },
                    { name: 'Produtos', isSelected: false, link: '/produtos' },
                    { name: 'Formas de pagamento', isSelected: false, link: '/formasPagamento' }
                ]}
            />
            <main className={styles.mainContent}>
                <CustomerList />
            </main>
        </div>
    );
};

export default CLientes;
