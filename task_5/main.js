const accs = document.querySelectorAll('.main__item');

for(item of accs) {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for(el of accs) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}