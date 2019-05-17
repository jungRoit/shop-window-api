const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
};

const clientErrorHandler = (req, res) => {
  res.status(400).json({
    message: 'Client Side Error'
  });
};

const serverErrorHandler = (req, res) => {
  res.status(500).json({ message: 'Internal Server Error' });
};

export { notFoundHandler, clientErrorHandler, serverErrorHandler };
