const linksDB = {
  'fXsCW834': 'https://gplinks.co/nX4dOcy?skip_sub=1',
  'DuCF93bt': 'https://gplinks.co/Y8WPef1F?skip_sub=1',
  'VJu41BDO': 'https://gplinks.co/gJfe7H6U?skip_sub=1',
  'z9oFNvDl': 'https://gplinks.co/67y7mAEZ?skip_sub=1',
  'NrIGXUx3': 'https://gplinks.co/krMGvia1?skip_sub=1',
  '1iv0dd2e': 'https://gplinks.co/C7liA?skip_sub=1',
  'ZylYAObk': 'https://gplinks.co/IyN1mJPp?skip_sub=1',
  'xSQ4aoIP': 'https://gplinks.co/qn1iD?skip_sub=1',
  'de94197d1cb94315': 'https://gplinks.co/Sos0hCcg?skip_sub=1',
  '8eb101e1d19c442d': 'https://gplinks.co/TcONxI9n?skip_sub=1',
  '3ea7650a47e04f1b': 'https://gplinks.co/3P9SP?skip_sub=1',
  'bd751fdcb72448b3': 'https://gplinks.co/h4zP3V?skip_sub=1',
  '34c1103f3c374fc8': 'https://gplinks.co/vqDh8?skip_sub=1',
  '761af2b161504db3': 'https://gplinks.co/k4hyQSR?skip_sub=1',
  '80a5394d760d4c42': 'https://gplinks.co/3P9SP?skip_sub=1',
  'c9e92c8837d2425a': 'https://gplinks.co/sgJp6?skip_sub=1',
  'b927c634902f491b': 'https://gplinks.co/wC4z2?skip_sub=1',
  '913e50c527dd42fe': 'https://gplinks.co/njPSTZCv?skip_sub=1',
  'ca1478230d834795': 'https://gplinks.co/UE91f6p?skip_sub=1',
  'c417080a08c441d9': 'https://gplinks.co/zOb68WW?skip_sub=1',
  '548eaf2ddd8e4d69': 'https://gplinks.co/Yuem9?skip_sub=1',
  'baa8bfd2179a4150': 'https://gplinks.co/uWcW?skip_sub=1'
};

export default function handler(req, res) {
  const { token } = req.query;
  if (linksDB[token]) {
    res.redirect(307, linksDB[token]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
