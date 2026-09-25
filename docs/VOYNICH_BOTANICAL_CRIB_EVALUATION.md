# GOAL: Voynich Research Dossier - botanical_crib. Mother May I.

# VOYNICH BOTANICAL-CRIB THESIS — EVALUATION REPORT

  **Bottom line: the crib thesis is not viable as stated, and it fails for four independent reasons, any one of which is sufficient. It has been tried repeatedly since the 1940s and every attempt died the same death. The single most damaging fact is structural, not statistical: the folios whose plants you can identify mostly have no labels at all.**

  A note on method: `WebFetch` is blocked by the repo's guardian hook, as you said. All retrievals below were done with direct `urllib` from a scratchpad script plus `WebSearch`, per your instruction. Several targets were hard-blocked (Purdue WAF, Taylor & Francis 403, herbalgram.org returned 0 bytes, link.springer.com returned a stub); those are named explicitly as UNRETRIEVED rather than glossed over. Verification tags: **[V]** = read in primary source; **[R]** = secondary/reported; **[U]** = unverified.

  ---

  ## 1. HAS THIS BEEN TRIED? — Yes. Continuously, for ~80 years, by at least eight named people.

  **Stephen Bax (2014).** **[V]** His method was exactly the thesis under test: identify the plant, then treat the page's distinctive word as the plant's name, then back out glyph values. He got ten "words" — Taurus, juniper, coriander, hellebore, Centaurea, Nigella sativa, cotton, crocus, Kaur — and 14 glyph/cluster values, explicitly invoking the Linear B and hieroglyph precedents ("bottom-up"). **[R]** He proposed a Near Eastern/Asian (Turkic-leaning) plaintext.

  What killed it — Pelling's critique is the primary document and it is devastating on the specific mechanics **[V]**:
  - Bax assumed the first word of each herbal page is the plant name. But almost every Herbal A page begins with a gallows glyph: EVA `p` 53×, `t` 24×, `k` 21×, `f` 10×. To keep his readings, Bax had to map *all four* gallows to plaintext C/K — so nearly every plant name he "found" begins with C. Pelling: "directly contradicted by the immediate statistical evidence." Tiltman made essentially this observation ~50 years earlier.
  - Bax's alphabet assigns three separate glyphs (EVA `r`, `m`, `n`) to the letter R.
  - `oror` = Hebrew *arar* (juniper) on f15v — but f15v also carries "oror or" and "or or oro r" on consecutive lines, and `arar` itself is twice as frequent in the MS as `oror`. The "crib" is a fragment of an extremely common string.
  - `kydain` = "centaur" — but `dain`/`aiin` is one of the most ubiquitous strings in the manuscript.
  - `keerodal` = coriander — `eer` is very rare while `ar`/`or` are very common; almost certainly a scribal error for `karodal`.
  - Bax leaned on Edith Sherwood's plant IDs, which Pelling notes real herbal authorities (he names Karen Reeds) do not accept at anything like her rate.

  Pelling's summary **[V]**: "of the nine words Bax claims... I disagree with the evidence, reasoning, and linguistic rationale for every single one." **[R]** Bax died 22 November 2017 with no translation and no successor programme; his site survives only in archive.

  **Edith Sherwood (with Erica Sherwood).** **[V]** — and this is the most important document I found, because Sherwood states the thesis verbatim and then demonstrates exactly how it self-destructs. From her "The Voynich Botanical Plant Names Decoded" (retrieved via Wayback; her live site is down):

  > "This would require decoding the plant's name in the accompanying text to establish identity with certainty."

  > "**These drawings of single plants or parts of plants are labeled presumably with the plant's name, i.e. the VM's Rosetta stone.**"

  Her method: assume Italian; assume glyphs mean the Latin letters they superficially resemble ("AVA" alphabet, derived partly "by trial and error"); then allow **anagrams** — free reordering of letters within a word, plus splitting one name across two or three words, plus absorbing stray prepositions and articles into the name. Acceptance criterion, in her own words: "if the drawing, a picture of the plant cited in Florio's dictionary, its Italian name and the decoded anagram are a reasonable match."

  She concedes the fatal property herself: anagrams "have the disadvantage of being degenerate and when decoded may produce spurious results."

  Result: she "identifies" 111–112 plants, **86% of the botanical section**. A method that succeeds on 86% of cases has no discriminating power — it cannot fail, therefore it cannot be evidence. She then concludes the manuscript is Leonardo da Vinci's first codex. That is the reductio.

  Note also **[V]**: Sherwood *rejects* the first-word-is-the-name assumption, citing Pelling's gallows statistic — i.e. the two leading proponents of the crib approach contradict each other on where the crib even is.

  **Arthur Tucker & Rexford Talbert (HerbalGram 100, 2013).** **[R]** 37 plants, 7 animals and the mineral boleite identified as New World/Nueva España; Voynichese read as a Nahuatl/Spanish/Taino/Mixtec polyglot; f1v matched to *xiuhamolli* in the 1552 Codex Cruz-Badianus; plant 8 on f100r read as a prickly-pear pad with the label transliterated *nashtli* ≈ Nahuatl *nochtli*. **[V]** This escalated into Tucker & Janick (2018), whose Chapter 5 is literally titled **"Phytomorphs in the Pharmaceutical Section: The Rosetta Stone of the Voynich Codex"** (DOI 10.1007/978-3-319-77294-3_5, confirmed via Crossref). Your thesis is that chapter's thesis.

  What killed it **[V]** (Pelling, Jan 2014; the paper PDF itself was UNRETRIEVED — Purdue WAF and herbalgram.org both blocked):
  - It brackets out radiocarbon dating of the vellum, 15th-c. digit and number forms in the quire marks, 15th-c. contractions in the zodiac hand, and 15th-c. parallel hatching — i.e. codicology, palaeography and art history are all set aside to preserve a post-1519 date.
  - It treats all pigment as original, unaware of the light-painter/heavy-painter debate, and treats the current foliation as original, unaware of the bifolio reordering evidence.
  - Pelling: "Selective abductivity is the disease, not the cure."
  - Zandbergen in the same thread **[V]**: *"other botanical scholars have positively identified Asian species in the MS, so a very critical attitude towards both seems fully warranted."*
  - A commenter identifying as a working botanist **[V]**: "of the plant identifications that I've tentatively made match what are presented in this new paper. I don't necessarily think they should have made conclusions related to the 'cipher' though... no delusion that my potential plant identification will lead to a decipherment."

  **Oocephalus, voynich.ninja thread-196 (2 July 2016) — the best-designed attempt I found, and it failed. [V]** This is the one test that needs no language assumption and no key. Petersen (1930s) and Stolfi (1990s) independently noticed that a number of small pharma-section drawings are copies of large herbal drawings **[V]**; Mark Knowles has since compiled a comprehensive match list **[V]**. So: if the pharma label is the plant's name, that same token should recur in the running text of the corresponding herbal page.

  Oocephalus checked rare labels (≤6 occurrences MS-wide). Result: essentially nothing. `opchor` (6 occurrences) appears as a pharma label and in f13r's text — but the plants are only vaguely similar and the word also appears on two herbal pages with completely different plants. `otory` (4 occurrences) is the one halfway-decent hit. `okeoly` appears as a label and in the text immediately above it. That is the entire yield.

  **-JKP- in the same thread [V]**, on why this matters:
  > "these two approaches have probably been tried tens of thousands of times by historic persons and amateur Internet cryptographers. And no one has succeeded even though the VMS is packed full of 'labels'... That tells me they might not be labels in the traditional sense."

  **Julian Bunn ("Computational Attacks on the Voynich Manuscript") [V].** Systematic crib attempts against star labels using Alfonso X's *Lapidario* stone names: "I drew a blank." His one interesting positive is an `ok-` = `ca-` hypothesis yielding plausible Castor/Pollux/Capella placements on f68r3. But the same work records the killer negative: the label `okoe89` labels **five** different objects — three plants/roots, a funnel from the balneological pages, **and a castle**. Labels are not unique object names.

  **Koen Gheuens and Marco Ponzi [V]** — I found no crib attempt by either. Their published work is iconographic and statistical, not decipherment: Gheuens & Cary Rapaport's 2024 study established that herbal drawing details correlate with Currier A/B language assignment (incorporated into voynich.nu's page descriptions), and Gheuens & Ponzi jointly transcribed Ethel Voynich's Beinecke notebooks. Notably, neither has proposed using labels as cribs, which is itself informative about what serious researchers in the image side think the approach is worth.

  **Rene Zandbergen [V]** — has never attempted this and states the constraint that makes it hard: the herbal identifications "are always subjective, but many are highly convincing." He also records that O'Neill's 1944 sunflower and pepper — the entire foundation of the New World line — "are no longer generally accepted."

  **Earliest layer [V]:** Ethel Lilian Voynich and Fr. Theodore Petersen, 1920s–30s, per her Beinecke notebooks as transcribed by Ponzi and Gheuens.

  ---

  ## 2. THE STATE OF THE LABEL PROBLEM — the crib has almost no surface to attack.

  **This is the decisive structural fact and it is rarely stated plainly: the large-plant herbal folios do not have labels.** **[V]** Zandbergen: "Herbal pages typically contain one, in a few cases also two, page-filling pictures of herbs with some paragraphs of text that carefully avoids the drawings." Labels, as a category, occur elsewhere **[V]**:

  > "Short words (the so-called 'labels') near stars in the astronomical and astrological sections strongly suggest that the names of the stars are written here. Labels near leaves and roots in the pharmaceutical section strongly suggest that the names of the plants are written here."

  So the arithmetic of the available crib corpus:
  - **~130–134 large plant drawings** (Zandbergen ~131 **[R]**; Gheuens uses 134 **[V]**) spanning about half the manuscript — **running text only, no labels.** The only "crib slot" is the first word of the page, and Pelling's gallows distribution (p 53 / t 24 / k 21 / f 10) kills that outright **[V]**.
  - **Pharmaceutical section: 12 pages (f99v–f102v), ~179 illustrated plants/plant parts/minerals, of which ~152 carry names.** **[R]** — this figure originates in Tucker & Talbert and I could not reach the primary PDF; treat as reported, not verified. **[V]** JKP notes some pharma rows have no labels at all, which he reads as evidence the MS is unfinished.
  - Zodiac: **298 unique star labels, 269 unique to a sign** **[R]** (Bunn). Not botanical.

  **So the entire botanical crib budget is ~152 label tokens, all of them in a 12-page section of small, partial, often root-or-leaf-only drawings** — the drawings *hardest* to identify, not easiest. The 130 good full-plant portraits contribute nothing.

  **The Greshko quote — located and verified in full context. [V]** It is voynich.ninja thread-4848 ("The Naibbe cipher"), archive page 2, poster handle `magnesium`, dated 04-08-2025 (forum date format is ambiguous between 8 April and 4 August 2025; flagging rather than guessing). Full passage:

  > "Thanks! I agree that through the lens of the Naibbe cipher, **the labels in the VMS look weirdly short and uninformative** (see Section 4.4 of the paper). One potential workaround is that at least some sets of labels are meant to be read as single interspersed messages. Consider, for example, the star chart on f68r2, whose 24 star labels can be theoretically read left-to-right as 8 rows of text... I freely admit that this is not a complete solution."

  > "I should also note: **If memory serves, most labels are uncommon word types.**"

  And the quantitative version, from `oshfdk` in the same exchange, which Greshko accepts **[V]**:

  > "for the labels to make sense, I would expect the verbosity not exceeding something like ~1.5-2.5 glyphs per plaintext character"

  > "Assuming... the token and type length distributions of labels are consistent with the rest of the manuscript, **well more than half of labels would have to be <5 letters long** given your suggested verbosity ranges, which in many cases would still imply a weirdly short label."

  `oshfdk`'s alternative **[V]**: "There is of course a chance that labels are only indices (fig. A, fig. B), referenced in the texts, in which case they can be as short as needed." Note that if labels are indices, the crib programme yields exactly nothing.

  Greshko's Naibbe paper §4.4 is UNRETRIEVED — Taylor & Francis returned 403 and I found no preprint on arXiv, OSF or Zenodo.

  **Quantitative label-length work [R, unverified at primary source]:** Stolfi's word-length-distribution page (ic.unicamp.br) now 404s. Search-surfaced summary of it reports that "the word length distribution of labels and running text show a surprising coincidence, even though the sample sizes differ by an order of magnitude and the token distributions are quite different," with a near-binomial distribution centred on ~5.5 glyphs. I could not verify this at source and it should be re-checked. If true it is double-edged: labels are *not* a distinct register by length, so they can't be treated as a special short-name class — they are just ordinary Voynichese tokens sitting next to pictures.

  **Pelling's "labelese" article [V]** documents that zodiac labels *are* structurally different in other ways: disproportionately `ot-`/`ok-`/`yk-` initial, almost never `qo-` initial, frequently `-y` final, strongly "paired" (`otolal` = `ot-ol-al`), and — critically — **"a good number of zodiac labels occur multiple times. [This perhaps argues against their obviously being unique names.]"** He also observes labels expand or contract to fit available space, which is fatal to treating a label as a fixed lexical item. His own speculation is that `ok-`/`ot-` may carry no extrinsic meaning at all — pure metadomain markers, "not unlike adding two crosses to the start of each word."

  **Rozanova & Temerev, arXiv:2608.17096 (17 Aug 2026) — what it does to the crib strategy specifically. [V]** (abstract via arXiv Atom API, full text via arxiv.org/html).

  Their findings, and the specific damage each does:

  | Finding **[V]** | Effect on the crib strategy |
  |---|---|
  | Conditional entropy 2.7 bits vs ~3.5 for Latin/Italian/English; "glyph regularity is too strong for one-to-one substitution of any tested plaintext" | A label's glyph string is not a letter string. Even a perfect plant ID gives you a plaintext with nothing to map it onto letter-by-letter. |
  | Order resolves onto "a quire-stable scale of recurrent multi-symbol units," not single glyphs | The unit you would have to match your plant name against is not the glyph and not obviously the token. |
  | Token identity predicts the next token by **<1% of token entropy**, vs 2–10% in every matched control | **This is the deepest problem.** See below. |
  | Edge glyphs share 0.2 bits MI — more than any prose control; order lives at token *edges*, not in token succession | Token-internal structure is positional/morphological, not lexical. |
  | 70% singleton types (vs 41% and 59–60% in controls) | Consistent with Greshko's "most labels are uncommon word types," and means a label match cannot be cross-validated against other occurrences — there usually are none. |
  | **Calibrated substitution attack returns a null**, rejecting "the calibrated family of simple concatenative homophonic prose ciphers at the one-to-three-symbol scale" | The cipher class in which a short label could plausibly encode a short plant name is the class that has just been rejected. |

  One honest point in the crib strategy's favour, which I want to state rather than suppress. R&T's most novel result is that transcribed blanks fall into two regimes, and the ones transcribers flagged uncertain behave like word-*internal* junctures — physically narrower on the page (AUC 0.905 from independent image coordinates, 83.4% label recovery from geometry alone). That result attacks *running text* segmentation. **A label is spatially isolated by page layout, so its boundaries are the one place in the manuscript where the token boundary is physically unambiguous.** If anywhere in the MS is a clean crib surface, it is the labels. That is the strongest version of your thesis and it is worth stating.

  But R&T also hand you the reason it still doesn't work, and they say it almost in passing **[V]**:

  > "Weak adjacent identity order is not, however, equivalent to absence of meaning: **lists, labels, paradigms, litanies, tables, and formulaic notations can carry content without behaving like continuous prose**"

  Read that carefully. It rescues the *possibility* that labels mean something. It simultaneously destroys the crib *method*. **A crib is only as valuable as the global consistency check it feeds.** Ventris's Knossos/Pylos place names were worth something not because three names were guessed, but because a wrong grid produced grammatical garbage across thousands of unrelated tablets, and a right one produced coherent Greek. Voynichese has no such "elsewhere": with token-order information below 1% of entropy, **there is no syntax for a candidate key to be checked against.** You can propagate a crib and never find out that you were wrong. That is not a decipherment programme; it is an unfalsifiable generator of readings — which is precisely the observed history in Section 1.

  ---

  ## 3. HOW GOOD ARE PLANT IDs? — There is no measured agreement rate, and the qualitative evidence says it is poor.

  **Direct answer to your question: no inter-rater agreement study exists.** I searched the literature (OpenAlex: 2,066 Voynich works, none on identification reliability), the forums and the blogs. Nobody has ever run independent botanists on the same folios under blind conditions and computed a kappa. This is a genuine gap, and it means **the crib programme currently has no measured anchor stability at all.**

  What the qualitative evidence shows:

  - **Independent experts place the same manuscript on different continents. [V]** Zandbergen: "other botanical scholars have positively identified Asian species in the MS" — against Tucker & Talbert's New World and the traditional European reading. That is not a disagreement about species; it is a disagreement about hemisphere.
  - **f1v: Sherwood/Petersen say *Atropa belladonna* (European deadly nightshade). Tucker & Talbert say *xiuhamolli*, a Mexican soap plant. O'Donovan says neither.** **[V]** Same folio, three incompatible readings, each from someone with domain credentials.
  - **The foundational IDs collapsed.** O'Neill's 1944 sunflower (f93r) and pepper — on which he said six botanists agreed with him **[R]** — are "no longer generally accepted" **[V]**. Note the structure of that failure: reported expert consensus, later abandoned.
  - **Even "agreement" is unstable in kind.** O'Donovan **[V]**: "few things annoy me more than... 'unidentifiable plants'... I'll happily endorse Ellie Velinska's recognition that the focus of the drawing on folio 8v is *Silene*, and Dana Scott's identification of 'Rose' for folio 19v. A number of Sherwood's identifications... are good too." So she affirms identifiability while rejecting most specific identifications — including, in detail, Sherwood's f1v.
  - **The ID community is not independent.** O'Donovan documents that some published ID sets are "unacknowledged use of, and sometimes random re-assignments of, identifications made by others" **[R]**. Where IDs *do* agree, you cannot assume the agreement is independent — which means even a future kappa would need provenance controls.
  - **Zandbergen's own verdict [V]:** identifications "are always subjective, but many are highly convincing."

  **Is there any folio with broad consensus?** The best candidates, all with caveats:
  - **f2v — water lily / *Nymphaea*.** **[R]** Ethel Voynich, Sherwood and others concur. But O'Donovan reads it as *Nymphoides* in an Ayurvedic compound named for *Nardostachys jatamansi* — so even here, the genus is contested.
  - **f9v — *Viola*.** **[R]** Broad agreement on the genus. Tucker & Talbert split it to the North American *V. bicolor* against the Eurasian *V. tricolor* on stipular-lobe shape — i.e. agreement at genus, hemisphere-level disagreement at species. For a crib you need the *name*, so genus-level agreement is worth very little.
  - **f56r — sundew (*Drosera*).** **[R]** Sherwood calls it "obviously a sundew"; Zandbergen's page descriptions list it among convincing cases.
  - **f18r — *Calendula officinalis*.** **[V]** Ethel Voynich and Petersen agreed on every morphological part — and had to discard the colour to do it (see §5).
  - **f35v** ↔ Paris BnF Lat. 6823 f.60r: Zandbergen **[V]** — "it is inconceivable that it was not in some way inspired by this or a similar illustration." That is a source relationship, not a species ID.

  **Assessment.** Call it perhaps 5–15 folios out of ~130 with genus-level agreement among people who are not citing each other, and near-zero folios with species-and-name-level agreement that survives cross-examination. Against a required crib budget in the hundreds (§4), that is not a shortfall — it is a different order of magnitude.

  ---

  ## 4. WHAT A METHODOLOGICALLY SOUND PROGRAMME WOULD REQUIRE

  ### 4.1 The sufficiency arithmetic — and why it fails before you start

  Work out the crib budget honestly.

  - Under a **simple substitution** with ~20–22 productive EVA glyph types: labels average ~5–6 glyphs. 30 confirmed label↔name pairs would supply ~170 glyph constraints against ~22 unknowns. Nominally sufficient — comfortably over-determined. **But R&T's calibrated attack rejects this entire cipher family [V]**, so this budget is spending money that doesn't exist.
  - Under **verbose/homophonic encoding**, which is where the evidence actually points: at Greshko's ~2.5 glyphs/letter median, a 5–6 glyph label carries **2–3 plaintext letters**. Even at oshfdk's optimistic 1.5, it carries 3–4. You cannot fit "coriandrum" or "nochtli" in there. This is Greshko conceding the point about his own cipher **[V]** — and it is the reason his workaround is to abandon labels-as-names entirely and read f68r2's 24 star labels as 8 rows of interspersed running text.
  - The Naibbe-class key has hundreds of entries (most word types outside the top 100 encode plaintext *bigrams*) **[V]**. To constrain a key of that size you would need several hundred confirmed pairs. **There are only ~152 named botanical items in the entire manuscript [R].**

  **The crib budget is structurally insufficient for any cipher class consistent with the measured statistics.** This is not a "needs more data" problem. The data does not exist in the object.

  ### 4.2 If you ran it anyway — the minimum viable design

  **Phase 0 — Establish the anchor exists (this has never been done; do this first, it is cheap).**
  Blind panel: N ≥ 5 botanists with relevant regional expertise, working independently, given greyscale images only (see §5), and given *no* access to the text, to each other, or to prior Voynich ID literature. Output: ranked candidate list per folio against a controlled taxonomic vocabulary, with stated confidence. Compute **Krippendorff's α** at genus and species level. Add provenance controls to detect non-independence.
  **Gate: α < 0.4 at species level → stop. There is no anchor and the programme cannot begin.** My prediction from §3 is that it fails this gate.

  **Phase 1 — Pre-registration.** The ID set, the target language(s), the orthographic normalisation, the distance metric, the match threshold and the train/test split must all be registered publicly *before* any text is examined. Every failure in §1 — Bax, Sherwood, Tucker — is a failure to do this. Sherwood's method is ID-tuned-to-label and label-tuned-to-ID simultaneously, which is why it "works" 86% of the time.

  **Phase 2 — The primary statistic (this is what nobody has ever computed).**
  Labels L₁…L_K with pre-registered candidate name sets N₁…N_K. Fit key φ on a training subset. Test statistic T = number of *held-out* labels where φ(Lᵢ) matches some member of Nᵢ within edit distance d.
  Null distribution: **permute the label↔plant assignment and refit φ from scratch on each permutation**, ≥10⁵ permutations. Refitting on every permutation is essential and is the step everyone skips — without it you are testing a null that assumes the key was given rather than fitted, and any sufficiently flexible key (Sherwood's anagrams, Bax's three R's) will clear it trivially.
  Report exact p on held-out data only. Demand p < 10⁻³ with the multiplicity of the language/orthography search space explicitly corrected.

  **Phase 3 — Key-free confirmation (run this in parallel; it is the best experiment available and it is cheap).**
  **Formalise the Oocephalus test.** Take Knowles' full pharma↔herbal duplicate-drawing list **[V]**. For each matched pair, ask whether the pharma label token recurs in the herbal page's running text. Null: frequency-matched random tokens of the same MS-wide rarity against random herbal pages.
  This test assumes **no language, no key, no plant identification at all**. It asks only whether the manuscript is internally consistent with labels being names of things. It is the single cleanest available falsifier.
  Oocephalus's informal 2016 version returned `otory` and little else **[V]**. A properly powered version at n ≥ 30 pairs would settle it.

  ### 4.3 What would falsify it — concretely

  1. **Held-out match rate within the refit-permutation null.** → The crib produces nothing a random key wouldn't.
  2. **Krippendorff's α < 0.4 at species level.** → No stable anchor; programme cannot start.
  3. **Oocephalus recurrence test null at n ≥ 30.** → Labels are not the names of the things they sit beside, in the text's own vocabulary. **This kills the thesis regardless of how good the plant IDs get.**
  4. **Repeated labels on incompatible objects at chance rate.** Already effectively observed: `okoe89` labels three plants, a funnel, and a castle **[V]**; "a good number of zodiac labels occur multiple times" **[V]**.
  5. **Any proposed key failing to generalise from pharma labels to herbal running text.** Given token-order information <1% of entropy **[V]**, there is no coherent output to check — which means this falsifier is *unavailable*, and that unavailability is itself the strongest argument against the whole programme.

  ### 4.4 On the Linear B analogy

  It does not hold, and the disanalogy is instructive. Ventris had (a) Kober's triplets — an inflectional paradigm derived from *internal* evidence, independent of any plaintext guess; (b) a grid built from that paradigm, into which place names were inserted as constraints rather than as answers; (c) a global consistency check, because a wrong grid produced non-Greek across thousands of unrelated tablets.

  Voynich research has no (a): no established inflectional paradigm. And it has no (c): R&T's <1% token-order result means there is no prose coherence to validate against. **Cribs were never the engine of Linear B — the paradigm and the global check were. The place names were the ignition on an engine that already existed.** There is no engine here, so ignition does nothing.

  ### 4.5 On "knowing the plants IS effectively a translation"

  Flatly false, and worth saying bluntly. Even a perfect, uncontested identification of all ~130 plants gives you a semantic gloss of the *pictures*. The text-to-image relationship is itself unestablished: JKP's point that the MS is unfinished and that text may have been added later by a different person for a different purpose **[V]**; and the demonstrated fact that the *paint* was added later by someone who did not understand the content (paint transfers match current binding order although quires were demonstrably reordered) **[V]**. Identifying the plants would be a real and valuable contribution to the art history and source-tradition question. It would not be a translation, and on the evidence above it would not measurably advance one.

  ---

  ## 5. COLOUR-VISION-DEFICIENCY PRECEDENT — split verdict. Read this carefully, the two halves differ.

  ### 5a. "Identify on morphology, ignore pigment" — **PRIOR ART EXISTS. Clear priority, 2024, with quantitative backing. Do not claim this.**

  **Koen Gheuens, "Voynich Flowers: Too Blue?", The Voynich Temple, 13 August 2024 [V]** — submitted as his Voynich Manuscript Day 2024 presentation. His closing sentence is your proposal:

  > "**All of this means that the position that the plant colors are botanically reliable cannot possibly be defended. For people wishing to undertake such an exercise, it might be more fruitful to work from greyscale images.**"

  His supporting data (all **[V]**, counted by him across the VM and six comparison herbals — Wenceslas Casanatense 459, Manfredus BNF Lat 6823, Trinity O.2.48, Chigi Dioscorides Chig.F.VII.159, Firenze Apuleius Plut.73.16, Vermont MS 2 — sample-matched to ~134 plants each):

  - **52% of flowered VM plants have blue petals**; 74% have blue somewhere in the flower. Nature: ~5% blue (Weevers). Other herbals: 0–24% (Vermont 16%, Trinity 24%). **"6 times the average herbal, 10 times the natural proportion."**
  - **No purple anywhere in the VM.** Even generously pooling nature's blue+purple = 19% against the VM's 52% petal-blue alone, the surplus is unexplained.
  - **Yellow is the lowest of every manuscript sampled**, against ~31% yellow-orange in nature. Zandbergen relays that Alain Touwaide remarked on this in 2014 **[R]**. Pigment degradation is ruled inadequate: yellow is still visibly present where applied, and painted-vs-blank areas remain distinguishable.
  - **Red is at the bottom end even when Herbal A is isolated.** (Sam G.'s observation: Herbal A has plenty of red, Herbal B almost none **[R]**.)
  - **White/blank is excessive**, and ~40% of flowered plants show deliberate blue/white alternation within a single flower.
  - **Calyxes**, green as a rule in every comparison herbal, are disproportionately white, blue, yellow and red in the VM.
  - Stems: excess yellow/tan, deficit of green and brown.

  Earlier, weaker precedent for the same methodological move **[V]**:
  - **Ethel Lilian Voynich and Theodore Petersen, 1920s–30s**, on f18r, from her Beinecke notebooks: *"Dr. Petersen agrees with me that, in spite of the impossible blue and red colouring (which may have been put in for a blind, or may have been added later by someone who did not know the plant) this is a drawing of Calendula Officinalis. All parts agree with that; root, growth, stem, leaves, disk rays, involucre and buds."* That is identification-by-morphology-discounting-pigment, a century ago.
  - **Joannes Richter, 2011** — noticed bright yellow missing from all flowers; explained it as religious symbolism (yellow as the traitor's colour). Observation yes, vision no.
  - **Nick Pelling, 20 Dec 2011** — "trying to infer things about the Voynich Manuscript based on its colours is, sadly, a sure path to madness," grounded in Stolfi's heavy-painter hypothesis.
  - **D.N. O'Donovan, 8 July 2025 [V]** — treats it as settled background: *"elements coloured naturally in that range [pink to purple] will be omitted or differently coloured in this manuscript's vegetal drawings"*; *"the shunned range from pink through purple."*

  ### 5b. "The illustrator had a colour vision deficiency" — **NEARLY ABSENT, but not cleanly absent. One prior proposal, and it is not the one you want.**

  **voynich.ninja thread-5505, "Possibility that the VM author was colorblind?" [V]** — the whole thread is four posts and I read all of them:

  - **`hatoncat`, 4 February 2026** — opens by quoting Gheuens' summary (too much blue, too much white, too much yellow in stems, non-green calyxes) and asks whether the blue flowers "might have actually appeared green to the drawer." Proposes **blue-yellow deficiency (tritanomaly/tritanopia)**, citing a Google search. "Could this explain why they thought they were including pink when they were using a yellow pigment, or a green ink when it was actually blue?"
  - **`Koen G` (Koen Gheuens), 4 February 2026 — rebuts it same day:** "It doesn't quite add up though. What we are missing in flower petals is yellow and pink/red. Instead, we have much more blue. With the condition you describe, the implication would be that the painter thought they were using green instead of blue, which still doesn't make sense for the petals. Moreover, **leaves are usually done in good greens. So I assume that this person knew pretty well what green looked like.**"
  - **`agalakhov`, 4 July 2026** — offers the rival explanation: fading, "if green was a mixture of stable blue and unstable yellow. A spectroscopy of paints would help."
  - **`ErinaBee`, 7 July 2026** — reports mild CVD personally, and: "**colorblind people usually mix up red and green.** Blue and green would indicate Tritanopia which is a very severe form... A blue leaf would appear green, but a yellow petal still looks yellowish, not blue... **Tritanopia would not contribute to the deficiency of red.**"

  **Precise priority assessment:**
  - The **general** "VM illustrator was colour blind" idea: **proposed, 4 February 2026** — i.e. *in* 2026, not before it. Whether that counts as prior art depends on your cutoff date.
  - **Deuteranomaly / red-green specifically as the proposed explanation: NOT FOUND ANYWHERE.** The only person in the thread to mention red-green is ErinaBee, and she raises it to *characterise typical CVD* while arguing that the proposed tritan mechanism fails — she does not propose deuteranomaly as the answer. Nobody connects red-green deficiency to the VM's red/yellow deficit.
  - **Academic literature: VERIFIED ABSENT.** OpenAlex searches for Voynich + colour blindness returned zero relevant works across 2,066 indexed Voynich papers. Crossref likewise.
  - **Cipher Mysteries: VERIFIED ABSENT.** I fetched the most relevant post ("Voynich colour inference, a sure path to madness", 2011) and grepped the full page including all 25 comments for *colour blind / colorblind / color vision / deuter / tritan / protan* — **zero hits.** Domain-restricted searches across ciphermysteries.com, voynichrevisionist.com, herculeaf.wordpress.com, voynichportal.com and voynich.nu returned nothing.
  - **Gheuens' "Too Blue?" post: VERIFIED ABSENT.** Grepped the full article plus its 24 comments for the same terms — **zero hits.** The one hit for "blind" is Ethel Voynich's 1920s phrase "put in for a blind," meaning a deliberate deception, not vision.

  ### 5c. Blunt assessment of the CVD hypothesis on the evidence

  If you intend to pursue this, you should know what it is up against, because the obstacles are in the data I verified above, not in the literature:

  1. **Gheuens' green objection is strong and unanswered [V].** Leaves are rendered in good greens throughout. A red-green deficient painter discriminates green from red poorly — but green from *blue* perfectly well, which is consistent. So deuteranomaly survives this objection where tritanomaly does not. That is the one respect in which your version is better than hatoncat's, and it is worth stating.
  2. **The yellow pattern is the real problem, and it is not perceptual.** Yellow is *abundant in stems* and *absent from flowers* **[V]**. No colour vision deficiency is context-sensitive by plant organ. That is a selection or convention effect. Any CVD account must either explain this or concede it needs a second, non-perceptual mechanism — at which point parsimony is gone.
  3. **The deliberate blue/white alternation within single flowers (~40% of flowered plants) [V]** is a design decision, not a perceptual error.
  4. **The dominant rival explanation is codicologically grounded and it is good.** Stolfi's heavy painter, added perhaps a century later by someone who did not understand the content **[V]**; supported by the fact that paint transfers match the *current* binding order although the quires were demonstrably reordered **[V]**; further supported by Pelling's observation that light Aries and dark Aries were painted by different hands in different palettes **[V]**. If most colour is not the original illustrator's, the original illustrator's colour vision is not recoverable from it — the hypothesis is about the wrong person.
  5. **agalakhov's fading hypothesis is cheaper and testable [V]:** green as stable-blue + unstable-yellow. Spectroscopy would settle it. McCrone already analysed the pigments (azurite+cuprite blue, copper/copper-chloride green, hematite red ochre) **[R]** — a targeted re-examination could discriminate.

  **Net priority verdict:** the *methodology* (ignore pigment, use morphology, prefer greyscale) is published and quantified by Gheuens, August 2024 — you cannot claim it and should cite it. The *specific deuteranomaly explanation* appears genuinely unclaimed, but its nearest neighbour was floated on 4 February 2026 and rebutted the same day by the person who owns the underlying dataset. Treat 5a as established prior art, 5b as narrowly open but contested territory with a live rebuttal you would have to answer.

  ---

  ## VERDICT ON THE CRIB THESIS

  **Not viable.** Four independent kill-shots:

  1. **The corpus doesn't exist.** The ~130 identifiable full-plant folios have no labels — only running text, and the first-word anchor is dead on gallows statistics **[V]**. The entire botanical label corpus is ~152 items in a 12-page section of partial drawings that are the hardest to identify.
  2. **The labels are too short to hold plant names** under any verbosity consistent with the statistics — conceded by Greshko about his own cipher **[V]** — and they repeat across incompatible objects (`okoe89`: three plants, a funnel, a castle) **[V]**.
  3. **The anchor is unstable and has never been measured.** Credentialed botanists assign the same folios to different hemispheres **[V]**; the foundational IDs (O'Neill's sunflower) collapsed **[V]**; no inter-rater study exists.
  4. **There is no global consistency check for a crib to feed.** Token-order information is <1% of token entropy **[V]**, so a wrong key produces no detectable garbage. This is why every attempt in §1 "succeeded" and none replicated. The Linear B analogy inverts: cribs were the ignition, the paradigm and the coherence check were the engine, and here the engine is missing.

  "Knowing the plants IS effectively a translation" is false. Identifying the plants is a worthwhile contribution to art history and the source-tradition question. It is not a decipherment and the evidence indicates it would not produce one.

  **The one thing genuinely worth doing** is §4.2 Phase 3 — the formalised Oocephalus test over Knowles' full pharma↔herbal duplicate list with a frequency-matched null. It needs no language, no key, no plant identification, and no funding. It asks whether the manuscript is internally consistent with labels being names at all. A null result at n ≥ 30 closes the question permanently. A positive result would be the most important finding in the field in a decade. Nobody has run it properly. That is the experiment.

  ---

  ## SOURCES

  **Retrieved and read in full (primary):**
  - https://export.arxiv.org/api/query?id_list=2608.17096 — Rozanova & Temerev metadata + abstract
  - https://arxiv.org/html/2608.17096v1 — full text, "A Glyph Is Not a Letter, a Token Is Not a Word, a Space Is Not a Space"
  - https://ciphermysteries.com/2017/09/03/voynich-labelese — Pelling on labelese
  - https://ciphermysteries.com/2014/02/21/stephen-bax-voynich-manuscript — Pelling's 7-point demolition of Bax
  - https://ciphermysteries.com/2014/01/21/brand-new-new-world-nahuatl-voynich-manuscript-theory — Pelling on Tucker & Talbert, incl. Zandbergen's comment
  - https://ciphermysteries.com/2011/12/20/voynich-colour-inference-a-sure-path-to-madness — heavy painter; Richter 2011; CVD-grep negative
  - https://www.voynich.ninja/thread-4848.html and https://www.voynich.ninja/archive/index.php/thread-4848{,-2,-3,-4}.html — Naibbe thread; Greshko "weirdly short and uninformative" located on archive page 2
  - https://www.voynich.ninja/archive/index.php/thread-5505.html — "Possibility that the VM author was colorblind?", all four posts
  - https://www.voynich.ninja/archive/index.php/thread-196{,-2,-3,-4}.html — "Plants and labels in pharma section"; the Oocephalus test
  - https://herculeaf.wordpress.com/2024/08/13/voynich-flowers-too-blue/ — Gheuens' colour statistics; greyscale recommendation; Ethel Voynich f18r quote
  - https://www.voynich.nu/illustr.html — Zandbergen on sections, where labels occur, ID history
  - https://voynich.nu/a4_word.html — Zandbergen on labels as evidence for word spaces
  - https://www.voynich.nu/a1_intro.html
  - https://voynichrevisionist.com/2025/07/08/the-voynich-manuscripts-vegetal-images-graphic-vocabulary-pt-6a-inexactitude-authority-and-dissent/ — O'Donovan on ID methodology and Sherwood's f1v
  - https://voynichrevisionist.com/2025/10/04/the-voynich-manuscripts-vegetal-images-vocabulary-pt-9-meme-law-unidentifiable-plants/ — who has claimed IDs since 2000
  - https://voynichattacks.wordpress.com/category/labels/ — Julian Bunn's label attacks; Lapidario null; okoe89/castle
  - http://web.archive.org/web/20260316093750id_/https://www.edithsherwood.com/voynich-botanical-plant-anagrams/index.php — Sherwood, "The Voynich Botanical Plant Names Decoded" (live site down)
  - http://web.archive.org/web/20260415190330/https://stephenbax.net/?page_id=419 — Bax "Voynich plant names" (page shell only; content not preserved)
  - https://api.openalex.org/works?search=Voynich+manuscript (+ colour-vision variants) — 2,066 works; zero on CVD or ID reliability
  - https://api.crossref.org/works?query.bibliographic=Phytomorphs+Pharmaceutical+Section+Rosetta+Stone+Voynich — confirmed Tucker & Janick 2018, DOI 10.1007/978-3-319-77294-3_5
  - https://archive.org/wayback/available?url=... — availability lookups
  - https://archive.org/stream/Stephen_Bax_Voynich_manuscript_script_and_language_2014/Voynich-a-provisional-partial-decoding-BAX_djvu.txt — retrieved as HTML wrapper; not used as a primary citation

  **UNRETRIEVED — blocked, flagged rather than paraphrased:**
  - https://www.tandfonline.com/doi/full/10.1080/01611194.2025.2566408 — Greshko, "The Naibbe cipher", Cryptologia. **403.** §4.4 (the label discussion Greshko points to) not read. No preprint found on arXiv, OSF or Zenodo.
  - https://hort.purdue.edu/newcrop/voynich/unraveling-voynich-chap-5-rosetta-stone.pdf — Tucker & Janick Ch.5 "The Rosetta Stone of the Voynich Codex". **Purdue WAF rejection**; not in Wayback.
  - https://www.herbalgram.org/.../hg100-feat-voynich/ — Tucker & Talbert 2013. **0 bytes live and via Wayback.** The "179 items / 152 named" figure is therefore **[R]**, not **[V]**.
  - https://link.springer.com/chapter/10.1007/978-3-319-77294-3_5 — **211-byte stub.**
  - https://stephenbax.net/wp-content/uploads/2014/01/Voynich-a-provisional-partial-decoding-BAX.pdf — **403.** Bax's paper characterised from Pelling's point-by-point critique and search summaries, not from the original.
  - https://www.ic.unicamp.br/~stolfi/voynich/00-12-21-word-length-distr/ — **404.** The label-vs-running-text length claim in §2 is **[R]** and should be re-verified.
  - https://www.voynich.nu/a2_pharma.html — **404** (wrong path; not re-located).

  **Tooling note:** `tools/run_raven_scout.py` referenced by the NO-WEBFETCH guardian hook **does not exist** — `C:\flask-structural-api\tools\` contains no raven script. The RAVEN code lives at `core/raven_stream.py`, `core/raven_brain.py`, `core/raven_gateway.py`, `core/raven_oracle_bridge.py`. The hook's remediation message therefore points at a dead path, which is worth fixing since it makes the sanctioned alternative unreachable. Per your instruction I used direct urllib from the session scratchpad and wrote no files into the repo.
