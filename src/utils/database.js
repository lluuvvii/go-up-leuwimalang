import mongoose from 'mongoose'

let isConnected = false

export const connectDb = async () => {
  mongoose.set('strictQuery', true)

  if(isConnected){
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'course_leuwimalang',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true
    console.log('MongoDB connected')
  } catch (err) {
    console.log(err)
  }
}