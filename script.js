//one class to create the object person, album, movie ****model
class Meme{
    constructor(topText, bottomText, image){
        this.topText = topText;
        this.bottomText = bottomText;
        this.image = image;
    }
}

//take argument




//**view */ class for the UI which contains methods
/* class UI{
    constructor(htmlConstructor){
        this.htmlConstructor = () => {
            const newMeme = new Meme(document.querySelector('.top-text'), document.querySelector('.bottom-text'), document.querySelector('.meme-img'));
            let html = '<div class="display-image">%image%</div> <div class="display-top-text">%toptext%</div> <div class="display-bottom-text">%bottomtext%</div>'
            let newHtml = html.replace('%toptext%', newMeme.topText);
            newHtml = newHtml.replace('%bottomtext%', newMeme.bottomText);
            newHtml = newHtml.replace('%image%', newMeme.image);
            display.insertAdjacentHTML('beforeend', newHtml);
            
            console.log('yeet');
        }
    }
} */

class UI {
    htmlConstructor(newMeme){
        let html ='<div class="display-meme"><div class="display-image"><img src="%image%"></img></div> <div class="display-top-text">%toptext%</div> <div class="display-bottom-text">%bottomtext%</div><div class="remove-meme">X</div>';
        let newHtml = html.replace('%toptext%', newMeme.topText);
            newHtml = newHtml.replace('%bottomtext%', newMeme.bottomText);
            newHtml = newHtml.replace('%image%', newMeme.image);
            document.querySelector('.display').insertAdjacentHTML('beforeend', newHtml);
            
    }
//creates/insert the html for the UI DISPLAY

//clear fields method
    clearFields(){
        document.getElementById('meme-form').reset();
    }
//remove something/object
    removeMeme(target){
        if(target.className === 'remove-meme'){
            target.parentElement.remove();
        }
    }
}


//controller combines UI and model
//event handler w function


//get values


//instantiate new class/object album with variable name

//instantiate new UI --- const ui = new UI();
/* function eventListeners(){
    const ui = new UI();
    const form = document.querySelector('#meme-form');
    form.addEventListener('submit', ui.htmlConstructor);
}
eventListeners(); */

document.getElementById('meme-form').addEventListener('submit', function(e){
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const image = document.getElementById('meme-img').value;
    

    if(topText.length == 0 || bottomText.length == 0 || image.length == 0){
        alert('Do not leave any areas empty');
        console.log('yeet2');
        
    } else{
        const newMeme = new Meme(topText, bottomText, image);
        const ui = new UI();
        ui.htmlConstructor(newMeme);
        ui.clearFields();
        e.preventDefault();
    }
});
//call relevant methods



//seperate event handler for removing
document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeMeme(e.target);
    ui.clearFields();
    e.preventDefault();
});