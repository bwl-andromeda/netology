export default class Collapse {
  constructor() {
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum et odio tristique aliquet. Nulla facilisi. Nullam ac massa felis. Sed id fringilla magna. Sed eleifend tellus eget eros eleifend, nec ullamcorper mauris vestibulum. Quisque sagittis tempor libero, sit amet tincidunt odio fringilla sed. Fusce consectetur tellus eget libero dictum, id luctus lacus varius. Maecenas condimentum, velit sed sodales ultricies, est elit commodo ipsum, non sodales elit arcu eget justo.';
  }

  addCollapse() {
    const col = document.querySelector('.collapse');

    const btn = document.createElement('button');
    btn.classList.add('btn-collapse');
    btn.textContent = 'Collapse';
    col.appendChild(btn);

    const contentElem = document.createElement("p");
    contentElem.textContent = this.content;
    contentElem.classList.add('tooltip-content');
    col.appendChild(contentElem);

    btn.addEventListener('click', () => {
      contentElem.classList.toggle('active');
    });
  }
}
