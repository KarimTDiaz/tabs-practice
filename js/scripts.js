const listElement = document.getElementById('list');
const listIcons = document.querySelectorAll('.list__icon');
const textsElements = document.querySelectorAll('.text');
const ballElement = document.getElementById('ball');

const rootStyles = document.documentElement.style;

const changeTab = (dataset, ev) => {
  rootStyles.setProperty('--bg-color', dataset);
  let indexIcon = [...listIcons].indexOf(ev);

  listIcons.forEach((icon, index) => {
    icon.classList.remove('list__icon--color');
    ev.classList.add('list__icon--color');
    textsElements[index].classList.remove('text--show');
  });
  textsElements[indexIcon].classList.add('text--show');

  rootStyles.setProperty('--translate', ev.offsetLeft + 'px');
};

listElement.addEventListener('click', ev => {
  changeTab(ev.target.dataset.color, ev.target);
});
