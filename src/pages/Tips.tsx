import React, { useState, useMemo } from 'react';
import { safetyTips } from '../data/safetyTips';
import { usePetContext } from '../contexts/GameContext';

export const Tips: React.FC = () => {
  const { setPetMood } = usePetContext();
  const [activeCategory, setActiveCategory] = useState(0);
  const [completedTips, setCompletedTips] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const tipsPerPage = 6;

  const currentCategory = safetyTips[activeCategory];
  const categoryTips = currentCategory.tips;

  // Calculate pagination
  const totalPages = Math.ceil(categoryTips.length / tipsPerPage);
  const paginatedTips = useMemo(() => {
    const start = (page - 1) * tipsPerPage;
    return categoryTips.slice(start, start + tipsPerPage);
  }, [categoryTips, page]);

  // Calculate overall completion
  const totalTips = safetyTips.reduce((sum, cat) => sum + cat.tips.length, 0);
  const completionPercentage = (completedTips.length / totalTips) * 100;

  const toggleTip = (tipId: string) => {
    if (!completedTips.includes(tipId)) {
      setCompletedTips((prev) => [...prev, tipId]);
      setPetMood('excited');

      // Show celebration after a moment
      setTimeout(() => setPetMood('happy'), 500);
      setTimeout(() => setPetMood('neutral'), 2000);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-b from-cream via-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Overall Progress */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-nunito font-bold text-gray-800 mb-3">
            📊 Today's Progress
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-safe to-mint h-full rounded-full transition-all duration-600"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
            <p className="font-nunito font-bold text-coral whitespace-nowrap">
              {completedTips.length} / {totalTips}
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {safetyTips.map((cat, idx) => {
            const categoryTipsCount = cat.tips.length;
            const categoryCompleted = cat.tips.filter((t) => completedTips.includes(t.id)).length;

            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveCategory(idx);
                  setPage(1);
                }}
                className={`px-6 py-3 rounded-full font-nunito font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeCategory === idx
                    ? 'bg-coral text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-cream border-2 border-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                  {categoryCompleted}/{categoryTipsCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {paginatedTips.map((tip) => {
            const isCompleted = completedTips.includes(tip.id);
            return (
              <div
                key={tip.id}
                className={`rounded-2xl p-6 transition-all ${
                  isCompleted
                    ? 'bg-safe/20 border-2 border-safe'
                    : 'bg-white border-2 border-gray-200 hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{tip.icon}</div>
                  <div className="flex-1">
                    <p className="font-quicksand font-bold text-gray-800 mb-2">
                      {tip.text}
                    </p>
                    {tip.description && (
                      <p className="text-xs font-quicksand text-gray-600 mb-3">
                        {tip.description}
                      </p>
                    )}

                    <button
                      onClick={() => toggleTip(tip.id)}
                      disabled={isCompleted}
                      className={`w-full py-2 rounded-lg font-quicksand font-bold transition-all ${
                        isCompleted
                          ? 'bg-safe text-white cursor-default'
                          : 'bg-yellow text-gray-800 hover:shadow-md active:scale-95'
                      }`}
                    >
                      {isCompleted ? '✅ I Did This!' : '✨ I Did This!'}
                    </button>
                  </div>
                  {isCompleted && (
                    <div className="text-2xl flex-shrink-0">✨</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`px-4 py-2 rounded-full font-nunito font-bold transition-all ${
                  page === idx + 1
                    ? 'bg-coral text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-cream border-2 border-gray-200'
                }`}
                aria-label={`Page ${idx + 1}`}
                aria-current={page === idx + 1 ? 'page' : undefined}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}

        {/* Celebration message */}
        {completionPercentage === 100 && (
          <div className="text-center bg-yellow rounded-2xl p-8 mb-8 animate-bounce">
            <div className="text-6xl mb-4">🎊</div>
            <h2 className="text-3xl font-nunito font-bold text-gray-800 mb-2">
              Amazing Job!
            </h2>
            <p className="font-quicksand text-gray-700">
              You've completed all the tips for today! 🌟
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
