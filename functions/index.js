const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });
admin.initializeApp(functions.config().firebase);

exports.getUserDetails = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const uids = req.body.uid;

    if (!Array.isArray(uids)) {
      res
        .status(400)
        .send({ status: 0, message: "Expecting input to be an array of UIDs" });
    }

    const output = uids.map(uid => {
      return new Promise((resolve, reject) => {
        admin
          .auth()
          .getUser(uid)
          .then(userRecord => {
            return resolve(userRecord);
          })
          .catch(error => {
            reject(error);
          });
      });
    });

    Promise.all(output)
      .then(users => {
        return res.status(200).send({ users });
      })
      .catch(error => {
        return res.status(500).send({ error });
      });
    // return res.status(200).send({ test: "Testing functions" });
  });

  //   const uids = req.body.uid;
  //   const output = uids.map(uid => {
  //     return new Promise((resolve, reject) => {
  //       admin
  //         .auth()
  //         .getUser(uid)
  //         .then(userRecord => {
  //           return resolve(userRecord);
  //         })
  //         .catch(error => {
  //           reject(error);
  //         });
  //     });
  //   });

  //   Promise.all(output)
  //     .then(users => {
  //       return users;
  //     })
  //     .catch(error => {
  //       return error;
  //     });
});
