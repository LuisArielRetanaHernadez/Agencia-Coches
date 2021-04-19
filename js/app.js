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
console.log(cars)

function pinterCars (dataCars) {
    let con = -1;
    let container = document.getElementById('container-data')
    container.innerHTML = ''
    for(let i = 0; i < dataCars.length; i++) {
        con --;
        container.innerHTML += `
    <div class="content-car">
    <div id="${dataCars[i].id}" class="context-cars style="width: 100%; height: 100%">
        <div class="imgs margin-auto">
            <img class="margin-auto" src='${dataCars[i].img}' alt="">
            <button class="btn-edit" onclick='showForm()'>Editar</button>
            <button class="btn-delet">Eliminar</button>
        </div>

        <p class="margin-left">Marca: ${dataCars[i].brand}</p>
        <p class="margin-left">Modelo: ${dataCars[i].model}</p>
        <p class="margin-left">Color: ${dataCars[i].colour}</p>
        <p class="margin-left">año: ${dataCars[i].year}</p>
        <p class="margin-left">precio: ${dataCars[i].price}</p>
    </div>
    <form id="${con}" class="display-none content-form" style="display: none;" id="content-form" action="" onsubmit="event.preventDefault(), user()">
        <input type="text" name="" id="" placeholder="Marca">
        <input type="text" name="" id="" placeholder="Modelo">
        <input type="text" name="" id="" placeholder="Color">
        <input type="number" name="" id="" placeholder="Año">
        <input type="number" name="" id="" placeholder="Precio">
        <input type="url" name="" id="" placeholder="Url Imagen">
        <button onclick='hideForm()' class="btn-update">actulizar</button>
    </form>
    </div>`
    }
}

function showForm(){
    document.getElementById('1').style.display = 'none';
    document.getElementById('-2').style.display = 'flex'
}
hideForm = () => {
    document.getElementById('1').style.display = 'block';
    document.getElementById('-2').style.display = 'none'
}
function createNewCoche(){
    
}    
pinterCars(cars)