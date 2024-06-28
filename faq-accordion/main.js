const faqs = document.querySelectorAll('.panel');

const toggleDetails = (event) => {
  const img = event.target.querySelector('img');
  if (!img) return;

  if (event.target.open) {
    img.src = './assets/images/icon-minus.svg';
  } else {
    img.src = './assets/images/icon-plus.svg';
  }
};

faqs.forEach((details) => {
  details.addEventListener('toggle', toggleDetails);
});
