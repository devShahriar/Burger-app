const express = require("express");
const router = express.Router();
const fs = require("fs");
const fileType = require("file-type");
const path = require("path");
const db = require("../model/productdb");
const ranid = require("shortid");
router.get("/products", (req, res, next) => {
  const list = db.fetchproduct();
  list
    .then((result) => {
      console.log(result[0]);
      res.json(result[0]);
    })
    .catch((e) => {
      console.log(e);
    });
});


router.post("/placeOrder", (req, res, next) => {
  console.log(req.body);
  const orderid = ranid.generate();
  const name = req.body.name;
  const email = req.body.email;
  const total = req.body.total;
  const order = db.placeOrder(orderid, name, email, total);
  order
    .then((r) => {
      console.log(result[0]);
    })
    .catch((e) => {
      console.log(e);
    });
});

router.get("/images/:productID", (req, res) => {
  let imagename = req.params.productID;
  let imagepath = __dirname + "/images/" + imagename;
  fs.readFile(imagepath, function (err, content) {
    if (err) {
      res.writeHead(400, { "Content-type": "text/html" });
      console.log(err);
      res.end("No such image");
    } else {
      //specify the content type in the response will be an image
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});

router.post('/check',(req,res,next)=>{
  const e =req.body.email
  const p = req.body.password
  const result = db.checkLogin(e ,p)
  result.then(
    r=>{
      if(r[0].lenght>0){
        res.json({
          user:r[0]})
      }
      else{
        res.json({
          user:"invalid user id password"})
      }
      
    }
)

   
})

module.exports = router;
