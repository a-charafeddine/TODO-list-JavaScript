let addClickBtn = document.querySelector('.btn-submit'),
     removeClickBtn = document.querySelector('.btn-remove'),
     editClickBtn = document.querySelector('.btn-edit'),
     inputText = document.getElementById('todo-input-field'),
     listToDo = document.querySelector('.todo-list ul');

inputText.focus();

/*---Disabled attribute to BTN---- */
function toggleAttributeBtn(){
     if (listToDo.querySelectorAll('li.selected').length) {
          removeClickBtn.removeAttribute('disabled');
          editClickBtn.removeAttribute('disabled');
     } else {
          removeClickBtn.setAttribute('disabled', 'disabled');
          editClickBtn.setAttribute('disabled', 'disabled');
     }
}

/*---Add item to TODO List---*/
addClickBtn.addEventListener('click', function () {
     if (inputText.value.length) {
          const elementLi = document.createElement('li');
          const textLi = document.createTextNode(inputText.value);
          elementLi.appendChild(textLi)
          listToDo.appendChild(elementLi);
          inputText.value = "";
     }
     inputText.focus();
})

/*---toggle class selected to item clicked ---*/
listToDo.addEventListener('click', function (e) {
     e.target.classList.toggle('selected');
     toggleAttributeBtn();
})


/*---Remove Item Selected---*/
removeClickBtn.addEventListener('click', function () {
     let itemsSelected = listToDo.querySelectorAll('li.selected');
     if (itemsSelected.length) {
          for (let index = 0; index < itemsSelected.length; index++) {
               itemsSelected[index].parentNode.removeChild(itemsSelected[index])
          }
     }
     toggleAttributeBtn();
})

/*---Edit Item Selected---*/
editClickBtn.addEventListener('click', function () {
     if (listToDo.querySelectorAll('li.selected').length == 1) {
          inputText.value = listToDo.querySelectorAll('li.selected')[0].innerText;
          listToDo.querySelectorAll('li.selected')[0].remove();
          toggleAttributeBtn();
     }else{
          confirm('Veuillez selectionner un seul element s\'il vous plait')
     }
})