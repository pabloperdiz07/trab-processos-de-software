"use client";

import React, { useState, useEffect } from 'react';
import styles from './usuarios.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';
import ListedUser from './ListedUser';

const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [lenUsers, setLenUsers] = useState(0);
    const [contains, setContains] = useState('')

    useEffect(() => {
        searchUsers('', 1, limit);
    }, []);

    useEffect(() => {
        if (lenUsers > 0) {
            const ultimaPagina = Math.ceil(lenUsers / limit);
            setLastPage(ultimaPagina);
        };
    }, [users]);

    const searchUsers = async (nameContains, page, limit) => {
        try {
            const response = await fetch(`http://localhost:3008/users?nameContains=${nameContains}&page=${page}&limit=${limit}`, {
                method: 'GET',
            })
            if (response.ok) {
                const data = await response.json();
                setUsers(data.users);
                setLastPage(data.pagination.totalPages)
                setActualPage(parseInt(data.pagination.currentPage))
                setLenUsers(data.pagination.totalUsers)
                console.log(data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const limitChange = async (value) => {
        setLimit(value);
        searchUsers(contains, 1, value);
    }

    const searchByName = (value) => {
        setContains(value)
        searchUsers(value, 1, limit);
    }

    const changePage = (value) => {
        searchUsers(contains, value, limit);
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
                        </div>
                        <div className={styles.userSearch}>
                            <div className={styles.searchInput}>
                                <img src="/assets/images/img/search-icon.svg" alt="" width="20" height="20" />
                                <input
                                    onBlur={(e) => searchByName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.target.blur(); // Simula o evento blur
                                        }
                                    }}
                                    type="search"
                                    placeholder="Pesquisar usuario.."
                                    aria-label="Pesquisar usuario"
                                />
                            </div>
                            {/* <button className={styles.filterBtn} aria-label="Filtro">
                                <img src="/assets/images/img/filter_list.svg" alt="" width="24" height="24" />
                            </button> */}
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
                        {lenUsers > 0 ?
                            users.map((user, index) => {
                                return (
                                    <ListedUser
                                        key={index}
                                        id={user._id}
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
                            {lenUsers > 0 ?
                                `Mostrando ${(actualPage - 1) * limit}
                                 a ${(actualPage * limit) > lenUsers ? lenUsers : (actualPage * limit)}
                                 de ${lenUsers}
                                `:
                                'Mostrando 0 a 0 de 0'
                            }
                        </div>
                        <div className={styles.paginationControls} role="navigation" aria-label="Paginação">
                            <button onClick={() => changePage(actualPage - 1)} className={styles.pageBtn} aria-label="Página anterior">
                                <img src="/assets/images/img/chevron-left.svg" alt="" width="20" height="20" />
                            </button>
                            <div className={styles.pageBtns}>
                                {actualPage != 1 ?
                                    <button onClick={() => changePage(actualPage - 1)} className={styles.pageBtn} aria-current="page">
                                        {actualPage - 1}
                                    </button>
                                    : ''}
                                <button className={styles.pageBtnActive} aria-current="page">
                                    {actualPage}
                                </button>
                                {lastPage - actualPage > 2 ?
                                    <button onClick={() => changePage(actualPage + 2)} className={styles.pageBtn} aria-current="page">
                                        {actualPage + 2}
                                    </button>
                                    : ''}
                                {actualPage < lastPage - 3 ?
                                    <button className={styles.pageBtn} aria-current="page">
                                        ...
                                    </button>
                                    : ''}
                                {actualPage != lastPage ?
                                    <button onClick={() => changePage(lastPage)} className={styles.pageBtn} aria-current="page">
                                        {lastPage}
                                    </button>
                                    : ''}
                            </div>
                            <button onClick={() => changePage(actualPage + 1)} className={styles.pageBtn} aria-label="Próxima página">
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
