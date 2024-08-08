fetch('https://poetrydb.org/title/Ozymandias/lines.json')
    .then(response => response.json())
    .then(data => {
        showData(data)
        console.log(data)
    })
    .catch(error => console.error('Error:', error));


function showData(data) {
    const body = document.querySelector('body')

    var card = ''
    data[0].lines.forEach(element => {
        card = card + `
        <div>${element}</div>
    `
    });

    body.innerHTML = card
}