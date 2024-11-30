function goback(){
 location.reload()
}
function sessionjoin(){
    container1.style.display="inline"
    container2.style.display="none"
    container3.style.display="none"
    container4.style.display="none"
    container5.style.display="none"

}

function counterapp(){  
    container2.style.display="inline"
    container1.style.display="none"
    container3.style.display="none"
    container4.style.display="none"
    container5.style.display="none"

}

function convert(){
    container3.style.display="inline"
    container2.style.display="none"
    container1.style.display="none"
    container4.style.display="none"
    container5.style.display="none"

}

function split(){
    container4.style.display="inline"
    container2.style.display="none"
    container3.style.display="none"
    container1.style.display="none"
    container5.style.display="none"

}

function bmi(){
    container5.style.display="inline"
    container2.style.display="none"
    container3.style.display="none"
    container4.style.display="none"
    container1.style.display="none"

}

function joined(){
    document.getElementById("salutation").innerText="Thank you for joining✨"
    document.getElementById("btn1").style.display="none"
    document.getElementById("btn2").style.display="none"
    document.getElementById("btn3").style.display="none"
}

function nope(){
    
    salutation.innerText="Thank you for not joining🙏"
    btn3.style.display="none"
    btn1.style.display="none"
    btn2.style.display="none"
}

function maybe(){
    
    salutation.innerText="Go and do that fastly🏃‍♂️"
    btn3.style.display="none"
    btn1.style.display="none"
    btn2.style.display="none"
}

let counter=0
function increment(){  
    counter=counter+1
    count.innerText=counter
}

function decrement(){
    if(counter>0){
    counter=counter-1
    document.getElementById("count").innerText=counter
    }
}

function convert1(){
    
    console.log(inputm.value)
    if(inputcm.value!=""){
        inputm.value=inputcm.value/100
    }
    if(inputm.value!=""){
        inputcm.value=inputm.value*100
    }   
}

function split1(){
    let amount=document.getElementById("amount")
    let persons=document.getElementById("persons")
    let bill=(amount.value/persons.value).toFixed(2)
    result.innerText=bill + "rs each"
    amount=""
    persons=""
}

function calculate(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    let cal = weight.value / (height.value * height.value);
    if(cal< 18.5){
        document.getElementById('bmi').innerText = 'Underweight, enjoy the party!'
    }
    else if(cal>= 18.5 && cal<=24.9){
        document.getElementById('bmi').innerText = 'Normal Weight, enjoy the party!'
    }
    else if(cal>= 25 && cal<=29.9){
        document.getElementById('bmi').innerText = 'Overweight, try to avoid party!'
    }
    else if(cal>= 30 && cal<=35){
        document.getElementById('bmi').innerText = 'Obesity, avoid the party!'
    }
    else{
        document.getElementById('bmi').innerText = 'Severe Obesity, Do what ever you want!'
    }
    height.value = "";
    weight.value = ""
}
