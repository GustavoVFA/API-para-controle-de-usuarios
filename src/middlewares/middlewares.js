import User from "../models/User.js"

const verificarCpf =  async(req, res, next) => {

    const {cpf} = req.body
    const verifyCpf =  await User.findOne({
        where: {
            cpf
        }
    })
    if(cpf.length != 11){
        return res.json({
            message: "Numero errado de caracteres"
        })
        
    }

    if(verifyCpf){
        return res.json({
            message: "Cpf existente" 
        })
    }
    
     return next()
}

const verificarEmail = async(req, res, next) => {

    const {email} = req.body
    const verifyEmail = await User.findOne({
        where: {
            email
        }
    })

    if(verifyEmail){
        return res.json({
            message: "Email ja cadastrado"
        })
    }

    return next()
}

export {verificarCpf, verificarEmail}
