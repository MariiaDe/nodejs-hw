import createHttpError from 'http-errors';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const updateUserAvatar = async (req, res, next) => {
  try {
    const { avatar } = req.body;

    if (!avatar) {
      throw createHttpError(400, 'No file');
    }

    const result = await saveFileToCloudinary(Buffer.from(avatar, 'base64'));

    req.user.avatar = result.secure_url;
    await req.user.save();

    res.status(200).json({ url: result.secure_url });
  } catch (err) {
    next(err);
  }
};
