const request=require("request")


const forecast=(latitude,longitude,callback)=>{

    
        const url='http://api.weatherstack.com/current?access_key=d1484a82421ea07fbfa4725353733b46&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
        console.log(url)
    
        request({url:url,json:true},(error,{body})=>{

    
            if (error)
            {
                callback("network problem",undefined)
            }
    
            else if(body.error){
                callback(body.error,undefined)
            }
    
            else{
                
    
                    callback(undefined,{temperature:45,forecast:"sunny"})
                    //here passing 45 static values, as body.current.temperarure is not working
    
                }
            
    
    
         
        })
    

}

module.exports={
    forecast:forecast}
