const data = localStorage.getItem("Editar");
console.log(JSON.parse(data));
const data2 = JSON.parse(data);
const cpf = document.getElementById("cpf1");
const email = document.getElementById("email1");
const nome = document.getElementById("nome1");
console.log(nome);
window.addEventListener("DOMContentLoaded", () => {
  nome.value = data2.nome.toString();
  email.value = data2.email.toString();
  cpf.value = data2.cpf.toString();
});

const editar = document.getElementById("editar");

editar.addEventListener("click", () => {
    event.preventDefault()
    fetch(`http://localhost:3000/users/${data2.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        cpf: cpf.value,
      }),
    }).then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
    })
  
