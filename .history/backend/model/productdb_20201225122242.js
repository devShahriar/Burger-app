const db = require("../util/db");

module.exports = class Products {
  static fetchproduct() {
    return db.execute("select * from product_list");
  }
  static placeOrder(id, name, email, total) {
    return db.execute("insert into orderlist values ( ?,?,?,?)", [
      id,
      name,
      email,
      total,
    ]);
  }

  static checkLogin(e, p){
   
     return db.execute("select * from login where email=? and password=?",[e,p])
      .then(
          r=>{
            res.json({
                
                user:r[0]})
          }
      )
  }
  }

