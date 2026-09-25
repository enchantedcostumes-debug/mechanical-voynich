# Independent Empirical Evaluation: The "Naibbe Cipher" Voynich Claim
## Analysis of Greshko's Generative Cryptographic Model

**Author**: Tammy Lou Casey
**Affiliation**: Independent Researcher
**Date**: September 2026

---

  ## 1. WHO — VERIFIED

  | Field | Value | Status |
  |---|---|---|
  | Author | **Michael Anthony Greshko** (sole author) | VERIFIED — Zenodo API record 17219445, ORCID `0000-0001-8253-6543` |
  | Affiliation | **Independent Researcher, Washington, D.C., USA** | VERIFIED — title page of his own Supplementary Materials PDF; Unpaywall `raw_affiliation_strings: ["Independent Researcher"]`. Zenodo `affiliation: null` |
  | Day job | Science journalist (ex-National Geographic) | REPORTED — Sci.News, Live Science, Archaeology Mag |
  | Venue | **Cryptologia** (Taylor & Francis), DOI `10.1080/01611194.2025.2566408` | VERIFIED |
  | First publication | **26 November 2025** (online) | VERIFIED — Unpaywall `oa_date` / `published_date`; confirmed by Rozanova & Temerev's bibliography |
  | Preprint | Circulated ~3 Aug 2025 via Dropbox, discussed on voynich.ninja thread-4848 (author posts as **"magnesium"**); Zenodo supplement v2.1 dated 28 Sep 2025 | VERIFIED |
  | Peer review | **Yes — peer-reviewed journal article.** Greshko: "a peer-reviewed academic paper published in the cryptology journal *Cryptologia*" | VERIFIED — michaelgreshko.com |
  | Code/data | `github.com/greshko/naibbe-cipher` (modified MIT); Zenodo `10.5281/zenodo.16415087` (CC-BY-4.0, 62.2 MB, Excel + PDF) | VERIFIED |

  **Note on the dates in the task brief:** the press URLs are Jan 2026, but the paper is **November 2025**. This is ~10-month-old work, not a new 2026 claim.

  ---

  ## 2. WHAT THEY CLAIM — **CATEGORY (b), UNAMBIGUOUSLY**

  This is the single most important finding and the press framing in the task brief is wrong.

  **It is a generative model that produces Voynich-LIKE text from Latin/Italian. It does NOT claim to read the actual manuscript. Not one word of the Voynich Manuscript is translated anywhere in this work.**

  The author says so himself, repeatedly and unprompted:

  > "The Naibbe cipher is not a solution to the manuscript in and of itself, but it proves that a meaningful message can be hidden within text that has many of the Voynich Manuscript's puzzling properties."
  > — VERIFIED, https://www.michaelgreshko.com/naibbe-cipher

  > "The Naibbe cipher is almost certainly not the way that the manuscript was constructed. But what it does provide is a fully documented way to reliably go between Latin and something that behaves kind of like the Voynich manuscript."
  > — VERIFIED verbatim, Greshko to Live Science

  > "My hope is that this becomes adopted as a computational benchmark. The points of difference between the cipher and the manuscript may point the way to how the text was actually created."
  > — VERIFIED verbatim, Live Science

  Abstract (VERIFIED verbatim — identical text on Zenodo, GitHub README, and Schneier):

  > "In this article, I investigate the hypothesis that the Voynich Manuscript (MS 408, Yale University Beinecke Library) **is compatible with being a ciphertext** by attempting to develop a historically plausible cipher that can replicate the manuscript's unusual properties. The resulting cipher—a verbose homophonic substitution cipher I call the Naibbe cipher—can be done entirely by hand with 15th-century materials, and when it encrypts a wide range of Latin and Italian plaintexts, the resulting ciphertexts remain fully decipherable and also reliably reproduce many key statistical properties of the Voynich Manuscript at once. My results suggest that the so-called 'ciphertext hypothesis' for the Voynich Manuscript remains viable, **while also placing constraints on plausible substitution cipher structures.**"

  And his own stated limitation (VERIFIED, Sci.News quoting him):

  > "However, the Naibbe cipher's **incomplete replication of Voynich B's properties** underscores the difficulty of achieving a comprehensive cipher-based model for Voynich manuscript text generation."

  The Art Newspaper headline ("Can a new cipher help to explain…") is accurate; the Archaeology Magazine piece is also accurate ("does not claim to solve the mystery"). **The framing that this is a "decipherment" is not in any primary source.**

  ---

  ## 3. METHOD — VERIFIED (independently re-implemented from published tables)

  A **verbose homophonic substitution cipher**, hand-executable with 15th-century materials (pen, paper, dice, playing cards). Mechanism, from the independent re-implementation by Rozanova & Temerev (who transcribed the published table file and verified it by re-deriving **all 34,764 tokens** of Greshko's shipped Pliny sample from its aligned plaintext, **no failures**):

  > "Plaintext spaces are deleted and the letter stream is respaced into single letters (probability **17/36**) and pairs; a single letter becomes one of six table-specific EVA strings, a pair becomes a prefix string for its first letter followed by a suffix string for its second (**23 letters, six tables, three states, strings of one to eight glyphs**), and the table for each draw is [card-weighted]."
  > — VERIFIED, arXiv:2608.17096 Appendix A.5

  Supporting mechanics:
  - Die roll → respacing into unigram/bigram chunks. Card draw → which of **six** substitution tables. Card weighting makes table selection frequencies match VMS glyph frequencies. (VERIFIED — Greshko to The Art Newspaper and Live Science.)
  - Two deck variants: **78-card tarocchi** and **52-card standard**. (VERIFIED — Greshko via Sci.News.)
  - Bigrams use **disjoint prefix and suffix glyph pools**, adapted from **Zattera's (2022) 12-slot positional model** of Voynich word structure. (VERIFIED — Parisel arXiv:2604.19762 §2.)
  - "A Naibbe letter is spread over about **3.4 glyphs and eighteen homophones**." (VERIFIED — arXiv:2608.17096.) The 18 homophones are a deliberate design choice citing **Pelling (2016)**'s argument that frequency analysis was not known in the 15th-century West.
  - Average verbosity ~**2.5 glyphs/letter** for bigram word types. (VERIFIED — Greshko, voynich.ninja thread-4848 p.2.)
  - "naibbe" = a Florentine prohibition of **1377** on a foreign card game, term likely from Arabic. (VERIFIED — Greshko via Sci.News.)
  - A separate tool, **"Voynichesque"**, is a parameterised generator used to explore the space of such ciphers (Supplementary Material 2).

  ---

  ## 4. EVIDENCE — figures with provenance

  ### Greshko's own reported figures
  - **EVA alphabet:** Naibbe ciphertexts achieve character entropy **3.86 ± 0.01** and conditional character entropy **2.00 ± 0.01** at token level. **VERIFIED in primary journal paper** (*Cryptologia*, 2025, Table 2 & Section 3).
  - **Cuva alphabet:** Naibbe **3.92 ± 0.01** / **2.32 ± 0.01**, vs Voynich B **3.90** / **2.25**. **VERIFIED in primary journal paper** (*Cryptologia*, 2025, Section 3).
  - Hapax: "about half of all Naibbe cipher word types in ciphertexts approaching the length of Voynich B appear only once, consistent with the VMS (Zandbergen 2024)." **VERIFIED** — Supplementary Material S1.1. *(Note: two independent groups measured 41% vs the manuscript's 70% — see §6.)*
  - Word-type similarity network on a Latin "alchemical herbal" ciphertext: "four broad domains of word types and a **longest network path of 21, identical to the VMS**" (cf. Timm & Schinner 2020). **VERIFIED** — S1, p.7.
  - Token autocorrelation: an 8,000-token 78-card Naibbe ciphertext of Dante's *Divina Commedia* "replicates the observed token autocorrelation of the VMS" and reproduces the **absence** of the periodic peaks a Trithemius-Polygraphia-III-style cipher would produce. **VERIFIED** — S1, Figure 4.
  - Topic recovery: TF-IDF separates a four-part plaintext (Dante / Pliny / Grosseteste *De sphaera* / alchemical herbal); e.g. the 4 most informative word types in the Dante section are `<lcheedal>, <lcher>, <lcheeoy>, <lcheaiin>`, all rare encodings of **CH** (abundant in Italian, rare in Latin). **VERIFIED** — S1. LDA **fails** on both Voynich B and Naibbe alike. **VERIFIED**.
  - Acknowledged failure, in his own words: "the big statistical limitation of the original Naibbe cipher is that each draw … is **memoryless and independent**. This was a known limitation from the beginning; **I reported the absence of long-range correlations in Naibbe ciphertext** for a reason. To get the VMS's long-range correlations and other observed features, there has to be some kind of memory at play." **VERIFIED verbatim** — Greshko, voynich.ninja thread-4848 p.9, 02-09-2026.

  ### Independent re-measurements (both VERIFIED from arXiv full text)

  **Parisel (arXiv:2604.19762, 26 Mar 2026, v2 16 Jun 2026)** — 20 runs each over Pliny *Naturalis Historia* (Latin) and *Moby Dick* (English), ~37,000 tokens per run, four-signature joint criterion:

  > "**Naibbe scores 1/4**, the same as Rugg's original Cardan grille (G0) … failing on E→S, MI, and Zipfian shape, for structural reasons intrinsic to its card-independent encryption mechanism. The VMS holds all four simultaneously; no tested generator achieves this combination."

  > "47% unigram tokens … systematically dilute the E→S rate; the theoretical ceiling is well below the VMS's **80.6%**. Second, each card draw is statistically independent, so no sequential dependency exists between the end of one cipher word and the start of the next, producing **near-zero cross-boundary MI** regardless of source language."

  > "This finding is **not a criticism** of the Naibbe cipher hypothesis, which was not designed to reproduce these specific metrics. It is a **constraint**: any cipher-based model of the VMS must account for the joint profile, and the Naibbe architecture as currently specified does not satisfy it."

  **Rozanova & Temerev (arXiv:2608.17096, 17 Aug 2026)** — 33 pages, Zandbergen-Landini transliteration, quire-level resampling:

  | Measure | Voynich | Naibbe |
  |---|---|---|
  | Conditional glyph entropy | ~2.7 bits (Latin/Italian/English ~3.5) | 2.71 (Caesar), 2.71 (Pliny) |
  | Singleton (hapax) word types | **70%** | **41%** |
  | Vocabulary size | stable across quires/Currier languages | 5.2–5.5 thousand types (more closed) |
  | Edge-glyph mutual information (last glyph ↔ next first glyph) | **0.2 bits** | "essentially none" |
  | Token-identity predictiveness | <1% of token entropy | slightly more order than the manuscript |

  > "What such a cipher must still earn is the strong coupling between the last glyph of one token and the first of the next (0.2 bits in the manuscript, essentially none in Naibbe text, whose token boundaries fall between unrelated plaintext chunks) and the open, hapax-rich vocabulary (Naibbe: 41% singleton types against 70%). Both are natural targets for a next cipher design; **both are also exactly the properties a decipherer should check before reading a proposed plaintext.**"

  **Forum re-measurement (VERIFIED, voynich.ninja thread-4848 p.9, post #85, 31-08-2026, by a member in Almaty, Kazakhstan — plausibly one of the arXiv:2608.17096 authors but I did NOT verify that identity):**

  Where Naibbe succeeds: h2 (digraph-merged) Voynich 2.682 / Naibbe 2.581 (4% off); mean word length 4.95 / 5.23 (6% off); Zipf slope −0.973 / −0.895 (8% off); TTR/types 0.309/3706 vs 0.277/3322 (10% off).

  Where it fails:
  - Adjacent word repetition vs within-line shuffle: Voynich 274 obs / 269.8 exp = **1.02×** [95% CI 0.92–1.13]; Naibbe 45 / 101.5 = **0.44×** [0.38–0.53]; Latin 0.02×.
  - Word-junction MI excess, k=1: Voynich **0.194** | Latin 0.048 | English 0.071 | **Naibbe 0.0021**. One pair (word-final `y` → word-initial `q`) carries ~**48%** of the junction information.
  - Word-length autocorrelation lag 1: Voynich **+0.134** [+0.122,+0.145]; **Naibbe −0.031** [−0.043,−0.020]; Latin −0.029, German −0.040, English −0.137, Greek −0.151, Italian −0.161. **Strongest in the Stars section (+0.186), weakest in the Herbal (+0.082).**
  - Length budget: "your 9,243 plaintext words give 34,764 ciphertext words, so the manuscript's **34,167** would carry roughly **9,000 words of Latin, about twenty book pages across 225 leaves**."

  That last number is the most important sanity check anyone has published on this hypothesis. It is raised as an open question, not an objection.

  ---

  ## 5. WHAT THEY ACTUALLY READ — **NOTHING. HONEST EMPTY RESULT.**

  **There is no claimed plaintext translation of any Voynich folio anywhere in this body of work.** I searched the author's website, GitHub README, 48-page Supplementary Materials PDF, Zenodo record, all 10 pages of the voynich.ninja thread, and all press coverage. No folio is read.

  The plaintexts named are ones Greshko **encrypted himself** to generate synthetic ciphertext:
  - a 14th-century Latin "alchemical herbal" (Ponzi 2023 transcription)
  - Grosseteste, *De sphaera* (King 2008)
  - Pliny, *Naturalis Historia*
  - Dante, *Divina Commedia*
  - Caesar, *De bello Gallico* (opening)

  Folios are mentioned only as **statistical or layout** references, never as decipherments: f75v (two lines of text cutting through the bathing illustration, cited as an example of text-around-illustration behaviour the cipher can mimic), f68r2 (24 star labels, floated as possibly readable left-to-right as 8 rows), f103r–f116r (the "Stars" section, used as the autocorrelation comparison corpus), f104r (a decorative image on his website).

  On labels, Greshko concedes the hypothesis is in trouble (VERIFIED verbatim, thread-4848 p.2):

  > "I agree that through the lens of the Naibbe cipher, the labels in the VMS look weirdly short and uninformative (see Section 4.4 of the paper). … **I freely admit that this is not a complete solution.**"

  ---

  ## 6. CRITIQUE FROM THE NAMED SCHOLARS

  **Nick Pelling — HAS SAID NOTHING. VERIFIED NEGATIVE.**
  A site search of ciphermysteries.com for "Naibbe" returns **"Nothing Found — Apologies, but no results were found for the requested archive."** (https://ciphermysteries.com/?s=Naibbe). A forum member wrote on 06-08-2025: *"This is really interesting. Would love to hear Nick Pelling's thoughts on this."* — no reply from Pelling in the thread. Pelling appears in Greshko's paper only as a **cited source** (Pelling 2016, on 15th-century frequency analysis), not as a commenter.

  **⚠ THE BRIEF'S THIRD URL IS MIS-IDENTIFIED.** `https://ciphermysteries.com/2026/01/22/finally-i-can-read-the-voynich-manuscript` is **not about the Naibbe cipher at all**. It is Pelling's own unrelated claim about the **f17r marginalia**. I fetched it in full. Whoever assembled the brief conflated two stories. His actual claim (VERIFIED verbatim):

  > "I am now pretty sure that it is Occitan, and that it reads (using a Latin abbreviation style to render the Occitan 'lucent'): **meilhor aller lucent ben balsamina [….]**"
  > "So, my argument here is that the marginalia at the top of Voynich manuscript page f17r is written in Occitan."

  **René Zandbergen — commented, mildly positive, explicitly endorses the (b) framing. VERIFIED verbatim (Live Science, email to Tom Metcalfe):**

  > "[Greshko] also makes it clear that he is **not suggesting that this is how the manuscript text was generated**. He just demonstrates that such a method **can** be found, and we may assume that there may be others."

  > "[I am] essentially undecided [about whether the text is meaningful or a hoax]. Some people argue that 'nobody would do that,' but I think that argument is too simplistic. A more problematic point is that I find it very hard to imagine how it could have been done."

  Zandbergen's only posts in the voynich.ninja Naibbe thread are technical help with `ivtt` flags for extracting Currier B — no substantive critique.

  **Claire Bowern — NO STATEMENT FOUND. VERIFIED NEGATIVE.** Bowern appears throughout only as **cited prior work** (Bowern & Lindemann 2021 on the flat frequency-rank distribution; Gaskell & Bowern 2022 "Gibberish after all?" on positive word-length autocorrelation; Sterneck, Polish & Bowern 2021 on topic modelling). Greshko explicitly built the cipher's unigram-as-whole-word design **to hit Bowern & Lindemann's flat frequency-rank curve**. No published response from Bowern located.

  **Lisa Fagin Davis — NO STATEMENT FOUND. VERIFIED NEGATIVE.** Referenced only for scribal-hand attribution: Greshko notes Voynich B is "mostly Scribes 2 and 3 in Lisa Fagin Davis's analysis."

  **Substantive critique instead comes from two arXiv papers** (§4), both of which frame it as a *constraint* rather than a refutation. Nobody in the retrieved record calls this work overreach — largely because the author's own framing is already modest.

  ---

  ## 7. SECTION COVERAGE — PARTIAL, AND NOT ICONOGRAPHIC AT ALL

  **The work is purely text-statistical. It does not analyse, interpret, or make any claim about the content of the botanical, astronomical, balneological, or pharmaceutical illustrations.** It has nothing to say about what any section depicts.

  On text coverage it is narrower still:
  - The target corpus is **Voynich B (Currier B)** throughout — explicitly, per Greshko's own supplementary text and his forum posts about `ivtt +LB` extraction. **Voynich A / Currier A is not modelled.** Since Currier A dominates the Herbal A and much of the pharmaceutical quires, a large fraction of the manuscript is outside the claim.
  - Only one section is tested as a named section: the **"Stars"/recipes section, f103r–f116r**, for token autocorrelation. (VERIFIED — S1 Figure 4.)
  - **f75v** (balneological) is cited once, only as an example of text wrapping through an illustration.
  - The zodiac/astrological roundels, the nine-rosette foliate, and the pharmaceutical jar labels are **not addressed** — and Greshko concedes labels are where the model is weakest.

  ---

  ## 8. OVERLAP WITH INDEPENDENT EMPIRICAL FINDINGS

  Scope caution: I audited the Naibbe literature, not the whole Voynich field. "Not addressed" below means *not addressed in the Naibbe corpus I retrieved*, not *unsupported in the literature generally*.

  **1. "Voynichese is NOT a natural language; positional notation, fixed character position (`4`/`q` word-initial), closer to chemical formulas than speech."**
  **PARTIAL AGREEMENT ON THE SURFACE FACT, DIRECT CONTRADICTION ON THE INFERENCE.**
  Agreement that the surface is positional and non-linguistic is now strongly supported independently: Zattera's 12-slot model; Parisel arXiv:2604.19762 finds "a character-level **right-to-left** optimization in word-internal sequences and a **left-to-right** dependency at word boundaries, a directional dissociation not observed in any of our four comparison languages (English, French, Hebrew, Arabic)"; Rozanova & Temerev's title is literally "A Glyph Is Not a Letter, a Token Is Not a Word, a Space Is Not a Space" and they conclude "the order in Voynichese sits at the **edges** of tokens and at graded boundaries between them, not in the succession of tokens themselves." The forum measurement isolates `y`→`q` as carrying ~48% of word-junction information — direct empirical support for a fixed-position constraint on `q`.
  **But Naibbe's entire thesis is the opposite of "not a natural language":** it holds that beneath the positional surface sits ordinary running Latin/Italian prose. Notation-vs-prose is exactly the live disagreement. Notably, the framework's side is *helped* by the strongest published objection to Naibbe: at Naibbe's verbosity, 34,167 tokens buy only **~9,000 words of Latin across 225 leaves** — implausibly thin for prose, entirely reasonable for a notation/formulary.

  **2. Iatromathematical pharmacopoeia by planetary ruler; Venus herbs 31.9%, χ² p<0.05.** **NOT ADDRESSED — no agreement, no contradiction.** Nothing in the Naibbe corpus engages content, iconography, or any statistical test on plant attribution. Weak indirect consonance only: Greshko's chosen plaintexts are a Latin alchemical herbal and *De sphaera*, and he notes the VMS sits "firmly within the tradition of late medieval herbals found within northern Italy and Germany (Zandbergen 2024c)" — consistent with a herbal/astrological milieu, but that is a background assumption, not a finding.

  **3. Illustrator deuteranomaly; plant ID by morphology only.** **NOT ADDRESSED.** No overlap in either direction. Independent framework claim.

  **4. Four-phase cycle: astronomical (f67–73) → botanical (f1–57) → pharmaceutical (f88–116) → balneological (f75–84).** **NOT ADDRESSED and mildly in tension with the operative sectioning.** The Naibbe literature partitions the manuscript by **Currier language (A/B)** and by the conventional Stars/Herbal/Bio labels, not by any reordered cycle. One datum worth noting: word-length autocorrelation differs by section (**Stars +0.186, Herbal +0.082**), which is evidence that sections are statistically distinct objects — it neither supports nor refutes the proposed *ordering*.

  **5. Balneological "nymphs/pipes" as Galenic anatomical diagrams; women's medicine.** **NOT ADDRESSED.** Greshko touches f75v only as a text-layout example. No overlap.

  **6. Zodiac month names in Occitan / Franco-Provençal / N. Italian dialect.** **STRONG INDEPENDENT AGREEMENT — but from Pelling, not from Naibbe.** Pelling, 22 Jan 2026 (VERIFIED verbatim): *"Back in 2006, I argued long and hard that the Voynich zodiac roundel month names (which also appear to be marginalia) were **also in Occitan**. So this should, in theory, be the least surprising marginalia language identification ever."* He now extends Occitan to the f17r marginalia (`meilhor aller lucent ben balsamina`). This is a **20-year-old, independently-arrived-at** position that the framework converges with — which is worth knowing precisely because it means the framework is *not* first here and should cite Pelling (2006, *The Curse of the Voynich*, pp. 24–25) rather than present it as novel. The Naibbe work itself says nothing about the month names. **The "30 nymphs per sign = decan subdivisions" sub-claim I did not attempt to verify — UNVERIFIED, outside the scope I audited.**

  **Net:** the framework overlaps the Naibbe literature meaningfully on exactly **one** point (positional structure, where it agrees with the surface finding and disagrees with the prose inference), converges with **Pelling rather than Greshko** on a second (Occitan), and is orthogonal on the remaining four. There is no collision requiring resolution — but the Occitan priority and the ~9,000-word length budget are both worth folding in.

  ---

  ## 9. BOTTOM LINE

  The "Naibbe cipher claim" is **not a decipherment claim and was never presented as one**. It is a peer-reviewed, fully open-sourced, deliberately falsifiable **benchmark generator**: a hand-doable 15th-century-plausible cipher that converts Latin/Italian into text matching several Voynich B statistics, offered explicitly so that the places where it *fails* constrain future hypotheses. The author states unprompted that it is "almost certainly not the way the manuscript was constructed." Within ten months two independent groups re-implemented it from his published tables and quantified exactly where it breaks (edge-glyph coupling ~0.2 vs ~0.002 bits; hapax 70% vs 41%; word-length autocorrelation +0.134 vs −0.031; 1/4 on a four-signature joint criterion) — which is the benchmark working as designed. **Any framing of this as "the Voynich Manuscript has been deciphered" is a press-and-aggregator artifact with no basis in any primary source.**

  ---

  ## SOURCES — every URL I actually fetched

  **Primary (author-controlled) — VERIFIED**
  - https://www.tandfonline.com/doi/full/10.1080/01611194.2025.2566408 — **VERIFIED in full via direct session** (*Cryptologia*, Nov 2025). Full article text retrieved, including Section 3 entropy tables, Section 4.4 ("Low information density" constraint on labels), and conclusion.
  - https://raw.githubusercontent.com/greshko/naibbe-cipher/main/README.md — full abstract, citation, licence
  - https://zenodo.org/api/records/16415087 — full JSON metadata: ORCID, file manifest, version 2.1
  - https://zenodo.org/records/16415087 — human-readable record
  - https://zenodo.org/api/records/17219445/files/Greshko%202025%20-%20Supplementary%20Materials%201%E2%80%934.pdf/content — **48-page Supplementary Materials 1–4, downloaded and text-extracted in full** (2,563,905 bytes, md5 `562fecb3b3bd80ee9e3f307d05383f06` — matches Zenodo)
  - https://www.michaelgreshko.com/naibbe-cipher — author's own framing
  - https://www.voynich.ninja/thread-4848.html and pages 2–10 — author's own preprint Q&A, incl. his concessions on labels and memorylessness

  **Independent quantitative evaluations — VERIFIED**
  - https://arxiv.org/abs/2604.19762 and https://arxiv.org/html/2604.19762v1 — Parisel, four-signature test, Naibbe 1/4
  - https://arxiv.org/abs/2608.17096 and https://arxiv.org/html/2608.17096v1 — Rozanova & Temerev, full re-implementation and appendix

  **Secondary coverage — REPORTED**
  - https://www.theartnewspaper.com/2026/01/07/can-a-new-cipher-help-to-explain-the-mysterious-voynich-manuscript
  - https://archaeologymag.com/2026/01/voynich-manuscript-may-be-a-cipher/
  - https://www.sci.news/othersciences/linguistics/voynich-manuscript-cipher-14466.html — longest set of direct Greshko quotes
  - https://www.livescience.com/archaeology/mysterious-voynich-manuscript-may-be-a-cipher-a-new-study-suggests — **the only source with verbatim Zandbergen**
  - https://www.newsweek.com/voynich-manuscript-15th-century-book-cards-dice-cipher-naibbe-11316017
  - https://www.schneier.com/blog/archives/2025/12/substitution-cipher-based-on-the-voynich-manuscript.html — independent copy of the abstract
  - https://www.iflscience.com/is-this-how-the-voynich-manuscript-was-made-a-new-cipher-offers-fascinating-clues-81786 — fetched, no expert quotes

  **Unrelated-but-brief-named — VERIFIED**
  - https://ciphermysteries.com/2026/01/22/finally-i-can-read-the-voynich-manuscript — **NOT about Naibbe**; Pelling's f17r Occitan marginalia claim
  - https://ciphermysteries.com/?s=Naibbe — **zero results**; Pelling has never blogged on Naibbe

  **Bibliographic — VERIFIED**
  - https://api.unpaywall.org/v2/10.1080/01611194.2025.2566408 — OA status, date, affiliation, no repository mirror

  **Empty Endpoints**
  - https://zenodo.org/api/records/16415087/files — returned empty list (files hosted on record 17219445)


