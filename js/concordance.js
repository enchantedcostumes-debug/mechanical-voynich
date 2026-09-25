/**
 * THE MECHANICAL VOYNICH · CONCORDANCE TRIAD ATLAS ENGINE
 * Author: Tammy Lou Casey · Independent Codicological Research
 */
let activeToken = 'otaiin';
let currentFilter = 'all';
let currentFinderTab = 'anchors';

const zoomStates = {
    astro: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
    herbal: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
    pharma: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 }
};

function selectToken(token) {
    activeToken = token;
    const atlasData = window.ATLAS_DATA || [];
    const entry = atlasData.find(e => e.token === token) || atlasData[0];
    if (!entry) return;

    // Update Token Title & Badges
    const titleEl = document.getElementById('activeTokenTitle');
    if (titleEl) {
        titleEl.innerHTML = `
            <span>Active Anchor:</span>
            <span style="color:var(--gold); font-family:'JetBrains Mono';">${entry.token}</span>
            <span class="badge" id="triadStatusBadge">${entry.is_triad ? 'Full Triad' : 'Concordance Anchor'}</span>
        `;
    }

    const descEl = document.getElementById('activeTokenDesc');
    if (descEl) {
        descEl.textContent = `Connecting ${entry.star_count} Celestial Stars to ${entry.herbal_count} Herbal Botanical Species and ${entry.pharma_count} Apothecary Formulations.`;
    }

    const totalBadge = document.getElementById('activeTokenTotalBadge');
    if (totalBadge) {
        totalBadge.textContent = `${entry.total_freq} Corpus Occurrences`;
    }

    // Render Zodiac Celestial Star Pane
    const astroImg = document.getElementById('astroImg');
    const astroSvg = document.getElementById('astroSvg');
    const astroBadge = document.getElementById('astroBadge');

    if (entry.stars.length > 0) {
        const star = entry.stars[0];
        if (astroImg) astroImg.src = star.img_url;
        if (astroBadge) astroBadge.textContent = `${star.folio} · ${star.sign} (${star.month || 'Zodiac'})`;

        if (astroSvg) {
            astroSvg.innerHTML = `
                <circle cx="${star.cx}" cy="${star.cy}" r="38" class="astro-star-circle" />
                <text x="${star.cx}" y="${star.cy - 45}" class="svg-label-bg">${entry.token}</text>
                <text x="${star.cx}" y="${star.cy - 45}" class="svg-label">${entry.token}</text>
            `;
        }
    }

    // Render Herbal Botanical Pane
    const herbalImg = document.getElementById('herbalImg');
    const herbalSvg = document.getElementById('herbalSvg');
    const herbalBadge = document.getElementById('herbalBadge');

    if (entry.herbal.length > 0) {
        const herb = entry.herbal[0];
        if (herbalImg) herbalImg.src = herb.img_url;
        if (herbalBadge) herbalBadge.textContent = `Folio ${herb.folio} (${herb.count}x in text)`;

        if (herbalSvg) {
            let svgMarkup = '';
            herb.hotspots.forEach(h => {
                svgMarkup += `
                    <circle cx="${h.x}" cy="${h.y}" r="22" class="hotspot-pulse" />
                    <text x="${h.x}" y="${h.y - 26}" class="svg-label">${entry.token}</text>
                `;
            });
            herbalSvg.innerHTML = svgMarkup;
        }
    }

    // Render Pharma / Albarelli Pane
    const pharmaImg = document.getElementById('pharmaImg');
    const pharmaSvg = document.getElementById('pharmaSvg');
    const pharmaBadge = document.getElementById('pharmaBadge');

    if (entry.pharma.length > 0) {
        const pharm = entry.pharma[0];
        if (pharmaImg) pharmaImg.src = pharm.img_url;
        if (pharmaBadge) pharmaBadge.textContent = `Folio ${pharm.folio} (Jar Formula)`;

        if (pharmaSvg) {
            let svgMarkup = '';
            pharm.hotspots.forEach(h => {
                svgMarkup += `
                    <rect x="${h.x - 30}" y="${h.y - 18}" width="60" height="36" class="hotspot-pulse" rx="6" />
                    <text x="${h.x}" y="${h.y - 24}" class="svg-label">${entry.token}</text>
                `;
            });
            pharmaSvg.innerHTML = svgMarkup;
        }
    }

    // Update active class in sidebar
    document.querySelectorAll('.token-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-token') === token);
    });
}

function renderSidebar() {
    const listEl = document.getElementById('tokenList');
    if (!listEl) return;
    const searchInput = document.getElementById('searchInput');
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

    const atlasData = window.ATLAS_DATA || [];
    let filtered = atlasData;
    if (currentFilter === 'triads') {
        filtered = filtered.filter(e => e.is_triad);
    } else if (currentFilter === 'multistar') {
        filtered = filtered.filter(e => e.star_count > 1);
    }

    if (query) {
        filtered = filtered.filter(e => e.token.toLowerCase().includes(query));
    }

    listEl.innerHTML = '';
    filtered.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'token-item' + (entry.token === activeToken ? ' active' : '');
        item.setAttribute('data-token', entry.token);
        item.onclick = () => selectToken(entry.token);

        item.innerHTML = `
            <div class="token-main">
                <span class="token-name">${entry.token}</span>
                <span class="token-freq">${entry.total_freq}x</span>
            </div>
            <div class="token-sub">
                <span>⭐ ${entry.star_count} stars</span>
                <span>🌿 ${entry.herbal_count} herb</span>
                <span>🏺 ${entry.pharma_count} pharm</span>
            </div>
        `;
        listEl.appendChild(item);
    });
}

function setFilter(type) {
    currentFilter = type;
    document.querySelectorAll('.sidebar-filters .btn-filter').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById('btnFilter' + type.charAt(0).toUpperCase() + type.slice(1));
    if (btn) btn.classList.add('active');
    renderSidebar();
}

function zoomPane(type, delta) {
    const state = zoomStates[type];
    if (!state) return;
    state.scale = Math.max(0.5, Math.min(4.0, state.scale + delta));
    applyPaneTransform(type);
}

function resetZoom(type) {
    const state = zoomStates[type];
    if (!state) return;
    state.scale = 1.0;
    state.x = 0;
    state.y = 0;
    applyPaneTransform(type);
}

function applyPaneTransform(type) {
    const state = zoomStates[type];
    const wrapper = document.querySelector(`#pane${type.charAt(0).toUpperCase() + type.slice(1)} .viewer-viewport`);
    if (wrapper) {
        wrapper.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
    }
}

// Window Exports
window.selectToken = selectToken;
window.renderSidebar = renderSidebar;
window.setFilter = setFilter;
window.zoomPane = zoomPane;
window.resetZoom = resetZoom;
