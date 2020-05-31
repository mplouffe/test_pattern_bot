const generatePalette = require('tstptrn_palette_generator');
const generateTestBars = require('tstprtn_image_compositor');

const generateTestPattern = () => {
    let palette = generatePalette(6);
    
    let testBars = generateTestBars(palette);
}

module.exports = { generateTestPattern }