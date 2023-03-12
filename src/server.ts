import * as dotenv from "dotenv";
import app from "./index";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, (): void => {
  // tslint:disable-next-line: no-console
  console.log("Server is listening at " + PORT);
});
