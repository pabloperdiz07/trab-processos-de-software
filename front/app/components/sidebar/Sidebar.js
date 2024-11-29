import styles from './sidebar.module.css'
import React from 'react';
import Link from 'next/link';

export default function Sidebar({ selectedItem }) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <img src="/assets/images/logo.svg" alt="Logo" />
                <h2>MechAdmin</h2>
            </div>
            <ul className={styles.menu}>
                <li className={selectedItem == 'dashboard' ? styles.navItemActive : styles.navItem}>
                    <img src="/assets/images/Imagens-nav/dashboard.svg" alt="Dashboard" className={styles.menuIcon} />
                    Dashboards
                </li>
                <li>
                    <Link className={selectedItem == 'eCommerce' ? styles.navItemActive : styles.navItem} href="/pages/clientes" >
                        <img src="/assets/images/Imagens-nav/e-commerce.svg" alt="E-Commerce" className={styles.menuIcon} />
                        E-Commerce
                    </Link>
                </li>
                <li className={selectedItem == 'financeiro' ? styles.navItemActive : styles.navItem}>
                    <img src="/assets/images/Imagens-nav/financeiro.svg" alt="Financeiro" className={styles.menuIcon} />
                    Financeiro
                </li>
                <li className={selectedItem == 'crm' ? styles.navItemActive : styles.navItem}>
                    <img src="/assets/images/Imagens-nav/crm.svg" alt="CRM" className={styles.menuIcon} />
                    CRM
                </li>
                <li className={selectedItem == 'cupons' ? styles.navItemActive : styles.navItem}>
                    <img src="/assets/images/Imagens-nav/cupons.svg" alt="Cupons" className={styles.menuIcon} />
                    Cupons
                </li>
                <li>
                    <Link className={selectedItem == 'usuarios' ? styles.navItemActive : styles.navItem} href="/pages/usuarios" >
                        <img src="/assets/images/Imagens-nav/usuarios.svg" alt="Usuários" className={styles.menuIcon} />
                        Usuários
                    </Link>
                </li>
            </ul>
        </div >
    );
}