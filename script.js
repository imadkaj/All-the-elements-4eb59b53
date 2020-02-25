document.querySelector('h1').innerText = document.title;
document.querySelector('h1').classList.add("h1");

var list = document.querySelectorAll('p');
for (i in list) {
    list[i].classList.add("lijst");
}