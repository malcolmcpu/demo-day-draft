const mongoose = require('mongoose');
const { type } = require('node:os');

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productBrand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: [
      'cleanser',
      'toner',
      'serum',
      'moisturizer',
      'sunscreen',
      'exfoliant',
      'mask',
      'eye-care',
      'lip-care',
      'treatment',
      'other',
    ],
    required: true,
    index: true,
  },
  routineStep: {
    type: String,
    enum: ['am', 'pm', 'both'],
    default: 'both',
  },
  skinType: {
    type: String,
    enum: ['normal', 'dry', 'sensitive', 'combination', 'oily'],
  },
  texture: {
    type: String,
    enum: ['gel', 'cream', 'lotion', 'oil', 'foam', 'balm', 'liquid', 'other'],
  },
  price: {},
});

module.exports = mongoose.model('Product', productSchema);
