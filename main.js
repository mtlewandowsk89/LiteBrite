let selectedColor;
let power = false;

const colors = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink',
'MediumVioletRed', 'PaleVioletRed', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange', 'Orange', 'Gold', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin',
'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'BlueViolet',
'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'RebeccaPurple', 'Indigo', 'MediumSlateBlue', 'SlateBlue', 'DarkSlateBlue','GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime',
'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab', 'Olive',
'DarkOliveGreen', 'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise',
'DarkTurquoise', 'CadetBlue', 'SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'RoyalBlue',
'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod',
'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell',
'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray',
'SlateGray', 'DarkSlateGray', 'Black'];

setTimeout(() => {
    let board = document.getElementById('board');
    for (i = 1; i <= 3216; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'hole';
        newDiv.addEventListener('click', (e) => {
            if (e.target.style.backgroundColor.toLowerCase() === selectedColor.toLowerCase()) {
                e.target.style.backgroundColor = '';
            } else {
                e.target.style.backgroundColor = selectedColor;
            }
        });
        board.appendChild(newDiv);
    }
    lightDown();

    let colorSection = document.getElementById('colors');
    colors.forEach((color) => {
        let colorDiv = document.createElement('div');
        colorDiv.className = 'color';
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', (e) => {
            Array.from(e.target.parentElement.children).forEach((sibling) => {
                sibling.style.border = 'none';
            })
            e.target.style.border = '5px solid #000';
            selectedColor = color;
        });
        colorSection.appendChild(colorDiv);
    })
}, 100);

flipLight = () => {
    let button = document.getElementById('button');
    if (power) {
        button.style.backgroundImage = "url('./off.PNG')"
        lightDown();
    } else {
        button.style.backgroundImage = "url('./on.png')"
        lightUp();
    }
}

lightUp = () => {
    Array.from(document.getElementsByClassName('hole')).forEach((hole) => {
        if (hole.style.backgroundColor) {
            hole.style.opacity = 1;
        } else {
            hole.style.opacity = 0;
        }
    });
    power = true;
}

lightDown = () => {
    Array.from(document.getElementsByClassName('hole')).forEach((hole) => {
        hole.style.opacity = 0.4;
    });
    power = false;
}

reset = () => {
    Array.from(document.getElementsByClassName('hole')).forEach((hole) => {
        hole.style.backgroundColor = '';
    });
    button.style.backgroundImage = "url('./off.PNG')"
    lightDown();
    power = false;
}