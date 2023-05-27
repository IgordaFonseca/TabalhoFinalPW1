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

function cadastarPaciente(){
    let body = document.querySelector("body");
    let titulo = document.createElement("h2"); 
    let form = document.createElement("forms");
    let divNome = document.createElement("div");
    divNome.classList.add("field");
    let labelNome = document.createElement("label");
    labelNome.classList.add("label");
    labelNome.innerHTML="Nome";
    let divControNome = document.createElement("div");
    divControNome.classList.add("control");
    let inputNome = document.createElement("input");
    inputNome.classList.add("input");
    inputNome.type="text;"
    divControNome.append(inputNome);
    divNome.append(labelNome,divControNome);

    let divDataNascimento = document.createElement("div");
    divDataNascimento.classList.add("field");
    let labelDataNascimento = document.createElement("label");
    labelDataNascimento.classList.add("label");
    labelDataNascimento.innerHTML="Data de Nascimento";
    let divControDataNascimento = document.createElement("div");
    divControDataNascimento.classList.add("control");
    let dateDataNascimento = document.createElement("input");
    dateDataNascimento.classList.add("input");
    dateDataNascimento.type="date";
    divControDataNascimento.append(dateDataNascimento);
    divDataNascimento.append(labelDataNascimento,divControDataNascimento);

    form.append(divNome,divDataNascimento);
    body.append(form);

}

let botaoListarPacientes = document.querySelector(".listarPacientes");
botaoListarPacientes.addEventListener("click",listarPacientes);

let botaoCadastrarPaciente = document.querySelector(".cadastrarPaciente");
botaoCadastrarPaciente.addEventListener("click",cadastarPaciente);