import Sequelize from "sequelize";
import sequelize from "../database/connectDb.js";

const User = sequelize.define("Usuarios", {
    nome: {
        type:Sequelize.STRING(55),
        allowNull:false
    },
    email: {
        type:Sequelize.STRING(30),
        allowNull:false
    },
    cpf: {
        type:Sequelize.STRING(11),
        allowNull:false
    },
    senha: {
        type:Sequelize.STRING(16)
    }
});

// User.sync({
//     force:true
// });

export default User;