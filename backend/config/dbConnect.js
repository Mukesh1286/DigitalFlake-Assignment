const mongoose =require('mongoose')

// DB_LOCAL_URI =mongodb+srv://nodejsAPI:bx9oXI4EDPPiLa0I@cluster0.ombkw4w.mongodb.net/nodejsAPI?retryWrites=true&w=majority

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_LOCAL_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    //   useCreateIndex: true,
    })

    console.log(`MongoDB Database connected with Host: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
module.exports = connectDB


