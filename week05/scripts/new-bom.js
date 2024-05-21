const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = JSON.parse(localStorage.getItem('chaptersArray')) || [];

// Populate the list with chapters from chaptersArray
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    // Add the new chapter to chaptersArray and update localStorage
    chaptersArray.push(input.value);
    setChapterList(chaptersArray);
    displayList(input.value);
    input.value = '';
    input.focus();
  }
});

function setChapterList(chaptersArray) {
  localStorage.setItem('chaptersArray', JSON.stringify(chaptersArray));
}

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';

  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    chaptersArray = chaptersArray.filter(chapter => chapter !== item);
    setChapterList(chaptersArray);
    input.focus();
  });

  li.textContent = item;
  li.appendChild(deleteButton);
  list.appendChild(li);
}