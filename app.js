function newStyle(){
    let newColor = '';
    let newFont ='';
    let x = Math.floor(Math.random()*7);
    switch(x){
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'blue';
            newFont ='Florence, cursive';
            break;
        case 2: 
            newColor = 'orange';
            newFont = 'Verdana';
            break;
        case 3: 
            newColor = 'green';
            newFont = 'Courier New';
            break;
        case 4:
            newColor = 'yellow';
            newFont = 'Georgia';
            break;
        case 5:
            newColor = 'cyan';
            newFont = 'Palatino';
            break;
        case 6:
            newColor = 'lime';
            newFont = 'Impact';
            break;
    }


let text = document.getElementById('logo');
text.style.color = newColor;
text.style.fontFamily = newFont;
}