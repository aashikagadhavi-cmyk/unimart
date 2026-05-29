import { Product, Industry, Testimonial, CaseStudy, BlogPost } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "ai-video-diffusion",
    name: "AI Video Diffusion Engine",
    category: "Video Generation",
    badge: "Cinema Flagship",
    icon: "Video",
    description: "Translate detailed written paragraph scripts into multi-character, high-fidelity consistent videos automatically.",
    longDescription: "Unchain cinematic creation with state-of-the-art volumetric diffusion weights. Eunimart's Video Diffusion engine processes paragraphs to isolate semantic narrative blocks, establishing consistent spatial coordinates, rendering hyper-realistic keyframes with consistent physical physics and temporal flow.",
    features: [
      "Consistent Multi-Character Embedding Seeds",
      "Dynamic Camera Trajectory Control Channels",
      "High-Resolution 4K UHD Frame Upscaler",
      "True Temporal Physics Coherence Models"
    ],
    benefits: [
      "Synthesize complete story scenes matching structural text criteria fully",
      "Eliminate expensive traditional lighting, rendering, or framing overheads",
      "Secure hosting in closed enterprise containers preserving custom IPs"
    ],
    useCases: [
      "Sovereign media groups drafting visual outline storyboard pilots instantly",
      "Ad agencies generating responsive scene variants matching target markets",
      "Indie studios scaling visual production without heavy computing grids"
    ],
    pricingPlans: [
      { tier: "Creator", rate: "$249/mo", description: "Up to 500 render minutes at standard resolution" },
      { tier: "Studio Peak", rate: "$1,150/mo", description: "Unlimited rendering + 4K upscaler unlocked" },
      { tier: "Cinema Custom", rate: "Contact Sales", description: "Dedicated physical cluster hosting with priority SLAs" }
    ],
    apiSample: `// Eunimart Video Diffusion Node SDK
import { EunimartVideo } from '@eunimart/sdk';

const eunimart = new EunimartVideo({ apiKey: 'em_video_92a3f...' });

const cinematicVideo = await eunimart.diffusion.generate({
  paragraphPrompt: 'A glowing futuristic smart ring spinning slowly on titanium...',
  cameraPath: 'OrbitalRotationSlow',
  resolution: '4K_UHD',
  characters: [{ seedId: 'char_agent_99', lockFace: true }]
});

console.log('Secure Render Streaming Container URL:', cinematicVideo.streamUrl);`
  },
  {
    id: "ai-vocal-synthesizer",
    name: "AI Vocal Synthesizer & Cloning",
    category: "Voice Dubbing",
    badge: "Emotional Timbre",
    icon: "Volume2",
    description: "Convert written script narrations into emotional, hyper-real vocal tracks with custom dialect controls instantly.",
    longDescription: "Deploy the ultimate phonetic matching system. Synthesize script pages into expressive narration audio, with adjustable pitch, stress factors, pauses, local accent dials, and high-fidelity clone profiles.",
    features: [
      "Deep Micro-Intonation Pitch Tuning",
      "Instant Persona Voice Profile Cloning",
      "95+ Sovereign Languages & Local Dialects",
      "Low-Latency Interactive Streaming playback"
    ],
    benefits: [
      "Save weeks of vocal booth studio recordings and retakes",
      "Produce highly customized narration tracks synced with camera actions",
      "Incorporate human emotional nuances into voiceover tracks natively"
    ],
    useCases: [
      "Translating cinematic clips to custom localized audio accents concurrently",
      "HR divisions generating narrated safety files in five native dialects",
      "Narrative game directors scaling dialog output without booking standard sessions"
    ],
    pricingPlans: [
      { tier: "Voice Standard", rate: "$199/mo", description: "Includes 2M spoken characters" },
      { tier: "Voice Enterprise", rate: "$799/mo", description: "Unlimited characters + Voice clone profiles" }
    ],
    apiSample: `// Programmatic Voice Sync with custom timbre seeds
const speechStream = await eunimart.vocal.synthesize({
  text: 'A sleek robotic vehicle racing through monsoonal Mumbai street channels.',
  vocalTimberSeed: 'voice_priya_warm_in',
  intonationStress: 1.25,
  emotionType: 'thrilling'
});`
  },
  {
    id: "ai-video-editor",
    name: "Conversational AI Video Editor",
    category: "Video Editing",
    badge: "Prompt Slicer",
    icon: "RotateCw",
    description: "Conversational prompt interface allowing you to splice, transition, overlay subtitles, or add audio to videos instantly.",
    longDescription: "An entirely modern editor driven by textual instructions. Rather than manual timeline tracking, describe changes in a simple paragraph, and allow Eunimart to automatically isolate keyframes, apply modern color curves, slide layers, and overlay captions.",
    features: [
      "Simple Conversational Splicing Prompts",
      "Automatic Multi-Language Subtitle Burning",
      "Intelligent Cinematic B-Roll Matching",
      "Dynamic LUT Color Grading Filters"
    ],
    benefits: [
      "Reduce typical clip editing cycles from days to simple prompt requests",
      "Generate clean burned-in smart captions matching exact dialogue timings",
      "Achieve cinematic cohesion across dozens of raw source clips automatically"
    ],
    useCases: [
      "Marketing teams editing visual ads into 15 format variations instantly",
      "Educators overlaying multi-language text onto study materials",
      "Creator hubs cutting raw game capture streams to cinematic highlights"
    ],
    pricingPlans: [
      { tier: "Editor Base", rate: "$149/mo", description: "Up to 10 active smart sequences" },
      { tier: "Editor Pro", rate: "$499/mo", description: "Unlimited sequences + batch render streams" }
    ],
    apiSample: `// Prompt editing transformations programmatically
const updatedSequence = await eunimart.editor.applyTransform({
  sequenceId: 'seq_mumbai_cyberpunk_001',
  instruction: 'Trim the raw intro by 1.5 seconds, burn gold subtitles, and blend low-fi ambient audio track'
});`
  },
  {
    id: "ai-lip-sync",
    name: "Dynamic Lip-Sync & Dubbing",
    category: "Voice Dubbing",
    badge: "Mouth Coordination",
    icon: "Globe",
    description: "Align spoken dialogue seamlessly with target video frames, adjusting lip motions in real-time.",
    longDescription: "Tackle difficult multi-lingual localization challenges. The Lip-Sync engine models micro-muscle facial contractions, warping the mouth region to match arbitrary spoken track audio files cleanly, without morphing adjacent frame regions.",
    features: [
      "High-Fidelity Optical Mouth Muscle Warp",
      "Zero Adjacent Pixel Morphing Artifacts",
      "Supports 34 Main International Language Accents",
      "Direct API Webhook Output Delivery"
    ],
    benefits: [
      "Localized media clips look and feel natively recorded",
      "Cut dubbing budget costs by ignoring expensive visual rotoscoping",
      "Maintain absolute actor consistency regardless of spoken translations"
    ],
    useCases: [
      "Distributors dubbing feature-length films in foreign regions",
      "Corporate training updates deployed in 12 languages simultaneously",
      "E-commerce brands customizing video testimonials for global segments"
    ],
    pricingPlans: [
      { tier: "Dub Starter", rate: "$299/mo", description: "Up to 120 dubbing minutes processed" },
      { tier: "Dub Studio Global", rate: "$1,350/mo", description: "Unlimited dubbing + prioritized rendering queues" }
    ],
    apiSample: `// Dub existing video track with alternative language audio
const dubResult = await eunimart.lipsync.dub({
  videoUrl: 'https://cdn.eunimart.in/mumbai_cyberpunk_hq.mp4',
  audioUrl: 'https://cdn.eunimart.in/translated_spanish_vocals.wav',
  facialFidelityScore: 0.98
});`
  },
  {
    id: "ai-spatial-casting",
    name: "Consistent Character Casting",
    category: "Video Generation",
    badge: "Character Lock",
    icon: "Users",
    description: "Anchor and lock generated visual seeds to keep face maps, clothing elements, and postures identical across multiple scenes.",
    longDescription: "Bypass typical diffusion challenges where face structures morph under camera moves. Clear character seed lock features ensure actor postures, features, hair patterns, and clothing specifications remain consistent across all your generated video scripts.",
    features: [
      "Rigid Facial Geometrical Locking Keys",
      "Consistent Wardrobe & Color Parameter Matching",
      "Seamless Multi-Angle View synthesis",
      "Unified CSV Actor profile databases"
    ],
    benefits: [
      "Create continuous story arcs and episodes with zero facial shifting errors",
      "Maintain high-fidelity brand characters across diverse promotion templates",
      "Scale actor variations instantly with simple text instructions"
    ],
    useCases: [
      "Production groups running animated series with recurring character lists",
      "Virtual brand ambassadors serving recurring campaign updates",
      "Creative designers mapping consistent actors across multi-scene storyboards"
    ],
    pricingPlans: [
      { tier: "Standard Actor Lock", rate: "$199/mo", description: "Save up to 5 custom character seeds" },
      { tier: "Studio Unlimited Actor Lock", rate: "$899/mo", description: "Unlimited global database casting access" }
    ],
    apiSample: `// Retain and lock unique casting parameters for diffusion
const castingSeed = await eunimart.casting.createSeed({
  conceptImages: ['https://cdn.eunimart.in/actor_ref_front.jpg'],
  rigidGeometryConstraints: true,
  wardrobeTheme: 'matte-black carbon fibers'
});`
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "film-studios",
    name: "Film Studios & Storyboarding",
    description: "Convert written script outlines and screenplays into detailed visual storyboards and moving teaser concept pre-visualizations.",
    statValue: "10x",
    statLabel: "Faster greenlight pilot teaser approvals",
    icon: "Clapperboard"
  },
  {
    id: "marketing",
    name: "Brand & Marketing Agencies",
    description: "Launch distinct video ad variations from written product briefs, complete with personalized vocal narrations and dynamic product renders.",
    statValue: "12x",
    statLabel: "Plunge in asset generation overheads",
    icon: "Sparkles"
  },
  {
    id: "e-learning",
    name: "EdTech & Academics",
    description: "Synthesize plain history textbooks or training manuals into highly engaging animated lessons with real-time digital actors.",
    statValue: "84%",
    statLabel: "Increase in course retention rates",
    icon: "GraduationCap"
  },
  {
    id: "localization",
    name: "Global Dubbing Houses",
    description: "Sync foreign voice files natively onto target character face-rigs, shifting lips smoothly while retaining original resolution.",
    statValue: "34+",
    statLabel: "Major languages translated with flawless syncing",
    icon: "Globe"
  },
  {
    id: "gaming",
    name: "Game Studios",
    description: "Model cinematic cutscenes and actor interactions straight from written dialogue documents without immediate 3D-rigging.",
    statValue: "24h",
    statLabel: "Required to render complete level dialogues",
    icon: "Rocket"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Arun Swaminathan",
    role: "Chief Creative Officer",
    company: "Zeta Cinematic Lights",
    text: "Eunimart's Video Diffusion suite completely redesigned how we storyboard our trailers. Translating paragraph scripts into 4K consistent visuals with camera angles takes minutes, not weeks.",
    rating: 5
  },
  {
    id: "2",
    name: "Devangana Sharma",
    role: "VP of Product Marketing",
    company: "Asta Learning Techs",
    text: "We synthesized our text handbooks into fully voiced, narrated training clips using Eunimart's Vocal Synthesizer and Editing suite. Employee certification times dropped by two-thirds.",
    rating: 5
  },
  {
    id: "3",
    name: "Mark Henderson",
    role: "Director of International Dubbing",
    company: "Alliance Media Global",
    text: "Maintaining actor facial geometries across translated lip moves is incredibly hard. Eunimart's Lip Sync suite warped lip vectors seamlessly without adding pixelated artifacts. Incredible consistency.",
    rating: 5
  },
  {
    id: "4",
    name: "Rohan Advani",
    role: "VP of Creative Production",
    company: "Mumbai Digital Games",
    text: "Corporate IP security is vital. We deployed Eunimart's air-gapped Spatial Character Casting model locally, allowing us to lock virtual actor skins without leaking our custom source files.",
    rating: 5
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Global Studio Reduces Tease Prep Time from 12 Weeks to 6 Hours",
    industry: "Film Studios & Storyboarding",
    beforeVal: "12 Weeks",
    afterVal: "6 Hours",
    metricName: "Storyboarding teaser compilation cycle",
    roiText: "92% Drop in Initial VFX Concepts Pitch Fees",
    quote: "We parsed raw narrative scene descriptions via Eunimart's Diffusion suite. The generated camera trajectories and character locks were ready to present to partners on schedule."
  },
  {
    id: "cs-2",
    title: "EdTech Unicorn Scales Lesson Visuals to 500 Chapters Concurrently",
    industry: "EdTech & Academics",
    beforeVal: "30 Days",
    afterVal: "48 Minutes",
    metricName: "Narrated animated clip generation timeframe",
    roiText: "1,200 Interactive Lessons Launched in 3 Weeks",
    quote: "Synthesizing text arrays straight to voiced cinema scenes bypassed expensive external green screen bookings, allowing our team to update modules on-the-fly."
  },
  {
    id: "cs-3",
    title: "Global Franchise Deploys Dynamic Localized Ad Campaigns",
    industry: "Brand & Marketing Agencies",
    beforeVal: "$280k",
    afterVal: "$12k",
    metricName: "Global localized video campaign budget",
    roiText: "440% Uplift in Regional Outreach Interaction Rates",
    quote: "Rather than shoot separate ads for multiple markets, we used Eunimart to swap language lip shapes and vocal tracks dynamically based on localized briefs."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Paragraph-to-Cinema: Conquering Temporal Coherence in Modern Video Diffusion Engines",
    category: "Diffusion Physics",
    readTime: "5 min read",
    date: "May 25, 2026",
    summary: "How Eunimart's proprietary temporal seed stabilizers guarantee that actors, outfits, and lighting persist across complex multi-minute camera tracks."
  },
  {
    id: "blog-2",
    title: "Solving the Facial Warping Problem: Precision Lip Synchronization in Local Accents",
    category: "Lip-Sync Engineering",
    readTime: "7 min read",
    date: "April 18, 2026",
    summary: "Deep-dive into micro-vocal phonetic coordinates, mesh distortion math, and visual boundaries that lock facial rig structures securely."
  },
  {
    id: "blog-3",
    title: "Enterprise IP Protection in Creative Workflows: Deploying Sovereign AI Video Clouds",
    category: "Data Security",
    readTime: "4 min read",
    date: "March 12, 2026",
    summary: "Transitioning away from public consumer video generations towards closed, air-gapped server configurations that secure private narrative scripts."
  }
];

export const MILESTONES = [
  { year: "Q1 2026", event: "Eunimart founded by Ratan Kumar to revolutionize generative AI video creation via high-fidelity paragraph-to-video diffusion." },
  { year: "Q2 2026", event: "Released the flagship Eunimart VidGen 4.5 Engine, setting new benchmarks for spatial-temporal character-locking models." },
  { year: "Q3 2026", event: "Standardized emotional vocal synthesis engines and real-time lip sync processors across 34+ major global dialects." },
  { year: "Q4 2026 (Planned)", event: "Establishing air-gapped, sovereign secure local container nodes for global media studio clouds." }
];

export const FAQ_ITEMS = [
  {
    q: "How does Eunimart guarantee character features do not flicker or change between video scenes?",
    a: "Eunimart's consistent character algorithms bind specific geometrical seed coordinates to face maps, textures, and clothing keys. This blocks the usual diffusion issues, ensuring that your actors remain identical across panning, tracking, and zoom camera motions."
  },
  {
    q: "Can we upload our own custom voice samples and actors for video generation?",
    a: "Absolutely. Through our secure dashboard, enterprise accounts can upload 5-minute vocal audio records to securely clone speaker timbers. We also support loading custom actor images to train private character lock structures."
  },
  {
    q: "Is there a limit on script length when submitting paragraphs to the generator?",
    a: "Our Sovereign model handles paragraphs containing up to 2,500 words per scene prompt block. The generator splits complex logs into sequential cinematic chapters automatically, matching sound, dialogues, and camera moves dynamically."
  },
  {
    q: "Are the generated videos, characters, and voice tracks fully owned by our company?",
    a: "Yes. Eunimart claims zero IP ownership or royalty demands on vectors rendered through our cloud. Because we offer secure, air-gapped instances, your training files, inputs, and final cinema renders persist on your servers with complete legal isolation."
  }
];
