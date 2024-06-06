// Example JavaScript for interactivity (optional)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



// signin form
  // JavaScript to toggle the visibility of the sign-in form
  document.getElementById('signInText').onclick = function() {
    var form = document.getElementById('signInForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}
