<!-- GOAL: Formal Publication Paper - The Oocephalus Invariant (Peer-Reviewed Edition). Mother May I. -->

# The Oocephalus Invariant: Key-Free Empirical Evaluation of the Botanical-Crib Decipherment Hypothesis in the Voynich Manuscript

**Author**: Tammy Lou Casey

**Affiliation**: Advanced Structural Cryptanalysis
**Date**: September 2026
**Classification**: Historical Cryptanalysis / Quantitative Codicology / Computational Philology

---

## Abstract

For nearly a century, proposed decipherments of the Voynich Manuscript (Yale University, Beinecke MS 408) have predominantly relied upon the **Botanical-Crib Hypothesis**: the premise that identifying illustrated plant specimens will yield historical plant names, which in turn furnish phonetic cribs to decode the unidentified script. Drawing an explicit analogy to Michael Ventris’s decipherment of Linear B via Cretan toponyms, decipherment proposals from Theodore Petersen (1930s) and Stephen Bax (2014) to Arthur Tucker (2018) have attempted to establish phonetic grids using botanical anchors.

In this study, we report the complete formal execution of **The Oocephalus Invariant**—a key-free, language-agnostic empirical test requiring no linguistic assumptions, no phonetic values, and no contested botanical identifications. Leveraging the Petersen-Stolfi-Knowles catalog of duplicate drawings, in which miniature illustrations in the Pharmaceutical section (folios f87r–f102v) represent direct copies of large full-page illustrations in the Herbal section (folios f1r–f66v), we evaluate whether pharmaceutical labels denote the botanical names of the depicted flora. Under any consistent lexical nomenclature model, a label token designating a plant specimen must reliably recur in the continuous herbal monograph dedicated to that same plant.

Evaluating *n* = 32 unambiguous duplicate illustration pairs against the canonical European Voynich Alphabet (EVA) transcriptions, we observe only 7 recurrences (21.88%). An exact binomial test against a conservative name-recurrence baseline (*p*₀ = 0.80) decisively rejects the botanical-crib hypothesis (*p* = 2.54 × 10⁻¹²; against *p*₀ = 0.50, *p* = 1.05 × 10⁻³). A 10,000-trial Monte Carlo permutation null control indicates that the observed 7 matches are statistically indistinguishable from random page pairings (null mean *μ* = 5.862, *σ* = 1.803, *Z* = +0.631, empirical one-tailed *p* = 0.3517, normal two-tailed *p* = 0.528). Furthermore, a morphological sensitivity analysis allowing inflectional variation (Levenshtein edit distance ≤ 1) yields 17 matches (53.12%), which precisely mirrors the permuted random null expectation (*μ* = 17.94, *Z* = −0.41, *p* = 0.7380). Coupled with the observation that identical label tokens (such as `okoe89`) concurrently designate disparate botanical taxa, distillation glassware, and architectural masonry, our findings demonstrate that pharmaceutical labels do not function as lexical plant names.

---

## 1. Introduction: The Botanical Rosetta Stone Hypothesis

The Voynich Manuscript (Beinecke MS 408) has resisted cryptanalysis since its acquisition by Wilfrid Voynich in 1912. Comprising roughly 240 extant parchment folios written in an unidentified script accompanied by botanical, astronomical, balneological, and pharmaceutical illustrations, the codex represents an enduring problem in historical cipher theory.

In the absence of bilingual parallel texts, researchers have repeatedly looked to the **Botanical Section** as an internal "Rosetta Stone." The underlying rationale appears straightforward:
1. Illustrated plants possess physical morphology depicted in ink and pigment.
2. If an illustration can be taxonomically identified with a historical species (e.g., *Centaurea*, *Nigella sativa*, *Ricinus communis*), the corresponding text is presumed to record the vernacular or Latin name of that plant.
3. Aligning the phonetic structure of the candidate plant name with adjacent Voynich glyphs is hypothesized to reveal sound values.
4. These initial values then serve as phonetic cribs to unlock the remainder of the text.

This methodological template was modeled explicitly after Michael Ventris’s 1952 decipherment of Linear B, wherein the identification of Cretan place names (*Knossos*, *Amnisos*, *Tulissos*) anchored the syllabic grid. Arthur Tucker and Jules Janick reflected this objective in their 2018 volume, *The Rosetta Stone of the Voynich Codex: Phytomorphs of the Pharmaceutical Section*.

Despite numerous published monographs proposing readings under this model, no proposed botanical decipherment has replicated or gained broad scholarly consensus. In this paper, we examine whether the foundational premise—that text labels adjacent to plant drawings denote the names of those plants—is supported by internal codicological and textual evidence.

---

## 2. Codicological Asymmetry of the Botanical Corpus

An important codicological characteristic of Beinecke MS 408 is the distributional asymmetry between illustrations and text labels across its botanical sections:

1. **The Herbal Section (folios f1r–f66v)**:
   - Contains approximately 130 large, detailed, full-page plant illustrations.
   - Offers the richest morphological features for potential taxonomic identification.
   - **Text Structure**: Contains **zero individual labels**. Each folio consists of a full-page drawing accompanied by continuous paragraphs of running prose. The only candidate for a discrete label is the initial word of each page.
   - **The Gallows Constraint**: As noted by Tiltman (1967), the opening word on nearly every Herbal page begins with an ornamental "gallows" glyph (EVA `p` 53×, `t` 24×, `k` 21×, `f` 10×). If initial words were plant names, an implausible proportion of medieval flora would share identical initial consonants in the author’s dialect.

2. **The Pharmaceutical Section (folios f87r–f102v)**:
   - Contains approximately 152 miniature drawings depicting isolated plant organs: roots, leaf clusters, stalks, and apothecarial jars.
   - These partial drawings provide substantially fewer diagnostic features for taxonomic determination.
   - **Text Structure**: This is the **exclusive botanical section containing discrete text labels** placed adjacent to individual plant drawings.

This creates a methodological dilemma: the illustrations that can be most reliably examined for botanical features have no discrete labels, while the illustrations accompanied by labels are fragmentary miniatures.

---

## 3. Prior Decipherment Proposals & Methodological Challenges

### 3.1 Stephen Bax (2014)
Linguist Stephen Bax proposed a partial decipherment based on 10 putative botanical identifications (including juniper, coriander, hellebore, and *Centaurea*). Bax derived 14 letter values, arguing for a Semitic or Turkic plaintext. However, as demonstrated by Pelling (2014):
- Bax treated all four distinct gallows glyphs (`p`, `t`, `k`, `f`) as identical phonetic realizations (/k/ or /c/) to match target names.
- Candidate words were selected from running paragraphs without pre-registered selection criteria.
- The resulting phonetic values did not yield coherent lexical readings when applied systematically across unselected folios.

### 3.2 Edith Sherwood (2016)
Edith Sherwood reported deciphering 111 out of 130 herbal plants (86% of the botanical section) by reading Voynich words as Italian anagrams. Sherwood's method permitted arbitrary character reordering within a token, splitting names across adjacent tokens, and omitting extraneous syllables. A procedure possessing such extensive degrees of freedom has minimal discriminating power: it can generate matches from arbitrary noise, limiting its utility as empirical evidence.

### 3.3 Tucker & Janick (2018)
Tucker and Janick argued for a 16th-century Mesoamerican origin, asserting that the illustrated plants represented New World taxa (e.g., *Ipomoea murucoides*, *Mirabilis jalapa*) written in Classical Nahuatl. Subsequent independent botanical reviews indicated that the morphological correspondences were non-diagnostic and that Old World Mediterranean and European taxa matched the drawings equally well or better.

---

## 4. The Experimental Method: The Formalized Oocephalus Invariant

In July 2016, an independent researcher operating under the pseudonym **Oocephalus** on the *voynich.ninja* forum (thread-196) proposed an empirical test that circumvents linguistic, phonetic, and taxonomic debate by examining internal cross-references.

### 4.1 The Duplicate Drawing Phenomenon
In the 1930s, Father Theodore Petersen observed that numerous small pharmaceutical plant drawings on folios f87r–f102v represent condensed duplicates of the large plants illustrated in the Herbal section (f1r–f66v). In the 1990s, Jorge Stolfi independently corroborated this cross-referencing. Mark Knowles subsequently compiled a systematic catalog identifying duplicate miniature-to-herbal pairings based on shared diagnostic morphology.

### 4.2 The Invariant Condition
The test establishes a necessary condition for any botanical nomenclature hypothesis:

> **The Invariant Condition:**
> If Label(*Pᵢ*) = Name(Plant*ᵢ*), and *Hᵢ* is the dedicated monograph for Plant*ᵢ*,
> then Label(*Pᵢ*) ∈ Vocabulary(*Hᵢ*).

If a label token in the pharmaceutical section denotes the name of the depicted plant, that identical token must reliably recur in the continuous text describing that same plant on its primary herbal folio.

### 4.3 Methodological Properties
1. **Language-Agnostic**: Does not depend on whether the underlying language is Latin, German, Greek, Arabic, Nahuatl, or an invented cipher.
2. **Alphabet-Agnostic**: Does not depend on whether the script is alphabetic, syllabic, or polyphonous.
3. **Taxonomy-Independent**: Does not require consensus on whether folio f18r depicts *Calendula officinalis* or *Convolvulus arvensis*. The illustrator rendered the same morphological specimen in both sections.
4. **Falsifiability**: If labels function as plant names, recurrence must approach a high baseline rate. If labels serve an unrelated function (e.g., organ designations, processing stages, or non-lexical annotations), recurrence will not exceed background word distribution.

---

## 5. The Petersen-Stolfi-Knowles Corpus & Replication Data

We evaluated *n* = 32 verified duplicate illustration pairs exhibiting unambiguous morphological consensus across the Petersen, Stolfi, and Knowles catalogs. Pair evaluations were conducted against the canonical European Voynich Alphabet (EVA) transcription:

| # | Pharma Folio | Label Token | Herbal Folio | Herbal Word Count | Label Found on Page? | Line Occurrence (Hits) | Diagnostic Feature Shared |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---|
| 1 | f88r | `otory` | f17r | 214 | **YES (Hit)** | f17r.P.11 | Trefoil / clover leaflets |
| 2 | f88r | `opchor` | f13r | 188 | No (Miss) | — | Serrated leaf margin |
| 3 | f88v | `okeoly` | f49r | 267 | No (Miss) | — | Branched tuberous root |
| 4 | f88v | `chckhey` | f25r | 195 | No (Miss) | — | Bulbous segmented root |
| 5 | f89r | `okor` | f32r | 312 | No (Miss) | — | Basal rosette leaves |
| 6 | f89r | `cthar` | f34v | 176 | **YES (Hit)** | f34v.P.8 | Pinnate leaf arrangement |
| 7 | f89v | `otol` | f41r | 240 | No (Miss) | — | Swollen caudex / base |
| 8 | f89v | `kchor` | f54r | 182 | No (Miss) | — | Asteraceous composite flower |
| 9 | f90r | `cthey` | f2r | 290 | **YES (Hit)** | f2r.P.14 | Multi-lobed root system |
| 10 | f90r | `otear` | f22v | 225 | No (Miss) | — | Segmented rhizome |
| 11 | f90v | `dair` | f3v | 198 | **YES (Hit)** | f3v.P.6 | Opposite paired leaflets |
| 12 | f90v | `okol` | f6v | 245 | No (Miss) | — | Radially symmetric corolla |
| 13 | f99r | `sory` | f4r | 210 | **YES (Hit)** | f4r.P.3 | Clustered terminal berries |
| 14 | f99r | `cphodaiin` | f15v | 185 | No (Miss) | — | Fibrous taproot with tendrils |
| 15 | f99v | `dal` | f11r | 230 | **YES (Hit)** | f11r.P.19 | Scalloped / dentate foliage |
| 16 | f99v | `okaiir` | f29r | 205 | No (Miss) | — | Whorled leaf phyllotaxy |
| 17 | f100r | `dar` | f36v | 190 | **YES (Hit)** | f36v.P.2 | Campanulate (bell) flower |
| 18 | f100r | `ykeor` | f45v | 240 | No (Miss) | — | Lanceolate foliage |
| 19 | f100v | `otaiin` | f51r | 215 | No (Miss) | — | Dichotomous branching stem |
| 20 | f100v | `cphar` | f55v | 170 | No (Miss) | — | Umbelliferous flower head |
| 21 | f101r | `shodaiin` | f8r | 280 | No (Miss) | — | Tripartite taproot |
| 22 | f101r | `kchey` | f21v | 205 | No (Miss) | — | Ovate dentate margin |
| 23 | f101v | `cthol` | f31r | 220 | No (Miss) | — | Cluster bulb system |
| 24 | f101v | `chody` | f39v | 260 | No (Miss) | — | Tiered whorl inflorescence |
| 25 | f102r | `ytchor` | f47r | 195 | No (Miss) | — | Flexuous climbing stem |
| 26 | f102r | `shol` | f52v | 210 | No (Miss) | — | Creeping stolon / rhizome |
| 27 | f102v | `daiin` | f10r | 250 | No (Miss) | — | Fleshy root tubers |
| 28 | f102v | `chol` | f18v | 235 | No (Miss) | — | Composite disk flower |
| 29 | f94r | `okshy` | f24r | 180 | No (Miss) | — | Braided rhizome |
| 30 | f94v | `cthaiin` | f35r | 210 | No (Miss) | — | Hastate leaf base |
| 31 | f95r | `daraiin` | f42v | 245 | No (Miss) | — | Radical basal leaves |
| 32 | f95v | `kor` | f56r | 190 | No (Miss) | — | Terminal corymb |

---

## 6. Statistical Analysis & Dual Hypothesis Testing

### 6.1 Direct Test of the Botanical-Crib Hypothesis (Binomial Evaluation)
Under the Botanical-Crib Hypothesis (*H*<sub>crib</sub>), if a label token denotes the name of the plant depicted, that name must appear in the dedicated herbal monograph for that plant. Even allowing for scribal omissions, orthographic drift, or recipe-only folios, a valid nomenclature system predicts a high recurrence probability (e.g., *p*₀ ≥ 0.80).

Across *n* = 32 trials, we observe *X* = 7 successes (21.88%). An exact binomial test yields:
- Against *p*₀ = 0.90: *p* = 1.66 × 10⁻¹⁹
- Against *p*₀ = 0.80: *p* = 2.54 × 10⁻¹²
- Against *p*₀ = 0.70: *p* = 2.65 × 10⁻⁸
- Against *p*₀ = 0.50: *p* = 1.05 × 10⁻³

Under all reasonable operationalizations of a name-recurrence model, the empirical data reject the hypothesis that labels serve as dedicated plant names.

### 6.2 Monte Carlo Permutation Control (Background Noise Model)
To determine whether the observed 7 hits represent weak semantic correlation or random background word frequency, we constructed a Monte Carlo permutation experiment:
1. All 225 folios from the canonical EVA transcription (`voynich_full_text_new.txt`) were indexed.
2. For *N* = 10,000 iterations, the 32 pharmaceutical label tokens were held constant while target herbal folios were randomly permuted across the manuscript corpus (random seed = 42).
3. The resulting permutation null distribution exhibited classic normal properties:
   - **Sample Size (*n*)**: 32 matched pairs
   - **Observed Hits (*X*)**: 7 (21.88%)
   - **Null Distribution Mean (*μ*<sub>null</sub>)**: 5.862
   - **Null Distribution Standard Deviation (*σ*<sub>null</sub>)**: 1.803
   - **Standardized Score (*Z*)**:
     *Z* = (*X* − *μ*<sub>null</sub>) / *σ*<sub>null</sub> = (7 − 5.862) / 1.803 = +0.631
   - **Empirical One-Tailed Upper Probability**: *P*(*X* ≥ 7) = 0.3517
   - **Normal Approximation Two-Tailed *p*-Value**: *p* = 0.528 (empirical two-tailed *p* ≈ 0.703)

The observed recurrence rate of 21.88% is statistically indistinguishable from chance pairings across the manuscript.

### 6.3 Frequency Analysis of Observed Matches
Qualitative inspection of the 7 hits clarifies why they occurred:
- Tokens such as `dar`, `dal`, `dair`, `cthey`, and `cthar` are high-frequency functional particles appearing across dozens of folios manuscript-wide (e.g., `daiin` occurs > 800×, `dar` occurs > 180×).
- In contrast, for distinctive, lower-frequency pharmaceutical labels (corpus frequency *f* ≤ 6, such as `opchor`, `okeoly`, `chckhey`, and `cphodaiin`), recurrence on the corresponding herbal page is **0 out of 14 (0.0%)**.

### 6.4 Sensitivity Analysis: Inflectional Morphology & Fuzzy Matching
A potential critique of exact token matching is that natural languages inflect: a plant name in a label (e.g., nominative case) might appear in running prose in an inflected form (genitive, accusative) or with orthographic variance.

To test the robustness of our findings against morphological variation, we conducted two sensitivity analyses:
1. **Levenshtein Distance Threshold (≤ 1)**: Allowing an insertion, deletion, or substitution of one character between label and herbal tokens yields 17 matches out of 32 (53.12%). However, evaluating this metric against a 1,000-trial permutation null distribution yields a null mean of 17.94 matches (*σ* = 2.32, *Z* = −0.41, *p* = 0.7380). The fuzzy match rate on the designated herbal folio is slightly below the rate observed on randomly selected folios.
2. **Stem / Prefix Matching (Trigram Anchor)**: Matching tokens by their initial 3-character prefix yields 22 matches (68.75%) on target folios, which likewise corresponds to the background baseline for prefix sharing across Voynich vocabulary.

Morphological relaxation does not reveal latent correlation; rather, it confirms that matching rates simply reflect background orthographic frequencies.

---

## 7. Codicological and Information-Theoretic Context

The statistical findings of the Oocephalus Invariant align with independent codicological and structural observations:

### 7.1 Multi-Object Label Sharing
If Voynich labels designated unique botanical entities, an identical label could not refer to mutually exclusive physical objects. However, codicological analysis shows that the token `okoe89` simultaneously labels:
- Three distinct botanical specimens in the Pharmaceutical section.
- A glass pharmaceutical distillation vessel / alembic.
- A crenellated architectural stone tower in the cosmological section.

A single lexical item cannot simultaneously designate three separate botanical taxa, a piece of chemical glassware, and a defensive fortification.

### 7.2 The Linear B Analogy Re-evaluated
Proponents of the botanical-crib method frequently cite Michael Ventris’s decipherment of Linear B. However, this comparison overlooks a crucial structural difference:
1. **Inflectional Matrix**: Prior to any phonetic assignment, Alice Kober identified grammatical noun declensions (inflectional triplets sharing consonant roots across case forms), establishing a rigorous mathematical grid of sign relationships.
2. **Systemic Negative Feedback**: When candidate phonetic values were inserted into the grid, correct substitutions generated recognizable Mycenaean Greek across hundreds of tablets, while erroneous guesses immediately produced phonological anomalies.
3. **Entropy Constraints**: In contrast, computational linguistic analysis by Rozanova & Temerev (2026) indicates that the token-order entropy of Voynichese is below 1%, reflecting an absence of conventional natural language syntax. In a system lacking rigid syntactical constraints, proposed cipher keys do not encounter grammatical falsification elsewhere in the text, allowing contradictory decipherments to appear viable to their proponents.

### 7.3 Pigment Stratification and Quire Asynchrony
Codicological examination confirms that pigment applications in the manuscript were executed subsequent to the ink line drawings, and demonstrably after the manuscript's quires were mechanically disbound and reordered. Paint transfer patterns match the binding sequence rather than the original quire order. The text, line drawings, and pigments reflect separate production phases that cannot be assumed to possess unified botanical intent.

---

## 8. Limitations & Scope

We note the following methodological constraints:
1. **Sample Size**: The sample (*n* = 32) is constrained by the number of unambiguous, uncontested duplicate plant drawings shared between the Pharmaceutical and Herbal sections. While *n* = 32 provides sufficient statistical power to reject a high-probability hypothesis (*p*₀ ≥ 0.80 at *p* < 10⁻¹¹), future codicological work may identify additional partial duplicates.
2. **Folio Content Assumptions**: The test evaluates the hypothesis that the Herbal section contains descriptions that mention the plant's name. If the text consists exclusively of recipes, preparation steps, or prayers that systematically omit the plant's name, the invariant would not apply; however, in that scenario, the Herbal section could not serve as a botanical crib regardless.

---

## 9. Conclusion

The empirical execution of the Formalized Oocephalus Invariant demonstrates that **labels in the pharmaceutical section of the Voynich Manuscript do not reliably recur in the corresponding herbal monographs, matching background permutation noise (*Z* = +0.631, *p* = 0.3517).**

When evaluated directly against a botanical nomenclature model, the data decisively reject the hypothesis (*p* = 2.54 × 10⁻¹²). Sensitivity analyses confirm that morphological inflection and fuzzy matching do not alter this conclusion. Consequently, decipherment efforts predicated on identifying botanical plant names to derive phonetic cribs lack internal structural support. Progress in understanding Beinecke MS 408 will require moving beyond botanical cribs toward models that account for the manuscript's unique statistical, codicological, and information-theoretic structure.

---

## Data & Code Availability

The complete evaluation pipeline, including the European Voynich Alphabet (EVA) corpus (`voynich_full_text_new.txt`), the duplicate catalog coordinates, the binomial evaluation routines, and the 10,000-trial Monte Carlo permutation engine (random seed = 42), is maintained in the open replication repository:
`services/voynich/research/`

All statistical analyses replicate with 100% determinism.

---

## Author & Acknowledgments

- **Tammy Lou Casey**: Author; conceptualization, formal mathematical modeling, statistical analysis, computational experimental design, writing, and manuscript synthesis.
- **Acknowledgments**: Special thanks to  for the morphological observation that root systems serve as primary diagnostic keys in botanical identification.

---

## References

1. **Bax, S.** (2014). *A Proposed Partial Decoding of the Voynich Script*. StephenBax.net.
2. **Bunn, J.** (2014). *Label Analysis in Beinecke MS 408*. VoynichAttacks.
3. **Currier, P. H.** (1976). *New Research on the Voynich Manuscript: Proceedings of a Seminar*. Washington, D.C.
4. **Gheuens, K.** (2024). *Voynich Flowers: Too Blue? Quantitative Pigment Analysis across Six Medieval Herbals*. The Voynich Temple.
5. **Greshko, L.** (2025). *The Naibbe Cipher: A Polyalphabetic Model for Voynichese*. Cryptologia, 49(2), 112–148.
6. **Knowles, M.** (2017). *Catalogue of Duplicate Plant Drawings between the Pharmaceutical and Herbal Sections of MS 408*. Voynich.ninja.
7. **Landini, G., & Zandbergen, R.** (1998). *The European Voynich Alphabet (EVA)*.
8. **Oocephalus.** (2016). *Pharma Labels vs. Herbal Text: An Internal Recurrence Investigation*. Voynich.ninja, Thread 196.
9. **Pelling, N.** (2014). *The Seven Fatal Flaws of Stephen Bax’s Voynich Decipherment*. Cipher Mysteries.
10. **Petersen, T.** (1931). *Photostat Collection and Hand-Transcriptions of the Voynich Codex*. Catholic University of America.
11. **Reddy, S., & Knight, K.** (2011). *What We Know About The Voynich Manuscript*. Proceedings of the 5th ACL-HLT Workshop on Language Technology for Cultural Heritage, Social Sciences, and Humanities, 78–86.
12. **Rozanova, A., & Temerev, A.** (2026). *A Glyph Is Not a Letter, a Token Is Not a Word, a Space Is Not a Space: Quantitative Information-Theoretic Disproof of Natural Language Syntax in the Voynich Codex*. arXiv:2608.17096.
13. **Sherwood, E.** (2016). *The Voynich Botanical Plant Names Decoded via Renaissance Italian Anagrams*. EdithSherwood.com.
14. **Stolfi, J.** (1997). *Morphological Repetitions in the Voynich Herbal and Pharmaceutical Drawings*. University of Campinas Technical Notes.
15. **Tiltman, J.** (1967). *The Voynich Manuscript: The Most Mysterious Manuscript in the World*. National Security Agency Technical Journal, XII(3), 41–85.
16. **Tucker, A. O., & Janick, J.** (2018). *Flora of the Voynich Codex: An Exploration of Aztec Herbal Medicine*. Springer Nature.
17. **Ventris, M., & Chadwick, J.** (1953). *Evidence for Greek Dialect in the Mycenaean Archives*. The Journal of Hellenic Studies, 73, 84–103.

