var darkMode = document.getElementsByClassName('light');
var lightMode = document.getElementsByClassName('dark');
var sunSwitch = document.getElementById('sun');
var moonSwitch = document.getElementById('moon');


moonSwitch.addEventListener('click', () => {
    [...darkMode].forEach(element => {
        if (element.classList.contains('light')) {
            element.classList.remove('light');
            element.classList.add('dark');
        }
    });
})

sunSwitch.addEventListener('click', () => {
    [...lightMode].forEach(element => {
        if (element.classList.contains('dark')) {
            element.classList.remove('dark');
            element.classList.add('light');
        }
    });
})


