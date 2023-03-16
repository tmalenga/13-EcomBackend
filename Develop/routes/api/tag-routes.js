const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tag_data = await Tag.findAll({
    include:[{model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id'],}]
  })
  res.status(500).json(tag_data);

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag_data = await Tag.findByPk(req.params.id,{
    include:[{model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id']}]
  })
  res.status(500).json(tag_data);

});

router.post('/', async (req, res) => {
  // create a new tag
  const tag_data = await Tag.create({tag_name: req.body.tag_name});
  res.status(500).json(tag_data);

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tag_data = await Tag.update(req.body,{
    where: {id: req.params.id}
  })
  res.status(500).json(tag_data);

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tag_data = await Tag.destroy({ where: {id: req.params.id}});
  res.status(500).json(tag_data);
});

module.exports = router;
