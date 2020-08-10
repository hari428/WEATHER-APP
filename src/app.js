const express=require("express")
const path=require("path")
const geocode=require("./utils/geocode")
const forecast=require("./utils/forecast")

//handle bars useful to provide dynamic content to html
const hbs=require("hbs")
const app=express()



//to set up handle bars engine and viewa location

const viewspath=path.join(__dirname,"../templates/views")

//to set up partials,which useful to use same mark up on differnt views

const partialpath=path.join(__dirname,"../templates/partials")

app.set("view engine",'hbs')

app.set("views",viewspath)

hbs.registerPartials(partialpath)


//set up express to serve public folder pages

app.use(express.static(path.join(__dirname,"../public")))

//set up root url
app.get("",(req,res)=>{
    res.render("index",{
        title:"Weather",
        name:"hari weather"
    })
})
//set up about url
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About",
        name:"hari about"
    })
})

app.get("/help",(req,res)=>{
    res.render("help",{
        title:"Help",
        name:"hari help"
    })
})

app.get("/weather",(req,res)=>{
   // res.send("<h1>weather</h1>")

   if(! req.query.address)
   {
       return res.send({
           error: "please provide a valid address"
       })
   }

  
   
   geocode.geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

    console.log("in app .js")


    if (error)
    {
        return res.send(error)
    }

    

forecast.forecast(latitude,longitude,(error,forecastData)=>
{

    if (error)
    {
        return res.send(error)
    }
    else{
res.send(forecastData)   
 }
    
})
   
 })
})

app.get("/help/*",(req,res)=>{
    res.render("404",{
        title:404,
        error:"help article not found"
    })
})
app.get("*",(req,res)=>{
    res.render("404",{
        title:404,
        error:"page not found"
    })
})



app.listen(3000)