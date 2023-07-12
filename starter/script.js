'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal');
console.log(btsOpenModal);

for (let i = 0; i < btsOpenModal.length; i++) {
  console.log(
    btsOpenModal[i].addEventListener('click', function () {
      console.log('Button clicked');
      modal.classList.remove('hidden');
    })
  );
}
