// Interatividade suave e animações de scroll
document.addEventListener('DOMContentLoaded', () => {

    // Efeito de rolagem suave ao clicar no botão "EXPLORAR"
    const enterBtn = document.getElementById('enterBtn');
    enterBtn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Animação ao passar o mouse nas imagens (Efeito Tilt Leve)
    const cards = document.querySelectorAll('.polaroid-frame');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            card.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) rotate(${x * 0.01}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0px, 0px) rotate(0deg)';
        });
    });

    console.log("Ars Conservandi Website loaded successfully.");
});
