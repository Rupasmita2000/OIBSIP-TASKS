function temperature(){
    const temperatureValue=parseFloat(document.getElementById("values").value);
    const from=document.getElementById("temp1").value;
    const to=document.getElementById("temp2").value;
    var result;
    if(from==to)
    {
        result=temperatureValue;
    }
    else if(from=="celcius")
    {
        if(to=="fahrenheit")
    {
        result=(temperatureValue*9/5)+32;
    }
    else
    {
        result=temperatureValue+273.15;
    }
  }
  else if(from==="fahrenheit"){
if(to==="celcius"){
    result=(temperatureValue-32)*5/9;
  }
  else{
    result=(temperatureValue-32)*5/9+273.15;
  }
}
  else{
    if(to==="celcius")
    {
        result=temperatureValue-273.15;
    }
    else{
        result=(temperatureValue-273.15)*9/5+32;
    }
  }
    document.getElementById("result").textContent=result.toFixed(2);
}
  function reset(){
    document.getElementById("values").value="";
    document.getElementById("temp1").value="celcius";
    document.getElementById('temp2').value="celcius";
     document.getElementById("result").textContent="";
  }