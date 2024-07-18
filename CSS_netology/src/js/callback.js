export default class Callback {
  constructor() {
    
  }

  addCallback() {
    const cal = document.querySelector('.callback');

    const btn = document.createElement('button');
    btn.classList.add('btn-callback');
    cal.appendChild(btn);

    const contentElem = document.createElement("div");
    contentElem.classList.add('tooltip-help');
    cal.appendChild(contentElem);

    const writeUs = document.createElement('div');
    writeUs.classList.add('write-us');
    writeUs.textContent = "Напишите нам!";
    contentElem.appendChild(writeUs);

    const exit = document.createElement('button');
    exit.classList.add('exit');
    exit.textContent = "✖";
    contentElem.appendChild(exit);

    const windowHelp = document.createElement('input');
    windowHelp.classList.add('window-help');
    contentElem.appendChild(windowHelp);

    const send = document.createElement('button');
    send.classList.add('send');
    send.textContent = "Отправить!";
    contentElem.appendChild(send);

    btn.addEventListener('click', () => {
      contentElem.classList.toggle('active');
      btn.classList.toggle('inactive');
    });

    exit.addEventListener('click', () => {
      contentElem.classList.toggle('active');
      btn.classList.toggle('inactive');
    });
  }
}
