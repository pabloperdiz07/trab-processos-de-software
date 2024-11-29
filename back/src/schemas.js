const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        'string.base': 'O nome deve ser um texto',
        'string.min': 'O nome deve ter pelo menos 3 caracteres',
        'string.max': 'O nome deve ter no máximo 100 caracteres',
        'any.required': 'Nome é obrigatório',
    }),
    email: Joi.string().min(3).max(100).required().messages({
        'string.base': 'O e-mail deve ser um texto',
        'any.required': 'E-mail é obrigatório',
    }),
    birthDate: Joi.date().iso().required().messages({
        'date.base': 'A data de nascimento deve ser uma data válida',
    }),
    phone: Joi.string().required().messages({
        'string.base': 'O telefone deve ser um texto',
        'string.pattern.base': 'O telefone deve ser válido, como +55 999999999',
    }),
    isActive: Joi.boolean().optional().messages({
        'boolean.base': 'O status de ativação deve ser um valor booleano',
        'any.required': 'Status de ativação é obrigatório',
    }),
    lastAccess: Joi.date().iso().optional().messages({
        'date.base': 'A data de último acesso deve ser uma data válida',
    }),
    createdAt: Joi.any().forbidden().messages({
        'any.unknown': 'Este campo é proibido',
    }),
    timestamps: Joi.any().forbidden().messages({
        'any.unknown': 'Este campo é proibido',
    }),
});

module.exports = {
    schema,
};
