let counter  = 0;
const clicker = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');
img.onclick = () => {
    clicker.textContent = parseInt(clicker.textContent) + 1;
    if (counter % 2 != 0) {
        counter += 1;
        img.width += 20;
    }
    else {
        counter += 1;
        img.width -= 20;
    }
    
}