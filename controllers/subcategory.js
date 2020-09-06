const SubCategory = require("../models/subcategory");
const { reverse } = require("lodash");

exports.getSubCateogryById = (req, res, next, id) => {
  SubCategory.findById(id).exec((err, sub) => {
    if (err) {
      res.status(400).json({
        error: "Sub-Category not found in DB",
      });
    }
    req.subCategory = sub;
    next();
  });
};

//Create a sub category
exports.createSubCategory = (req, res) => {
  const subCategory = new SubCategory(req.body);
  subCategory.save((err, subCategory) => {
    if (err) {
      res.status(400).json({
        error: "Not Able to save Sub Category in DB",
      });
    }
    res.json({ subCategory });
  });
};

// Fetch a sub Category
exports.getSubCategory = (req, res) => {
  return res.json(req.subCategory);
};

//Fetch all sub Category
exports.getAllSubCategory = (req, res) => {
  SubCategory.find().exec((err, subCategories) => {
    if (err) {
      res.status(400).json({
        error: "No Sub Category found in DB",
      });
    }
    return res.json(subCategories);
  });
};

//Update a subCategory
exports.updateSubCategory = (req, res) => {
  const subCategory = req.subCategory;
  subCategory.name = req.body.name;

  subCategory.save((err, updatedSubCategory) => {
    if (err) {
      res.status(400).json({
        error: "Failed to update Sub-Category",
      });
    }
    res.json(updatedSubCategory);
  });
};

//Delete a category
exports.removeSubCategory = (req, res) => {
  const subCategory = req.subCategory;
  subCategory.remove((err, subCategory) => {
    if (err) {
      res.status(400).json({
        error: "Failed to delete Sub-Category",
      });
    }
    res.json({
      message: "Successfully deleted",
      subCategory,
    });
  });
};
