const moveOverlay = ()=>{
    
    if(loginContainer.classList.contains('move')){
        loginContainer.classList.remove('move')
    }else{
        loginContainer.classList.add('move')
    }
}

const loginContainer = document.getElementById('login-container')
document.getElementById('cadastrar').addEventListener('click',moveOverlay)