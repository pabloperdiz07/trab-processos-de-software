const userRepository = require('./repository');
const boom = require('@hapi/boom');

const createUser = async (req, h) => {
    try {
        const userData = req.payload;
        const user = await userRepository.createUser(userData);
        return h.response(user).code(201);
    } catch (e) {
        throw boom.badImplementation(e);
    }
};

const updateUser = async (req, h) => {
    try {
        const id = req.params.id;
        const userData = req.payload;
        const user = await userRepository.updateUser(id, userData);

        if (!user) {
            throw boom.notFound('Usuário não encontrado');
        }

        return h.response(user).code(200);  // Retorno 200 para sucesso
    } catch (e) {
        throw boom.badImplementation(e);
    }
};

const getAllUsers = async (req, h) => {
    try {
        // Pega os parâmetros da query string
        const { nameContains } = req.query;
        const { page = 1, limit = 10 } = req.query;

        // Chama o repositório com os parâmetros de página e limite
        const result = await userRepository.getAllUsers(nameContains, page, limit);

        // Retorna os usuários e as informações de paginação
        return h.response({
            users: result.users,
            pagination: {
                totalUsers: result.totalUsers,
                totalPages: result.totalPages,
                currentPage: result.currentPage,
                limit: result.limit
            }
        }).code(200);
    } catch (e) {
        console.error(e);
        throw boom.badImplementation(e);
    }
};

const getUserById = async (req, h) => {
    try {
        const id = req.params.id;
        console.log(id)
        const user = await userRepository.getUserById(id);

        if (!user) {
            throw boom.notFound('Usuário não encontrado');
        }

        return h.response(user).code(200);  // Retorno 200 para sucesso
    } catch (e) {
        console.error(e);
        throw boom.badImplementation(e);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser
};
