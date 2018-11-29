const panelsEl = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panelsEl.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
});
//when the transition event ends
panelsEl.forEach(panel => {
  panel.addEventListener('transitionend', toggleActive)
});