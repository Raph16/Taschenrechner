// DOM
const tasten = [...document.querySelectorAll('.taste')];
const listeKeycode = tasten.map(taste => taste.dataset.key);
const bildschirm = document.querySelector('.bildschirm');

document.addEventListener('keydown', (e) => {
    const wert = e.keyCode.toString();
    rechnen(wert)

})

document.addEventListener('click', (e) => {
    const wert = e.target.dataset.key;
    rechnen(wert)

})

function rechnen(wert) {
    if (listeKeycode.includes(wert)) {
        switch (wert) {
            case '8':
                bildschirm.textContent = "";
                break;
            case '13':
                const rechne = eval(bildschirm.textContent);
                bildschirm.textContent = rechne;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(wert);
                const taste = tasten[indexKeycode];
                bildschirm.textContent += taste.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('ein fehler ist aufgetreten : ' + e.message)
})