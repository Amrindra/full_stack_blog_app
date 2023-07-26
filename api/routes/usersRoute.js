import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("This is from post route");
});

export default router;
