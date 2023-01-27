const buscar = document.getElementById("buscar");
const editar = document.getElementById("editar")
const deletar = document.getElementById("deletar")
const select = document.getElementById("selecao");
const cpf = document.getElementById("vcpf")
const email = document.getElementById("vemail")
const nome = document.getElementById("vnome")


let id = null
let response = null

function buscarUserCpf() {
    const inputInfo = document.getElementById("info")

    event.preventDefault()

    fetch("http://localhost:3000/users/unic/cpf", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            cpf:inputInfo.value
            
        }
    }).then(res =>{
        return res.json()
    }).then((res) => {
        nome.innerHTML = res.nome
        email.innerHTML = res.email
        cpf.innerHTML = res.cpf
        id = res.id
        response = res
    })
}
function buscarUserEmail() {
    const inputInfo = document.getElementById("info")

    event.preventDefault()

    fetch("http://localhost:3000/users/unic/email", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
           
            email:inputInfo.value
            
        }
    }).then(res =>{
        return res.json()
    }).then((res) => {
        nome.innerHTML = res.nome
        email.innerHTML = res.email
        cpf.innerHTML = res.cpf
        id = res.id
        response = res
    })
}
function buscarUserNome() {
    const inputInfo = document.getElementById("info")

    event.preventDefault()

    fetch("http://localhost:3000/users/unic/nome", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
           
            nome:inputInfo.value
            
        }
    }).then(res =>{
        return res.json()
    }).then((res) => {
        nome.innerHTML = res.nome
        email.innerHTML = res.email
        cpf.innerHTML = res.cpf
        id = res.id
        response = res
    })
}


buscar.addEventListener("click", () => {
    const selectValue = select.options[select.selectedIndex].value;

    if(selectValue === "vcpf") {
        buscarUserCpf("cpf")  
    }
    if(selectValue === "vnome") {
        buscarUserNome("nome")   
    }
    if(selectValue === "vemail") {
        buscarUserEmail("email")
          
    }

});




deletar.addEventListener('click', () => {
    swal({
        text: "Deseja mesmo deletar o usuário",
        icon: "warning",
        buttons:[true, "Confirmar"],
    }).then(result => {
        if (result) { 
            fetch(`http://localhost:3000/users/${id}`, {
            method:"DELETE"
        }).then(res => {
            return res.json()
        }).then(res => {
            swal({
                text: "Usuário Deletado com Sucesso",            
            })
        })
        }
    })
})

editar.addEventListener("click", async() => {
   await localStorage.setItem( "Editar", JSON.stringify(response) )

   window.location = "./html/editar.html"
})