# 🧩 Safety Heroes - Autism-Friendly Learning Platform

**Safety Heroes** is a comprehensive React-based interactive learning platform designed specifically for children, especially those with autism, to master essential life skills including safety awareness, good habits, learning routines, and positive playtime behaviors. The application combines engaging mini-games, interactive tips, habit tracking, and pet companion mechanics to create a fun, accessible, and inclusive educational experience.

---

## 🎯 Mission & Purpose

Safety Heroes aims to:
- **Empower children with autism** by providing accessible, engaging ways to learn critical safety concepts
- **Build healthy habits** through interactive, gamified learning experiences
- **Foster independence** by teaching self-monitoring and decision-making skills
- **Create a sensory-friendly environment** with thoughtfully designed UI/UX that minimizes overwhelming stimuli
- **Support inclusive education** by making learning fun, visual, and interactive for all learning styles

---

## 🚀 Core Features

### 🛡️ **Interactive Safety Game**
- **Smart Item Classification**: Kids practice identifying safe vs. unsafe items through engaging visuals
- **Real-time Feedback**: Immediate, encouraging feedback helps reinforce correct choices
- **Pet Companion Integration**: A virtual pet reacts emotionally to player choices, adding emotional engagement
- **Difficulty Adaptation**: Questions are shuffled for variety, keeping the experience fresh
- **Image Preloading**: Smooth gameplay without loading delays between questions
- **Progress Tracking**: Real-time progress indicator shows question count (`Question X of Y`)

**How it Works:**
1. Kids see an image of an item (e.g., knife, teddy bear, stove)
2. They choose whether it's "Safe" or "Unsafe"
3. The pet companion reacts with different moods (happy, excited, sad, shocked)
4. Immediate feedback reinforces learning
5. Game automatically advances to the next item after 2.5 seconds

### 📚 **Daily Safety Tips & Habits Hub**
A comprehensive, categorized collection of safety and life skills:

**Four Main Categories:**
- **🛡️ Daily Safety Tips** (8 tips): Basic household and outdoor safety rules
  - Sharp objects, hot surfaces, electrical outlets, medication safety, etc.
  
- **🧠 Learning Habits** (7 habits): Building effective study routines
  - Following routines, task completion, focus practice, visual schedules, organization, asking for help, self-monitoring
  
- **🏃 Playtime & Exercise** (8 habits): Developing social and physical skills
  - Turn-taking, sharing, pretend play, rule-following games, creativity, physical activity, independent play, interactive play
  
- **⭐ Special Skills** (3 habits): Sensory and skill-based activities
  - Sensory-friendly play, skill-based games, calming activities

**Interactive Features:**
- **Habit Completion Tracking**: Click "I Did This!" to mark habits as completed
- **Progress Bar**: Visual representation of overall progress across all categories
- **Pet Mood System**: Pet expresses pride and joy when habits are completed
- **Pagination**: 3 tips per page with smooth navigation using Material-UI pagination
- **Dynamic Category Navigation**: Quick buttons to switch between categories with status indicators

### 🐾 **Pet Companion System**
A virtual emotional support pet that responds to player actions:

**Pet Moods:**
- 😊 **Happy**: Standard positive response
- 😃 **Excited**: Enthusiastic reaction to correct answers
- 🌿 **Peaceful**: Calm, encouraging mood
- 😔 **Sad**: Sympathetic response to mistakes (not punitive)
- 😲 **Shocked**: Surprised by answers
- 🎉 **Overjoyed**: Celebratory response when all items are answered correctly
- 🐾 **Neutral**: Default waiting state

**Emotional Intelligence:**
- The pet's reactions reinforce learning through emotional connection
- Different moods for different scenarios prevent monotony
- Animated transitions create engaging visual feedback
- Pet messages personalize the experience ("Your pet is so proud! 🐶✨")

### 💬 **Feedback System**
Real-time, contextual feedback boxes provide:
- ✅ Positive reinforcement for correct answers
- ❌ Constructive guidance for incorrect answers
- Icons and color coding (green for correct, red for incorrect)
- Aria-live regions for accessibility with screen readers
- Automatic dismissal to prevent clutter

### 🏠 **Home Page**
A welcoming landing hub with:
- **Hero Section**: Animated background with floating shapes, gradient title, and call-to-action button
- **React Concepts Showcase**: Interactive display of 13 React concepts used throughout the project
- **Difficulty Level Indicators**: Color-coded concept cards (Beginner, Intermediate, Advanced)
- **"Load More" Functionality**: Paginated display with incremental loading of concept cards
- **Developer Profile Section**: Information about creator Manvitha Dungi with portfolio link
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Educational References**: Links to articles and videos about autism-friendly design and accessibility

### 🧭 **Navigation**
- **React Router DOM**: Client-side routing for seamless page transitions
- **Persistent Navbar**: Consistent header with logo and navigation links
- **Active Link Highlighting**: Visual indication of current page
- **Accessibility Features**: Skip link for screen readers, proper semantic HTML

---

## 📁 Project Structure

```
Safety-Heroes/
├── public/
│   ├── index.html          # Main HTML entry point
│   ├── manifest.json       # PWA manifest for installability
│   └── robots.txt          # SEO robots configuration
│
├── src/
│   ├── App.js              # Root component with Router and context provider
│   ├── App.css             # Main application styles
│   ├── index.js            # React DOM render entry point
│   ├── index.css           # Global styles
│   │
│   ├── GameContext.js      # Context API for game state & pet state
│   ├── AppContext.js       # Alternative context provider (not actively used)
│   │
│   ├── components/
│   │   ├── Navbar.js       # Navigation bar with logo and route links
│   │   ├── Navbar.css
│   │   │
│   │   ├── SafeOrUnsafe.js # Core game component (safe/unsafe item cards)
│   │   ├── SafeOrUnsafe.css
│   │   │
│   │   ├── FeedbackBox.js  # Feedback display component
│   │   ├── FeedbackBox.css
│   │   │
│   │   ├── PetCompanion.js # Pet mood display (class component)
│   │   └── (No separate CSS for pet)
│   │
│   ├── pages/
│   │   ├── Home.js         # Landing page with concepts & profile
│   │   ├── Home.css
│   │   │
│   │   ├── Game.js         # Main game logic & item shuffling
│   │   ├── Game.css
│   │   │
│   │   ├── Tips.js         # Habits/tips display with categories & pagination
│   │   ├── Tips.css
│   │   │
│   │   ├── SafetyStories.js # Story-based learning (class component)
│   │   └── (No CSS file)
│   │
│   ├── data/
│   │   ├── safeItems.js    # Array of 12 safe/unsafe items with images & explanations
│   │   └── SafetyTips.js   # Arrays of tips/habits across 4 categories
│   │
│   └── images/             # Image assets for items, icons, and UI elements
│       ├── knife.jpg
│       ├── teddyBear.jpg
│       ├── stove.jpg
│       ├── book.jpg
│       ├── cleaning.jpg
│       ├── apple.jpg
│       ├── scissors.jpg
│       ├── soccer.jpg
│       ├── pills.jpg
│       ├── dog.jpg
│       ├── matchstick.jpg
│       ├── bicycle.jpg
│       ├── pet-*.jpg/gif   # Pet companion mood images
│       ├── hero.jpg        # Home page hero image
│       └── profile.jpg     # Developer profile image
│
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```

---

## 🎮 Safe Items Dataset

The game includes **12 carefully selected items** for learning safety:

| # | Item | Question | Safe? | Category |
|---|------|----------|-------|----------|
| 1 | Knife | Is it safe to touch this? | ❌ No | Sharp Objects |
| 2 | Teddy Bear | Is it safe to play with this? | ✅ Yes | Safe Toys |
| 3 | Hot Stove | Is it safe to touch this? | ❌ No | Heat Sources |
| 4 | Book | Is it safe to use this? | ✅ Yes | Learning Tools |
| 5 | Cleaning Supplies | Is it safe to play with these? | ❌ No | Chemicals |
| 6 | Apple | Is it safe to eat this? | ✅ Yes | Food |
| 7 | Scissors | Are these safe to use by yourself? | ❌ No | Sharp Objects |
| 8 | Soccer Ball | Is this a safe toy to play with? | ✅ Yes | Sports Equipment |
| 9 | Medicine Pills | Is it safe to take these yourself? | ❌ No | Medication |
| 10 | Dog | Is it safe to interact with this? | ✅ Yes | Animals |
| 11 | Matchstick | Is it safe to play with these? | ❌ No | Fire Hazards |
| 12 | Bicycle | Is this safe to ride with a helmet? | ✅ Yes | Sports Equipment |

Each item includes:
- **Image**: Visual representation for better learning
- **Question**: Age-appropriate phrasing
- **Correct Answer**: Boolean indicating safe (true) or unsafe (false)
- **Explanations**: Detailed feedback for both correct and incorrect answers

---

## 📊 Data Management

### SafetyTips Dataset
Organized in 4 arrays with icons and descriptions:

**Example Structure:**
```javascript
{
  icon: '🚫',                    // Emoji icon for visual recognition
  text: 'Don\'t touch knives or sharp tools without a grown-up.',
  description: 'Knives can cut skin easily...' // Optional detailed explanation
}
```

---

## ⚙️ State Management Architecture

### GameContext (Dual-Purpose Context)
Located in `src/GameContext.js`, provides two contexts:

**1. GameContext** - Game & Feedback state
```javascript
{
  score: number              // User's current score
  selectedItems: array       // Items the user has answered
  feedback: string           // Current feedback message
  updateScore(points)        // Function to increment score
  addItem(item)              // Function to track selected items
  giveFeedback(message)      // Function to display feedback
}
```

**2. PetContext** - Pet companion state
```javascript
{
  petMood: string            // Current pet emotion (happy, sad, excited, etc.)
  setPetMood(mood)           // Function to change pet mood
  allCorrect: boolean        // Track if all answers were correct
  setAllCorrect(bool)        // Function to update completion status
}
```

### Component-Level State
- **Home.js**: `visibleConcepts`, `activeTab`, `scrollY` (for animations)
- **Game.js**: `shuffledItems`, `currentItemIndex`, `isGameFinished`, `isAnswered`
- **Tips.js**: `page`, `completedTips`, `activeCategory`

---

## ⚛️ Deep Dive: React Concepts Implementation

### 1. **Props & Component Composition**
**Example in SafeOrUnsafe.js:**
```javascript
function SafeOrUnsafe({ item, onAnswer, isAnswered }) {
  // item prop contains: {id, name, image, question, isSafe}
  // onAnswer prop is a callback function
  // isAnswered prop controls button disabled state
}
```

### 2. **Props Validation with PropTypes**
```javascript
SafeOrUnsafe.propTypes = {
  item: PropTypes.shape({...}).isRequired,
  onAnswer: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};
```

### 3. **Hooks - useState**
**In Game.js:**
```javascript
const [shuffledItems, setShuffledItems] = useState([]);
const [currentItemIndex, setCurrentItemIndex] = useState(0);
const [isAnswered, setIsAnswered] = useState(false);
```

### 4. **Hooks - useEffect**
**Component Lifecycle in Game.js:**
```javascript
useEffect(() => {
  // Runs once on mount (like componentDidMount)
  setShuffledItems(shuffleArray(items));
  // Preload images for smooth UX
  items.forEach(item => new Image().src = item.image);
}, []); // Empty dependency = runs once
```

### 5. **Hooks - useContext**
**Consuming context in Game.js:**
```javascript
const { updateScore, feedback, giveFeedback } = useContext(GameContext);
const { setPetMood, setAllCorrect } = useContext(PetContext);
```

### 6. **Context API - Provider Pattern**
**In GameContext.js:**
```javascript
export const GameProvider = ({ children }) => {
  // State management here
  return (
    <GameContext.Provider value={{...}}>
      <PetContext.Provider value={{...}}>
        {children}
      </PetContext.Provider>
    </GameContext.Provider>
  );
};
```

### 7. **Class Components - PetCompanion.js**
```javascript
class PetCompanion extends React.Component {
  static contextType = PetContext; // Consume context in class component
  
  getPetImage = () => {
    const { petMood } = this.context; // Access context via this.context
    // Return appropriate image based on mood
  }
  
  render() {
    return <div>...</div>;
  }
}
```

### 8. **Conditional Rendering**
**In Game.js:**
```javascript
if (shuffledItems.length === 0) 
  return <div>Loading game...</div>;

{isGameFinished && <div className="game-over-screen">...</div>}

{feedback && <FeedbackBox message={feedback} />}
```

### 9. **Lists & Keys**
**In Tips.js:**
```javascript
{paginate(currentData, page).map((tip, i) => (
  <div key={`${activeCategory}-${i}`} className="tip-card">
    {/* Each item needs a unique key for React's reconciliation */}
  </div>
))}
```

### 10. **Event Handling**
**In Game.js:**
```javascript
const handleAnswer = (userChoice) => {
  const isCorrect = userChoice === currentItem.isSafe;
  if (isCorrect) {
    updateScore(1);
    setPetMood("excited");
  }
  // ... additional logic
};

<button onClick={() => onAnswer(true)}>Safe</button>
```

### 11. **Routing with React Router**
**In App.js:**
```javascript
<Router>
  <Navbar />
  <GameProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/tips" element={<Tips />} />
    </Routes>
  </GameProvider>
</Router>
```

### 12. **Controlled Components**
**In FeedbackBox.js:**
```javascript
// Props are controlled by parent and passed down
const FeedbackBox = ({ message, type }) => {
  if (!message?.trim()) return null; // Conditional rendering
  return <div className={`feedback-box ${type}`}>{message}</div>;
};
```

### 13. **Material-UI Integration**
**In Tips.js:**
```javascript
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

<Stack spacing={2}>
  <Pagination 
    count={Math.ceil(currentData.length / tipsPerPage)}
    page={page}
    onChange={(e, newPage) => setPage(newPage)}
  />
</Stack>
```

---

## ♿ Accessibility Features

Safety Heroes is built with inclusive design principles:

- **ARIA Labels**: Buttons and regions have descriptive aria-labels
- **ARIA Live Regions**: Feedback messages announce to screen readers with `aria-live="polite"`
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<role="alert">`
- **Skip Links**: "Skip to content" link for keyboard navigation
- **Color Accessibility**: Pastel color palette tested for color-blind users
- **Keyboard Navigation**: All interactive elements accessible via Tab key
- **Image Alt Text**: All images include descriptive alt attributes
- **Lazy Loading**: Images load on-demand for better performance
- **Error Handling**: Graceful image fallbacks if external images fail to load

---

## 🎨 Design & UX Principles

### Autism-Friendly Design
- **Minimal Visual Clutter**: Clean layout with ample white space
- **Predictable Interactions**: Actions have consistent, immediate feedback
- **Clear Navigation**: Obvious, easy-to-understand menu structure
- **Pastel Color Palette**: Soft colors reduce sensory overload
- **Large Touch Targets**: Buttons sized for finger accuracy
- **Consistent Styling**: Unified design language throughout
- **Optional Animations**: Scrolling parallax effects for engagement without being overwhelming

### Responsive Design
- **Mobile-First Approach**: Works seamlessly on phones, tablets, and desktops
- **CSS Grid & Flexbox**: Modern layout techniques for flexibility
- **Adaptive Typography**: Font sizes scale appropriately
- **Touch-Friendly UI**: Large buttons and generous spacing

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI library & component framework | ^19.1.1 |
| **React DOM** | DOM rendering | ^19.1.1 |
| **React Router DOM** | Client-side routing | ^7.9.1 |
| **Material-UI (MUI)** | Pagination & layout components | ^7.3.2 |
| **Emotion** | CSS-in-JS styling library | ^11.14.0 |
| **PropTypes** | Runtime type checking | (implicit) |
| **Lucide React** | Icon library | ^0.539.0 |
| **React Scripts** | Build tooling (Create React App) | 5.0.1 |
| **Web Vitals** | Performance monitoring | ^2.1.4 |
| **Testing Library** | Unit testing utilities | ^16.3.0 |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/ManvithaDungi/Safety-Heroes.git

# 2. Navigate to project directory
cd Safety-Heroes

# 3. Install dependencies
npm install

# 4. Start development server
npm start

# 5. Open in browser
# Automatically opens at http://localhost:3000
```

### Available Scripts

```bash
# Start development server (hot reload enabled)
npm start

# Build for production
npm run build

# Run test suite
npm test

# Deploy to GitHub Pages (if configured)
npm run deploy
```

---

## 🧪 Development Workflow

### Adding New Safety Items
1. Add image file to `src/images/`
2. Import image in `src/data/safeItems.js`
3. Add new object to items array with id, name, image, question, isSafe, and explanations
4. Game automatically includes new item in randomized rotation

### Adding New Safety Tips
1. Edit `src/data/SafetyTips.js`
2. Add object with icon, text, and optional description to appropriate category array
3. Tips automatically appear in Tips page with proper categorization

### Creating New Components
- Use functional components with hooks as default
- Add PropTypes validation for all props
- Include CSS file with same name in same directory
- Add comments explaining React concepts for educational purposes

---

## 📈 Performance Optimizations

- **Image Preloading**: `useEffect` preloads all item images on game mount
- **Lazy Loading**: Images use `loading="lazy"` attribute
- **Code Splitting**: React Router enables automatic route-based code splitting
- **Production Build**: Optimized build generated with `npm run build`
- **Asset Optimization**: PNG/JPG images optimized for web

---

## 🔮 Future Enhancements

### Phase 2 - Extended Learning
- **Audio Narration**: Text-to-speech for younger/non-reading children
- **Multi-Language Support**: Translations for global accessibility
- **Extended Story Mode**: Interactive narratives teaching safety through storytelling
- **Difficulty Levels**: Easy, Medium, Hard modes with more items and categories

### Phase 3 - Progress Tracking
- **User Profiles**: Login system for tracking individual progress
- **Progress Analytics**: Dashboard showing learning metrics and achievements
- **Leaderboard**: Optional friendly competition features
- **Achievement Badges**: Unlock badges for milestones and challenges

### Phase 4 - Backend Integration
- **Firebase/Node.js Backend**: Store user progress and feedback
- **Parent Dashboard**: Allow parents/teachers to monitor progress
- **Feedback Management**: Store and review user-submitted feedback
- **Analytics**: Collect anonymized usage data for improvement

### Phase 5 - Advanced Features
- **Multiplayer Games**: Cooperative play with peers
- **Custom Content Creator**: Admin panel to add institution-specific safety rules
- **AI Tutor**: Intelligent difficulty adjustment based on performance
- **Offline Mode**: PWA capabilities for offline learning
- **VR/AR Extensions**: Immersive safety simulations (future)

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style Guidelines
- Use functional components and hooks
- Include PropTypes for all custom components
- Add JSDoc comments for complex functions
- Keep components small and focused
- Maintain consistent naming conventions

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👩‍💻 Author

**Manvitha Dungi**  
Full-Stack Developer | Accessibility Advocate | Inclusive Design Enthusiast

- 🌐 [Portfolio Website](https://manvithadungi.github.io/MyPortfolio/)
- 📧 Contact via GitHub
- 🎯 Passionate about creating technology that empowers and includes everyone

---

## 📚 Resources & References

### Web Accessibility & Autism Design
- [Web Design for Autism](https://www.unimelb.edu.au/accessibility/web-design-for-autism) - University of Melbourne comprehensive guide
- [Best Autism Websites](https://webflow.com/made-in-webflow/autism) - Webflow showcase of excellent examples
- [Create an Accessible Website for Autism](https://medium.com/@oksana.iudenkova/create-an-accessible-website-make-it-autism-friendly-db6821c72ed3) - Medium article with step-by-step approach

### Video Resources
- [Designing for Web Accessibility](https://youtu.be/ou8kT9G5ZN4?si=OA4A5UOG0ATBHI8m)
- [Autism & Neurodiversity Inclusive Design](https://youtu.be/zf-1AeoaiqI?si=LdUoE4QOo_pPbfFV)
- [How to Design for Autism](https://youtu.be/_F_8s02KuT8?si=YQZakQsVbmdKrYlQ)

### Documentation
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Material-UI Documentation](https://mui.com)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🙏 Acknowledgments

- Teachers and educators who provided feedback on accessibility
- Parents of children with autism who helped shape design decisions
- Open-source community for amazing libraries and tools
- Material-UI team for excellent component library

---

**Last Updated**: March 2026  
**Version**: 0.1.0 (Beta)  
**Status**: 🚀 Active Development
