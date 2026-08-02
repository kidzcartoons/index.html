const linksDB = {
  'fXsCW834': 'https://gplinks.co/nX4dOcy?skip_sub=1',
  'DuCF93bt': 'https://gplinks.co/Y8WPef1F?skip_sub=1',
  'VJu41BDO': 'https://gplinks.co/gJfe7H6U?skip_sub=1',
  'z9oFNvDl': 'https://gplinks.co/67y7mAEZ?skip_sub=1',
  
  'NrIGXUx3': 'https://gplinks.co/krMGvia1?skip_sub=1',
  '1iv0dd2e': 'https://gplinks.co/C7liA?skip_sub=1',
  'ZylYAObk': 'https://gplinks.co/IyN1mJPp?skip_sub=1',
  'xSQ4aoIP': 'https://gplinks.co/qn1iD?skip_sub=1',
  
};

export default function handler(req, res) {
  const { token } = req.query;
  if (linksDB[token]) {
    res.redirect(307, linksDB[token]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
