/* app.js — RepRise workout planner (photo-demo edition) */
(function () {
  'use strict';

  var EXERCISES = (window.EXERCISES || []).slice();

  var GROUPS = [
    { key: 'Chest',               color: '#ff6b35' },
    { key: 'Back',                color: '#38bdf8' },
    { key: 'Shoulders',           color: '#a78bfa' },
    { key: 'Biceps',              color: '#f472b6' },
    { key: 'Triceps',             color: '#fb7185' },
    { key: 'Quadriceps',          color: '#34d399' },
    { key: 'Hamstrings & Glutes', color: '#fbbf24' },
    { key: 'Calves',              color: '#22d3ee' },
    { key: 'Core',                color: '#f59e0b' }
  ];
  var GROUP_BY_KEY = {};
  GROUPS.forEach(function (g) {
    GROUP_BY_KEY[g.key] = g;
    var first = EXERCISES.filter(function (e) { return e.muscleGroup === g.key; })[0];
    g.rep = first && first.images ? first.images[0] : '';
  });

  var EX_BY_ID = {};
  EXERCISES.forEach(function (e) { EX_BY_ID[e.id] = e; });

  var EQUIP = ['All'].concat(unique(EXERCISES.map(function (e) { return e.equipment; })).sort());
  var DIFFS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  var state = { view: 'browse', group: null, q: '', equip: 'All', diff: 'All' };

  // ---------- plan persistence ----------
  var K_PLAN = 'reprise.plan.v2';
  var K_SAVED = 'reprise.saved.v2';
  var plan = loadPlan();

  function defaultPlan() { return { name: 'My Plan', days: [{ id: uid(), name: 'Day 1', items: [] }] }; }
  function loadPlan() {
    try { var raw = localStorage.getItem(K_PLAN); if (raw) { var p = JSON.parse(raw); if (p && p.days) return p; } } catch (e) {}
    return defaultPlan();
  }
  function savePlanLocal() { try { localStorage.setItem(K_PLAN, JSON.stringify(plan)); } catch (e) {} }
  function getSaved() { try { return JSON.parse(localStorage.getItem(K_SAVED) || '{}'); } catch (e) { return {}; } }
  function setSaved(o) { try { localStorage.setItem(K_SAVED, JSON.stringify(o)); } catch (e) {} }

  // ---------- helpers ----------
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function unique(a) { var s = {}, o = []; a.forEach(function (x) { if (!s[x]) { s[x] = 1; o.push(x); } }); return o; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function planCount() { var n = 0; plan.days.forEach(function (d) { n += d.items.length; }); return n; }
  function inPlan(id) { return plan.days.some(function (d) { return d.items.some(function (i) { return i.exId === id; }); }); }
  function exercisesFor(k) { return EXERCISES.filter(function (e) { return e.muscleGroup === k; }); }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    return EXERCISES.filter(function (e) {
      if (state.group && e.muscleGroup !== state.group) return false;
      if (state.equip !== 'All' && e.equipment !== state.equip) return false;
      if (state.diff !== 'All' && e.difficulty !== state.diff) return false;
      if (q) {
        var hay = (e.name + ' ' + e.muscleGroup + ' ' + (e.primaryMuscles || []).join(' ') + ' ' + e.equipment).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  // ---------- animated photo demo ----------
  function mediaHTML(e, cls) {
    var imgs = e.images || [];
    var a = imgs[0] || '', b = imgs[1] || a;
    return '<div class="media ' + (cls || '') + '">' +
      '<img class="f1" src="' + esc(a) + '" loading="lazy" decoding="async" alt="" referrerpolicy="no-referrer" />' +
      '<img class="f2" src="' + esc(b) + '" loading="lazy" decoding="async" alt="" referrerpolicy="no-referrer" onerror="this.remove()" />' +
      '<span class="media-shine"></span></div>';
  }

  // ---------- rendering ----------
  var view = $('#view');

  function render() {
    if (state.view === 'browse') renderBrowse(); else renderPlan();
    updateTabs();
  }
  function updateTabs() {
    Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (t) {
      t.classList.toggle('active', t.getAttribute('data-view') === state.view);
    });
    var n = planCount(), b = $('#planCount');
    b.textContent = n; b.hidden = n === 0;
  }

  function toolbarHTML(showFilters) {
    var equip = EQUIP.map(function (q) { return '<button class="chip' + (state.equip === q ? ' active' : '') + '" data-action="set-equip" data-val="' + esc(q) + '">' + esc(q) + '</button>'; }).join('');
    var diff = DIFFS.map(function (d) { return '<button class="chip' + (state.diff === d ? ' active' : '') + '" data-action="set-diff" data-val="' + esc(d) + '">' + esc(d) + '</button>'; }).join('');
    return '<div class="toolbar">' +
      '<label class="search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' +
      '<input id="searchInput" type="search" inputmode="search" placeholder="Search 144 exercises…" value="' + esc(state.q) + '" /></label>' +
      (showFilters ? '<div class="chips">' + diff + '</div><div class="chips">' + equip + '</div>' : '') +
      '</div>';
  }

  function renderBrowse() {
    var showList = !!state.group || state.q.trim() !== '' || state.equip !== 'All' || state.diff !== 'All';
    var html = '';
    if (state.group) {
      var g = GROUP_BY_KEY[state.group];
      html += '<div class="view-head"><button class="back-btn" data-action="back-groups"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>Groups</button>' +
        '<h2 style="color:' + g.color + '">' + esc(state.group) + '</h2></div>' + toolbarHTML(true) + listHTML(filtered());
    } else if (showList) {
      html += '<div class="view-head"><h2>Search</h2></div>' + toolbarHTML(true) + listHTML(filtered());
    } else {
      html += '<div class="hero"><h2>Find your next workout</h2><p>Pick a muscle group, watch the demo, build your plan.</p></div>' +
        toolbarHTML(false) + '<div class="section-title">Muscle groups</div><div class="group-grid">';
      GROUPS.forEach(function (g) {
        var c = exercisesFor(g.key).length;
        html += '<button class="group-card" data-action="open-group" data-group="' + esc(g.key) + '">' +
          '<div class="gc-bg" style="background-image:url(\'' + esc(g.rep) + '\')"></div>' +
          '<div class="gc-overlay"></div>' +
          '<span class="gc-bar" style="background:' + g.color + '"></span>' +
          '<div class="gc-content"><h3>' + esc(g.key) + '</h3><div class="gc-count">' + c + ' exercises</div></div>' +
          '<svg class="gc-arrow" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>';
      });
      html += '</div>';
    }
    view.innerHTML = html;
    var si = $('#searchInput');
    if (si) si.addEventListener('input', function () { state.q = si.value; refreshListOnly(); });
  }

  function refreshListOnly() {
    var existing = view.querySelector('.ex-list, .empty');
    if (!existing) { render(); return; }
    var w = document.createElement('div'); w.innerHTML = listHTML(filtered());
    existing.replaceWith(w.firstElementChild);
  }

  function listHTML(list) {
    if (!list.length) return '<div class="empty"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><h3>No exercises found</h3><div>Try another search or filter.</div></div>';
    return '<div class="ex-list">' + list.map(exCardHTML).join('') + '</div>';
  }

  function exCardHTML(e) {
    var added = inPlan(e.id);
    return '<div class="ex-card" data-action="open-ex" data-id="' + esc(e.id) + '">' +
      '<div class="ex-thumb">' + mediaHTML(e, 'mini') + '</div>' +
      '<div class="ex-main"><h3>' + esc(e.name) + '</h3>' +
      '<div class="ex-sub">' + esc(e.muscleGroup) + ' · ' + esc((e.primaryMuscles || [])[0] || '') + '</div>' +
      '<div class="badges"><span class="badge equip">' + esc(e.equipment) + '</span>' +
      '<span class="badge diff-' + esc(e.difficulty) + '">' + esc(e.difficulty) + '</span>' +
      '<span class="badge">' + esc(e.sets) + '×' + esc(e.reps) + '</span></div></div>' +
      '<button class="ex-add' + (added ? ' added' : '') + '" data-action="add-ex" data-id="' + esc(e.id) + '" aria-label="Add to plan">' + (added ? '✓' : '+') + '</button></div>';
  }

  // ---------- exercise modal ----------
  var modal = $('#modal'), modalBody = $('#modalBody');
  function chip(label, val) { return '<span class="dchip"><b>' + esc(val) + '</b>' + esc(label) + '</span>'; }
  function block(title, inner) { return '<div class="detail-block"><h4>' + esc(title) + '</h4>' + inner + '</div>'; }

  function openExercise(id) {
    var e = EX_BY_ID[id]; if (!e) return;
    var added = inPlan(e.id);
    var instr = (e.instructions || []).filter(function (s) { return s && s.trim(); });
    var html = '<div class="demo-media">' + mediaHTML(e, 'big') +
      '<span class="live-badge"><i></i>LIVE DEMO</span>' +
      '<div class="demo-controls"><button class="demo-btn" data-action="demo-toggle">❚❚&nbsp;Pause</button></div></div>' +
      '<h2>' + esc(e.name) + '</h2>' +
      '<div class="ex-sub">' + esc(e.muscleGroup) + ' · ' + esc(e.equipment) + ' · ' + esc(e.difficulty) + '</div>' +
      '<div class="detail-chips">' + chip('Sets', e.sets) + chip('Reps', e.reps) +
      (e.mechanic ? chip('Type', e.mechanic) : '') + (e.force ? chip('Force', e.force) : '') + '</div>' +
      (instr.length ? block('How to perform', '<ol>' + instr.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>') : '') +
      block('Muscles worked', '<div class="muscle-tags">' +
        (e.primaryMuscles || []).map(function (m) { return '<span class="muscle-tag primary">' + esc(m) + '</span>'; }).join('') +
        (e.secondaryMuscles || []).map(function (m) { return '<span class="muscle-tag">' + esc(m) + '</span>'; }).join('') + '</div>') +
      '<div class="modal-cta"><button class="btn-primary' + (added ? ' added' : '') + '" data-action="add-ex" data-id="' + esc(e.id) + '">' +
      (added ? '✓ In your plan — add again' : '+ Add to plan') + '</button></div>';
    modalBody.innerHTML = html;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }
  function closeModal() { modal.hidden = true; modalBody.innerHTML = ''; document.body.style.overflow = ''; }

  // ---------- plan view ----------
  function renderPlan() {
    var html = '<div class="view-head"><h2>My Plan</h2></div>' +
      '<div class="plan-name-row"><input id="planName" value="' + esc(plan.name) + '" aria-label="Plan name" /></div>' +
      '<div class="plan-toolbar">' + btn('plan-save', 'accent', 'save', 'Save') + btn('plan-load', '', 'folder', 'Load') +
      btn('plan-new', 'ghost', 'plus', 'New') + btn('plan-export', 'ghost', 'download', 'Export') + btn('plan-import', 'ghost', 'upload', 'Import') + '</div>';

    if (planCount() === 0) html += '<div class="empty"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><h3>Your plan is empty</h3><div>Go to <b>Browse</b> and tap <b>+</b> on any exercise to build your routine.</div></div>';

    plan.days.forEach(function (day) {
      var vol = day.items.length;
      var done = day.items.filter(function (i) { return i.done; }).length;
      var pct = vol ? Math.round(done / vol * 100) : 0;
      html += '<div class="day' + (vol && done === vol ? ' complete' : '') + '"><div class="day-head"><span class="day-dot"></span>' +
        '<input data-action="rename-day" data-day="' + day.id + '" value="' + esc(day.name) + '" />' +
        '<span class="day-vol">' + done + '/' + vol + '</span>' +
        iconBtn('reset-day', '', 'reset', day.id) + iconBtn('del-day', 'danger', 'trash', day.id) + '</div>' +
        (vol ? '<div class="day-progress"><span style="width:' + pct + '%"></span></div>' : '') +
        '<div class="day-items">';
      if (!vol) html += '<div class="empty-day">No exercises yet.</div>';
      else day.items.forEach(function (it, ii) {
        var e = EX_BY_ID[it.exId]; if (!e) return;
        html += '<div class="plan-item' + (it.done ? ' done' : '') + '">' +
          '<button class="pi-check' + (it.done ? ' on' : '') + '" data-action="toggle-done" data-day="' + day.id + '" data-idx="' + ii + '" aria-label="Mark exercise done">' + icon('check') + '</button>' +
          '<div class="pi-thumb">' + mediaHTML(e, 'mini') + '</div>' +
          '<div class="pi-main"><h4>' + esc(e.name) + '</h4><div class="pi-sets">' +
          '<span class="sr">Sets <input type="text" inputmode="numeric" pattern="[0-9]*" value="' + esc(it.sets) + '" data-action="edit-field" data-day="' + day.id + '" data-idx="' + ii + '" data-field="sets" /></span>' +
          '<span class="sr">Reps <input type="text" inputmode="numeric" pattern="[0-9]*" value="' + esc(it.reps) + '" data-action="edit-field" data-day="' + day.id + '" data-idx="' + ii + '" data-field="reps" /></span></div></div>' +
          '<div class="pi-actions">' + iconBtn('move-up', '', 'up', day.id, ii) + iconBtn('move-down', '', 'down', day.id, ii) + iconBtn('remove-item', 'danger', 'x', day.id, ii) + '</div></div>';
      });
      html += '</div></div>';
    });
    html += '<button class="btn ghost add-day-btn" data-action="add-day">' + icon('plus') + ' Add training day</button>';
    view.innerHTML = html;
    var pn = $('#planName');
    if (pn) pn.addEventListener('change', function () { plan.name = pn.value.trim() || 'My Plan'; savePlanLocal(); });
  }

  function btn(a, c, ic, label) { return '<button class="btn ' + c + '" data-action="' + a + '">' + icon(ic) + (label ? '<span>' + label + '</span>' : '') + '</button>'; }
  function iconBtn(a, c, ic, dayId, idx) { return '<button class="icon-btn ' + c + '" data-action="' + a + '"' + (dayId != null ? ' data-day="' + dayId + '"' : '') + (idx != null ? ' data-idx="' + idx + '"' : '') + '>' + icon(ic) + '</button>'; }
  function icon(n) {
    var p = { save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>', folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>', plus: '<path d="M12 5v14M5 12h14"/>', download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>', upload: '<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>', trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>', up: '<path d="M18 15l-6-6-6 6"/>', down: '<path d="M6 9l6 6 6-6"/>', x: '<path d="M18 6L6 18M6 6l12 12"/>', check: '<path d="M20 6L9 17l-5-5"/>', reset: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>' }[n] || '';
    return '<svg viewBox="0 0 24 24">' + p + '</svg>';
  }

  // ---------- plan actions ----------
  function addToPlan(id) {
    var e = EX_BY_ID[id]; if (!e) return;
    if (!plan.days.length) plan.days.push({ id: uid(), name: 'Day 1', items: [] });
    if (plan.days.length === 1) { pushItem(plan.days[0], e); return; }
    chooseDay(function (d) { pushItem(d, e); });
  }
  function pushItem(day, e) {
    day.items.push({ exId: e.id, sets: (String(e.sets).match(/\d+/) || ['3'])[0], reps: e.reps });
    savePlanLocal(); toast('Added to ' + day.name, true);
    if (state.view === 'plan') render(); else updateTabs();
    syncAddButtons();
  }
  function chooseDay(cb) {
    var html = '<h2>Add to which day?</h2><div class="ex-sub">Choose a training day.</div><div class="sheet-list">';
    plan.days.forEach(function (d) { html += '<button class="saved-row" data-choose="' + d.id + '"><div class="sr-main"><h4>' + esc(d.name) + '</h4><div class="sr-meta">' + d.items.length + ' exercises</div></div>' + icon('plus') + '</button>'; });
    html += '</div>';
    modalBody.innerHTML = html; modal.hidden = false; document.body.style.overflow = 'hidden';
    modalBody.querySelectorAll('[data-choose]').forEach(function (b) {
      b.addEventListener('click', function () { var d = plan.days.filter(function (x) { return x.id === b.getAttribute('data-choose'); })[0]; closeModal(); if (d) cb(d); });
    });
  }
  function syncAddButtons() {
    document.querySelectorAll('.ex-add[data-id]').forEach(function (b) { var a = inPlan(b.getAttribute('data-id')); b.classList.toggle('added', a); b.textContent = a ? '✓' : '+'; });
  }
  function dayById(id) { return plan.days.filter(function (d) { return d.id === id; })[0]; }

  function doSave() {
    var name = (plan.name || '').trim() || 'My Plan'; plan.name = name;
    var s = getSaved(); s[name] = JSON.parse(JSON.stringify(plan)); setSaved(s); savePlanLocal();
    toast('Saved “' + name + '”', true);
  }
  function doLoadSheet() {
    var saved = getSaved(), names = Object.keys(saved), html = '<h2>Saved plans</h2>';
    if (!names.length) html += '<div class="empty" style="margin-top:14px"><h3>No saved plans</h3><div>Build a plan and tap <b>Save</b>.</div></div>';
    else {
      html += '<div class="sheet-list">';
      names.forEach(function (n) {
        var p = saved[n], count = (p.days || []).reduce(function (a, d) { return a + d.items.length; }, 0);
        html += '<div class="saved-row"><div class="sr-main"><h4>' + esc(n) + '</h4><div class="sr-meta">' + (p.days || []).length + ' days · ' + count + ' exercises</div></div>' +
          '<button class="btn accent" data-load="' + esc(n) + '">Load</button><button class="icon-btn danger" data-delsaved="' + esc(n) + '">' + icon('trash') + '</button></div>';
      });
      html += '</div>';
    }
    modalBody.innerHTML = html; modal.hidden = false; document.body.style.overflow = 'hidden';
    modalBody.querySelectorAll('[data-load]').forEach(function (b) { b.addEventListener('click', function () { var n = b.getAttribute('data-load'); plan = JSON.parse(JSON.stringify(getSaved()[n])); savePlanLocal(); closeModal(); state.view = 'plan'; render(); toast('Loaded “' + n + '”', true); }); });
    modalBody.querySelectorAll('[data-delsaved]').forEach(function (b) { b.addEventListener('click', function () { var n = b.getAttribute('data-delsaved'); var s = getSaved(); delete s[n]; setSaved(s); doLoadSheet(); }); });
  }
  function doNew() { if (planCount() > 0 && !confirm('Start a new empty plan? Unsaved changes are lost.')) return; plan = defaultPlan(); savePlanLocal(); render(); toast('New plan started'); }
  function doExport() {
    var blob = new Blob([JSON.stringify(plan, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = (plan.name || 'workout-plan').replace(/[^a-z0-9-_]+/gi, '-').toLowerCase() + '.json';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function doImport() {
    var inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'application/json,.json';
    inp.addEventListener('change', function () { var f = inp.files[0]; if (!f) return; var r = new FileReader(); r.onload = function () { try { var p = JSON.parse(r.result); if (!p || !p.days) throw 0; plan = p; savePlanLocal(); state.view = 'plan'; render(); toast('Plan imported', true); } catch (e) { toast('Could not read that file'); } }; r.readAsText(f); });
    inp.click();
  }

  // ---------- toast ----------
  var toastEl = $('#toast'), toastTimer;
  function toast(msg, ok) { toastEl.textContent = msg; toastEl.className = 'toast show' + (ok ? ' success' : ''); toastEl.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2100); }

  // ---------- events ----------
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest ? ev.target.closest('[data-action]') : null; if (!t) return;
    var a = t.getAttribute('data-action'), id = t.getAttribute('data-id'), dayId = t.getAttribute('data-day'), idx = t.getAttribute('data-idx');
    if (a === 'open-ex') openExercise(id);
    else if (a === 'add-ex') { ev.stopPropagation(); addToPlan(id); }
    else if (a === 'open-group') { state.group = t.getAttribute('data-group'); state.q = ''; state.equip = 'All'; state.diff = 'All'; render(); window.scrollTo(0, 0); }
    else if (a === 'back-groups') { state.group = null; state.q = ''; state.equip = 'All'; state.diff = 'All'; render(); }
    else if (a === 'set-equip') { state.equip = t.getAttribute('data-val'); render(); }
    else if (a === 'set-diff') { state.diff = t.getAttribute('data-val'); render(); }
    else if (a === 'demo-toggle') toggleDemo(t);
    else if (a === 'plan-save') doSave();
    else if (a === 'plan-load') doLoadSheet();
    else if (a === 'plan-new') doNew();
    else if (a === 'plan-export') doExport();
    else if (a === 'plan-import') doImport();
    else if (a === 'add-day') { plan.days.push({ id: uid(), name: 'Day ' + (plan.days.length + 1), items: [] }); savePlanLocal(); render(); }
    else if (a === 'del-day') { var d = dayById(dayId); if (d && (!d.items.length || confirm('Delete “' + d.name + '”?'))) { plan.days = plan.days.filter(function (x) { return x.id !== dayId; }); savePlanLocal(); render(); syncAddButtons(); } }
    else if (a === 'move-up') reorder(dayId, +idx, -1, t);
    else if (a === 'move-down') reorder(dayId, +idx, 1, t);
    else if (a === 'remove-item') { var dd = dayById(dayId); if (dd) { dd.items.splice(+idx, 1); savePlanLocal(); render(); syncAddButtons(); } }
    else if (a === 'toggle-done') {
      var d3 = dayById(dayId); if (!d3) return;
      var it3 = d3.items[+idx]; if (!it3) return;
      it3.done = !it3.done; savePlanLocal();
      var itemEl = t.closest('.plan-item');
      if (itemEl) { itemEl.classList.toggle('done', it3.done); t.classList.toggle('on', it3.done); updateDayProgress(d3, t.closest('.day')); }
    }
    else if (a === 'reset-day') { var d4 = dayById(dayId); if (d4 && d4.items.some(function (i) { return i.done; })) { d4.items.forEach(function (i) { i.done = false; }); savePlanLocal(); render(); } }
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target, a = t.getAttribute && t.getAttribute('data-action');
    if (a === 'edit-field') { var d = dayById(t.getAttribute('data-day')); if (!d) return; var it = d.items[+t.getAttribute('data-idx')]; if (it) { it[t.getAttribute('data-field')] = t.value; savePlanLocal(); } }
    else if (a === 'rename-day') { var dy = dayById(t.getAttribute('data-day')); if (dy) { dy.name = t.value; savePlanLocal(); } }
  });
  function reorder(dayId, idx, dir, btn) {
    var d = dayById(dayId); if (!d) return;
    var j = idx + dir;
    if (j < 0 || j >= d.items.length) return;
    var tmp = d.items[idx]; d.items[idx] = d.items[j]; d.items[j] = tmp;
    savePlanLocal();
    var itemA = btn && btn.closest('.plan-item');
    var container = itemA && itemA.parentNode;
    if (!container) { render(); return; }
    var a = container.children[idx], b = container.children[j];
    if (!a || !b) { render(); return; }
    var firstA = a.getBoundingClientRect().top, firstB = b.getBoundingClientRect().top;
    if (dir === -1) container.insertBefore(a, b); else container.insertBefore(b, a);
    flip(a, firstA - a.getBoundingClientRect().top, true);
    flip(b, firstB - b.getBoundingClientRect().top, false);
    reindex(container);
  }
  function flip(el, delta, lift) {
    el.style.transition = 'none';
    el.style.transform = 'translateY(' + delta + 'px)';
    if (lift) el.classList.add('lift');
    el.getBoundingClientRect(); // force reflow so the start position sticks
    el.style.transition = 'transform .26s cubic-bezier(.2,.85,.25,1)';
    el.style.transform = '';
    var done = function () { el.style.transition = ''; el.style.transform = ''; el.classList.remove('lift'); el.removeEventListener('transitionend', done); };
    el.addEventListener('transitionend', done);
    setTimeout(done, 360);
  }
  function reindex(container) {
    var kids = container.children;
    for (var k = 0; k < kids.length; k++) {
      var nodes = kids[k].querySelectorAll('[data-idx]');
      for (var m = 0; m < nodes.length; m++) nodes[m].setAttribute('data-idx', k);
    }
  }
  function updateDayProgress(day, dayEl) {
    if (!dayEl) return;
    var vol = day.items.length, done = day.items.filter(function (i) { return i.done; }).length;
    var v = dayEl.querySelector('.day-vol'); if (v) v.textContent = done + '/' + vol;
    var bar = dayEl.querySelector('.day-progress span'); if (bar) bar.style.width = (vol ? Math.round(done / vol * 100) : 0) + '%';
    dayEl.classList.toggle('complete', vol > 0 && done === vol);
  }
  function toggleDemo(b) { var m = b.closest('.demo-media').querySelector('.media'); if (!m) return; var p = m.classList.toggle('paused'); b.innerHTML = p ? '►&nbsp;Play' : '❚❚&nbsp;Pause'; }

  document.querySelectorAll('.tab').forEach(function (tab) { tab.addEventListener('click', function () { state.view = tab.getAttribute('data-view'); render(); window.scrollTo(0, 0); }); });
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

  // ---------- install ----------
  var deferred = null, installBtn = $('#installBtn');
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; installBtn.hidden = false; });
  installBtn.addEventListener('click', function () { if (!deferred) return; deferred.prompt(); deferred.userChoice.then(function () { deferred = null; installBtn.hidden = true; }); });
  window.addEventListener('appinstalled', function () { installBtn.hidden = true; toast('Installed! Find RepRise on your home screen.', true); });
  (function () {
    var iOS = /iphone|ipad|ipod/i.test(navigator.userAgent), standalone = ('standalone' in navigator) && navigator.standalone;
    if (iOS && !standalone && !localStorage.getItem('reprise.iosHint')) setTimeout(function () { toast('Install: tap Share ▸ Add to Home Screen'); localStorage.setItem('reprise.iosHint', '1'); }, 1800);
  })();

  // ---------- boot ----------
  if (!EXERCISES.length) view.innerHTML = '<div class="empty"><h3>No exercises loaded</h3></div>';
  else render();
})();
