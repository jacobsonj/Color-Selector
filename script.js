var colors = ['blue', 'yellow', 'red', 'aliceblue', 'black', 'indigo', 'deeppink', 'tomato', 'green', 'darkblue', 'navy', 'coral', 'azure', 'bisque', 'brown', 'gray', 'khaki', 'aqua', 'pink', 'snow'];

var usedColors = [];

var colorOptions = document.getElementById('color-selector');

var addButton = document.getElementById('button-holder');

var origBackgroundColor = '#f1f0d8';

var removeButton = document.getElementById('remove-button');

var currBackgroundColor = '#f1f0d8';

// creates original 3 buttons on load
for(var i = 0; i <= 2; i++){
    genOriginalButtons(colors[i]);
}

function genOriginalButtons(color){
    genButton(color);
}

// inserts color options into select
for(var i = 3; i < colors.length; i++){
    addColorOptions(colors[i]);
}

function addColorOptions(color){
    if(usedColors.includes(color)){
        return;
    }
    var newColor = document.createElement('option');
    newColor.innerText = color;
    newColor.value = color;
    newColor.classList.add('individualColor');
    colorOptions.appendChild(newColor);
}

// // generates color buttons on click
var newColorButton = document.getElementById('add-new');

newColorButton.addEventListener('click', function(){
    var currColor = colorOptions.value;
    if(!currColor){
        return;
    }
    genButton(currColor);
    document.querySelector('#color-selector > [value=' + currColor + ']').remove(); 
});


// // remove color button
var removeButton = document.getElementById('remove');

remove.addEventListener('click', function(){
    document.querySelector('#button-holder > [value =' + currBackgroundColor + ']').remove();
    addColorOptions(currBackgroundColor);
    document.body.style.backgroundColor = origBackgroundColor;
    currBackgroundColor = origBackgroundColor;
})

function genButton(color){
    var colorButton = document.createElement('button');
    colorButton.innerText = color;
    colorButton.style.backgroundColor = color;
    colorButton.classList.add('allButtons');
    colorButton.value = color;
    if(color === 'black'){
        colorButton.classList.add('blackButton');
    }
    colorButton.addEventListener('click', function(){
        document.body.style.backgroundColor = color;
        currBackgroundColor = color;
    })
    colorButton.addEventListener('dblclick', function(){
        document.body.style.backgroundColor = origBackgroundColor;
        currBackgroundColor = origBackgroundColor;
    })
    addButton.appendChild(colorButton);
}





    
    

