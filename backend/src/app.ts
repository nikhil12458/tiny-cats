import express, { type Request, type Response } from "express";
import catsRoute from "./routes/cat.routes.ts";
import aiRotes from "./routes/ai.routes.ts";
import aiRecommendRoutes from "./routes/aiRecommend.routes.ts";
import mcpRoutes from "./routes/test-mcp.routes.ts";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Tiny cat backend running",
  });
});

app.use("/api/cats", catsRoute);
app.use("/api/ai", aiRotes);
app.use("/api/aiRecommend", aiRecommendRoutes);
app.use("/api/mcp", mcpRoutes);

export default app;
