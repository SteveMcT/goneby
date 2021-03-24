let items = $('.background-item'),
    maxWidth = $(document).width();

console.log(items)

for (item of items) {
    item.style.left = ran()
}

function ran() {
    return Math.floor(Math.random() * (maxWidth)) + 'px  ';
}