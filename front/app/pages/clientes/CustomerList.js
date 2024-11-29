import React from 'react';
import styles from './clientes.module.css';

export default function CustomerList() {
    return (
        <div className={styles.customerDiv} aria-label="Lista de clientes">
            <div className={styles.actionBar}>
                <button className={styles.addCustomerBtn}>
                    Adicionar novo cliente
                    <img src="/assets/images/img/plus-icon.svg" alt="" width="16" height="16" />
                </button>
                <button className={styles.actionBtn}>
                    Importar
                    <img src="/assets/images/img/import-icon.svg" alt="" width="16" height="16" />
                </button>
                <button className={styles.actionBtn}>
                    Exportar
                    <img src="/assets/images/img/export-icon.svg" alt="" width="16" height="16" />
                </button>
            </div>

            <div className={styles.filterBar}>
                <div className={styles.displaySelect}>
                    <select aria-label="Número de clientes por página">
                        <option>Exibir 5 clientes</option>
                        <option>Exibir 10 clientes</option>
                        <option>Exibir 20 clientes</option>
                    </select>
                </div>
                <div className={styles.customerSearch}>
                    <div className={styles.searchInput}>
                        <img src="/assets/images/img/search-icon.svg" alt="" width="20" height="20" />
                        <input type="search" placeholder="Pesquisar cliente.." aria-label="Pesquisar cliente" />
                    </div>
                    <button className={styles.filterBtn} aria-label="Filtro">
                        <img src="/assets/images/img/filter_list.svg" alt="" width="24" height="24" />
                    </button>
                </div>
            </div>

            <div role="table" aria-label="Lista de clientes" className={styles.customerTable}>
                <div role="row" className={styles.tableHeader}>
                    <div role="columnheader" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar todos os clientes" />
                    </div>
                    <div role="columnheader">Clientes</div>
                    <div role="columnheader">Email</div>
                    <div role="columnheader">Telefone</div>
                    <div role="columnheader">Pedidos</div>
                    <div role="columnheader">Status</div>
                    <div role="columnheader">Opções</div>
                </div>

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

                <div role="row" className={styles.customerRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Maria Eduarda" />
                    </div>
                    <div role="cell" className={styles.customerInfo}>
                        <img src="/assets/images/img/avatar-harry.jpg" alt="" className={styles.customerAvatar} width="40" height="40" />
                        <span>Harry Styles</span>
                    </div>
                    <div role="cell" className={styles.customerEmail}>harry@gmail.com</div>
                    <div role="cell" className={styles.customerPhone}>55 71 99999999</div>
                    <div role="cell" className={styles.customerOrders}>2</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell">
                        <button className={styles.actionMenu} aria-label="Mais opções">
                            <img src="/assets/images/img/more-icon.svg" alt="" width="20" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.customerRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Maria Eduarda" />
                    </div>
                    <div role="cell" className={styles.customerInfo}>
                        <img src="/assets/images/img/avatar-melissa.jpg" alt="" className={styles.customerAvatar} width="40" height="40" />
                        <span>Melissa</span>
                    </div>
                    <div role="cell" className={styles.customerEmail}>melissa@gmail.com</div>
                    <div role="cell" className={styles.customerPhone}>55 71 99999999</div>
                    <div role="cell" className={styles.customerOrders}>4</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>inativo</span>
                    </div>
                    <div role="cell">
                        <button className={styles.actionMenu} aria-label="Mais opções">
                            <img src="/assets/images/img/more-icon.svg" alt="" width="20" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.customerRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Maria Eduarda" />
                    </div>
                    <div role="cell" className={styles.customerInfo}>
                        <img src="/assets/images/img/avatar-frank.jpg" alt="" className={styles.customerAvatar} width="40" height="40" />
                        <span>Frank Ocean</span>
                    </div>
                    <div role="cell" className={styles.customerEmail}>frank@gmail.com</div>
                    <div role="cell" className={styles.customerPhone}>55 71 99999999</div>
                    <div role="cell" className={styles.customerOrders}>1</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell">
                        <button className={styles.actionMenu} aria-label="Mais opções">
                            <img src="/assets/images/img/more-icon.svg" alt="" width="20" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.customerRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Liniker" />
                    </div>
                    <div role="cell" className={styles.customerInfo}>
                        <img src="/assets/images/img/avatar-liniker.jpg" alt="" className={styles.customerAvatar} width="40" height="40" />
                        <span>Liniker</span>
                    </div>
                    <div role="cell" className={styles.customerEmail}>liniker@gmail.com</div>
                    <div role="cell" className={styles.customerPhone}>55 71 99999999</div>
                    <div role="cell" className={styles.customerOrders}>33</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell">
                        <button className={styles.actionMenu} aria-label="Mais opções">
                            <img src="/assets/images/img/more-icon.svg" alt="" width="20" height="20" />
                        </button>
                    </div>
                </div>

            </div>

            <div className={styles.pagination}>
                <div className={styles.paginationInfo}>Mostrando 1 a 5 de 10398</div>
                <div className={styles.paginationControls} role="navigation" aria-label="Paginação">
                    <button className={styles.pageBtn} aria-label="Página anterior">
                        <img src="/assets/images/img/chevron-left.svg" alt="" width="20" height="20" />
                    </button>
                    <button className={styles.pageBtnActive} aria-current="page">
                        1
                    </button>
                    <button className={styles.pageBtn}>2</button>
                    <button className={styles.pageBtn}>3</button>
                    <button className={styles.pageBtn}>...</button>
                    <button className={styles.pageBtn}>2080</button>
                    <button className={styles.pageBtn} aria-label="Próxima página">
                        <img src="/assets/images/img/chevron-right.svg" alt="" width="20" height="20" />
                    </button>
                </div>
            </div>
        </div>
    );
}
