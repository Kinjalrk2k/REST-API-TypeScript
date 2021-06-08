import mongoose from "mongoose";
import config from "config";
import log from "../logger";

const connect = () => {
  const mongoURI = config.get("mongoURI") as string;

  return mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      log.info("MongoDB is connected");
    })
    .catch((err) => {
      log.error("Failed to connect MongoDB due to ERROR:", err);
      process.exit(1);
    });
};

export default connect;
