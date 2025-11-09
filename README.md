# Otasku

Full-stack application with React + TypeScript frontend and Node.js + Express backend.

## 🚀 Tech Stack

**Frontend:**

-   React.js with TypeScript
-   Vite
-   Deployed on Heroku: https://otasku-front-717a82c05619.herokuapp.com/

**Backend:**

-   Node.js with Express
-   TypeScript
-   Deployed on Heroku: https://otasku-back-40d4c53ed617.herokuapp.com/

## 📁 Project Structure

```
otasku/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   ├── package.json
│   ├── Procfile
│   └── server.js
├── backend/           # Node.js + Express backend
│   ├── src/
│   ├── package.json
│   └── Procfile
└── README.md
```

## 🛠️ Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🌐 Deployment

### Deploy Backend to Heroku

```bash
git subtree push --prefix backend heroku-back master
```

### Deploy Frontend to Heroku

```bash
git subtree push --prefix frontend heroku-front master
```

## 📝 Environment Variables

### Backend (.env)

```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000
```

For production, update `VITE_API_URL` to point to your deployed backend URL.

## 🔗 Links

-   **Frontend**: https://otasku-front-717a82c05619.herokuapp.com/
-   **Backend API**: https://otasku-back-40d4c53ed617.herokuapp.com/
-   **GitHub**: https://github.com/NulledNiks/otasku

## 📄 License

MIT
