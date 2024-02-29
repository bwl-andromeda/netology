// Получаем ссылки на элементы DOM
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

// Назначаем обработчик события для каждой вкладки
tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        // Удаляем класс 'tab_active' у всех вкладок и 'tab__content_active' у всех содержимых элементов
        tabs.forEach(function(t) {
            t.classList.remove('tab_active');
        });
        tabContents.forEach(function(content) {
            content.classList.remove('tab__content_active');
        });

        // Добавляем класс 'tab_active' выбранной вкладке и 'tab__content_active' соответствующему содержимому
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
    });
});
