/* =========================================================================
   PORTFOLIO SCRIPT
   ========================================================================= */
(function () {
  "use strict";
  const D = PORTFOLIO_DATA;

  /* -----------------------------------------------------------------
     RENDER: fill DOM from data.js
  ----------------------------------------------------------------- */
  function renderBasics() {
    document.title = `${D.name} — ${D.role}`;
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("aboutSummary").textContent = D.summary;
    document.getElementById("metaLocation").textContent = D.location;
    document.getElementById("metaPhone").textContent = D.phone;
    document.getElementById("metaEmail").textContent = D.email;

    // profile photo (falls back to initials monogram if not found)
    const avatarImg = document.getElementById("avatarImg");
    const initials = D.name.split(" ").filter(Boolean).map(w => w[0]).slice(0, 2).join("").toUpperCase();
    document.getElementById("avatarFallback").textContent = initials;
    avatarImg.addEventListener("error", () => { avatarImg.style.display = "none"; });
    if (D.profilePhoto) avatarImg.src = D.profilePhoto;

    // resume buttons
    document.getElementById("resumeBtnNav").setAttribute("href", D.resumeFile);
document.getElementById("resumeBtnHero").setAttribute("href", D.resumeFile);
document.getElementById("resumeBtnHero").setAttribute("download", "");
    // contact section
    document.getElementById("contactEmailText").textContent = D.email;
    document.getElementById("contactPhoneText").textContent = D.phone;
    document.getElementById("contactEmail").href = D.socials.email;
    document.getElementById("contactPhone").href = D.socials.phone;
    document.getElementById("contactGithub").href = D.socials.github;
    document.getElementById("contactLinkedin").href = D.socials.linkedin;
    document.getElementById("contactFacebook").href = D.socials.facebook;
    document.getElementById("contactPortfolio").href = D.socials.portfolio;

    // hero socials
    const heroSocials = document.getElementById("heroSocials");
    const iconMap = [
      { key: "github", icon: "fa-brands fa-github" },
      { key: "linkedin", icon: "fa-brands fa-linkedin" },
      { key: "facebook", icon: "fa-brands fa-facebook" },
      { key: "email", icon: "fa-solid fa-envelope" }
    ];
    heroSocials.innerHTML = iconMap.map(item =>
      `<a href="${D.socials[item.key]}" target="${item.key === 'email' ? '_self' : '_blank'}" rel="noopener" aria-label="${item.key}"><i class="${item.icon}"></i></a>`
    ).join("");
  }

  function renderSoftSkills() {
    const el = document.getElementById("softSkills");
    el.innerHTML = D.softSkills.map(s => `<span class="soft-skill-pill">${s}</span>`).join("");
  }

  function renderTimeline() {
    const el = document.getElementById("timeline");
    el.innerHTML = D.education.map(e => `
      <div class="timeline-item reveal-item">
        <div class="timeline-tag">${e.tag}</div>
        <div class="timeline-degree">${e.degree}</div>
        <div class="timeline-inst">${e.institute}</div>
        <div class="timeline-period">${e.period}</div>
        <span class="timeline-detail">${e.detail}</span>
      </div>
    `).join("");
  }

  function renderSkills() {
    const el = document.getElementById("skillsGrid");
    el.innerHTML = D.skillGroups.map(g => `
      <div class="skill-card reveal-item">
        <div class="skill-card-head">
          <span class="skill-card-label">${g.label}</span>
          <span class="skill-card-ref">${g.ref}</span>
        </div>
        <div class="skill-tags">
          ${g.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderProjects() {
    const el = document.getElementById("projectsGrid");
    el.innerHTML = D.projects.map(p => {
      const media = p.video
        ? `<video src="${p.video}" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()" poster="${p.image}"></video>`
        : `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'project-media-placeholder',innerHTML:'<i class=\\'fa-solid fa-image\\'></i><span><br>${p.image}</span>'}))">`;
      return `
      <article class="project-card reveal-item">
        <div class="project-media">${media}</div>
        <div class="project-body">
          <div class="project-top">
            <span class="project-title">${p.title}</span>
            <span class="project-ref">${p.ref}</span>
          </div>
          <p class="project-desc">${p.description}</p>
          <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderRecords() {
    document.getElementById("certsList").innerHTML = D.certifications.map(c => `
      <div class="record-item reveal-item">
        <div class="record-item-title">${c.title}</div>
        <div class="record-item-sub">${c.org} · ${c.year}</div>
      </div>
    `).join("");

    document.getElementById("achList").innerHTML = D.achievements.map(a => `
      <div class="ach-item reveal-item">
        <div class="ach-item-title">${a.title}</div>
        <div class="ach-item-sub">${a.org} · ${a.year}</div>
        <div class="ach-item-detail">${a.detail}</div>
      </div>
    `).join("");

    document.getElementById("extraList").innerHTML = D.extracurricular.map(e => `<li>${e}</li>`).join("");
  }

  /* -----------------------------------------------------------------
     HERO: boot text + role typing
  ----------------------------------------------------------------- */
  function typeText(el, text, speed, onDone) {
    let i = 0;
    el.textContent = "";
    (function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else if (onDone) {
        onDone();
      }
    })();
  }

  function runBoot() {
    const bootEl = document.getElementById("bootText");
    typeText(bootEl, "initializing portfolio...", 32, () => {
      setTimeout(() => {
        document.getElementById("heroTagline").textContent = D.tagline;
        runRoleRotator();
      }, 300);
    });
  }

  function runRoleRotator() {
    const el = document.getElementById("roleText");
    const roles = D.roles && D.roles.length ? D.roles : [D.role];
    let idx = 0;

    function cycle() {
      const current = roles[idx % roles.length];
      typeText(el, current, 42, () => {
        setTimeout(() => eraseText(), 1400);
      });
    }
    function eraseText() {
      let text = el.textContent;
      (function step() {
        if (text.length > 0) {
          text = text.slice(0, -1);
          el.textContent = text;
          setTimeout(step, 22);
        } else {
          idx++;
          cycle();
        }
      })();
    }
    cycle();
  }

  /* -----------------------------------------------------------------
     SCROLL REVEAL
  ----------------------------------------------------------------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-item");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(t => observer.observe(t));
  }

  /* -----------------------------------------------------------------
     NAV: sticky shrink + mobile toggle + smooth close on link click
  ----------------------------------------------------------------- */
  function initNav() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("is-open");
      links.classList.toggle("is-open");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      toggle.classList.remove("is-open");
      links.classList.remove("is-open");
    }));
  }

  /* -----------------------------------------------------------------
     CURSOR TRACE DOT (desktop)
  ----------------------------------------------------------------- */
  function initCursorTrace() {
    const dot = document.getElementById("traceDot");
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    window.addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    });
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => dot.style.transform = "translate(-50%,-50%) scale(1.8)");
      el.addEventListener("mouseleave", () => dot.style.transform = "translate(-50%,-50%) scale(1)");
    });
  }

  /* -----------------------------------------------------------------
     CIRCUIT BACKGROUND CANVAS
     Draws faint animated circuit traces with traveling pulses of light.
  ----------------------------------------------------------------- */
  function initCircuitCanvas() {
    const canvas = document.getElementById("circuit-canvas");
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, nodes, paths, pulses;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * (document.body.scrollHeight / window.innerHeight > 1 ? 1 : 1);
      h = canvas.height = window.innerHeight;
      buildPaths();
    }

    function buildPaths() {
      const cols = Math.max(4, Math.floor(w / 220));
      const rows = Math.max(3, Math.floor(h / 220));
      nodes = [];
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          nodes.push({
            x: (i / cols) * w + (Math.random() - 0.5) * 60,
            y: (j / rows) * h + (Math.random() - 0.5) * 60
          });
        }
      }
      paths = [];
      const count = Math.min(26, Math.floor((cols * rows) / 2));
      for (let i = 0; i < count; i++) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (a === b) continue;
        // right-angle circuit path (L-shape)
        const midX = Math.random() > 0.5 ? b.x : a.x;
        paths.push({
          points: [
            { x: a.x, y: a.y },
            { x: midX, y: a.y },
            { x: midX, y: b.y },
            { x: b.x, y: b.y }
          ]
        });
      }
      pulses = paths.map((p, idx) => ({
        pathIndex: idx,
        t: Math.random(),
        speed: 0.0022 + Math.random() * 0.003
      }));
    }

    function pointOnPath(points, t) {
      // total length based interpolation across segments
      const segLens = [];
      let total = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const dx = points[i+1].x - points[i].x;
        const dy = points[i+1].y - points[i].y;
        const len = Math.sqrt(dx*dx + dy*dy);
        segLens.push(len);
        total += len;
      }
      let dist = t * total;
      for (let i = 0; i < segLens.length; i++) {
        if (dist <= segLens[i] || i === segLens.length - 1) {
          const ratio = segLens[i] ? dist / segLens[i] : 0;
          const p0 = points[i], p1 = points[i+1];
          return {
            x: p0.x + (p1.x - p0.x) * Math.min(ratio, 1),
            y: p0.y + (p1.y - p0.y) * Math.min(ratio, 1)
          };
        }
        dist -= segLens[i];
      }
      return points[points.length - 1];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // traces
      ctx.strokeStyle = "rgba(94, 234, 212, 0.10)";
      ctx.lineWidth = 1;
      paths.forEach(p => {
        ctx.beginPath();
        p.points.forEach((pt, i) => i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y));
        ctx.stroke();
        // node dots
        ctx.fillStyle = "rgba(94, 234, 212, 0.16)";
        ctx.beginPath();
        ctx.arc(p.points[0].x, p.points[0].y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.points[p.points.length-1].x, p.points[p.points.length-1].y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // pulses
      pulses.forEach(pulse => {
        const path = paths[pulse.pathIndex];
        if (!path) return;
        const pos = pointOnPath(path.points, pulse.t);
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 7);
        grad.addColorStop(0, "rgba(94, 234, 212, 0.9)");
        grad.addColorStop(1, "rgba(94, 234, 212, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 7, 0, Math.PI * 2);
        ctx.fill();

        if (!reduceMotion) {
          pulse.t += pulse.speed;
          if (pulse.t > 1) pulse.t = 0;
        }
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
  }

  /* -----------------------------------------------------------------
     AI ASSISTANT — local keyword-based answer engine
     (Static hosting = no safe place for a real API key, so this is
     a smart search over the portfolio data, not a live LLM call.
     See README.md if you later add a backend to wire up real AI.)
  ----------------------------------------------------------------- */
  function buildKnowledgeBase() {
    const kb = [];

    kb.push({
      keys: ["hello","hi","hey","who are you","what can you do"],
      answer: `Hey! I'm a small assistant wired into ${D.name}'s portfolio. Ask me about his skills, projects, education, achievements or how to contact him.`
    });

    kb.push({
      keys: ["skill","skills","stack","technology","technologies","language","languages","tech stack"],
      answer: "Skills: " + D.skillGroups.map(g => `${g.label} — ${g.skills.join(", ")}`).join(" | ")
    });

    kb.push({
      keys: ["project","projects","built","build","work","portfolio project"],
      answer: "Projects: " + D.projects.map(p => `${p.title} (${p.stack.join(", ")})`).join("; ")
    });

    D.projects.forEach(p => {
      kb.push({
        keys: [p.title.toLowerCase(), ...p.stack.map(s => s.toLowerCase())],
        answer: `${p.title}: ${p.description} Tech: ${p.stack.join(", ")}.`
      });
    });

    kb.push({
      keys: ["education","study","studied","university","college","school","cgpa","gpa","degree"],
      answer: "Education: " + D.education.map(e => `${e.degree} at ${e.institute} (${e.period}, ${e.detail})`).join("; ")
    });

    kb.push({
      keys: ["certification","certifications","certificate","course"],
      answer: "Certifications: " + D.certifications.map(c => `${c.title} — ${c.org} (${c.year})`).join("; ")
    });

    kb.push({
      keys: ["achievement","achievements","award","competition","icpc"],
      answer: "Achievements: " + D.achievements.map(a => `${a.title} — ${a.detail}`).join(" | ")
    });

    kb.push({
      keys: ["contact","email","phone","reach","hire","connect","linkedin","github","facebook"],
      answer: `You can reach ${D.name} at ${D.email} or ${D.phone}. Social links are in the Connect section — update them in js/data.js.`
    });

    kb.push({
      keys: ["resume","cv","download resume"],
      answer: "You can download the résumé using the 'Download Résumé' button in the hero section or navbar."
    });

    kb.push({
      keys: ["about","who is daudul","summary","bio"],
      answer: D.summary
    });

    kb.push({
      keys: ["extracurricular","club","clubs"],
      answer: "Extracurricular: " + D.extracurricular.join("; ")
    });

    return kb;
  }

  function findAnswer(kb, query) {
    const q = query.toLowerCase();
    let best = null;
    let bestScore = 0;
    kb.forEach(entry => {
      entry.keys.forEach(key => {
        if (q.includes(key)) {
          const score = key.length;
          if (score > bestScore) {
            bestScore = score;
            best = entry.answer;
          }
        }
      });
    });
    return best || `I couldn't find that in the portfolio data. Try asking about skills, projects, education, achievements, or how to contact ${D.name.split(" ")[0]}.`;
  }

  function initAI() {
    const kb = buildKnowledgeBase();
    const toggle = document.getElementById("aiToggle");
    const panel = document.getElementById("aiPanel");
    const closeBtn = document.getElementById("aiClose");
    const messages = document.getElementById("aiMessages");
    const form = document.getElementById("aiForm");
    const input = document.getElementById("aiInput");
    const suggestions = document.getElementById("aiSuggestions");
    let greeted = false;

    const suggestionChips = ["Skills?", "Projects?", "Education?", "Contact info?"];

    function open() {
      panel.classList.add("is-open");
      if (!greeted) {
        addMessage("bot", `Hi! I'm ${D.name.split(" ")[0]}'s portfolio assistant. Ask me anything about his skills, projects or background.`);
        greeted = true;
      }
      input.focus();
    }
    function close() { panel.classList.remove("is-open"); }

    toggle.addEventListener("click", () => panel.classList.contains("is-open") ? close() : open());
    closeBtn.addEventListener("click", close);

    function addMessage(role, text) {
      const div = document.createElement("div");
      div.className = `ai-msg ${role}`;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function addTyping() {
      const div = document.createElement("div");
      div.className = "ai-msg bot typing-dots";
      div.innerHTML = "<span></span><span></span><span></span>";
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
      return div;
    }

    function respond(query) {
      addMessage("user", query);
      const typingEl = addTyping();
      setTimeout(() => {
        typingEl.remove();
        addMessage("bot", findAnswer(kb, query));
      }, 450 + Math.random() * 350);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      respond(val);
      input.value = "";
    });

    suggestions.innerHTML = suggestionChips.map(s => `<button type="button" class="ai-chip">${s}</button>`).join("");
    suggestions.querySelectorAll(".ai-chip").forEach(chip => {
      chip.addEventListener("click", () => respond(chip.textContent));
    });
  }

  /* -----------------------------------------------------------------
     INIT
  ----------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderBasics();
    renderSoftSkills();
    renderTimeline();
    renderSkills();
    renderProjects();
    renderRecords();
    initNav();
    initReveal();
    initCursorTrace();
    initCircuitCanvas();
    initAI();
    runBoot();
  });
})();
