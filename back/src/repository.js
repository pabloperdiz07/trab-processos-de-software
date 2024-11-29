const Model = require('./model');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


// 1. Função para criar um novo usuário
const createUser = async (userData) => {
    const user = new Model(userData);

    await user.save();
    return user;
};

// 2. Função para atualizar os dados de um usuário
const updateUser = async (id, userData) => {
    try {
        const user = await Model.findByIdAndUpdate(id, userData, { new: true });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUsers = async (nameContains = '', page = 1, limit = 10) => {
    try {
        // Converte `page` para inteiro e ajusta para 0-indexed
        const skip = (parseInt(page) - 1) * parseInt(limit);

        // Se o parâmetro `nameContains` for fornecido, filtra os usuários pelo nome
        const usersQuery = nameContains ? { name: { $regex: nameContains, $options: 'i' } } : {};

        // Busca os usuários com a filtragem e paginação
        const users = await Model.find(usersQuery)
            .skip(skip)
            .limit(parseInt(limit))
            .sort({ updatedAt: -1 })
            .exec();

        // Conta o total de documentos (útil para calcular o total de páginas)
        const totalUsers = await Model.countDocuments(usersQuery).exec();

        return {
            users,
            totalUsers,
            totalPages: Math.ceil(totalUsers / limit),
            currentPage: page,
            limit
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// 4. Função para obter um usuário por ID
const getUserById = async (id) => {
    console.log(id)
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('ID inválido');
        }

        const user = await Model.findOne({ _id: new ObjectId(id) });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    getUserById
};
