const express = require("express");
const router = express.Router();


const {
    getSubCategoryById,
    createSubCategory,
    getSubCategory,
    getAllSubCategory,
    updateSubCategory,
    removeSubCategory,
  } = require("../controllers/subcategory");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//Params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);
router.param("subCategoryId", getSubCategoryById);

//Actual routers

//Create
router.post(
    "/category/subcategory/create/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createSubCategory
);
  
//Read
router.get("/subCategory/:subCategoryId", getSubCategory);
router.get("/subCategories", getAllSubCategory);

//Update
router.put(
    "/subCategory/:subCategoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateSubCategory
  );
  
  //Delete
  router.delete(
    "/subCategory/:subCategoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeSubCategory
  );
  
  module.exports = router;
  
