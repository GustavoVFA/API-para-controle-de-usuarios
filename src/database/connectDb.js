import  Sequelize  from "sequelize";

const sequelize = new Sequelize("DbProjeto", "root", "37139522C@sa",{
    host: "localhost",
    dialect: "mysql"
});

export default sequelize;