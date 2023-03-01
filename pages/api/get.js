import clientPromise from "@/lib/mongodb"

export default async function handler(req, res) {
  
  var result  = {}

  try{

    let page = parseInt(req.query.page)
    if(page >= 1){
        const client = await clientPromise;
        const db = client.db("Univesp");
        let skip =  (page - 1) * 10
        let dados = await db.collection("Dados").find({}).skip(skip).limit(10).toArray()
        result = dados
    }else{
        result['status'] = 'error' 
    }



  }catch(e){

    result['status'] = 'error'

  }

  res.json(result)

}