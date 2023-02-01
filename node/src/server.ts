import app from "./app";
import { loadEnv } from "./config/envs";

loadEnv();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${process.env.PORT}`);
});
