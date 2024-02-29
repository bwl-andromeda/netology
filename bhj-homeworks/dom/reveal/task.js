const reveal = document.querySelectorAll('.reveal')

function isElement(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrool() {
    reveal.forEach((el) => {
        if (isElement(el)) {
            el.classList.add("reveal_active");
        }
    });
}

window.addEventListener("scroll",handleScrool);

handleScrool()