/**
 * 질문 데이터 및 가중치 설정 (비밀 매핑 테이블)
 * 관찰자 시점: 연인이 파트너의 데이트 스타일을 관찰해 '테토 농도' 분석
 * {subject} → '그'(남친 분석) 또는 '그녀'(여친 분석)로 동적 치환
 * 캐릭터 키: teto, potato, egen, sweet_potato, cheese, salsa, ehem, era
 */

/** 캐릭터별 가중치 (일부만 있어도 됨) */
export type ScoreMap = Partial<
  Record<"teto" | "potato" | "egen" | "sweet_potato" | "cheese" | "salsa" | "ehem" | "era", number>
>;

export type QuestionOption = { text: string; scores: ScoreMap };

export type QuestionItem = {
  id: number;
  /** 질문 문구. {subject}는 '그' 또는 '그녀'로 치환됨 */
  question: string;
  options: QuestionOption[];
};

/** 주어 치환: question 문자열 내 {subject} → '그' | '그녀' */
export function formatQuestion(question: string, subject: "그" | "그녀"): string {
  return question.replace(/\{subject\}/g, subject);
}

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "데이트 코스를 정할 때, {subject}의 스타일은?",
    options: [
      { text: "\"여기 가자!\" 이미 맛집부터 동선까지 농도 100% 계획을 짜온다.", scores: { teto: 2 } },
      { text: "\"뭐 먹고 싶어?\" 내 의견을 묻고 조심스럽게 옵션을 제안한다.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"우리 그냥 발길 닿는 대로 가볼까?\" 즉흥적인 무드에 몸을 맡긴다.", scores: { era: 1, salsa: 1 } },
      { text: "\"분위기 좋은 데 가고 싶어.\" 로맨틱한 장소 위주로 폭풍 검색한다.", scores: { egen: 1, cheese: 1 } },
      { text: "\"일단 여기 갈래? 맛있는 거 먹이고 싶어서..\" 달달하면서도 자연스럽게 에스코트한다.", scores: { sweet_potato: 1, ehem: 1 } },
    ],
  },
  {
    id: 2,
    question: "약속 장소에서 나를 발견했을 때, {subject}의 반응은?",
    options: [
      { text: "\"어이~! 여기야!\" 멀리서부터 크게 손 흔들며 환하게 웃어준다.", scores: { salsa: 1 } },
      { text: "\"오느라 고생했어.\" 부드럽게 미소 지으며 자연스럽게 짐을 들어준다.", scores: { cheese: 1 } },
      { text: "눈이 마주칠 때까지 조용히 기다렸다가 수줍게 다가와 인사한다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"딱 맞춰 왔네? 배고프지? 바로 갈까?\" 쿨하게 다음 일정을 챙긴다.", scores: { ehem: 1 } },
    ],
  },
  {
    id: 3,
    question: "북적이는 핫플에서 내가 \"사람 너무 많아서 기 빨려..\"라고 하면, {subject}의 반응은?",
    options: [
      { text: "\"그럼 바로 다른 데 갈까? 근처에 조용한 곳 내가 알고 있어.\"", scores: { teto: 1 } },
      { text: "\"고생이 많네.. 우리 조금만 더 기운 내보자! 다 먹고 맛있는 거 사줄게.\"", scores: { salsa: 1, cheese: 1 } },
      { text: "\"미안해, 내가 더 세심하게 체크했어야 했는데.. 조금만 앉아서 쉴까?\"", scores: { potato: 1, egen: 1 } },
      { text: "\"주말엔 원래 다 이렇지 뭐. 조금만 참으면 우리 차례야.\"", scores: { ehem: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 4,
    question: "메뉴를 고를 때, {subject}가 가장 중시하는 건?",
    options: [
      { text: "실패 없는 정석. 이 집 대표 메뉴로 무조건 고른다.", scores: { potato: 1, ehem: 1 } },
      { text: "사진 찍기 예쁜 메뉴. 비주얼과 플레이팅이 감각적인 걸 고른다.", scores: { egen: 1 } },
      { text: "왠지 오늘은 이게 땡긴다며, 이름만 보고 꽂힌 새 메뉴에 도전한다.", scores: { era: 1 } },
      { text: "\"뭐 좋아해? 네가 먹고 싶은 거 두 개 시키고 내가 하나 더 고를게.\"", scores: { cheese: 1, teto: 1 } },
    ],
  },
  {
    id: 5,
    question: "내가 \"오늘 나 좀 피곤해 보여?\"라고 물으면, {subject}의 반응은?",
    options: [
      { text: "\"어제 몇 시에 잤어? 커피 좀 마실까?\" 원인과 해결책부터 찾는다.", scores: { ehem: 1 } },
      { text: "\"아이구.. 속상해. 오늘 무리하지 말고 일찍 들어갈까?\" 마음부터 달래준다.", scores: { egen: 1 } },
      { text: "\"내 눈엔 여전히 예쁜데? 얼른 당 충전하러 가자!\" 능글맞게 기분을 풀어준다.", scores: { cheese: 1 } },
      { text: "\"나도 오늘 좀 피곤하긴 한데, 우리 같이 맛있는 거 먹고 힘내자!\"", scores: { salsa: 1 } },
      { text: "\"진짜? 내가 봤을 땐 괜찮아 보이는데.. 일단 앉아서 좀 쉬자.\" 무뚝뚝하지만 행동으로 챙긴다.", scores: { teto: 1, potato: 1 } },
    ],
  },
  {
    id: 6,
    question: "밥 먹고 나왔더니 비가 온다. 우산이 하나뿐일 때 {subject}의 대처는?",
    options: [
      { text: "\"잠시만, 편의점 위치 파악 끝!\" 10초 만에 달려가 우산을 하나 더 사온다.", scores: { teto: 1 } },
      { text: "\"오히려 좋아!\" 우산을 나 쪽으로 더 기울여주며 딱 붙어서 걷는다.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"비 오는 것도 나름 운치 있네. 근처 카페에서 비 구경 더 하다 갈까?\"", scores: { egen: 1, era: 1 } },
      { text: "\"옷 다 젖겠다. 일단 가까운 건물 안으로 들어가서 비 좀 피하자.\"", scores: { ehem: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 7,
    question: "카페에서 내가 \"만약 우리가 헤어진다면 어떨 것 같아?\"라고 묻으면, {subject}의 반응은?",
    options: [
      { text: "\"갑자기 왜 그런 말을 해? 무슨 일 있어?\" 이유를 논리적으로 묻는다.", scores: { ehem: 1, teto: 1 } },
      { text: "\"상상만 해도 너무 슬퍼.. 우리 절대 헤어지지 말자.\" 울컥하며 감정 이입한다.", scores: { egen: 1 } },
      { text: "\"헤어지긴 왜 헤어져~ 평생 내 옆에 딱 붙어있어야지!\" 장난스럽게 분위기를 넘긴다.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"글쎄.. 근데 지금 우리 사이 좋잖아? 미래 일은 그때 생각하자.\"", scores: { era: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 8,
    question: "데이트 중 사소한 오해로 분위기가 냉랭해졌을 때, {subject}의 스타일은?",
    options: [
      { text: "\"이건 내가 이래서 그랬던 거야.\" 논리적으로 상황을 설명하고 오해를 바로 푼다.", scores: { teto: 1, ehem: 1 } },
      { text: "\"기분 나쁘게 해서 미안해.. 화 풀릴 때까지 기다릴게.\" 내 감정을 먼저 살핀다.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"에라 모르겠다! 우리 맛있는 거 먹으면서 기분 풀자!\" 분위기 전환을 시도한다.", scores: { era: 1, salsa: 1 } },
      { text: "\"내가 뭘 잘못했는지 조근조근 말해줄 수 있어? 고치고 싶어서.\"", scores: { egen: 1 } },
      { text: "\"...일단 밖에 나가서 좀 걷자.\" 말없이 시간을 두고 감정을 식히려 한다.", scores: { cheese: 1 } },
    ],
  },
  {
    id: 9,
    question: "내 사진을 찍어줄 때, {subject}의 스타일은?",
    options: [
      { text: "\"수평 맞추고 발끝은 선에 맞춰야지.\" 완벽한 구도를 위해 여러 번 찍는다.", scores: { ehem: 1, potato: 1 } },
      { text: "\"지금 표정 너무 좋다!\" 분위기와 찰나의 감성을 담는 데 집중한다.", scores: { egen: 1, era: 1 } },
      { text: "\"인생샷 나올 때까지 찍어줄게!\" 칭찬 감옥에 가두며 열정적으로 셔터를 누른다.", scores: { salsa: 1, cheese: 1 } },
      { text: "\"자, 찍는다? 하나, 둘, 셋!\" 일단 정직하게 찍고 확인시켜준다.", scores: { sweet_potato: 1 } },
    ],
  },
  {
    id: 10,
    question: "데이트 종료 직전, \"2차로 어디 갈까?\"에 {subject}의 대답은?",
    options: [
      { text: "\"이대로 헤어지기 아쉽지! 힙한 펍 하나 알아놨는데 거기로 갈까?\"", scores: { salsa: 1, teto: 1 } },
      { text: "\"오늘 정말 즐거웠어! 이제는 각자 집에서 편하게 쉬는 게 어때?\"", scores: { sweet_potato: 1, ehem: 1 } },
      { text: "\"조용한 곳에서 칵테일 한 잔 어때? 우리 오늘 대화가 너무 잘 통하네.\"", scores: { egen: 1, cheese: 1 } },
      { text: "\"내일 출근/등교 생각하면 가야 하는데.. 아쉽다. 조금만 더 걸을까?\"", scores: { potato: 1, era: 1 } },
    ],
  },
  {
    id: 11,
    question: "내가 준비한 선물이 {subject}의 취향과 정반대일 때, {subject}의 반응은?",
    options: [
      { text: "\"진짜 감동이야.. 나 생각하며 골랐을 그 마음이 너무 예쁘다.\"", scores: { egen: 1, potato: 1 } },
      { text: "\"우와 고마워! 잘 쓸게!\" 리액션은 크게 하지만 속으로는 활용도를 생각하는 눈치.", scores: { cheese: 1, salsa: 1 } },
      { text: "\"준비하느라 고생했겠다. 근데 다음에는 이런 스타일로 사주면 더 좋을 것 같아!\"", scores: { teto: 1, ehem: 1 } },
      { text: "\"고마워. 근데 이런 건 나보다 네가 쓰면 더 잘 어울릴 것 같은데?\"", scores: { era: 1, sweet_potato: 1 } },
      { text: "\"헉 이거 어디서 났어? 근데 나 이런 거 좋아하는데 어떻게 알았어?\" 감자 특유의 솔직한 감동 표출.", scores: { potato: 1, egen: 1 } },
    ],
  },
  {
    id: 12,
    question: "데이트를 마치고 헤어질 때, {subject}의 마무리 스타일은?",
    options: [
      { text: "\"오늘 정말 행복했다~\" 같이 찍은 사진을 다시 보며 몽글몽글해한다.", scores: { egen: 1, salsa: 1 } },
      { text: "\"오늘 쓴 거 정리하고, 내일 할 일 미리 체크해야지.\" 깔끔하게 마무리한다.", scores: { ehem: 1, teto: 1 } },
      { text: "\"아까 그 식당 맛있었지.. 다음엔 거기 가보자고 해야겠다.\"", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"오늘도 알차게 놀았다! 자, 이제 내 개인 시간 시작인가?\"", scores: { era: 1, cheese: 1 } },
    ],
  },
  {
    id: 13,
    question: "SNS에 우리 사진을 올릴 때, {subject}의 스타일은?",
    options: [
      { text: "\"이 사진 진짜 잘 나왔다! 올려도 돼?\" 꼭 동의를 구하고 캡션도 고심해서 올린다.", scores: { teto: 1, ehem: 1 } },
      { text: "\"나 SNS 잘 안 해서..\" 올리기보다는 핸드폰 갤러리에 소중히 보관하는 편이다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"이거 봐봐! 우리 진짜 잘 어울린다~\" 자랑하듯 업로드하고 반응을 즐긴다.", scores: { salsa: 1, cheese: 1 } },
      { text: "사진은 찍지만 올리진 않는다. 공개보다 둘만의 추억을 중요하게 생각한다.", scores: { potato: 1, era: 1 } },
      { text: "\"필터 뭐가 좋을까?\" 감성적으로 꾸며서 스토리에 올린다.", scores: { egen: 1 } },
    ],
  },
  {
    id: 14,
    question: "장거리 이동 중 함께하는 시간에, {subject}의 모습은?",
    options: [
      { text: "미리 플레이리스트를 만들어 와서 함께 듣자고 한다.", scores: { teto: 1, egen: 1 } },
      { text: "조용히 내 어깨에 기대 잠들거나, 창밖을 멍하니 바라본다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"심심한데 게임 할까?\" 이것저것 함께할 거리를 찾는다.", scores: { salsa: 1, cheese: 1 } },
      { text: "\"여기 맛집 있대! 중간에 내려서 먹고 갈까?\" 경유지 맛집을 실시간으로 검색한다.", scores: { era: 1, salsa: 1 } },
      { text: "이동 시간을 활용해 앞으로의 일정이나 계획을 정리한다.", scores: { ehem: 1, teto: 1 } },
    ],
  },
  {
    id: 15,
    question: "기념일을 챙기는 방식에서, {subject}의 스타일은?",
    options: [
      { text: "한 달 전부터 레스토랑 예약, 선물 리스트까지 빈틈없이 준비한다.", scores: { teto: 2 } },
      { text: "\"기념일이 언제였더라..?\" 날짜를 잘 기억 못 하지만 알려주면 최선을 다한다.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"기념일이니까 특별한 거 하자!\" 이벤트를 직접 기획하는 걸 즐긴다.", scores: { salsa: 1, cheese: 1 } },
      { text: "편지나 손글씨 카드 등 마음이 담긴 아날로그 선물을 준비한다.", scores: { egen: 1 } },
      { text: "\"매일이 기념일이지~\" 특별한 날보다 일상에서 꾸준히 챙기는 타입이다.", scores: { era: 1 } },
      { text: "\"뭐 원하는 거 있어? 말해!\" 상대방이 진짜 원하는 걸 직접 물어보고 사준다.", scores: { ehem: 1 } },
    ],
  },
];

/** 여자친구 테토 농도 분석기: 대중 공감 버전 (15문항) - 남자가 여친을 관찰 */
export const QUESTIONS_GIRLFRIEND: QuestionItem[] = [
  {
    id: 1,
    question: "주말 데이트 장소를 정할 때, 그녀의 스타일은?",
    options: [
      { text: "\"여기 가자!\" 이미 핫플 리스트와 이동 동선까지 싹 다 정해온다.", scores: { teto: 1 } },
      { text: "\"너 하고 싶은 거 하자~\"라고 말하며 은근히 내가 고르기를 기다린다.", scores: { potato: 1 } },
      { text: "\"요즘 여기가 예쁘대.\" 인스타 감성 가득한 장소 위주로 찾아본다.", scores: { egen: 1 } },
      { text: "\"일단 만나서 생각할까?\" 계획 없이 그날의 기분에 맡기는 편이다.", scores: { era: 1 } },
      { text: "\"여기 가볼까? 맛있는 거 같이 먹자~\" 자연스럽게 분위기를 이끈다.", scores: { sweet_potato: 1, cheese: 1 } },
    ],
  },
  {
    id: 2,
    question: "약속 장소에 내가 조금 늦었을 때, 그녀의 반응은?",
    options: [
      { text: "\"왜 늦었어?\" 늦은 이유를 물어보고 다음부턴 늦지 말라고 확실히 말한다.", scores: { ehem: 1 } },
      { text: "\"오느라 힘들었지? 나 괜찮아~\" 웃으며 넘어가 주지만 살짝 기운이 없어 보인다.", scores: { potato: 1 } },
      { text: "\"뭐야~ 맛있는 거 사줘야 돼!\" 장난스럽게 투정 부리며 자연스럽게 넘어간다.", scores: { cheese: 1 } },
      { text: "(이미 본인도 늦어서) \"괜찮아! 나도 방금 왔어!\"라며 쿨하게 이해해 준다.", scores: { era: 1 } },
    ],
  },
  {
    id: 3,
    question: "식당에서 메뉴를 고를 때 그녀가 가장 자주 하는 말은?",
    options: [
      { text: "\"난 다 좋아! 네가 먹고 싶은 거 시켜.\" (하지만 내가 고른 걸 거절할 때도 있음)", scores: { potato: 1 } },
      { text: "\"이 집은 이게 시그니처래.\" 실패 없는 베스트 메뉴 위주로 꼼꼼히 살핀다.", scores: { ehem: 1 } },
      { text: "\"이거 사진 진짜 잘 나오겠다!\" 맛보다 비주얼이 예쁜 메뉴에 눈독을 들인다.", scores: { egen: 1 } },
      { text: "\"이것도 먹고 싶고 저것도 먹고 싶어!\" 먹고 싶은 게 많아 결정을 힘들어한다.", scores: { salsa: 1 } },
    ],
  },
  {
    id: 4,
    question: "내가 업무나 공부 때문에 힘들다고 털어놓을 때 그녀는?",
    options: [
      { text: "\"그 사람/상황이 잘못했네!\" 내 편이 되어 같이 화를 내며 감정적으로 공감해 준다.", scores: { salsa: 1 } },
      { text: "\"많이 힘들었지? 오늘 맛있는 거 먹고 푹 쉬자.\" 따뜻하게 위로하고 챙겨준다.", scores: { potato: 1 } },
      { text: "\"그럼 이렇게 해보는 건 어때?\" 상황을 분석하고 실질적인 해결책을 제안한다.", scores: { ehem: 1 } },
      { text: "\"자긴 잘할 수 있어! 기운 내!\" 밝은 에너지로 내 텐션을 끌어올려 주려 노력한다.", scores: { cheese: 1 } },
    ],
  },
  {
    id: 5,
    question: "예쁜 카페에 갔을 때, 그녀의 '인생샷'을 대하는 태도는?",
    options: [
      { text: "\"수평 잘 맞춰서 다시 찍어줘!\" 만족할 때까지 구도를 코칭하며 열정적으로 임한다.", scores: { teto: 1 } },
      { text: "\"그냥 대충 찍어줘~\"라고 하지만, 결과물이 잘 나오면 세상 행복해한다.", scores: { potato: 1 } },
      { text: "\"와, 지금 배경 너무 예쁘다! 자기랑 같이 셀카 찍자!\" 나랑 같이 찍는 걸 더 좋아한다.", scores: { cheese: 1 } },
      { text: "\"사진보다 지금 이 분위기가 너무 좋아.\" 사진 한두 장 찍고 대화에 집중한다.", scores: { era: 1 } },
      { text: "\"이 각도가 더 예쁘지 않아?\" 직접 포즈와 각도를 잡아주며 인생샷을 만들어 준다.", scores: { teto: 1, egen: 1 } },
    ],
  },
  {
    id: 6,
    question: "길을 걷다 그녀가 갖고 싶어 했던 물건을 발견했을 때!",
    options: [
      { text: "\"우와, 저거 진짜 예쁘다!\" 눈을 못 떼지만 선뜻 사달라는 말은 안 한다.", scores: { egen: 1 } },
      { text: "\"나중에 돈 모아서 사야지~\"라며 계획적으로 다음을 기약한다.", scores: { ehem: 1 } },
      { text: "\"자기야, 나 저거 사주면 안 돼? (반짝)\" 대놓고 애교 섞인 힌트를 준다.", scores: { cheese: 1 } },
      { text: "\"예쁘긴 한데 지금은 필요 없어.\" 아주 현실적이고 쿨하게 지나친다.", scores: { era: 1 } },
    ],
  },
  {
    id: 7,
    question: "우리가 사소한 말다툼을 하게 되었을 때, 그녀의 화법은?",
    options: [
      { text: "조목조목 따지며 내가 무엇을 잘못했는지 논리적으로 말한다.", scores: { teto: 1 } },
      { text: "\"그냥 서운해..\" 구체적인 이유보다 서운한 감정 자체를 먼저 알아주길 바란다.", scores: { egen: 1 } },
      { text: "화가 나면 일단 입을 닫고 혼자만의 시간을 가지려 한다.", scores: { sweet_potato: 1 } },
      { text: "\"미안해, 우리 싸우지 말자!\" 화해의 제스처를 먼저 보내며 분위기를 풀려 한다.", scores: { salsa: 1 } },
    ],
  },
  {
    id: 8,
    question: "그녀가 친구들과 모임에 갔을 때, 나에게 보내는 연락 스타일은?",
    options: [
      { text: "\"지금 뭐 먹어!\", \"누가 이런 말 했어!\" 실시간으로 상황을 중계하듯 카톡 한다.", scores: { salsa: 1 } },
      { text: "\"재밌게 놀고 이따 집 갈 때 연락할게!\" 미리 말해주고 노는 데 집중한다.", scores: { era: 1 } },
      { text: "틈틈이 내 안부를 물으며 \"자기 생각나서 연락했어\"라고 다정하게 말한다.", scores: { cheese: 1 } },
      { text: "답장이 꽤 느리지만 한 번 올 때 길고 정성스럽게 온다.", scores: { sweet_potato: 1 } },
      { text: "\"방금 찍은 사진인데 봐봐~\" 즐거운 순간을 사진으로 공유해 준다.", scores: { egen: 1, salsa: 1 } },
    ],
  },
  {
    id: 9,
    question: "내가 깜짝 서프라이즈 선물을 준비했을 때, 그녀가 가장 먼저 하는 반응은?",
    options: [
      { text: "\"헐, 대박! 언제 준비했어?\" 리액션 폭발하며 그 자리에서 바로 인증샷을 찍는다.", scores: { salsa: 1 } },
      { text: "(눈물 찔끔) 나를 생각하며 준비했을 내 마음이 예뻐서 감동받는다.", scores: { egen: 1 } },
      { text: "\"고마워! 근데 이거 비싼 거 아니야?\" 걱정 반 고마움 반으로 가격부터 생각한다.", scores: { ehem: 1 } },
      { text: "\"우와, 마침 필요했던 건데!\" 실용적인 선물이라며 아주 만족해한다.", scores: { potato: 1 } },
    ],
  },
  {
    id: 10,
    question: "그녀가 평소에 \"만약에~\"라며 묻는 질문의 특징은?",
    options: [
      { text: "\"만약에 내가 좀비가 되면 어떻게 할 거야?\" 엉뚱하고 창의적인 상상을 즐긴다.", scores: { era: 1 } },
      { text: "\"만약에 우리 나중에 결혼하면 어디 살까?\" 현실적인 미래에 대한 상상을 한다.", scores: { teto: 1 } },
      { text: "\"만약에 내가 갑자기 아프면 어떡할 거야?\" 내 사랑을 확인하고 싶어 하는 질문을 한다.", scores: { egen: 1 } },
      { text: "\"만약에...\"라는 질문 자체를 별로 안 좋아하고 현실에 집중한다.", scores: { ehem: 1 } },
    ],
  },
  {
    id: 11,
    question: "데이트가 끝나고 집에 바래다줬을 때, 그녀의 마지막 모습은?",
    options: [
      { text: "현관문 들어갈 때까지 계속 뒤를 돌아보며 손을 흔들어준다.", scores: { salsa: 1 } },
      { text: "\"집 가서 카톡 해!\" 짧게 인사하고 쿨하게 들어간다.", scores: { era: 1 } },
      { text: "\"아쉽다.. 조금만 더 같이 있으면 안 돼?\" 대문 앞에서 한참을 서성인다.", scores: { cheese: 1 } },
      { text: "\"오늘 너무 즐거웠어, 조심히 가!\" 다정한 인사와 함께 오늘 데이트 피드백을 해준다.", scores: { teto: 1 } },
      { text: "\"내일 뭐 해? 내일도 볼 수 있어?\" 헤어지기 전 이미 다음 만남을 약속한다.", scores: { potato: 1, sweet_potato: 1 } },
    ],
  },
  {
    id: 12,
    question: "자기 전 통화할 때, 그녀가 주로 하는 대화의 마무리는?",
    options: [
      { text: "\"오늘 하루도 수고했어, 사랑해!\" 꿀 떨어지는 애정 표현으로 마무리한다.", scores: { cheese: 1 } },
      { text: "\"우리 내일은 몇 시에 연락할까?\" 다음 일정을 확인하며 마무리한다.", scores: { ehem: 1 } },
      { text: "\"졸리다.. 자기가 먼저 끊어~\"라며 끝까지 통화를 이어가려 한다.", scores: { sweet_potato: 1 } },
      { text: "\"자세한 건 내일 만나서 얘기하자, 잘 자!\" 깔끔하게 인사하고 잠든다.", scores: { era: 1 } },
    ],
  },
  {
    id: 13,
    question: "SNS에 우리 사진을 올릴 때, 그녀의 스타일은?",
    options: [
      { text: "\"이 사진 올려도 돼?\" 나한테 꼭 확인하고 캡션과 필터도 고심해서 올린다.", scores: { teto: 1, ehem: 1 } },
      { text: "SNS보다는 갤러리에 소중히 보관한다. 공개보다 둘만의 기록을 좋아한다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"우리 사진 진짜 잘 나왔다!\" 자랑하듯 스토리에 올리고 반응을 즐긴다.", scores: { salsa: 1, cheese: 1 } },
      { text: "셀카는 매번 찍지만 올리진 않는다. 나중에 앨범처럼 모아두는 타입.", scores: { potato: 1, era: 1 } },
      { text: "\"이 필터 분위기 있지 않아?\" 감성 가득한 편집으로 예쁘게 올린다.", scores: { egen: 1 } },
    ],
  },
  {
    id: 14,
    question: "장거리 이동 중 함께하는 시간에, 그녀의 모습은?",
    options: [
      { text: "직접 플레이리스트를 만들어 와서 같이 들으며 기분을 띄운다.", scores: { teto: 1, egen: 1 } },
      { text: "내 어깨에 살짝 기대 잠들거나, 창밖을 보며 조용한 시간을 즐긴다.", scores: { sweet_potato: 1, potato: 1 } },
      { text: "\"이거 같이 하자!\" 게임이나 퀴즈 등 함께할 거리를 찾는다.", scores: { salsa: 1, cheese: 1 } },
      { text: "\"여기 맛집 있대! 잠깐 내려서 먹고 갈까?\" 실시간으로 경유지를 검색한다.", scores: { era: 1, salsa: 1 } },
      { text: "이동 시간에 앞으로의 일정을 같이 정리하자고 한다.", scores: { ehem: 1, teto: 1 } },
    ],
  },
  {
    id: 15,
    question: "기념일을 챙기는 방식에서, 그녀의 스타일은?",
    options: [
      { text: "한 달 전부터 레스토랑 예약, 매칭 코디까지 빈틈없이 준비하는 완벽주의자.", scores: { teto: 2 } },
      { text: "\"기념일이 언제였더라..?\" 날짜를 잘 기억 못 하지만 리마인더에 챙겨두는 편.", scores: { potato: 1, sweet_potato: 1 } },
      { text: "\"기념일에 뭐 하고 싶어?\" 나한테 물어보고 함께 계획하는 걸 좋아한다.", scores: { cheese: 1 } },
      { text: "편지나 직접 만든 선물 등 마음이 담긴 아날로그 감성을 선호한다.", scores: { egen: 1 } },
      { text: "\"매일이 기념일이지~\" 특별한 날보다 일상에서 꾸준히 챙기는 타입.", scores: { era: 1 } },
      { text: "\"우리 이날 뭐 하자!\" 깜짝 이벤트를 직접 기획하는 걸 즐긴다.", scores: { salsa: 1, ehem: 1 } },
    ],
  },
];
