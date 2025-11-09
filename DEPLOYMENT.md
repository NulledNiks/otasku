# Deployment Guide

## Quick Deploy Commands

### Deploy Backend Only

```bash
cd d:\otasku
git add .
git commit -m "Update backend"
git push origin master
git subtree push --prefix backend heroku-back master
```

### Deploy Frontend Only

```bash
cd d:\otasku
git add .
git commit -m "Update frontend"
git push origin master
git subtree push --prefix Frontend heroku-front master
```

### Deploy Both

```bash
cd d:\otasku
git add .
git commit -m "Update both frontend and backend"
git push origin master
git subtree push --prefix backend heroku-back master
git subtree push --prefix Frontend heroku-front master
```

## View Logs

### Backend Logs

```bash
heroku logs --tail --app otasku-back
```

### Frontend Logs

```bash
heroku logs --tail --app otasku-front
```

## Open Apps

### Backend

```bash
heroku open --app otasku-back
```

### Frontend

```bash
heroku open --app otasku-front
```

## Set Environment Variables

### Backend

```bash
heroku config:set KEY=VALUE --app otasku-back
```

### Frontend

```bash
heroku config:set KEY=VALUE --app otasku-front
```

## App URLs

-   **Frontend**: https://otasku-front-717a82c05619.herokuapp.com/
-   **Backend**: https://otasku-back-40d4c53ed617.herokuapp.com/
-   **GitHub**: https://github.com/NulledNiks/otasku

## Important Notes

-   Frontend folder is capitalized as `Frontend` in git
-   Backend folder is lowercase as `backend` in git
-   Always commit to git before deploying to Heroku
-   Build happens automatically on Heroku during deployment
