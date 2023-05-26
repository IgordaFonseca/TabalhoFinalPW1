function listarPacientes(){
    fetch("https://ifsp.ddns.net/webservices/clinicaMedica/pacientes")
        .then(resposta =>{
            if(!resposta.ok){
                throw new Error("Houve algum erro"); 
            }
            return resposta.json();
        })
        .then(dados =>{
            let body = document.querySelector("body");
            let tabela = document.createElement("table");
            tabela.classList.add("table");
            let nomeTabela = document.createElement("caption");
            nomeTabela.classList.add("nomeTabela");
            nomeTabela.innerHTML="Lista de Pacientes";
            let cabecalho = document.createElement("th");
            let tnome = document.createElement("td");
            tnome.innerHTML="Nome";
            let tDataNascimento = document.createElement("td");
            tDataNascimento.innerHTML="Data de Nascimento";
            let tDataCadastro = document.createElement("td");
            tDataCadastro.innerHTML="Data de cadastro";
            let acoes = document.createElement("td");
            acoes.innerHTML="Ações";

            cabecalho.append(tnome,tDataNascimento,tDataCadastro,acoes);        
            tabela.append(nomeTabela,cabecalho);
            body.append(tabela);

            for(let paciente of dados){
                let linhaPaciente = document.createElement("tr");
                let nome = document.createElement("td");
                nome.innerHTML=paciente.nome;
                let dataNascimento = document.createElement("td");
                dataNascimento.innerHTML=paciente.dataNascimento;
                let dataCadastro = document.createElement("td");
                dataCadastro.innerHTML=paciente.dataCadastro;
                let opcoes = document.createElement("td");

                // precisa fazer os eventos listners dos botões
                let botaoVerConsultas = document.createElement("button");
                botaoVerConsultas.classList.add("verConsultas","button", "is-primary");
                botaoVerConsultas.innerHTML="Ver Consulas";
                let botaoEditar = document.createElement("button");
                botaoEditar.classList.add("botaoEdita","button","is-warning");
                botaoEditar.innerHTML="Editar";
                let botaoDeletar = document.createElement("button");
                botaoDeletar.classList.add("botaoDeletar", "button", "is-danger")
                botaoDeletar.innerHTML="Deletar"

                opcoes.append(botaoVerConsultas,botaoEditar,botaoDeletar);
                linhaPaciente.append(nome, dataNascimento, dataCadastro, opcoes);
                tabela.append(linhaPaciente);
            }
        })
        .catch(erro =>{
            console.error("Erro encontrado: ",erro);
        });
}

let botaoListarPacientes = document.querySelector(".listarPacientes");
botaoListarPacientes.addEventListener("click",listarPacientes);