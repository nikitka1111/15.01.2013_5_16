
let blok = document.querySelector('#blok')
let blok1 = document.querySelector('#blok1')
let btn = document.querySelector('#btn')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
btn.addEventListener('click', function(){
    blok1.style.display = 'block' 
    btn.style.display = 'none'
});
btn2.addEventListener('click', function(){
    blok1.style.display = 'none'
    btn.style.display = 'block'
});



let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')
let blok3 = document.querySelector('#blok3')
btn3.addEventListener('click', function(){
    blok3.style.display = 'block' 
    btn3.style.display = 'none'
});
btn4.addEventListener('click', function(){
    blok3.style.display = 'none' 
    btn4.style.display = 'block'
    btn3.style.display = 'block'
});



let btn5 = document.querySelector('#btn5')
let btn6 = document.querySelector('#btn6')
let blok5 = document.querySelector('#blok5')
btn5.addEventListener('click', function(){
    blok5.style.display = 'block' 
    btn5.style.display = 'none'
    btn6.style.display = 'block'
});
btn6.addEventListener('click', function(){
    blok5.style.display = 'none' 
    btn5.style.display = 'block'
    btn6.style.display = 'none'
});



/* Code for search */

const search = document.querySelector('.search');
const close = document.querySelector('.close');
const searchBox = document.querySelector('.searchBox');

const searchField = document.getElementById('search-field');
const searchButton = document.getElementById('search-btn');

const menuItems = document.querySelectorAll('.footer-list__link');
const searchList = document.querySelector('.search__list');

search.onclick = () => {
    searchBox.classList.add('active');
};

close.onclick = () => {
    searchBox.classList.remove('active');
    searchList.style.display = 'none';
};

searchField.oninput = () => {
    if (searchField.value.length >= 1) {
        searchList.style.display = 'flex';
        searchList.innerHTML = "";

        for (let item in menuItems) {
            const url = menuItems[item].href;
            const text = menuItems[item].innerHTML;
            const inputText = searchField.value;

            if (text !== undefined && inputText !== undefined) {
                if (text.toLowerCase().includes(inputText.toLowerCase()))
                    searchList.innerHTML += `<a href="${url.replace('#', '')}">${text}</a>`;
            }
        }
    } else {
        searchList.style.display = 'none';
    }
}

// innerHTML - get text
// href - get link