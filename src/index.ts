import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { useRoutes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const PORT = process.env.PORT || 3333;

const app = express();
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
useRoutes(app)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
