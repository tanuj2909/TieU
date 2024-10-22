import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('sup!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
