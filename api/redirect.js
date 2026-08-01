const linksDB = {
  'nvCc6YT': 'https://gplinks.co/nvCc6YT',
  'JPlv': 'https://gplinks.co/JPlv',
  'XPdgBN': 'https://gplinks.co/XPdgBN',
  'P2APl': 'https://gplinks.co/P2APl'
};

export default function handler(req, res) {
  const { token } = req.query;
  if (linksDB[token]) {
    res.redirect(307, linksDB[token]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
