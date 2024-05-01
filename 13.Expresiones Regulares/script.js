const $ = selector => document.querySelector(selector)

const createLocal = () => {
    if(localStorage.getItem('db')){
        alert('ya exite la base de datos')
    }else{
        localStorage.setItem('db', JSON.stringify([]))
    }
}

createLocal()

// REGEX
const regex = {
    nombre : /^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    apellido : /^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    edad : /^[0-9]{2}$/,
    usuario: /^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    email : /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/,
    password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,24}$/
}

const valueRegex = {
    nombre:false,
    apellido: false,
    edad: false,
    usuario: false,
    email:false,
    password:false
}
//___________
const forRegistro = document.querySelectorAll('#registro input')
const btnRegistro = document.querySelector('#registro')

forRegistro.forEach(element => {
    element.addEventListener('change', () => validation(element.name, element.value))
    element.addEventListener('blur', () => validation(element.name, element.value))
});

function validation(name, value){
   regex[name].test(value) ? valueRegex[name] = true : false;
}

btnRegistro.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(valueRegex.nombre && valueRegex.apellido && valueRegex.edad && valueRegex.email && valueRegex.password && valueRegex.usuario ){
    
        const dbUsers = JSON.parse(localStorage.getItem('db'))
        const user = {
            nombre : $('#nombre').value,
            apellido: $('#apellido').value,
            email:$('#email').value,
            edad: $('#edad').value,
            password: $('#password').value,
            usuario: $('#usuario').value
        }
        dbUsers.push(user)
        localStorage.setItem('db', JSON.stringify(dbUsers))
    }
})

