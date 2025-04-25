const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nums = '0123456789';
const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = nums.charAt(Math.floor(Math.random() * nums.length));
        ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = canvas.width / fontSize;
    
    if (newColumns > rainDrops.length) {
        for (let i = rainDrops.length; i < newColumns; i++) {
            rainDrops[i] = 1;
        }
    } else if (newColumns < rainDrops.length) {
        rainDrops.length = newColumns;
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('resize', resizeCanvas);
setInterval(draw, 30); 
