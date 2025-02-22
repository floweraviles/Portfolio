const db = require("../db/config");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await db.any("SELECT * FROM blogs ORDER BY id DESC");
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlog = await  db.one(
            "INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING *", 
            [title, content] 
        );
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await db.none("UPDATE blogs SET title = $1, content = $2 WHERE id = $3", [
            title,
            content,
            id,
        ]);
        res.json({ message: "Blog updated" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        await db.none("DELETE FROM blogs WHERE id = $1", [id]);
        res.json({ message: "Blog deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};