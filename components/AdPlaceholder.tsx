"use client";

interface AdPlaceholderProps {
  position: "top" | "bottom";
}

export default function AdPlaceholder({ position }: AdPlaceholderProps) {
  return (
    <div className="w-full flex justify-center my-6">
      <div className="w-full max-w-2xl">
        {/* 광고 Placeholder - 예쁘게 디자인된 영역 */}
        <div className="bg-gradient-to-r from-pastel-yellow/20 via-pastel-peach/20 to-pastel-pink/20 rounded-2xl p-6 border-2 border-dashed border-pastel-purple/30 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center space-y-3 min-h-[120px]">
            {/* 광고 아이콘 */}
            <div className="text-4xl opacity-50">
              {position === "top" ? "🎯" : "💝"}
            </div>
            
            {/* 광고 텍스트 */}
            <div className="text-center space-y-1">
              <p className="text-sm font-medium text-gray-400">
                Advertisement
              </p>
              <p className="text-xs text-gray-300">
                이 공간은 광고 영역입니다
              </p>
            </div>

            {/* 실제 광고가 들어갈 영역 */}
            <div className="w-full">
              {/* GoogleAdsense 컴포넌트가 여기에 들어갑니다 */}
              {/* <GoogleAdsense adSlot="XXXXXXXXXX" /> */}
              
              {/* 임시 Placeholder 박스 */}
              <div className="bg-white/40 rounded-xl p-8 text-center">
                <p className="text-sm text-gray-400 font-mono">
                  728 x 90 (Leaderboard)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
