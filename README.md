<!-- GOAL: The Mechanical Voynich Public Repository Documentation. Mother May I. -->
# The Mechanical Voynich
### Interactive SVG Image Map Concordance Atlas & Iatromathematical Triad Engine

**Live Production Web Application**: [https://voynich.ozark-oracle.com](https://voynich.ozark-oracle.com)  
**Lead Researchers & Architects**: Tammy Lou Casey &   
*The Oracle Platform — Codicological Biophysics & Manuscript Intelligence*

---

## Executive Summary & Breakthrough Discovery

For over a century, cryptographers, computational linguists, and historians treated the **Voynich Manuscript (Yale Beinecke MS 408)** as either an undeciphered cipher or an unknown lost language.

The **Iatromathematical Concordance Hypothesis**, formulated by **Tammy Lou Casey & **, establishes that Beinecke MS 408 is neither: it is an **ergonomically engineered 15th-century hyperlinking concordance system for medieval clinical practice**.

The recurring cross-sectional vocabulary (`otal`, `okaly`, `okeody`, `am`, `ar`, `otaiin`) serves as **indexical bridge tokens**:
1. **The Software Hyperlinks (Triad Bridge Tokens)**:
   - Specific star labels in the **Astronomical / Zodiac medallions** (held by nymphs or tied to celestial rays) recur identically inside the descriptive recipes of specific **Herbal specimens** and directly painted upon the albarelli drug vessels in the **Pharmaceutical section**.
   - The corpus contains **310 Triad Bridge Tokens** forming **78 Full Melothesia Triads** (Zodiac Star ↔ Botanical Herb ↔ Pharmaceutical Jar) connecting astrological timing, botanical harvesting, and compound medication.
2. **The Hardware Finding Aids (Medieval Physical UX)**:
   - Before standardized foliation or page numbers existed, a 15th-century physician navigated this multi-section manual using five tangible physical mechanisms:
     - **The 6-Panel Rosettes Foldout (f85r–f86v)**: A system-wide topological map and master index.
     - **Quire Collation & Foldout Edge Tabs**: Extended parchment leaves in Quires 9, 10, and 14 that protrude slightly and fall open instantly in the hands.
     - **Line-Initial Gallows Characters (`p, t, k, f`)**: Present on 74.7% of folios, functioning as visual paragraph markers and indexing headers.
     - **Marginal Albarelli Silhouettes**: Clear visual profiles enabling rapid scanning without reading running text.
     - **Contemporary 15th-Century Latin Month Annotations**: (*marz, abril, mayo...*) written in a Northern Italian / Occitan humanistic cursive hand, indexing entry points for clinical consultation.

---

## Chronological Steps of Discovery & Timeline

Our research team uncovered the architecture through a rigorous seven-phase forensic investigation. A complete academic monograph detailing the chronology is available in [`docs/VOYNICH_DISCOVERY_TIMELINE_AND_ARCHITECTURAL_MONOGRAPH.md`](docs/VOYNICH_DISCOVERY_TIMELINE_AND_ARCHITECTURAL_MONOGRAPH.md):

* **Phase 1: Empirical Axiom Distillation** — Establishing 10 physical ground-truth axioms from Yale Beinecke MS 408 (15th-century vellum, ink types, Currier A/B dialects, complete lack of corrections).
* **Phase 2: Anomaly Detection** — Isolating 7 irreducible statistical anomalies, including identical labels appearing in Zodiac wheels and Pharmaceutical jars despite radically different Currier statistical dialects.
* **Phase 3: The Flash of Insight** — Tammy Lou Casey recognized that the cross-sectional words were not running prose, but a cross-referencing index (the medieval equivalent of a hyperlink).
* **Phase 4: Mathematical Triad Proof** — Systematically compiling the 359 Zodiac star census and running corpus-wide cross-sectional joins, discovering 310 shared bridge tokens and 78 complete three-way triads.
* **Phase 5: The 5 Physical Medieval Finding Aids** — Identifying the physical book architecture (Rosettes foldout, edge tabs, gallows headings, jar silhouettes, and Latin month names) that allowed physical thumb-indexing.
* **Phase 6: Interactive SVG Image-Map Engineering** — Constructing a client-side vector engine with Yale Beinecke IIIF facsimiles and exact coordinate halos, allowing researchers to "see it all at once" in a synchronized 3-pane view.
* **Phase 7: Sovereign Public Ingress** — Publishing the standalone open-source repository and deploying the live platform at `https://voynich.ozark-oracle.com` with Universal SSL.

---

## Live Interactive Features

The live web application ([`https://voynich.ozark-oracle.com`](https://voynich.ozark-oracle.com)) includes:

- **"See It All At Once" Synchronized 3-Pane Split View**:
  - **Left Pane**: Celestial Zodiac Wheel (Star & Nymph coordinate)
  - **Center Pane**: Botanical Herbal Specimen (Plant illustration & recipe lines)
  - **Right Pane**: Apothecary Albarello Vessel & Recipe (Drug jar & formula)
- **Interactive SVG Vector Hotspots**:
  - Yale Beinecke MS 408 facsimiles wrapped in responsive SVG viewports with glowing vector halos placed precisely over matching terms.
- **Bi-Directional Synchronized Cross-Linking**:
  - Clicking any star hotspot automatically highlights the corresponding herb and jar.
  - Clicking any herb line or pharmaceutical vessel navigates back to the controlling star.
- **Folio Quick-Finder**:
  - Select any page (f1r through f116v) to immediately reveal every concordance symbol present on that folio.
- **Integrated Research Articles Hub**:
  - Read all original whitepapers and forensic reports directly in the browser with full formatting.
- **Interactive Discovery Timeline Modal**:
  - Step through the complete chronology and empirical breakthroughs that solved the navigation architecture of the manuscript.

---

## Published Whitepapers & Documentation

All academic papers, forensic reports, and mathematical proofs are included in the [`docs/`](docs/) directory:

1. [**Discovery Timeline & Architectural Monograph**](docs/VOYNICH_DISCOVERY_TIMELINE_AND_ARCHITECTURAL_MONOGRAPH.md) — The definitive history, seven discovery phases, and mathematical proofs.
2. [**The Iatromathematical Concordance Hypothesis**](docs/VOYNICH_IATROMATHEMATICAL_CONCORDANCE_HYPOTHESIS.md) — Core whitepaper demonstrating the 78 Melothesia Triads.
3. [**The 5 Medieval Physical Finding Aids Report**](docs/VOYNICH_MEDIEVAL_FINDING_AIDS_REPORT.md) — Codicological analysis of foldouts, edge tabs, and gallows markers.
4. [**Cross-Reference Anomaly Investigation**](docs/VOYNICH_CROSS_REFERENCE_ANOMALY_INVESTIGATION.md) — Mathematical resolution of Currier A/B dialect boundaries.

---

## Repository Structure

```
mechanical-voynich/
├── index.html                   # Standalone interactive SVG Concordance Atlas & Articles Hub
├── README.md                    # Research overview and discovery documentation
├── data/
│   ├── folio_images.json        # Yale Beinecke MS 408 high-resolution IIIF image endpoints (225 folios)
│   ├── voynich_full_text_new.txt# Complete EVA transcription corpus with line-level tags
│   └── VOYNICH_ZODIAC_STAR_CENSUS.json # 359 star labels census, signs, and radial coordinates
├── docs/
│   ├── VOYNICH_DISCOVERY_TIMELINE_AND_ARCHITECTURAL_MONOGRAPH.md # Complete 7-phase history
│   ├── VOYNICH_IATROMATHEMATICAL_CONCORDANCE_HYPOTHESIS.md  # Core whitepaper & mathematical proofs
│   ├── VOYNICH_MEDIEVAL_FINDING_AIDS_REPORT.md             # Forensic report on the 5 physical finding aids
│   └── VOYNICH_CROSS_REFERENCE_ANOMALY_INVESTIGATION.md    # Concordance anomalies & cross-sectional analysis
└── tools/
    ├── build_concordance_atlas.py      # Compiler generating index.html from raw data
    └── test_concordance_hypothesis.py  # Statistical verification & triad bridge tests
```

---

## Citation & Academic Attribution

If you utilize this concordance hypothesis, empirical census data, or interactive SVG architecture in your research, please cite:

```bibtex
@article{casey_henderson_2026_voynich,
  author    = {Tammy Lou Casey and },
  title     = {The Mechanical Voynich: The Iatromathematical Concordance Hypothesis and Physical Navigation Aids in Beinecke MS 408},
  journal   = {The Oracle Platform Codicological Intelligence Series},
  year      = {2026},
  url       = {https://voynich.ozark-oracle.com}
}
```

---

### Acknowledgments
- **Yale University Beinecke Rare Book & Manuscript Library** for high-resolution public domain digital access to MS 408.
- The **Voynich Research Community** for standardizing the EVA (European Voynich Alphabet) corpus.

