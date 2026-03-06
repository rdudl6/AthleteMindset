// Add a simple scroll effect to the navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Future: Add logic here for a real "Dashboard" login or interactive buttons!
console.log("Athlete Mindset Website Loaded Successfully.");