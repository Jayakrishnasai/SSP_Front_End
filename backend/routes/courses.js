const Task = require("../models/task");
const express = require("express");
const router = express.Router();

/**
 * Allowed fields (strict whitelist)
 */
const ALLOWED_FIELDS = ["task", "completed"];

/**
 * Validate + sanitize input (no mass assignment)
 */
function sanitizeTaskInput(body) {
    const sanitized = {};

    // Validate "task"
    if (Object.hasOwn(body, "task")) {
        if (typeof body.task !== "string" || body.task.trim() === "") {
            throw new TypeError("Invalid 'task' field");
        }
        sanitized.task = body.task.trim();
    }

    // Validate "completed"
    if (Object.hasOwn(body, "completed")) {
        if (typeof body.completed !== "boolean") {
            throw new TypeError("Invalid 'completed' field");
        }
        sanitized.completed = body.completed;
    }

    return sanitized;
}

/**
 * CREATE Task
 */
router.post("/", async (req, res) => {
    try {
        const data = sanitizeTaskInput(req.body);

        // Explicit assignment (NO direct object injection)
        const task = new Task();
        task.task = data.task === undefined ? "" : data.task;
        task.completed = data.completed === undefined ? false : data.completed;

        await task.save();

        return res.status(201).json(task);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

/**
 * GET all tasks
 */
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find().lean();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * UPDATE Task (SAFE - no $set mass assignment)
 */
router.put("/:id", async (req, res) => {
    try {
        const data = sanitizeTaskInput(req.body);

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Explicit field updates (critical for Sonar)
        if (data.task !== undefined) {
            task.task = data.task;
        }

        if (data.completed !== undefined) {
            task.completed = data.completed;
        }

        await task.save();

        return res.status(200).json(task);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

/**
 * DELETE Task
 */
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;