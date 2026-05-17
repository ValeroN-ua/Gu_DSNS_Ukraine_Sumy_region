document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (password.length < 6) {
        messageDiv.textContent = "Пароль має бути не менше 6 символів!";
        messageDiv.className = "message error"; 
        return;
    }

    messageDiv.textContent = `Користувач ${username} успішно зареєстрований!`;
    messageDiv.className = "message success"; // Фарбуємо текст у зелений

    document.getElementById('regForm').reset();
});

