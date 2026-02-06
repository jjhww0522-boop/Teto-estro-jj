/**
 * 질문 데이터 및 가중치 설정 (비밀 매핑 테이블)
 * 관찰자 시점: 여친이 남친의 데이트 스타일을 관찰해 '테토 농도'를 분석
 * 캐릭터 키: teto, potato, egen, sweet_potato, cheese, salsa, ehem, era
 */

/** 캐릭터별 가중치 (일부만 있어도 됨) */
export type ScoreMap = Partial<
  Record<"teto" | "potato" | "egen" | "sweet_potato" | "cheese" | "salsa" | "ehem" | "era", number>
>;

export type QuestionOption = { text: string; scores: ScoreMap };

export type QuestionItem = {
  id: number;
  question: string;
  options: QuestionOption[];
};

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "데이트 코스를 정할 때, 그의 스타일은?",
    options: [
      { text: "\"여기 가자!\" 이미 맛집부터 동선까지 농도 100% 계획을 짜온다.", scores: { teto: 2 } },
      { text: "\"뭐 먹고 싶어?\" 내 의견을 묻고 조심스럽게 옵션을 제안한다.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"우리 그냥 발길 닿는 대로 가볼까?\" 즉흥적인 무드에 몸을 맡긴다.", scores: { era: 1, salsa: 1 } },
      { text: "\"분위기 좋은 데 가고 싶어.\" 로맨틱한 장소 위주로 폭풍 검색한다.", scores: { egen: 1, cheese: 1 } },
    ],
  },
  {
    id: 2,
    question: "약속 장소에서 나를 발견했을 때, 그의 반응은?",
    options: [
      { text: "\"어이~! 여기야!\" 멀리서부터 크게 손 흔들며 환하게 웃어준다.", scores: { salsa: 1 } },
      { text: "\"오느라 고생했어.\" 부드럽게 미소 지으며 자연스럽게 짐을 들어준다.", scores: { cheese: 1 } },
      { text: "눈이 마주칠 때까지 조용히 기다렸다가 수줍게 다가와 인사한다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"딱 맞춰 왔네? 배고프지? 바로 갈까?\" 쿨하게 다음 일정을 챙긴다.", scores: { ehem: 1 } },
    ],
  },
  {
    id: 3,
    question: "북적이는 핫플에서 내가 \"사람 너무 많아서 기 빨려..\"라고 하면, 그의 반응은?",
    options: [
      { text: "\"그럼 바로 다른 데 갈까? 근처에 조용한 곳 내가 알고 있어.\"", scores: { teto: 1 } },
      { text: "\"고생이 많네.. 우리 조금만 더 기운 내보자! 다 먹고 맛있는 거 사줄게.\"", scores: { salsa: 1, cheese: 1 } },
      { text: "\"미안해, 내가 더 세심하게 체크했어야 했는데.. 조금만 앉아서 쉴까?\"", scores: { potato: 1, egen: 1 } },
      { text: "\"주말엔 원래 다 이렇지 뭐. 조금만 참으면 우리 차례야.\"", scores: { ehem: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 4,
    question: "메뉴를 고를 때, 그가 가장 중시하는 건?",
    options: [
      { text: "실패 없는 정석. 이 집 대표 메뉴로 무조건 고른다.", scores: { potato: 1, ehem: 1 } },
      { text: "사진 찍기 예쁜 메뉴. 비주얼과 플레이팅이 감각적인 걸 고른다.", scores: { egen: 1 } },
      { text: "왠지 오늘은 이게 땡긴다며, 이름만 보고 꽂힌 새 메뉴에 도전한다.", scores: { era: 1 } },
      { text: "\"뭐 좋아해? 네가 먹고 싶은 거 두 개 시키고 내가 하나 더 고를게.\"", scores: { cheese: 1, teto: 1 } },
    ],
  },
  {
    id: 5,
    question: "내가 \"오늘 나 좀 피곤해 보여?\"라고 물으면, 그의 반응은?",
    options: [
      { text: "\"어제 몇 시에 잤어? 커피 좀 마실까?\" 원인과 해결책부터 찾는다.", scores: { ehem: 1 } },
      { text: "\"아이구.. 속상해. 오늘 무리하지 말고 일찍 들어갈까?\" 마음부터 달래준다.", scores: { egen: 1 } },
      { text: "\"내 눈엔 여전히 예쁜데? 얼른 당 충전하러 가자!\" 능글맞게 기분을 풀어준다.", scores: { cheese: 1 } },
      { text: "\"나도 오늘 좀 피곤하긴 한데, 우리 같이 맛있는 거 먹고 힘내자!\"", scores: { salsa: 1 } },
    ],
  },
  {
    id: 6,
    question: "밥 먹고 나왔더니 비가 온다. 우산이 하나뿐일 때 그의 대처는?",
    options: [
      { text: "\"잠시만, 편의점 위치 파악 끝!\" 10초 만에 달려가 우산을 하나 더 사온다.", scores: { teto: 1 } },
      { text: "\"오히려 좋아!\" 우산을 나 쪽으로 더 기울여주며 딱 붙어서 걷는다.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"비 오는 것도 나름 운치 있네. 근처 카페에서 비 구경 더 하다 갈까?\"", scores: { egen: 1, era: 1 } },
      { text: "\"옷 다 젖겠다. 일단 가까운 건물 안으로 들어가서 비 좀 피하자.\"", scores: { ehem: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 7,
    question: "카페에서 내가 \"만약 우리가 헤어진다면 어떨 것 같아?\"라고 묻으면, 그의 반응은?",
    options: [
      { text: "\"갑자기 왜 그런 말을 해? 무슨 일 있어?\" 이유를 논리적으로 묻는다.", scores: { ehem: 1, teto: 1 } },
      { text: "\"상상만 해도 너무 슬퍼.. 우리 절대 헤어지지 말자.\" 울컥하며 감정 이입한다.", scores: { egen: 1 } },
      { text: "\"헤어지긴 왜 헤어져~ 평생 내 옆에 딱 붙어있어야지!\" 장난스럽게 분위기를 넘긴다.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"글쎄.. 근데 지금 우리 사이 좋잖아? 미래 일은 그때 생각하자.\"", scores: { era: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 8,
    question: "데이트 중 사소한 오해로 분위기가 냉랭해졌을 때, 그의 스타일은?",
    options: [
      { text: "\"이건 내가 이래서 그랬던 거야.\" 논리적으로 상황을 설명하고 오해를 바로 푼다.", scores: { teto: 1, ehem: 1 } },
      { text: "\"기분 나쁘게 해서 미안해.. 화 풀릴 때까지 기다릴게.\" 내 감정을 먼저 살핀다.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"에라 모르겠다! 우리 맛있는 거 먹으면서 기분 풀자!\" 분위기 전환을 시도한다.", scores: { era: 1, salsa: 1 } },
      { text: "\"내가 뭘 잘못했는지 조근조근 말해줄 수 있어? 고치고 싶어서.\"", scores: { egen: 1 } },
    ],
  },
  {
    id: 9,
    question: "내 사진을 찍어줄 때, 그의 스타일은?",
    options: [
      { text: "\"수평 맞추고 발끝은 선에 맞춰야지.\" 완벽한 구도를 위해 여러 번 찍는다.", scores: { ehem: 1, potato: 1 } },
      { text: "\"지금 표정 너무 좋다!\" 분위기와 찰나의 감성을 담는 데 집중한다.", scores: { egen: 1, era: 1 } },
      { text: "\"인생샷 나올 때까지 찍어줄게!\" 칭찬 감옥에 가두며 열정적으로 셔터를 누른다.", scores: { salsa: 1, cheese: 1 } },
      { text: "\"자, 찍는다? 하나, 둘, 셋!\" 일단 정직하게 찍고 확인시켜준다.", scores: { sweet_potato: 1 } },
    ],
  },
  {
    id: 10,
    question: "데이트 종료 직전, \"2차로 어디 갈까?\"에 그의 대답은?",
    options: [
      { text: "\"이대로 헤어지기 아쉽지! 힙한 펍 하나 알아놨는데 거기로 갈까?\"", scores: { salsa: 1, teto: 1 } },
      { text: "\"오늘 정말 즐거웠어! 이제는 각자 집에서 편하게 쉬는 게 어때?\"", scores: { sweet_potato: 1, ehem: 1 } },
      { text: "\"조용한 곳에서 칵테일 한 잔 어때? 우리 오늘 대화가 너무 잘 통하네.\"", scores: { egen: 1, cheese: 1 } },
      { text: "\"내일 출근/등교 생각하면 가야 하는데.. 아쉽다. 조금만 더 걸을까?\"", scores: { potato: 1, era: 1 } },
    ],
  },
  {
    id: 11,
    question: "내가 준비한 선물이 그의 취향과 정반대일 때, 그의 반응은?",
    options: [
      { text: "\"진짜 감동이야.. 나 생각하며 골랐을 그 마음이 너무 예쁘다.\"", scores: { egen: 1, potato: 1 } },
      { text: "\"우와 고마워! 잘 쓸게!\" 리액션은 크게 하지만 속으로는 활용도를 생각하는 눈치.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"준비하느라 고생했겠다. 근데 다음에는 이런 스타일로 사주면 더 좋을 것 같아!\"", scores: { teto: 1, ehem: 1 } },
      { text: "\"고마워. 근데 이런 건 나보다 네가 쓰면 더 잘 어울릴 것 같은데?\"", scores: { era: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 12,
    question: "데이트를 마치고 헤어질 때, 그의 마무리 스타일은?",
    options: [
      { text: "\"오늘 정말 행복했다~\" 같이 찍은 사진을 다시 보며 몽글몽글해한다.", scores: { egen: 1, salsa: 1 } },
      { text: "\"오늘 쓴 거 정리하고, 내일 할 일 미리 체크해야지.\" 깔끔하게 마무리한다.", scores: { ehem: 1, teto: 1 } },
      { text: "\"아까 그 식당 맛있었지.. 다음엔 거기 가보자고 해야겠다.\"", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"오늘도 알차게 놀았다! 자, 이제 내 개인 시간 시작인가?\"", scores: { era: 1, cheese: 1 } },
    ],
  },
];
