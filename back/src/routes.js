const handler = require('./handler');
const schema = require('./schemas');
const Joi = require('@hapi/joi');

module.exports = [
    {
        method: 'POST',
        path: '/user',
        handler: handler.createUser,
        options: {
            auth: false,
            // validate: {
            //     payload: schema.schema,  // Alterado para schema específico de criação
            //     options: {
            //         abortEarly: false // Captura todos os erros de validação
            //     },
            //     failAction: (request, h, error) => {
            //         return h.response({ error: error.details }).code(400).takeover();
            //     }
            // }
        }
    },
    {
        method: 'PUT',
        path: '/user/{id}',
        handler: handler.updateUser,
        options: {
            auth: false,
            // validate: {
            //     payload: schema.schema,  // Alterado para schema específico de atualização
            //     options: {
            //         abortEarly: false // Captura todos os erros de validação
            //     },
            //     failAction: (request, h, error) => {
            //         return h.response({ error: error.details }).code(400).takeover();
            //     }
            // }
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: handler.getAllUsers,
        options: {
            auth: false,
            // validate: {
            //     query: Joi.object({
            //         nameContains: Joi.string().optional(),
            //         page: Joi.number().integer().min(1).default(1),
            //         limit: Joi.number().integer().min(1).default(10)
            //     }).unknown(),
            //     options: {
            //         abortEarly: false // Captura todos os erros de validação
            //     },
            //     failAction: (request, h, error) => {
            //         return h.response({ error: error.details }).code(400).takeover();
            //     }
            // }
        }
    },
    {
        method: 'GET',
        path: '/user/{id}',
        handler: handler.getUserById,
        options: {
            auth: false,
        }
    },
];
