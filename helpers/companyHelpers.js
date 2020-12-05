const companyModel = require("../models/company");

module.exports = {
  getData: async (req, res) => {
    try {
      const resp = await companyModel.find();
      if (resp.length > 0) return resp;
      else res.status(200).send("no records found");
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },
  insertData: async (req, res) => {
    const data = req.body;
    try {
      const companyDetail = new companyModel({
        name: data.name,
        city: data.city,
      });
      const resp = await companyDetail.save();
      return resp;
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },

  removeAllData: async (req, res) => {
    const data = req.body;
    try {
      const resp = await companyModel.remove();
      return resp;
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },
};
