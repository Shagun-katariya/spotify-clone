const express = require('express');
const routes = express.Router();
const punjabi101 = require('../models/punjabi101');
const tollywood_pearls = require('../models/tollywood_pearls');
const equal_india = require('../models/equal_india');
const hot_hits_punjabi = require('../models/hot_hits_punjabi');
const hot_hits_tamil = require('../models/hot_hits_tamil');
const india_india = require('../models/india_india');
const kollywood_cream = require('../models/kollywood_cream');
const latest_tamil = require('../models/latest_tamil');
const latest_telugu = require('../models/latest_telugu');
const radar_india = require('../models/radar_india');
const top_50_global = require('../models/top_50_global');
const top_50_india = require('../models/top_50_india');

routes.get('/', async (req, res) =>  {
  res.render('index');
});

routes.get('/punjabi101', async (req, res) => {
  const Punjabi101 = await punjabi101.find();
  res.render('punjabi101', {
    punjabi101: Punjabi101,
    songs: JSON.stringify(Punjabi101),
  });
});

routes.get('/tollywood_pearls', async (req, res) => {
  const Tollywood_pearls = await tollywood_pearls.find();
  res.render('tollywood_pearls', {
    tollywood_pearls: Tollywood_pearls,
    songs: JSON.stringify(Tollywood_pearls),
  });
});


routes.get('/equal_india', async (req, res) => {
  const Equal_india = await equal_india.find();
  res.render('equal_india', {
    equal_india: Equal_india,
    songs: JSON.stringify(Equal_india),
  });
});

routes.get('/hot_hits_punjabi', async (req, res) => {
  const Hot_hits_punjabi = await hot_hits_punjabi.find();
  res.render('hot_hits_punjabi', {
    hot_hits_punjabi: Hot_hits_punjabi,
    songs: JSON.stringify(Hot_hits_punjabi),
  });
});
 
routes.get('/hot_hits_tamil', async (req, res) => {
  const Hot_hits_tamil = await hot_hits_tamil.find();
  res.render('hot_hits_tamil', {
    hot_hits_tamil: Hot_hits_tamil,
    songs: JSON.stringify(Hot_hits_tamil),
  });
});

routes.get('/india_india', async (req, res) => {
  const India_india = await india_india.find();
  res.render('india_india', {
    india_india: India_india,
    songs: JSON.stringify(India_india),
  });
});

routes.get('/kollywood_cream', async (req, res) => {
  const Kollywood_cream = await kollywood_cream.find();
  res.render('kollywood_cream', {
    kollywood_cream: Kollywood_cream,
    songs: JSON.stringify(Kollywood_cream),
  });
});

routes.get('/latest_tamil', async (req, res) => {
  const Latest_tamil = await latest_tamil.find();
  res.render('latest_tamil', {
    latest_tamil: Latest_tamil,
    songs: JSON.stringify(Latest_tamil),
  });
});

routes.get('/latest_telugu', async (req, res) => {
  const Latest_telugu = await latest_telugu.find();
  res.render('latest_telugu', {
    latest_telugu: Latest_telugu,
    songs: JSON.stringify(Latest_telugu),
  });
});

routes.get('/radar_india', async (req, res) => {
  const Radar_india = await radar_india.find();
  res.render('radar_india', {
    radar_india: Radar_india,
    songs: JSON.stringify(Radar_india),
  });
});

routes.get('/top_50_global', async (req, res) => {
  const Top_50_global = await top_50_global.find();
  res.render('top_50_global', {
    top_50_global: Top_50_global,
    songs: JSON.stringify(Top_50_global),
  });
});

routes.get('/top_50_india', async (req, res) => {
  const Top_50_india = await top_50_india.find();
  res.render('top_50_india', {
    top_50_india: Top_50_india,
    songs: JSON.stringify(Top_50_india),
  });
});

module.exports = routes; 