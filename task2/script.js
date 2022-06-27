let inputValue = document.querySelector("input");
let message = document.querySelector("span");

document.querySelector("button").addEventListener("click", () => {
    let oddSum = 0, evenSum = 0
    if(inputValue.value.length < 13){
        message.innerHTML = "Code should container 13 numbers"
        message.style.color="red"
    }else{
        for(let i = 0; i < inputValue.value.length - 1; i++){
            if(i % 2) oddSum +=+inputValue.value[i]
            else evenSum += +inputValue.value[i]
        }
        let result = oddSum * 3 + evenSum;
        result = String(result)
        if(+result[result.length - 1] + +inputValue.value[inputValue.value.length - 1] === 10){
            message.innerHTML = "Barcode entered correctly"
            message.style.color="green"

        }else{
            message.innerHTML = "Input is incorrect information"
            message.style.color="red"
        } 
        setTimeout(() => {
            inputValue.value = ""
            message.innerHTML = ""
            }
            , 3000)
    }
})