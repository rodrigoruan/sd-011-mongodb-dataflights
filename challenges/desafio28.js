db.req28.insertOne({
  empresa: "LATAM AIRLINES BRASIL", 
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica" }).count() });

db.req28.find({}, { _id: 0 });
