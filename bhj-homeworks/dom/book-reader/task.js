const fontControls = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontControls.forEach(control => {
    control.addEventListener('click', function(event) {
        event.preventDefault();

        // Удаляем класс font-size_active у всех элементов управления
        fontControls.forEach(control => {
            control.classList.remove('font-size_active');
        });

        // Устанавливаем класс font-size_active на текущем элементе управления
        control.classList.add('font-size_active');

        // Получаем значение атрибута data-size текущего элемента
        const fontSize = control.getAttribute('data-size');

        // Удаляем все классы связанные с размером шрифта из элемента книги
        book.classList.remove('book_fs-small', 'book_fs-big');

        // Добавляем класс связанный с выбранным размером шрифта в элемент книги
        if (fontSize === 'small') {
            book.classList.add('book_fs-small');
        } else if (fontSize === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});