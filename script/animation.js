document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cards__item');
  const colors = ['red', 'blue', 'green'];

  cards.forEach(card => {
    let delay = Math.random() * 1500;

    setTimeout(() => {
      let colorIndex = 0;

      const changeColor = () => {
        card.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      };

      setInterval(changeColor, 500);
    }, delay);
  });
});