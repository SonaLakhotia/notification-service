import { handleNotification } from "../../src/controllers/notificationController.js";
import { getNotifications, clear } from "../../src/memory/storage.js";
import axios from "axios";

jest.mock("axios");
beforeEach(clear);

test("Stores all notifications", async() => {
  const req = { body : { Type: 'Info', Name: 'Testing Info', Description: 'Testing Info in store'}}
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }

  await handleNotification(req, res)
  expect(getNotifications().length).toBe(1)
});

test("Notification of type 'Warning' forwarded to the notifcation channel", async() => {
  const req = {body: { Type: 'Warning', Name: 'Warning Info', Description: 'Testing warning notifications'}}
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn()}
  await handleNotification(req, res);
  expect(axios.post).toHaveBeenCalled();
})

