document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const userId = localStorage.getItem('user_id');
    if (userId) {
        showWelcomeBlock(userId);
    }
    function showWelcomeBlock(userId) {
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
    }
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(signinForm);
        const login = formData.get('login');
        const password = formData.get('password');
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: JSON.stringify({ login, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                showWelcomeBlock(data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Произошла ошибка при авторизации');
        });
    });
});
