import express, { Request, Response } from "express";
import { ServerConfig } from "./config";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "welcome to my server",
    success: true,
  });
});
app.listen(ServerConfig.PORT, () => {
  console.log(`Server started and running on ${ServerConfig.PORT}`);
});
