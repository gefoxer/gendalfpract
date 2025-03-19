const scrolBlock = document.querySelector('.scrol-block');

scrolBlock.addEventListener('wheel', (event) => {
  event.preventDefault();

  const scrollAmount = event.deltaY;

  scrolBlock.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

let currentOpenContainer = null;

function toggleAccordion(event) {
  const toggle = event.currentTarget;
  const container = toggle.closest('.container');
  const content = container.querySelector('.content');
  const arrowIcon = toggle.querySelector('.arrow-icon');
  const mainText = toggle.querySelector('.main-text');

if (currentOpenContainer && currentOpenContainer !== container) {
  const currentContent = currentOpenContainer.querySelector('.content');
  const currentArrowIcon = currentOpenContainer.querySelector('.arrow-icon');
  const currentMainText = currentOpenContainer.querySelector('.main-text');
  currentContent.classList.remove('open');
  currentArrowIcon.classList.remove('open');
  currentMainText.classList.remove('open');
} 
  content.classList.toggle('open');
  arrowIcon.classList.toggle('open');
  mainText.classList.toggle('open');  
if (content.classList.contains('open')) {
  currentOpenContainer = container;
} else {
  currentOpenContainer = null;
}
}

function scrollTape(direction) {
  const scrollContainer = document.querySelector(".Tape__scroll");
  const cardWidth = 320;
  scrollContainer.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}

