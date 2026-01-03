const display = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let currentinput ='';
buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        const value = button.textContent;

        if(button.classList.contains('clear')){
            currentinput= '';
            display.textContent ='';
        } else if(button.classList.contains('equal')){
            try{
                currentinput = currentinput.replace(/x/g, '*').replace(/÷/g, '/');
                display.textContent = eval(currentinput);
                currentinput = display.textContent;
            } catch{
                display.textContent ='Error';
                currentinput = '';
            }
        }
        else{
            currentinput +=value;
            display.textContent = currentinput;
        }
    });
});