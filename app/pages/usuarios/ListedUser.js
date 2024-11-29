import React from 'react';
import styles from './usuarios.module.css';

export default function ListedUser() {
    return (
        <div role="row" className={styles.customerRow}>
            <div role="cell" className={styles.checkbox}>
                <input type="checkbox" aria-label="Selecionar Maria Eduarda" />
            </div>
            <div role="cell" className={styles.customerInfo}>
                <img src="/assets/images/img/avatar-maria.jpg" alt="" className={styles.customerAvatar} width="40" height="40" />
                <span>Maria Eduarda</span>
            </div>
            <div role="cell" className={styles.customerEmail}>maria@gmail.com</div>
            <div role="cell" className={styles.customerPhone}>55 71 99999999</div>
            <div role="cell" className={styles.customerOrders}>9</div>
            <div role="cell">
                <span className={styles.statusBadge}>ativo</span>
            </div>
            <div role="cell">
                <button className={styles.actionMenu} aria-label="Mais opções">
                    <img src="/assets/images/img/more-icon.svg" alt="" width="20" height="20" />
                </button>
            </div>
        </div>
    );
}
