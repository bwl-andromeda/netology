function rotateText() {
    const rotator = document.querySelector('.rotator');
    const rotatorCases = rotator.querySelectorAll('.rotator__case');
    const activeCase = rotator.querySelector('.rotator__case_active');

    // Найдем индекс активного элемента
    const activeIndex = Array.from(rotatorCases).indexOf(activeCase);

    // Снимаем класс rotator__case_active с текущего элемента
    activeCase.classList.remove('rotator__case_active');

    // Вычисляем индекс следующего элемента
    const nextIndex = (activeIndex + 1) % rotatorCases.length;

    // Добавляем класс rotator__case_active следующему элементу
    rotatorCases[nextIndex].classList.add('rotator__case_active');
}

setInterval(rotateText, 1000);