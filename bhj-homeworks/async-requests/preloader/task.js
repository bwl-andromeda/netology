document.addEventListener('DOMContentLoaded',function() {
    let items = document.getElementById('items');
    let loadeer = document.getElementById('loader');

    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses',true);


    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            let resp = JSON.parse(xhr.responseText);
            loadeer.classList.remove('loader_active');
            let valute = resp["response"]["Valute"];
            for (key in valute)
            {
                let item = valute[key];
                let code = item["CharCode"];
                let value = item["Value"];
                let html_text = 
                '<div class="item">' +
                '<div class="item__code">' + code + '</div>' +
                '<div class="item__value">' + value + '</div>' +
                '<div class="item__currency">руб.</div>' + '</div>';
                items.insertAdjacentHTML('beforeend',html_text);
            };
        };
    })
    xhr.send();
});
