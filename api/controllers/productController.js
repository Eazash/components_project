const { Error: MongooseError, isValidObjectId } = require("mongoose");
const Product = require("../models/productModel");
module.exports.addProduct = async function (req, res) {
  const { name, description, price } = req.body;
  const imageFile = req.file;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image: imageFile.filename,
    });
    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    if (error instanceof MongooseError) {
      return res.status(400).send({ message: error.message });
    }
    throw error;
  }
};

module.exports.getProduct = async function (req, res) {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send({ message: "Malformed Product ID" });
  }
  const product = await Product.findById(id);
  if (product == null) {
    return res
      .status(404)
      .send({ message: `Product with ID '${id}' not found` });
  }
  return res.send(product);
};

module.exports.getAllProducts = async function (req, res) {
  const products = await Product.find({});
  return res.send(products);
};

module.exports.deleteProduct = async function (req, res) {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).send({ message: "Malformed Product ID" });
  }
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    if (product === null) {
      return res
        .status(404)
        .send({ message: `Product with ID '${id}' not found` });
    }
    return res.sendStatus(200);
  } catch (error) {
    if (error instanceof MongooseError) {
      return res.sendStatus(400);
    }
    console.log(error);
  }
};
