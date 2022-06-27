import User from "../models/User.js";
import MataKuliah from "../models/MataKuliah.js";
import {detailRPS, rps} from "../models/IndexRPS.js";

import { Op } from "sequelize";

export const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

export const getMatkul = async (req, res) => {
  try {
    const mataKuliah = await MataKuliah.findAll();
    res.send(mataKuliah);
  } catch (err) {
    console.log(err);
  }
};

export const searchMatkul = async (req, res) => {
  var searchByName, searchByCode;
  try {
    searchByCode = await MataKuliah.findAll({
      where: {
        code: {
          [Op.like]: `%${req.params.search}%`,
        },
      },
    });
    if (searchByCode.length === 0) {
      // find by name
      searchByName = await MataKuliah.findAll({
        where: {
          name: {
            [Op.like]: `%${req.params.search}%`,
          },
        },
      });
      res.send(searchByName);
    } else if(searchByCode.length > 0) {
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

export const matkulDetail = async (req, res) => {
  try {
    const getRps = await rps.findAll();
    res.send(getRps);
  } catch (err) {
    console.log(err);
  }
};