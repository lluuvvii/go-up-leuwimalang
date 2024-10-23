import mongoose from 'mongoose';

const CourseStatisticSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
});

const CourseStatistic = mongoose.models.CourseStatistic || mongoose.model('CourseStatistic', CourseStatisticSchema);

export default CourseStatistic;