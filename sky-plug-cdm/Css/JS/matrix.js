// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    let intensity = 1;
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }
    
    function drawMatrix() {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.05 * intensity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Effet de lueur
            ctx.shadowColor = '#00ff00';
            ctx.shadowBlur = 10 * intensity;
            
            ctx.fillText(text, x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i] += 0.5 + Math.random() * 0.5;
        }
        
        // Ajouter le texte SKY PLUG CDM aléatoirement
        if (Math.random() > 0.99) {
            ctx.fillStyle = '#ffaa00';
            ctx.font = 'bold 30px monospace';
            ctx.fillText('SKY PLUG CDM', 
                Math.random() * canvas.width, 
                Math.random() * canvas.height);
        }
    }
    
    setInterval(drawMatrix, 50);
    
    // Redimensionner
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function intensifyMatrix() {
    // Augmenter l'intensité de l'effet matrix
    intensity = 2;
}
