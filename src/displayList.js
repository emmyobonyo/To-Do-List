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
    completed: true,
  },
  {
    index: 3,
    description: 'eat breakfast',
    completed: true,
  },
];

const listFunction = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const list = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const p = document.createElement('p');
    p.innerHTML = `${tasks[i].index} ${tasks[i].description} ${tasks[i].completed}`;
    listItems.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(p);
  }
};

export { listFunction };