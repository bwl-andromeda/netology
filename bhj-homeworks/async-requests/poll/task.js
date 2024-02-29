document.addEventListener('DOMContentLoaded', async function(){
    try 
    {
        const responce = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
        const data = await responce.json();
        const title = document.getElementById('poll__title');
        const answer = document.getElementById('poll__answers');
        title.textContent = data["data"]["title"];
        data["data"]["answers"].forEach(answ => {
            const button = document.createElement("button");
            button.textContent = answ;
            button.classList.add('poll__answers');
            button.addEventListener('click', async () => {
                alert('Спасибо ваш голос засчитан!');
            })
            answer.appendChild(button);
        });
        
    } catch (error) {
        console.error('Ошибка загрузки:', error);        
    }
});