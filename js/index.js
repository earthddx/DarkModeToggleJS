var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.mode').textContent = "Dark Mode";
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('.mode').textContent = "Light Mode"
    }
});

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout( () => {
        document.documentElement.classList.remove('transition');
    }, 1000)
}