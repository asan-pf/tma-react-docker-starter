import { Router } from "express";
import jwt from "jsonwebtoken";
import { requireAuth } from "./middleware.js";

const router = Router();

type AuthBody = {
    password?: string;
    telegramUserId?: number;
    telegramUsername?: string;
};
// example API endpoint
router.get('/me', (req, res) => {
  res.json({ ok: true, from: 'backend' });
});
// authenticate user
router.post("/auth", (req, res) => {
    const body = req.body as AuthBody;

    const expected = process.env.AUTH_PASSWORD || "default_password";
    if (!expected)
        return res.status(500).json({ error: "AUTH_PASSWORD not set" });

    if (!body.password || body.password !== expected) {
        return res.status(401).json({ error: "Invalid password" });
    }
    const moderatorUserId = process.env.ADMIN_USER_ID || "123456789";
    if (!body.telegramUserId || body.telegramUserId.toString() !== moderatorUserId) {
        return res.status(401).json({ error: "Invalid user id" });
    }

    const secret = process.env.JWT_SECRET || "jwt_secret";
    if (!secret) return res.status(500).json({ error: "JWT_SECRET not set" });

    // Minimal payload. Add whatever you need.
    const token = jwt.sign(
        {
            sub: body.telegramUserId
                ? String(body.telegramUserId)
                : "anonymous",
            role: "moderator",
            authed: true,
        },
        secret,
        { expiresIn: "7d" }
    );

    return res.json({ token });
});

router.get("/protected", requireAuth, (req, res) => {
    res.json({
        message: "✅ Hidden content revealed",
        secretData: "This came from a protected endpoint.",
    });
});

export default router;
