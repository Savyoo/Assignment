const userModel = require("../models/user");

module.exports = {
  getData: async (req, res) => {
    try {
      const resp = await userModel.find();
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
      const userDetail = new userModel({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      const resp = await userDetail.save();
      return resp;
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },

  insertCompanies: async (req, res) => {
    try {
      const resp = await userModel.find({ name: req.params.phone });
      //   console.log(req.body.companiesSelect);
      //   console.log(resp[0]["companies"]);
      const oldComp = resp[0]["companies"];
      const newComp = req.body.companiesSelect;
      newComp.map((c) => {
        // console.log("t", c);
        if (!oldComp.includes(c) && c != "") oldComp.push(c);
        else console.log("false");
      });
      //   console.log(oldComp);
      //   console.log(req.body.companiesSelect.includes("testt"));

      // const newCompanies = "";
      const resp2 = await userModel.updateOne(
        { name: req.params.phone },
        { $set: { companies: oldComp } }
      );
      return resp2;
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },

  removeAllData: async (req, res) => {
    const data = req.body;
    try {
      const resp = await userModel.remove();
      return resp;
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Error");
    }
  },
};
