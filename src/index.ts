import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { useRoutes } from './routes';

const PORT = process.env.PORT || 3333;
//Teste

const app = express();
app.use(express.json());
useRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
