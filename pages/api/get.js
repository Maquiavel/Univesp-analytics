import clientPromise from "@/lib/mongodb"

export default async function handler(req, res) {
  
  var result  = {}

  try{

    let page = parseInt(req.query.page)
    let limite = 10
    try{
      if(req.query.limite)
      {
        limite = parseInt(req.query.limite)
        if(limite < 1 || isNaN(limite)){
          throw "Error"
        }
      }
    }catch(e){
      limite = 10
    }

    //console.log(limite)

    if(page >= 1){
        const client = await clientPromise;
        const db = client.db("Univesp");
        let skip =  (page - 1) * 10
        let dados = await db.collection("Dados").find({}).sort('_id',-1).skip(skip).limit(limite).toArray()
        result = dados
    }else{
        result['status'] = 'error' 
    }



  }catch(e){

    result['status'] = 'error'

  }

  res.json(result)

}