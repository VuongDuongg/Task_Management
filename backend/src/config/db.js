import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING
    );
    console.log('Lien ket CSDL thanh cong');
  } catch (error) {
    console.error('Loi khi ket noi CSDL: ', error);
    process.exit(1);
  }
};

export default connectDB;