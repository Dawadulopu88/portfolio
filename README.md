# MD Daudul Islam — Portfolio

Pure HTML/CSS/JS দিয়ে বানানো, কোনো build step লাগে না — সরাসরি GitHub Pages এ ফ্রি hosting করা যাবে।

## 📁 Structure
```
portfolio/
├── index.html          ← main page
├── css/style.css        ← সব styling + animation
├── js/data.js            ← তোমার সব তথ্য এখানে (নাম, স্কিল, প্রজেক্ট, লিংক...)
├── js/script.js          ← page render + animation + AI assistant logic
└── assets/
    ├── resume/           ← resume PDF এখানে রাখো
    └── projects/         ← project screenshots/videos এখানে রাখো
```

## ✏️ যা তোমাকে fill up করতে হবে
`js/data.js` ফাইলে যেখানে `[FILL ME]` লেখা আছে সেগুলো বসাও:
- **socials** → github, linkedin, facebook, portfolio লিংক
- **projects[].github** → প্রতিটা প্রজেক্টের GitHub রিপো লিংক
- **projects[].image / video** → `assets/projects/` ফোল্ডারে ছবি/ভিডিও রেখে নাম মিলাও
- চাইলে `projects[].demo` তে লাইভ ডেমো লিংক দিতে পারো
- **profilePhoto** → `assets/img/` ফোল্ডারে নিজের ছবি রেখে (নাম `profile.jpg`) path মিলাও। ছবি না দিলে অটোমেটিক initials monogram (DI) দেখাবে।

Resume PDF ইতিমধ্যে `assets/resume/MD_Daudul_Islam_Resume.pdf` এ রাখা আছে (তোমার আপলোড করা ফাইল থেকে) — নতুন ভার্সন দিতে চাইলে একই নামে replace করে দাও।

## 🚀 GitHub Pages এ ফ্রি হোস্ট করার নিয়ম

1. GitHub এ একটা নতুন repository বানাও (e.g. `portfolio`), public রাখো।
2. এই পুরো `portfolio` ফোল্ডারের সব ফাইল ওই repo তে push করো:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin https://github.com/<তোমার-username>/portfolio.git
   git push -u origin main
   ```
3. GitHub repo তে যাও → **Settings → Pages**
4. "Build and deployment" এর নিচে **Source: Deploy from a branch** সিলেক্ট করো
5. Branch: **main**, folder: **/ (root)** সিলেক্ট করে **Save**
6. ১-২ মিনিট পর সাইট লাইভ হয়ে যাবে এই লিংকে:
   `https://<তোমার-username>.github.io/portfolio/`
7. ওই লিংকটা ফেরত এসে `js/data.js` এর `socials.portfolio` তে বসিয়ে আবার push করো।

## 🤖 AI Assistant সম্পর্কে (গুরুত্বপূর্ণ নোট)

Site টা GitHub Pages এ **static** hosting (কোনো সার্ভার/ব্যাকএন্ড নেই), তাই এখানে সরাসরি Claude/ChatGPT এর মতো real AI API চাপা যায়নি —
কারণ browser-side এ API key রাখলে যে কেউ সেটা দেখে ফেলতে ও misuse করতে পারবে, যেটা নিরাপদ না।

তাই এখন যেটা আছে সেটা একটা **smart local assistant** — তোমার `data.js` এর তথ্য থেকে keyword মিলিয়ে উত্তর দেয় (skills, projects, education, contact ইত্যাদি নিয়ে প্রশ্ন করলে ঠিকঠাক উত্তর দিবে)। এটা visitor দের জন্য বেশ কাজের এবং কোনো cost/backend ছাড়াই কাজ করে।

পরে যদি সত্যিকারের LLM (Claude API) যুক্ত করতে চাও, তাহলে একটা ছোট backend/serverless function লাগবে (যেমন Cloudflare Workers বা Vercel — এগুলোরও ফ্রি টিয়ার আছে) যেটা API key নিরাপদে রাখবে আর তোমার site সেটাকে কল করবে। চাইলে পরে এটা নিয়ে আলাদাভাবে সাহায্য করতে পারি।

## 🎨 Design

Theme: "circuit blueprint" — CSE/robotics ব্যাকগ্রাউন্ড কে মাথায় রেখে বানানো ডার্ক থিম, animated circuit-trace background, terminal-style typing intro, scroll reveal animation। সব কিছু `css/style.css` এর `:root` ভ্যারিয়েবল থেকে কালার/ফন্ট বদলানো যাবে।
