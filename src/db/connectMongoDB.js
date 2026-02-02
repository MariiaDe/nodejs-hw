import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const mongoUrl = process.env.MONGO_URL;

  if (!mongoUrl) {
    console.error('❌ MONGO_URL is not defined in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
