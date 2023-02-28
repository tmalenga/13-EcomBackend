const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const category_data = await Category.findAll({
    include: [{model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}],
  })
  res.status(500).json(category_data);
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category_data = await Category.findByPk(req.params.id, {
    include: [{model: Product, attributes:['id', 'product_name', 'price', 'stock', 'category_id']}]
  })
  res.status(500).json(category_data);

});

router.post('/', async (req, res) => {
  // create a new category
  const category_data = await Category.create({
    catergory_name: req.body.catergory_name
  })
  res.status(500).json(category_data);

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category_data = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.status(500).json(category_data);

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const category_data = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(500).json(category_data);
});

module.exports = router;
