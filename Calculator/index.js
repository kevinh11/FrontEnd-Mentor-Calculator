
const screen = document.querySelector(".screen");
let keys = document.getElementsByClassName("key");
let root = document.documentElement;
let toggle = document.querySelector(".slider-button")
let themeIndex = 0;
let displaystring = ""
let operationstring = ""
let themes = [{
    bgCol: 'hsl(222, 26%, 31%)',
    screenCol: 'hsl(224, 36%, 15%)',
    keyBg: 'hsl(30, 25%, 89%)',
    keyShadow: 'hsl(28, 16%, 65%)',
    delAndResetBg: 'hsl(185, 42%, 37%)',
    delAndResetShadow:  'hsl(185, 58%, 25%)',
    keypadBG: 'hsl(223, 31%, 20%)',
    toggleBG: 'hsl(25, 98%, 40%)',
    toggleBGShadow: 'hsl(25, 99%, 27%)',
    themeText: 'white',
    keyText: 'black',
    ballPosition: '0px'
    

}
,
{
    bgCol: 'hsl(0, 0%, 90%)',
    screenCol: 'hsl(0, 0%, 93%)',
    keyBg: 'hsl(45, 7%, 89%)',
    keyShadow: 'hsl(35, 11%, 61%)',
    delAndResetBg: 'hsl(185, 42%, 37%)',
    delAndResetShadow:  'hsl(185, 58%, 25%)',
    keypadBG: 'hsl(0, 5%, 81%)',
    toggleBG: 'hsl(25, 98%, 40%)',
    toggleBGShadow: 'hsl(25, 99%, 27%)',
    themeText : 'black',
    keyText: 'black',
    ballPosition:'25px'
    

},
{
    bgCol: 'hsl(268, 75%, 9%)',
    screenCol: 'hsl(268, 71%, 12%)',
    keyBg: 'hsl(268, 47%, 21%',
    keyShadow: 'hsl(290, 70%, 36%)',
    delAndResetBg: ' hsl(281, 89%, 26%)',
    delAndResetShadow:  ' hsl(285, 91%, 52%)',
    keypadBG: 'hsl(268, 71%, 12%) ',
    toggleBG: 'hsl(25, 98%, 40%)',
    toggleBGShadow: 'hsl(25, 99%, 27%)',
    themeText : 'hsl(52, 100%, 62%)',
    keyText: 'hsl(52, 100%, 62%)',
    ballPosition:'50px'
    

}]
Array.from(keys).forEach(el => {
    el.addEventListener('click', ()=> {
        if (el.textContent == "=") {
            screen.textContent = `${eval(operationstring)}`
            operationstring = screen.textContent
            displaystring = operationstring
        }
        else if (el.textContent == "RESET") {
            screen.textContent = ""
            displaystring = ""
            operationstring = ""
          
        }
        else if (el.textContent == "DEL") {
            operationstring = operationstring.slice(0,-1);
            displaystring = displaystring.slice(0,-1);
            screen.textContent  = displaystring
        }
        else {
            if (!el.classList.contains("operator")) {
                displaystring += el.textContent;
            }
            else {
                displaystring = ""
            }
            operationstring += el.textContent;
            screen.textContent = displaystring;
 
        }
    });
})


function changeProperty(theme) {
    for (const property in theme) {
        root.style.setProperty(`--${property}`, `${theme[property]}`)
    }

}

toggle.addEventListener('click', ()=> {
    themeIndex++;
    if (themeIndex>themes.length-1) {
        themeIndex = 0;
    } 
    changeProperty(themes[themeIndex])
})

changeProperty(themes[0])