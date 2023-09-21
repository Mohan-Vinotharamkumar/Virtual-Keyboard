
var buttons = document.querySelectorAll('.key');
var buttonContainer = document.getElementById('keyBoard');

document.addEventListener('keydown', function (event) {
    var key = event.key;
    var Upperkey = key.toUpperCase();
    var CapitalKey = (key.charAt(0).toUpperCase())+key.slice(1);

    buttons.forEach(function (button) {
        if (button.textContent === Upperkey || button.textContent === CapitalKey) {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        }
    });
});