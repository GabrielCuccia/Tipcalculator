const btnReset = document.querySelector(".results__btn")
const billInput = document.querySelector(".inputs-section__bill-input")
const bottons = document.querySelectorAll(".btns__button")
let billValue = parseInt(billInput.value)
let peopleInput = document.querySelector(".inputs-section__people-input")
let peopleValue = parseInt(peopleInput.value)
let tipAmount = document.querySelector(".results__tip-value")
let tipTotal = document.querySelector(".results__tip-total")
let btnValue = 5
let btnCustom = document.querySelector(".btns__custom")
let error = document.querySelector("#alert")
bottons.forEach(element =>{
    element.addEventListener("click", event=>{
        resetBtn()
        element.classList.add("btns__button--selected")
        btnValue = (parseInt(event.target.innerText.slice(0, -1)))


        calculation()

    })
})
billInput.addEventListener("input", ()=>{
    billValue = parseFloat(billInput.value)
    if (isNaN(billValue)){
        billValue = 0
    }
    else{
        calculation()
    }
    
})
peopleInput.addEventListener("input", ()=>{
    peopleValue = parseFloat(peopleInput.value)
    if (peopleValue == 0 || isNaN(peopleValue) ){
        peopleInput.style.borderColor = "rgb(164, 68, 68)"
        error.classList.add("alert")
        
        reset()
        
    }
    else{
        calculation()
        peopleInput.style.borderColor = "var(--Strong-cyan)"
        error.classList.remove("alert")
    }
    
})
btnReset.addEventListener("click", ()=>{
    reset()
})
btnCustom.addEventListener("input", ()=>{
    
    btnValue = parseFloat(btnCustom.value)
    if (isNaN(btnValue)) {
        btnValue = 0
    }
    else
    
    calculation()
    
})
btnCustom.addEventListener("click", ()=>{
    resetBtn()
})




function calculation(){
    tipAmount.innerText = ((billValue * btnValue / 100) / peopleValue).toFixed(2)
    tipTotal.innerText = (((billValue * btnValue / 100) + billValue) / peopleValue).toFixed(2)
  
   
}
function reset(){
    tipTotal.innerText = 0
    tipAmount.innerText = 0
}
function resetBtn(){
    bottons.forEach(element =>{
        element.classList.remove("btns__button--selected")
        
    })
}


