const express = require('express')
var router = express.Router(); //interceptação das rotas

var Categoria = require("../app/models/category");

//Post
router.post("/", function (req, res) 
{
    var categoria = new Categoria();
    categoria.nome = req.body.nome;
    categoria.save(function (error) {
        if (error)
            res.send("Erro ao tentar salvar a categoria" + error);

        res.status(201).json({ message: 'Categoria cadastrada' });

    });

});

//Get All
router.get("/", function (req, res) {
    Categoria.find(function (err, cat) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: 'Categorias retornadas',
            categoria: cat
        });
    });
});

//FindById
router.get("/:categoryId", function (req, res) {
    const id = req.params.categoryId;

    Category.findById(id, function (err, categoria) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar categoria"
            });
        }

        else if (categoria == null) {
            res.status(400).json({
                message: "categoria não encontrada"
            });
        }
        else {
            res.status(200).json({
                message: "categoria encontrada",
                categoria: categoria
            });
        }

    });

});


//PUT
router.put("/:categoryId", function (req, res) {
    const id = req.params.categoryId;

    Categoria.findById(id, function (err, categoria) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar categoria"
            });
        }

        else if (categoria == null) {
            res.status(400).json({
                message: "categoria não encontrada"
            });
        }
        else {
            categoria.nome = req.body.nome;
            categoria.produto = req.body.produto;

            categoria.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar categoria" + error);
                
                res.status(200).json({
                    message:"categoria atualizada com sucesso"
                });
              
            });
        }

    });

});

//DELETE
router.delete("/:categoryId", function(req, res){
    Categoria.findByIdAndRemove(req.params.categoryId, (err, categoria) =>{
        if(err) 
            return res.status(500).send(err);

        const response = {
            message:"categoria removida com sucesso",
            id: categoria.id
        }; 
        return res.status(200).send(response);
    });
});

module.exports = router;