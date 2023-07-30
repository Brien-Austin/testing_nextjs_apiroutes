// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectMDB from "@/libs/mongodb";
import Signup from "@/models/signup";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json("GET Method");
  } else if (req.method === "POST") {
    const { name, email, password } = req.body;

    try {
      await connectMDB();
      await Signup.create({ name, email, password });

      res.status(200).json("POSTED the data", name, email, password);
    } catch (error) {
      res.status(500).json({ error: "Error while processing the request." });
    }
  }
}
