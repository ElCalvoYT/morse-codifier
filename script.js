
fetch('./morse.json')
.then(res => res.json())
.then(data => {

    const normalText = document.querySelector('#normalText');
    const morseText = document.querySelector('#morseText');

    normalText.addEventListener("input", () => {
        let inputVal = normalText.value;
        let morse = "";

        for (let i = 0; i < inputVal.length; i++) {
            const currentChar = inputVal[i].toUpperCase();
            console.log(currentChar);
            

            if (currentChar === " ") {
                morse += "| ";
                continue;
            } else if (data[currentChar]){
                morse += data[currentChar] + " ";
            } else {
                morse += "? ";
            }

            morseText.innerHTML = morse.trim();
        }

        morseText.innerHTML = morse.trim();
        
    });

    morseText.addEventListener("input", () => {
        let inputVal = morseText.value.trim();
        let normal = "";
    
        let morseChars = inputVal.split(" ");
    
        for (let i = 0; i < morseChars.length; i++) {
            const currentChar = morseChars[i].trim();
    
            if (currentChar === "|") {
                normal += " ";
            } else {
                const normalChar = Object.keys(data).find(key => data[key] === currentChar);
    
                if (normalChar) {
                    normal += normalChar;
                } else {
                    normal += "?";
                }
            }
        }
    
        normalText.value = normal.toLowerCase().trim();
    });
})