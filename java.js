function openfoto(foto) {
    var photo = document.getElementById('foto' + foto);
    photo.style.width = '300px';
    photo.style.height = '300px';
}


document.querySelectorAll('.foto').forEach(photo => {
    photo.addEventListener('mouseleave', function() {
        this.style.width = '200px';
        this.style.height = '200px';
    });
});
