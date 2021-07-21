const updateValue = () => {
  if (document.querySelector('input').checked == true) {
    document.querySelector('p').style.textDecoration = 'line-through';
  }
}

export { updateValue as default }