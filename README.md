# ADOPT AI Readiness Assessment

A comprehensive web-based assessment tool for evaluating organizational AI readiness across five critical pillars of the ADOPT framework.

**Live Assessment:** [https://mananb77.github.io/adopt-assessment/](https://mananb77.github.io/adopt-assessment/)

© 2025 Berkeley AI Leadership Accelerator

---

## 📋 About the ADOPT Framework

The ADOPT framework provides a holistic approach to assessing and building AI readiness across organizations through five interconnected pillars:

- **A**rchitecture - Building the AI-Ready Enterprise
- **D**esign - Crafting the AI Transformation Blueprint
- **O**perations - Embedding AI into Daily Business
- **P**eople - Cultivating an AI-Ready Workforce
- **T**raining - Developing AI Expertise Across the Organization

---

## 🚀 How to Use the Assessment

### Online Access

1. **Visit the live assessment:**
   [https://mananb77.github.io/adopt-assessment/](https://mananb77.github.io/adopt-assessment/)

2. **Read the welcome screen** to understand the five ADOPT pillars

3. **Click "Begin Assessment Now"** to start

4. **Answer 20 questions** (4 per pillar) using a 5-point scale:
   - 1 = Nascent (Very Low Readiness)
   - 2 = Emerging (Low Readiness)
   - 3 = Developing (Moderate Readiness)
   - 4 = Transformational (High Readiness)
   - 5 = Advanced (Highest Readiness)

5. **Navigate through pillars:**
   - Complete all 4 questions in each pillar before proceeding
   - Use "Previous" and "Next" buttons to navigate
   - Click "Home" to return to the start at any time

6. **View your results:**
   - After completing all pillars, click "View Results"
   - See your overall ADOPT score and Pentagon visualization
   - Review detailed breakdown by pillar

7. **Download your report:**
   - Click "Download PDF Report" for a comprehensive assessment
   - PDF includes visual charts, detailed scores, and recommendations

8. **Start over:**
   - Click "Start New Assessment" to reset and begin again

### Time Commitment

- **Estimated time:** 15-20 minutes
- Complete in one session or save and return later (browser storage)

---

## 📊 Understanding Your Results

### Overall ADOPT Score

Your score is calculated as the average across all 20 questions (5 pillars × 4 questions each).

**Score Interpretation:**
- **4.0 - 5.0**: Transformational - High Readiness
- **3.0 - 3.9**: Developing - Moderate Readiness
- **2.0 - 2.9**: Emerging - Low Readiness
- **1.0 - 1.9**: Nascent - Very Low Readiness

### Pentagon Visualization

The radar chart shows your readiness across all five pillars, helping you identify:
- **Strengths:** Pillars with higher scores
- **Gaps:** Areas needing improvement
- **Balance:** How evenly distributed your readiness is

### PDF Report Contents

The downloadable report includes:
1. **Executive Summary** - Overall score and readiness level
2. **Pentagon Visualization** - Visual readiness profile
3. **Detailed Pillar Breakdown** - Scores and progress bars for each pillar
4. **Detailed Responses** - All questions and your selected answers
5. **Interpretation Guide** - Explanation of score ranges
6. **Recommendations** - Next steps and action items for each pillar

---

## 💻 Development Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mananb77/adopt-assessment.git
cd adopt-assessment

# Install dependencies
npm install
```

### Local Development

```bash
# Start development server
npm run dev

# Access at http://localhost:5173/adopt-assessment/
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

---

## 🚢 Deployment

This project uses **GitHub Actions** for automatic deployment to GitHub Pages.

### Automatic Deployment

Every push to the `main` branch automatically:
1. Builds the production bundle
2. Deploys to GitHub Pages
3. Updates the live site in 2-3 minutes

### Manual Deployment (Legacy)

```bash
npm run deploy
```

---

## 🛠️ Technology Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS 3.3
- **PDF Generation:** jsPDF 3.0
- **Icons:** Lucide React 0.263
- **Deployment:** GitHub Actions + GitHub Pages

---

## 📁 Project Structure

```
adopt-assessment/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── card.jsx        # Card UI components
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── ADOPTAssessment.jsx     # Main assessment component
│   ├── App.jsx                 # Root app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Project dependencies
```

---

## 🤝 Contributing

This is a project of the Berkeley AI Leadership Accelerator. For questions or contributions, please contact the project maintainers.

---

## 📄 License

© 2025 Berkeley AI Leadership Accelerator. All rights reserved.

---

## 🔗 Links

- **Live Assessment:** [https://mananb77.github.io/adopt-assessment/](https://mananb77.github.io/adopt-assessment/)
- **GitHub Repository:** [https://github.com/mananb77/adopt-assessment](https://github.com/mananb77/adopt-assessment)
- **Issues & Feedback:** [https://github.com/mananb77/adopt-assessment/issues](https://github.com/mananb77/adopt-assessment/issues)

---

## 📞 Support

For questions about the ADOPT framework or this assessment tool, please reach out to the Berkeley AI Leadership Accelerator team.

---

**Built with AI assistance** | Authored by Manan Bhargava
