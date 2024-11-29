import React from 'react';
import styles from './perfil.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import TopNav from '../../components/topNav/TopNav';

function ProfilePage() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <TopNav
                title={'Perfil'}
                innerNav={[
                    { name: 'Perfil', isSelected: true, link: 'perfil' },
                    { name: 'Suporte', isSelected: false, link: 'perfil' },
                    { name: 'Configurações', isSelected: false, link: 'perfil' }
                ]}
            />
            <div className={styles.mainContent}>
                <main>
                    <div className={styles.formBox}>

                        <div className={styles.formContainer}>
                            <div>
                                <label>Foto de perfil</label>
                                <div className={styles.profilePhotos}>
                                    <img src="/assets/images/Imagens-main/perfil.svg" alt="Foto de Perfil" className={styles.profilePhoto} />
                                    <img src="/assets/images/Imagens-main/editar-perfil.svg" alt="Editar Foto" className={styles.editProfilePhoto} />
                                </div>
                            </div>

                            <div>
                                <label>Nome Completo</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className={styles.inputField}
                                    placeholder="Digite seu nome completo"
                                />
                            </div>

                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className={styles.inputField}
                                    placeholder="exemplo@email.com"
                                />
                            </div>

                            <div>
                                <label>Data de Nascimento</label>
                                <input
                                    type="text"
                                    name="birthDate"
                                    className={styles.inputField}
                                    placeholder="DD/MM/YYYY"
                                />
                            </div>

                            <div>
                                <label>Telefone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className={styles.inputField}
                                    placeholder="Digite seu telefone"
                                />
                            </div>

                            <div>
                                <label>Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                    className={styles.inputField}
                                    placeholder="***********"
                                />
                            </div>

                            <div>
                                <label>Notificações</label>
                                <p>Permitir notificações por Telefone ou E-mail</p>
                                <div className={styles.notifications}>
                                    <input
                                        type="checkbox"
                                        name="phone"
                                    />
                                    <label className={styles.notificationOption}>
                                        Telefone
                                    </label>
                                    <input
                                        type="checkbox"
                                        name="email"
                                    />
                                    <label className={styles.notificationOption}>
                                        E-mail
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.btnCancelar}>Cancelar</button>
                        <button className={styles.btnSalvar}>Salvar</button>
                    </div >
                </main>

            </div >
        </div >
    );
}

export default ProfilePage;
