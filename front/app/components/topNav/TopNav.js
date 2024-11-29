import Link from 'next/link';
import styles from './topNav.module.css'
import React from 'react';

export default function TopNav({ title, innerNav = [] }) {
    return (
        <div className={styles.boxTopNav}>
            <div className={styles.topNav}>
                <div>
                    <img src="/assets/images/menu-icon.svg" alt="menu-icon" />
                    <div>
                        <img src="/assets/images/search-icon.svg" alt="menu-icon" />
                        <input type="text" placeholder="Pesquisar aqui..." />
                    </div>
                </div>
                <div className={styles.actions}>
                    <span>Português</span>
                    <div className={styles.cubo}>
                        <img src="/assets/images/img/Top_bar items.svg" alt="profile-pic" />
                    </div>
                    <div className={styles.cubo}>
                        <img src="/assets/images/img/No-notification.svg" alt="profile-pic" />
                    </div>
                    <Link
                        href={'/pages/perfil'}
                    >
                        <div className={styles.profilePicture}>
                            <img src="/assets/images/img/profile-pic.png" alt="profile-pic" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.subTopNav}>
                <h2>{title}</h2>
                <div className={styles.boxInnerNav}>
                    {innerNav.length > 0 && innerNav.map((item, index) => {
                        return (
                            <Link
                                href={`/pages/${item.link}`}
                                key={index}
                                className={item.isSelected ? styles.innerSelected : styles.innerNotSelected}>
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}