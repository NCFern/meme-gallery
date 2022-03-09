var imageUrls = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eed3030f-5486-497e-aad1-876d32f0ffee/d9g6ohu-d4820690-6a59-4b73-8081-3993a47c753d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlZDMwMzBmLTU0ODYtNDk3ZS1hYWQxLTg3NmQzMmYwZmZlZVwvZDlnNm9odS1kNDgyMDY5MC02YTU5LTRiNzMtODA4MS0zOTkzYTQ3Yzc1M2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nTy90SjVOCg7cHfs99LjM5marGcKEO_YVJLE7f6WBsE',
  'https://i.redd.it/9tjyw7jfs2m81.jpg',
  'https://pics.me.me/when-you-see-yourself-in-pictures-how-long-how-long-58928174.png'
];
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
