

let chars = ['Fiel', 'Activo', 'Peresozo', 'Peresozo'];

let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});

console.log(uniqueChars);



function renderizado(array) {
    array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
}

const result = renderizado(chars)

console.log(result)