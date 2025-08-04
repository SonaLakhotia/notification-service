# Notification-Service
A web service that receives notifications via a POST interface and forwards them to a Slack channel based on their type.

## Installation
```bash
git clone https://github.com/yourrepo/notification-service.git
cd notification-service
npm install

```

## Configurations
create/edit  .env

PORT=5001
SLACK_WEBHOOK_URL="slack_webhook_url"


## API endpoint
POST /api/v1/notifications

```json
{
  "Type": "Warning" | "Info",
  "Name": "string",
  "Description": "string"
}
```

Example request:

```bash
  curl -X POST http://localhost:5001/api/v1/notifications \
  -H "Content-Type: application/json" \
  -d '{"Type":"Warning","Name":"CPU Overload","Description":"Server CPU at 95%"}'
```

## Running the service

```bash
npm run dev
```

## Testing the service

```bash
npm test
```

## Docker deployment

# Build image
docker build -t notification-service:1.0 .

# Run container
```bash
docker run -d \
  -p 5001:5001 \
  -e SLACK_WEBHOOK_URL=$SLACK_WEBHOOK_URL \
  notification-service:1.0
```





