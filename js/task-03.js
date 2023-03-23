const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: 200, 
    height: 150,
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: 200, 
    height: 150,
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: 200, 
    height: 150,
    
  },
];


const imagesList = document.querySelector('.gallery');

const imagesGallery = images.map(image => 
  `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="${image.width}" height="${image.height}" class="images"></li>`)
  .join('');



imagesList.insertAdjacentHTML("beforeend", imagesGallery);