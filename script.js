var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
         resetForm(); 
    }
}

function readFormData() {
    var formData = {};
    formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formData["email"] = document.getElementById("email").value;
    formData["cpfOuCnpj"] = document.getElementById("cpfOuCnpj").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["cep"] = document.getElementById("cep").value;
    formData["logradouro"] = document.getElementById("logradouro").value;
    formData["número"] = document.getElementById("número").value;
    formData["bairro"] = document.getElementById("bairro").value;
    formData["cidade"] = document.getElementById("cidade").value;
    formData["estado"] = document.getElementById("estado").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ListaDeClientes").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cpfOuCnpj;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telefone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cep;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.logradouro;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.número;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.bairro;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.cidade;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.estado;
    cell10 = newRow.insertCell(10);
    cell10.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cpfOuCnpj").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("logradouro").value = "";
    document.getElementById("número").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cpfOuCnpj").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cep").value = selectedRow.cells[4].innerHTML;
    document.getElementById("logradouro").value = selectedRow.cells[5].innerHTML;
    document.getElementById("número").value = selectedRow.cells[6].innerHTML;
    document.getElementById("bairro").value = selectedRow.cells[7].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[8].innerHTML;
    document.getElementById("estado").value = selectedRow.cells[9].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeCompleto;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.cpfOuCnpj;
    selectedRow.cells[3].innerHTML = formData.telefone;
    selectedRow.cells[4].innerHTML = formData.cep;
    selectedRow.cells[5].innerHTML = formData.logradouro;
    selectedRow.cells[6].innerHTML = formData.número;
    selectedRow.cells[7].innerHTML = formData.bairro;
    selectedRow.cells[8].innerHTML = formData.cidade;
    selectedRow.cells[9].innerHTML = formData.estado;
}

function onDelete(td) {
    if (confirm('Você tem certeza que deseja apagar isto?')){
        row = td.parentElement.parentElement;
        document.getElementById("ListaDeClientes").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nomeCompleto").value == "") {
        isValid = false;
        document.getElementById("nomeCompletoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeCompletoValidationError").classList.contains("hide"))
            document.getElementById("nomeCompletoValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("cpfOuCnpj").value == "") {
        isValid = false;
        document.getElementById("cpfOuCnpjValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cpfOuCnpjValidationError").classList.contains("hide"))
            document.getElementById("cpfOuCnpjValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("telefone").value == "") {
        isValid = false;
        document.getElementById("telefoneValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("telefoneValidationError").classList.contains("hide"))
            document.getElementById("telefoneValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("cep").value == "") {
        isValid = false;
        document.getElementById("cepValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cepValidationError").classList.contains("hide"))
            document.getElementById("cepValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("logradouro").value == "") {
        isValid = false;
        document.getElementById("logradouroValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("logradouroValidationError").classList.contains("hide"))
            document.getElementById("logradouroValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("número").value == "") {
        isValid = false;
        document.getElementById("númeroValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("númeroValidationError").classList.contains("hide"))
            document.getElementById("númeroValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("bairro").value == "") {
        isValid = false;
        document.getElementById("bairroValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("bairroValidationError").classList.contains("hide"))
            document.getElementById("bairroValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("cidade").value == "") {
        isValid = false;
        document.getElementById("cidadeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cidadeValidationError").classList.contains("hide"))
            document.getElementById("cidadeValidationError").classList.add("hide");
    }
    isValid = true;
    if (document.getElementById("estado").value == "") {
        isValid = false;
        document.getElementById("estadoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("estadoValidationError").classList.contains("hide"))
            document.getElementById("estadoValidationError").classList.add("hide");
    }
    return isValid;
}