// pages/api/posts.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    res.status(200).json({ id: Date.now(), title, content });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
