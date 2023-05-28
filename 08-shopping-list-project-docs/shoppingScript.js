//add items to the list
const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');

const createButton = (classes) => {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

const addItem = (e) => {
    e.preventDefault();

    const newItem = itemInput.value;

    if(newItem === ''){
        alert('Please enter an item');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = document.createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';
};


itemForm.addEventListener('submit', addItem);
