"use client";

import React, { useEffect, useState } from 'react';
import styles from '../usuarios.module.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import TopNav from '../../../components/topNav/TopNav';

function Usuario() {
    const [userId, setUserId] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [userInfo, setUserInfo] = useState({
        name: "Pablo Perdiz",
        email: "pabloperdiz@email.com",
        birthday: "07/01/2000",
        phone: "71 99999-8888",
        createdAt: "22/07/2022",
        lastAccess: "29/11/2024",
        isActive: false
    });

    useEffect(() => {
        // Acessando os parâmetros da URL após o carregamento do componente
        const urlParams = new URLSearchParams(window.location.search);
        const actionFromUrl = urlParams.get('id');
        setUserId(actionFromUrl);

        // Simulando o carregamento e configurando o estado de loading como false
        setLoading(false);
    }, []); // Executa apenas uma vez quando o componente monta

    const changeStatus = (status) => {
        setUserInfo(prevUserInfo => {
            return {
                ...prevUserInfo,
                isActive: status
            };
        });
    };

    return (
        <div className={styles.app}>
            <Sidebar selectedItem={'usuarios'} />
            <TopNav title={'Usuário'} />
            <div className={styles.mainContent}>
                <main>
                    {loading ? (
                        // Exibe um carregamento enquanto está buscando os dados
                        <div className={styles.loadingMessage}>Carregando...</div>
                    ) : (
                        <>
                            <div className={styles.formBox}>
                                {/* Se houver userId, exibe o conteúdo de edição */}
                                {userId ? (
                                    <div className={styles.actionBar}>
                                        <h3>Detalhamento</h3>
                                        {userInfo.isActive ?
                                            <button onClick={() => changeStatus(false)} className={styles.btnStatusActive} disabled={!editMode}>
                                                Ativo
                                            </button>
                                            : <button onClick={() => changeStatus(true)} className={styles.btnStatusInactive} disabled={!editMode}>
                                                Inativo
                                            </button>
                                        }
                                    </div>
                                ) : (
                                    <div className={styles.actionBar}>
                                        <h3>Cadastro</h3>
                                    </div>
                                )}

                                <div className={styles.formContainer}>
                                    <div>
                                        <div>
                                            <label>Nome Completo</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="Digite seu nome completo"
                                                value={userId ? userInfo.name : ''}
                                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="exemplo@email.com"
                                                value={userId ? userInfo.email : ''}
                                                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        {userId ? (
                                            <div>
                                                <label>Cadastrado em</label>
                                                <input
                                                    type="text"
                                                    name="createdAt"
                                                    className={styles.inputFieldDisabled}
                                                    placeholder="DD/MM/YYYY"
                                                    value={userInfo.createdAt} // Preenche com o valor do estado
                                                    readOnly // Pode ser apenas de leitura, já que não será editado
                                                    disabled
                                                />
                                            </div>
                                        ) : ''}
                                    </div>
                                    <div>
                                        <div>
                                            <label>Data de Nascimento</label>
                                            <input
                                                type="text"
                                                name="birthDate"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="DD/MM/YYYY"
                                                value={userId ? userInfo.birthday : ''}
                                                onChange={(e) => setUserInfo({ ...userInfo, birthDate: e.target.value })}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        <div>
                                            <label>Telefone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="Digite seu telefone"
                                                value={userId ? userInfo.phone : ''} // Preenche com o valor ou vazio se não existir
                                                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        {userId ? (
                                            <div>
                                                <label>Último acesso</label>
                                                <input
                                                    type="text"
                                                    name="lastAccess"
                                                    className={styles.inputFieldDisabled}
                                                    placeholder="DD/MM/YYYY"
                                                    value={userInfo.lastAccess} // Preenche com o valor do estado
                                                    readOnly // Pode ser apenas de leitura, já que não será editado
                                                    disabled
                                                />
                                            </div>
                                        ) : ''}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footer}>
                                {!userId ? (
                                    <>
                                        <a href={'/pages/usuarios'} className={styles.btnCancelar}>Cancelar</a>
                                        <button className={styles.btnSalvar}>Confirmar cadastro</button>
                                    </>
                                ) : editMode ? (
                                    <>
                                        <a href={`/pages/usuarios/usuario?id=${userId}`} className={styles.btnCancelar}>Cancelar</a>
                                        <button className={styles.btnSalvar}>Salvar Alterações</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setEditMode(true)} className={styles.btnSalvar}>Editar informações</button>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Usuario;
