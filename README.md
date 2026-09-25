<!-- GOAL: The Mechanical Voynich Public Repository Documentation. Mother May I. -->
# The Mechanical Voynich
### Interactive SVG Image Map Concordance Atlas & Iatromathematical Triad Engine

**Lead Researchers & Architects**: Tammy Lou Casey & Bailey Henderson  
*The Oracle Platform · Codicological Biophysics & Manuscript Intelligence*

---

## 🌟 Overview & Groundbreaking Discovery

For over a century, cryptographers and linguists treated the **Voynich Manuscript (Yale Beinecke MS 408)** as either an encrypted cipher or an unknown natural language. The **Iatromathematical Concordance Hypothesis** demonstrates that the recurring cross-sectional vocabulary (`otal`, `okaly`, `okeody`, `am`, `ar`, `otaiin`) is an **ergonomically engineered 15th-century hyperlinking concordance system**:

1. **The Software Hyperlinks**: 
   - Words labeling celestial stars held by nymphs in the Zodiac medallions recur identically in the textual recipes of specific Herbal plants and directly upon the albarelli drug jars in the Pharmaceutical section.
   - These **310 Triad Bridge Tokens** and **78 Full Melothesia Triads** explicitly connect astrological timing, botanical harvesting, and alchemical compounding.
2. **The Hardware Finding Aids**:
   - Before modern page numbers existed, medieval readers navigated this multi-section manual using five tactile physical mechanisms:
     - **The 6-Panel Rosettes Foldout (f85r–f86v)** as the master table of contents.
     - **Quire Collation & Foldout Edge Tabs** (Quires 9, 10, 14 pop open naturally in the hands).
     - **Line-Initial Gallows Characters (`p, t, k, f`)** (74.7% of folios) acting as visual paragraph index tabs.
     - **Marginal Albarelli Silhouettes** enabling rapid visual skimming without reading running text.
     - **Contemporary 15th-Century Latin Month Annotations** (*marz, abril, mayo...*) indexing seasonal entry points.

---

## 🚀 Live Interactive SVG Application

The repository includes a self-contained, client-side **SVG Image Map Concordance Atlas** ([`index.html`](index.html)):

- **"See It All At Once" 3-Pane Split Screen**:
  - **Pane 1**: 🌟 Celestial Zodiac Star Wheel (Zodiac Star & Nymph)
  - **Pane 2**: 🌿 Botanical Herbal Specimen (Plant root/leaf & textual lines)
  - **Pane 3**: 🏺 Apothecary Albarello Vessel & Recipe (Drug jar & compounding formula)
- **Interactive SVG Vector Hotspots**:
  - High-resolution facsimiles from Yale University's Beinecke Rare Book & Manuscript Library wrapped in responsive `<svg>` viewports with pulsing vector halos (`<circle>`, `<text>`) plotted on the exact coordinates of the words.
- **Synchronized Reciprocal Cross-Linking**:
  - Clicking any star hotspot immediately jumps and highlights the matching plant and jar.
  - Clicking any plant text or jar label links back to the star in real time.
- **Folio Quick-Finder & Reverse Concordance Lookup**:
  - Select any page (f1r through f116v) to discover every concordance symbol present on that folio.
- **Independent Zoom & Pan**:
  - Inspect fine parchment strokes with smooth mouse-wheel zooming (0.6× to 5.0×) and drag-panning across all 225 folios.

---

## 📂 Repository Structure

```
mechanical-voynich/
├── index.html                   # Complete standalone interactive SVG Concordance Atlas
├── README.md                    # Research overview and codicological documentation
├── data/
│   ├── folio_images.json        # Yale Beinecke MS 408 high-resolution IIIF image endpoints (225 folios)
│   ├── voynich_full_text_new.txt# Complete EVA transcription corpus with line-level tags
│   └── VOYNICH_ZODIAC_STAR_CENSUS.json # 359 star labels census, signs, and radial coordinates
├── docs/
│   ├── VOYNICH_IATROMATHEMATICAL_CONCORDANCE_HYPOTHESIS.md  # Core whitepaper & mathematical proofs
│   ├── VOYNICH_MEDIEVAL_FINDING_AIDS_REPORT.md             # Forensic report on the 5 physical finding aids
│   └── VOYNICH_CROSS_REFERENCE_ANOMALY_INVESTIGATION.md    # Concordance anomalies & cross-sectional analysis
└── tools/
    ├── build_concordance_atlas.py      # Python compiler generating index.html from raw data
    └── test_concordance_hypothesis.py  # Statistical verification & triad bridge tests
```

---

## 💻 Running Locally

Simply open [`index.html`](index.html) in any modern web browser (Chrome, Edge, Firefox, Safari).  
No build steps, node modules, or local servers are required. High-resolution facsimiles are streamed dynamically via the Yale University IIIF API.

---

## 📜 Citation & Academic Attribution

If you utilize this concordance hypothesis, empirical census data, or interactive SVG architecture in your research, please cite:

```bibtex
@article{casey_henderson_2026_voynich,
  author    = {Tammy Lou Casey and Bailey Henderson},
  title     = {The Mechanical Voynich: The Iatromathematical Concordance Hypothesis and Physical Navigation Aids in Beinecke MS 408},
  journal   = {The Oracle Platform Codicological Intelligence Series},
  year      = {2026},
  url       = {https://github.com/enchantedcostumes-debug/mechanical-voynich}
}
```

---

### Acknowledgments
- **Yale University Beinecke Rare Book & Manuscript Library** for high-resolution public domain digital access to MS 408.
- The **Voynich Research Community** for standardizing the EVA (European Voynich Alphabet) corpus.
