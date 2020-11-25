const loginDiv = document.querySelector('.login-div');
const userName = document.querySelector('#username');
const passWord = document.querySelector('#password');
const logIn = document.querySelector('.login-button');
const message = document.querySelector('#login-message')

const user = 
{
    username: 'xolproperties', 
    password: 'JU1120XOL'
}

// const userPassword = 'JU1120XOL'
// const userUsername = 'xolproperties'

logIn.addEventListener('click', ()=>
{
    if(userName.value === user.username && passWord.value === user.password)
    {
        loginDiv.style.display = 'none';
    } else{
        message.textContent = 'Your Credentials are wrong, please try again!'
    }
})