// Validator for the request
export const validate = (req, res, next) => {
  const { Type, Name, Description } = req.body;

  // Assuming all the fields as mentioned in the example - Type, Name and Description are required
  if(!Type || !Name || !Description){
    return res.status(400).json({ error: "Missing fields"})
  }

  // Assuming only warnings and info type notifications are processed by the service
  if(!["Warning", "Info"].includes(Type)){
    return res.status(400).json({ error: "Invalid Notification Type"})
  }
  next();
}