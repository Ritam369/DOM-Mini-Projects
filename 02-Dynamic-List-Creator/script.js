const input = document.getElementById('item-input');
const btn = document.getElementById('add-item-btn');
const list = document.getElementById('item-list');

btn.addEventListener('click', function(){
    if(input.value === "")
    {
        alert("Please enter an item");
        return;
    }
    const li = document.createElement('li');
    const delBtn = document.createElement('button')
    delBtn.classList.add("delete")

    li.textContent = input.value;
    list.appendChild(li);
    delBtn.textContent = "Delete";
    li.appendChild(delBtn);
    input.value = '';

    delBtn.addEventListener('click', function(){
        li.remove();
    })

    li.addEventListener('dblclick', function(){
        const inputField = document.createElement('input');
        const saveBtn = document.createElement('button');
        saveBtn.innerText = "Save";
        saveBtn.classList.add("save")

        inputField.type = 'text';
        delBtn.classList.toggle("vanish");
        inputField.value = li.innerText;
        li.textContent = '';
        li.appendChild(inputField);
        inputField.focus();
        li.appendChild(saveBtn);

        inputField.addEventListener('blur', function(){
            li.textContent = inputField.value;
            delBtn.classList.toggle("vanish");
            saveBtn.remove()
            li.appendChild(delBtn);
        });
    })
})