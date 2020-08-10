console.log("client js loaded")


document.getElementById("myform").addEventListener("submit",(event)=>{
    event.preventDefault()
    const address=document.getElementById("address").value
    console.log(address)
    
    fetch("http://localhost:3000/weather/?address="+address).then((response)=>
{

    response.json().then((data)=>{

     if (data.error)
     {
        document.getElementById("temp").innerHTML=data.error
        document.getElementById("temp").style.color='red'
        //document.getElementById("temp").hidden
        document.getElementById("forecast").style.display='none'

        


     }
     else
     {
       
        document.getElementById("temp").innerHTML="Temperature ="+data.temperature
        document.getElementById("forecast").innerHTML="Forecast ="+data.forecast
     }
    })
})

})