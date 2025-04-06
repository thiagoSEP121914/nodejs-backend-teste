import express from 'express';
import router from './routes/routes.js';
const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/", router);

app.listen(PORT, ()=> {
    console.log(`Server is running in the PORT: ${PORT}`);
});