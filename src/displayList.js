const listItems = document.getElementById('listItems');
const tasks = [
  {
    index : 1,
    description : 'read bible',
    completed : false
  },
  {
    index : 2,
    description : 'post content to socials',
    completed : true
  },
  {
    index : 3,
    description : 'eat breakfast',
    completed : true
  }
]

const listFunction = () => {
  for ( let i = 0; i < tasks.length; i++ ) {
    const list = document.createElement('li');
    list.innerHTML = `${tasks[i].index} ${tasks[i].description} ${tasks[i].completed}`
    listItems.appendChild(list)
  }
}

export {listFunction};