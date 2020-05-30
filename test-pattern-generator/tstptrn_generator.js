const generatePalette = require('tstptrn_palette_generator');

const generateTestPattern = () => {
    let palette = generatePalette(6);
    
    let testBars = generateTestBars(palette);
}

module.exports = { generateTestPattern }