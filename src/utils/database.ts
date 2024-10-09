import mongoose from 'mongoose';

const mongoUri: string | undefined = process.env.MONGODB_URI;
let isConnected = false;

export const connectDb = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined');
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName: 'share_prompt',
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};
