import GoogleMaps from "@/Bot/bot"

export default async function handler(req, res) {
    let response = {}

    try{
        let title =  await GoogleMaps()
        response = {'status':title}
    }catch(e){
        console.log(e)
        response = {'status':'error'}

    }
    
    res.json(response)
  }