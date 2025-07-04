let string = "";
let inputField = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    handleInput(e.target.innerHTML);
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;

  
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    string += key;
    inputField.value = string;
  } else if (key === 'Enter') {
    try {
      string = eval(string);
      inputField.value = string;
    } catch {
      inputField.value = "Error";
      string = "";
    }
  } else if (key === 'Backspace') {
    string = string.slice(0, -1);
    inputField.value = string;
  } else if (key === 'Escape') {
    string = "";
    inputField.value = string;
  }
});


function handleInput(value) {
  if (value === '=') {
    try {
      string = eval(string);
      inputField.value = string;
    } catch {
      inputField.value = "Error";
      string = "";
    }
  } else if (value === 'C') {
    string = "";
    inputField.value = string;
  } else {
    string += value;
    inputField.value = string;
  }
}
