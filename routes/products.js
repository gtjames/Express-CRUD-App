var express = require('express');
var router = express.Router();

//File Upload code with multer
var multer = require('multer');
var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images/')
    },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
    }
});

var upload = multer({ storage: storage });  


//Main products page
router.get('/',function(req, res, next) {
    res.render('products', {products: myProducts})
})


//Direct User to Create Product Form
router.get('/product-create',(req, res, next)=> {
    res.render('product-create')
})

//Direct User to Edit Product Form
router.get('/product-edit/:id',(req, res, next)=> {
    res.render('product-edit',{
        product: myProducts.find(product=>{
            return product.id == req.params.id
        })
    })
})

//Post New Product
router.post('/product-create', upload.single('imageUpload'), (req,res,next)=>{
    myProducts.push({
       id: req.body.id,
       name: req.body.name,
       price: req.body.price,
       size: req.body.size,
       image_path: '/images/'+req.file.originalname
    })
    res.redirect('/products')
})

//Edit Product
router.post('/product-edit/:id', upload.single('imageUpload'), (req,res,next)=>{
    
    //find product in array
    productToEdit = myProducts.find(product=>{
        return product.id == req.params.id
    })
    
    productToEdit.id = req.body.id;
    productToEdit.name =  req.body.name;
    productToEdit.price = req.body.price;
    productToEdit.size = req.body.size;
    let imgPath = req.file == undefined ? req.body.imagePath : '/images/'+req.file.originalname ;
    productToEdit.image_path = imgPath;

    res.redirect('/products')
})

//Product details page
router.get('/:id',function(req, res, next) {
    let prod = myProducts.find(product=>{            return product.id == req.params.id        });
    res.render('product-detail', { product: prod })
})

class Product{
    constructor(id,name,price,size,image_path){
        this.id = id
        this.name = name
        this.price = price
        this.size = size
        this.image_path = image_path
    }
}

let myProducts = []
myProducts.push(
    new Product(1,'Helmet',3.99,'M','/images/helmet.png'),
    new Product(2,'Bat',75.99,'34"','/images/bat.png'),
    new Product(3,'Glove',35.00,'M','/images/glove.png')
)

module.exports = router;