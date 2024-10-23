const express = require("express");
const router = express.Router();
const Review = require("../models/reviews.js");


router.post("/", async (req, res) => {
  try {
    const { userName, reviewText, rating } = req.body;
    const newReview = new Review({ userName, reviewText, rating });
    await newReview.save();
    res.status(201).send("Review Submitted!");
  } catch (error) {
    res.status(500).send("Submitting Failed!");
  }
});

// GET /api/reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).json("Failed!");
  }
});

module.exports = router;
