/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet = 3.281
const gallon = 0.264
const pound = 2.204
const inputNumber = document.getElementById("num")
const convertBtn = document.getElementById("btn")
let lengthResult = document.getElementById("lengthresult")
let volumeResult = document.getElementById("volumeresult")
let massResult = document.getElementById("massresult")
convertBtn.addEventListener("click", function(){
     lengthResult.innerHTML = `${inputNumber.value} meters = ${(inputNumber.value * feet).toFixed(3)} feet | ${inputNumber.value} feet = ${(inputNumber.value / feet).toFixed(3)} meters`
      
     volumeResult.innerHTML = `${inputNumber.value} liters = ${(inputNumber.value * gallon).toFixed(3)} gallons | ${inputNumber.value} gallons = ${(inputNumber.value / gallon).toFixed(3)} liters`
     
     massResult.innerHTML = `${inputNumber.value} kilos = ${(inputNumber.value * pound).toFixed(3)} pounds | ${inputNumber.value} pounds = ${(inputNumber.value / pound).toFixed(3)} kilos`
     
})