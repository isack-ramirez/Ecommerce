const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCat = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const thisCat = await Category.findByPk(req.params.id, {
      
    });

    if (!thisCat) {
      res.status(404).json({ message: 'No category with this ID' });
      return;
    }

    res.status(200).json(thisCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

  try 
  {
    const newCat = await Category.create(req.body);

    res.status(200).json(newCat);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});

router.put('/:id',async (req, res) => {
  try {
    const thisCat = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!thisCat[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(thisCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const thisCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!thisCat) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(thisCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
