// Create random light circles on mouse movement
document.addEventListener('mousemove', function(e) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    // Set random soft pastel colors
    const randomColor = `hsl(${Math.random() * 360}, 40%, ${Math.random() * 40 + 60}%)`;
    circle.style.backgroundColor = randomColor;
    circle.style.width = `${Math.random() * 50 + 10}px`;
    circle.style.height = circle.style.width;
    circle.style.left = `${e.pageX - circle.offsetWidth / 2}px`;
    circle.style.top = `${e.pageY - circle.offsetHeight / 2}px`;

    document.body.appendChild(circle);

    // Remove the circle after a short delay
    setTimeout(() => {
        circle.remove();
    }, 500);
});

// Show the full code image when the button is clicked
document.getElementById('fullCodeBtn').addEventListener('click', function() {
    document.getElementById('codeImage').style.display = 'block';
});

// Hide the full code image when clicking anywhere else
document.addEventListener('click', function(e) {
    if (!document.getElementById('codeImage').contains(e.target) && e.target !== document.getElementById('fullCodeBtn')) {
        document.getElementById('codeImage').style.display = 'none';
    }
});
