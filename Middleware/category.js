const Category = require("../models/Category"); // Make sure this path is correct

class categoryService {
  static async save(req, res) {
    try {
      const { name } = req.body;

      if (!name || name.trim() === "") {
        return res.status(400).json({ msg: "Category name is required" });
      }

      const category = new Category({ name });
      const savedCategory = await category.save();

      return res.status(201).json({
        msg: "Category created successfully",
        data: savedCategory,
      });
    } catch (error) {
      console.error("Error saving category:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }


  static async list(req, res) {
    try {
      const { name } = req.query;
      if (name) {
        const categories = await Category.findOne({ name })
        if (categories) {
          return res.status(200).json({
            msg: "Categories found successfully",
            data: categories,
          });
        }
        return res.status(200).json({
          msg: "Categories not found",

        });
      }
      else {
        const categories = await Category.find().sort({ createdAt: -1 }); // latest first
        return res.status(200).json({
          msg: "Categories fetched successfully",
          data: categories,
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.query;
      const { name } = req.body
      const data = await Category.findOne({ _id: id })
      if (data) {
        const updated = await Category.findOneAndUpdate({ _id: id, name })
      }
      else {
        return res.status
      }

    } catch (error) {

    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.query;
      const data = await Category.findOneAndDelete({ _id: id })
      if (data) {
        return res.status(200).json({ msg: "Deleted Suceesfully" })
      }
      else {
        return res.status(200).json({ msg: "Invalid id" })
      }
      
        return res.status(200).json({ msg: "Please provide and Id" })


    } catch (error) {

    }
  }
}

module.exports = categoryService;
