"use strict"

function getValuesForm() {

    let pacientId = document.getElementById("patientIdNumber").value;
    let firstName = document.getElementById("firstName").value;
    let middleInitial = document.getElementById("middleInitials").value;
    let lastName = document.getElementById("lastName").value;
    let birth = document.getElementById("dateOfBirth").value;
    let department = document.querySelector("#ddlDepartment").value;
    let isOutPacient = document.querySelector('input[name="radioIsOutPatient"]:checked').value;

    let arrInput = [pacientId, firstName, middleInitial, lastName, birth, department, isOutPacient];
    const tblBody = document.getElementById("tbodyPatientsList");
    const row = document.createElement("tr");
    tblBody.appendChild(row);

    for (let i = 0; i < arrInput.length; i++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(arrInput[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    document.getElementById("myform").reset();
}

function getValuesElderly() {
    let checkBox = document.getElementById("chkElderlyPatients");
    let body = document.getElementById("tbodyPatientsList");

    if (checkBox.checked == true) {
        for (const tr of body.childNodes) {
            var old = tr.childNodes[4].innerText;
            let age = new Date().getFullYear() - old.substring(0, 4);
            if (age < 65) {
                tr.style.display = "none";
            }
        }
    } else {
        for (const tr of body.childNodes) {
            tr.style.display = "";
        }
    }
}

function getValuesOutPacient() {
    let checkBox = document.getElementById("chkShowOutPatients");
    let body = document.getElementById("tbodyPatientsList");

    if (checkBox.checked == true) {
        for (const tr of body.childNodes) {
            let out = tr.childNodes[6].innerText;
            if (out != "Yes") {
                tr.style.display = "none";
            }
        }
    } else {
        for (const tr of body.childNodes) {
            tr.style.display = "";
        }
    }
}

let btnRegister = document.getElementById("btnRegisterPatient");
btnRegister.onclick = getValuesForm;

let checkElderly = document.getElementById("chkElderlyPatients");
checkElderly.onclick = getValuesElderly;

let checkOut = document.getElementById("chkShowOutPatients");
checkOut.onclick = getValuesOutPacient;