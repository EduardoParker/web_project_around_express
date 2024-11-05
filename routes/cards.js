const router = require("express").Router();

const {
  getCards,
  createCard,
  addLike,
  deleteLike,
} = require("../controllers/cards");

router.get("/cards", getCards);
router.post("/cards", createCard);
router.put("/cards/:cardId/likes", addLike);
router.delete("/cards/:cardId/likes", deleteLike);

module.exports = router;
