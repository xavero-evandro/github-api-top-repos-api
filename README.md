# Get Top Repositories GitHub

### Just run this command to install all dependencies

```
npm install
```

### and then run this command to start

```
npm run start
```

# Endpoints

## GET - localhost:3333/repositories

## Request Params for better and faster result/response

## JSON format

#### repoName - optional - string

#### language - optional - string

#### created - optional - Date string (2020-01-01)

#### per_page - optional - int/string - limit number os results

### sort - optional - string

### order - optional - string

## Example of a Optional JSON body request

```
{
  "repoName": "",
  "language": "",
  "created": "",
  "per_page": "1",
  "sort": "stars",
  "order": "desc"
}
```

## I also add a exported file to be imported on Insomnia

# Test

## Just run this command to execute the unit and e2e test

```
npm run test
```
