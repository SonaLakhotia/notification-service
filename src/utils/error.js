// Errorhandle middleware
export const handleError = (err, req, res, next) => {
  console.log(`Error is, ${err}`);
  res.status(500).json({ error: "Internal server error"}) 
}