import * as express from "express";
import { routes } from "./routes/index";
const app = express();

//Server configuration
app.set("port", process.env.PORT || 3000);

//Routes init
routes.forEach(route => app.use(route));

export {app};
