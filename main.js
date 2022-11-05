const btnReset = document.querySelector(".results__btn")
const billInput = document.querySelector(".inputs-section__bill-input")
const bottons = document.querySelectorAll(".btns__button")
let billValue = parseInt(billInput.value)
let peopleInput = document.querySelector(".inputs-section__people-input")
let peopleValue = parseInt(peopleInput.value)
let tipAmount = document.querySelector(".results__tip-value")
let tipTotal = document.querySelector(".results__tip-total")
let btnValue = 5
bottons.forEach(element =>{
    element.addEventListener("click", event=>{
        bottons.forEach(element =>{
            element.classList.remove("btns__button--selected")
        })
        element.classList.add("btns__button--selected")
        btnValue = (parseInt(event.target.innerText.slice(0, -1)))


        calculation()

    })
})
billInput.addEventListener("input", ()=>{
    billValue = parseFloat(billInput.value)
    calculation()
})
peopleInput.addEventListener("input", ()=>{
    peopleValue = parseFloat(peopleInput.value)
    calculation()
})



function calculation(){
    tipAmount.innerText = ((billValue * btnValue / 100) / peopleValue).toFixed(2)
    tipTotal.innerText = (((billValue * btnValue / 100) + billValue) / peopleValue).toFixed(2)
}

