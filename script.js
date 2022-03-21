
function clickMe(){
  var inputData = document.getElementById("valNum").value;
  console.log("Value of input data is : "+ inputData);

  var random = document.getElementsByName("choose");
  console.log(random);
  for(var i=0; i<random.length; i++)
  {
    if(random[i].checked)
    {
      document.getElementById("output").innerHTML= "Value is : " + inputData*random[i].value;
    }
  }

}