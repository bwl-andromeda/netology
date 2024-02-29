// Получили все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события для каждого элемента
dropdowns.forEach(function(dropdown) {
    // Нахожу элементы внутри текущего выпадающего списка
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');

    // Функция для сворачивания/разворачивания списка
    function toggleListVisibility() {
        dropdownList.classList.toggle('dropdown__list_active');
    }

    // Функция для замены значения по выбору соответствующего пункта меню
    function replaceDropdownValue(event) {
        event.preventDefault();
        dropdownValue.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    }

    // Назначаем обработчики событий
    dropdownValue.addEventListener('click', toggleListVisibility);

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', replaceDropdownValue);
    });
});
