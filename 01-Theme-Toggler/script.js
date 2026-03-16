const btn = document.getElementById('theme-toggle-btn');
const status = document.getElementById('theme-status')
btn.addEventListener("click", function(){
    document.body.classList.toggle('dark');
    btn.innerText = document.body.classList.contains('dark') ? "Toggle Light Mode" : "Toggle Dark Mode";
    status.innerText = document.body.classList.contains('dark') ? "Dark" : "Light";
});