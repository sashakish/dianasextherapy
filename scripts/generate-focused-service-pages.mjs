import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const consultation = 'https://diana.clientsecure.me';

const pages = [
  {
    slug: 'low-desire-sex-therapy-san-francisco',
    title: 'Low Desire Sex Therapy in San Francisco',
    eyebrow: 'Desire and Libido Support',
    headline: 'Low Desire <em>Sex Therapy</em> in San Francisco',
    description: 'Low desire sex therapy in San Francisco with Diana Urman, PhD, LCSW. Compassionate support for libido changes, desire discrepancy, pressure, and disconnection.',
    lede: 'Low desire is not a personal failure. It can reflect stress, relationship dynamics, hormonal changes, pain, trauma, medication, shame, or the way sex has come to feel. Therapy helps make sense of what is happening without blame or pressure.',
    introTitle: 'When desire changes or disappears',
    intro: [
      'People often arrive worried that something is wrong with them. Others feel guilty because a partner wants more sex, or frightened that a relationship will not survive the difference. These fears can turn intimacy into a test, making genuine desire even harder to access.',
      'Diana helps individuals and couples look at the full picture. The work is not about forcing libido or meeting a quota. It is about understanding the conditions that support desire, reducing pressure, and building a sexual connection that feels honest and sustainable.'
    ],
    reasons: ['Mismatched desire between partners','Loss of interest after stress, illness, pregnancy, or menopause','Sex that feels obligatory or pressured','Difficulty accessing arousal or erotic energy','Shame, resentment, or avoidance around intimacy','Desire changes connected to medication or mood'],
    approachTitle: 'Desire is responsive to context',
    approach: ['Desire does not always arrive spontaneously. For many people it emerges only after safety, warmth, stimulation, and emotional connection are present. Therapy can help identify what turns desire off, what allows it to awaken, and how partners can stop repeating a pursue-withdraw cycle.','When medical or hormonal factors may be involved, therapy can complement appropriate medical care while addressing the emotional and relational impact.'],
    quote: 'The goal is not to manufacture desire. It is to create the conditions in which authentic desire has room to return.',
    sidebar: ['You feel broken or guilty about low libido','One partner feels rejected and the other pressured','Intimacy has become tense, avoided, or absent','Life changes have altered your sexual connection'],
    faqs: [
      ['Is low desire normal?','Yes. Desire naturally changes across life and relationships. Therapy is useful when the change causes distress, conflict, or a loss of connection.'],
      ['Can therapy help when partners want very different amounts of sex?','Yes. Desire discrepancy is common. Therapy helps both partners understand the pattern, communicate without blame, and create workable forms of intimacy.'],
      ['What if hormones or medication are involved?','Therapy does not replace medical assessment. It can work alongside medical care and address the relationship, emotional, and body-based parts of the experience.']
    ]
  },
  {
    slug: 'painful-sex-therapy-san-francisco',
    title: 'Painful Sex Therapy in San Francisco',
    eyebrow: 'Support for Pain and Intimacy',
    headline: 'Therapy for <em>Painful Sex</em> in San Francisco',
    description: 'Therapy for painful sex in San Francisco with Diana Urman, PhD, LCSW. Support for fear, avoidance, relationship strain, vulvodynia, vaginismus, and pain-related intimacy concerns.',
    lede: 'Pain during sex can affect far more than the body. It can create fear, grief, avoidance, shame, and tension between partners. Specialized sex therapy offers a place to address those effects while coordinating with appropriate medical care.',
    introTitle: 'Pain can reshape the whole sexual relationship',
    intro: [
      'When sex hurts, the nervous system learns to anticipate danger. A person may tense before touch begins, lose desire, disconnect from the body, or avoid intimacy altogether. Partners may become afraid to initiate, uncertain how to help, or hurt by the distance that follows.',
      'Diana works gently and directly with the emotional, relational, and sexual consequences of pain. Therapy proceeds at your pace. There is no pressure to engage in painful activity and no assumption that the problem is merely psychological.'
    ],
    reasons: ['Pain with penetration or other sexual touch','Vaginismus, vulvodynia, pelvic pain, or pain after medical changes','Fear and muscle guarding before intimacy','Loss of desire after repeated painful experiences','Relationship strain, guilt, or misunderstanding','Rebuilding intimacy after treatment, surgery, childbirth, or menopause'],
    approachTitle: 'Care that respects both body and relationship',
    approach: ['Painful sex often benefits from collaborative care. Depending on your needs, that may include a physician, pelvic-floor physical therapist, or another qualified medical professional. Sex therapy addresses the fear, communication, identity, grief, and relationship patterns that medical treatment alone may not resolve.','The work can include expanding the definition of intimacy, restoring a sense of choice, reducing performance pressure, and helping partners become a supportive team.'],
    quote: 'You do not have to push through pain to preserve intimacy. Healing begins with safety, choice, and being believed.',
    sidebar: ['You dread or avoid sexual contact','Pain has affected desire or confidence','Your partner does not know how to help','Medical treatment has not addressed the emotional impact'],
    faqs: [
      ['Does painful sex mean the problem is psychological?','No. Sexual pain can have many physical causes. Therapy addresses its emotional and relational effects and can complement appropriate medical treatment.'],
      ['Will therapy require sexual activity that hurts?','No. Therapy should not pressure you to repeat painful experiences. The work emphasizes consent, safety, and gradual, individualized steps.'],
      ['Can partners attend together?','Yes. Couples work can improve communication, reduce pressure, and help both partners rebuild closeness in ways that respect the person experiencing pain.']
    ]
  },
  {
    slug: 'orgasm-difficulties-therapy-san-francisco',
    title: 'Orgasm Difficulties Therapy in San Francisco',
    eyebrow: 'Orgasm and Pleasure Support',
    headline: 'Therapy for <em>Orgasm Difficulties</em> in San Francisco',
    description: 'Therapy for orgasm difficulties in San Francisco with Diana Urman, PhD, LCSW. Support for delayed, inconsistent, absent, or pressured orgasm experiences.',
    lede: 'Difficulty reaching orgasm is common, but it can feel isolating and deeply personal. Sex therapy can help you understand the physical, emotional, relational, and cultural factors involved, without turning pleasure into another performance demand.',
    introTitle: 'Pleasure is not a pass-or-fail test',
    intro: [
      'Some people have never experienced orgasm. Others can orgasm alone but not with a partner, need very specific conditions, or notice a change after medication, menopause, illness, stress, or a relationship shift. The more pressure builds, the harder it can become to stay present in the body.',
      'Diana offers a practical, shame-free space to explore what supports pleasure and what interrupts it. The work respects differences in bodies, identities, relationships, and sexual expression.'
    ],
    reasons: ['Never having experienced orgasm','Orgasm alone but not with a partner','Delayed, inconsistent, or less intense orgasm','Difficulty staying present during sexual touch','Pressure to perform or protect a partner’s feelings','Changes connected to medication, hormones, illness, or aging'],
    approachTitle: 'Understanding what gets in the way',
    approach: ['Orgasm is influenced by arousal, stimulation, attention, safety, body knowledge, communication, medication, health, and the permission to receive pleasure. Therapy helps separate useful information from shame and unrealistic expectations.','Work may include education, communication, mindfulness, reducing goal pressure, understanding stimulation preferences, and coordinating with medical care when appropriate.'],
    quote: 'Pleasure becomes more possible when orgasm stops being an obligation and curiosity can replace judgment.',
    sidebar: ['You feel anxious or defective','Orgasm is possible only in limited circumstances','A partner takes the difficulty personally','You want more confidence communicating about pleasure'],
    faqs: [
      ['Is it common to have difficulty reaching orgasm?','Yes. Orgasm concerns are among the most common reasons people seek sex therapy, and they can occur at any age or stage of a relationship.'],
      ['What if I can orgasm alone but not with a partner?','That is very common. Therapy can help translate what works alone into partnered experiences while addressing pressure, communication, and attention.'],
      ['Can medication affect orgasm?','Yes. Some medications and health changes can affect arousal or orgasm. Therapy can complement a conversation with the prescribing or medical professional.']
    ]
  },
  {
    slug: 'erectile-difficulties-therapy-san-francisco',
    title: 'Erectile Difficulties Therapy in San Francisco',
    eyebrow: 'Erection and Performance Support',
    headline: 'Therapy for <em>Erectile Difficulties</em> in San Francisco',
    description: 'Therapy for erectile difficulties in San Francisco with Diana Urman, PhD, LCSW. Help for performance anxiety, erection changes, avoidance, shame, and relationship strain.',
    lede: 'Erection changes can quickly become a cycle of worry, monitoring, pressure, and avoidance. Sex therapy helps reduce that cycle, understand contributing factors, and restore intimacy that is not organized around proving sexual performance.',
    introTitle: 'When one difficult experience becomes a pattern',
    intro: [
      'An erection may change for ordinary reasons such as stress, fatigue, alcohol, medication, health, aging, or relationship tension. But after one upsetting experience, fear of it happening again can pull attention away from pleasure and into constant self-monitoring.',
      'Diana helps individuals and couples address the psychological and relational parts of erectile difficulty while encouraging appropriate medical evaluation. The work is direct, confidential, and free of judgment.'
    ],
    reasons: ['Performance anxiety or fear of losing an erection','Erections that are inconsistent or different with a partner','Avoidance of sex after difficult experiences','Shame, embarrassment, or loss of confidence','A partner feeling rejected or responsible','Changes connected to medication, health, stress, or aging'],
    approachTitle: 'Moving from performance back to connection',
    approach: ['The body rarely responds well to being watched and tested. Therapy helps shift attention away from proving an erection and toward sensation, communication, and shared pleasure. It also helps couples stop interpreting an erection as a verdict on attraction or love.','Because erection changes can sometimes signal a medical issue, a medical assessment may be important. Sex therapy complements that care by addressing anxiety, avoidance, and relationship impact.'],
    quote: 'An erection is a body response, not a measure of masculinity, attraction, or the value of a relationship.',
    sidebar: ['You monitor your body instead of feeling pleasure','A difficult experience has led to avoidance','Medication helped physically but anxiety remains','The issue is creating distance with a partner'],
    faqs: [
      ['Should I see a medical provider first?','A medical evaluation is often wise, especially when erection changes are new or persistent. Therapy can proceed alongside medical care.'],
      ['Can performance anxiety cause erection difficulties?','Yes. Anxiety activates a threat response and shifts attention away from arousal. Therapy helps interrupt that feedback loop.'],
      ['Can my partner join therapy?','Yes. Couples sessions can reduce misunderstanding, take pressure off performance, and help partners build a broader and more connected sexual relationship.']
    ]
  }
];

function escJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function page(p) {
  const url = `https://dianasextherapy.com/${p.slug}/`;
  const faqSchema = p.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: p.title, provider: { '@type': 'ProfessionalService', name: 'Diana Urman Sex and Relationship Therapy', telephone: '+14157295173', url: 'https://dianasextherapy.com/' }, areaServed: { '@type': 'City', name: 'San Francisco' }, url, description: p.description },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dianasextherapy.com/' }, { '@type': 'ListItem', position: 2, name: p.title, item: url }] },
      { '@type': 'FAQPage', mainEntity: faqSchema }
    ]
  };
  const reasons = p.reasons.map(x => `<li>${x}</li>`).join('\n');
  const sidebar = p.sidebar.map(x => `<li>${x}</li>`).join('\n');
  const faqs = p.faqs.map(([q,a]) => `<div class="faq-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.title} | Diana Urman, PhD, LCSW</title><meta name="description" content="${p.description}"><link rel="canonical" href="${url}">
<meta property="og:title" content="${p.title} | Diana Urman, PhD, LCSW"><meta property="og:description" content="${p.description}"><meta property="og:type" content="article"><meta property="og:url" content="${url}"><meta property="og:image" content="https://dianasextherapy.com/og-image.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#3D2B3D">
<link rel="shortcut icon" type="image/png" href="../favicon.png"><link rel="apple-touch-icon" href="../favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Nunito+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y9LNSWDT1D"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-Y9LNSWDT1D');gtag('config','G-0VLL03WXDJ');</script>
<script type="application/ld+json">${escJson(schema)}</script>
<style>:root{--warm-white:#FAFAF8;--blush:#E8D5CC;--dusty-rose:#C4A092;--deep-plum:#3D2B3D;--soft-charcoal:#2E2E2E;--max:1120px}*{box-sizing:border-box}body{margin:0;font-family:'Nunito Sans',-apple-system,sans-serif;background:var(--warm-white);color:var(--soft-charcoal);line-height:1.75;font-size:17px}h1,h2,h3{font-family:'Cormorant Garamond',serif;color:var(--deep-plum);line-height:1.1;font-weight:400;margin:0 0 1rem}h1{font-size:clamp(2.6rem,5vw,4.5rem)}h2{font-size:clamp(2rem,3.5vw,3rem);margin-top:3rem}h3{font-size:1.6rem;margin-top:2rem}p,li{margin:0 0 1.2rem}a{color:var(--deep-plum)}.shell{max-width:var(--max);margin:0 auto;padding:0 1.5rem}.topbar{background:rgba(255,255,255,.92);backdrop-filter:blur(12px);position:sticky;top:0;border-bottom:1px solid rgba(61,43,61,.08);z-index:20}.topbar-inner{max-width:var(--max);margin:0 auto;padding:1rem 1.5rem;display:flex;justify-content:space-between;align-items:center;gap:1rem}.brand,.nav a{text-decoration:none;font-size:.85rem;letter-spacing:.08em;text-transform:uppercase}.nav{display:flex;gap:1.2rem;flex-wrap:wrap;justify-content:flex-end}.hero{padding:5rem 0 3rem;background:linear-gradient(180deg,#fff 0%,#f8f4f1 100%)}.eyebrow{text-transform:uppercase;letter-spacing:.12em;color:var(--dusty-rose);font-size:.82rem;margin-bottom:1rem}.lede{font-size:1.2rem;max-width:760px}.grid{display:grid;grid-template-columns:2.2fr 1fr;gap:2.5rem;align-items:start}.card,.cta{background:#fff;border:1px solid rgba(61,43,61,.08);border-radius:24px;padding:1.6rem;box-shadow:0 10px 30px rgba(61,43,61,.05)}.btn{display:inline-block;text-decoration:none;background:var(--deep-plum);color:#fff;padding:1rem 1.4rem;border-radius:999px;text-transform:uppercase;letter-spacing:.08em;font-size:.83rem;margin:0 .75rem .75rem 0}.btn.secondary{background:transparent;color:var(--deep-plum);border:1px solid rgba(61,43,61,.15)}.section{padding:2.5rem 0}ul{padding-left:1.2rem}.quote{font-family:'Cormorant Garamond',serif;font-size:1.8rem;color:var(--deep-plum);padding:1.5rem 0 .5rem}.faq-item,.related a{padding:1.2rem 0;border-top:1px solid rgba(61,43,61,.08)}.related a{display:block;text-decoration:none}.footer{padding:3rem 0 4rem;color:#6b636b;font-size:.95rem}@media(max-width:900px){.grid{grid-template-columns:1fr}.topbar-inner{align-items:flex-start;flex-direction:column}body{font-size:16px}}</style></head>
<body><header class="topbar"><div class="topbar-inner"><a class="brand" href="../">Diana Urman</a><nav class="nav" aria-label="Primary"><a href="../#confidence">Services</a><a href="../about/">About</a><a href="../#locations">Locations</a><a href="../#contact">Contact</a></nav></div></header>
<main><section class="hero"><div class="shell"><div class="eyebrow">${p.eyebrow}</div><h1>${p.headline}</h1><p class="lede">${p.lede}</p><p><a class="btn" href="${consultation}">Schedule Free Consultation</a><a class="btn secondary" href="../what-is-sex-therapy/">What Is Sex Therapy?</a></p></div></section>
<section class="section"><div class="shell grid"><article><h2>${p.introTitle}</h2>${p.intro.map(x=>`<p>${x}</p>`).join('')}<h2>Common reasons people seek help</h2><ul>${reasons}</ul><h2>${p.approachTitle}</h2>${p.approach.map(x=>`<p>${x}</p>`).join('')}<div class="quote">${p.quote}</div><h2>Experienced, specialized care</h2><p>Diana Urman, PhD, LCSW, has more than 20 years of clinical experience and advanced training in human sexuality. Her style is warm, direct, and practical. She works with individuals and couples from her Noe Valley office and by telehealth across California.</p><h2>Related services</h2><div class="related"><a href="../sex-therapy-for-couples-san-francisco/">Sex Therapy for Couples</a><a href="../low-desire-sex-therapy-san-francisco/">Low Desire Sex Therapy</a><a href="../painful-sex-therapy-san-francisco/">Therapy for Painful Sex</a><a href="../orgasm-difficulties-therapy-san-francisco/">Orgasm Difficulties Therapy</a><a href="../erectile-difficulties-therapy-san-francisco/">Erectile Difficulties Therapy</a><a href="../ketamine-assisted-sex-therapy-san-francisco/">Ketamine-Assisted Sex Therapy</a></div><h2>Frequently asked questions</h2>${faqs}</article>
<aside><div class="card"><h3>San Francisco office</h3><p>Noe Valley<br>4112 24th Street<br>San Francisco, CA 94114</p><p><a class="btn" href="${consultation}">Free Consultation</a></p></div><div class="card" style="margin-top:1.25rem"><h3>This work may fit if</h3><ul>${sidebar}</ul></div></aside></div></section>
<section class="section"><div class="shell cta"><h2>Start with a free consultation</h2><p>You can ask questions, describe what you are looking for, and see whether Diana’s approach feels like the right fit.</p><p><a class="btn" href="${consultation}">Schedule Free Consultation</a></p></div></section></main>
<footer class="footer"><div class="shell">Diana Urman, PhD, LCSW, Sex and Relationship Therapy. Serving San Francisco, Napa Valley, Santa Barbara, and online across California.</div></footer></body></html>`;
}

for (const p of pages) {
  const dir = join(root, p.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), page(p));
}

console.log(`Generated ${pages.length} focused service pages.`);
