let cars = [
    {
        id: 1,
        brand: 'Nissan',
        model: 'Ni-12',
        colour: 'red',
        year: 2021,
        price: 150000,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sep-3-6pm-cet-new-nissan-juke-unveil-dynamic-outdoor-3-1567529212.jpg?crop=0.823xw:0.620xh;0,0.153xh&resize=768:*'
    },
    {
        id: 2,
        brand: 'Ford',
        model: 'Ft-22-a',
        colour: 'blue',
        year: 2021,
        price: 190000,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sep-3-6pm-cet-new-nissan-juke-unveil-dynamic-outdoor-3-1567529212.jpg?crop=0.823xw:0.620xh;0,0.153xh&resize=768:*'
    },
    {
        id: 3,
        brand: 'Nissan',
        model: 'Ni-2A',
        colour: 'white',
        year: 2021,
        price: 350000,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sep-3-6pm-cet-new-nissan-juke-unveil-dynamic-outdoor-3-1567529212.jpg?crop=0.823xw:0.620xh;0,0.153xh&resize=768:*'
    },
    {
        id: 4,
        brand: 'Ferrari',
        model: '812 Superfast.',
        colour: 'red',
        year: 2021,
        price: 8000000,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sep-3-6pm-cet-new-nissan-juke-unveil-dynamic-outdoor-3-1567529212.jpg?crop=0.823xw:0.620xh;0,0.153xh&resize=768:*'
    }
];

//pintar los datos de los coches en el tabla DOM

function pinterData(dataCars){
    let container = document.getElementById('container-data')
    container.innerHTML = ''
    for (const data of dataCars) {
        container.innerHTML += `
        <tr>
        <td>${data.brand}</td>
        <td>${data.model}</td>
        <td>${data.colour}</td>
        <td>${data.year}</td>
        <td>${data.price}</td>
        <td><a class="btn btn-secondary" href='${data.img}' target="_blank">Ver imagen</a></td>
        <td><button class="btn btn-light" onclick="updateDataCar(${data.id})">Update</button></td>
        <td><button class="btn btn-danger btn-Update" onclick="deletCar(${data.id})">Delete</button></td>
        </tr>
        `
    }
}

function deletCar(id){
    const idCar = cars.findIndex((cars) => cars.id === id)
    cars.splice(idCar, 1)
    pinterData(cars)
}

function showForm(){
    document.getElementById('form-create').classList.remove('d-none')
}
function hideFrom(){
    document.getElementById('from-create').hidden
}

function validateUpdate(updateValidate){
    if(updateValidate === ''){
        document.getElementById('in-brand').value = carUpdate.brand
        document.getElementById('in-model').value = carUpdate.model
        document.getElementById('in-colour').value = carUpdate.colour
        document.getElementById('in-year').value = carUpdate.year
        document.getElementById('in-price').value = carUpdate.price
        document.getElementById('in-img').value = carUpdate.img 
    }
}

function updateDataCar(id){
    const idIdex = cars.findIndex((cars) => cars.id === id)
    const carUpdate = cars[idIdex]

    carUpdate.brand = document.getElementById('in-brand').value
    carUpdate.model  = document.getElementById('in-model').value
    carUpdate.colour = document.getElementById('in-colour').value
    carUpdate.year = document.getElementById('in-year').value
    carUpdate.price = document.getElementById('in-price').value
    carUpdate.img = document.getElementById('in-img').value
    cars[idIdex] = {
        brand: carUpdate.brand,
        model: carUpdate.model,
        colour: carUpdate.colour,
        year: carUpdate.year,
        price: carUpdate.price,
        img: carUpdate.img
    }
    validateUpdate(cars[idIdex])
    showForm()
    btnUpdate()
    pinterData(cars)
}

function btnUpdate(){
    document.getElementById('btn-car-form').style.background = "maroon"
}

function gaddCarNew(){
    let newCar = [];
    const brand = document.getElementById('in-brand').value
    const model = document.getElementById('in-model').value
    const colour = document.getElementById('in-colour').value
    const year = document.getElementById('in-year').value
    const price = document.getElementById('in-price').value
    const img = document.getElementById('in-img').value
    const idIdex = cars.length
    newCar = {
        id: idIdex,
        brand: brand,
        model: model,
        colour: colour,
        year: year,
        price: price,
        img: img
    }
    cars.push(newCar)
    pinterData(cars)
}

function car(){
    const butonUpdate = document.getElementsByClassName('btn-Update')
    console.log(butonUpdate)
    if(butonUpdate){
        updateDataCar()
    }
    const butonAdd = document.getElementsByClassName('btn-add')
    console.log(butonAdd)
    if(butonAdd){
        gaddCarNew()
    }
}


pinterData(cars)