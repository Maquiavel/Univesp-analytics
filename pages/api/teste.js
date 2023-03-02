import clientPromise from "@/lib/mongodb"



function DateTime(){
    const dataHoraAtual = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
    const data = dataHoraAtual.split(' ')[0]
    const hora = dataHoraAtual.split(' ')[1]
    const time  = {
        "time_js":dataHoraAtual,
        "data":data,
        "hora":hora
    }
    return time
    

}

export default async function handler(req, res) {

    try{
        var dict = {}
        dict.temp_ar = Number(req.query.temp_ar)
        dict.umid_ar = Number(req.query.umid_ar)
        dict.time = DateTime()
        dict.type = "teste"
        console.log(dict)
        const client = await clientPromise;
        const db = client.db("Univesp");
        let myData =  await db.collection("Dados").insertOne(dict)
        console.log(myData)

    }catch(e){
        console.log(e)

    }

    res.json({'status':'ok'})


}