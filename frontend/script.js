const loginBtn = document.getElementById('login');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('login-form');

loginBtn.addEventListener('click', () => { loginForm.style.display= 'block';
});

closeBtn.addEventListener('click',()=> {
    loginForm.style.display = 'none';
})
