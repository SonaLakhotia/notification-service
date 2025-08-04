import { store, getNotifications } from "../memory/storage.js";
import 'dotenv/config';
import axios from 'axios'

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL

export const handleNotification = async (req, res) => {
  try
  {
    const notification = req.body;
    //Storing the notifications in memory
    store(notification)
    //console.log(getNotifications())

    //Checking if the notification is of type warning
    if(notification.Type === 'Warning'){
      // Forwards the notifcations of type warning to slack channel
      await axios.post(SLACK_WEBHOOK_URL, {
        text: `${notification.Name}\n${notification.Description}`
      })
    }

    res.status(200).json({message: "Success, Ok"})

  }
  catch(error){
    res.status(500).json({ message: "Internal server error"})
  }
}

export const welcome = async (req, res) => {
  res.json({ message: 'Welcome to the services, Hello World!'})
}
