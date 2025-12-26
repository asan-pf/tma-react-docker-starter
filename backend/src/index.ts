import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { initBot } from './bot.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

// example API endpoint
app.get('/api/me', (req, res) => {
  res.json({ ok: true, from: 'backend' });
});

const port = Number(process.env.PORT || 3000);

app.listen(port, async () => {
  console.log(`Backend listening on http://localhost:${port}`);
  await initBot();
});