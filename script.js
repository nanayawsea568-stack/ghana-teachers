// When you click Primary or JHS card later, we can open the subjects
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const level = card.querySelector('h3').textContent;
    alert(`${level} resources coming soon!\nContact SEA on WhatsApp: 0542339061`);
  });
});