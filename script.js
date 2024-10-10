document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login validation here, if needed
    window.location.href = '../dash/dashboard.html'; // Redirect to dashboard
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add registration logic here, if needed
    window.location.href = '../dash/dashboard.html'; // Redirect to dashboard
});
