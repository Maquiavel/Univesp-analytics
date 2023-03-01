import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://univesp:jdxKmX2nu4IpaAoi@univesp.qvi38qu.mongodb.net/?retryWrites=true&w=majority"
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise



client = new MongoClient(uri, options)
clientPromise = client.connect()


export default clientPromise