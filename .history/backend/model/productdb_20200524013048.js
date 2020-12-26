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
};
