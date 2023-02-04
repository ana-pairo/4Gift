/* eslint-disable boundaries/no-private */
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

export function loadEnv() {
  const path =
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production";

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}
