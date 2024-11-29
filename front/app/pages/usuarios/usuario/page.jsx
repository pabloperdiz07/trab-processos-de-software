"use client";

import React, { useEffect, useState } from 'react';
import styles from '../usuarios.module.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import TopNav from '../../../components/topNav/TopNav';
import { forEach } from '../../../../../back/src/routes';

function Usuario() {
    const [userId, setUserId] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birthday: "",
        phone: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const paramId = urlParams.get('id');
            setUserId(paramId);

            if (paramId) {
                setEditMode(false); // Se existir userId, desabilita o modo de edição
                try {
                    const response = await fetch(`http://localhost:3008/user/${paramId}`, {
                        method: 'GET',
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setFormData(data);
                    }
                } catch (e) {
                    console.error('Erro ao buscar dados do usuário:', e);
                }
            } else {
                setEditMode(true); // Caso não tenha userId, ativa o modo de edição
            }

            setLoading(false); // Desativa o carregamento após a simulação de obtenção dos dados
        };

        fetchData();
    }, []); // Apenas executa na montagem do componente.



    const changeStatus = (status) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            isActive: status
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevFormData) => {
            if (type === 'checkbox') {
                const updatedArray = prevFormData[name] || [];
                if (checked) {
                    updatedArray.push(value);
                } else {
                    updatedArray.filter((item) => item !== value);
                }
                return {
                    ...prevFormData,
                    [name]: updatedArray,
                };
            }
            const actualValue = value === "false" ? false : value === "true" ? true : value;
            return {
                ...prevFormData,
                [name]: actualValue,
            };
        });
    };

    const createNewUser = async () => {
        const { name, email, birthday, phone } = formData
        if (name && email && birthday && phone) {
            try {
                const response = await fetch(`http://localhost:3008/user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    window.location.href = '/pages/usuarios';
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            alert('Todos os campos precisam estar preenchidos')
        }
    };

    const updateUser = async () => {
        const { name, email, birthday, phone } = formData
        if (name && email && birthday && phone) {
            try {
                const response = await fetch(`http://localhost:3008/user/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                if (response.ok) {
                    const data = await response.json();
                    setFormData(data)
                    setEditMode(false)
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            alert('Todos os campos precisam estar preenchidos')
        }
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
                                        {formData.isActive ? (
                                            <button onClick={() => changeStatus(false)} className={styles.btnStatusActive} disabled={!editMode}>
                                                Ativo
                                            </button>
                                        ) : (
                                            <button onClick={() => changeStatus(true)} className={styles.btnStatusInactive} disabled={!editMode}>
                                                Inativo
                                            </button>
                                        )}
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
                                                name="name"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="Digite seu nome completo"
                                                value={formData.name} // Agora o valor vem direto do estado
                                                onChange={handleChange}
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
                                                value={formData.email} // Agora o valor vem direto do estado
                                                onChange={handleChange}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        {userId && (
                                            <div>
                                                <label>Cadastrado em</label>
                                                <input
                                                    type="text"
                                                    name="createdAt"
                                                    className={styles.inputFieldDisabled}
                                                    placeholder="DD/MM/YYYY"
                                                    value={formData.createdAt}
                                                    readOnly
                                                    disabled
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div>
                                            <label>Data de Nascimento</label>
                                            <input
                                                type="text"
                                                name="birthday"
                                                className={editMode ? styles.inputField : styles.inputFieldDisabled}
                                                placeholder="DD/MM/YYYY"
                                                value={formData.birthday} // Agora o valor vem direto do estado
                                                onChange={handleChange}
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
                                                value={formData.phone} // Agora o valor vem direto do estado
                                                onChange={handleChange}
                                                disabled={!editMode}
                                            />
                                        </div>
                                        {userId && (
                                            <div>
                                                <label>Último acesso</label>
                                                <input
                                                    type="text"
                                                    name="lastAccess"
                                                    className={styles.inputFieldDisabled}
                                                    placeholder="DD/MM/YYYY"
                                                    value={formData.lastAccess}
                                                    readOnly
                                                    disabled
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.footer}>
                                {!userId ? (
                                    <>
                                        <a href={'/pages/usuarios'} className={styles.btnCancelar}>
                                            Cancelar
                                        </a>
                                        <button onClick={createNewUser} className={styles.btnSalvar}>
                                            Confirmar cadastro
                                        </button>
                                    </>
                                ) : editMode ? (
                                    <>
                                        <a href={`/pages/usuarios/usuario?id=${userId}`} className={styles.btnCancelar}>
                                            Cancelar
                                        </a>
                                        <button onClick={updateUser} className={styles.btnSalvar}>
                                            Salvar Alterações
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setEditMode(true)} className={styles.btnSalvar}>
                                            Editar informações
                                        </button>
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
