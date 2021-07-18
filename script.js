const calculate = () =>{
let num1 =document.getElementById('num1').value;
let num2=document.getElementById("num2").value;
let num3=document.getElementById("num3").value;
let num4=document.getElementById("num4").value;
let grade='';

let total=parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4);
alert(total);
let perc=(total/400)*100;
alert(perc);
if(perc>=80 && perc<=100)
 grade='A';
else if(perc<80 && perc>=70)
 grade='B';
else if(perc<70 && perc>=60)
 grade='C';
else if(perc<60 && perc>=50)
 grade='D';
else if(perc<50 && perc>=40)
 grade='E'; 
else
 grade='F';  

if(perc>=40){
 document.getElementById('showdata').innerHTML=`Out of 400 your total score is ${total} and percentage is ${perc}%. <br> Your grade is ${grade} <br> You are pass`
}
else{
    document.getElementById('showdata').innerHTML=`Out of 400 your total score is ${total} and percentage is ${perc}%. <br> Your grade is ${grade} <br> You are fail`

}
}
