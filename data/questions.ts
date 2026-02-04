export type ResultCode = "T" | "P" | "E" | "G" | "C" | "S" | "H" | "A";

export interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    type: ResultCode;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "친구들과 모임에서 나는?",
    answers: [
      { text: "리더 역할을 맡아서 분위기를 주도해요", type: "T" },
      { text: "말재주로 웃기고 분위기 띄워요", type: "S" },
      { text: "편하게 있다가 필요할 때 도와줘요", type: "P" },
    ],
  },
  {
    id: 2,
    question: "데이트 장소를 정할 때?",
    answers: [
      { text: "미리 리스트 만들어두고 꼼꼼히 준비해요", type: "G" },
      { text: "상대방이 결정하면 따라가요", type: "E" },
      { text: "에라 모르겠다, 네가 정해줘", type: "A" },
    ],
  },
  {
    id: 3,
    question: "연인이 고민 상담을 할 때?",
    answers: [
      { text: "어색함 없이 편하게 들어주고 분위기 풀어줘요", type: "C" },
      { text: "대부분 공감하다가 가끔 '에헴' 하며 조언해요", type: "H" },
      { text: "유머 섞어가며 위로하고 해결책도 제시해요", type: "S" },
    ],
  },
  {
    id: 4,
    question: "처음 보는 사람들과의 자리에서?",
    answers: [
      { text: "먼저 말 걸고 분위기 띄워요", type: "T" },
      { text: "편안하게 자연스럽게 어울려요", type: "P" },
      { text: "묵묵히 있지만 필요하면 꼼꼼히 챙겨줘요", type: "G" },
    ],
  },
  {
    id: 5,
    question: "연인과 의견이 다를 때?",
    answers: [
      { text: "조심스럽게 공감하며 맞춰줘요", type: "E" },
      { text: "에라 모르겠다, 네가 하자는 대로 할게", type: "A" },
      { text: "대부분 맞춰주다가 가끔 '에헴' 하며 의견 내요", type: "H" },
    ],
  },
  {
    id: 6,
    question: "여행 계획을 세울 때?",
    answers: [
      { text: "톡 쏘며 재밌게 계획하고 리드해요", type: "S" },
      { text: "상대방이 가고 싶은 곳 위주로 맞춰줘요", type: "C" },
      { text: "에라, 네가 정한 데로 다 갈게", type: "A" },
    ],
  },
  {
    id: 7,
    question: "연인이 화났을 때 나는?",
    answers: [
      { text: "적극적으로 대화하며 해결하려 해요", type: "T" },
      { text: "묵묵히 옆에 있다가 차분히 풀어줘요", type: "G" },
      { text: "조용히 눈치 보며 기다려요", type: "E" },
    ],
  },
  {
    id: 8,
    question: "SNS에 커플 사진을 올릴 때?",
    answers: [
      { text: "가끔 좋은 사진만 골라서 올려요", type: "P" },
      { text: "대부분 맞춰주다가 가끔 내 스타일로 올려요", type: "H" },
      { text: "상대방이 올리자면 사르르 맞춰줘요", type: "C" },
    ],
  },
  {
    id: 9,
    question: "데이트 중 계획에 차질이 생기면?",
    answers: [
      { text: "유머로 분위기 전환하고 플랜B 제시해요", type: "S" },
      { text: "에라 모르겠다, 네가 하자는 대로 할게", type: "A" },
      { text: "바로 플랜B를 제시하고 주도해요", type: "T" },
    ],
  },
  {
    id: 10,
    question: "기념일 이벤트를 준비할 때?",
    answers: [
      { text: "꼼꼼히 리스트 짜고 성실하게 준비해요", type: "G" },
      { text: "다 맞춰주다가 가끔 '에헴' 하며 서프라이즈해요", type: "H" },
      { text: "소박하지만 진심 담긴 선물", type: "P" },
    ],
  },
  {
    id: 11,
    question: "친구가 내 연인을 처음 만날 때?",
    answers: [
      { text: "어색함 없이 분위기 풀어주고 녹여줘요", type: "C" },
      { text: "조용히 옆에서 눈치 보며 조심스러워요", type: "E" },
      { text: "유머로 소개하고 분위기 메이커 역할", type: "S" },
    ],
  },
  {
    id: 12,
    question: "연애에서 나의 스타일은?",
    answers: [
      { text: "주도적이고 이끌어가는 스타일", type: "T" },
      { text: "편안하고 든든한 스타일", type: "P" },
      { text: "조용하지만 따뜻한 스타일", type: "E" },
    ],
  },
];
