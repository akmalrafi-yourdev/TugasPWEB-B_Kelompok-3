const User = require("../models/User");
const MataKuliah = require("../models/MataKuliah");
const IndexRPS = require("../models/IndexRPS");
const IndexCPMK = require("../models/IndexCPMK");

const Sequelize = require("sequelize");

const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const getMatkul = async (req, res) => {
  try {
    console.log("jalan");
    const mataKuliah = await MataKuliah.findAll();
    res.send(mataKuliah);
  } catch (err) {
    console.log(err);
  }
};

const searchMatkul = async (req, res) => {
  var searchByName, searchByCode;
  try {
    searchByCode = await MataKuliah.findAll({
      where: {
        code: {
          [Sequelize.Op.like]: `%${req.params.search}%`,
        },
      },
    });
    if (searchByCode.length === 0) {
      // find by name
      searchByName = await MataKuliah.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${req.params.search}%`,
          },
        },
      });
      res.send(searchByName);
    } else if (searchByCode.length > 0) {
      res.send(searchByCode);
    }
    // WIP: Return if json object == 0
  } catch (err) {
    res.json({
      message: "something wrong..",
    });
    console.log(err);
  }
};

const matkulDetail = async (req, res) => {
  try {
    const rps = await IndexRPS.rps.findAll({
      where: {
        course_id: req.params.id,
      },
      include: [
        {
          model: IndexRPS.detailRPS,
        },
        {
          model: IndexCPMK.cpmk,
        },
        {
          model: IndexRPS.References,
        },
      ],
    });
    res.send(rps);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { matkulDetail, getMatkul, getUser, searchMatkul };
