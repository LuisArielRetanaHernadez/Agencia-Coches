let cars = [
    {
        id: 1,
        brand: 'Nissan',
        model: 'Ni-12',
        colour: 'red',
        year: 2021,
        price: 150000,
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sep-3-6pm-cet-new-nissan-juke-unveil-dynamic-outdoor-3-1567529212.jpg?crop=0.823xw:0.620xh;0,0.153xh&resize=768:*'
    }
];
/* VARIABLES GLOBALES*/
const CREATE = "create" 
const EDIT = "edit" 
let CARID = 0;

/*************************************************************/
//Imprime los usuarios en el HTML

const printCars = ((dataCar) =>{
    const tbody_content = document.getElementById('container-data');
    tbody_content.innerHTML = '';
    dataCar.forEach((car)=>{
        const user_HTML = `<tr>
                            <td>${car.brand}</td>
                            <td>${car.model}</td>
                            <td>${car.colour}</td>
                            <td>${car.year}</td>
                            <td>${car.price}</td>
                            <td><a class="btn btn-secondary" href="${car.img}">ver imagen</td>
                            <td><button class="btn btn-warning" onclick="showFormEditCar(${car.id})"> Editar</button></td>
                            <td><button class="btn btn-danger" onclick="deleteCar(${car.id})"> Eliminar</button></td>

                        </tr>`;
        tbody_content.innerHTML += user_HTML; 
    });
});

printCars(cars);


/********************************************************************************************/
//Abre el formualrio para crear o actualizar usuarios
const openForm = ()=> {document.getElementById('form-create').classList.remove('d-none'), btnCreate()};
/*********************************************************************************************/
/********************************************************************************************/
//Oculta el formualrio para crear o actualizar usuarios
const hidenForm = ()=> document.getElementById('form-create').classList.add('d-none');
/*********************************************************************************************/
/*************************************************************/
//resetea los valores del formulario en blanco
const resetForm = ()=> document.getElementById('car-form').reset();
/*************************************************************/
/**************************************************************************/
//Obtiene el id del boton del formulario
const getIdSubmmitButton = () => document.getElementById('btn-car-form');
/****************************************************************************/



/****************************************************************************/
//Crea un nuevo usuario
const createCars = (()=>{

    //let newCar = [];
    const brand = document.getElementById('in-brand').value
    const model = document.getElementById('in-model').value
    const colour = document.getElementById('in-colour').value
    const year = document.getElementById('in-year').value
    const price = document.getElementById('in-price').value
    const img = document.getElementById('in-img').value

    const newCar =
    {
        id: generateId(),
        brand,
        model,
        colour,
        year,
        price,
        img
    }

    cars.push(newCar);
    printCars(cars);
    resetForm();
    hidenForm();
});
/****************************************************************************/

/*************************************************************/
//Genera un id para cada registro nuevo
const generateId = (()=>{
    let biggerID = 0;
    cars.forEach((car)=>{
        if(car.id > biggerID){
            biggerID = car.id;
        }
    });
    return biggerID += 1;
});
/*************************************************************/


/*************************************************************/
//Elimina a un usuario por su id
const deleteCar = ((carID)=>{
    const i = cars.findIndex((car) => car.id === carID);
    cars.splice(i, 1);
    printCars(cars);
});
/*************************************************************/


/*************************************************************/
//Abre el formulario mostrando los datos para hacer editados
const showFormEditCar = ((carID) =>{
    const i = cars.findIndex((car) => car.id === carID);
    const car = cars[i]; 
    //document.getElementById('name').value = user.name;
    //document.getElementById('email').value = user.email;
    document.getElementById('in-brand').value = car.brand
    document.getElementById('in-model').value = car.model
    document.getElementById('in-colour').value = car.colour
    document.getElementById('in-year').value = car.year
    document.getElementById('in-price').value = car.price
    document.getElementById('in-img').value = car.img 
    CARID = i;
    openForm();
    btnEditar();
});
/*************************************************************/


/*************************************************************/
//Cambia los datos del usuario
const editCar = ()=>{
    //users[CARID].name = document.getElementById('name').value;
    //users[CARID].email = document.getElementById('email').value;

    cars[CARID].brand = document.getElementById('in-brand').value
    cars[CARID].model  = document.getElementById('in-model').value
    cars[CARID].colour = document.getElementById('in-colour').value
    cars[CARID].year = document.getElementById('in-year').value
    cars[CARID].price = document.getElementById('in-price').value
    cars[CARID].img = document.getElementById('in-img').value
    resetForm();
    hidenForm();
    printCars(cars);
}

/*************************************************************/


/*************************************************************/
//Cambia el boton del fomrulario a editar
const btnEditar = (()=>{
    const button = getIdSubmmitButton();
    button.innerHTML = 'Editar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
    button.value = EDIT;
});
/*************************************************************/


/*************************************************************/
//Cambia el boton del formulario a crear
 const btnCreate = (()=>{
    const button = getIdSubmmitButton();
    button.innerHTML = 'Guardar';
    button.classList.add('btn-primary');
    button.classList.remove('btn-warning');
    button.value = CREATE;
}); 
/*************************************************************/


/*************************************************************/
//Accion que realiza el boton
const car = (()=>{
    const touchBtn = getIdSubmmitButton().value;
    if (touchBtn === EDIT){
        editCar();
    }else{
        createCars();
    }
});
/*************************************************************/