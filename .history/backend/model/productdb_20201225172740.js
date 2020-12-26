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
   
  }

  static regUser(id , n , e, p, phone) {
    db.execute("insert into login (id,name,email,password,role) values (?,?,?,?,?)",[id,n,e,p,u])
    return db.execute("insert into userinfo (id,name,email,password,phone) values(?,?,?,?,?)", [id,n,e,p,phone])
      
  }
  }

