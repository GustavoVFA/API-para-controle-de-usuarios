import User from "../models/User.js";

class userController {
    static visualizarUsers = (request, response) => {
        const users = User.findAll()
        
        response.status(200).json(users)
    }
    
    static createUser = (req, res) => { 
        const {nome, email, cpf, senha} = req.body;
    
         if(nome == null || email == null || cpf == null || senha == null ){
            return res.json({
                message: "Erro de criação"
            })
        }
             User.create({
                nome,
                email,
                cpf,
                senha,
            })
            return res.status(201).json({
                message:"Usuario Criado com Sucesso!"
            })     
    }

    static userUnicoCpf = async (req, res) => {
        const { cpf } = req.headers

        const user = await User.findOne({
            where: {
                cpf
            }
        });
        return res.json(user);
    }
    static userUnicoEmail = async (req, res) => {
        const { email } = req.headers

        const user = await User.findOne({
            where: {
                email
            }
        });
        return res.json(user);
    }
    static userUnicoNome = async (req, res) => {
        const { nome } = req.headers

        const user = await User.findOne({
            where: {
                nome
            }
        });
        return res.json(user);
    }
    
    static updateUser = async (req, res) => {
        const id = req.params.id;
        
        User.update(req.body, { where: { id }})
        .then(() => {
            return res.json({
                message: "Usuario Atualizado com sucesso!"
            });
        });
    };
    
    static deleteUser = async (req, res) => {
        const id = req.params.id;

        User.destroy({ where: { id } })
        .then(() => {
            return res.json({
                message: "Usuario deletado com sucesso"
            })
        })
        .catch(err => {
            return res.json({
                message: "Erro ao deletar Usuario"
            })
        })
    }
};
   
export default userController;