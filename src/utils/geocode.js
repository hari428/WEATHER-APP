const request=require("request")

const geocode=(address,callback)=>{

    console.log("in geocode.js")

   //console.log(callback.toString())

    url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaGFyaTQyOCIsImEiOiJja2Q4dHY1ZmUweGgyMnBzY3Z0dHRveDE3In0.D7oC7cixqUqiPcnU269d6g'

    request({url,json:true},(error,{body})=>{

        if (error){
            callback("please check internet connection",undefined)
        }

        else if(body.features.length==0)
        {
              callback("please change the location and try",undefined)
        }

        else{
            data={
                latitude:body.features[0].center[1],
                 longitude:body.features[0].center[0],
                 location:body.features[0].place_name
            }
            callback(undefined,data)
        }
    })

console.log("normal function")
}

module.exports={
    geocode:geocode
}