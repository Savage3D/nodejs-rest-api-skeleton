function catchMiddlewareErrors(middlewareFunction) {
  return (req, res, next) => {
    return middlewareFunction(req, res, next).catch(next);
  };
}

function handleErrors(err, req, res, next) {
  res.status(500).json({ msg: 'Something went wrong' });
}

module.exports = {
  catchMiddlewareErrors,
  handleErrors,
};
