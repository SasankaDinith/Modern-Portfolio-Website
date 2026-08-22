import "dotenv/config";

import app from "./app.js";
import { transporter } from "./config/mailer.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await transporter.verify();

    console.log(
      "Email server connected successfully.",
    );

    app.listen(PORT, () => {
      console.log(
        `Portfolio server running on http://localhost:${PORT}`,
      );
    });
  } catch (error) {
    console.error(
      "Failed to start server:",
      error,
    );

    process.exit(1);
  }
}

startServer();