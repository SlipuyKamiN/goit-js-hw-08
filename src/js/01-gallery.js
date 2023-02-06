import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const makeMarkup = array => {
  return array
    .map(
      element =>
        `<a class="gallery__item" href="${element.original}">
         <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
    </a>`
    )
    .join('');
};

refs.gallery.insertAdjacentHTML('beforeend', makeMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
