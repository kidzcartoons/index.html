const linksDB = {
  '9v3EHVbg': 'https://gplinks.co/Y8WPef1F',
  'DuCF93bt': 'https://gplinks.co/Y8WPef1F?skip_sub=1',
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
