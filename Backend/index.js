
const{MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const databse='userSignup';
const client=new MongoClient(url);

async function getData()
{
  let result=await client.connect();
  let db=result.db(databse);
  let collection=db.collection('detail');
  let res=await collection.find({}).toArray();
  console.log(res);
}
 getData();
