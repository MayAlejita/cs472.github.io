document.getElementById('loginBtn').onclick = function () {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('errorMsg').innerHTML = data.error;
            } else {
                sessionStorage.setItem('accessToken', data.accessToken);
                document.getElementById('login').remove();
                document.getElementById('loginBtn').remove();
                document.getElementById('userMsg').innerHTML = data.username;
                document.getElementById('userMsg').style.visibility = 'visible';
                document.getElementById('welcomeMsg').innerHTML = "Welcome, &nbsp;";
                document.getElementById('logoutBtn').style.visibility = 'visible';
                document.getElementById('main-content').style.visibility = 'visible';
                document.getElementById('divPrincipal').style.display = 'none';
                fetchProduct();
                fetchShoppingCart();
            }
        })
};

function fetchProduct() {
    fetch('http://localhost:3000/products', {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }).then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('divProducts').innerHTML = data.error;
            } else {
                for (let e of data) {
                    addNewProductRowToTable(e.id, e.name, e.price, e.image, e.stock);
                }
            }
        });
}

async function fetchShoppingCart() {
    let user = document.getElementById('userMsg').innerText;
    let setting = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch("http://localhost:3000/shopping-cart/" + user, setting);
    const jsonData = await response.json();

    for (let e of jsonData) {
        getFormShoppingCart(e.id, e.nameProd, e.image, e.price, e.stock);
    }
}

function addNewProductRowToTable(id, name, price, image, stock) {

    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(name));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.setAttribute('border', 0);
    img.setAttribute('width', 40);
    img.setAttribute('height', 50);

    cell.appendChild(img);
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(stock));
    row.appendChild(cell);

    const button = document.createElement('button')
    button.setAttribute('id', `btnShoppingCart${id}`);
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-shopping-cart');
    button.appendChild(icon);
    if (stock == 0) {
        button.setAttribute('disabled', 'true');
    }

    cell = document.createElement('td');
    cell.appendChild(button);
    row.appendChild(cell);

    document.getElementById('tbodyProductList').appendChild(row);
    addShoppingCart(id, name, image, price, stock);
}

function addShoppingCart(id, name, image, price, stock) {
    document.getElementById(`btnShoppingCart${id}`).addEventListener('click', (event) => {
        getFormShoppingCart(id, name, image, price, stock);
        document.getElementById(`btnShoppingCart${id}`).disabled = true;
    });
}

function getFormShoppingCart(id, name, image, price, stock) {
    const row = document.createElement('tr');
    row.setAttribute('id', `trShoppingCart${id}`);
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    cell.setAttribute('style', 'display:none');
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(image));
    cell.setAttribute('style', 'display:none');
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(name));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(stock));
    cell.setAttribute('style', 'display:none');
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.setAttribute('id', `tdtotalprice${id}`);
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    const buttonmin = document.createElement('button');
    buttonmin.setAttribute('id', `buttonmin${id}`);
    buttonmin.setAttribute('class', 'fa fa-minus');
    const buttonmax = document.createElement('button');
    buttonmax.setAttribute('id', `buttonmax${id}`);
    buttonmax.setAttribute('class', 'fa fa-plus');

    const input = document.createElement('input');
    input.setAttribute('id', `input${id}`);
    input.setAttribute('type', 'text');
    input.setAttribute('value', '1');
    input.setAttribute('disabled', 'true');

    cell = document.createElement('td');
    cell.appendChild(buttonmin);
    cell.appendChild(input);
    cell.appendChild(buttonmax);
    row.appendChild(cell);

    document.getElementById('divShoppingcart').style.visibility = 'visible';
    document.getElementById('divMsgShoppingcart').style.visibility = 'hidden';
    document.getElementById('tbodyShoppingList').insertBefore(row, document.getElementById('trTotal'));

    document.getElementById('idTotal').style.visibility = 'visible';
    if (document.getElementById('idTotal').innerText == '') {
        document.getElementById('idTotal').innerText = price;
    }
    else {
        let totalR = parseFloat(document.getElementById('idTotal').innerText);
        document.getElementById('idTotal').innerText = totalR + parseFloat(price);
    }

    selectButtonMax(id, stock, price);
    selectButtonMin(id, price);
}

async function updateStockProduct(id, name, image, price, newStock) {
    let b = { "name": name, "price": price, "image": image, "stock": newStock }
    let setting = {
        method: 'PUT',
        body: JSON.stringify(b),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch("http://localhost:3000/products/" + id, setting);
    const jsonData = await response.json();
}

async function deleteShoppingCart() {
    let user = document.getElementById('userMsg').innerText;
    console.log(user)
    let setting = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch("http://localhost:3000/shopping-cart/" + user, setting);
    const jsonData = await response.json();
    console.log(jsonData);
}

document.getElementById('btnPlaceOrder').addEventListener('click', (event) => {
    const bodyShopping = document.getElementById('tbodyShoppingList').childNodes;
    deleteShoppingCart().then(() => {
        bodyShopping.forEach(a => {
            if (a != undefined) {
                let arr = [];
                a.childNodes.forEach(t => {
                    if (t != undefined) {
                        arr.push(t.innerText);
                    }
                })
                if (arr.length > 0) {
                    if (arr[0] != '') {
                        const newStock = arr[4] - parseInt(document.getElementById(`input${arr[0]}`).value);
                        updateStockProduct(arr[0], arr[2], arr[1], arr[3], newStock);
                    }
                }
                // document.getElementById('divShoppingcart').style.visibility = 'hidden';
                // document.getElementById('divMsgShoppingcart').style.visibility = 'visible';  
            }
        });
        document.getElementById('tbodyProductList').innerHtml = '';
        document.getElementById('tbodyShoppingList').innerHtml = '';
        // fetchProduct();
    })
});

function selectButtonMax(id, stock, price) {
    document.getElementById(`buttonmax${id}`).addEventListener('click', (event) => {
        const valueB = parseInt(document.getElementById(`input${id}`).value);
        if (valueB <= stock) {
            const newInput = valueB + 1;
            if (newInput == stock) {
                document.getElementById(`buttonmax${id}`).disabled = true;
            }
            const total = parseFloat(price) * parseFloat(newInput);
            document.getElementById(`input${id}`).value = newInput;
            document.getElementById(`tdtotalprice${id}`).innerText = total;

            const totalF = parseFloat(document.getElementById('idTotal').innerText) + parseFloat(price);
            document.getElementById('idTotal').innerText = totalF;
        }
    });
}

function selectButtonMin(id, price) {
    document.getElementById(`buttonmin${id}`).addEventListener('click', (event) => {
        const valueB = parseInt(document.getElementById(`input${id}`).value);
        document.getElementById(`buttonmax${id}`).disabled = false;
        const newInput = valueB - 1;
        if (newInput == 0) {
            document.getElementById(`trShoppingCart${id}`).remove();
            document.getElementById(`btnShoppingCart${id}`).disabled = false;

            const totalFM = parseFloat(document.getElementById('idTotal').innerText) - parseFloat(price);
            document.getElementById('idTotal').innerText = totalFM;

            const bodyShopping = document.getElementById('tbodyShoppingList').childNodes;
            if (bodyShopping.length == 3) {
                document.getElementById('divShoppingcart').style.visibility = 'hidden';
                document.getElementById('divMsgShoppingcart').style.visibility = 'visible';
                document.getElementById('idTotal').innerText = '';
                document.getElementById('idTotal').style.visibility = 'hidden';
            }
        }
        else {
            const total = parseFloat(price) * parseFloat(newInput);
            document.getElementById(`input${id}`).value = newInput;
            document.getElementById(`tdtotalprice${id}`).innerText = total;

            const totalF = parseFloat(document.getElementById('idTotal').innerText) - parseFloat(price);
            document.getElementById('idTotal').innerText = totalF;
        }
    });
}

document.getElementById('logoutBtn').addEventListener('click', (event) => {
    deleteShoppingCart().then(() => {
        const bodyShopping = document.getElementById('tbodyShoppingList').childNodes;
        bodyShopping.forEach(a => {
            if (a != undefined) {
                let arr = [];
                a.childNodes.forEach(t => {
                    if (t != undefined) {
                        arr.push(t.innerText);
                    }
                })
                if (arr.length > 0) {
                    if (arr[0] != '') {
                        saveShoppingCard(arr[0], arr[2], arr[1], arr[3], arr[4], arr[5], parseInt(document.getElementById(`input${arr[0]}`).value));
                    }
                }
            }
        });
    })
    // document.getElementById("body").reset();
});

async function saveShoppingCard(id, name, image, price, stock, total, quantity) {
    let user = document.getElementById('userMsg').innerText;
    let b = { "username": user, "quantity": quantity, "total": total, "id": id, "name": name, "price": price, "image": image, "stock": stock }
    let setting = {
        method: 'POST',
        body: JSON.stringify(b),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch("http://localhost:3000/shopping-cart/", setting);
    const jsonData = await response.json();
}