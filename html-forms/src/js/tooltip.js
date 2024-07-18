export default class Tooltip {
    constructor(origin) {
        this.origin = origin;
        this.title = "Popover title";
        this.content = "And here`s some amazing content. It`s very engaging. Right?";
    }

    addTooltip() {
        // создаём тэги и классы для тултипа
        const button = this.origin.querySelector(".button");
        this.tooltipElem = document.createElement("div");
        this.tooltipElem.classList.add('tooltip');

        const titleElem = document.createElement("h3");
        titleElem.textContent = this.title;
        titleElem.classList.add('tooltip-title');
        this.tooltipElem.appendChild(titleElem);

        const contentElem = document.createElement("p");
        contentElem.textContent = this.content;
        contentElem.classList.add('tooltip-content');
        this.tooltipElem.appendChild(contentElem);

        this.origin.appendChild(this.tooltipElem);

        button.addEventListener("click", () => {
            this.showTooltip();
        });

        // ниже идёт расположение тултипа
        const { top, width, height, right } = button.getBoundingClientRect();

        // const tooltipHeight= this.tooltipElem.offsetHeight;
        // const tooltipWidth = this.tooltipElem.offsetWidth;

        // const buttonCenterY = top + height / 2;
        // const buttonCenterX = right + width / 2;

        // // Располагаем тултип по горизонтали по центру кнопки
        // this.tooltipElem.style.left = `${buttonCenterY - tooltipHeight / 2}px`;
        this.tooltipElem.style.left = `3%`;
        // // Располагаем тултип по вертикали по центру кнопки
        // this.tooltipElem.style.bottom = `${buttonCenterX + tooltipWidth / 2 - 35}px`;
        this.tooltipElem.style.bottom = `41%`;
    }

    showTooltip() {
        // добавляем и убираем тултип
        this.tooltipElem.classList.toggle('active');
    }
}
