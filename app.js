document.addEventListener('DOMContentLoaded', function () {
    let setterBtn = document.getElementsByClassName('setterBtn')[0];
    let setterInput = document.getElementsByClassName('setterInput')[0];
    let getter = document.getElementsByClassName('getter')[0]
    setterBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("clicked");
        if (setterInput.value == '') {
            console.log("Empty");
        }
        else {
            let newItem = document.createElement('div');
            newItem.classList.add('setter');
            let newItemInput = document.createElement('p');
            newItemInput.textContent = setterInput.value;
            let icons = document.createElement('div');
            icons.classList.add("icons");
            let iFst = document.createElement('i');
            iFst.classList.add('fa');
            iFst.classList.add('fa-pencil');
            let iScnd = document.createElement('i');
            iScnd.classList.add('fa');
            iScnd.classList.add('fa-trash');

            icons.appendChild(iFst);
            icons.appendChild(iScnd);
            newItem.appendChild(newItemInput);
            newItem.appendChild(icons);
            getter.appendChild(newItem);
        }
    });
});