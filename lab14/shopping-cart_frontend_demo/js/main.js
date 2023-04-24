
window.onload = getProducts;

async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    const jsonData = await response.json();

    for (let e of jsonData) {
        addNewProductRowToTable(e.id, e.title, e.description, e.price);
    }
}

function addNewProductRowToTable(id, title, description, price) {

    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(title));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(description));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    var check = document.createElement('input')
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', `${id}checkbox`);

    cell = document.createElement('td');
    cell.appendChild(check);
    row.appendChild(cell);

    document.getElementById('tbodyProductList').appendChild(row);
}


async function postProduct(title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products", setting);
    const jsonData = await response.json();
    return jsonData;
}

document.getElementById('btnRegister').addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    data = postProduct(title, description, price);

    document.location.reload();
    document.getElementById('title').innerHTML = data;
    document.getElementById('myform').reset();
});

async function deleteProduct(productId) {
    let setting = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products/" + productId, setting);
}

document.getElementById('btnDelete').addEventListener('click', (event) => {
    let body = document.getElementById("tbodyProductList");
    for (const tr of body.childNodes) {
        if (tr.childNodes[0] != undefined) {
            const first = tr.childNodes[0].innerText;
            let value = first + 'checkbox';
            let out = document.getElementById(value).checked;
            if (out) {
                deleteProduct(first);
            }
        }
    }
    document.location.reload();
});

async function updateProduct(productId, title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    let setting = {
        method: 'PUT',
        body: JSON.stringify(b),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:3000/products/" + productId, setting);
    const jsonData = await response.json();
}

document.getElementById('btnUpdate').addEventListener('click', (event) => {
    let count = validate('counter');
    if (count > 1) {
        alert('Choose one element to update');
        return;
    }

    let result = validate();
    const idProduct = result[0].innerText;
    const title = result[1].innerText;
    const description = result[2].innerText;
    const price = result[3].innerText;

    document.getElementById('title').value = title;
    document.getElementById('description').innerHTML = description;
    document.getElementById('price').value = price;

    document.getElementById('btnRegister').disabled = true;
    document.getElementById('btnReset').disabled = true;
    document.getElementById('btnUpdateOk').style.visibility = 'visible';
    updateProductElements(idProduct);

});

function validate(countNum = '') {
    let body = document.getElementById("tbodyProductList");
    let counter = 0;
    let result;
    for (const tr of body.childNodes) {
        if (tr.childNodes[0] != undefined) {
            const idProduct = tr.childNodes[0].innerText;
            let value = idProduct + 'checkbox';
            let out = document.getElementById(value).checked;
            if (out) {
                counter++;
                result = tr.childNodes;
            }
        }
    }
    if (countNum == 'counter') {
        return counter;
    }
    else {
        return result;
    }
}

function updateProductElements(idProduct) {
    document.getElementById('btnUpdateOk').addEventListener('click', (event) => {
        const titleNew = document.getElementById('title').value;
        const descriptionNew = document.getElementById('description').value;
        const priceNew = document.getElementById('price').value;

        console.log(idProduct, titleNew, descriptionNew, priceNew);
        updateProduct(idProduct, titleNew, descriptionNew, priceNew);
        document.location.reload();
    });
}