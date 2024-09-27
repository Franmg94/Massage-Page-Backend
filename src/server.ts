import app from "./app";

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT: number = parseInt(process.env.PORT || "5005");

app.listen(PORT, () => {
  // Dynamically adjust URL loggin based on environment
  const env = process.env.NODE_ENV || "development";
  const url =
    env === "development"
      ? `http://localhost:${PORT}`
      : `https://bodytreatments-backend.onrender.com`;

  console.log(`Server listening on ${url}`);
});
