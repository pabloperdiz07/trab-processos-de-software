import React from 'react';
import styles from './produtos.module.css';

export default function ProductList() {
    return (
        <div className={styles.productDiv} aria-label="Lista de produtos">
            <div className={styles.actionBar}>
                <button className={styles.addproductBtn}>
                    Adicionar novo produto
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
                    <select aria-label="Número de produtos por página">
                        <option>Exibir 5 produtos</option>
                        <option>Exibir 10 produtos</option>
                        <option>Exibir 20 produtos</option>
                    </select>
                </div>
                <div className={styles.productSearch}>
                    <div className={styles.searchInput}>
                        <img src="/assets/images/img/search-icon.svg" alt="" width="20" height="20" />
                        <input type="search" placeholder="Pesquisar produto..." aria-label="Pesquisar produto" />
                    </div>
                    <button className={styles.filterBtn} aria-label="Filtro">
                        <img src="/assets/images/img/filter_list.svg" alt="" width="24" height="24" />
                    </button>
                </div>
            </div>

            <div role="table" aria-label="Lista de produtos" className={styles.productTable}>
                <div role="row" className={styles.tableHeader}>
                    <div role="columnheader" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar todos os produtos" />
                    </div>
                    <div role="columnheader">Produto</div>
                    <div role="columnheader">Categoria</div>
                    <div role="columnheader">Data adicionada</div>
                    <div role="columnheader">Preço</div>
                    <div role="columnheader">Quantidade</div>
                    <div role="columnheader">Status</div>
                    <div role="columnheader">Opções</div>
                </div>

                <div role="row" className={styles.productRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Notebook 16 polegadas..." />
                    </div>
                    <div role="cell" className={styles.productInfo}>
                        <img src="/assets/images/notebook.jpg" alt="" className={styles.productAvatar} width="40" height="40" />
                        <span>Notebook 16 polegadas...</span>
                    </div>
                    <div role="cell" className={styles.productCategory}>Eletrônicos</div>
                    <div role="cell" className={styles.productDate}>11/02/2022</div>
                    <div role="cell" className={styles.productValue}>R$ 2448.99</div>
                    <div role="cell" className={styles.productQuantity}>88</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell" className={styles.actionsMenu}>
                        <button className={styles.actionMenu} aria-label="Ver produto">
                            <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Editar Produto">
                            <img src="/assets/images/edit-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Deletar">
                            <img src="/assets/images/delete-icon.svg" alt="" width="14" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.productRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar White Cotton Sweater" />
                    </div>
                    <div role="cell" className={styles.productInfo}>
                        <img src="/assets/images/sweater.jpg" alt="" className={styles.productAvatar} width="40" height="40" />
                        <span>White Cotton Sweater</span>
                    </div>
                    <div role="cell" className={styles.productCategory}>Informática</div>
                    <div role="cell" className={styles.productDate}>11/02/2022</div>
                    <div role="cell" className={styles.productValue}>R$ 32.19</div>
                    <div role="cell" className={styles.productQuantity}>50</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell" className={styles.actionsMenu}>
                        <button className={styles.actionMenu} aria-label="Ver produto">
                            <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Editar Produto">
                            <img src="/assets/images/edit-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Deletar">
                            <img src="/assets/images/delete-icon.svg" alt="" width="14" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.productRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Black Head Phones" />
                    </div>
                    <div role="cell" className={styles.productInfo}>
                        <img src="/assets/images/headphones.jpg" alt="" className={styles.productAvatar} width="40" height="40" />
                        <span>Black Head Phones</span>
                    </div>
                    <div role="cell" className={styles.productCategory}>Acessórios</div>
                    <div role="cell" className={styles.productDate}>08/16/2022</div>
                    <div role="cell" className={styles.productValue}>R$ 206.00</div>
                    <div role="cell" className={styles.productQuantity}>4</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>inativo</span>
                    </div>
                    <div role="cell" className={styles.actionsMenu}>
                        <button className={styles.actionMenu} aria-label="Ver produto">
                            <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Editar Produto">
                            <img src="/assets/images/edit-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Deletar">
                            <img src="/assets/images/delete-icon.svg" alt="" width="14" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.productRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Frank Ocean" />
                    </div>
                    <div role="cell" className={styles.productInfo}>
                        <img src="/assets/images/shoes.jpg" alt="" className={styles.productAvatar} width="40" height="40" />
                        <span>Nike Running Shoes</span>
                    </div>
                    <div role="cell" className={styles.productCategory}>Acessórios</div>
                    <div role="cell" className={styles.productDate}>08/16/2022</div>
                    <div role="cell" className={styles.productValue}>R$ 150.99</div>
                    <div role="cell" className={styles.productQuantity}>12</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>ativo</span>
                    </div>
                    <div role="cell" className={styles.actionsMenu}>
                        <button className={styles.actionMenu} aria-label="Ver produto">
                            <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Editar Produto">
                            <img src="/assets/images/edit-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Deletar">
                            <img src="/assets/images/delete-icon.svg" alt="" width="14" height="20" />
                        </button>
                    </div>
                </div>

                <div role="row" className={styles.productRow}>
                    <div role="cell" className={styles.checkbox}>
                        <input type="checkbox" aria-label="Selecionar Smart Watch - Black Belt" />
                    </div>
                    <div role="cell" className={styles.productInfo}>
                        <img src="/assets/images/smartwatch.jpg" alt="" className={styles.productAvatar} width="40" height="40" />
                        <span>Smart Watch - Black Belt</span>
                    </div>
                    <div role="cell" className={styles.productCategory}>Eletrônicos</div>
                    <div role="cell" className={styles.productDate}>08/16/2022</div>
                    <div role="cell" className={styles.productValue}>R$ 360.00</div>
                    <div role="cell" className={styles.productQuantity}>4</div>
                    <div role="cell">
                        <span className={styles.statusBadge}>inativo</span>
                    </div>
                    <div role="cell" className={styles.actionsMenu}>
                        <button className={styles.actionMenu} aria-label="Ver produto">
                            <img src="/assets/images/view-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Editar Produto">
                            <img src="/assets/images/edit-icon.svg" alt="" width="20" height="20" />
                        </button>
                        <button className={styles.actionMenu} aria-label="Deletar">
                            <img src="/assets/images/delete-icon.svg" alt="" width="14" height="20" />
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
