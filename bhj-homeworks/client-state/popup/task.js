document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = modal.querySelector(".modal__close");
    const isModalClosed = document.cookie.includes("modal_closed=true");
    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }
    closeButton.addEventListener("click", function () {
        modal.classList.remove("modal_active");
        document.cookie = "modal_closed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    });
});