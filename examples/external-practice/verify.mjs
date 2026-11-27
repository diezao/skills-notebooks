import {randomBytes} from 'node:crypto';

const kinds = ['linux', 'kubernetes', 'slurm', 'data', 'ai', 'quantum'];

export function issue(kind) {
  if (!kinds.includes(kind)) throw new TypeError('Choose a known exercise.');
  return 'sl1:' + kind + ':' + randomBytes(16).toString('hex');
}

export function verify(challenge, response) {
  if (typeof challenge !== 'string' || challenge.length > 64) return false;
  const match = /^sl1:(linux|kubernetes|slurm|data|ai|quantum):([0-9a-f]{32})$/.exec(challenge);
  if (!match || typeof response !== 'string' || response.length > 128) return false;
  const [, kind, seed] = match;
  const values = [...seed].map(digit => parseInt(digit, 16));
  const n = values[0] + 2;
  const expected = {
    linux: () => values.map((value, index) => value < 5 ? index + 1 : 0).filter(Boolean).join(',') || 'none',
    kubernetes: () => String(1 + values[0] % 3),
    slurm: () => String(n * (n + 1) / 2),
    data: () => String(values.reduce((sum, value) => sum + value, 0)) + '/32',
    ai: () => String(values.filter(value => (value >= 8) === (value % 3 !== 0)).length) + '/32',
    quantum: () => ['even', 'odd'][values[0] % 2],
  };
  return response === expected[kind]();
}
