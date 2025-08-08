const Service = require("../models/service"); // Make sure this path is correct
const mongoose = require("mongoose")
class categoryService {
  static async save(req, res) {
    try {
      const data = req.body
      // if (!name || name.trim() === "") {
      //   return res.status(400).json({ msg: "Service name is required" });
      // }

      const service = new Service(data);
      const savedCategory = await service.save();

      return res.status(201).json({
        msg: "Service created successfully",
        data: savedCategory,
      });
    } catch (error) {
      console.error("Error saving category:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }


  static async list(req, res) {
    try {
      const { categoryId, serviceId } = req.query;
      console.log(categoryId, serviceId);

      if (!categoryId == undefined || !serviceId == undefined) {
        const service = await Service.findOne({ categoryId })
        if (service._id === serviceId) {
          return res.status(200).json({
            msg: "service found successfully",
            data: service,
          });
        }
        return res.status(200).json({
          msg: "service not found",

        });
      }
      else {
        console.log("runing");

        const service = await Service.find().sort({ createdAt: -1 }); // latest first
        return res.status(200).json({
          msg: "service fetched successfully",
          data: service,
        });
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }

  static async update(req, res) {
  try {
    const { categoryId, serviceId } = req.query;
    const { serviceName, type, price } = req.body;

    // Check if IDs are provided
    if (!categoryId || !serviceId) {
      return res.status(400).json({ msg: "Please provide both categoryId and serviceId" });
    }

    // Validate ObjectId formats
    if (!mongoose.Types.ObjectId.isValid(categoryId) || !mongoose.Types.ObjectId.isValid(serviceId)) {
      return res.status(400).json({ msg: "Invalid categoryId or serviceId format" });
    }

    // Find the service
    const service = await Service.findOne({ _id: serviceId, categoryId });
    if (!service) {
      return res.status(404).json({ msg: "Service not found for given category" });
    }

    // Update the service
    const updatedService = await Service.findOneAndUpdate(
      { _id: serviceId, categoryId },
      { serviceName, type, price },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      msg: "Service updated successfully",
      data: updatedService
    });

  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
}


static async delete(req, res) {
  try {
    const { categoryId, serviceId } = req.query;

    // Check if both IDs are provided
    if (!categoryId || !serviceId) {
      return res.status(400).json({ msg: "Please provide both categoryId and serviceId" });
    }

    // Validate ObjectId formats before querying MongoDB
    if (!mongoose.Types.ObjectId.isValid(categoryId) || !mongoose.Types.ObjectId.isValid(serviceId)) {
      return res.status(400).json({ msg: "Invalid categoryId or serviceId format" });
    }

    // Find service that matches both
    const service = await Service.findOne({ _id: serviceId, categoryId });

    if (!service) {
      return res.status(404).json({ msg: "Service not found for given category" });
    }

    // Delete service
    await Service.deleteOne({ _id: serviceId });

    return res.status(200).json({ msg: "Deleted Successfully" });

  } catch (error) {
    console.error("Delete Error:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
}


}

module.exports = categoryService;
