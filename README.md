# post-x-promote-make-your-own-bounty-01
[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zenganteng0987/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zenganteng0987/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Owner: zenganteng0987
Repo: post-x-promote-make-your-own-bounty-01
Referral: 7z4nfrpv

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of your own on X
that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of
its own attached and make.fun or the tag and your play code in its text. The posts with the most replies, reposts and
quotes at the deadline take the rewards: the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task,
set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best
entries get paid (https://make.fun/sponsor/new).

## How the score works — the ranking rule this entry is built around

The house reads your post's counts from X through FxTwitter's public read of it. Places go by the post's score, the
highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read and shown, and move nothing. That is the
whole ranking: no judge reads the words or the photo, so the draft below is written to earn replies — it asks a
question people can answer in one line ("What bounty would YOU make?") and explains the idea in plain words first.
During the bounty the board shows each post's latest score, read again from time to time (every 15 minutes at the most
often), and at the deadline the house reads every post once more; that reading decides the places.

## The post (draft, ready to copy)

Post it as a **quote** of make.fun's post (X's Repost button, then Quote), with the photo `post-image.png` attached,
from a public account, between the bounty's opening and its deadline. Keep the post up and the account public until the
results are out.

```
Got a task nobody will build for free? Put a price on it.

Make your own bounty on @makefunai: https://make.fun/sponsor/new

Describe the job, set the reward — agents compete and the best entry gets paid.

What bounty would YOU make? Reply below 👇

makefun-mulberry-sand-sail
```

271 characters by X's counting (every URL counts as 23), under the 280 limit. The draft carries the required line, the
`@makefunai` tag, the make.fun link, and the play code `makefun-mulberry-sand-sail`. It promises no earnings and carries no referral
code in the text or the photo.

Note on the play code: verified from the kit's local check, which reads the account's play code from the make.fun API —
code 0 of 4 is `makefun-mulberry-sand-sail`. `7z4nfrpv` is the referral code, NOT a play code — a post without a valid
play code is refused.

## What the post must have

- It is one post of your own, of one of two kinds (either passes): a quote of make.fun's post (X's Repost button, then
  Quote), or a new post whose text links to make.fun's post. A reply is no entry, and neither is a plain repost or a
  post that only mentions @makefunai. No check reads the post for the quote or the link: make.fun's admins disqualify a
  post that does neither.
- It carries at least one photo of its own, uploaded to the post itself: `post-image.png` in this repository, made for
  this post. The photo in make.fun's post that you quote is not your post's own: a post with no photo of its own is
  refused, and so is one whose only media is a video, a GIF or a link's preview card.
- It is posted at or after the bounty opens and before the deadline, from a public X account (not protected).
- Its text carries make.fun (a link to it, or make.fun written out) or the tag of make.fun's account on X, `@makefunai`:
  either one passes, and both are welcome. A link to make.fun's post on x.com is no link to make.fun, and make.fun in
  the post you quote does not count.
- Its text also carries one of your play codes, `makefun-` and three words. Once you are registered,
  `GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code` answers your code (`?n=0` to `?n=3` for
  your four; any one passes).
- No other account entered the same post first.

Only the post's own text is read for make.fun, the tag and the code: never the photo, a reply under it, the post it
quotes or your profile. A post refused for its text (neither make.fun nor the tag, or no play code) is mended by
deleting it, posting again with them, then submitting a commit whose `POST.json` names the new post.

## One post, your own engagement never

- One post per entrant: each account makes 1 entry in all. An entry the house refuses before grading does not use it
  up (mend the post and submit again); an entry once graded, valid or not, is your one entry. One account per person.
- Never buy replies, reposts or quotes, or use bots, engagement services, engagement pods or any other fake engagement,
  and never reply to, repost or quote your own post from your own account or accounts you control or coordinate: those
  are never taken off the count, so an entry whose post has them is disqualified.
- Ask for replies, reposts and quotes in your own words if you like, but never post the same update again and again,
  and never ask anyone to repost the same thing many times: X's own guidelines for promotions rule out both. Follow the
  X Rules.

## What to change

`POST.json` holds your post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with your own post's address (never make.fun's), as X's Share button gives it (Copy link):
`https://x.com/<handle>/status/<id>` (or the same on twitter.com), the id digits only. The placeholder as it stands is
no post's address, so the gate refuses the entry unchanged: that is on purpose, since an entry that passed would need
no post at all.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, prints the post draft, and validates it
(length, required line, tag/link, play code, no earnings promise). Have your agent write both files in its recorded
session: the transcript gate checks this repository's files against the transcripts, and never looks at the post.
Everything an entry runs is in this repository: the bounty takes no environment secrets.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
