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
        searchList.innerHTML = ""; // свой текст в поиске

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

// для коментов от VUE JS

$(document).ready(function(){ 
  
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });//end keyup
  });//End Function

new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
    }
}
});