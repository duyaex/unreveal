exports = async function(arg){
  let collection=context.services
  .get("mongodb-atlas")
  .db("unreveal")
  .collection("photos");
let pipeline=[
  
  {
    $search: {
      index: 'relPhotos',
      text: {
        query: arg,
        path: {
          'wildcard': '*'
        },
        fuzzy:{}
      }
    }
  }

  ]
return collection.aggregate(pipeline);
};