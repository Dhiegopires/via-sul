// Live "aberto agora" status.
//
// Base case (no API key configured): a static Monday-Saturday 8h-22h rule
// computed from the visitor's local clock. This CANNOT know about holidays
// or one-off closures — it's an estimate, not a fact, and main.js says so
// below rather than pretending otherwise.
//
// Better case (API key configured): Google's own currentOpeningHours.openNow
// from the Places API, which reflects the special/holiday hours the owner
// sets on the Business Profile — the same override customers already see
// when they check Google directly. This is fetched together with the rating
// and reviews below, one request, not a separate call.
(function () {
  var OPEN_HOUR = 8;
  var CLOSE_HOUR = 22;

  function staticOpenStatus() {
    var now = new Date();
    var day = now.getDay(); // 0 = Sunday ... 6 = Saturday
    var hour = now.getHours() + now.getMinutes() / 60;
    var isBusinessDay = day >= 1 && day <= 6;
    var open = isBusinessDay && hour >= OPEN_HOUR && hour < CLOSE_HOUR;

    var text;
    if (open) {
      text = 'Aberto agora, fecha às 22h';
    } else if (isBusinessDay && hour < OPEN_HOUR) {
      text = 'Fechado agora, abre às 8h';
    } else if (day === 0) {
      text = 'Fechado hoje, abre segunda às 8h';
    } else {
      text = 'Fechado agora, abre amanhã às 8h';
    }
    return { open: open, text: text };
  }

  window.__applyOpenStatus = function (open, text) {
    document.querySelectorAll('[data-open-status]').forEach(function (el) {
      el.textContent = text;
      el.classList.toggle('is-open', open);
    });
  };

  var initial = staticOpenStatus();
  window.__applyOpenStatus(initial.open, initial.text);
})();

// Move focus to the target section on same-page anchor navigation,
// so keyboard and screen reader users land on the right content, not just
// visually scrolled past it.
document.addEventListener('click', function (event) {
  var link = event.target.closest('a[href*="#"]');
  if (!link) return;

  var url = new URL(link.href, window.location.href);
  if (url.pathname !== window.location.pathname) return;

  var id = url.hash.slice(1);
  if (!id) return;

  var target = document.getElementById(id);
  if (!target) return;

  window.requestAnimationFrame(function () {
    target.setAttribute('tabindex', '-1');
    target.focus();
  });
});

// Rating badge, reviews, and open-now status — one Places API call.
//
// The markup for all three ships with the last known-good value baked in
// (rating in the HTML, hours in the static day/hour rule above, reviews
// marked as pending) so nothing is ever blank while this runs, and nothing
// breaks if the key isn't configured yet.
//
// If assets/js/google-config.js has a key + Place ID filled in, this fetches
// live: rating, review count, up to 5 real review texts, and Google's own
// openNow (which accounts for holiday/special hours, unlike the static
// fallback above). The key is safe to expose here as long as it's
// restricted by HTTP referrer in Google Cloud Console (same protection
// every embedded Google Map on the web relies on) — see the comments in
// google-config.js.
function applyRating(rating, reviewCount) {
  if (!rating) return;
  var formatted = Number(rating).toFixed(1).replace('.', ',');
  document.querySelectorAll('[data-rating-value]').forEach(function (el) {
    el.textContent = formatted;
  });
  if (reviewCount) {
    document.querySelectorAll('[data-review-count]').forEach(function (el) {
      el.textContent = ' (' + reviewCount + ' avaliações)';
    });
  }
}

function applyReviews(reviews) {
  if (!reviews || !reviews.length) return;
  document.querySelectorAll('[data-review-slot]').forEach(function (slot) {
    var index = Number(slot.getAttribute('data-review-slot'));
    var review = reviews[index];
    if (!review || !review.text || !review.text.text) return;
    var textEl = slot.querySelector('[data-review-text]');
    var authorEl = slot.querySelector('[data-review-author]');
    if (textEl) textEl.textContent = review.text.text;
    if (authorEl) {
      var name = (review.authorAttribution && review.authorAttribution.displayName) || 'Cliente';
      authorEl.textContent = name + ', avaliação no Google';
    }
  });
}

function fetchStaticRating() {
  fetch('/assets/data/google-rating.json')
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) { if (data) applyRating(data.rating, data.reviewCount); })
    .catch(function () {});
}

var config = window.GOOGLE_PLACES_CONFIG || {};
if (config.apiKey && config.placeId) {
  fetch('https://places.googleapis.com/v1/places/' + config.placeId, {
    headers: {
      'X-Goog-Api-Key': config.apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount,reviews,currentOpeningHours.openNow',
    },
  })
    .then(function (res) { return res.ok ? res.json() : Promise.reject(res.status); })
    .then(function (data) {
      applyRating(data.rating, data.userRatingCount);
      applyReviews(data.reviews);
      if (data.currentOpeningHours && typeof data.currentOpeningHours.openNow === 'boolean') {
        var open = data.currentOpeningHours.openNow;
        window.__applyOpenStatus(open, open ? 'Aberto agora' : 'Fechado agora — confira o horário no Google');
      }
    })
    .catch(fetchStaticRating);
} else {
  fetchStaticRating();
}

// Scroll reveal: sections fade/rise into view once, first paint stays
// visible immediately (no flash of hidden content if JS is slow to attach).
if ('IntersectionObserver' in window) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('in');
  });
}
