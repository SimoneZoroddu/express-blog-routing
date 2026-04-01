const express = require('express');
const app = express();

// Serve static files from /public directory under /images path
app.use('/images', express.static('public'));

// Route for root
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Sample blog posts
const posts = [
  {
    title: 'Introduzione al Blog',
    content: 'Benvenuti nel mio blog personale dove condivido pensieri e idee.',
    image: '/images/images.jpg',
    tags: ['introduzione', 'blog']
  },
  {
    title: 'Tecnologia Moderna',
    content: 'Esplorando le ultime tendenze in tecnologia e sviluppo software.',
    image: '/images/image2.jpg',
    tags: ['tecnologia', 'sviluppo']
  },
  {
    title: 'Ricette Sane',
    content: 'Ricette semplici e salutari per la cucina quotidiana.',
    image: '/images/image3.jpg',
    tags: ['cucina', 'salute']
  },
  {
    title: 'Viaggi e Avventure',
    content: 'Storie e consigli sui miei viaggi intorno al mondo.',
    image: '/images/image4.jpg',
    tags: ['viaggi', 'avventure']
  },
  {
    title: 'Fotografia Naturale',
    content: 'Consigli per catturare la bellezza della natura attraverso la fotografia.',
    image: '/images/image5.jpg',
    tags: ['fotografia', 'natura']
  }
];

// Route for /bacheca
app.get('/bacheca', (req, res) => {
  res.json(posts);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});