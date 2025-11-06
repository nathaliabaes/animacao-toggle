const toggleContainer = document.querySelector('.toggle-container'); 
const backgroundContainer = document.querySelector('.background-container'); 

// Fade-in suave ao carregar a página
window.addEventListener('load', () => { 
  document.body.classList.add('loaded'); 

});
// Alterna o tema ao clicar no toggle
toggleContainer.addEventListener('click', () => { 
    toggleContainer.classList.toggle('dark'); /* adiciona ou remove a classe 'dark' no container do toggle */
    backgroundContainer.classList.toggle('dark');

});

