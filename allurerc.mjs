import fs from "node:fs";
import path from "node:path";
import { env } from "node:process";
import dotenv from "dotenv";
import { defineConfig } from "allure";

dotenv.config({ path: path.resolve("./.env") });

const logoBase64 = fs.readFileSync(path.resolve("./logo.png")).toString("base64");

export default defineConfig({
  name: "SauceDemo Automation",
  output: "./allure-reports",

  environment: env.Environment,

  variables: {
    "Environment": env.Environment || "unknown",
    "App Version": env.AppVer || "unknown",
  },

  plugins: {
    awesome: {
      options: {
        reportName: "SauceDemo Automation",
        logo: `data:image/png;base64,${logoBase64}`,
        reportLanguage: "en",
        singleFile: true,
      },
    },
  },
});