document.addEventListener('DOMContentLoaded', function() {
    let tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();
            let title = this.getAttribute('title');
            let existingTooltip = document.querySelector('.tooltip');

            if (existingTooltip && existingTooltip.innerText === title) {
                existingTooltip.classList.toggle('tooltip_active');
                return; // Прекращаем выполнение метода
            }

            if (existingTooltip) {
                existingTooltip.remove(); // Удаляем существующую подсказку
            }

            let tooltipElement = document.createElement('div');
            tooltipElement.classList.add('tooltip');
            tooltipElement.innerText = title;
            document.body.appendChild(tooltipElement);

            let tooltipRect = tooltipElement.getBoundingClientRect();
            let tooltipTop = tooltip.offsetTop - tooltipRect.height - 10;
            let tooltipLeft = tooltip.offsetLeft + (tooltip.offsetWidth - tooltipRect.width) / 2;

            tooltipElement.style.top = tooltipTop + 'px';
            tooltipElement.style.left = tooltipLeft + 'px';

            tooltipElement.classList.add('tooltip_active');
        });
    });
});
