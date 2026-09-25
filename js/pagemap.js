/**
 * THE MECHANICAL VOYNICH · 131-FOLIO CODICOLOGICAL PAGE MAP & QUIRE READER
 * Author: Tammy Lou Casey · Independent Codicological Research
 */
let currentMapFolio = '1r';
let currentPageMapZoom = 1.0;

function loadPageMap(folio) {
    const clean = String(folio).toLowerCase().replace('f', '').trim();
    currentMapFolio = clean;

    const folioImages = window.FOLIO_IMAGES_DATA || {};
    const transcriptions = window.TRANSCRIPTION_DATA || {};
    const reverseIndex = window.REVERSE_INDEX || {};

    const imgUrl = folioImages['f' + clean] || folioImages[clean] || 'https://collections.library.yale.edu/iiif/2/1006076/full/1024,/0/default.jpg';
    const lines = transcriptions[clean] || transcriptions['f' + clean] || [];
    const anchors = reverseIndex[clean] || reverseIndex['f' + clean] || [];

    const imgEl = document.getElementById('pageMapFacsimileImg');
    if (imgEl) imgEl.src = imgUrl;

    const titleEl = document.getElementById('pageMapActiveFolioLabel');
    if (titleEl) titleEl.innerText = 'Folio f' + clean;

    const anchorEl = document.getElementById('pageMapFolioAnchors');
    if (anchorEl) {
        if (anchors.length === 0) {
            anchorEl.innerHTML = '<span style="color:var(--text-muted); font-size:0.75rem;">No active star anchors on this folio.</span>';
        } else {
            anchorEl.innerHTML = anchors.map(a => `
                <span class="badge" style="cursor:pointer; margin-right:0.35rem; margin-bottom:0.35rem; display:inline-block;" onclick="selectToken('${a.token}')">
                    ${a.token} (${a.type})
                </span>
            `).join('');
        }
    }

    const linesEl = document.getElementById('pageMapTranscriptionContainer');
    if (linesEl) {
        if (lines.length === 0) {
            linesEl.innerHTML = '<div style="padding:1.5rem; text-align:center; color:var(--text-muted);">No line-by-line transcription lines catalogued for this folio.</div>';
        } else {
            linesEl.innerHTML = lines.map(l => `
                <div class="transcription-line">
                    <span class="transcription-line-num">L.${l.line}</span>
                    <span class="transcription-words">${l.words.join(' ')}</span>
                </div>
            `).join('');
        }
    }

    // Update select dropdown if present
    const selectEl = document.getElementById('pageMapFolioSelect');
    if (selectEl) {
        selectEl.value = clean;
    }
}

function openPageMapExplorer() {
    const modal = document.getElementById('pageMapModal');
    if (modal) {
        modal.classList.add('active');
        loadPageMap(currentMapFolio);
    } else {
        window.location.href = 'page-map.html?f=' + currentMapFolio;
    }
}

// Window Exports
window.loadPageMap = loadPageMap;
window.openPageMapExplorer = openPageMapExplorer;
