/**
 * CHARMING PILATES (차밍 필라테스) — SCROLL CRAFT & INTERACTIVE ENGINE
 * - rAF Scroll Progress & Spine Alignment Sticky Stage
 * - One-Click Goal Routing (charming:select-goal)
 * - Dynamic Pricing Tabs (1:4, 1:2, 1:1)
 * - 3-Step Booking Wizard + Google Worksheet Sync (/api/leads + Direct Webhook)
 * - AI Consultant Chatbot (/api/chat + Guarded Knowledge Engine + IME-Safe Input)
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. PRICING DATA & GUARDED KNOWLEDGE BASE (MATCHING REFERENCE SITE 100%)
     ========================================================================== */
  const PRICING_DATA = {
    '1:4': {
      id: '1:4',
      name: 'Semi-Private 1:4',
      ratioLabel: '1 HLV : Tối đa 4 học viên',
      tiers: [
        {
          tierId: '1-4-single',
          sessionsLabel: '01 buổi',
          tierName: 'Mua lẻ từng buổi',
          priceDisplay: '380.000 đ',
          validityNote: 'Trải nghiệm linh hoạt theo buổi',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-4-20-30',
          sessionsLabel: '20 – 30 buổi',
          tierName: 'Gói 20 – 30 buổi',
          priceDisplay: '279.000 đ',
          validityNote: 'Phù hợp lộ trình khởi đầu 8 – 12 tuần',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-4-50-60',
          sessionsLabel: '50 – 60 buổi',
          tierName: 'Gói 50 – 60 buổi',
          priceDisplay: '249.000 đ',
          validityNote: 'Duy trì thói quen & tái cấu trúc tư thế bền vững',
          highlight: true,
          badge: 'Được chọn nhiều nhất'
        },
        {
          tierId: '1-4-100',
          sessionsLabel: '100 buổi',
          tierName: 'Gói 100 buổi',
          priceDisplay: '199.000 đ',
          validityNote: 'Mức phí tối ưu nhất cho hội viên gắn bó dài hạn',
          highlight: false,
          badge: 'Tối ưu chi phí'
        }
      ]
    },
    '1:2': {
      id: '1:2',
      name: 'Duet 1:2 (Cặp đôi)',
      ratioLabel: '1 HLV : 2 học viên',
      tiers: [
        {
          tierId: '1-2-single',
          sessionsLabel: '01 buổi',
          tierName: 'Mua lẻ từng buổi',
          priceDisplay: '480.000 đ',
          validityNote: 'Linh hoạt theo lịch cá nhân',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-2-20-30',
          sessionsLabel: '20 – 30 buổi',
          tierName: 'Gói 20 – 30 buổi',
          priceDisplay: '399.000 đ',
          validityNote: 'Lộ trình 8 – 12 tuần có tái đánh giá',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-2-50-60',
          sessionsLabel: '50 – 60 buổi',
          tierName: 'Gói 50 – 60 buổi',
          priceDisplay: '369.000 đ',
          validityNote: 'Cam kết thay đổi rõ rệt vóc dáng & tư thế',
          highlight: true,
          badge: 'Khuyên dùng'
        },
        {
          tierId: '1-2-100',
          sessionsLabel: '100 buổi',
          tierName: 'Gói 100 buổi',
          priceDisplay: '329.000 đ',
          validityNote: 'Tiết kiệm tối đa cho cặp đôi tập lâu dài',
          highlight: false,
          badge: 'Tiết kiệm tối đa'
        }
      ]
    },
    '1:1': {
      id: '1:1',
      name: 'Private 1:1 (Kèm riêng)',
      ratioLabel: '1 HLV : 1 học viên',
      tiers: [
        {
          tierId: '1-1-single',
          sessionsLabel: '01 buổi',
          tierName: 'Mua lẻ từng buổi',
          priceDisplay: '840.000 đ',
          validityNote: 'Đánh giá & trị liệu vận động chuyên sâu',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-1-20-30',
          sessionsLabel: '20 – 30 buổi',
          tierName: 'Gói 20 – 30 buổi',
          priceDisplay: '669.000 đ',
          validityNote: 'Lộ trình phục hồi & chỉnh trục cơ thể 8 tuần',
          highlight: true,
          badge: 'Phổ biến 1:1'
        },
        {
          tierId: '1-1-50-60',
          sessionsLabel: '50 – 60 buổi',
          tierName: 'Gói 50 – 60 buổi',
          priceDisplay: '599.000 đ',
          validityNote: 'Chăm sóc chuyên biệt & định hình chuyên sâu',
          highlight: false,
          badge: ''
        },
        {
          tierId: '1-1-100',
          sessionsLabel: '100 buổi',
          tierName: 'Gói 100 buổi',
          priceDisplay: '529.000 đ',
          validityNote: 'Đặc quyền tập kèm riêng 1:1 chi phí tốt nhất',
          highlight: false,
          badge: 'Ưu đãi 1:1'
        }
      ]
    }
  };

  const SPINE_STATES = [
    {
      step: 'Bước 01 / 04 · 20 phút đầu buổi thử',
      title: 'Đo trục cột sống & Cân bằng vai – hông',
      desc: 'Kiểm tra độ lệch cổ – ngực – thắt lưng, độ nghiêng khung chậu và biên độ khớp thực tế.',
      progress: 0.25,
      alignmentVal: 'Đo lường',
      coreVal: 'Khảo sát',
      reliefVal: '20 phút',
      pathD: 'M 60 18 C 72 52, 46 88, 66 124 C 76 146, 52 168, 60 192'
    },
    {
      step: 'Bước 02 / 04 · Cá nhân hóa 100%',
      title: 'Thiết kế phác đồ & Kháng lực lò xo Reformer',
      desc: 'Chọn mức lò xo nâng đỡ cột sống và bài tập kích hoạt cơ lõi sâu theo đúng thể trạng.',
      progress: 0.5,
      alignmentVal: '+45%',
      coreVal: 'Kích hoạt',
      reliefVal: '8 tuần',
      pathD: 'M 60 18 C 67 52, 53 88, 63 124 C 68 146, 56 168, 60 192'
    },
    {
      step: 'Bước 03 / 04 · Tối đa 4 người/buổi',
      title: 'HLV chỉnh tay từng nhịp thở & góc đặt khớp',
      desc: 'Kèm sát 1:1, 1:2 hoặc 1:4 trên hệ máy Reformer & Cadillac riêng biệt, an toàn tuyệt đối.',
      progress: 0.75,
      alignmentVal: '+78%',
      coreVal: 'Vững trục',
      reliefVal: 'Rõ rệt',
      pathD: 'M 60 18 C 63 52, 57 88, 61 124 C 63 146, 58 168, 60 192'
    },
    {
      step: 'Bước 04 / 04 · Sau 16 – 24 buổi tập',
      title: 'Tái đánh giá & Đối chiếu kết quả bằng con số',
      desc: 'Đo lại trục đứng, độ linh hoạt khớp và vòng eo để nhìn thấy sự thay đổi thực chất sau 8 tuần.',
      progress: 1.0,
      alignmentVal: 'Chuẩn trục',
      coreVal: 'Bền vững',
      reliefVal: 'Đo được',
      pathD: 'M 60 18 C 60 52, 60 88, 60 124 C 60 146, 60 168, 60 192'
    }
  ];

  /* ==========================================================================
     2. SCROLL CRAFT ENGINE (rAF + INTERSECTION OBSERVER)
     ========================================================================== */
  const rootEl = document.documentElement;
  const headerEl = document.getElementById('site-header');
  const heroEl = document.getElementById('hero-stage');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let ticking = false;

  function updateScrollProperties() {
    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const globalProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

    rootEl.style.setProperty('--scroll-progress', globalProgress.toFixed(4));

    if (headerEl) {
      headerEl.classList.toggle('is-scrolled', scrollY > 24);
    }

    if (heroEl && !prefersReducedMotion.matches) {
      const heroRect = heroEl.getBoundingClientRect();
      const heroHeight = Math.max(1, heroEl.offsetHeight);
      const heroProgress = Math.min(1, Math.max(0, -heroRect.top / heroHeight));
      rootEl.style.setProperty('--hero-progress', heroProgress.toFixed(4));
    }

    ticking = false;
  }

  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProperties);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateScrollProperties();

  /* Reveal on Scroll Observer */
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* Peak Moment: Method 4-Step Sticky Split Stage Observer */
  const methodCards = document.querySelectorAll('.method-step-card[data-method-step]');
  const spineStepLabel = document.getElementById('spine-step-label');
  const spineStepTitle = document.getElementById('spine-step-title');
  const spineStepDesc = document.getElementById('spine-step-desc');
  const spineDynamicCurve = document.getElementById('spine-dynamic-curve');
  const metricAlignment = document.getElementById('metric-alignment');
  const metricCore = document.getElementById('metric-core');
  const metricRelief = document.getElementById('metric-relief');

  function activateMethodStep(stepIndex) {
    const state = SPINE_STATES[stepIndex] || SPINE_STATES[0];
    methodCards.forEach(function (card, idx) {
      card.classList.toggle('is-active', idx === stepIndex);
    });
    rootEl.style.setProperty('--method-progress', String(state.progress));
    if (spineStepLabel) spineStepLabel.textContent = state.step;
    if (spineStepTitle) spineStepTitle.textContent = state.title;
    if (spineStepDesc) spineStepDesc.textContent = state.desc;
    if (spineDynamicCurve) spineDynamicCurve.setAttribute('d', state.pathD);
    if (metricAlignment) metricAlignment.textContent = state.alignmentVal;
    if (metricCore) metricCore.textContent = state.coreVal;
    if (metricRelief) metricRelief.textContent = state.reliefVal;
  }

  if (methodCards.length > 0 && 'IntersectionObserver' in window) {
    const methodObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-method-step'), 10) - 1;
            if (!isNaN(idx) && idx >= 0 && idx < SPINE_STATES.length) {
              activateMethodStep(idx);
            }
          }
        });
      },
      { threshold: 0.55, rootMargin: '-15% 0px -25% 0px' }
    );
    methodCards.forEach(function (card) {
      methodObserver.observe(card);
      card.addEventListener('mouseenter', function () {
        const idx = parseInt(card.getAttribute('data-method-step'), 10) - 1;
        if (!isNaN(idx)) activateMethodStep(idx);
      });
    });
  }

  /* ==========================================================================
     3. SIGNATURE MOVE: ONE-CLICK GOAL ROUTING (charming:select-goal)
     ========================================================================== */
  const SELECT_GOAL_EVENT = 'charming:select-goal';

  function dispatchGoalSelection(detail) {
    window.dispatchEvent(new CustomEvent(SELECT_GOAL_EVENT, { detail: detail }));
    const bookingSection = document.getElementById('dat-buoi-thu');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    }
  }

  window.dispatchGoalSelection = dispatchGoalSelection;

  document.querySelectorAll('[data-select-goal]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const goalId = el.getAttribute('data-select-goal') || 'office-pain';
      const formatId = el.getAttribute('data-select-format') || '1:4';
      const noteText = el.getAttribute('data-select-note') || '';
      dispatchGoalSelection({
        goalId: goalId,
        recommendedFormat: formatId,
        noteText: noteText
      });
    });
  });

  /* ==========================================================================
     4. INTERACTIVE PRICING TABS (1:4, 1:2, 1:1)
     ========================================================================== */
  const pricingTabBtns = document.querySelectorAll('.pricing-tab-btn[data-pricing-tab]');
  const pricingTiersContainer = document.getElementById('pricing-tiers-container');
  const pricingCurrentFormatName = document.getElementById('pricing-current-format-name');
  const pricingCurrentRatioLabel = document.getElementById('pricing-current-ratio-label');

  function renderPricingTab(formatKey) {
    const data = PRICING_DATA[formatKey] || PRICING_DATA['1:4'];
    pricingTabBtns.forEach(function (btn) {
      const isSelected = btn.getAttribute('data-pricing-tab') === formatKey;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    if (pricingCurrentFormatName) pricingCurrentFormatName.textContent = data.name;
    if (pricingCurrentRatioLabel) pricingCurrentRatioLabel.textContent = data.ratioLabel;

    if (!pricingTiersContainer) return;

    pricingTiersContainer.innerHTML = data.tiers
      .map(function (tier) {
        const cardClass = tier.highlight
          ? 'pricing-tier-card pricing-tier-card--highlight'
          : 'pricing-tier-card';
        const badgeHtml = tier.badge
          ? `<span class="badge ${tier.highlight ? 'badge-solid' : 'badge-soft'}">${tier.badge}</span>`
          : '';
        const btnClass = tier.highlight ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';

        return `
          <article class="${cardClass}">
            <div>
              <div class="pricing-tier-top">
                <span class="pricing-sessions-label">${tier.sessionsLabel}</span>
                ${badgeHtml}
              </div>
              <h3 class="pricing-tier-name">${tier.tierName}</h3>
              <div class="pricing-amount-box">
                <p style="font-size: 0.76rem; color: var(--text-muted);">Học phí thực thu:</p>
                <p class="pricing-amount-value">${tier.priceDisplay}</p>
                <p style="font-size: 0.76rem; color: var(--text-muted);">/ người / buổi</p>
              </div>
              <p style="margin-top: 0.95rem; display: flex; align-items: flex-start; gap: 0.45rem; font-size: 0.8rem; color: var(--text);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-rose-deep)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:2px;"><circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/></svg>
                <span>${tier.validityNote}</span>
              </p>
            </div>
            <div style="margin-top: 1.25rem;">
              <button type="button" class="${btnClass}" style="width: 100%;" data-tier-select="${data.id}" data-tier-name="${tier.tierName} (${data.name})">
                Tư vấn gói này
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    pricingTiersContainer.querySelectorAll('[data-tier-select]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const formatId = btn.getAttribute('data-tier-select') || '1:4';
        const tierName = btn.getAttribute('data-tier-name') || '';
        dispatchGoalSelection({
          goalId: 'other',
          recommendedFormat: formatId,
          noteText: tierName ? `Quan tâm ${tierName}` : ''
        });
      });
    });
  }

  pricingTabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const formatKey = btn.getAttribute('data-pricing-tab');
      if (formatKey) renderPricingTab(formatKey);
    });
  });

  renderPricingTab('1:4');

  /* ==========================================================================
     5. 3-STEP BOOKING WIZARD + GOOGLE WORKSHEET SYNC
     ========================================================================== */
  const bookingForm = document.getElementById('booking-wizard-form');
  const stepPanels = document.querySelectorAll('[data-wizard-step-panel]');
  const stepSegments = document.querySelectorAll('[data-wizard-segment]');
  const stepNumberDisplay = document.getElementById('wizard-step-number');
  const stepTitleDisplay = document.getElementById('wizard-step-title');
  const prefillNotice = document.getElementById('wizard-prefill-notice');
  const wizardPrevBtn = document.getElementById('wizard-prev-btn');
  const wizardNextBtn = document.getElementById('wizard-next-btn');
  const wizardSubmitBtn = document.getElementById('wizard-submit-btn');
  const wizardErrorBanner = document.getElementById('wizard-error-banner');
  const wizardSuccessPanel = document.getElementById('wizard-success-panel');
  const healthConsentContainer = document.getElementById('health-consent-container');

  const STEP_TITLES = {
    1: 'Mục tiêu & Hình thức',
    2: 'Cơ sở & Khung giờ',
    3: 'Thông tin & Xác nhận lịch'
  };

  let currentWizardStep = 1;

  function setWizardStep(step) {
    currentWizardStep = Math.min(3, Math.max(1, step));
    stepPanels.forEach(function (panel) {
      const panelStep = parseInt(panel.getAttribute('data-wizard-step-panel'), 10);
      panel.hidden = panelStep !== currentWizardStep;
    });
    stepSegments.forEach(function (seg) {
      const segStep = parseInt(seg.getAttribute('data-wizard-segment'), 10);
      seg.classList.toggle('is-active', segStep <= currentWizardStep);
    });
    if (stepNumberDisplay) stepNumberDisplay.textContent = String(currentWizardStep);
    if (stepTitleDisplay) stepTitleDisplay.textContent = STEP_TITLES[currentWizardStep] || '';
    if (wizardPrevBtn) wizardPrevBtn.hidden = currentWizardStep === 1;
    if (wizardNextBtn) wizardNextBtn.hidden = currentWizardStep === 3;
    if (wizardSubmitBtn) wizardSubmitBtn.hidden = currentWizardStep !== 3;
    if (wizardErrorBanner) {
      wizardErrorBanner.hidden = true;
      wizardErrorBanner.textContent = '';
    }
  }

  /* Listen for One-Click Goal Routing */
  window.addEventListener(SELECT_GOAL_EVENT, function (e) {
    const detail = e.detail || {};
    if (detail.goalId && bookingForm) {
      const goalRadio = bookingForm.querySelector(`input[name="goal"][value="${detail.goalId}"]`);
      if (goalRadio) goalRadio.checked = true;
    }
    if (detail.recommendedFormat && bookingForm) {
      const formatRadio = bookingForm.querySelector(`input[name="format"][value="${detail.recommendedFormat}"]`);
      if (formatRadio) formatRadio.checked = true;
    }
    if (detail.noteText && bookingForm) {
      const noteInput = bookingForm.querySelector('textarea[name="note"]');
      if (noteInput && !noteInput.value) {
        noteInput.value = detail.noteText;
      }
    }
    if (prefillNotice) {
      prefillNotice.hidden = false;
    }
    if (wizardSuccessPanel && !wizardSuccessPanel.hidden) {
      wizardSuccessPanel.hidden = true;
      if (bookingForm) bookingForm.hidden = false;
    }
    setWizardStep(1);
  });

  if (wizardPrevBtn) {
    wizardPrevBtn.addEventListener('click', function () {
      setWizardStep(currentWizardStep - 1);
    });
  }

  if (wizardNextBtn) {
    wizardNextBtn.addEventListener('click', function () {
      setWizardStep(currentWizardStep + 1);
    });
  }

  /* Toggle Health Consent requirement when Health Condition is 'yes' */
  if (bookingForm) {
    bookingForm.querySelectorAll('input[name="hasHealthCondition"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        const isYes = radio.value === 'yes' && radio.checked;
        if (healthConsentContainer) {
          healthConsentContainer.style.borderColor = isYes ? 'var(--brand-rose-deep)' : 'rgba(201, 158, 145, 0.4)';
        }
      });
    });
  }

  /* Vietnamese Phone Validation Helper */
  const VN_PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

  function normalizePhone(raw) {
    return String(raw || '').trim().replace(/[\s.\-()]/g, '');
  }

  /* Contextual Validation on blur & Clear on input (per modern-web-guidance `forms`) */
  const fullNameInput = document.getElementById('booking-fullname');
  const fullNameError = document.getElementById('booking-fullname-error');
  const phoneInput = document.getElementById('booking-phone');
  const phoneError = document.getElementById('booking-phone-error');

  if (fullNameInput && fullNameError) {
    fullNameInput.addEventListener('blur', function () {
      const val = fullNameInput.value.trim();
      if (val.length > 0 && val.length < 2) {
        fullNameInput.setAttribute('aria-invalid', 'true');
        fullNameError.classList.add('is-visible');
      }
    });
    fullNameInput.addEventListener('input', function () {
      fullNameInput.removeAttribute('aria-invalid');
      fullNameError.classList.remove('is-visible');
    });
  }

  if (phoneInput && phoneError) {
    phoneInput.addEventListener('blur', function () {
      const cleaned = normalizePhone(phoneInput.value);
      if (cleaned.length > 0 && !VN_PHONE_REGEX.test(cleaned)) {
        phoneInput.setAttribute('aria-invalid', 'true');
        phoneError.classList.add('is-visible');
      }
    });
    phoneInput.addEventListener('input', function () {
      phoneInput.removeAttribute('aria-invalid');
      phoneError.classList.remove('is-visible');
    });
  }

  /* Save Lead Locally & Sync to Google Worksheet */
  function saveLeadToLocalBackup(lead) {
    try {
      const existing = JSON.parse(localStorage.getItem('charming_pilates_leads') || '[]');
      existing.unshift(lead);
      localStorage.setItem('charming_pilates_leads', JSON.stringify(existing.slice(0, 200)));
      updateLeadCounterUI();
    } catch (_) {
      /* ignore storage errors */
    }
  }

  async function submitLeadPayload(payload) {
    const customWebhook = localStorage.getItem('charming_gsheet_webhook') || '';
    const enrichedPayload = Object.assign({}, payload, {
      customWebhookUrl: customWebhook,
      submittedAt: new Date().toISOString(),
      landingPage: window.location.href
    });

    saveLeadToLocalBackup(enrichedPayload);

    /* If user configured a direct Google Apps Script Web App URL in browser, also fire no-cors backup */
    if (customWebhook && customWebhook.startsWith('https://script.google.com/')) {
      try {
        fetch(customWebhook, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(enrichedPayload)
        });
      } catch (_) {
        /* Handled by /api/leads as well */
      }
    }

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrichedPayload)
    });

    return response.json();
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (currentWizardStep < 3) {
        setWizardStep(currentWizardStep + 1);
        return;
      }

      if (wizardErrorBanner) {
        wizardErrorBanner.hidden = true;
        wizardErrorBanner.textContent = '';
      }

      const formData = new FormData(bookingForm);
      const fullName = String(formData.get('fullName') || '').trim();
      const phone = normalizePhone(formData.get('phone'));
      const zaloSamePhone = formData.get('zaloSamePhone') === 'on';
      const goal = String(formData.get('goal') || 'office-pain');
      const format = String(formData.get('format') || '1:4');
      const location = String(formData.get('location') || 'dcapitale');
      const timeSlot = String(formData.get('timeSlot') || 'evening');
      const expectedDate = String(formData.get('expectedDate') || '').trim();
      const note = String(formData.get('note') || '').trim();
      const hasHealthCondition = String(formData.get('hasHealthCondition') || 'no');
      const consentContact = formData.get('consentContact') === 'on';
      const consentHealth = formData.get('consentHealth') === 'on';
      const honeypot = String(formData.get('website_url_hp') || '');

      if (honeypot) return;

      if (fullName.length < 2) {
        if (fullNameInput) fullNameInput.setAttribute('aria-invalid', 'true');
        if (fullNameError) fullNameError.classList.add('is-visible');
        if (wizardErrorBanner) {
          wizardErrorBanner.textContent = 'Vui lòng nhập họ và tên của bạn (ít nhất 2 ký tự).';
          wizardErrorBanner.hidden = false;
        }
        if (fullNameInput) fullNameInput.focus();
        return;
      }

      if (!VN_PHONE_REGEX.test(phone)) {
        if (phoneInput) phoneInput.setAttribute('aria-invalid', 'true');
        if (phoneError) phoneError.classList.add('is-visible');
        if (wizardErrorBanner) {
          wizardErrorBanner.textContent = 'Vui lòng nhập số điện thoại Việt Nam hợp lệ (10 chữ số, bắt đầu bằng 03, 05, 07, 08 hoặc 09).';
          wizardErrorBanner.hidden = false;
        }
        if (phoneInput) phoneInput.focus();
        return;
      }

      if (!consentContact) {
        if (wizardErrorBanner) {
          wizardErrorBanner.textContent = 'Vui lòng tích chọn đồng ý xử lý dữ liệu liên hệ để Charming Pilates gọi điện tư vấn cho bạn.';
          wizardErrorBanner.hidden = false;
        }
        return;
      }

      if (hasHealthCondition === 'yes' && !consentHealth) {
        if (wizardErrorBanner) {
          wizardErrorBanner.textContent = "Vì bạn chọn 'Có' ở mục sàng lọc sức khỏe, vui lòng tích đồng ý để studio bố trí Huấn luyện viên phù hợp.";
          wizardErrorBanner.hidden = false;
        }
        return;
      }

      if (wizardSubmitBtn) {
        wizardSubmitBtn.disabled = true;
        wizardSubmitBtn.textContent = 'Đang gửi & đồng bộ Google Sheet...';
      }

      const payload = {
        fullName: fullName,
        phone: phone,
        zaloSamePhone: zaloSamePhone,
        goal: goal,
        format: format,
        location: location,
        timeSlot: timeSlot,
        expectedDate: expectedDate,
        note: note,
        hasHealthCondition: hasHealthCondition,
        consentContact: consentContact,
        consentHealth: consentHealth,
        source: 'booking_form'
      };

      try {
        await submitLeadPayload(payload);
      } catch (_) {
        /* Lead is already backed up in localStorage and optional direct webhook */
      } finally {
        if (wizardSubmitBtn) {
          wizardSubmitBtn.disabled = false;
          wizardSubmitBtn.textContent = 'Hoàn tất đặt buổi tập thử';
        }
      }

      /* Show Confirmation Summary */
      bookingForm.hidden = true;
      if (wizardSuccessPanel) {
        const summaryEl = document.getElementById('wizard-success-summary');
        const locLabel = location === 'royal-city'
          ? 'CS2: Tầng 2 sảnh R2, TTTM Royal City (72A Nguyễn Trãi)'
          : "CS1: Tầng 6 tòa C6, Vinhomes D'Capitale (119 Trần Duy Hưng)";
        const timeMap = {
          morning: 'Buổi sáng (08:00 – 11:30)',
          noon: 'Buổi trưa (11:30 – 14:00)',
          afternoon: 'Buổi chiều (14:00 – 17:30)',
          evening: 'Buổi tối (17:30 – 21:00)'
        };
        if (summaryEl) {
          summaryEl.innerHTML = `
            <p><strong>Học viên:</strong> ${escapeHtml(fullName)} · <strong>SĐT/Zalo:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Hình thức lớp:</strong> ${escapeHtml(format)} · <strong>Khung giờ:</strong> ${escapeHtml(timeMap[timeSlot] || timeSlot)}</p>
            <p><strong>Cơ sở đăng ký:</strong> ${escapeHtml(locLabel)}</p>
          `;
        }
        wizardSuccessPanel.hidden = false;
      }
    });
  }

  const resetBookingBtn = document.getElementById('wizard-reset-btn');
  if (resetBookingBtn) {
    resetBookingBtn.addEventListener('click', function () {
      if (bookingForm) {
        bookingForm.reset();
        bookingForm.hidden = false;
      }
      if (wizardSuccessPanel) wizardSuccessPanel.hidden = true;
      setWizardStep(1);
    });
  }

  /* ==========================================================================
     6. GOOGLE WORKSHEET CONFIG & EXPORT MODAL
     ========================================================================== */
  const sheetConfigModal = document.getElementById('sheet-config-modal');
  const openSheetConfigBtns = document.querySelectorAll('[data-open-sheet-config]');
  const closeSheetConfigBtn = document.getElementById('close-sheet-config-btn');
  const saveSheetWebhookBtn = document.getElementById('save-sheet-webhook-btn');
  const testSheetWebhookBtn = document.getElementById('test-sheet-webhook-btn');
  const exportLeadsCsvBtn = document.getElementById('export-leads-csv-btn');
  const sheetWebhookInput = document.getElementById('sheet-webhook-url-input');
  const sheetConfigStatus = document.getElementById('sheet-config-status');
  const copyAppsScriptBtn = document.getElementById('copy-apps-script-btn');

  function updateLeadCounterUI() {
    const badgeEls = document.querySelectorAll('[data-lead-count]');
    try {
      const leads = JSON.parse(localStorage.getItem('charming_pilates_leads') || '[]');
      badgeEls.forEach(function (el) {
        el.textContent = String(leads.length);
      });
    } catch (_) {
      /* ignore */
    }
  }
  updateLeadCounterUI();

  openSheetConfigBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (sheetWebhookInput) {
        sheetWebhookInput.value = localStorage.getItem('charming_gsheet_webhook') || '';
      }
      if (sheetConfigModal) sheetConfigModal.classList.add('is-open');
    });
  });

  if (closeSheetConfigBtn && sheetConfigModal) {
    closeSheetConfigBtn.addEventListener('click', function () {
      sheetConfigModal.classList.remove('is-open');
    });
    sheetConfigModal.addEventListener('click', function (e) {
      if (e.target === sheetConfigModal) sheetConfigModal.classList.remove('is-open');
    });
  }

  if (saveSheetWebhookBtn && sheetWebhookInput) {
    saveSheetWebhookBtn.addEventListener('click', function () {
      const url = sheetWebhookInput.value.trim();
      localStorage.setItem('charming_gsheet_webhook', url);
      if (sheetConfigStatus) {
        sheetConfigStatus.textContent = url
          ? 'Đã lưu URL Google Apps Script Webhook! Mọi lượt đăng ký sẽ tự động đồng bộ vào Google Sheet.'
          : 'Đã xóa URL tùy chỉnh (sử dụng cấu hình mặc định trên Server /api/leads).';
        sheetConfigStatus.style.color = 'var(--status-success)';
      }
    });
  }

  if (testSheetWebhookBtn) {
    testSheetWebhookBtn.addEventListener('click', async function () {
      if (sheetConfigStatus) {
        sheetConfigStatus.textContent = 'Đang gửi dữ liệu kiểm thử tới Google Sheet...';
        sheetConfigStatus.style.color = 'var(--text-muted)';
      }
      try {
        const res = await submitLeadPayload({
          fullName: 'Khách hàng Kiểm thử (Test)',
          phone: '0963894885',
          zaloSamePhone: true,
          goal: 'office-pain',
          format: '1:4',
          location: 'dcapitale',
          timeSlot: 'evening',
          expectedDate: new Date().toISOString().slice(0, 10),
          note: 'Bản ghi kiểm tra kết nối Google Worksheet từ Charming Pilates',
          hasHealthCondition: 'no',
          consentContact: true,
          consentHealth: false,
          source: 'sheet_test'
        });
        if (sheetConfigStatus) {
          sheetConfigStatus.textContent = res && res.sheetSynced
            ? 'Kết nối thành công! Dòng dữ liệu kiểm thử đã được ghi vào Google Sheet.'
            : 'Đã ghi nhận bản ghi kiểm thử (lưu tại bộ nhớ & /api/leads). Dán URL Google Apps Script Web App để đồng bộ trực tiếp vào trang tính của bạn.';
          sheetConfigStatus.style.color = 'var(--status-success)';
        }
      } catch (_) {
        if (sheetConfigStatus) {
          sheetConfigStatus.textContent = 'Đã gửi tín hiệu kiểm thử tới Webhook và lưu bản ghi cục bộ.';
          sheetConfigStatus.style.color = 'var(--status-success)';
        }
      }
    });
  }

  if (exportLeadsCsvBtn) {
    exportLeadsCsvBtn.addEventListener('click', function () {
      const leads = JSON.parse(localStorage.getItem('charming_pilates_leads') || '[]');
      const headers = ['Thời gian', 'Họ và tên', 'Số điện thoại', 'Dùng Zalo', 'Mục tiêu', 'Hình thức lớp', 'Cơ sở', 'Khung giờ', 'Ngày dự kiến', 'Sàng lọc sức khỏe', 'Ghi chú', 'Nguồn'];
      const rows = leads.map(function (l) {
        return [
          l.submittedAt || '',
          l.fullName || '',
          l.phone || '',
          l.zaloSamePhone ? 'Có' : 'Không',
          l.goal || '',
          l.format || '',
          l.location || '',
          l.timeSlot || '',
          l.expectedDate || '',
          l.hasHealthCondition || 'no',
          l.note || '',
          l.source || ''
        ].map(function (cell) {
          return '"' + String(cell).replace(/"/g, '""') + '"';
        }).join(',');
      });
      const csvContent = '\uFEFF' + [headers.join(',')].concat(rows).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'charming-pilates-leads-' + new Date().toISOString().slice(0, 10) + '.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  if (copyAppsScriptBtn) {
    copyAppsScriptBtn.addEventListener('click', function () {
      const codeEl = document.getElementById('apps-script-code-block');
      if (codeEl && navigator.clipboard) {
        navigator.clipboard.writeText(codeEl.textContent || '');
        copyAppsScriptBtn.textContent = 'Đã sao chép mã Apps Script!';
        setTimeout(function () {
          copyAppsScriptBtn.textContent = 'Sao chép mã Apps Script';
        }, 2200);
      }
    });
  }

  /* ==========================================================================
     7. AI CONSULTANT CHATBOT (/api/chat + CLIENT KNOWLEDGE ENGINE FALLBACK)
     ========================================================================== */
  const chatTriggerBtn = document.getElementById('ai-chat-trigger-btn');
  const chatTriggerLabel = document.getElementById('ai-chat-trigger-label');
  const chatDialog = document.getElementById('ai-chat-dialog');
  const chatMessagesEl = document.getElementById('ai-chat-messages');
  const chatForm = document.getElementById('ai-chat-form');
  const chatInput = document.getElementById('ai-chat-input');
  const chatLeadBox = document.getElementById('ai-chat-lead-box');
  const chatLeadForm = document.getElementById('ai-chat-lead-form');
  const chatLeadSuccess = document.getElementById('ai-chat-lead-success');

  const chatHistory = [
    {
      role: 'assistant',
      content: "Chào bạn! Mình là trợ lý tư vấn của Charming Pilates (D'Capitale & Royal City). Bạn muốn tham khảo bảng học phí, hỏi về tình trạng đau lưng/sau sinh hay đặt buổi tập thử 60 phút?"
    }
  ];

  function localKnowledgeReply(userText) {
    const q = userText.toLowerCase();
    if (q.includes('giá') || q.includes('học phí') || q.includes('bao nhiêu') || q.includes('chi phí')) {
      return {
        reply:
          'Bảng học phí thực thu tại Charming Pilates (đơn vị: đồng/người/buổi):\n' +
          '• Lớp 1:4 (Tối đa 4 người): Mua lẻ 380.000đ | Gói 20–30 buổi: 279.000đ | Gói 50–60 buổi: 249.000đ | Gói 100 buổi: 199.000đ.\n' +
          '• Lớp 1:2 (Cặp đôi): Mua lẻ 480.000đ | Gói 20–30 buổi: 399.000đ | Gói 50–60 buổi: 369.000đ | Gói 100 buổi: 329.000đ.\n' +
          '• Kèm riêng 1:1: Mua lẻ 840.000đ | Gói 20–30 buổi: 669.000đ | Gói 50–60 buổi: 599.000đ | Gói 100 buổi: 529.000đ.\n' +
          '• Ưu đãi buổi đầu (60 phút đánh giá tư thế + tập thử Reformer): 199.000 – 299.000đ (hoàn trừ 100% khi đăng ký gói).\n' +
          'Bạn đang quan tâm hình thức tập nào để mình giữ lịch tập thử cho bạn?',
        suggestLeadCapture: true
      };
    }
    if (q.includes('sau sinh') || q.includes('mang thai') || q.includes('bầu') || q.includes('sổ bụng')) {
      return {
        reply:
          'Với mẹ bầu (thai kỳ ổn định từ tam cá nguyệt thứ 2) hoặc mẹ sau sinh (từ 6–8 tuần với sinh thường và 10–12 tuần với sinh mổ), Pilates trên máy Reformer & Cadillac giúp phục hồi cơ sàn chậu, thu gọn tách cơ bụng (Diastasis Recti) và giảm đau lưng rất êm ái.\n' +
          'Tại Charming Pilates, chúng tôi khuyến nghị lớp Private 1:1 cho mẹ bầu/sau sinh để HLV theo sát 100% từng nhịp thở. Bạn để lại SĐT bên dưới để studio xếp HLV chuyên trách tư vấn kỹ hơn nhé!',
        suggestLeadCapture: true
      };
    }
    if (q.includes('đau lưng') || q.includes('cổ vai gáy') || q.includes('thoát vị') || q.includes('cột sống') || q.includes('văn phòng')) {
      return {
        reply:
          'Hoàn toàn tập được và rất phù hợp ạ! Trong 20 phút đầu buổi thử, HLV sẽ đo trục cột sống (cổ – ngực – thắt lưng), loại bỏ các động tác gây chèn ép đĩa đệm và dùng lò xo máy Reformer để giải phóng áp lực đốt sống, kích hoạt cơ lõi sâu (deep core).\n' +
          'Sau 3–5 buổi bạn sẽ thấy nhẹ vai và thắt lưng rõ rệt. Bạn muốn đặt buổi đánh giá tư thế tại D\'Capitale Trần Duy Hưng hay Royal City Nguyễn Trãi?',
        suggestLeadCapture: true
      };
    }
    if (q.includes('địa chỉ') || q.includes('cơ sở') || q.includes('ở đâu') || q.includes('gửi xe') || q.includes('royal') || q.includes('capitale')) {
      return {
        reply:
          'Charming Pilates có 2 cơ sở tại trung tâm Hà Nội (mở cửa 08:00 – 21:00 từ Thứ 2 – Chủ Nhật, đều có hầm đỗ ô tô & xe máy rộng rãi):\n' +
          "1. Cơ sở 1 (Cầu Giấy): Tầng 6, tòa C6 Vinhomes D'Capitale (119 Trần Duy Hưng) — Hotline: 096 389 4885.\n" +
          '2. Cơ sở 2 (Thanh Xuân): Tầng 2, sảnh R2, TTTM Royal City (72A Nguyễn Trãi) — Hotline: 0901 760 200.\n' +
          'Bạn thuận tiện di chuyển tới cơ sở nào hơn ạ?',
        suggestLeadCapture: true
      };
    }
    if (q.includes('đặt') || q.includes('thử') || q.includes('lịch') || q.includes('đăng ký')) {
      return {
        reply:
          'Buổi tập thử 60 phút tại Charming Pilates gồm: 20 phút đo & phân tích trục tư thế đầu vào + 40 phút trải nghiệm máy Reformer cùng HLV kèm sát (cam kết không chèo kéo). Mời bạn điền nhanh Họ tên & SĐT ngay bên dưới để tư vấn viên xác nhận lịch trong 5 phút nhé!',
        suggestLeadCapture: true
      };
    }
    return {
      reply:
        'Cảm ơn bạn đã quan tâm tới Charming Pilates (차밍 필라테스)! Mỗi buổi tập tại studio giới hạn tối đa 4 học viên (1:1, 1:2, 1:4) với học phí thực thu minh bạch từ 199.000đ/buổi. Bạn có thể để lại số điện thoại Zalo bên dưới hoặc bấm "Gặp tư vấn viên" để được hỗ trợ ngay trong 5 phút nhé!',
      suggestLeadCapture: true
    };
  }

  function appendChatBubble(role, text) {
    if (!chatMessagesEl) return;
    const div = document.createElement('div');
    div.className = 'chat-bubble ' + (role === 'user' ? 'chat-bubble--user' : 'chat-bubble--assistant');
    div.textContent = text;
    const pillsEl = document.getElementById('ai-chat-quick-pills');
    if (pillsEl && pillsEl.parentNode === chatMessagesEl) {
      chatMessagesEl.insertBefore(div, pillsEl);
    } else {
      chatMessagesEl.appendChild(div);
    }
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  }

  async function sendChatMessage(rawText) {
    const text = String(rawText || '').trim();
    if (!text) return;

    appendChatBubble('user', text);
    chatHistory.push({ role: 'user', content: text });
    if (chatInput) chatInput.value = '';

    if (text === 'Đặt buổi thử' && chatLeadBox) {
      chatLeadBox.hidden = false;
    }

    const typingEl = document.createElement('div');
    typingEl.className = 'chat-bubble chat-bubble--assistant';
    typingEl.style.color = 'var(--text-muted)';
    typingEl.textContent = 'Đang soạn câu trả lời...';
    if (chatMessagesEl) {
      chatMessagesEl.appendChild(typingEl);
      chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      });
      const data = await response.json();
      if (typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);

      const replyText = (data && data.reply) ? data.reply : localKnowledgeReply(text).reply;
      appendChatBubble('assistant', replyText);
      chatHistory.push({ role: 'assistant', content: replyText });

      if ((data && data.suggestLeadCapture) || text === 'Đặt buổi thử') {
        if (chatLeadBox) chatLeadBox.hidden = false;
      }
    } catch (_) {
      if (typingEl.parentNode) typingEl.parentNode.removeChild(typingEl);
      const fallback = localKnowledgeReply(text);
      appendChatBubble('assistant', fallback.reply);
      chatHistory.push({ role: 'assistant', content: fallback.reply });
      if (fallback.suggestLeadCapture && chatLeadBox) {
        chatLeadBox.hidden = false;
      }
    }

    if (chatMessagesEl) {
      chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }
  }

  function toggleChatDialog(forceOpen) {
    if (!chatDialog || !chatTriggerBtn) return;
    const willOpen = typeof forceOpen === 'boolean' ? forceOpen : !chatDialog.classList.contains('is-open');
    chatDialog.classList.toggle('is-open', willOpen);
    chatTriggerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    if (chatTriggerLabel) {
      chatTriggerLabel.textContent = willOpen ? 'Đóng chat' : 'Hỏi trợ lý AI';
    }
    if (willOpen && chatInput) {
      setTimeout(function () {
        chatInput.focus();
      }, 80);
    }
  }

  if (chatTriggerBtn) {
    chatTriggerBtn.addEventListener('click', function () {
      toggleChatDialog();
    });
  }

  document.querySelectorAll('[data-chat-quick]').forEach(function (pill) {
    pill.addEventListener('click', function () {
      const q = pill.getAttribute('data-chat-quick') || '';
      sendChatMessage(q);
    });
  });

  if (chatForm && chatInput) {
    /* IME-Safe Enter key handling for Vietnamese Telex/VNI (per modern-web-guidance) */
    chatInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        if (e.isComposing || e.keyCode === 229) {
          return;
        }
        e.preventDefault();
        sendChatMessage(chatInput.value);
      }
    });

    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      sendChatMessage(chatInput.value);
    });
  }

  /* Inline Lead Capture inside AI Chatbot */
  if (chatLeadForm) {
    let selectedChatLocation = 'dcapitale';
    const locBtns = chatLeadForm.querySelectorAll('[data-chat-loc]');
    locBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedChatLocation = btn.getAttribute('data-chat-loc') || 'dcapitale';
        locBtns.forEach(function (b) {
          const active = b.getAttribute('data-chat-loc') === selectedChatLocation;
          b.style.borderColor = active ? 'var(--brand-rose-deep)' : 'rgba(201,158,145,0.4)';
          b.style.background = active ? 'var(--brand-rose-soft)' : 'var(--surface)';
          b.style.fontWeight = active ? '600' : '500';
        });
      });
    });

    chatLeadForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const nameVal = String(document.getElementById('chat-lead-name')?.value || '').trim();
      const phoneVal = normalizePhone(document.getElementById('chat-lead-phone')?.value || '');
      const consentVal = Boolean(document.getElementById('chat-lead-consent')?.checked);
      const errEl = document.getElementById('chat-lead-error');

      if (!VN_PHONE_REGEX.test(phoneVal) || !consentVal || nameVal.length < 2) {
        if (errEl) {
          errEl.textContent = 'Vui lòng nhập họ tên, SĐT hợp lệ (10 số) và tích đồng ý dữ liệu.';
          errEl.hidden = false;
        }
        return;
      }

      if (errEl) errEl.hidden = true;

      try {
        await submitLeadPayload({
          fullName: nameVal,
          phone: phoneVal,
          zaloSamePhone: true,
          goal: 'other',
          format: 'undecided',
          location: selectedChatLocation,
          timeSlot: 'evening',
          expectedDate: '',
          note: 'Đăng ký tư vấn trực tiếp từ Trợ lý AI Chatbot',
          hasHealthCondition: 'no',
          consentContact: true,
          consentHealth: false,
          source: 'chatbot'
        });
      } catch (_) {
        /* Saved in localStorage */
      }

      chatLeadForm.hidden = true;
      if (chatLeadSuccess) chatLeadSuccess.hidden = false;
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
