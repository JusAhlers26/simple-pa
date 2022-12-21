const taskController = require("../controllers/task.controller");

module.exports = (app) => {
    app.post("/api/tasks", taskController.create);
    app.get("/api/tasks", taskController.getAll);
    app.delete("/api/tasks/:id", taskController.delete);
    app.push("/api/tasks/:id", taskController.update);
};
