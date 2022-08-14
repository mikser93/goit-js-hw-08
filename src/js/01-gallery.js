// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const imgCollection = document.querySelector('.gallery');
const imgMarkup = galleryItems
  .map(
    item =>
      `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`
  )
  .join('');

imgCollection.insertAdjacentHTML('afterbegin', imgMarkup);

new SimpleLightbox('.gallery a', {
  //   captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
