import clientPromise from "@/lib/mongodb"



function DateTime(){
    const dataHoraAtual = new Date();
    const dia = dataHoraAtual.getDate().toString().padStart(2, '0');
    const mes = (dataHoraAtual.getMonth()+1).toString().padStart(2, '0'); // lembre-se que o mês começa com 0
    const ano = dataHoraAtual.getFullYear();
    const horas = dataHoraAtual.getHours().toString().padStart(2, '0');
    const minutos = dataHoraAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataHoraAtual.getSeconds().toString().padStart(2, '0');
    const data = `${dia}/${mes}/${ano}`
    let hours = `${horas}:${minutos}:${segundos}`;
    const time  = {
        "time_js":dataHoraAtual,
        "data":data,
        "hora":hours
    }
    return time
    

}

export default async function handler(req, res) {

    try{
        var dict = {}
        dict.temp_ar = req.query.temp_ar
        dict.umid_ar = req.query.umid_ar
        dict.time = DateTime()
        dict.type = "teste"
        console.log(dict)
        const client = await clientPromise;
        const db = client.db("Univesp");
        let myData =  await db.collection("Dados").insertOne(dict)
        console.log(myData)

    }catch(e){


    }

    res.json({'status':'ok'})


}