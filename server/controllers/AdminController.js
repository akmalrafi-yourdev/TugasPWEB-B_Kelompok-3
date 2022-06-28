const User = require("../models/User");
const MataKuliah = require("../models/MataKuliah");
const IndexRPS = require("../models/IndexRPS");
const DosenPengampu = require("../models/DosenPengampu");

const Sequelize = require("sequelize");

const inputCoursePlanLecturers = async (req, res) => {
  try {
    // const data = await DosenPengampu.create({
    //     course_plan_id: req.params.course_plan_id,
    //     lecturer_id: req.params.lecturer_id,
    //     creator: req.params.creator,
    //     // created_at: Sequelize.DataTypes.DATE
    // })
    const data = await DosenPengampu.create(req.body);
    res.json({
      message: "data berhasil diinput! :D",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { inputCoursePlanLecturers };
