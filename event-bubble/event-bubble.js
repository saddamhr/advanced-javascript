document.getElementById('first').addEventListener('click', function(event) {
    console.log('First item clicked')
    event.stopPropagation();
})
document.getElementById('myList').addEventListener('click', function(event) {
    console.log('UL clicked')
})
document.getElementById('container').addEventListener('click', function(event) {
    console.log('Container clicked')
})