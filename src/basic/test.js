document.getElementById('showButton').addEventListener('click', function() {
    var rectangle = document.getElementById('rectangle');
    rectangle.classList.add('visible');

    setTimeout(function() {
        rectangle.classList.remove('visible');
    }, 3000);
});
