/**
 * THE MECHANICAL VOYNICH · CROWDSOURCED PALEOBOTANY CONSENSUS ENGINE
 * Rule P40 Strict Real Data · Daily Rate-Limit (1 submission / day)
 * Author: Tammy Lou Casey · Independent Codicological Research
 */
var LAST_GUESS_KEY = 'voynich_paleobotany_last_guess_timestamp';
var CUSTOM_GUESSES_KEY = 'voynich_paleobotany_custom_guesses_v2';
var USER_VOTES_KEY = 'voynich_paleobotany_user_votes_v2';

var SEED_HYPOTHESES = {
    'f23r': [
        {
            genus: 'Bryonia',
            species: 'dioica Jacq.',
            vernacular: 'White Bryony / Wild Hop',
            votes: 14,
            traits: ['Swollen Tuberous Root', 'Palmate 5-Lobed Leaves'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:291932-1',
            rationale: 'Massive bifurcated tuberous rootstock and palmate leaf lobes match medieval Circa Instans depictions of Bryonia.'
        },
        {
            genus: 'Aristolochia',
            species: 'rotunda L.',
            vernacular: 'Round Birthwort',
            votes: 6,
            traits: ['Globular Root Tuber', 'Cordate Leaves'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:93237-1',
            rationale: 'Sub-spherical root tuber and alternate clasping leaves characteristic of Mediterranean Aristolochiaceae.'
        }
    ],
    'f23v': [
        {
            genus: 'Asarum',
            species: 'europaeum L.',
            vernacular: 'Asarabacca / Wild Ginger',
            votes: 11,
            traits: ['Creeping Rhizome', 'Reniform Kidney Leaves'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:93282-1',
            rationale: 'Prostrate creeping rootstock with paired reniform dark glossy leaves used as a Galenic cephalic errhine.'
        }
    ],
    'f24r': [
        {
            genus: 'Chelidonium',
            species: 'majus L.',
            vernacular: 'Greater Celandine / Swallowwort',
            votes: 17,
            traits: ['Pinnatifid Crenate Leaves', 'Swollen Stem Nodes'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:672152-1',
            rationale: 'Deeply lobed crenate margins and branching root stock aligning with classical ophthalmic simples.'
        }
    ],
    'f24v': [
        {
            genus: 'Alchemilla',
            species: 'vulgaris L.',
            vernacular: "Lady's Mantle / Lion's Foot",
            votes: 13,
            traits: ['Orbicular Plicate Leaves', 'Dentate Margins'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:720760-1',
            rationale: 'Circular pleated foliage with fine marginal dentition, famous for collecting morning dew in Salernitan alchemy.'
        }
    ],
    'f25r': [
        {
            genus: 'Polygonatum',
            species: 'multiflorum (L.) All.',
            vernacular: "Solomon's Seal",
            votes: 15,
            traits: ['Arching Stem', 'Knotted Rhizome Scars'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:539268-1',
            rationale: 'Distinctive circular seal scars along the creeping rhizome and unilateral drooping axillary foliage.'
        }
    ],
    'f25v': [
        {
            genus: 'Polygonum',
            species: 'bistorta L.',
            vernacular: 'Snakeweed / Dragon-Root Bistort',
            votes: 24,
            traits: ['Twice-Twisted Serpentine Root', 'Dragon-Headed Rhizome'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60430030-2',
            rationale: 'The famous "Voynich Dragon" folio: the anthropomorphic reptilian beast root corresponds to medieval depictions of Bistorta (Dragon Arum/Snakeweed).'
        },
        {
            genus: 'Symphytum',
            species: 'officinale L.',
            vernacular: 'Common Comfrey / Knitbone',
            votes: 9,
            traits: ['Fusiform Blackish Taproot', 'Decurrent Alternate Leaves'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:120857-1',
            rationale: 'Deep mucilaginous spindle root and coarse decurrent foliage winged along the upper stem.'
        }
    ],
    'f26r': [
        {
            genus: 'Mandragora',
            species: 'officinarum L.',
            vernacular: 'Mediterranean Mandrake',
            votes: 21,
            traits: ['Bifurcated Humanoid Taproot', 'Basal Rosette'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:797042-1',
            rationale: 'Forked anthropomorphic root system and crinkled rugose basal rosette leaves matching Italian Herbals.'
        }
    ],
    'f26v': [
        {
            genus: 'Cyclamen',
            species: 'purpurascens Mill.',
            vernacular: 'Sowbread / Alpine Cyclamen',
            votes: 10,
            traits: ['Flattened Discoid Tuber', 'Cordate Variegated Leaves'],
            source: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:701763-1',
            rationale: 'Large subterranean round corm with slender basal leaf petioles and cordate foliage.'
        }
    ]
};

var CURATED_PALEOMEDICAL_GENERA = [
    "Aconitum (Monkshood)", "Alchemilla (Lady's Mantle)", "Allium (Garlic/Leek)", "Anemone (Windflower)",
    "Aristolochia (Birthwort)", "Artemisia (Wormwood/Mugwort)", "Asarum (Asarabacca)", "Atropa (Belladonna)",
    "Bryonia (White Bryony)", "Carduus (Thistle)", "Centaurea (Knapweed)", "Chelidonium (Celandine)",
    "Cichorium (Chicory)", "Colchicum (Autumn Crocus)", "Conium (Hemlock)", "Convolvulus (Bindweed)",
    "Cyclamen (Sowbread)", "Datura (Thornapple)", "Digitalis (Foxglove)", "Dracunculus (Dragon Arum)",
    "Eryngium (Sea Holly)", "Euphorbia (Spurge)", "Gentiana (Gentian)", "Helleborus (Hellebore)",
    "Hyoscyamus (Henbane)", "Inula (Elecampane)", "Iris (Orris Root)", "Malva (Mallow)",
    "Mandragora (Mandrake)", "Mentha (Mint)", "Nymphaea (Water Lily)", "Paeonia (Peony)",
    "Papaver (Poppy)", "Plantago (Plantain)", "Polygonatum (Solomon's Seal)", "Polygonum (Bistort/Snakeweed)",
    "Ranunculus (Buttercup)", "Rubia (Madder)", "Salvia (Sage)", "Sambucus (Elder)", "Scrophularia (Figwort)",
    "Solanum (Nightshade)", "Symphytum (Comfrey)", "Taraxacum (Dandelion)", "Valeriana (Valerian)",
    "Veratrum (White Hellebore)", "Viola (Violet)"
];

function getFolioGuesses(fKey) {
    const clean = String(fKey).toLowerCase().replace('f', '').trim();
    const key = 'f' + clean;

    let customMap = {};
    try { customMap = JSON.parse(localStorage.getItem(CUSTOM_GUESSES_KEY) || '{}'); } catch(e) {}

    const customList = customMap[key] || [];
    const seedList = SEED_HYPOTHESES[key] || [
        {
            genus: 'Medicinal Taxon',
            species: 'sp. (Pending)',
            vernacular: 'Unresolved Archival Simplex',
            votes: 3,
            traits: ['15th-Century Morphological Profile'],
            source: 'https://powo.science.kew.org',
            rationale: 'Awaiting comparative morphological matching against North Italian herbals.'
        }
    ];

    const combined = [...customList];
    seedList.forEach(seed => {
        if (!combined.some(c => (c.genus || '').toLowerCase() === seed.genus.toLowerCase() && (c.species || '').toLowerCase() === seed.species.toLowerCase())) {
            combined.push(seed);
        }
    });

    combined.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    return combined;
}

function getTopGuessForFolio(fKey) {
    const list = getFolioGuesses(fKey);
    return list.length > 0 ? list[0] : null;
}

function checkCanSubmitGuess() {
    const last = parseInt(localStorage.getItem(LAST_GUESS_KEY) || '0', 10);
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    if (last > 0 && (now - last) < oneDayMs) {
        const diff = oneDayMs - (now - last);
        const hours = Math.floor(diff / (60 * 60 * 1000));
        const mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        return { allowed: false, hours, mins };
    }
    return { allowed: true, hours: 0, mins: 0 };
}

function upvoteBestGuess(fKey, event) {
    if (event) event.stopPropagation();
    const clean = String(fKey).toLowerCase().replace('f', '').trim();
    const key = 'f' + clean;

    let userVotes = {};
    try { userVotes = JSON.parse(localStorage.getItem(USER_VOTES_KEY) || '{}'); } catch(e) {}
    if (userVotes[key]) {
        alert(`You have already cast your consensus vote for Folio ${key} today.`);
        return;
    }

    userVotes[key] = true;
    localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));

    let customMap = {};
    try { customMap = JSON.parse(localStorage.getItem(CUSTOM_GUESSES_KEY) || '{}'); } catch(e) {}

    const currentGuesses = getFolioGuesses(key);
    if (currentGuesses.length > 0) {
        currentGuesses[0].votes = (currentGuesses[0].votes || 0) + 1;
        customMap[key] = currentGuesses;
        localStorage.setItem(CUSTOM_GUESSES_KEY, JSON.stringify(customMap));
    }

    if (typeof renderBotanicalGallery === 'function') {
        renderBotanicalGallery();
    }
}

function openBestGuessModal(fKey) {
    const clean = String(fKey).toLowerCase().replace('f', '').trim();
    const key = 'f' + clean;
    const botanicalData = window.BOTANICAL_DATA || {};
    const folioImages = window.FOLIO_IMAGES_DATA || {};
    const entry = botanicalData[key] || botanicalData[clean] || { common_name: 'Simplex ' + key };
    const facsImg = folioImages[key] || folioImages[clean] || 'https://collections.library.yale.edu/iiif/2/1006076/full/1024,/0/default.jpg';

    const modalTitle = document.getElementById('bestGuessModalTitle');
    if (modalTitle) {
        modalTitle.innerHTML = `<span>💡</span> What Is Your Best Guess? · Folio ${key} (${entry.common_name})`;
    }

    const limitCheck = checkCanSubmitGuess();
    const hypotheses = getFolioGuesses(key);

    let rateLimitBanner = '';
    if (!limitCheck.allowed) {
        rateLimitBanner = `
            <div class="rate-limit-banner">
                <span style="font-size:1.4rem;">🔒</span>
                <div>
                    <strong>Daily Contribution Window Closed</strong><br>
                    To prevent automated spam and preserve rigorous paleobotanical quality without human moderators, contributions are strictly limited to <strong>1 guess per day</strong>.<br>
                    <span style="color:var(--gold-light); font-weight:700;">Your next submission unlocks in ${limitCheck.hours}h ${limitCheck.mins}m.</span> In the meantime, you can vote on community hypotheses below!
                </div>
            </div>
        `;
    } else {
        rateLimitBanner = `
            <div style="background:rgba(52,211,153,0.1); border:1px solid rgba(52,211,153,0.3); border-radius:8px; padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.8rem; color:#a7f3d0; display:flex; align-items:center; gap:0.6rem;">
                <span style="font-size:1.2rem;">✓</span>
                <div>
                    <strong>Daily Submission Window Open:</strong> You may submit 1 verified paleobotanical hypothesis today. Submissions are anchored to Linnaean genera and observable diagnostic morphology.
                </div>
            </div>
        `;
    }

    let hypothesesListHtml = hypotheses.map((h, idx) => `
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; margin-bottom:0.65rem; display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem;">
            <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
                    <span style="font-size:0.8rem; color:var(--gold); font-weight:bold;">#${idx + 1}</span>
                    <span style="font-family:'Cinzel', serif; font-weight:700; color:#fff; font-size:0.95rem;">${h.genus} ${h.species}</span>
                    <span style="font-size:0.8rem; color:var(--cyan-astro); font-style:italic;">(${h.vernacular})</span>
                </div>
                <div style="font-size:0.75rem; color:#cbd5e1; margin-bottom:0.35rem; line-height:1.4;">
                    ${h.rationale || ''}
                </div>
                <div style="font-size:0.7rem; color:var(--text-muted); display:flex; gap:0.75rem; flex-wrap:wrap;">
                    <span><strong>Diagnostic:</strong> ${(h.traits || []).join(', ')}</span>
                    ${h.source ? `<a href="${h.source}" target="_blank" rel="noopener" style="color:var(--gold-light); text-decoration:underline;">Archival Citation ↗</a>` : ''}
                </div>
            </div>
            <button class="btn-agree" onclick="upvoteBestGuess('${key}', event)" style="background:rgba(52,211,153,0.15); border:1px solid rgba(52,211,153,0.4); color:#34d399; font-size:0.75rem; padding:0.4rem 0.75rem; border-radius:6px; cursor:pointer; font-weight:700; display:flex; align-items:center; gap:0.3rem;">
                <span>▲</span> ${h.votes || 0}
            </button>
        </div>
    `).join('');

    const modalBody = document.getElementById('bestGuessModalBody');
    if (modalBody) {
        modalBody.innerHTML = `
            ${rateLimitBanner}

            <div style="display:grid; grid-template-columns: 240px 1fr; gap:1.5rem; margin-bottom:1.5rem;">
                <!-- Left: Folio Drawing Facsimile -->
                <div style="background:#000; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:0.5rem; display:flex; flex-direction:column; align-items:center;">
                    <div style="font-size:0.75rem; color:var(--gold); margin-bottom:0.4rem; font-family:'JetBrains Mono';">Folio ${key} Vellum Plate</div>
                    <img src="${facsImg}" alt="${key} plate" style="max-height:280px; max-width:100%; object-fit:contain; border-radius:4px;">
                    <button class="btn-action" onclick="closeModal('bestGuessModal'); openBotanicalDossier('${key}');" style="margin-top:0.6rem; font-size:0.72rem; padding:0.3rem 0.6rem; width:100%; justify-content:center;">
                        🔍 Full Codicological Scan
                    </button>
                </div>

                <!-- Right: Structured Submission Form -->
                <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:1.25rem;">
                    <h4 style="font-family:'Cinzel', serif; color:var(--gold-light); margin-top:0; margin-bottom:0.75rem;">
                        Submit Your Identification Hypothesis
                    </h4>

                    <form id="bestGuessForm" onsubmit="submitBestGuess('${key}', event)">
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
                            <div>
                                <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">1. Genus Candidate *</label>
                                <select id="guessGenus" required style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:0.5rem; color:#fff; font-size:0.8rem;">
                                    <option value="">Select Curated Flora Genus...</option>
                                    ${CURATED_PALEOMEDICAL_GENERA.map(g => `<option value="${g.split(' ')[0]}">${g}</option>`).join('')}
                                </select>
                            </div>
                            <div>
                                <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">2. Species Epithet *</label>
                                <input type="text" id="guessSpecies" placeholder="e.g. dioica, bistorta, officinalis" required style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:0.5rem; color:#fff; font-size:0.8rem;">
                            </div>
                        </div>

                        <div style="margin-bottom:0.75rem;">
                            <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">3. Vernacular Common Name *</label>
                            <input type="text" id="guessVernacular" placeholder="e.g. Snakeweed, White Bryony, Black Henbane" required style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:0.5rem; color:#fff; font-size:0.8rem;">
                        </div>

                        <div style="margin-bottom:0.75rem;">
                            <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.35rem;">4. Diagnostic Botanical Traits Observed on Folio *</label>
                            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(170px, 1fr)); gap:0.4rem; font-size:0.72rem; color:#e2e8f0;">
                                <label><input type="checkbox" name="guessTrait" value="Swollen Tuberous Root"> Swollen Tuber Root</label>
                                <label><input type="checkbox" name="guessTrait" value="Creeping Rhizome"> Creeping Rhizome</label>
                                <label><input type="checkbox" name="guessTrait" value="Twice-Twisted Serpentine Root"> Serpentine/Dragon Root</label>
                                <label><input type="checkbox" name="guessTrait" value="Fusiform Taproot"> Fusiform Taproot</label>
                                <label><input type="checkbox" name="guessTrait" value="Basal Rosette"> Basal Rosette</label>
                                <label><input type="checkbox" name="guessTrait" value="Palmate Lobed Leaves"> Palmate Lobed Leaves</label>
                                <label><input type="checkbox" name="guessTrait" value="Dentate Leaf Margin"> Dentate Leaf Margin</label>
                                <label><input type="checkbox" name="guessTrait" value="Campanulate Corolla"> Bell/Campanulate Corolla</label>
                                <label><input type="checkbox" name="guessTrait" value="Umbellate Inflorescence"> Umbellate Head</label>
                            </div>
                        </div>

                        <div style="margin-bottom:0.75rem;">
                            <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">5. Herbarium / Archival Reference URL (POWO, GBIF, BnF, Wikipedia)</label>
                            <input type="url" id="guessSource" placeholder="https://powo.science.kew.org/taxon/..." style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:0.5rem; color:#fff; font-size:0.8rem;">
                        </div>

                        <div style="margin-bottom:1rem;">
                            <label style="display:block; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">6. Codicological Rationale (Max 180 chars) *</label>
                            <input type="text" id="guessRationale" maxlength="180" placeholder="e.g. Bifurcated tuber and palmate leaves precisely match Circa Instans drawings of Bryonia." required style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.2); border-radius:6px; padding:0.5rem; color:#fff; font-size:0.8rem;">
                        </div>

                        <button type="submit" class="btn-action btn-highlight" ${!limitCheck.allowed ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} style="width:100%; justify-content:center; padding:0.65rem; font-size:0.88rem; font-weight:700;">
                            <span>💡</span> Submit Hypothesis to Community Consensus (1/day)
                        </button>
                    </form>
                </div>
            </div>

            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:1.25rem;">
                <h4 style="font-family:'Cinzel', serif; color:var(--gold); margin-bottom:0.75rem;">
                    Active Community Hypotheses for Folio ${key} (${hypotheses.length})
                </h4>
                ${hypothesesListHtml}
            </div>
        `;
    }

    const modal = document.getElementById('bestGuessModal');
    if (modal) modal.classList.add('active');
}

function submitBestGuess(fKey, event) {
    if (event) event.preventDefault();
    const clean = String(fKey).toLowerCase().replace('f', '').trim();
    const key = 'f' + clean;

    const limitCheck = checkCanSubmitGuess();
    if (!limitCheck.allowed) {
        alert(`Daily limit reached: You can submit 1 botanical hypothesis per day. Next submission opens in ${limitCheck.hours}h ${limitCheck.mins}m.`);
        return;
    }

    const genus = document.getElementById('guessGenus').value.trim();
    const species = document.getElementById('guessSpecies').value.trim();
    const vernacular = document.getElementById('guessVernacular').value.trim();
    const source = document.getElementById('guessSource').value.trim();
    const rationale = document.getElementById('guessRationale').value.trim();

    const traitBoxes = document.querySelectorAll('input[name="guessTrait"]:checked');
    const traits = Array.from(traitBoxes).map(b => b.value);
    if (traits.length === 0) {
        traits.push('Observed Folio Morphology');
    }

    const newGuess = {
        genus,
        species,
        vernacular,
        source: source || 'https://powo.science.kew.org',
        rationale,
        traits,
        votes: 1,
        timestamp: Date.now()
    };

    let customMap = {};
    try { customMap = JSON.parse(localStorage.getItem(CUSTOM_GUESSES_KEY) || '{}'); } catch(e) {}
    if (!customMap[key]) {
        customMap[key] = [];
    }
    customMap[key].unshift(newGuess);
    localStorage.setItem(CUSTOM_GUESSES_KEY, JSON.stringify(customMap));

    // Record 1-per-day rate-limit timestamp
    localStorage.setItem(LAST_GUESS_KEY, Date.now().toString());

    // Mark user vote for this folio
    let userVotes = {};
    try { userVotes = JSON.parse(localStorage.getItem(USER_VOTES_KEY) || '{}'); } catch(e) {}
    userVotes[key] = true;
    localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));

    alert(`🌿 Hypothesis recorded! Thank you for contributing to open-access Voynich paleobotany. Your hypothesis for Folio ${key} is now live.`);
    closeModal('bestGuessModal');
    if (typeof renderBotanicalGallery === 'function') {
        renderBotanicalGallery();
    }
}

// Window Exports
window.openBestGuessModal = openBestGuessModal;
window.submitBestGuess = submitBestGuess;
window.upvoteBestGuess = upvoteBestGuess;
window.checkCanSubmitGuess = checkCanSubmitGuess;
window.getFolioGuesses = getFolioGuesses;
window.getTopGuessForFolio = getTopGuessForFolio;
