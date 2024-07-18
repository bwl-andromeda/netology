import Sortable from "sortablejs";


export default class TaskList {
  constructor() {

  }

  addTask() {
    const titles = ['TODO', 'IN PROGRESS', 'DONE'];
    const task = document.querySelector('.task');
    for (let i = 0; i < 3; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      task.appendChild(column);

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = titles[i];
      column.appendChild(title);

      this.description = document.createElement("div");
      this.description.classList.add("description");
      column.appendChild(this.description);

      const addCard = document.createElement("div");
      addCard.classList.add("addCard");
      const add = document.createElement("span");
      add.classList.add("addAnotherCard");
      add.textContent = '+ Add another card';
      addCard.appendChild(add);
      column.appendChild(addCard);

      const button = document.createElement("button");
      button.classList.add("addButtonCard");
      button.textContent = "Add card";
      addCard.appendChild(button);
    }
    this.addText();
  }

  addText() {
    const addAnotherCards = document.querySelectorAll(".addAnotherCard");
    const addButtonCards = document.querySelectorAll(".addButtonCard");
    const descript = document.querySelectorAll(".description");

    addAnotherCards.forEach((addAnotherCard, index) => {
      addAnotherCard.addEventListener("click", () => {
        if (!addAnotherCard.classList.contains('delete')) {
          addAnotherCard.classList.toggle('delete');
          addButtonCards[index].classList.toggle('input');

          const inputField = document.createElement('textarea');
          inputField.setAttribute('type', 'text');
          inputField.classList.add('enter');
          inputField.setAttribute('placeholder', 'Enter text here');

          addAnotherCard.parentNode.insertBefore(inputField, addAnotherCard.nextSibling);

          addButtonCards[index].addEventListener('click', () => {
            if (inputField.value.trim() !== '') {
              const randomNumber = Math.floor(Math.random() * 100);
              const divDescription = document.createElement('div');
              divDescription.classList.add('descriptionText');
              divDescription.setAttribute('draggable', 'true');
              divDescription.setAttribute('id', randomNumber);
              divDescription.textContent = inputField.value;
              descript[index].appendChild(divDescription);

              const buttonDescription = document.createElement('button');
              buttonDescription.classList.add('deleteCard');
              buttonDescription.textContent = "✖";
              divDescription.appendChild(buttonDescription);

              if (inputField && inputField.parentNode) {
                inputField.parentNode.removeChild(inputField);
              }
              addAnotherCard.classList.toggle('delete');
              addButtonCards[index].classList.toggle('input');
              inputField.value = '';
              this.deleteText();
              this.transfer();
            } else {
              addAnotherCard.classList.toggle('delete');
              addButtonCards[index].classList.toggle('input');
              inputField.parentNode.removeChild(inputField);
            }
          }, { once: true });
        }
      });
    });
  }

  deleteText() {
    const delButtons = document.querySelectorAll('.deleteCard');
    delButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const divDescription = button.parentElement;
        divDescription.remove();
      });
    })
  }

  transfer () {
    const desc = document.querySelectorAll('.description');
    const ufos = document.querySelectorAll('.descriptionText');

    for (const col of desc) {
      new Sortable(col, {
        group: 'shared',
        animation: 350,
        draggable: '.descriptionText',
      })
    }
  }
}
