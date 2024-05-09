// models/User.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  address: {
    type: String,
    required: [true, 'Please provide an address.'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
