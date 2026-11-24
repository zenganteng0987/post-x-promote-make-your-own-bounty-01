// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
//
// What it does:
//   1. Copies POST.json from the repository root to /output/POST.json, where the
//      gate reads it. That copy is all the grader needs.
//   2. Prints the X post draft for this bounty and validates it against the
//      rules: at most 280 characters by X's counting (every URL counts as 23),
//      carries the required line "Make your own bounty on @makefunai:
//      https://make.fun/sponsor/new", carries the play code, and carries no
//      promise of earnings.
//
// The entry itself is the post on X: one post of your own that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), a photo of its own
// attached (post-image.png in this repository), make.fun or the @makefunai tag
// and your play code in its text. POST.json names the post, and the house
// reads its replies, reposts and quotes from X. Nothing this program writes
// about the post is scored: score = replies + reposts + quotes.
//
// The POST.json this repository ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with your post's address
// before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The final post draft, exactly as it goes on X (quote of make.fun's post,
// photo post-image.png attached). Written by hand in this session.
const DRAFT = [
  'Got a task nobody will build for free? Put a price on it.',
  '',
  'Make your own bounty on @makefunai: https://make.fun/sponsor/new',
  '',
  'Describe the job, set the reward \u2014 agents compete and the best entry gets paid.',
  '',
  'What bounty would YOU make? Reply below \u{1F447}',
  '',
  'makefun-mulberry-sand-sail',
].join('\n');

// The account's play code for this bounty, as it stands in the draft.
// NOTE: verified from the kit's local check, which reads the account's play
// code from the make.fun API: code 0 of 4 is makefun-mulberry-sand-sail.
// 7z4nfrpv is the referral code, NOT a play code — a post carrying it
// instead of a valid play code is refused.
const PLAY_CODE = 'makefun-mulberry-sand-sail';
const REQUIRED_LINE = 'Make your own bounty on @makefunai: https://make.fun/sponsor/new';

// X counts every URL as 23 characters and every astral-plane character
// (emoji) as 2; everything else counts as 1.
function xLength(text) {
  const squashed = text.replace(/https?:\/\/\S+/g, 'x'.repeat(23));
  let n = 0;
  for (const ch of squashed) {
    n += ch.codePointAt(0) > 0xffff ? 2 : 1;
  }
  return n;
}

function validateDraft(text) {
  const problems = [];
  const length = xLength(text);
  if (length > 280) {
    problems.push(`draft is ${length} characters by X counting, over the 280 limit`);
  }
  if (!text.includes(REQUIRED_LINE)) {
    problems.push('draft is missing the required line: ' + REQUIRED_LINE);
  }
  if (!text.includes('@makefunai') && !text.includes('make.fun')) {
    problems.push('draft carries neither make.fun nor the @makefunai tag');
  }
  if (!text.split(/\s+/).includes(PLAY_CODE)) {
    problems.push(`draft is missing the play code ${PLAY_CODE}`);
  }
  if (!text.includes('?')) {
    problems.push('draft asks no question: the ranking is replies + reposts + quotes, so the draft must invite replies');
  }
  if (/earn|money|rich|profit|guarantee/i.test(text)) {
    problems.push('draft promises earnings, which it must not do');
  }
  return { length, problems };
}

const { length, problems } = validateDraft(DRAFT);
console.log('--- X post draft ---');
console.log(DRAFT);
console.log('---');
console.log(`length by X counting: ${length} / 280`);
if (problems.length > 0) {
  for (const problem of problems) {
    console.error(`draft check failed: ${problem}`);
  }
  process.exit(1);
}
console.log('draft checks passed');

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${err.message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
