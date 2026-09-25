/**
 * THE MECHANICAL VOYNICH · MASTER BOTANICAL INDEX & DOSSIER ENGINE
 * Author: Tammy Lou Casey · Independent Codicological Research
 */
let currentBotanicalFilter = 'all';

function setBotanicalFilter(filterType) {
    currentBotanicalFilter = filterType;
    document.querySelectorAll('.btn-bot-filter').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btnBotFilter' + filterType.charAt(0).toUpperCase() + filterType.slice(1));
    if (btn) btn.classList.add('active');
    renderBotanicalGallery();
}

function renderBotanicalGallery() {
    const grid = document.getElementById('botanicalGalleryGrid');
    if (!grid) return;
    const searchInput = document.getElementById('botanicalSearchInput');
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

    const botanicalData = window.BOTANICAL_DATA || {};
    const folioImages = window.FOLIO_IMAGES_DATA || {};

    let entries = Object.values(botanicalData);
    if (currentBotanicalFilter === 'identified') {
        entries = entries.filter(e => e.status === 'IDENTIFIED');
    } else if (currentBotanicalFilter === 'imported') {
        entries = entries.filter(e => (e.compounding_posology || '').toLowerCase().includes('spice') || (e.common_name || '').toLowerCase().includes('rhubarb') || (e.common_name || '').toLowerCase().includes('ginger') || (e.common_name || '').toLowerCase().includes('spikenard'));
    } else if (currentBotanicalFilter === 'pending') {
        entries = entries.filter(e => e.status !== 'IDENTIFIED');
    }

    if (query) {
        entries = entries.filter(e =>
            e.folio.toLowerCase().includes(query) ||
            (e.binomial || '').toLowerCase().includes(query) ||
            (e.common_name || '').toLowerCase().includes(query) ||
            (e.family || '').toLowerCase().includes(query)
        );
    }

    grid.innerHTML = '';
    if (entries.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding:3rem; color:var(--text-muted);">No botanical profiles matched "${query}".</div>`;
        return;
    }

    entries.forEach(entry => {
        const cleanFolio = entry.folio.toLowerCase().replace('f', '').trim();
        const fKey = 'f' + cleanFolio;
        const facsImg = folioImages[fKey] || folioImages[cleanFolio] || 'https://collections.library.yale.edu/iiif/2/1006076/full/1024,/0/default.jpg';
        const card = document.createElement('div');
        card.className = 'botanical-card';

        const isIdentified = entry.status === 'IDENTIFIED';
        const topGuess = typeof getTopGuessForFolio === 'function' ? getTopGuessForFolio(fKey) : null;

        if (isIdentified) {
            card.innerHTML = `
                <div class="botanical-card-header">
                    <span>Folio ${fKey}</span>
                    <span class="dossier-pill identified" style="font-size:0.68rem; padding:0.15rem 0.45rem;">
                        ✓ Identified
                    </span>
                </div>
                <div class="botanical-card-img-wrap" style="display:grid; grid-template-columns:1fr 1fr; background:#000;">
                    <img src="${facsImg}" alt="${fKey} Drawing" style="height:100%; width:100%; object-fit:contain; border-right:1px solid rgba(255,255,255,0.08);" loading="lazy">
                    <img src="${entry.plant_photo || entry.root_photo}" alt="${entry.common_name}" style="height:100%; width:100%; object-fit:contain;" loading="lazy">
                </div>
                <div style="padding:0.85rem; flex:1; display:flex; flex-direction:column;">
                    <div style="font-family:'Cinzel', serif; font-size:0.95rem; font-weight:700; color:var(--gold-light); margin-bottom:0.2rem;">
                        ${entry.common_name}
                    </div>
                    <div style="font-size:0.8rem; font-style:italic; color:var(--cyan-astro); margin-bottom:0.4rem;">
                        ${entry.binomial} (${entry.family})
                    </div>
                    <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.75rem; flex:1;">
                        ${(entry.root_diagnosis || '').substring(0, 115)}...
                    </div>
                    <div style="display:flex; gap:0.35rem;">
                        <button class="btn-action btn-highlight" onclick="openBotanicalDossier('${fKey}')" style="flex:1; justify-content:center; padding:0.35rem; font-size:0.75rem;">
                            Inspect Photos
                        </button>
                        <button class="btn-action" onclick="if(typeof loadPageMap==='function'){loadPageMap('${fKey}'); closeModal('botanicalGalleryModal'); openPageMapExplorer();}else{window.location.href='page-map.html?f=${fKey}';}" style="padding:0.35rem 0.5rem; font-size:0.75rem;" title="Page Map">
                            🗺️
                        </button>
                        <button class="btn-action" onclick="openSponsorModal()" style="padding:0.35rem 0.5rem; font-size:0.75rem; border-color:var(--gold); color:var(--gold-light);" title="Sponsor Folio Research ($5)">
                            ☕ $5
                        </button>
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="botanical-card-header">
                    <span>Folio ${fKey}</span>
                    <span class="dossier-pill pending" style="font-size:0.68rem; padding:0.15rem 0.45rem; background:rgba(212,175,55,0.15); border-color:var(--gold); color:var(--gold-light);">
                        🔬 Community Challenge
                    </span>
                </div>
                <div class="botanical-card-img-wrap" style="display:grid; grid-template-columns:1fr 1fr; background:#000;">
                    <img src="${facsImg}" alt="${fKey} Drawing" style="height:100%; width:100%; object-fit:contain; border-right:1px solid rgba(255,255,255,0.08);" loading="lazy">
                    <div class="community-guess-thumb">
                        <div>
                            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.3rem;">
                                <span style="font-size:0.65rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:0.04em;">💡 Top Guess</span>
                                <span class="guess-rank-badge">${topGuess ? topGuess.votes : 0} votes</span>
                            </div>
                            <div style="font-family:'Cinzel', serif; font-weight:700; color:#fff; font-size:0.8rem; line-height:1.2; margin-bottom:0.2rem;">
                                ${topGuess ? topGuess.genus + ' ' + topGuess.species : 'Open Simplex'}
                            </div>
                            <div style="font-size:0.68rem; color:var(--cyan-astro); font-style:italic; margin-bottom:0.35rem;">
                                ${topGuess ? topGuess.vernacular : 'No consensus yet'}
                            </div>
                            <div style="font-size:0.65rem; color:var(--text-muted); line-height:1.3; margin-bottom:0.4rem;">
                                <strong>Traits:</strong> ${topGuess ? topGuess.traits.slice(0, 2).join(', ') : 'Awaiting candidate'}
                            </div>
                        </div>
                        <div style="display:flex; gap:0.3rem; margin-top:auto;">
                            <button class="btn-agree" onclick="upvoteBestGuess('${fKey}', event)" style="flex:1; background:rgba(52,211,153,0.15); border:1px solid rgba(52,211,153,0.4); color:#34d399; font-size:0.68rem; padding:0.25rem 0.4rem; border-radius:4px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:0.2rem;" title="Upvote top hypothesis">
                                <span>▲</span> Agree
                            </button>
                            <button class="btn-propose" onclick="openBestGuessModal('${fKey}')" style="flex:1; background:rgba(212,175,55,0.15); border:1px solid rgba(212,175,55,0.4); color:var(--gold-light); font-size:0.68rem; padding:0.25rem 0.4rem; border-radius:4px; cursor:pointer; font-weight:600; display:flex; align-items:center; justify-content:center; gap:0.2rem;" title="Propose new guess">
                                <span>💡</span> Guess
                            </button>
                        </div>
                    </div>
                </div>
                <div style="padding:0.85rem; flex:1; display:flex; flex-direction:column;">
                    <div style="font-family:'Cinzel', serif; font-size:0.95rem; font-weight:700; color:var(--gold-light); margin-bottom:0.2rem;">
                        ${entry.common_name}
                    </div>
                    <div style="font-size:0.8rem; font-style:italic; color:var(--cyan-astro); margin-bottom:0.4rem;">
                        ${entry.binomial}
                    </div>
                    <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.4; margin-bottom:0.75rem; flex:1;">
                        ${(entry.root_diagnosis || '').substring(0, 115)}...
                    </div>
                    <div style="display:flex; gap:0.35rem;">
                        <button class="btn-action btn-highlight" onclick="openBestGuessModal('${fKey}')" style="flex:1; justify-content:center; padding:0.35rem; font-size:0.75rem;">
                            💡 What's Your Guess?
                        </button>
                        <button class="btn-action" onclick="openBotanicalDossier('${fKey}')" style="padding:0.35rem 0.45rem; font-size:0.75rem;" title="Inspect Folio Drawing">
                            🔍
                        </button>
                        <button class="btn-action" onclick="if(typeof loadPageMap==='function'){loadPageMap('${fKey}'); closeModal('botanicalGalleryModal'); openPageMapExplorer();}else{window.location.href='page-map.html?f=${fKey}';}" style="padding:0.35rem 0.45rem; font-size:0.75rem;" title="Page Map">
                            🗺️
                        </button>
                        <button class="btn-action" onclick="openSponsorModal()" style="padding:0.35rem 0.45rem; font-size:0.75rem; border-color:var(--gold); color:var(--gold-light);" title="Sponsor Folio Research ($5)">
                            ☕ $5
                        </button>
                    </div>
                </div>
            `;
        }

        grid.appendChild(card);
    });
}

function openBotanicalGallery() {
    const modal = document.getElementById('botanicalGalleryModal');
    if (modal) {
        modal.classList.add('active');
        renderBotanicalGallery();
    } else {
        window.location.href = 'botanical.html';
    }
}

function openBotanicalCatalog() {
    openBotanicalGallery();
}

function openBotanicalDossier(folio, focusZone) {
    const cleanFolio = String(folio).toLowerCase().replace('f', '').trim();
    const fKey = 'f' + cleanFolio;
    const botanicalData = window.BOTANICAL_DATA || {};
    const folioImages = window.FOLIO_IMAGES_DATA || {};
    const entry = botanicalData[fKey] || botanicalData[cleanFolio] || null;
    if (!entry) return;

    const titleEl = document.getElementById('botanicalDossierTitle');
    if (titleEl) {
        titleEl.innerHTML = `<span>🌿</span> Forensic Botanical Identification Dossier · Folio ${fKey}`;
    }

    const facsImg = folioImages[fKey] || folioImages[cleanFolio] || 'https://collections.library.yale.edu/iiif/2/1006076/full/1024,/0/default.jpg';
    const isPending = entry.status !== 'IDENTIFIED';

    const modalBody = document.getElementById('botanicalDossierBody');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="dossier-grid">
                <div>
                    <div style="font-size:0.78rem; text-transform:uppercase; color:var(--gold); margin-bottom:0.4rem; font-weight:700;">
                        1. Yale MS 408 High-Res Facsimile (${fKey})
                    </div>
                    <div class="dossier-img-card">
                        <img src="${facsImg}" alt="${fKey} Drawing">
                    </div>
                </div>
                <div>
                    <div style="font-size:0.78rem; text-transform:uppercase; color:var(--cyan-astro); margin-bottom:0.4rem; font-weight:700;">
                        2. Verified Botanical Photograph (${entry.common_name})
                    </div>
                    <div class="dossier-img-card">
                        <img src="${entry.plant_photo || entry.root_photo}" alt="${entry.common_name}">
                    </div>
                </div>
                <div>
                    <div style="font-size:0.78rem; text-transform:uppercase; color:var(--emerald-herbal); margin-bottom:0.4rem; font-weight:700;">
                        3. Microscopic Root / Specimen Morphology
                    </div>
                    <div class="dossier-img-card">
                        <img src="${entry.root_photo || entry.plant_photo}" alt="${entry.common_name} Root">
                    </div>
                </div>
            </div>

            <div style="margin-top:1.5rem; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:1.25rem;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
                    <div>
                        <h2 style="font-family:'Cinzel', serif; color:var(--gold-light); margin:0 0 0.2rem 0; font-size:1.4rem;">
                            ${entry.common_name}
                        </h2>
                        <div style="font-size:0.95rem; font-style:italic; color:var(--cyan-astro);">
                            ${entry.binomial} (${entry.family})
                        </div>
                    </div>
                    <span class="dossier-pill ${isPending ? 'pending' : 'identified'}">
                        ${isPending ? '🔬 Unresolved Simplex (Community Challenge)' : '✓ Verified Identification'}
                    </span>
                </div>

                <div style="font-size:0.88rem; line-height:1.6; color:#e2e8f0; margin-bottom:1rem;">
                    <strong style="color:var(--gold);">Codicological Diagnosis:</strong> ${entry.root_diagnosis}
                </div>

                <div style="background:rgba(255,255,255,0.02); border-left:3px solid var(--emerald-herbal); padding:0.75rem 1rem; border-radius:4px; font-size:0.84rem; color:#cbd5e1;">
                    <strong style="color:#fff;">Galenic Compounding & Posology:</strong> ${entry.compounding_posology || 'Apothecary Simplex used in classical compounding.'}
                </div>
            </div>
        `;
    }

    const modal = document.getElementById('botanicalDossierModal');
    if (modal) modal.classList.add('active');
}

// Window Exports
window.setBotanicalFilter = setBotanicalFilter;
window.renderBotanicalGallery = renderBotanicalGallery;
window.openBotanicalGallery = openBotanicalGallery;
window.openBotanicalCatalog = openBotanicalCatalog;
window.openBotanicalDossier = openBotanicalDossier;
