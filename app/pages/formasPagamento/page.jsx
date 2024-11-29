import React from 'react';
import styles from './formasPagamento.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';

function PaymentMethod({ id, label, logo, description }) {
    return (
        <div className={styles.method} id={id}>
            <div className={styles.methodToggle}>
                <div>
                    <input type="checkbox" />
                    <label htmlFor={id}>{label}</label>
                </div>
                {description && <p>{description}</p>}
            </div>
            <div className={styles.methodIcons}>
                {logo.map((src, index) => (
                    <img key={index} src={src} alt={label} />
                ))}
            </div>
        </div>
    );
}

function App() {

    const paymentOptions = [
        {
            id: 'm1',
            label: 'Pix',
            logo: ['/assets/images/img/pix-logo.svg'],
            description: null
        },
        {
            id: 'm2',
            label: 'Cartão de crédito',
            logo: ['/assets/images/img/elo.svg', '/assets/images/img/amex.svg', '/assets/images/img/mastercard.svg', '/assets/images/img/visa.svg'],
            description: 'Compras com cartão de crédito são permitidas apenas para valores acima de R$ 20,00'
        },
        {
            id: 'm3',
            label: 'Cartão de débito',
            logo: ['/assets/images/img/elo.svg', '/assets/images/img/amex.svg', '/assets/images/img/mastercard.svg', '/assets/images/img/visa.svg'],
            description: null
        },
        {
            id: 'm4',
            label: 'Paypal',
            logo: ['/assets/images/img/paypal-logo.svg'],
            description: null
        },
    ];

    return (
        <div className={styles.app}>
            <Sidebar
                selectedItem={'eCommerce'}
            />
            <TopNav
                title={'E-Commerce'}
                innerNav={[
                    { name: 'Clientes', isSelected: false, link: '/clientes' },
                    { name: 'Produtos', isSelected: false, link: '/produtos' },
                    { name: 'Formas de pagamento', isSelected: true, link: '/formasPagamento' }
                ]}
            />

            <main className={styles.mainContent}>
                <div className={styles.paymentOptions}>
                    <div className={styles.formasPagamento}>
                        <h3>Formas de pagamento</h3>
                    </div>

                    <div className={styles.allmethods}>
                        {paymentOptions.map((method) => (
                            <PaymentMethod
                                key={method.id}
                                id={method.id}
                                label={method.label}
                                logo={method.logo}
                                description={method.description}
                            />
                        ))}
                    </div>

                    <div className={styles.saveButtondiv}>
                        <button className={styles.saveButton}>Salvar edições</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
