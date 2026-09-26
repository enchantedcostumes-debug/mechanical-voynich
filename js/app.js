/**
 * THE MECHANICAL VOYNICH · MAIN APPLICATION & MODAL DISPATCHER
 * Author: Tammy Lou Casey · Independent Codicological Research
 */
function openSponsorModal() {
    const modal = document.getElementById('donateModal');
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function copyCitation() {
    const citeText = "Casey, Tammy Lou. (2026). The Mechanical Voynich: A Bilingual Codicological Concordance & Botanical Pharmacopeia of Beinecke MS 408. Ozark Oracle Research Platform. https://voynich.ozark-oracle.com";
    navigator.clipboard.writeText(citeText).then(() => {
        const btn = document.querySelector('.btn-copy-cite');
        if (btn) {
            const orig = btn.innerText;
            btn.innerText = "✓ Citation Copied!";
            setTimeout(() => { btn.innerText = orig; }, 2500);
        }
    }).catch(err => {
        alert("Citation: " + citeText);
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('inquiryName').value;
    const affil = document.getElementById('inquiryAffiliation').value;
    const email = document.getElementById('inquiryEmail').value;
    const topic = document.getElementById('inquiryTopic').value;
    const msg = document.getElementById('inquiryMessage').value;
    const statusEl = document.getElementById('contactStatusText');

    statusEl.innerText = "✓ Preparing your academic inquiry...";
    const mailtoUri = `mailto:research@ozark-oracle.com?subject=[Voynich%20${encodeURIComponent(topic)}]%20Inquiry%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AAffiliation:%20${encodeURIComponent(affil)}%0AEmail:%20${encodeURIComponent(email)}%0ATopic:%20${encodeURIComponent(topic)}%0A%0AMessage:%0A${encodeURIComponent(msg)}`;
    window.location.href = mailtoUri;
    setTimeout(() => {
        statusEl.innerText = "✓ Inquiry draft opened in your email client. Thank you!";
    }, 1000);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    const statusEl = document.getElementById('newsletterStatusText');
    statusEl.innerText = `✓ Opening Tammy Lou Casey Substack subscription...`;
    setTimeout(() => {
        window.open(`https://tammylcasey.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
        statusEl.innerText = `✓ Substack opened! Confirm your subscription to Tammy Lou Casey's Substack.`;
        document.getElementById('newsletterEmail').value = '';
    }, 600);
}

// Window Exports
window.openSponsorModal = openSponsorModal;
window.closeModal = closeModal;
window.copyCitation = copyCitation;
window.handleContactSubmit = handleContactSubmit;
window.handleNewsletterSubmit = handleNewsletterSubmit;

// Hero Rotator
const HERO_CAPTIONS = [
    "Folio 70v2 (Celestial Zodiac Wheel & Star Nymphs)",
    "Folio 25v (The Famous Voynich Dragon / Snakeweed Folio)",
    "Folio 3r (Botanical Simplex & Taproot Anatomy)",
    "Folio 85r–86v (The 9-Rosettes Cosmological Foldout)",
    "Folio 89v (Apothecary Albarelli Drug Jars & Simples)",
    "Folio 1r (Opening Folio with Latin Codicological Marginalia)"
];
let heroCapIdx = 0;
setInterval(() => {
    heroCapIdx = (heroCapIdx + 1) % HERO_CAPTIONS.length;
    const captionEl = document.getElementById('heroPlateCaption');
    if (captionEl) {
        captionEl.textContent = `Live Plate: ${HERO_CAPTIONS[heroCapIdx]}`;
    }
}, 5000);

// Close modals on Esc or background click
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
    }
});
