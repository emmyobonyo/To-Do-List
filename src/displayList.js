const listItems = document.getElementById('listItems');
const checkbox = document.getElementsByClassName('checkbox');

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

const listFunction = (e) => {
  for (let i = 0; i < storedTasks.length; i += 1) {
    const list = document.createElement('li');
    const p = document.createElement('p');
    p.className = 'paragraph'
    p.id = `paragraph-${i}`
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${i}`;
    checkbox.className = 'checkbox'
    checkbox.checked = false;
    checkbox.onclick = function(){
      if (checkbox.checked) {
        p.style.textDecoration = 'line-through';
        tasks[i].completed = true
        localStorage.clear()
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      else {
        p.style.textDecoration = 'none';
        tasks[i].completed = false
        localStorage.clear()
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    };
    p.innerHTML = `${storedTasks[i].index} ${storedTasks[i].description} ${storedTasks[i].completed}`;
    listItems.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(p);
  }
};

// const checkbox = document.getElementsByClassName('checkbox');
// console.log(checkbox);
// const p = document.querySelector('p');
// const checked = () => {
//   p.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
// }
// checkbox.addEventListener('change', checked);

export { listFunction as default };