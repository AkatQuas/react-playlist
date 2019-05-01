const express = require('express');
const Mock = require('mockjs');

const router = express.Router();

router.get('/', function (req, res) {
  const { query } = req.query;
  const data = Mock.mock({
    'hits|3-10': [{
      'objectID|': '@guid',
      'title': '@title',
      'url': '@url'
    }]
  });
  data.hits = data.hits.map(({ title, ...rest }) => ({ ...rest, title: query + '-' + title }));
  setTimeout(() => {
    res.status(200).json(data);
  }, 500);
})


module.exports = router;