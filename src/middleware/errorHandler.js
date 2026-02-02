import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  void next;

  if (createHttpError.isHttpError(err)) {
    return res.status(err.status).json({ message: err.message });
  }


  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
};
