const generatePallette = (numOfShades) => {
    let palette = [];
    let colorIndexes = shuffle([ ...Array(colors.Length).keys() ].slice(0, numOfShades - 1));
    for (let i = 0; i < numOfShades; i++) {
        let pickedBase = colors[colorIndexes[i]];
        let newColor = rgb(pickedBase.r, pickedBase.g, pickedBase.b);
        palette.push(newColor);
    }
    return palette;
}

const shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

const colors = [
    {
        "name": "blue",
        "r": 0,
        "g": 0,
        "b": 255
    },
    {
        "name": "green",
        "r": 0,
        "g": 255,
        "b": 0
    },
    {
        "name": "red",
        "r": 255,
        "g": 0,
        "b": 0
    },
    {
        "name": "yellow",
        "r": 255,
        "g": 255,
        "b": 0,
    },
    {
        "name": "magenta",
        "r": 255,
        "g": 0,
        "b": 255
    },
    {
        "name": "teal",
        "r": 0,
        "g": 255,
        "b": 255
    }
]

module.exports = { generatePallette };