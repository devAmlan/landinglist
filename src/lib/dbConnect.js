import mongoose from "mongoose";

const DATABASE_URL =
  "mongodb+srv://amlan:UlRyanpW5Q8GEbud@cluster0.jdrs5ky.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function dbConnect() {
  const connectionState = mongoose.connection.readyState;
  console.log(connectionState);
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting...");
    return;
  }

  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "landingpage-template-database",
      bufferCommands: false,
    });

    console.log("connected...");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
