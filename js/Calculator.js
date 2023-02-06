// let buttons = document.getElementsByTagName('button');
// let emptyValue = "";
// console.log(buttons);
// Array.from(buttons).forEach( btn=> {
//     btn.addEventListener('click',(e)=>{
//         let buttonValue = e.target.innerHTML;
//         if(buttonValue == '='){
//             emptyValue = eval(emptyValue)
//             document.querySelector('.value-feild').value = emptyValue;
//         }
//         else if(buttonValue == 'C'){
//             emptyValue = "";
//             document.querySelector('.value-feild').value = emptyValue;
//         }
//         else{
//             emptyValue = emptyValue + buttonValue
//             document.querySelector('.value-feild').value = emptyValue;
//         }
//     })
// });


let buttons = document.getElementsByTagName('button');
let emptyValue = '';
for(items of buttons){
    items.addEventListener('click',(e)=>{
        let buttonValue = e.target.innerHTML
        if(buttonValue == '='){
            emptyValue = eval(emptyValue);
            document.querySelector('.inputValue').value = emptyValue;
        }
        else if(buttonValue == 'C'){
            emptyValue = '';
            document.querySelector('.inputValue').value = emptyValue;
        }
        else{
            emptyValue += buttonValue;
            document.querySelector('.inputValue').value = emptyValue;
        }
        
    })
}