const cadastrar = document.getElementById("cadastrar")

function createUser () {
    const inputName = document.getElementById("nome")
    const InputEmail = document.getElementById("email")
    const inputCpf = document.getElementById("cpf")
    const InputSenha = document.getElementById("senha")
    
    event.preventDefault()

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
           nome: inputName.value,
           email: InputEmail.value,
           cpf: inputCpf.value,
           senha: InputSenha.value
        })
    }).then(res => {
        return res.json()
    }).then(res => {
        console.log(res.message)

        if(res.message === "Usuario Criado com Sucesso!") {
            swal({
                text: "Usuario criado com sucesso!",
                icon: "success" 
            })
        }
        if(res.message === "Numero errado de caracteres"){
            swal({
                text: "CPF: Numero errado de caracteres ",
                icon: "error"
            })
        }
        if(res.message === "Cpf existente"){
            swal({
                text: "Cpf ja Cadastrado",
                icon: "error"
            })
        }
        if(res.message === "Email ja cadastrado"){
            swal({
                text: "Email ja cadastrado",
                icon: "error"
            })
        }
    });
}

cadastrar.addEventListener("click", createUser)