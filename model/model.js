// ---------- IMPORT DB CONNECTION FROM CONFIG FOLDER ---------- //

db = require("../config");

// Import bcrypt module

let { hash, compare, hashSync } = require("bcrypt");

// Token creation

let { createToken } = require("../middleware/AuthenticatedUser");

// ---------- USER CLASS ---------- //

class User {

    // Login

    login(req, res) {
        const { email, password } = req.body;
        const strQry =
        `
        SELECT firstName, lastname, gender, cellNumber, email, password, userRole, userProfile, joinDate
        FROM Users
        WHERE email = `${email}`;
        `;

        db.query(strQry, async (err, data) => {
            if (err) throw err;
            if (!data.length || data == null) {
                res.status(401).json({ err: "You provided an invalid email address."});
            } else {
                await compare(password, data[0].password, (cErr, cResult) => {
                    if (cErr) throw cErr;

                    // Token creation

                    const jwToken = createToken ({
                        email,
                        password,
                    });

                    // Saving

                    res.cookie("LegitUser", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true,
                    });
                    if (cResult){
                        res.status(200).json({
                            msg: "User logged in successfully .",
                            jwToken,
                            result: data[0],
                        });
                    } else {
                        res.status(401).json({
                            err: "You entered an invalid password or did not register as a user .",
                        });
                    }
                });
            }
        });
    }

    // To fetch all users

    fetchUsers(req,res) {
        const strQry =
        `
        SELECT userID, firstName, lastName, gender, cellNumber, email, password, userRole, userProfile, joinDate
        FROM Users;
        `;

        db.query(strQry, (err, data) => {
            if (err) throw err;
            else res.status(200).json({results: data});
        });
    }

    // To fetch a single user

    fetchUser(req, res) {
        const strQry =
        `
        SELECT userID, firstName, lastName, gender, cellNumber, email, password, userRole, userProfile, joinDate
        FROM Users
        WHERE UserID = ?;
        `;

        db.query(strQry, [req.params.id], (err, data) => {
            if (err) throw err;
            else res.status(200).json({ result: data});
        });
    }

    // To create a user

    async createUser(req, res) {
        // Payload and hashing user password

        let detail = req.body;
        detail.password = await hash(detail.password, 15);

        // Authentication Information

        let user = {
            email: detail.email,
            password: detail.password,
        };

        const strQry =
        `
        INSERT INTO Users
        SET ?;
        `;

        db.query(strQry, [detail], (err) => {
            if (err) {
                res.status(401).json({ err });
            } else {
                // Token creation ---- to be savedd in "cookie"
                // Duration is in milliseconds

                const jwToken = createToken(user);
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true,
                });
                res.status(200).json({ msg: "A user record has been saved ."});
            }
        });
    }

    // To update a user record

    updateUser(req,,res) {
        let data = req.body;
        if (data.password !== null || data.password !== undefined)
            data.password = hashSync(data.password, 15);
        const strQry =
        `
        UPDATE Users
        SET ?
        WHERE UserID = ?;
        `;

        db.query(strQry, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({ msg: "Arow was affected .",
            });
        });
    }

    // To delete a user

    deleteUser(req, res) {
        const strQry =
        `
        DELETE FROM Users
        WHERE UserID = ?;
        `;

        db.query(strQry, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({ msg: "A user record was deleted from our database .",
            });
        });
    }
}

// ---------- PRODUCT CLASS ---------- //

class Products {
    // To fetch all products

    fetchProducts(req, res) {
        const strQry =
        `
        SELECT id, productName, description, category, price, quantity, imgURL
        FROM Products;
        `;

        db.query(strQry, (err, results) => {
            if (err) throw (err);
            res.status(200).json({ results: results });
        });
    }

    // To fetch a single product

    fetchProduct(req, res) {
        const strQry =
        `
        SELECT id, productName, description, category, price, quantity, imgURL
        FROM Products
        WHERE id = ?;
        `;

        db.query(strQry, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({results: results});
        });
    }

    // To add a product

    addProduct(req, res) {
        const tsrQry =
        `
        INSERT INTO Products
        SET ?
        `;

        db.query(strQry, [req.body], (err) => {
            if (err) {
                res.status(400).json({ err: "Unable t add a new product record ."});
            } else {
                res.status(200).json({ msg: "Product record saved ."});
            }
        });
    }

    // To update a product record

    updateProduct(req, res) {
        const strQry =
        `
        UPDATE Products
        SET ?
        WHERE id = ?;
        `;

        db.query(strQry, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({ err: "Unable to update a product record ."});
            } else {
                res.status(200).json({ msg: "Product record updated and saved ." });
            }
        });
    }

    // To delete a product record

    deleteProduct(req, res) {
        const strQry =
        `
        DELETE FROM Products
        WHERE id = ?;
        `;

        db.query(strQry, [req.params.id], (err) => {
            if (err)
                res.status(400).json({ err: "The product record was unfortunately not found ."});
            res.status(200).json({ msg: "A product record was deleted ."});
        });
    }
}

module.exports = {
    User,
    Product,
}
