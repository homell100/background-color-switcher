var btnList = document.querySelectorAll(".button");

btnList.forEach(attachClickEvent);

console.log(btnList);

function attachClickEvent(item){
    item.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor(event){
    document.body.style.backgroundColor = event.target.id;
}