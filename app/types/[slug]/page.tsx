import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { results, SLUG_TO_KEY } from "@/data/results";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tetolab.com";

const TYPE_SLUGS = ["teto", "potato", "egen", "sweet_potato", "cheese", "salsa", "ehem", "era"] as const;
type TypeSlug = (typeof TYPE_SLUGS)[number];

const SLUG_INFO: Record<TypeSlug, { name: string; emoji: string; gender: string }> = {
  teto:         { name: "테토남",   emoji: "🚜", gender: "남" },
  potato:       { name: "포테토남", emoji: "🧸", gender: "남" },
  egen:         { name: "에겐남",   emoji: "💌", gender: "남" },
  sweet_potato: { name: "고구마남", emoji: "🍠", gender: "남" },
  cheese:       { name: "치즈남",   emoji: "🧀", gender: "남" },
  salsa:        { name: "살사남",   emoji: "🌶️", gender: "남" },
  ehem:         { name: "에헴남",   emoji: "⚖️", gender: "남" },
  era:          { name: "에라남",   emoji: "🌊", gender: "남" },
};

/** 각 유형별 추가 가이드 콘텐츠 */
const GUIDE_CONTENT: Record<TypeSlug, {
  summary: string;
  datingTips: string[];
  communicationStyle: string;
  conflictStyle: string;
  idealDate: string;
}> = {
  teto: {
    summary:
      "테토남은 테토-에스트로 유형 중 가장 직선적인 소통 방식을 가진 유형입니다. 감정을 숨기지 않고 먼저 표현하며, 연인에게 '우리 함께하고 있어'라는 확신을 지속적으로 전달하려 합니다. 밀당이나 눈치 게임을 싫어하며, 솔직한 대화와 행동으로 관계를 이끌어 갑니다. 추진력이 강하고 목표 지향적인 만큼, 연인에게도 명확한 방향성을 제시하는 경향이 있습니다.",
    datingTips: [
      "테토남에게는 '좋아'와 '싫어'를 명확히 표현해 주세요. 모호한 태도는 그를 혼란스럽게 합니다.",
      "그의 리드를 존중하되, 내 의견도 솔직하게 말하면 오히려 더 좋아합니다.",
      "연락 주기나 만남 빈도에 대해 초반에 서로 맞춰 두면 불필요한 오해를 줄일 수 있습니다.",
      "칭찬보다는 진심 어린 인정이 효과적입니다. '오늘 덕분에 정말 즐거웠어'처럼요.",
    ],
    communicationStyle:
      "직접적이고 결론부터 말하는 스타일입니다. 말의 앞뒤를 길게 늘어놓기보다는 핵심을 먼저 전달하고 세부 사항을 덧붙입니다. 상대방도 같은 방식으로 소통해 주길 기대하며, 빙빙 돌려 말하는 대화 방식에 답답함을 느낄 수 있습니다.",
    conflictStyle:
      "갈등이 생기면 즉시 해결하려는 경향이 있습니다. 쌓아두거나 피하기보다는 바로 꺼내고 해결하는 것을 선호합니다. 단, 감정보다는 '사실'과 '해결책'에 집중하기 때문에 상대방이 감정적인 위로를 원할 때 는 공감 능력이 부족하게 느껴질 수 있습니다.",
    idealDate:
      "계획된 데이트를 좋아합니다. 맛집 탐방, 드라이브, 야외 액티비티처럼 목적이 분명한 활동을 선호하며, 연인과 함께 새로운 경험을 공유하는 것에서 큰 만족감을 얻습니다.",
  },
  potato: {
    summary:
      "포테토남은 군고구마처럼 은근하게 따뜻한 사람입니다. 화려한 이벤트보다는 일상 속 작은 배려로 사랑을 표현하며, 상대방의 사소한 취향까지 기억해 챙겨줍니다. '동반자적 사랑'을 지향하는 유형으로, 연인과의 안정적이고 평화로운 일상을 가장 소중하게 여깁니다. 자극적인 연애보다는 깊이 있는 신뢰 관계를 선호합니다.",
    datingTips: [
      "포테토남의 배려를 당연하게 여기지 마세요. 감사 표현을 자주 해주면 더욱 헌신합니다.",
      "갈등 상황에서는 직접적으로 '어떻게 생각해?'라고 먼저 물어봐 주세요. 혼자 삭이는 경향이 있습니다.",
      "일상적인 연락과 공유를 중요하게 생각하므로, 오늘 하루 어땠는지 자주 이야기를 나눠보세요.",
      "대형 이벤트보다 소소하지만 꾸준한 관심이 그를 감동시킵니다.",
    ],
    communicationStyle:
      "따뜻하고 수용적인 소통 방식을 가집니다. 상대의 말을 끊지 않고 끝까지 듣는 스타일이며, 판단보다는 공감을 먼저 표현합니다. 부정적인 감정을 직접 드러내기보다는 간접적으로 표현하거나 혼자 해결하려는 경향이 있어, 오랜 기간 스트레스가 쌓일 수 있습니다.",
    conflictStyle:
      "가능한 한 갈등을 피하려 하지만, 임계점을 넘으면 폭발하듯 표현할 수 있습니다. 평소에 감정을 잘 억누르기 때문에, 연인이 적극적으로 마음을 물어봐 주는 것이 중요합니다.",
    idealDate:
      "집에서 함께 요리하거나 영화 보기, 편안한 카페에서 오래 이야기하기 등 조용하고 안락한 데이트를 선호합니다. 북적거리는 장소보다는 둘만의 공간에서 시간을 보내는 것을 좋아합니다.",
  },
  egen: {
    summary:
      "에겐남은 감성과 예술적 취향을 갖춘 로맨티스트입니다. 연인과의 교감을 무엇보다 소중히 여기며, 평범한 일상을 특별하게 만드는 감수성을 지니고 있습니다. 눈빛, 손편지, 음악 플레이리스트 같은 세심한 방식으로 사랑을 표현하고, 상대방의 감정 변화를 예민하게 알아챕니다. 깊은 대화와 정서적 연결을 연애의 핵심으로 생각합니다.",
    datingTips: [
      "에겐남에게는 '나를 잘 이해해줘서 좋아'처럼 감정적 연결을 인정하는 말이 가장 큰 선물입니다.",
      "그의 취미나 관심사에 진심으로 호기심을 보여주세요. 함께 음악이나 전시를 즐기면 더 가까워집니다.",
      "가끔 혼자만의 시간이 필요하다고 해도 걱정하지 마세요. 내향적 충전이 필요한 타입입니다.",
      "현실적인 계획보다 감성적인 소통이 먼저입니다. 문제 해결보다 공감을 먼저 표현해 주세요.",
    ],
    communicationStyle:
      "은유와 감성적 표현을 즐겨 사용합니다. 논리적인 대화보다는 감정의 흐름을 따라가는 대화를 선호하며, 상대방의 이야기를 깊이 있게 들어줍니다. 직접적인 비판보다는 완곡하게 의견을 전달합니다.",
    conflictStyle:
      "갈등 상황에서는 즉각 반응하기보다 속으로 많은 생각을 합니다. 충분한 감정 정리 시간이 필요하며, 그 뒤에 차분하게 대화하는 것을 선호합니다. 상대방이 먼저 분위기를 풀어주면 더 빠르게 화해합니다.",
    idealDate:
      "미술관, 영화제, 감성 카페, 야경 드라이브 등 분위기 있는 데이트를 좋아합니다. 특별한 날보다 평범한 날에 갑자기 작은 이벤트를 받으면 가장 크게 감동합니다.",
  },
  sweet_potato: {
    summary:
      "고구마남은 말보다 행동으로 사랑을 증명하는 유형입니다. 초반에는 감정 표현이 서툴어 보일 수 있지만, 시간이 지날수록 진가를 발휘합니다. 연인의 부탁을 잊지 않고, 약속은 반드시 지키며, 묵묵히 곁에 있어주는 든든한 사람입니다. '안정 애착' 성향이 강해 장기적인 관계에서 가장 빛을 발하는 유형입니다.",
    datingTips: [
      "고구마남은 초반에 표현이 적어도 마음이 없는 게 아닙니다. 기다려 주세요.",
      "'오늘 덕분에 따뜻했어'처럼 그의 행동이 나에게 미친 영향을 구체적으로 말해주면 더 잘 챙겨줍니다.",
      "갑작스러운 변화보다 꾸준하고 예측 가능한 관계를 좋아하므로, 안정적인 루틴을 함께 만들어 보세요.",
      "감정을 억누르지 않도록, '힘든 거 있으면 말해줘도 돼'라는 말을 자주 건네주세요.",
    ],
    communicationStyle:
      "간결하고 진지합니다. 불필요한 잡담보다는 의미 있는 대화를 선호하며, 한번 말한 것은 반드시 행동으로 옮깁니다. 거짓말이나 허세를 싫어하고 진솔한 소통을 중요하게 생각합니다.",
    conflictStyle:
      "갈등이 생기면 바로 표현하기보다는 혼자 정리하는 시간을 갖습니다. 상황이 정리되면 조용히 사과하거나 행동으로 표현하는 경우가 많습니다. 긴 말싸움보다는 빠른 해결을 선호합니다.",
    idealDate:
      "산책, 맛집 탐방, 집에서 함께 영화 보기 등 소박하지만 알찬 데이트를 좋아합니다. 화려한 이벤트보다 진심이 담긴 작은 준비가 더 감동적입니다.",
  },
  cheese: {
    summary:
      "치즈남은 어떤 자리에서도 분위기를 부드럽게 만드는 사교가입니다. 유머 감각과 매너를 겸비해 처음 만난 사람도 금방 편안하게 만들며, 연인에게는 항상 존중받는다는 느낌을 줍니다. 녹아내린 치즈처럼 유연하게 상황에 적응하는 능력이 뛰어나고, 갈등을 미연에 방지하는 '사회적 조망 수용' 능력이 탁월합니다.",
    datingTips: [
      "치즈남의 친근함은 모두에게 향하는 본능입니다. 질투하기보다는 그 매력을 즐겨주세요.",
      "그가 먼저 진지한 주제를 꺼내기를 기다리기보다, 내가 먼저 깊은 이야기를 꺼내보세요.",
      "작은 칭찬과 긍정적인 반응에 크게 힘을 얻는 타입입니다. 아낌없이 표현해 주세요.",
      "그가 모두에게 친절하다는 점에 안심하되, 당신에게만 보내는 특별한 신호를 놓치지 마세요.",
    ],
    communicationStyle:
      "위트 있고 자연스럽습니다. 무거운 주제도 유머로 분위기를 풀며 접근하고, 상대방을 불편하게 만드는 상황을 빠르게 감지해 분위기를 전환합니다. 칭찬과 긍정적인 표현을 자주 사용합니다.",
    conflictStyle:
      "갈등을 최대한 부드럽게 해결하려 합니다. 직접적인 충돌을 피하고 유머나 화제 전환으로 긴장을 완화하는 편입니다. 단, 이 방식이 문제를 근본적으로 해결하지 못할 수 있어 나중에 같은 갈등이 반복될 수 있습니다.",
    idealDate:
      "새로운 음식, 독특한 테마 카페, 사람들이 모이는 활기찬 공간을 좋아합니다. 함께 웃을 수 있는 경험을 공유하는 데이트라면 언제나 즐겁게 임합니다.",
  },
  salsa: {
    summary:
      "살사남은 연애의 온도를 항상 뜨겁게 유지하는 열정파입니다. 매일이 기념일인 것처럼 화려하게 표현하고, 스킨십과 언어적 표현 모두 아낌없이 사용합니다. '열정적 사랑(Passionate Love)'에 가장 가까운 유형으로, 연인의 일상에 비타민 같은 에너지를 불어넣습니다. 다만 자신의 텐션을 상대방도 같이 따라와 주길 기대하는 경향이 있습니다.",
    datingTips: [
      "살사남의 에너지에 부담 갖지 말고, '오늘도 활기차다'며 긍정적으로 받아주세요.",
      "그도 가끔은 쉬고 싶어 합니다. '오늘은 조용히 있어도 돼'라고 먼저 말해주면 의외로 감동합니다.",
      "이벤트나 깜짝 선물에 리액션을 크게 해주세요. 반응이 좋을수록 더 즐겁게 챙겨줍니다.",
      "연락 빈도가 높은 편이므로, 연락 패턴에 대한 초기 합의가 중요합니다.",
    ],
    communicationStyle:
      "즉흥적이고 에너지가 넘칩니다. 생각하는 것을 바로 말하고 감정을 과감하게 표현합니다. 지루한 대화를 싫어하고 새로운 자극과 반응이 있는 소통을 즐깁니다. 칭찬과 긍정적 반응을 큰 리액션으로 표현합니다.",
    conflictStyle:
      "갈등이 생기면 즉각적으로 반응하는 경향이 있습니다. 감정이 격해질 수 있지만 뒤끝은 없는 편입니다. 화가 나도 금방 풀리고, 화해도 빠르게 이루어집니다. 상대방이 감정을 쌓아두는 스타일이면 서로 피로해질 수 있습니다.",
    idealDate:
      "콘서트, 놀이공원, 스포츠 관람, 신나는 야외 활동 등 에너지를 발산할 수 있는 데이트를 좋아합니다. 자극적이고 새로운 경험을 함께하는 것에서 가장 큰 즐거움을 느낍니다.",
  },
  ehem: {
    summary:
      "에헴남은 말보다 행동, 감성보다 책임감으로 사랑을 표현하는 원칙주의자입니다. 한번 약속한 것은 반드시 지키며, 연인을 자신의 삶 계획 안에 진지하게 포함시킵니다. 처음에는 다소 딱딱하게 느껴질 수 있지만, 신뢰가 쌓일수록 그 가치가 기하급수적으로 커지는 유형입니다. 장기적인 파트너십에 가장 최적화된 성향입니다.",
    datingTips: [
      "에헴남에게는 약속을 잘 지키는 모습이 가장 중요한 신뢰 지표입니다. 작은 약속부터 성실히 지켜주세요.",
      "그의 원칙을 존중해 주세요. 이유 없이 규칙을 어기거나 계획을 자주 바꾸면 신뢰가 흔들립니다.",
      "감성적인 표현이 서툴더라도 그의 행동에 담긴 마음을 읽어주세요. '이렇게까지 챙겨줘서 고마워'가 효과적입니다.",
      "미래에 대한 진지한 대화를 좋아합니다. 함께 계획을 세우는 것 자체가 그에게는 로맨스입니다.",
    ],
    communicationStyle:
      "신중하고 논리적입니다. 결론을 내리기 전에 충분히 생각하고 말하며, 감정적인 표현보다는 사실에 근거한 소통을 선호합니다. 말수가 많지 않지만 한마디 한마디에 무게가 있습니다.",
    conflictStyle:
      "갈등이 생기면 즉각 반응하기보다 분석하고 정리하는 시간을 갖습니다. 감정보다는 논리로 해결하려 하기 때문에, 상대방이 감정적 위로를 원할 때는 어색해할 수 있습니다. 한번 결론을 내리면 잘 번복하지 않습니다.",
    idealDate:
      "사전에 충분히 계획된 데이트를 선호합니다. 예약이 필요한 레스토랑, 전시회, 박물관처럼 의미 있는 경험을 제공하는 장소를 좋아합니다. 즉흥적인 일정 변경을 어려워할 수 있습니다.",
  },
  era: {
    summary:
      "에라남은 자유롭고 독립적인 영혼의 소유자입니다. 구속이나 집착 없이 서로를 존중하는 관계를 지향하며, 함께하되 각자의 공간을 유지하는 연애를 선호합니다. 즉흥적인 여행, 새로운 경험, 예측 불가능한 설렘을 즐기며 연인에게도 매일 새로운 자극을 줍니다. 신뢰가 전제될 때 가장 깊은 헌신을 보여주는 유형입니다.",
    datingTips: [
      "에라남에게 집착하거나 지나친 간섭은 역효과입니다. 신뢰를 보여주는 것이 가장 효과적입니다.",
      "즉흥적인 제안에 '좋아!'라고 바로 응해줄 때 가장 신나합니다. 가끔은 그의 흐름에 맡겨보세요.",
      "그가 혼자 시간을 갖고 싶어 할 때 여유 있게 기다려 주세요. 금방 돌아옵니다.",
      "진지한 미래 계획에 대해서는 천천히, 부담 없이 이야기를 꺼내는 것이 좋습니다.",
    ],
    communicationStyle:
      "가볍고 유쾌합니다. 무거운 주제는 가능한 한 피하거나 나중으로 미루는 경향이 있습니다. 솔직하게 하고 싶은 말은 하지만 감정적으로 얽히는 것은 불편해합니다. 쿨하고 담담한 소통 방식을 선호합니다.",
    conflictStyle:
      "갈등이 생기면 그 자리에서 해결하기보다는 잠시 거리를 두고 혼자 생각하는 시간을 갖습니다. 쿨하게 보이지만 속으로는 많은 생각을 합니다. 뒤끝이 없는 편이어서 화해도 자연스럽게 이루어집니다.",
    idealDate:
      "즉흥적인 드라이브, 작은 여행, 새로운 동네 탐험 등 예측 불가능한 즐거움이 있는 데이트를 선호합니다. 계획보다는 그 순간의 분위기와 선택을 중요하게 여깁니다.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TYPE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!TYPE_SLUGS.includes(slug as TypeSlug)) return {};

  const key = SLUG_TO_KEY[slug];
  const result = key ? results[key] : null;
  if (!result) return {};

  const info = SLUG_INFO[slug as TypeSlug];
  const title = `${info.emoji} ${info.name} 유형 완벽 가이드 | 테토 연구소`;
  const description = `${info.name} 유형의 연애 특징, 소통 방식, 궁합, 데이트 팁까지 완벽 정리. ${result.tagline}`;

  return {
    title,
    description,
    keywords: [...(result.keywords ?? []), `${info.name} 특징`, `${info.name} 궁합`, "테토 유형", "연애 유형 가이드"].join(", "),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/types/${slug}`,
      siteName: "테토 연구소",
      type: "article",
    },
    alternates: {
      canonical: `${BASE_URL}/types/${slug}`,
    },
  };
}

export default async function TypeGuidePage({ params }: PageProps) {
  const { slug } = await params;

  if (!TYPE_SLUGS.includes(slug as TypeSlug)) notFound();

  const key = SLUG_TO_KEY[slug];
  const result = key ? results[key] : null;
  if (!result) notFound();

  const guide = GUIDE_CONTENT[slug as TypeSlug];
  const info = SLUG_INFO[slug as TypeSlug];
  const otherSlugs = TYPE_SLUGS.filter((s) => s !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${info.name} 유형 완벽 가이드`,
    description: `${info.name} 유형의 연애 특징, 소통 방식, 궁합, 데이트 팁까지 완벽 정리.`,
    url: `${BASE_URL}/types/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "테토 연구소",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/types/${slug}`,
    },
    keywords: result.keywords?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* 헤더 */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-brand-muted mb-3">
            <Link href="/" className="hover:underline">홈</Link>
            <span>›</span>
            <Link href="/types" className="hover:underline">유형 가이드</Link>
            <span>›</span>
            <span>{info.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden>{info.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-1">유형 가이드</p>
              <h1 className="text-2xl font-black text-brand-charcoal">{info.name}</h1>
              <p className="text-sm text-brand-muted font-medium mt-1">{result.title}</p>
            </div>
          </div>
          <p className="text-sm text-brand-charcoal italic leading-relaxed border-l-4 border-brand-accent/30 pl-4 py-1 bg-brand-highlight rounded-r-lg">
            &ldquo;{result.tagline}&rdquo;
          </p>
        </header>

        {/* 키워드 태그 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {result.keywords?.map((kw) => (
            <span key={kw} className="text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full border border-pink-100">
              #{kw}
            </span>
          ))}
        </div>

        {/* 유형 요약 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">유형 핵심 요약</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{guide.summary}</p>
        </section>

        {/* 연애 스타일 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">연애 스타일</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{result.loveDescription}</p>
        </section>

        {/* 장단점 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">장점과 단점</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <p className="text-xs font-bold text-green-600 mb-2">강점</p>
              <p className="text-sm text-brand-charcoal leading-relaxed">{result.checkGood}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-xs font-bold text-orange-600 mb-2">주의할 점</p>
              <p className="text-sm text-brand-charcoal leading-relaxed">{result.checkBad}</p>
            </div>
          </div>
        </section>

        {/* 소통 방식 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">소통 방식</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{guide.communicationStyle}</p>
        </section>

        {/* 갈등 해결 방식 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">갈등 해결 방식</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{guide.conflictStyle}</p>
        </section>

        {/* 이상적인 데이트 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">이상적인 데이트</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{guide.idealDate}</p>
        </section>

        {/* 데이트 팁 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">{info.name}와 잘 맞는 연애 팁</h2>
          <ul className="space-y-3">
            {guide.datingTips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-sm text-brand-charcoal leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/10 text-brand-accent text-xs flex items-center justify-center font-bold mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* 심리학적 분석 */}
        <section className="mb-8 p-5 bg-brand-highlight rounded-xl border border-brand-border">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">심리학적 분석</h2>
          <p className="text-sm text-brand-charcoal leading-relaxed">{result.psychologicalAnalysis}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100">빅파이브 성격 모델</span>
            <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full border border-purple-100">애착 이론</span>
          </div>
        </section>

        {/* 잘 맞는 유형 */}
        <section className="mb-8">
          <h2 className="text-lg font-black text-brand-charcoal mb-3">궁합이 좋은 유형</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {result.goodMatch?.map((m) => (
              <span key={m} className="text-sm bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full border border-pink-100 font-medium">
                {m}
              </span>
            ))}
          </div>
          <p className="text-xs text-brand-muted mt-2">
            주의: 유형은 참고용이며 실제 관계는 소통과 노력으로 결정됩니다.
          </p>
        </section>

        {/* CTA */}
        <div className="mb-10 p-5 bg-brand-charcoal rounded-xl text-center">
          <p className="text-sm text-white/80 mb-1">나는 어떤 유형일까요?</p>
          <p className="text-base font-black text-white mb-4">15가지 연애 상황으로 알아보는 나의 성향</p>
          <Link
            href="/gender-select"
            className="inline-block bg-brand-accent text-white text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition"
          >
            지금 무료로 테스트하기
          </Link>
        </div>

        {/* 다른 유형 내비게이션 */}
        <nav>
          <h2 className="text-base font-black text-brand-charcoal mb-3">다른 유형 살펴보기</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {otherSlugs.map((s) => {
              const si = SLUG_INFO[s];
              return (
                <Link
                  key={s}
                  href={`/types/${s}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-brand-border hover:border-brand-accent/40 hover:bg-brand-highlight transition-all text-sm"
                >
                  <span className="text-lg">{si.emoji}</span>
                  <span className="text-brand-charcoal font-medium text-xs">{si.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </article>
    </>
  );
}
