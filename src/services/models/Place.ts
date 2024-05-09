import mongoose from 'mongoose';

const PlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  address: {
    type: String,
    required: [true, 'Please provide an address.'],
  },
});

export default mongoose.models.Place || mongoose.model('Place', PlaceSchema);
