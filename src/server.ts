import app from "./app";

// Render dynamically assigns a port, so we should always use process.env.PORT
const PORT: number = parseInt(process.env.PORT || "5005");

app.listen(PORT, () => {
  const env = process.env.NODE_ENV || "development";
  const url =
    env === "development"
      ? `http://localhost:${PORT}`
      : `Render Deployment URL`;

  console.log(`Server is running on ${url}`);
});
