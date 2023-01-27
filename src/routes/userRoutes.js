import userController from "../controllers/userController.js";
import express from "express";
import  { verificarCpf, verificarEmail }  from "../middlewares/middlewares.js";

const router = express.Router()

router
    .get("/users", userController.visualizarUsers)
    .post("/users", verificarCpf, verificarEmail, userController.createUser)
    .get("/users/unic/cpf", userController.userUnicoCpf,)
    .get("/users/unic/email", userController.userUnicoEmail,)
    .get("/users/unic/nome", userController.userUnicoNome,)
    .put("/users/:id", userController.updateUser)
    .delete("/users/:id", userController.deleteUser)
    

export default router
/**
 * GET = Ver dados
 * POST = enviar dados
 * PUT = Atualizar dados
 * patch = Atualizar dado especifico
 * Delete = deletar dado
 */