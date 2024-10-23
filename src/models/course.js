import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
