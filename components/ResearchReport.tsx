"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResearchReport() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-[480px] mt-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left py-3 px-4 bg-white/80 hover:bg-white border border-purple-100 rounded-2xl shadow-sm transition-colors flex items-center justify-between gap-2"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-purple-700">
          📋 연구 리포트: 연애 성향 테스트, 과학일까?
        </span>
        <span className="text-purple-400 text-lg shrink-0">
          {open ? "▲" : "▼"}
        </span>
      </button>
      {open && (
        <div className="mt-2 p-4 bg-white/90 border border-purple-100 rounded-2xl shadow-sm text-left text-[13px] text-gray-600 leading-relaxed space-y-4">
          <p>
            우리는 왜 새로운 사람을 만날 때나 연인과의 갈등이 생길 때 성향 테스트를
            찾게 될까요? 단순히 흥미를 넘어, 테토 연구소가 지향하는 연애 성향
            분석 뒤에 숨겨진 세 가지 과학적 원리를 공개합니다.
          </p>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              1. 성격 심리학의 표준: Big Five 모델
            </h3>
            <p className="mb-2">
              현대 심리학에서 가장 신뢰받는 성격 이론은{" "}
              <strong>Big Five(5요인 모델)</strong>입니다. 이는 인간의 성격을
              외향성, 친화성, 성실성, 신경증, 개방성이라는 다섯 가지 축으로
              분석합니다.
            </p>
            <ul className="list-none space-y-1 text-[12px]">
              <li>
                <strong>외향성(Extraversion):</strong> 연애에서 에너지를 밖으로
                발산하는 &apos;살사형&apos;과 내면의 안정을 중시하는
                &apos;포테토형&apos;을 구분하는 핵심 지표입니다.
              </li>
              <li>
                <strong>성실성(Conscientiousness):</strong> 데이트 계획을 철저히
                세우는 &apos;테토형&apos;과 즉흥적인 즐거움을 즐기는
                &apos;에라형&apos;의 차이를 설명합니다.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              2. 관계의 뿌리: 애착 이론 (Attachment Theory)
            </h3>
            <p className="mb-2">
              연애 성향 테스트의 또 다른 기둥은 존 볼비의{" "}
              <strong>애착 이론</strong>입니다. 어린 시절 형성된 애착 유형은
              성인이 된 후 연인과의 관계 맺기 방식에 결정적인 영향을 미칩니다.
            </p>
            <ul className="list-none space-y-1 text-[12px]">
              <li>
                <strong>안정 애착:</strong> 상대에게 신뢰를 주고 정서적 지지를
                보내는 &apos;고구마형&apos;이나 &apos;에헴형&apos;에서 자주
                나타나는 특징입니다.
              </li>
              <li>
                <strong>불안/회피 애착:</strong> 섬세한 감성을 가진
                &apos;에겐형&apos;이나 자율성을 중시하는 &apos;에라형&apos;의
                소통 방식을 이해하는 열쇠가 됩니다.
              </li>
            </ul>
          </div>

          <div className="py-3 px-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-center text-purple-700 font-medium mb-2">
              당신의 농도가 궁금하다면?
            </p>
            <Link
              href="/test?mode=boyfriend"
              className="block w-full py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
            >
              테스트 시작하기 →
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">
              3. 바넘 효과와 인지적 정교화
            </h3>
            <p>
              많은 사람이 테스트 결과에 &apos;내 얘기 같다!&apos;며 공감하는
              이유는 <strong>바넘 효과(Barnum Effect)</strong> 때문이기도 합니다.
              하지만 테토 연구소는 보편적인 문구에 그치지 않고, 사용자가 자신의
              연애 패턴을 스스로 돌아보게 만드는 &apos;인지적 정교화&apos; 과정을
              유도합니다. 이를 통해 사용자는 단순한 결과를 넘어 자신의 연애
              방식을 객관적으로 관찰할 기회를 얻게 됩니다.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
