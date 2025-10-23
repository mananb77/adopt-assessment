import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ChevronRight, ChevronLeft, RotateCcw, Download, Home } from 'lucide-react';
import jsPDF from 'jspdf';

const ADOPTAssessment = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPillar, setCurrentPillar] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Scroll to top when results are shown or pillar changes
  useEffect(() => {
    if (showResults) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showResults]);

  useEffect(() => {
    if (!showWelcome && !showResults) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPillar, showWelcome, showResults]);

  const pillars = [
    {
      id: 'A',
      title: 'ARCHITECTURE',
      subtitle: 'Building the AI-Ready Enterprise',
      color: 'bg-blue-600',
      fillColor: '#2563eb',
      questions: [
        {
          id: 'A1',
          title: 'Core-Competency Driven AI Strategy',
          question: 'How is AI prioritized for business value?',
          options: [
            { value: 1, text: 'AI initiatives are mostly exploratory, with unclear benefits.' },
            { value: 2, text: 'Some projects aim to create value, but outcomes are inconsistent.' },
            { value: 3, text: 'Certain initiatives improve productivity or competitive advantage occasionally.' },
            { value: 4, text: 'Most AI initiatives are designed to deliver measurable business impact.' },
            { value: 5, text: 'Every AI initiative is strategically aligned to maximize enterprise-wide value.' }
          ]
        },
        {
          id: 'A2',
          title: 'Proprietary Information Usage',
          question: 'How does your organization handle proprietary data in AI tools?',
          options: [
            { value: 1, text: 'Employees are unsure if they can use proprietary data in AI tools.' },
            { value: 2, text: 'Generic guidelines exist but are unclear.' },
            { value: 3, text: 'Rules exist, but employees are cautious about using data.' },
            { value: 4, text: 'Clear policies guide safe use of proprietary data in AI tools.' },
            { value: 5, text: 'Employees confidently use proprietary data in AI tools, following clear guidelines.' }
          ]
        },
        {
          id: 'A3',
          title: 'Adaptive Data Infrastructure',
          question: 'How ready is your data infrastructure for AI integration?',
          options: [
            { value: 1, text: 'Data is fragmented; integrating AI is slow or risky.' },
            { value: 2, text: 'Some AI capabilities can be added, but manual fixes are often needed.' },
            { value: 3, text: 'Modular systems exist in key areas, but scaling is slow.' },
            { value: 4, text: 'Infrastructure supports rapid AI integration with minimal disruption.' },
            { value: 5, text: 'Data platforms are fully modular, scalable, and ready for seamless AI adoption.' }
          ]
        },
        {
          id: 'A4',
          title: 'Ethical AI Governance',
          question: 'How is AI ethics managed?',
          options: [
            { value: 1, text: 'Ethical considerations are rarely discussed.' },
            { value: 2, text: 'Governance exists only for high-profile projects.' },
            { value: 3, text: 'Policies exist but are applied inconsistently.' },
            { value: 4, text: 'Most AI systems follow transparent, accountable standards.' },
            { value: 5, text: 'Ethical AI governance is embedded in all projects systematically.' }
          ]
        }
      ]
    },
    {
      id: 'D',
      title: 'DESIGN',
      subtitle: 'Crafting the AI Transformation Blueprint',
      color: 'bg-purple-600',
      fillColor: '#9333ea',
      questions: [
        {
          id: 'D1',
          title: 'Outcome-Oriented AI Strategy',
          question: 'How strategically are AI projects aligned with business goals?',
          options: [
            { value: 1, text: 'Initiatives are opportunistic and unaligned.' },
            { value: 2, text: 'Some projects align, but ROI dominates decisions.' },
            { value: 3, text: 'AI strategy exists, but long-term value isn\'t consistently prioritized.' },
            { value: 4, text: 'Most initiatives focus on strategic objectives and lasting impact.' },
            { value: 5, text: 'Every AI initiative is fully aligned with enterprise strategy and competitive advantage.' }
          ]
        },
        {
          id: 'D2',
          title: 'Human-in-the-Loop Definition',
          question: 'How are responsibilities split between humans and AI?',
          options: [
            { value: 1, text: 'Human oversight is ad hoc.' },
            { value: 2, text: 'Some high-risk areas involve humans, others are automated without guidance.' },
            { value: 3, text: 'Human oversight exists in key workflows, but boundaries vary.' },
            { value: 4, text: 'Boundaries between humans and automation are clear in most processes.' },
            { value: 5, text: 'Human-in-the-loop frameworks are standardized and applied consistently.' }
          ]
        },
        {
          id: 'D3',
          title: 'AI Change Management Office',
          question: 'How is AI adoption supported across the workforce?',
          options: [
            { value: 1, text: 'No structured support exists.' },
            { value: 2, text: 'Guidance is ad hoc; coordination is minimal.' },
            { value: 3, text: 'A central team exists, but influence is limited.' },
            { value: 4, text: 'A dedicated AI change office manages structured adoption and training.' },
            { value: 5, text: 'AI change management is fully institutionalized, driving enterprise-wide adoption.' }
          ]
        },
        {
          id: 'D4',
          title: 'From Proof to Platform',
          question: 'How are AI pilots evaluated and scaled?',
          options: [
            { value: 1, text: 'Pilots are exploratory with few metrics.' },
            { value: 2, text: 'Some pilots have KPIs, but scaling is inconsistent.' },
            { value: 3, text: 'Structured evaluation exists for major pilots, lessons aren\'t fully applied.' },
            { value: 4, text: 'Most pilots are measured and scaled systematically.' },
            { value: 5, text: 'Pilots are rigorously designed, evaluated, and transitioned seamlessly into enterprise-wide solutions.' }
          ]
        }
      ]
    },
    {
      id: 'O',
      title: 'OPERATIONS',
      subtitle: 'Embedding AI into Daily Business',
      color: 'bg-green-600',
      fillColor: '#16a34a',
      questions: [
        {
          id: 'O1',
          title: 'Collaborative AI Partnerships',
          question: 'How does your organization leverage external AI partners?',
          options: [
            { value: 1, text: 'Partnerships are rare.' },
            { value: 2, text: 'Vendors are used ad hoc, without strategy.' },
            { value: 3, text: 'Partnerships exist but are limited.' },
            { value: 4, text: 'Strategic partnerships complement internal capabilities.' },
            { value: 5, text: 'Partnerships are fully integrated into enterprise strategy for safe, accelerated adoption.' }
          ]
        },
        {
          id: 'O2',
          title: 'Integration with Existing Systems',
          question: 'How well do AI tools integrate into workflows?',
          options: [
            { value: 1, text: 'AI tools mostly operate independently.' },
            { value: 2, text: 'Some integration exists, but workarounds are common.' },
            { value: 3, text: 'Integration exists in select processes; scaling is slow.' },
            { value: 4, text: 'Most AI tools are embedded seamlessly.' },
            { value: 5, text: 'AI integration is optimized across all workflows enterprise-wide.' }
          ]
        },
        {
          id: 'O3',
          title: 'Cross-Functional Orchestration',
          question: 'How effectively do teams collaborate on AI initiatives?',
          options: [
            { value: 1, text: 'Teams operate in silos; initiatives are fragmented.' },
            { value: 2, text: 'Collaboration occurs occasionally and informally.' },
            { value: 3, text: 'Coordination exists for select projects.' },
            { value: 4, text: 'Teams collaborate effectively for most initiatives.' },
            { value: 5, text: 'Cross-functional orchestration is standardized across all AI projects.' }
          ]
        },
        {
          id: 'O4',
          title: 'Performance Monitoring and Risk Management',
          question: 'How is AI performance and risk tracked?',
          options: [
            { value: 1, text: 'Post-deployment performance is rarely tracked.' },
            { value: 2, text: 'Monitoring is reactive and inconsistent.' },
            { value: 3, text: 'Critical models are monitored, others less so.' },
            { value: 4, text: 'Systems track performance, bias, and risk regularly.' },
            { value: 5, text: 'Continuous monitoring with automated alerts is standard across all AI deployments.' }
          ]
        }
      ]
    },
    {
      id: 'P',
      title: 'PEOPLE',
      subtitle: 'Cultivating an AI-Ready Workforce',
      color: 'bg-orange-600',
      fillColor: '#ea580c',
      questions: [
        {
          id: 'P1',
          title: 'Leadership Encouragement',
          question: 'How do executives set expectations for AI use in the company?',
          options: [
            { value: 1, text: 'Executives do not expect employees to use AI.' },
            { value: 2, text: 'AI use is suggested occasionally, but optional.' },
            { value: 3, text: 'Leaders encourage AI use in some teams or projects.' },
            { value: 4, text: 'Executives actively expect employees to use AI in their work and support adoption.' },
            { value: 5, text: 'Leadership clearly sets AI use as expected for everyone across the organization.' }
          ]
        },
        {
          id: 'P2',
          title: 'Empowerment of Grassroots Innovation',
          question: 'How are employees encouraged to experiment with AI?',
          options: [
            { value: 1, text: 'Employees rarely experiment.' },
            { value: 2, text: 'Some individuals experiment informally.' },
            { value: 3, text: 'Bottom-up experimentation exists but is limited.' },
            { value: 4, text: 'Grassroots innovation is encouraged and supported.' },
            { value: 5, text: 'Employees are systematically empowered to innovate and influence AI adoption.' }
          ]
        },
        {
          id: 'P3',
          title: 'Psychological Safety for Experimentation',
          question: 'How safe do employees feel experimenting with AI?',
          options: [
            { value: 1, text: 'Employees hesitate due to fear of mistakes.' },
            { value: 2, text: 'Some safe spaces exist, adoption is cautious.' },
            { value: 3, text: 'Teams feel safe experimenting in limited scenarios.' },
            { value: 4, text: 'Most teams can experiment without fear of repercussions.' },
            { value: 5, text: 'Psychological safety is ingrained; experimentation is celebrated enterprise-wide.' }
          ]
        },
        {
          id: 'P4',
          title: 'Incentivization and Role Redefinitions',
          question: 'How are AI adoption and experimentation incentivized?',
          options: [
            { value: 1, text: 'AI adoption is voluntary, rarely recognized.' },
            { value: 2, text: 'Recognition exists, incentives are weak.' },
            { value: 3, text: 'Role changes or KPIs are considered for select teams.' },
            { value: 4, text: 'AI adoption is formally recognized and rewarded.' },
            { value: 5, text: 'Performance metrics, recognition, and workflows fully integrate AI adoption.' }
          ]
        }
      ]
    },
    {
      id: 'T',
      title: 'TRAINING',
      subtitle: 'Developing AI Expertise Across the Organization',
      color: 'bg-red-600',
      fillColor: '#dc2626',
      questions: [
        {
          id: 'T1',
          title: 'Foundational AI Fluency',
          question: 'How widespread is basic AI understanding across your workforce?',
          options: [
            { value: 1, text: 'Few employees understand AI.' },
            { value: 2, text: 'Introductory training exists for a limited audience.' },
            { value: 3, text: 'Many employees have foundational AI skills.' },
            { value: 4, text: 'Organization-wide AI literacy programs exist.' },
            { value: 5, text: 'AI fluency is ingrained and expected across all relevant roles.' }
          ]
        },
        {
          id: 'T2',
          title: 'Knowledge Sharing Platforms',
          question: 'How effectively do employees share AI insights and best practices?',
          options: [
            { value: 1, text: 'Teams operate independently with little sharing.' },
            { value: 2, text: 'Some informal sharing occurs.' },
            { value: 3, text: 'Platforms exist but are lightly used.' },
            { value: 4, text: 'Many employees share AI insights on platforms.' },
            { value: 5, text: 'Sharing AI insights on platforms is fully integrated into the work culture.' }
          ]
        },
        {
          id: 'T3',
          title: 'Applied AI Problem-Solving Workshops and Labs',
          question: 'How often do employees practice applying AI to real business problems?',
          options: [
            { value: 1, text: 'Few opportunities exist.' },
            { value: 2, text: 'Workshops occur occasionally and informally.' },
            { value: 3, text: 'Structured labs exist, but participation is limited.' },
            { value: 4, text: 'Workshops and labs are regular and involve most relevant teams.' },
            { value: 5, text: 'Scenario-based labs systematically reinforce skills and drive measurable impact.' }
          ]
        },
        {
          id: 'T4',
          title: 'Feedback and Improvement Mechanisms',
          question: 'How is feedback collected and acted on regarding AI adoption?',
          options: [
            { value: 1, text: 'Feedback is rare.' },
            { value: 2, text: 'Feedback occurs sporadically.' },
            { value: 3, text: 'Some structured mechanisms exist.' },
            { value: 4, text: 'Feedback systems are active and used to improve AI deployment.' },
            { value: 5, text: 'Continuous multi-source feedback informs AI tools and organizational learning.' }
          ]
        }
      ]
    }
  ];

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const calculateScores = () => {
    const pillarScores = {};
    let totalScore = 0;
    let totalQuestions = 0;

    pillars.forEach(pillar => {
      let pillarTotal = 0;
      let pillarCount = 0;

      pillar.questions.forEach(q => {
        if (responses[q.id]) {
          pillarTotal += responses[q.id];
          pillarCount++;
        }
      });

      if (pillarCount > 0) {
        pillarScores[pillar.id] = pillarTotal / pillarCount;
        totalScore += pillarTotal;
        totalQuestions += pillarCount;
      }
    });

    const overallScore = totalQuestions > 0 ? totalScore / totalQuestions : 0;

    return { pillarScores, overallScore };
  };

  const getReadinessLevel = (score) => {
    if (score >= 4) return { level: 'Transformational', desc: 'High Readiness', color: 'text-green-600' };
    if (score >= 3) return { level: 'Developing', desc: 'Moderate Readiness', color: 'text-blue-600' };
    if (score >= 2) return { level: 'Emerging', desc: 'Low Readiness', color: 'text-yellow-600' };
    return { level: 'Nascent', desc: 'Very Low Readiness', color: 'text-red-600' };
  };

  const isCurrentPillarComplete = () => {
    const pillar = pillars[currentPillar];
    return pillar.questions.every(q => responses[q.id]);
  };

  const isAssessmentComplete = () => {
    return pillars.every(pillar => 
      pillar.questions.every(q => responses[q.id])
    );
  };

  const nextPillar = () => {
    if (currentPillar < pillars.length - 1) {
      setCurrentPillar(currentPillar + 1);
    } else if (isAssessmentComplete()) {
      setShowResults(true);
    }
  };

  const prevPillar = () => {
    if (currentPillar > 0) {
      setCurrentPillar(currentPillar - 1);
    }
  };

  const resetAssessment = () => {
    setResponses({});
    setCurrentPillar(0);
    setShowResults(false);
    setShowWelcome(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startAssessment = () => {
    setShowWelcome(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PentagonChart = ({ scores }) => {
    const size = 340;
    const center = size / 2;
    const radius = size / 2 - 60;
    
    const getPoint = (index, scale = 1) => {
      const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
      return {
        x: center + radius * scale * Math.cos(angle),
        y: center + radius * scale * Math.sin(angle)
      };
    };

    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    const gridPaths = gridLevels.map(level => {
      const points = Array.from({ length: 5 }, (_, i) => getPoint(i, level));
      return points.map(p => `${p.x},${p.y}`).join(' ');
    });

    const dataPoints = pillars.map((pillar, index) => {
      const score = scores[pillar.id] || 0;
      const scale = score / 5;
      return getPoint(index, scale);
    });
    const dataPath = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    return (
      <div className="flex flex-col items-center">
        <svg width={size} height={size} className="mx-auto">
          {gridPaths.map((path, i) => (
            <polygon
              key={i}
              points={path}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1.5"
            />
          ))}
          
          {pillars.map((_, index) => {
            const point = getPoint(index, 1);
            return (
              <line
                key={index}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#d1d5db"
                strokeWidth="1"
              />
            );
          })}

          <polygon
            points={dataPath}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="rgb(59, 130, 246)"
            strokeWidth="3"
          />

          {dataPoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="6"
              fill={pillars[index].fillColor}
              stroke="white"
              strokeWidth="2"
            />
          ))}

          {pillars.map((pillar, index) => {
            const labelPoint = getPoint(index, 1.25);
            const score = scores[pillar.id] || 0;
            return (
              <g key={index}>
                <text
                  x={labelPoint.x}
                  y={labelPoint.y - 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-base font-bold"
                  fill={pillar.fillColor}
                >
                  {pillar.id}
                </text>
                <text
                  x={labelPoint.x}
                  y={labelPoint.y + 8}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-gray-600"
                >
                  {score.toFixed(1)}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mt-4 text-xs text-gray-500 text-center">
          Pentagon visualization showing your organization's AI readiness across all five pillars
        </div>
      </div>
    );
  };

  const Footer = () => (
    <div className="text-center py-4 mt-8">
      <p className="text-xs text-gray-500">
        © 2025 Berkeley AI Leadership Accelerator
      </p>
    </div>
  );

  const downloadReport = async () => {
    const { pillarScores, overallScore } = calculateScores();
    const overallReadiness = getReadinessLevel(overallScore);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add new page if needed
    const checkAddPage = (requiredSpace) => {
      if (yPosition + requiredSpace > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
        return true;
      }
      return false;
    };

    // Helper function to add gradient-like header background
    const addGradientRect = (x, y, width, height, color1, color2) => {
      // Simulate gradient with multiple rectangles
      const steps = 20;
      for (let i = 0; i < steps; i++) {
        const ratio = i / steps;
        const r = Math.round(color1[0] + (color2[0] - color1[0]) * ratio);
        const g = Math.round(color1[1] + (color2[1] - color1[1]) * ratio);
        const b = Math.round(color1[2] + (color2[2] - color1[2]) * ratio);
        pdf.setFillColor(r, g, b);
        pdf.rect(x, y + (height * i / steps), width, height / steps, 'F');
      }
    };

    // COVER PAGE
    addGradientRect(0, 0, pageWidth, 65, [37, 99, 235], [147, 51, 234]); // blue to purple

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(32);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ADOPT AI READINESS', pageWidth / 2, 27, { align: 'center' });
    pdf.setFontSize(30);
    pdf.text('ASSESSMENT REPORT', pageWidth / 2, 42, { align: 'center' });

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    pdf.text(`Generated: ${dateStr}`, pageWidth / 2, 56, { align: 'center' });

    yPosition = 85;

    // EXECUTIVE SUMMARY
    pdf.setFillColor(239, 246, 255);
    pdf.roundedRect(15, yPosition, pageWidth - 30, 42, 3, 3, 'F');

    pdf.setTextColor(31, 41, 55);
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Executive Summary', pageWidth / 2, yPosition + 11, { align: 'center' });

    pdf.setFontSize(36);
    pdf.setTextColor(37, 99, 235);
    pdf.setFont('helvetica', 'bold');
    pdf.text(overallScore.toFixed(2), pageWidth / 2, yPosition + 27, { align: 'center' });

    pdf.setFontSize(12);
    const readinessColor = overallReadiness.color === 'text-green-600' ? [22, 163, 74] :
                           overallReadiness.color === 'text-blue-600' ? [37, 99, 235] :
                           overallReadiness.color === 'text-yellow-600' ? [202, 138, 4] : [220, 38, 38];
    pdf.setTextColor(readinessColor[0], readinessColor[1], readinessColor[2]);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${overallReadiness.level} — ${overallReadiness.desc}`, pageWidth / 2, yPosition + 37, { align: 'center' });

    yPosition += 50;

    // PENTAGON VISUALIZATION - Draw directly in PDF
    checkAddPage(90);
    pdf.setTextColor(31, 41, 55);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Pentagon Readiness Visualization', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    // Pentagon chart configuration
    const chartCenterX = pageWidth / 2;
    const chartCenterY = yPosition + 45;
    const chartRadius = 35;

    // Helper function to get pentagon point coordinates
    const getPentagonPoint = (index, scale = 1) => {
      const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
      return {
        x: chartCenterX + chartRadius * scale * Math.cos(angle),
        y: chartCenterY + chartRadius * scale * Math.sin(angle)
      };
    };

    // Draw grid levels (concentric pentagons)
    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    pdf.setDrawColor(229, 231, 235);
    pdf.setLineWidth(0.3);

    gridLevels.forEach(level => {
      const points = [];
      for (let i = 0; i < 5; i++) {
        const point = getPentagonPoint(i, level);
        points.push([point.x, point.y]);
      }
      points.forEach((point, i) => {
        const nextPoint = points[(i + 1) % 5];
        pdf.line(point[0], point[1], nextPoint[0], nextPoint[1]);
      });
    });

    // Draw radial lines from center to vertices
    pdf.setDrawColor(209, 213, 219);
    for (let i = 0; i < 5; i++) {
      const point = getPentagonPoint(i, 1);
      pdf.line(chartCenterX, chartCenterY, point.x, point.y);
    }

    // Draw data polygon
    const dataPoints = [];
    pillars.forEach((pillar, index) => {
      const score = pillarScores[pillar.id] || 0;
      const scale = score / 5;
      const point = getPentagonPoint(index, scale);
      dataPoints.push([point.x, point.y]);
    });

    // Fill data polygon
    pdf.setFillColor(59, 130, 246, 0.2 * 255);
    pdf.setDrawColor(59, 130, 246);
    pdf.setLineWidth(0.8);

    if (dataPoints.length > 0) {
      // Draw filled polygon
      let pathString = '';
      dataPoints.forEach((point, i) => {
        if (i === 0) {
          pathString += `M ${point[0]} ${point[1]} `;
        } else {
          pathString += `L ${point[0]} ${point[1]} `;
        }
      });
      pathString += 'Z';

      // Draw outline
      dataPoints.forEach((point, i) => {
        const nextPoint = dataPoints[(i + 1) % dataPoints.length];
        pdf.line(point[0], point[1], nextPoint[0], nextPoint[1]);
      });
    }

    // Draw data points as circles
    pillars.forEach((pillar, index) => {
      const pillarColor = pillar.id === 'A' ? [37, 99, 235] :
                         pillar.id === 'D' ? [147, 51, 234] :
                         pillar.id === 'O' ? [22, 163, 74] :
                         pillar.id === 'P' ? [234, 88, 12] : [220, 38, 38];

      const score = pillarScores[pillar.id] || 0;
      const scale = score / 5;
      const point = getPentagonPoint(index, scale);

      // Draw circle
      pdf.setFillColor(pillarColor[0], pillarColor[1], pillarColor[2]);
      pdf.setDrawColor(255, 255, 255);
      pdf.setLineWidth(0.5);
      pdf.circle(point.x, point.y, 1.5, 'FD');
    });

    // Draw labels
    pillars.forEach((pillar, index) => {
      const pillarColor = pillar.id === 'A' ? [37, 99, 235] :
                         pillar.id === 'D' ? [147, 51, 234] :
                         pillar.id === 'O' ? [22, 163, 74] :
                         pillar.id === 'P' ? [234, 88, 12] : [220, 38, 38];

      const labelPoint = getPentagonPoint(index, 1.3);
      const score = pillarScores[pillar.id] || 0;

      // Pillar ID
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(pillarColor[0], pillarColor[1], pillarColor[2]);
      pdf.text(pillar.id, labelPoint.x, labelPoint.y - 2, { align: 'center' });

      // Score
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(75, 85, 99);
      pdf.text(score.toFixed(1), labelPoint.x, labelPoint.y + 2, { align: 'center' });
    });

    yPosition += 92;

    // PILLAR BREAKDOWN - Start on new page (Page 2)
    pdf.addPage();
    yPosition = 20;

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(31, 41, 55);
    pdf.text('Detailed Pillar Breakdown', 15, yPosition);
    yPosition += 12;

    pillars.forEach(pillar => {
      const score = pillarScores[pillar.id] || 0;
      const readiness = getReadinessLevel(score);
      const percentage = (score / 5) * 100;

      checkAddPage(35);

      // Pillar header
      pdf.setFillColor(249, 250, 251);
      pdf.roundedRect(15, yPosition, pageWidth - 30, 30, 2, 2, 'F');

      // Pillar color indicator
      const pillarColor = pillar.id === 'A' ? [37, 99, 235] :
                         pillar.id === 'D' ? [147, 51, 234] :
                         pillar.id === 'O' ? [22, 163, 74] :
                         pillar.id === 'P' ? [234, 88, 12] : [220, 38, 38];

      pdf.setFillColor(pillarColor[0], pillarColor[1], pillarColor[2]);
      pdf.roundedRect(15, yPosition, 4, 30, 1, 1, 'F');

      pdf.setTextColor(31, 41, 55);
      pdf.setFontSize(13);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${pillar.id}: ${pillar.title}`, 22, yPosition + 8);

      pdf.setFontSize(9.5);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(75, 85, 99);
      pdf.text(pillar.subtitle, 22, yPosition + 14);

      // Score
      pdf.setFontSize(13);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(31, 41, 55);
      pdf.text(score.toFixed(2), pageWidth - 25, yPosition + 8, { align: 'right' });

      // Progress bar
      pdf.setFillColor(229, 231, 235);
      pdf.roundedRect(22, yPosition + 18, pageWidth - 52, 6, 3, 3, 'F');

      pdf.setFillColor(pillarColor[0], pillarColor[1], pillarColor[2]);
      pdf.roundedRect(22, yPosition + 18, (pageWidth - 52) * (percentage / 100), 6, 3, 3, 'F');

      // Readiness level
      const pillarReadinessColor = readiness.color === 'text-green-600' ? [22, 163, 74] :
                                   readiness.color === 'text-blue-600' ? [37, 99, 235] :
                                   readiness.color === 'text-yellow-600' ? [202, 138, 4] : [220, 38, 38];
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(pillarReadinessColor[0], pillarReadinessColor[1], pillarReadinessColor[2]);
      pdf.text(`${readiness.level} — ${readiness.desc}`, 22, yPosition + 28);

      yPosition += 35;
    });

    // DETAILED RESPONSES
    pdf.addPage();
    yPosition = 20;

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(31, 41, 55);
    pdf.text('Detailed Responses by Pillar', 15, yPosition);
    yPosition += 12;

    pillars.forEach((pillar, pillarIndex) => {
      // Page breaks for cleaner organization:
      // Page 3: Architecture (A) & Design (D)
      // Page 4: Operations (O) & People (P)
      // Page 5: Training (T)
      if (pillarIndex === 2 || pillarIndex === 4) {
        // Add new page before Operations (index 2) and Training (index 4)
        pdf.addPage();
        yPosition = 20;
      } else {
        checkAddPage(25);
      }

      const pillarColor = pillar.id === 'A' ? [37, 99, 235] :
                         pillar.id === 'D' ? [147, 51, 234] :
                         pillar.id === 'O' ? [22, 163, 74] :
                         pillar.id === 'P' ? [234, 88, 12] : [220, 38, 38];

      pdf.setFillColor(pillarColor[0], pillarColor[1], pillarColor[2]);
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(13);
      pdf.setFont('helvetica', 'bold');
      pdf.roundedRect(15, yPosition, pageWidth - 30, 9, 2, 2, 'F');
      pdf.text(`${pillar.id}: ${pillar.title}`, 18, yPosition + 6);
      yPosition += 13;

      pillar.questions.forEach((q, idx) => {
        const response = responses[q.id];
        const selectedOption = q.options.find(opt => opt.value === response);

        checkAddPage(32);

        pdf.setTextColor(31, 41, 55);
        pdf.setFontSize(10.5);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${idx + 1}. ${q.title}`, 18, yPosition);
        yPosition += 5.5;

        pdf.setFontSize(9.5);
        pdf.setFont('helvetica', 'italic');
        pdf.setTextColor(75, 85, 99);
        const questionLines = pdf.splitTextToSize(q.question, pageWidth - 40);
        pdf.text(questionLines, 18, yPosition);
        yPosition += questionLines.length * 4.2 + 2;

        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(31, 41, 55);
        const responseText = selectedOption ? selectedOption.text : 'Not answered';
        const responseLines = pdf.splitTextToSize(`Response: ${responseText}`, pageWidth - 40);
        pdf.text(responseLines, 18, yPosition);
        yPosition += responseLines.length * 4.2;

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(10);
        pdf.text(`Score: ${response || 0} / 5`, 18, yPosition);
        yPosition += 9;
      });

      yPosition += 5;
    });

    // INTERPRETATION GUIDE
    pdf.addPage();
    yPosition = 20;

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(31, 41, 55);
    pdf.text('Interpretation Guide', 15, yPosition);
    yPosition += 12;

    const interpretations = [
      { range: '4.0 - 5.0', level: 'Transformational', desc: 'High Readiness', detail: 'Your organization demonstrates mature AI capabilities with systematic processes and enterprise-wide adoption.', color: [22, 163, 74] },
      { range: '3.0 - 3.9', level: 'Developing', desc: 'Moderate Readiness', detail: 'Structured approaches exist with clear progress toward comprehensive AI integration across the organization.', color: [37, 99, 235] },
      { range: '2.0 - 2.9', level: 'Emerging', desc: 'Low Readiness', detail: 'Initial AI initiatives are underway but adoption remains inconsistent and requires strategic focus.', color: [202, 138, 4] },
      { range: '1.0 - 1.9', level: 'Nascent', desc: 'Very Low Readiness', detail: 'Limited AI maturity with exploratory efforts requiring foundational development.', color: [220, 38, 38] }
    ];

    interpretations.forEach(item => {
      checkAddPage(25);

      pdf.setFillColor(249, 250, 251);
      pdf.roundedRect(15, yPosition, pageWidth - 30, 20, 2, 2, 'F');

      pdf.setFillColor(item.color[0], item.color[1], item.color[2]);
      pdf.roundedRect(15, yPosition, 4, 20, 1, 1, 'F');

      pdf.setTextColor(31, 41, 55);
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${item.range} — ${item.level}`, 22, yPosition + 6);

      pdf.setTextColor(item.color[0], item.color[1], item.color[2]);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text(item.desc, 22, yPosition + 11);

      pdf.setTextColor(75, 85, 99);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9.5);
      const detailLines = pdf.splitTextToSize(item.detail, pageWidth - 52);
      pdf.text(detailLines, 22, yPosition + 15.5);

      yPosition += 24;
    });

    // RECOMMENDATIONS
    pdf.addPage();
    yPosition = 20;

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(31, 41, 55);
    pdf.text('Next Steps and Recommendations', 15, yPosition);
    yPosition += 12;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(55, 65, 81);

    const recommendations = [
      {
        title: '1. PRIORITY AREAS FOR IMPROVEMENT',
        content: 'Focus on the pillars with lower scores to build a more balanced AI readiness profile. Each pillar contributes to sustainable AI transformation.'
      },
      {
        title: '   ARCHITECTURE',
        items: ['Review data infrastructure modularity', 'Establish clear proprietary data usage policies', 'Implement ethical AI governance frameworks']
      },
      {
        title: '   DESIGN',
        items: ['Align AI initiatives with long-term business strategy', 'Define human-in-the-loop boundaries clearly', 'Establish structured pilot evaluation processes']
      },
      {
        title: '   OPERATIONS',
        items: ['Develop strategic AI partnership frameworks', 'Improve AI tool integration with existing systems', 'Enable cross-functional collaboration mechanisms']
      },
      {
        title: '   PEOPLE',
        items: ['Secure visible leadership commitment to AI', 'Create psychological safety for experimentation', 'Align incentives with AI adoption behaviors']
      },
      {
        title: '   TRAINING',
        items: ['Implement organization-wide AI literacy programs', 'Build knowledge sharing platforms and practices', 'Conduct regular applied AI problem-solving workshops']
      },
      {
        title: '2. BALANCED DEVELOPMENT APPROACH',
        content: 'While focusing on weaker areas, maintain strength in higher-scoring pillars to ensure continued progress and prevent regression.'
      },
      {
        title: '3. REGULAR REASSESSMENT',
        content: 'Conduct this assessment quarterly or semi-annually to track progress and adjust strategies as your AI capabilities mature.'
      },
      {
        title: '4. EXECUTIVE ENGAGEMENT',
        content: 'Share these results with leadership teams to ensure alignment on AI readiness priorities and secure necessary resources for improvement.'
      }
    ];

    recommendations.forEach(rec => {
      checkAddPage(rec.items ? 22 : 16);

      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(31, 41, 55);
      pdf.text(rec.title, 18, yPosition);
      yPosition += 6.5;

      if (rec.content) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(55, 65, 81);
        const lines = pdf.splitTextToSize(rec.content, pageWidth - 40);
        pdf.text(lines, 18, yPosition);
        yPosition += lines.length * 5.2 + 4;
      }

      if (rec.items) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9.5);
        pdf.setTextColor(55, 65, 81);
        rec.items.forEach(item => {
          checkAddPage(9);
          pdf.text('•', 22, yPosition);
          const itemLines = pdf.splitTextToSize(item, pageWidth - 50);
          pdf.text(itemLines, 26, yPosition);
          yPosition += itemLines.length * 5.2;
        });
        yPosition += 3.5;
      }
    });

    // Add copyright footer to all pages
    const totalPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(156, 163, 175);
      pdf.text('© 2025 Berkeley AI Leadership Accelerator', pageWidth / 2, pageHeight - 10, { align: 'center' });
    }

    // Save PDF
    pdf.save(`ADOPT-Assessment-Report-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  if (showWelcome) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <Card className="border-2">
          <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white py-12">
            <CardTitle className="text-4xl mb-6 text-center font-bold">
              ADOPT AI Readiness Assessment
            </CardTitle>
            <p className="text-white/95 text-xl text-center leading-relaxed">
              Evaluate your organization's AI transformation readiness across five critical pillars
            </p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The ADOPT Framework provides a comprehensive approach to assessing and building AI readiness 
                across your organization. This assessment will guide you through 20 questions across five pillars, 
                helping you identify strengths and opportunities for improvement.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">The Five ADOPT Pillars</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">A</span>
                  ARCHITECTURE
                </h4>
                <p className="text-blue-800 font-semibold mb-2">Building the AI-Ready Enterprise</p>
                <p className="text-gray-700">
                  Establish the foundational infrastructure, data strategies, and governance frameworks needed 
                  to support scalable AI integration while ensuring security, compliance, and ethical standards.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">D</span>
                  DESIGN
                </h4>
                <p className="text-purple-800 font-semibold mb-2">Crafting the AI Transformation Blueprint</p>
                <p className="text-gray-700">
                  Align AI initiatives with strategic objectives, define human-AI collaboration boundaries, 
                  and create structured approaches for piloting and scaling AI solutions across the organization.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">O</span>
                  OPERATIONS
                </h4>
                <p className="text-green-800 font-semibold mb-2">Embedding AI into Daily Business</p>
                <p className="text-gray-700">
                  Integrate AI tools seamlessly into existing workflows, establish strategic partnerships, 
                  enable cross-functional collaboration, and implement continuous monitoring and risk management.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">P</span>
                  PEOPLE
                </h4>
                <p className="text-orange-800 font-semibold mb-2">Cultivating an AI-Ready Workforce</p>
                <p className="text-gray-700">
                  Foster a culture of AI adoption through leadership commitment, grassroots innovation, 
                  psychological safety, and aligned incentives that encourage experimentation and learning.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                  <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">T</span>
                  TRAINING
                </h4>
                <p className="text-red-800 font-semibold mb-2">Developing AI Expertise Across the Organization</p>
                <p className="text-gray-700">
                  Build widespread AI literacy, create knowledge-sharing platforms, conduct applied workshops, 
                  and establish feedback mechanisms to continuously improve AI capabilities and adoption.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Assessment Guidelines</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Answer honestly based on your organization's current state</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>There are no right or wrong answers - this is a diagnostic tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Complete all questions in each pillar before proceeding to the next</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>The assessment takes approximately 15-20 minutes to complete</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>You'll receive a detailed report with scores and recommendations at the end</span>
                </li>
              </ul>
            </div>

            <button
              onClick={startAssessment}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-bold text-xl shadow-lg"
            >
              Begin Assessment Now →
            </button>
          </CardContent>
        </Card>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    const { pillarScores, overallScore } = calculateScores();
    const overallReadiness = getReadinessLevel(overallScore);

    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <Card className="border-2">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
            <CardTitle className="text-3xl mb-4">ADOPT AI Readiness Assessment Results</CardTitle>
            <p className="text-white/90 text-lg">Your Organization's AI Transformation Profile</p>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">Overall ADOPT Score</h3>
              <div className="text-6xl font-bold mb-3 text-blue-600">{overallScore.toFixed(2)}</div>
              <div className={`text-2xl font-semibold ${overallReadiness.color}`}>
                {overallReadiness.level} — {overallReadiness.desc}
              </div>
            </div>

            <div className="py-6">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Pentagon Readiness Visualization</h3>
              <PentagonChart scores={pillarScores} />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Detailed Pillar Breakdown</h3>
              {pillars.map(pillar => {
                const score = pillarScores[pillar.id] || 0;
                const readiness = getReadinessLevel(score);
                const percentage = (score / 5) * 100;

                return (
                  <div key={pillar.id} className="space-y-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">
                        {pillar.id}: {pillar.title}
                      </span>
                      <span className="text-lg font-bold">{score.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{pillar.subtitle}</div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full ${pillar.color} transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className={`text-sm font-semibold ${readiness.color}`}>
                      {readiness.level} — {readiness.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={downloadReport}
                className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download PDF Report
              </button>
              <button
                onClick={resetAssessment}
                className="flex-1 bg-gray-600 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2 font-semibold"
              >
                <RotateCcw size={20} />
                Start New Assessment
              </button>
            </div>
          </CardContent>
        </Card>
        <Footer />
      </div>
    );
  }

  const pillar = pillars[currentPillar];
  const progress = ((currentPillar + 1) / pillars.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-2">
        <CardHeader className={`${pillar.color} text-white py-8`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={resetAssessment}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition flex items-center gap-2 text-sm"
                title="Back to Home"
              >
                <Home size={16} />
                Home
              </button>
              <CardTitle className="text-3xl font-bold">
                {pillar.id}: {pillar.title}
              </CardTitle>
            </div>
            <span className="text-sm font-medium bg-white/20 px-4 py-2 rounded-full">
              Pillar {currentPillar + 1} of {pillars.length}
            </span>
          </div>
          <p className="text-white/95 text-lg mb-6">{pillar.subtitle}</p>
          <div className="mt-6 w-full bg-white/30 rounded-full h-2.5">
            <div
              className="bg-white h-2.5 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-8">
          {pillar.questions.map((q, idx) => (
            <div key={q.id} className="space-y-3">
              <div className="font-semibold text-lg">
                {idx + 1}. {q.title}
              </div>
              <div className="text-gray-700 italic mb-3">{q.question}</div>
              <div className="space-y-2">
                {q.options.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                      responses[q.id] === option.value
                        ? `${pillar.color} bg-opacity-10 border-current`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={option.value}
                      checked={responses[q.id] === option.value}
                      onChange={() => handleResponse(q.id, option.value)}
                      className="mt-1 mr-3"
                    />
                    <span className="flex-1">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-between pt-6 border-t">
            <button
              onClick={prevPillar}
              disabled={currentPillar === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            <button
              onClick={nextPillar}
              disabled={!isCurrentPillarComplete()}
              className={`flex items-center gap-2 px-6 py-3 ${pillar.color} text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition`}
            >
              {currentPillar === pillars.length - 1 ? 'View Results' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
};

export default ADOPTAssessment;