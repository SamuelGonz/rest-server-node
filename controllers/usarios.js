const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
   const { limit, createdAt, order, apiKey } = req.query;

   res.json({ msg: "get API - Controllador", limit, createdAt, order, apiKey });
};

const usuariosPost = (req = request, res = response) => {
   const { name, edad } = req.body;

   res.json({ msg: "Post API - Controllador", name, edad });
};
const usuariosPut = (req = request, res = response) => {
   const id = req.params.id;

   res.json({ msg: "Put API - Controllador", id });
};
const usuariosPatch = (req = request, res = response) => {
   res.json({ msg: "Patch API - Controllador" });
};
const usuariosDelete = (req = request, res = response) => {
   res.json({ msg: "Delete API - Controllador" });
};

module.exports = {
   usuariosGet,
   usuariosPost,
   usuariosPut,
   usuariosPatch,
   usuariosDelete,
};
