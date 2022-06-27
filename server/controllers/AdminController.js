const User = require('../models/User');
const MataKuliah = require('../models/MataKuliah');
const IndexRPS = require('../models/IndexRPS');
const DosenPengampu = require('../models/DosenPengampu');

const Sequelize = require('sequelize');
// import User from "../models/User.js";
// import MataKuliah from "../models/MataKuliah.js";
// import {detailRPS, rps} from "../models/IndexRPS.js";


const inputCoursePlanLecturers = async (req, res) => {
    try {
        const data = await DosenPengampu.create({
            course_plan_id: req.params.course_plan_id,
            lecturer_id: req.params.lecturer_id,
            creator: req.params.creator,
            created_at: DataTypes.DATE
        })
    } catch (error) {
        console.log(error)
    }
}