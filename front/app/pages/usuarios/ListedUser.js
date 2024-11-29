import React from 'react';
import styles from './usuarios.module.css';

export default function ListedUser({
    id,
    name,
    email,
    createdAt,
    lastAccess,
    isActive
}) {
    return (
        <div role="row" className={styles.userRow}>
            <div role="cell" className={styles.userName}>{name}</div>
            <div role="cell" className={styles.userEmail}>{email}</div>
            <div role="cell" className={styles.userPhone}>{createdAt}</div>
            <div role="cell" className={styles.userOrders}>{lastAccess}</div>
            <div role="cell">
                <span className={isActive ?
                    styles.statusBadgeActive :
                    styles.statusBadgeInactive
                }>{isActive ? 'ativo' : 'inativo'}</span>
            </div>
            <div role="cell">
                <a href={`/pages/usuarios/usuario?id=${id}`} className={styles.actionMenu} aria-label="Ver usuário">
                    <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                </a>
            </div>
        </div>
    );
}
