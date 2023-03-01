// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "@/lib/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Univesp");
  let result = await db.collection("Dados").find({}).toArray()
  console.log(result)
  res.json(result)
}
