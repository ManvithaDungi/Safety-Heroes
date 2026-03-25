import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { references, reactConcepts } from '../data/references';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [visibleConcepts, setVisibleConcepts] = useState(6);

  const handleLoadMore = () => {
    setVisibleConcepts((prev) => Math.min(prev + 3, reactConcepts.length));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-secondary-soft';
      case 'Intermediate':
        return 'bg-primary-soft';
      case 'Advanced':
        return 'bg-accent-soft';
      default:
        return 'bg-border-light text-text-primary';
    }
  };

  const getDifficultyTextColor = (difficulty: string) => {
    return difficulty === 'Advanced' ? 'text-text-primary' : 'text-white';
  };

  return (
    <main id="main-content" className="bg-bg-primary">
      {/* Hero Section - Clean, minimal, non-distracting */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-3xl">
          {/* Main heading - Clear hierarchy */}
          <h1 className="text-5xl md:text-6xl font-nunito font-bold text-text-primary mb-6">
            Learn to Stay <span className="text-primary-soft">Safe</span>
          </h1>

          {/* Subheading - Calm, supportive tone */}
          <p className="text-lg md:text-xl font-quicksand text-text-secondary mb-10 max-w-2xl leading-relaxed">
            An autism-friendly interactive platform where kids master essential safety skills through fun games, helpful tips, and a supportive companion.
          </p>

          {/* CTA Buttons - Large, accessible */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/game')}
              className="btn-primary-strong px-8 py-4 md:px-10 md:py-5 text-lg font-bold"
            >
              Play the Game
            </button>
            <button
              onClick={() => navigate('/tips')}
              className="btn-secondary px-8 py-4 md:px-10 md:py-5 text-lg font-bold"
            >
              Browse Tips
            </button>
          </div>

          {/* Feature Cards - Simple, informative */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { 
                title: 'Safety Game', 
                desc: 'Learn by playing engaging, interactive challenges'
              },
              { 
                title: 'Daily Tips', 
                desc: 'Build good habits with organized guidance'
              },
              { 
                title: 'Companion', 
                desc: 'Get supportive feedback and encouragement'
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card smooth-transition hover:shadow-soft-lg"
              >
                <h3 className="font-nunito font-bold text-xl text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-quicksand text-text-secondary leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* React Concepts Showcase - Educational, accessible */}
      <section className="py-16 md:py-20 px-4 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-center text-text-primary mb-12">
            React Concepts Inside
          </h2>

          {/* Concepts grid - Clean layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {reactConcepts.slice(0, visibleConcepts).map((concept, idx) => (
              <div
                key={idx}
                className={`${getDifficultyColor(concept.difficulty)} ${getDifficultyTextColor(concept.difficulty)} rounded-2xl p-6 shadow-soft-md hover:shadow-soft-lg smooth-transition`}
              >
                <h3 className="font-nunito font-bold text-lg mb-3">{concept.name}</h3>
                <span className="inline-block bg-white/30 px-3 py-1 rounded-full text-xs font-nunito font-semibold">
                  {concept.difficulty}
                </span>
              </div>
            ))}
          </div>

          {visibleConcepts < reactConcepts.length && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="btn-primary px-8 py-4 font-bold"
              >
                Load More Concepts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Developer Profile - Minimal, professional */}
      <section className="py-16 md:py-20 px-4 bg-bg-primary">
        <div className="max-w-md mx-auto text-center">
          {/* Avatar - Simple text-based badge */}
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 rounded-2xl bg-primary-soft flex items-center justify-center shadow-soft-md">
            <p className="font-nunito font-bold text-white text-3xl">MD</p>
          </div>

          <h2 className="text-3xl font-nunito font-bold text-text-primary mb-2">
            Manvitha Dungi
          </h2>
          <p className="text-base font-nunito font-semibold text-primary-soft mb-4">
            Full-Stack Developer
          </p>
          <p className="text-text-secondary font-quicksand mb-8 leading-relaxed">
            Passionate about creating inclusive technology that empowers every learner, especially children with diverse learning needs.
          </p>

          <a
            href="https://manvithadungi.github.io/MyPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-strong inline-block px-8 py-4 font-bold"
          >
            Visit Portfolio
          </a>
        </div>
      </section>

      {/* References Section - Educational resources */}
      <section className="py-16 md:py-20 px-4 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-nunito font-bold text-center text-text-primary mb-12">
            Resources &amp; Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Articles */}
            <div>
              <h3 className="text-2xl font-nunito font-bold text-text-primary mb-6">
                Articles
              </h3>
              <div className="space-y-4">
                {references.articles.map((article) => (
                  <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card p-5 smooth-transition hover:shadow-soft-lg"
                  >
                    <p className="font-nunito font-bold text-text-primary mb-2">
                      {article.title}
                    </p>
                    <p className="text-sm font-quicksand text-text-secondary">
                      {article.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div>
              <h3 className="text-2xl font-nunito font-bold text-text-primary mb-6">
                Videos
              </h3>
              <div className="space-y-4">
                {references.videos.map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block card p-5 smooth-transition hover:shadow-soft-lg"
                  >
                    <p className="font-nunito font-bold text-text-primary mb-2">
                      {video.title}
                    </p>
                    <p className="text-sm font-quicksand text-text-secondary">
                      {video.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
