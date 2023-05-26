function listarPacientes(){
    fetch("https://ifsp.ddns.net/webservices/clinicaMedica/pacientes")
        .then(resposta =>{
            if(!resposta.ok){
                throw new Error("Houve algum erro"); 
            }
            return resposta.json();
        })
        .then(dados =>{
            
            let tabela = document.createElement("table");
            tabela.classList("table");
            let nomeTabela = document.createElement("caption");
            

            for(let paciente of dados){
                //JSON.parse(paciente)
                let id = paciente.id;
                console.log(id);
            }
        })
        .catch(erro =>{
            console.error("Erro encontrado: ",erro);
        });
}

let botaoListarPacientes = document.querySelector(".listarPacientes");
botaoListarPacientes.addEventListener("click",listarPacientes);