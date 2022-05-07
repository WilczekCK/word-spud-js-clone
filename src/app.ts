import * as path from "path";
import * as express from "express";
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./client/index.html"));
});
  
export {app};
