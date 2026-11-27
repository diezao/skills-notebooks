import assert from 'node:assert/strict';
import {issue, verify} from './verify.mjs';

const nonce = '0123456789abcdef'.repeat(2);
const answers = {
  linux: '1,2,3,4,5,17,18,19,20,21',
  kubernetes: '1',
  slurm: '3',
  data: '240/32',
  quantum: 'even',
};
for (const [kind, answer] of Object.entries(answers)) {
  const challenge = 'sl1:' + kind + ':' + nonce;
  assert(verify(challenge, answer));
  assert(!verify(challenge, answer + ' '));
  assert(!verify(challenge, 'x'.repeat(129)));
  assert(!verify(challenge.replace('sl1', 'sl2'), answer));
  assert.notEqual(issue(kind), issue(kind));
}
assert(verify('sl1:quantum:1' + '0'.repeat(31), 'odd'));
assert(!verify('sl1:quantum:1' + '0'.repeat(31), 'even'));
assert.throws(() => issue('unknown'));
assert(verify('sl1:ai:0123456789abcdef0123456789abcdef', '16/32'));
assert(!verify('sl1:ai:0123456789abcdef0123456789abcdef', '17/32'));
console.log('PASS six synthetic challenge results, changed parity, malformed results and nonce generation');
