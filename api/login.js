// File: api/login.js
export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // Preflight OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ status: 'error', message: 'Username dan Password wajib diisi.' });
  }

  const u = String(username).trim().toLowerCase();
  const p = String(password).trim();

  const validUsers = ['smpn10', 'al kahpi', 'alkahpi', 'admin', 'guru'];
  const isUserValid = validUsers.includes(u);
  const isPassValid = p === 'smpn10$#' || p === 'smpn10';

  if (isUserValid && isPassValid) {
    const timestamp = Date.now();
    const token = Buffer.from(`${username}:${timestamp}:edadmin_pro_secure_session`).toString('base64');
    return res.status(200).json({
      status: 'success',
      token,
      user: {
        username: 'smpn10',
        nama: 'Al-Kahpi, S.Pd.',
        sekolah: 'SMP Negeri 10 Tarakan',
        role: 'Administrator Guru'
      }
    });
  }

  return res.status(401).json({
    status: 'error',
    message: 'Username atau Password yang Anda masukkan tidak valid.'
  });
}
