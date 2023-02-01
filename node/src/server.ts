import { loadEnv } from "./config/envs";
import app from "./app";

loadEnv();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${process.env.PORT}`);
});
