import { db } from "../db.js";

export const register = (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username or email already exists in the database
  const checkIfExistsQuery =
    "SELECT * FROM users WHERE username = ? OR email = ?";
  db.query(checkIfExistsQuery, [username, email], (error, results) => {
    if (error) {
      console.error("Error checking if user exists: ", error);
      return res
        .status(500)
        .json({ error: "An internal server error occurred" });
    }

    if (results.length > 0) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }

    // Encrypt the password using bcrypt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
          console.error("Error encrypting password: ", err);
          return res
            .status(500)
            .json({ error: "An internal server error occurred" });
        }

        // Insert the user data into the database
        const insertUserQuery =
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(
          insertUserQuery,
          [username, email, hashedPassword],
          (error) => {
            if (error) {
              console.error("Error inserting user data: ", error);
              return res
                .status(500)
                .json({ error: "An internal server error occurred" });
            }

            return res.status(201).json({ message: "Registration successful" });
          }
        );
      });
    });
  });
};

export const login = (req, res) => {
  res.json("from controller");
};

export const logout = (req, res) => {
  res.json("from controller");
};
