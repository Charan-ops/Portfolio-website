# 🌐 Portfolio Website

A modern, responsive personal portfolio website built to showcase my skills, projects, and experience.  
Developed using **Vite**, **React**, and **TypeScript**, with optional backend integration via **Supabase**.
---

## 🚀 Tech Stack

- ⚡ Vite
- ⚛️ React
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🗄️ Supabase (optional)
- 📦 npm
---

## 📂 Project Structure
project/
├── src/                # Application source code
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page sections
│   ├── supabase.ts     # Supabase client (optional)
│   └── main.tsx        # Entry point
├── index.html          # Root HTML file
├── package.json        # Dependencies & scripts
├── vite.config.ts      # Vite configuration
└── README.md
---

## 🛠️ Local Setup
### Clone the repository 
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>/project

### Install Dependencies
npm install

### Environment Variables
VITE_SUPABASE_URL=https://<your-project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-public-anon-key>

### Run the development server
npm run dev
