import Poem from "../models/Poem.js";
import { StatusCodes } from "http-status-codes";

export const createPoem = async (req, res) => {
  const poem = await Poem.create(req.body);
  res.status(StatusCodes.CREATED).json({ poem });
};

export const getRandomPoem = async (req, res) => {
  try {
    const randomDoc = await Poem.aggregate([{ $sample: { size: 1 } }]);
    const poem = randomDoc[0];

    res.status(StatusCodes.OK).json({ poem });
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

export const getPoemStats = async (req, res) => {
  const count = await Poem.countDocuments();
  res.status(StatusCodes.OK).json({ count });
};

export const getSinglePoem = async (req, res) => {
  res.send("getSinglePoem");
};

export const updatePoem = async (req, res) => {
  res.send("updatePoem");
};

export const deletePoem = async (req, res) => {
  res.send("deletePoem");
};
