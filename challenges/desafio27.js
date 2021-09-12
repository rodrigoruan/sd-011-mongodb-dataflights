db.req27.insertOne({
  empresa: "PASSAREDO", 
  totalVoosDomesticos: db.voos.find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }).count(),
});

db.req27.find({}, { _id: 0 });
