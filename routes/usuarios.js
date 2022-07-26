const { Router } = require("express");
const {
   usuariosGet,
   usuariosPost,
   usuariosPut,
   usuariosPatch,
   usuariosDelete,
} = require("../controllers/usarios");

const router = Router();

router.get("/", usuariosGet);

router.put("/", usuariosPut);
router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
