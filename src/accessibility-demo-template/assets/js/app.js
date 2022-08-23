
    function sizeAction(){
        let size = fontSizeInput.value;

        let tag = document.querySelector('html');

        tag.style.fontSize = `${size}px`; 
    }

    function colorAction(){
        let color = colorInput.value;

        let tag = document.querySelector('body');

        tag.style.backgroundColor = color;
    }