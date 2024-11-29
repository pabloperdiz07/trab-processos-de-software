// Criação dos bancos de dados
const database = {
    name: process.env.MONGO_USERS_DB,
    user: process.env.MONGO_USERS_USER,
    pwd: process.env.MONGO_USERS_PASSWORD,
    roles: [{ role: "readWrite", db: process.env.MONGO_USERS_DB }],
    collection: 'users', // Collection name for Users database
};

try {
    print(`Creating database: ${database.name}`);

    const db = connect(`mongodb://localhost:27017/${database.name}`);

    // Create the collection using the name from database.collection
    db.createCollection(database.collection);

    db.createUser({
        user: database.user,
        pwd: database.pwd,
        roles: database.roles,
    });

    print(`User created for database: ${database.name}`);
} catch (e) {
    print(`Error creating user for database: ${database.name}`);
    print(`Error details: ${e}`);
}
