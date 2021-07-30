const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const thisTag = await Tag.findByPk(req.params.id, {
      
    });

    if (!thisTag) {
      res.status(404).json({ message: 'No Tag with this ID' });
      return;
    }

    res.status(200).json(thisTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try 
  {
    const newTag = await Category.create(req.body);

    res.status(200).json(newTag);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const thisTag = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!thisTag[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(thisTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const thisTag = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!thisTag) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(thisTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
