# Behmeh Lambda
Run `npm install` to install dependencies


## Packaging
Run `npm run build` for creating the deployable Lambda package


## Running Handler Locally
By CSS Selector: Run `npm run css-selector`


## Deployment
Set environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. Run `npm run deploy`


## CURL
Run `curl -X GET "https://something.execute-api.us-east-1.amazonaws.com/dev/css-selector?url=http://www.balatarin.com&selector=.link-url"`
