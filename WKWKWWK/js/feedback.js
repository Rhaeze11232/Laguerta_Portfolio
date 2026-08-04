/* =====================
   FEEDBACK FORM INTERACTION & EVENT HANDLING
   ===================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const ratingValueInput = document.getElementById('rating-value');
  const starBtns = document.querySelectorAll('.star-btn');
  const messageInput = document.getElementById('fb-message');
  const charCounter = document.getElementById('char-counter');
  const nameInput = document.getElementById('fb-name');
  const emailInput = document.getElementById('fb-email');
  const successBox = document.getElementById('feedback-success');
  const resetBtn = document.getElementById('reset-form-btn');
  const feedbackList = document.getElementById('feedback-list');

  let selectedRating = 0;

  // 1. STAR RATING EVENT HANDLING (Hover & Click Events)
  starBtns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      const val = parseInt(btn.dataset.value, 10);
      highlightStars(val);
    });

    btn.addEventListener('mouseout', () => {
      highlightStars(selectedRating);
    });

    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.dataset.value, 10);
      ratingValueInput.value = selectedRating;
      highlightStars(selectedRating);
      document.getElementById('rating-error').style.display = 'none';
    });
  });

  function highlightStars(count) {
    starBtns.forEach(btn => {
      const val = parseInt(btn.dataset.value, 10);
      if (val <= count) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // 2. REAL-TIME CHARACTER COUNTER (Input Event)
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const currentLength = messageInput.value.length;
      charCounter.textContent = `${currentLength} / 500`;
      if (currentLength >= 480) {
        charCounter.style.color = '#f87171';
      } else {
        charCounter.style.color = 'var(--text-muted)';
      }
    });
  }

  // 3. REAL-TIME VALIDATION (Blur & Input Events)
  nameInput?.addEventListener('input', () => validateName());
  emailInput?.addEventListener('input', () => validateEmail());
  messageInput?.addEventListener('input', () => validateMessage());

  function validateName() {
    const errorEl = document.getElementById('name-error');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      errorEl.style.display = 'block';
      return false;
    }
    errorEl.style.display = 'none';
    return true;
  }

  function validateEmail() {
    const errorEl = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      errorEl.style.display = 'block';
      return false;
    }
    errorEl.style.display = 'none';
    return true;
  }

  function validateMessage() {
    const errorEl = document.getElementById('message-error');
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      errorEl.style.display = 'block';
      return false;
    }
    errorEl.style.display = 'none';
    return true;
  }

  function validateRating() {
    const errorEl = document.getElementById('rating-error');
    if (selectedRating === 0) {
      errorEl.style.display = 'block';
      return false;
    }
    errorEl.style.display = 'none';
    return true;
  }

  // 4. FORM SUBMISSION (Submit Event)
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isRatingValid = validateRating();

    if (!isNameValid || !isEmailValid || !isMessageValid || !isRatingValid) {
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      rating: selectedRating,
      category: document.getElementById('fb-category').value,
      message: messageInput.value.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    saveFeedback(newFeedback);
    form.reset();
    selectedRating = 0;
    highlightStars(0);
    charCounter.textContent = '0 / 500';

    form.style.display = 'none';
    successBox.style.display = 'block';
    renderSavedFeedback();
  });

  // Reset form view
  resetBtn?.addEventListener('click', () => {
    successBox.style.display = 'none';
    form.style.display = 'block';
  });

  // 5. LOCAL STORAGE MANAGEMENT & RENDERING
  function getFeedbackStorage() {
    const stored = localStorage.getItem('jl_portfolio_feedback');
    return stored ? JSON.parse(stored) : [];
  }

  function saveFeedback(item) {
    const list = getFeedbackStorage();
    list.unshift(item);
    localStorage.setItem('jl_portfolio_feedback', JSON.stringify(list));
  }

  function renderSavedFeedback() {
    if (!feedbackList) return;
    const list = getFeedbackStorage();

    if (list.length === 0) {
      feedbackList.innerHTML = '<p class="empty-msg">No feedback submitted yet. Be the first!</p>';
      return;
    }

    feedbackList.innerHTML = list.map(item => `
      <div class="feedback-card">
        <div class="feedback-card-header">
          <div>
            <span class="feedback-card-author">${escapeHTML(item.name)}</span>
            <span class="feedback-card-category">${escapeHTML(item.category)}</span>
          </div>
          <span class="feedback-card-stars">${'&#9733;'.repeat(item.rating)}${'&#9734;'.repeat(5 - item.rating)}</span>
        </div>
        <p class="feedback-card-msg">${escapeHTML(item.message)}</p>
        <div class="feedback-card-date">${item.date}</div>
      </div>
    `).join('');
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Load existing items on init
  renderSavedFeedback();
});
