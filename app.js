// State management
    let isDeckMode = false;
    let isLensActive = false;
    let currentSlideIdx = 0;
    let secretDeclassified = false;

    const totalSlides = 7;

    const EXHIBIT_DATA = {
      case01: {
        badge: 'CASE FILE 01 · DISSERTATION EXHIBIT',
        title: 'Who Pays When the Push Goes Wrong?',
        html: `
          <div class="bg-[#efe6d5] p-4 border border-stone-400 space-y-2">
            <div class="font-hud text-xs text-[#a91d22] uppercase">STATUTORY &amp; REGULATORY FRAMEWORK</div>
            <p><strong>Primary Instruments:</strong> Payment Services Regulations 2017 (implementing PSD2), CMA Retail Banking Order 2017, and Payment Systems Regulator (PSR) Specific Direction 20 (effective 7 October 2024).</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-[11px] text-stone-600">REIMBURSEMENT SPLIT</div>
              <div class="font-serif-display font-bold text-2xl text-[#a91d22] mt-1">50 : 50</div>
              <div class="text-xs mt-1">Sending vs. Receiving PSP</div>
            </div>
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-[11px] text-stone-600">STATUTORY CAP</div>
              <div class="font-serif-display font-bold text-2xl text-[#1e1610] mt-1">£85,000</div>
              <div class="text-xs mt-1">Per Faster Payments claim</div>
            </div>
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-[11px] text-stone-600">EVIDENCE BASE</div>
              <div class="font-serif-display font-bold text-2xl text-[#1e1610] mt-1">60+</div>
              <div class="text-xs mt-1">OSCOLA-cited primary/secondary sources</div>
            </div>
          </div>
          <p class="italic text-stone-800 border-l-2 border-[#a91d22] pl-3">
            <strong>Core Finding:</strong> Because APP fraud victims authorise the push payment under deception, remedies designed for unauthorised payments fall short—making mandatory, shared reimbursement across sending and receiving firms essential to align fraud-prevention incentives.
          </p>
        `
      },
      case02: {
        badge: 'CASE FILE 02 · SIMULATED AML EXHIBIT',
        title: "The Client Who Didn't Add Up",
        html: `
          <div class="bg-[#efe6d5] p-4 border border-stone-400 space-y-2">
            <div class="font-hud text-xs text-[#a91d22] uppercase">DECLARED PROFILE VS. ACTUAL THROUGHPUT</div>
            <div class="space-y-2 pt-1">
              <div>
                <div class="flex justify-between text-xs font-bold">
                  <span>Declared Annual Turnover (Onboarding)</span>
                  <span>£180,000 / year</span>
                </div>
                <div class="w-full bg-stone-300 h-2.5 mt-1">
                  <div class="bg-stone-700 h-2.5" style="width: 14%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold text-[#a91d22]">
                  <span>Actual Account Throughput (4 Months)</span>
                  <span>£1,300,000 (4 mos)</span>
                </div>
                <div class="w-full bg-stone-300 h-2.5 mt-1">
                  <div class="bg-[#a91d22] h-2.5" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-disc pl-5 space-y-1.5">
            <li><strong>Structuring Red Flag:</strong> 11 round-sum inbound transfers from unconnected companies, each just under £10,000.</li>
            <li><strong>Pass-Through Velocity:</strong> Funds exited within 48 hours across 3 jurisdictions with zero commercial invoices supplied.</li>
            <li><strong>Control &amp; Governance Risk:</strong> Beneficial ownership changed twice in 12 months; new 22-year-old sole director has no trading history.</li>
            <li><strong>Statutory Action:</strong> Escalate to MLRO and file NCA Suspicious Activity Report under POCA 2002 without tipping off.</li>
          </ul>
        `
      },
      case03: {
        badge: 'CASE FILE 03 · FCA CONSUMER DUTY EXHIBIT',
        title: 'Fine Print, Big Gaps (PRIN 2A Review)',
        html: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-xs text-[#a91d22]">1. PRICE &amp; VALUE</div>
              <p class="text-xs mt-1">Foreign payment fees split across 3 separate documents; total cost never shown upfront in one place.</p>
              <span class="inline-block mt-2 text-[11px] font-hud bg-red-900 text-white px-2 py-0.5">FIX: ONE-PAGE FEE SUMMARY</span>
            </div>
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-xs text-[#a91d22]">2. CONSUMER UNDERSTANDING</div>
              <p class="text-xs mt-1">Fraud warning buried on page 14 of terms; zero friction or warning displayed at the moment of payment.</p>
              <span class="inline-block mt-2 text-[11px] font-hud bg-red-900 text-white px-2 py-0.5">FIX: IN-FLOW FRAUD PROMPT</span>
            </div>
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-xs text-[#a91d22]">3. CONSUMER SUPPORT</div>
              <p class="text-xs mt-1">Account-freeze process states no resolution timeline and provides no named contact route.</p>
              <span class="inline-block mt-2 text-[11px] font-hud bg-red-900 text-white px-2 py-0.5">FIX: PUBLISHED FREEZE SLA</span>
            </div>
            <div class="bg-[#efe6d5] p-3 border border-stone-400">
              <div class="font-hud text-xs text-[#a91d22]">4. PRODUCTS &amp; SERVICES</div>
              <p class="text-xs mt-1">No evidence that the customer journey was tested with customers in vulnerable circumstances.</p>
              <span class="inline-block mt-2 text-[11px] font-hud bg-red-900 text-white px-2 py-0.5">FIX: PRE-LAUNCH VULNERABILITY TEST</span>
            </div>
          </div>
        `
      }
    };

    function showToast(msg) {
      const banner = document.getElementById('toastBanner');
      if (!banner) return;
      banner.textContent = msg;
      banner.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        banner.classList.add('hidden');
      }, 3200);
    }

    function updateNavHighlight(idx) {
      currentSlideIdx = idx;
      const indicator = document.getElementById('hudSlideIndicator');
      if (indicator) {
        indicator.textContent = `FILE 0${idx + 1} / 0${totalSlides}`;
      }
      document.querySelectorAll('.nav-pill').forEach((btn) => {
        const bIdx = parseInt(btn.getAttribute('data-nav-idx'), 10);
        if (bIdx === idx) {
          btn.className = 'nav-pill px-2.5 py-1 rounded text-amber-100 bg-red-900/60 border border-red-600/60';
        } else {
          btn.className = 'nav-pill px-2.5 py-1 rounded text-amber-200/70 hover:text-amber-100 hover:bg-amber-950/40';
        }
      });
    }

    function navigateToSection(idx, evt) {
      if (evt) evt.preventDefault();
      const clamped = Math.max(0, Math.min(totalSlides - 1, idx));
      updateNavHighlight(clamped);

      const sections = document.querySelectorAll('.case-section');
      if (isDeckMode) {
        sections.forEach((sec, i) => {
          sec.classList.toggle('active-slide', i === clamped);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = sections[clamped];
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    function stepSlide(delta) {
      navigateToSection(currentSlideIdx + delta);
    }

    function togglePresentationMode() {
      isDeckMode = !isDeckMode;
      document.body.classList.toggle('deck-mode', isDeckMode);
      const btn = document.getElementById('viewModeBtn');
      const controls = document.getElementById('deckNavControls');
      if (btn) {
        btn.textContent = isDeckMode ? '📑 MODE: SLIDE DECK' : '📑 MODE: SCROLL';
      }
      if (controls) {
        controls.classList.toggle('hidden', !isDeckMode);
        controls.classList.toggle('flex', isDeckMode);
      }
      navigateToSection(currentSlideIdx);
      showToast(isDeckMode ? 'SLIDE DECK VIEW ENABLED (USE ← / → KEYS)' : 'FULL SCROLL WEBSITE VIEW ENABLED');
    }

    function toggleInspectorLens() {
      isLensActive = !isLensActive;
      document.body.classList.toggle('lens-active', isLensActive);
      const btn = document.getElementById('lensToggleBtn');
      if (btn) {
        btn.textContent = isLensActive ? '🔍 LENS: ON' : '🔍 LENS: OFF';
      }
      showToast(isLensActive ? 'FORENSIC SPOTLIGHT LENS ACTIVATED' : 'SPOTLIGHT LENS OFF');
    }

    function toggleSecretIdentity() {
      secretDeclassified = !secretDeclassified;
      const bar = document.getElementById('secretIdentityBar');
      if (!bar) return;
      if (secretDeclassified) {
        bar.classList.remove('text-transparent', 'select-none', 'bg-[#1e1a17]');
        bar.classList.add('text-amber-100', 'bg-red-950', 'border', 'border-red-700');
        showToast('SECRET IDENTITY DECLASSIFIED');
      } else {
        bar.classList.add('text-transparent', 'select-none', 'bg-[#1e1a17]');
        bar.classList.remove('text-amber-100', 'bg-red-950', 'border', 'border-red-700');
      }
    }

    function filterEvidenceBoard(filterKey) {
      document.querySelectorAll('.board-filter-btn').forEach((btn) => {
        const k = btn.getAttribute('data-board-filter');
        if (k === filterKey) {
          btn.className = 'board-filter-btn px-3 py-1 text-xs font-hud rounded bg-red-800 text-white border border-red-500/50 transition';
        } else {
          btn.className = 'board-filter-btn px-3 py-1 text-xs font-hud rounded bg-stone-900/80 text-amber-200/80 border border-amber-800/40 hover:border-amber-500/50 transition';
        }
      });

      document.querySelectorAll('[data-case-card]').forEach((card) => {
        const cardKey = card.getAttribute('data-case-card');
        if (filterKey === 'all' || cardKey === filterKey) {
          card.style.opacity = '1';
          card.style.filter = 'none';
        } else {
          card.style.opacity = '0.32';
          card.style.filter = 'grayscale(70%)';
        }
      });
    }

    function openExhibitModal(caseKey) {
      const data = EXHIBIT_DATA[caseKey];
      if (!data) return;
      document.getElementById('modalCaseBadge').textContent = data.badge;
      document.getElementById('modalCaseTitle').textContent = data.title;
      document.getElementById('modalCaseBody').innerHTML = data.html;
      const modal = document.getElementById('exhibitModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeExhibitModal() {
      const modal = document.getElementById('exhibitModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function openTipLineModal(mode) {
      const modal = document.getElementById('tipLineModal');
      const badge = document.getElementById('dispatchBadge');
      const heading = document.getElementById('dispatchHeading');
      const select = document.getElementById('inquiryType');
      if (mode === 'cv') {
        badge.textContent = 'DOSSIER REQUISITION · CV';
        heading.textContent = 'Request Full Dossier (CV)';
        select.value = 'Full Dossier (CV) Request';
      } else {
        badge.textContent = 'ENCRYPTED TIP LINE';
        heading.textContent = 'Transmit Case Inquiry';
        select.value = 'AML / KYC & Financial Crime Role';
      }
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeTipLineModal() {
      const modal = document.getElementById('tipLineModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function submitDispatchForm(e) {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const org = document.getElementById('senderOrg').value.trim();
      const type = document.getElementById('inquiryType').value;
      const notes = document.getElementById('senderNotes').value.trim();

      const subject = encodeURIComponent(`[Case File Inquiry: ${type}] — ${name}${org ? ' (' + org + ')' : ''}`);
      const body = encodeURIComponent(`Hello Pooja,\n\n${notes}\n\nBest regards,\n${name}${org ? '\n' + org : ''}`);
      closeTipLineModal();
      showToast(`DISPATCH LOGGED FOR ${name.toUpperCase()} — OPENING MAIL CLIENT`);
      window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    }

    function copyContactValue(value, label) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(() => {
          showToast(`${label.toUpperCase()} COPIED: ${value}`);
        }).catch(() => {
          fallbackCopy(value, label);
        });
      } else {
        fallbackCopy(value, label);
      }
    }

    function fallbackCopy(value, label) {
      const ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast(`${label.toUpperCase()} COPIED: ${value}`);
      } catch (err) {
        showToast(`${label.toUpperCase()}: ${value}`);
      }
      document.body.removeChild(ta);
    }

    // Track pointer for Inspector Lens and observe scroll sections
    window.addEventListener('mousemove', (e) => {
      if (!isLensActive) return;
      document.documentElement.style.setProperty('--mx', e.clientX + 'px');
      document.documentElement.style.setProperty('--my', e.clientY + 'px');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeExhibitModal();
        closeTipLineModal();
      } else if (isDeckMode && (e.key === 'ArrowRight' || e.key === 'PageDown')) {
        stepSlide(1);
      } else if (isDeckMode && (e.key === 'ArrowLeft' || e.key === 'PageUp')) {
        stepSlide(-1);
      }
    });

    // IntersectionObserver to update active section in HUD when scrolling
    window.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('.case-section');
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          if (isDeckMode) return;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = parseInt(entry.target.getAttribute('data-section-index'), 10);
              if (!isNaN(idx)) updateNavHighlight(idx);
            }
          });
        }, { threshold: 0.35 });
        sections.forEach((s) => obs.observe(s));
      }
    });
