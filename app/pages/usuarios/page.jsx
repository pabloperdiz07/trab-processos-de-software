"use client";

import React, { useState, useEffect } from 'react';
import styles from './usuarios.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';
import ListedUser from './ListedUser';

const Usuarios = () => {
    const [users, setUsers] = useState([{
        name: "Pablo Perdiz",
        email: "pabloperdiz@email.com",
        createdAt: "07/01/2022",
        lastAccess: "29/11/2024",
        isActive: true
    }]);
    const [actualPage, setActualPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        searchUser(limit);
        if (users.length > 0) {
            const ultimaPagina = Math.ceil(users.length / limit);
            setLastPage(ultimaPagina);
        };
    }, [users]);

    const searchUser = (value) => {
        console.log('O limite atual é : ' + value)
    }

    const limitChange = async (value) => {
        setLimit(value);
        console.log(value);
        searchUser(value);
    }

    return (
        <div className={styles.pageContent} role="main">
            <Sidebar
                selectedItem={'usuarios'}
            />
            <TopNav
                title={'Usuário'}
            />
            <main className={styles.mainContent}>
                <div className={styles.contentBox}>
                    <div className={styles.actionBar}>
                        <a href={'/pages/usuarios/usuario'} className={styles.addUserBtn}>
                            Adicionar novo usuario
                            <img src="/assets/images/img/plus-icon.svg" alt="" width="16" height="16" />
                        </a>
                    </div>
                    <div className={styles.filterBar}>
                        <div>
                            <div className={styles.displaySelect}>
                                <select onChange={(e) => limitChange(e.target.value)} aria-label="Número de usuarios por página">
                                    <option value={5}>Exibir 5 usuarios</option>
                                    <option value={10}>Exibir 10 usuarios</option>
                                    <option value={20}>Exibir 20 usuarios</option>
                                </select>
                            </div>
                            {/* <button className={styles.actionBtn}>
                                Exportar
                                <img src="/assets/images/img/export-icon.svg" alt="" width="16" height="16" />
                            </button> */}
                        </div>
                        <div className={styles.userSearch}>
                            <div className={styles.searchInput}>
                                <img src="/assets/images/img/search-icon.svg" alt="" width="20" height="20" />
                                <input type="search" placeholder="Pesquisar usuario.." aria-label="Pesquisar usuario" />
                            </div>
                            <button className={styles.filterBtn} aria-label="Filtro">
                                <img src="/assets/images/img/filter_list.svg" alt="" width="24" height="24" />
                            </button>
                        </div>
                    </div>

                    <div role="table" aria-label="Lista de clientes" className={styles.userTable}>
                        <div role="row" className={styles.tableHeader}>
                            <div role="columnheader">Usuário</div>
                            <div role="columnheader">Email</div>
                            <div role="columnheader">Criado em</div>
                            <div role="columnheader">Último acesso</div>
                            <div role="columnheader">Status</div>
                            <div role="columnheader">Opções</div>
                        </div>
                        {users.length > 0 ?
                            users.map((user, index) => {
                                return (
                                    <ListedUser
                                        key={index}
                                        id={index}
                                        name={user.name}
                                        email={user.email}
                                        createdAt={user.createdAt}
                                        lastAccess={user.lastAccess}
                                        isActive={user.isActive}
                                    />
                                )
                            }) :
                            <p className={styles.notFound}>--| Nenhum usuário encontrado |--</p>
                        }
                    </div>

                    <div className={styles.pagination}>
                        <div className={styles.paginationInfo}>
                            {users.length > 0 ?
                                `Mostrando ${users.length == 0 ? 0 : (actualPage * limit) + 1}
                                 a ${(actualPage * limit) + 5 > users.length ? users.length % 5 : (actualPage * limit) + 5}
                                 de ${users.length}
                                `:
                                'Mostrando 0 a 0 de 0'
                            }
                        </div>
                        <div className={styles.paginationControls} role="navigation" aria-label="Paginação">
                            <button className={styles.pageBtn} aria-label="Página anterior">
                                <img src="/assets/images/img/chevron-left.svg" alt="" width="20" height="20" />
                            </button>
                            <div className={styles.pageBtns}>
                                {actualPage != 0 ?
                                    <button className={styles.pageBtn} aria-current="page">
                                        {actualPage}
                                    </button>
                                    : ''}
                                <button className={styles.pageBtnActive} aria-current="page">
                                    {actualPage + 1}
                                </button>
                                {lastPage - actualPage > 2 ?
                                    <button className={styles.pageBtn} aria-current="page">
                                        {actualPage + 2}
                                    </button>
                                    : ''}
                                {actualPage < lastPage - 3 ?
                                    <button className={styles.pageBtn} aria-current="page">
                                        ...
                                    </button>
                                    : ''}
                                {actualPage != lastPage - 1 ?
                                    <button className={styles.pageBtn} aria-current="page">
                                        {lastPage}
                                    </button>
                                    : ''}
                            </div>
                            <button className={styles.pageBtn} aria-label="Próxima página">
                                <img src="/assets/images/img/chevron-right.svg" alt="" width="20" height="20" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Usuarios;
