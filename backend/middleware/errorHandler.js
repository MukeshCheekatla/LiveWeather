export function errorHandler(err, req, res, next) {
  console.error("ERROR:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
