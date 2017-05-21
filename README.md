# Behmeh Lambda
Run `npm install` to install dependencies


## Packaging
Run `npm run build` for creating the deployable Lambda package


## Running Handler Locally
By CSS Selector: Run `npm run css-selector`


## CURL
Run `curl -X GET "https://6qt8emo1x8.execute-api.us-east-1.amazonaws.com/sandbox/selector?url=http://www.balatarin.com&selector=.link-url"`

## Deployment
Set environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. Run `npm run deploy`
