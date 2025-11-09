# 🚀 Complete Update & Deploy Workflow

## Update Workflow - Step by Step

### When you update ANY local files:

#### 1️⃣ Save your changes in VS Code (Ctrl+S)

#### 2️⃣ Stage, Commit, and Push to GitHub

```bash
git add .
git commit -m "Your commit message here"
git push origin master
```

#### 3️⃣ Deploy to Heroku

**If you updated BACKEND files:**

```bash
git subtree push --prefix backend heroku-back master
```

**If you updated FRONTEND files:**

```bash
git subtree push --prefix Frontend heroku-front master
```

**If you updated BOTH:**

```bash
git subtree push --prefix backend heroku-back master
git subtree push --prefix Frontend heroku-front master
```

---

## 📋 Quick Commands

### Update Backend Only

```powershell
# From d:\otasku directory
git add .
git commit -m "Update backend: describe your changes"
git push origin master
git subtree push --prefix backend heroku-back master
```

### Update Frontend Only

```powershell
# From d:\otasku directory
git add .
git commit -m "Update frontend: describe your changes"
git push origin master
git subtree push --prefix Frontend heroku-front master
```

### Update Both Frontend and Backend

```powershell
# From d:\otasku directory
git add .
git commit -m "Update: describe your changes"
git push origin master
git subtree push --prefix backend heroku-back master
git subtree push --prefix Frontend heroku-front master
```

---

## 🎯 Example Scenarios

### Scenario 1: You modified `backend/src/index.ts`

```powershell
cd d:\otasku
git add .
git commit -m "Add new API endpoint"
git push origin master
git subtree push --prefix backend heroku-back master
```

### Scenario 2: You modified `Frontend/src/App.tsx`

```powershell
cd d:\otasku
git add .
git commit -m "Update UI design"
git push origin master
git subtree push --prefix Frontend heroku-front master
```

### Scenario 3: You modified files in BOTH folders

```powershell
cd d:\otasku
git add .
git commit -m "Connect new frontend feature to backend API"
git push origin master
git subtree push --prefix backend heroku-back master
git subtree push --prefix Frontend heroku-front master
```

---

## ⚠️ Important Notes

1. **Always commit to GitHub first** before deploying to Heroku
2. **Wait for Heroku build** to complete before testing (usually 30-60 seconds)
3. **Check for errors** in Heroku logs if something doesn't work:

    ```powershell
    heroku logs --tail --app otasku-back
    heroku logs --tail --app otasku-front
    ```

4. **Frontend environment variables**: If you need to change the backend URL, update:
    - `Frontend/.env` for local development
    - `Frontend/.env.production` for Heroku deployment

---

## 🔍 Verify Deployment

### Check Backend

```powershell
curl https://otasku-back-40d4c53ed617.herokuapp.com/
```

### Open Frontend in Browser

```powershell
heroku open --app otasku-front
```

---

## 📱 One-Line Deploy Commands

### Deploy Everything

```powershell
git add . && git commit -m "Update" && git push origin master && git subtree push --prefix backend heroku-back master && git subtree push --prefix Frontend heroku-front master
```

### Deploy Backend Only

```powershell
git add . && git commit -m "Update backend" && git push origin master && git subtree push --prefix backend heroku-back master
```

### Deploy Frontend Only

```powershell
git add . && git commit -m "Update frontend" && git push origin master && git subtree push --prefix Frontend heroku-front master
```

---

## 🛠️ Troubleshooting

### If Heroku deployment fails:

1. Check the error message in terminal
2. View logs: `heroku logs --tail --app [app-name]`
3. Make sure your code builds locally first:
    - Backend: `cd backend && npm run build`
    - Frontend: `cd Frontend && npm run build`

### If changes don't appear on Heroku:

1. Clear browser cache (Ctrl+F5)
2. Wait 1-2 minutes for Heroku to restart
3. Check if deployment actually succeeded in terminal output

---

## 🌐 Your App URLs

-   **Frontend**: https://otasku-front-717a82c05619.herokuapp.com/
-   **Backend**: https://otasku-back-40d4c53ed617.herokuapp.com/
-   **GitHub**: https://github.com/NulledNiks/otasku
