import express, { Express } from "express";
import isAdmin from "./src/middleware/isAdmin";
import handleLogger from "./src/middleware/handlerLogger";
import carRouter from "./src/routes/carRouter";
import { Request, Response } from "express";
import upload from "./src/middleware/upload";
import cloudinary from "cloudinary";
import { UploadApiResponse } from "cloudinary";

const app: Express = express();
const PORT = 3000;

cloudinary.v2.config({
  cloud_name: "dqvubnigp",
  api_key: "735277177926233",
  api_secret: "XDMpdQ5Tuz0KRCRWWj0q6Jn3mRs",
});

app.set("view engine", "ejs");

app.set("views", "./src/views");
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(handleLogger);
// app.use(isAdmin)

app.use("/v1/cars", carRouter);
app.post("/v1/cars/picture", upload.single("picture"), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filebase64: string = req.file.buffer.toString("base64");
  const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

  cloudinary.v2.uploader.upload(file, (err: any, result: UploadApiResponse) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    res.status(200).json({ message: "photo successfully uploaded!", url: result.url });
  });
});

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});
