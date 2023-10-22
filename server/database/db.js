import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud.zqqky82.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology:true, useNewUrlParser: true });
        console.log("Database connected");
    } catch(error) {
        console.log("Error while connecting with database", error);
    }
}

export default Connection;