const { Router } = require("express");
const router = Router();
const userController = require("../controllers/UserControllers");

router.post("/", userController.insertUser);
router.get("/:id", userController.getUser);
router.get("/", userController.userList);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
