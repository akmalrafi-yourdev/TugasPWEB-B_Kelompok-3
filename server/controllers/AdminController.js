const User = require("../models/User");
const MataKuliah = require("../models/MataKuliah");
const IndexRPS = require("../models/IndexRPS");
const DosenPengampu = require("../models/DosenPengampu");

const Sequelize = require("sequelize");

const inputCoursePlanLecturers = async (req, res) => {
  try {
    await DosenPengampu.create(req.body);
    res.json({
      message: "data berhasil diinput! :D",
    });
  } catch (error) {
    console.log(error);
  }
};
// Create Matkul
const createMatkul = async (req, res) => {
  try {
      await MataKuliah.create(req.body);
      res.json({
          "message": "MatKul Created"
      });
  } catch (err) {
      console.log(err);
  }
}

const updateCoursePlanLecturers = async (req, res) => {
  try {
    await DosenPengampu.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.json({
      message: "data berhasil diupdate! :D",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { inputCoursePlanLecturers, updateCoursePlanLecturers, createMatkul };
