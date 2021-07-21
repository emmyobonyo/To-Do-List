const listItems = document.getElementById('listItems');
const tasks = [
  {
    index: 1,
    description: 'read bible',
    completed: false,
  },
  {
    index: 2,
    description: 'post content to socials',
    completed: false,
  },
  {
    index: 3,
    description: 'eat breakfast',
    completed: false,
  },
];

localStorage.setItem("tasks", JSON.stringify(tasks));
const storedTasks = JSON.parse(localStorage.getItem("tasks"));

const clickCheckbox = () => {
  if (document.querySelector('p').style.textDecoration = 'underline');
}

const listFunction = () => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const list = document.createElement('li');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    p.innerHTML = `${storedTasks[i].index} ${storedTasks[i].description} ${storedTasks[i].completed}`;
    listItems.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(p);
    if (checkbox.checked == true) {
      p.style.textDecoration = 'line-through';
    }
  }
};

export { listFunction as default };