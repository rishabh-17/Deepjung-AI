const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      // response_format: "b64_json",
    });

    // Check if the aiResponse object and its nested properties exist
    const image = aiResponse?.data?.[0].url;

    if (image) {
      res.status(200).json({ url: image });
    } else {
      console.error(
        "Error: Unable to get image data from API response.",
        aiResponse
      );
      res
        .status(500)
        .json({ error: "Unable to get image data from API response." });
    }
  } catch (error) {
    console.error(error);

    // Check if the error has a response and data property before accessing nested properties
    const errorMessage =
      error?.response?.data?.error?.message || "Something went wrong";

    res.status(error?.response?.status || 500).json({ error: errorMessage });
  }
});

module.exports = router;
