module.exports = {
    create: (req, res) => {
        //get all needed variables to create a new product. These will all come from the body.
        const { name, description, price, image_url } = req.body;

        const db = req.app.get('db');
        db.create_product([name, description, price, image_url])
        .then(dbRes => {
            res.status(200).send(dbRes);
        })
        .catch(err=> {
            res.status(500).send("Failed to create new product");
            console.log(err);
        });
    },

    getOne: (req, res) => {
        // get the product identifier from the parameters
        const id = req.params.id;

        const db = req.app.get('db');
        db.read_product(id)
        .then(dbRes => {
            res.status(200).send(dbRes);
        })
        .catch(err=> {
            res.status(500).send("Failed to get product");
            console.log(err);
        });

    },

    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products()
        .then(dbRes => {
            res.status(200).send(dbRes);
        })
        .catch(err=> {
            res.status(500).send("Failed to get all products");
            console.log(err);
        });

    },

    update: (req, res) => {
        //get product ID from the parameters, and the description from the query string.
        const id = req.params.id;
        const desc = req.query.desc;

        const db = req.app.get('db');
        db.update_product(id, desc)
        .then(dbRes => {
            res.status(200).send(dbRes);
        })
        .catch(err=> {
            res.status(500).send("Failed to update product");
            console.log(err);
        });

    },
    delete: (req, res) => {
        //get the id from the parameters
        const id=req.params.id;

        const db = req.app.get('db');
        db.delete_product(id)
        .then(dbRes => {
            res.status(200).send(dbRes);
        })
        .catch(err=> {
            res.status(500).send("Failed to delete product");
            console.log(err);
        });

    }
}