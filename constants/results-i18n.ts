/**
 * Internationalized result data for all 16 types (8 male + 8 female)
 * Locales: en, ja, zh
 * Structure: locale -> slug -> ResultI18n
 */

export type ResultI18n = {
  type: string;
  title: string;
  tagline: string;
  oneLiner: string;
  keywords: string[];
  loveDescription: string;
  checkGood: string;
  checkBad: string;
  psychologicalAnalysis: string;
};

export type ResultsI18nMap = Record<string, Record<string, ResultI18n>>;

export const RESULTS_I18N: ResultsI18nMap = {
  // ─────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────
  en: {
    /* ── Male Types ── */
    teto: {
      type: "Teto Boy",
      title: "The Unstoppable Straight-Shooter",
      tagline:
        "Playing hard to get is a waste of time — my heart has already arrived at you.",
      oneLiner:
        "A born leader who gives unwavering reassurance through fearless drive and crystal-clear honesty.",
      keywords: [
        "ConfidenceMaker",
        "NoHesitationRomance",
        "TakesTheWheel",
        "100%Transparent",
      ],
      loveDescription:
        "When a Teto Boy falls in love, there is no mental calculator running in the background. The word 'playing hard to get' simply does not exist in your love dictionary. You reach out first before your partner even has a chance to wonder where they stand, and every moment you gift them the reassurance that says, 'This is exactly how much I love you.' Your leadership provides a deep sense of emotional security — with you, your partner feels safe no matter where life takes them. As someone whose greatest weapon is honesty, you naturally expect the same transparent communication in return.",
      checkGood:
        "Refreshingly open expressions of affection. When conflict arises, you face it head-on and resolve it immediately instead of avoiding it.",
      checkBad:
        "Your pace can be so fast that your partner may feel emotionally overwhelmed, making you seem overbearing at times.",
      psychologicalAnalysis:
        "Psychologically, the Teto Boy type represents the peak combination of 'Extraversion' and the 'Judging' preference. Rather than tolerating ambiguity in relationships, they prefer clear, goal-oriented communication. Their achievement motivation spills into romance — making their partner happy becomes a 'mission' they tackle with purpose and pride. This confident communication style acts as a powerful force that eliminates unnecessary anxiety that can arise in the early stages of a relationship.",
    },
    potato: {
      type: "Potato Boy",
      title: "The Peaceful Human Sanctuary",
      tagline:
        "At the end of your hardest day, a broad shoulder offered without a single word.",
      oneLiner:
        "A 'human blanket' who wraps their partner in unwavering consistency and deep embrace.",
      keywords: [
        "HumanComma",
        "EmotionalGuardian",
        "QuietlyGenuine",
        "EmpathyMaster",
      ],
      loveDescription:
        "The Potato Boy's love is less like dazzling fireworks and more like a warm heated floor that radiates gentle warmth all night long. You have an uncanny ability to read your partner's condition from the subtlest shift in their gaze or the slightest change in tone, and you silently offer a warm cup of tea. Dating you brings the calm happiness of serotonin rather than the rush of dopamine. You may not be flashy, but your value shines brighter with each passing day — you provide a deep sense of trust and the feeling that 'life beside this person will always be safe.'",
      checkGood:
        "Perfectly respects your partner's preferences and routines. Your steady emotional state keeps your partner consistently at ease.",
      checkBad:
        "You tend to suppress your own hurt while accommodating your partner's feelings, risking an eventual emotional collapse.",
      psychologicalAnalysis:
        "This type scores extremely high in psychological 'Agreeableness' and 'Emotional Support.' According to Sternberg's Triangular Theory of Love, they are best suited for 'companionate love' — the combination of intimacy and commitment. In conflict situations, they prioritize 'our peace' over 'being right,' giving them an unmatched capacity for long-term relationship maintenance.",
    },
    egen: {
      type: "Egen Boy",
      title: "The Sentimental Romanticist",
      tagline:
        "Turning our ordinary daily life into a scene from a movie.",
      oneLiner:
        "A love devotee who dreams of soulful connection through deep empathy and delicate sensitivity.",
      keywords: [
        "Soulmate",
        "ArtisticSensibility",
        "DelicateCare",
        "Daydreamer",
      ],
      loveDescription:
        "For you, dating is not merely sharing time — it is sharing the resonance of souls. When you encounter a beautiful landscape or a moving piece of music, the very first person who comes to mind is your partner. You pour the deep emotions that words alone cannot capture into your gaze and into small acts of care. Your sensitivity makes your partner feel not just 'loved' but truly 'understood' — a rare and profound sense of fulfillment.",
      checkGood:
        "A healing wizard who reads your partner's emotional wavelength with remarkable precision.",
      checkBad:
        "Can get so lost in your own thoughts that practical, everyday matters occasionally get neglected.",
      psychologicalAnalysis:
        "The Egen Boy type shows highly developed 'Openness to Experience' and 'Intuition.' Psychologically, they seek emotional homogeneity in relationships and possess a remarkable ability to assign meaning to even the smallest events, weaving a narrative arc throughout the relationship. This becomes a vital source of creative energy that keeps the relationship alive.",
    },
    sweet_potato: {
      type: "Goguma Boy",
      title: "The Steadfast Sincerity Champion",
      tagline:
        "Love that heats up slowly but never, ever cools down — like a roasted sweet potato.",
      oneLiner:
        "A solid sanctuary who builds trust through weighty sincerity and unwavering dedication.",
      keywords: [
        "QuietAffection",
        "ActionRomanticist",
        "100%Reliability",
        "FamilyOriented",
      ],
      loveDescription:
        "You may not have flashy eloquence or be skilled at the push-and-pull game, but your sincerity is always proven through solid action. A promise made is a promise kept, and you are always there when your partner needs you — the safest fence in the world. You may seem slow at times, but your love gains depth and sweetness with every passing day, making you the most genuine partner one could ask for.",
      checkGood:
        "Remembers your partner's small preferences and thoughtfully acts on them later.",
      checkBad:
        "Can be so cautious that expressions of emotion sometimes feel delayed.",
      psychologicalAnalysis:
        "This type shows very strong 'Conscientiousness' and 'Secure Attachment' traits. Psychologically, they focus on building 'trust capital' that sustains the relationship, which results in providing their partner with the most powerful psychological Secure Base.",
    },
    cheese: {
      type: "Cheese Boy",
      title: "The Flexible Empathy Master",
      tagline:
        "Look past the smooth charm — there is a deep well of consideration underneath.",
      oneLiner:
        "A romantic socialite who sets the mood with silky manners and a sharp sense of humor.",
      keywords: [
        "MoodMaker",
        "SweetManners",
        "EmpathyExpert",
        "SmoothlySweet",
      ],
      loveDescription:
        "Like melted cheese, you have a talent for dissolving tension in a relationship with your smooth, flexible attitude. You can flip an awkward atmosphere with your wit, quickly read your partner's emotions, and respond with just the right reaction — earning you the title of relationship master. With you, boredom is impossible, and your partner always feels respected, boosting their self-esteem. You are the ultimate partner who makes your significant other feel truly valued.",
      checkGood:
        "High social intelligence that allows you to navigate any situation with grace and flexibility.",
      checkBad:
        "Your friendliness toward everyone may trigger jealousy in your partner.",
      psychologicalAnalysis:
        "The Cheese Boy type has peak 'Social Intelligence (SQ)' and 'empathic consideration.' They are strategic communicators who preemptively identify others' needs to prevent conflict, and they create a positive feedback loop of relationship energy through constructive self-affirmation.",
    },
    salsa: {
      type: "Salsa Boy",
      title: "The Passionate Energizer",
      tagline:
        "Every moment is a festival — loving you with blazing passion.",
      oneLiner:
        "A passion powerhouse who sparks fireworks of love every single day with overflowing energy and bold expression.",
      keywords: [
        "BoldExpression",
        "HumanVitamin",
        "ActiveAffection",
        "StraightShooter",
      ],
      loveDescription:
        "A stale relationship is simply not an option for you. You express yourself as passionately as if every day were an anniversary, pouring 200% of your energy into every activity with your partner. Your enthusiastic expressions and tireless vitality paint your partner's daily life in vivid colors. Being with you feels like magic — suddenly everything in the world seems more fun and more alive.",
      checkGood:
        "Tireless reactions and expressions that keep your partner endlessly happy.",
      checkBad:
        "Your energy level can run so high that your partner may occasionally feel fatigued.",
      psychologicalAnalysis:
        "The Salsa Boy type has strong 'Extraversion' and 'sensation-seeking' temperament. Psychologically, they have a powerful instinct to maintain the energy of the 'passionate love' phase throughout the entire relationship, serving as the engine that keeps the relationship alive. This acts as a potent vaccine against relationship fatigue.",
    },
    ehem: {
      type: "Ehem Boy",
      title: "The Dignified Principled Man",
      tagline:
        "With a gravity that is never lightweight, I guard the trust I built for you.",
      oneLiner:
        "A dependable strategist who cultivates love through actions over words, grounded in responsibility and principle.",
      keywords: [
        "ModelCitizen",
        "HighResponsibility",
        "StableFuture",
        "GrufflySweet",
      ],
      loveDescription:
        "You pursue a relationship with 100% credibility — every word you speak is a word you keep. You may lack flowery rhetoric, but in your life plan there is always a firm, unmovable seat reserved for your partner. Your composure in a crisis, your refusal to waver — these qualities become an irreplaceable source of strength for your partner as time goes on.",
      checkGood:
        "Unshakable in a crisis; presents solutions with steady dependability.",
      checkBad:
        "Your strong personal standards can sometimes come across as stubbornness.",
      psychologicalAnalysis:
        "This type builds relationships on the basis of 'moral responsibility' and 'logical analysis.' They perceive romance as a mutual promise that goes beyond mere emotional exchange, and demonstrate the gold standard of 'long-term partnership' through responsible commitment.",
    },
    era: {
      type: "Era Boy",
      title: "The Cool Free Spirit",
      tagline:
        "Within unbound freedom lies an even deeper love.",
      oneLiner:
        "A free soul who chooses spontaneous joy over rigid plans and respect over possessiveness.",
      keywords: [
        "YOLORomance",
        "CoolDating",
        "ZeroGrudges",
        "EventMachine",
      ],
      loveDescription:
        "You prefer spontaneous fun over dates locked into a fixed plan. Rather than clinging, you champion a cool relationship where you cheer each other's personal time and growth. You dislike unnecessary emotional drama and focus on enjoying the present moment. Your attitude gives your partner a refreshing sense of freedom and autonomy, building a healthier, more independent relationship.",
      checkGood:
        "Minimal unnecessary emotional drain; fully focused on enjoying each moment.",
      checkBad:
        "Can come across as evasive when it comes to serious future planning.",
      psychologicalAnalysis:
        "The Era Boy type has an extremely high need for 'Autonomy,' which paradoxically means they show greater commitment when their personal space is respected within a relationship. They use trust-based freedom as their romantic fuel, forming the kind of cool, modern relationship that fits contemporary dating trends.",
    },

    /* ── Female Types ── */
    teto_f: {
      type: "Teto Girl",
      title: "The Charismatic Confidence Leader",
      tagline:
        "I set our relationship's course — you just enjoy the ride!",
      oneLiner:
        "A refreshingly decisive leader who takes the reins and steers the relationship with confidence.",
      keywords: ["PerfectPlanner", "CoolNoGrudges", "UltimateSupportor"],
      loveDescription:
        "You take the lead in dating with refreshing decisiveness — a true savior for partners who struggle with choices. From planning the perfect date course to booking the best restaurants, you design everything flawlessly. With a no-nonsense personality that says what needs to be said without lingering resentment, you resolve conflicts quickly. Your drive injects vitality into the relationship and becomes a powerful charm that makes your partner trust and follow you.",
      checkGood:
        "From date itineraries to restaurant reservations — everything is perfectly planned. A cool personality that speaks directly and holds no grudges.",
      checkBad:
        "Leading too strongly may make your partner feel passive in the relationship.",
      psychologicalAnalysis:
        "The Teto Girl type scores very high in 'self-efficacy' and 'initiative.' They actively design their love life and project their energy into their partner's growth and happiness — a leadership-style romanticist.",
    },
    potato_f: {
      type: "Potato Girl",
      title: "The Cozy Human Sanctuary",
      tagline:
        "At the end of a tiring day, I will be the warmest embrace you can rest in.",
      oneLiner:
        "A healing presence whose stable, affectionate nature provides comfort just by being near.",
      keywords: ["HumanVitamin", "Guardian", "EverydayHappiness"],
      loveDescription:
        "With a stable and affectionate personality, you are a healing presence just by being nearby. You have an almost supernatural ability to detect the subtlest shifts in your partner's mood and wrap them in warmth. You treasure the small joys of everyday life over flashy events. You may sometimes hide your own hurt while caring for your partner, but that only shows the depth of your love and devotion as a true guardian.",
      checkGood:
        "Supernaturally detects even the tiniest shifts in your partner's mood. Values small everyday joys over grand events.",
      checkBad:
        "Often hides your own hurt while prioritizing your partner's feelings.",
      psychologicalAnalysis:
        "This type has peak 'emotional empathy,' psychologically serving as the most powerful 'emotional safe base' for their partner. Relationship harmony is their highest priority.",
    },
    egen_f: {
      type: "Egen Girl",
      title: "The Delicate Emotional Muse",
      tagline:
        "If our love were a movie, I would pour my heart into every single scene.",
      oneLiner:
        "A romanticist blessed with rich imagination and deep sensibility who values emotional connection above all.",
      keywords: ["EmotionalMuse", "Romanticist", "AnalogSoul"],
      loveDescription:
        "A romanticist with rich imagination and deep sensitivity, you value emotional connection above all else. You express love through analog gestures like handwritten letters and handmade gifts. Your delicacy makes your partner feel 'loved' on a profound level, and you have a gift for transforming ordinary daily moments into scenes as beautiful as poetry.",
      checkGood:
        "Prefers analog expressions of love — handwritten letters, handmade gifts. Values emotional connection above everything.",
      checkBad:
        "A single word can cause soaring joy or deep hurt. Occasionally catches your partner off guard with imaginative 'what if' questions.",
      psychologicalAnalysis:
        "The Egen Girl type has well-developed 'Openness' and 'Intuition,' seeking symbolic meaning and emotional unity in relationships. Their unique sensibility adds profound depth to the bond.",
    },
    sweet_potato_f: {
      type: "Goguma Girl",
      title: "The Steadfast Heart-Sunflower",
      tagline:
        "My words may be clumsy, but my actions hold only you.",
      oneLiner:
        "She may seem a bit blunt on the outside, but inside she is warmer and sturdier than anyone — the 'real deal' girlfriend.",
      keywords: [
        "ClassicTsundere",
        "SincereLove",
        "ActionFirst",
        "ReliablePartner",
      ],
      loveDescription:
        "The Goguma Girl proves her love through actions rather than words. You may blush and stumble at cheesy displays of affection, but when your partner is sick you silently order porridge for delivery, and you jot down their important dates to send encouraging messages right on time. Your love ripens slowly like a roasted sweet potato, but once your heart opens, it maintains a density that never fades. Guarding your partner's side with solid responsibility rather than flowery words, you become irreplaceable as time goes on.",
      checkGood:
        "Fierce loyalty and an unwavering focus on one person. Views love not as mere emotion but as a commitment and promise.",
      checkBad:
        "Takes so long to express feelings outwardly that your partner may wonder, 'Am I the only one in love here?'",
      psychologicalAnalysis:
        "Psychologically, this type exhibits the classic traits of 'Secure Attachment.' They value sustainable trust-building over momentary emotional spending. Among the Big Five personality traits, 'Conscientiousness' is extremely high, which manifests in dating as a planned and devoted attitude. This trait provides tangible evidence to their partner that 'someone is putting in real effort for me,' forming deep emotional bonds.",
    },
    cheese_f: {
      type: "Cheese Girl",
      title: "The Melting Romance Wizard",
      tagline:
        "Zero awkwardness between us — I will fill every moment with sweet memories.",
      oneLiner:
        "A socialite who gracefully navigates every moment of the relationship with outstanding social intelligence and smooth manners.",
      keywords: [
        "MoodMaker",
        "MaxEmpathy",
        "FlexibleComms",
        "ReactionQueen",
      ],
      loveDescription:
        "Dating a Cheese Girl means there is never a dull moment. Like melted cheese, you handle every situation with flexibility, and your signature wit and warmth can melt anyone's mood in an instant. You can befriend your partner's friend group in record time, and you have a sixth sense for knowing what your partner wants without them saying a word. Your relationship always makes your partner feel respected and cherished, and even when conflict arises, your smooth communication ensures it is resolved peacefully without a major fight.",
      checkGood:
        "Exceptional social intelligence and manners — reads your partner's emotional wavelength sharply and delivers the perfect response.",
      checkBad:
        "Being sweet to everyone may trigger subtle feelings of exclusion or jealousy in your partner.",
      psychologicalAnalysis:
        "This type excels in 'Social Perspective Taking.' Their ability to think and feel from another's point of view is highly developed, and they naturally take on the role of relationship lubricant. Built on positive self-affirmation and high self-esteem, they strive to maximize relationship satisfaction, which creates a positive contagion effect on their partner. Their conflict management strategy achieves an excellent balance between 'cooperation' and 'acceptance' — a genuinely healthy personality type.",
    },
    salsa_f: {
      type: "Salsa Girl",
      title: "The Passionate Hot-Girl Energizer",
      tagline:
        "There is no 'half measures' in my life — love goes full power!",
      oneLiner:
        "Overflowing energy and bold self-expression that inject constant vitality into the love front.",
      keywords: ["Energizer", "FullPower", "Surprise"],
      loveDescription:
        "With overflowing energy and bold expression, you inject non-stop vitality into the relationship. Your emotions are crystal clear and fiery, and you cannot stand a boring date — you are always hunting for the next thrill. You love planning surprise events for your partner, and your bright energy has a magical power to blow away your partner's darkest moods in an instant.",
      checkGood:
        "Crystal-clear and fiery emotional expression. Loves planning surprise events for your partner.",
      checkBad:
        "Your full-power energy can feel like a burden for a partner who is already exhausted.",
      psychologicalAnalysis:
        "The Salsa Girl type scores high in 'Vitality' and 'Extraversion.' Their emotional expression is highly transparent, and they are a passionate personality type who confirms the vitality of love through joy and stimulation in the relationship.",
    },
    ehem_f: {
      type: "Ehem Girl",
      title: "The Elegant Principled Woman",
      tagline:
        "Honest love is the best love. Trust is proven through actions, not words.",
      oneLiner:
        "Serious, courteous, and equipped with clear personal standards to build a relationship with integrity.",
      keywords: ["Principled", "HonestLove", "Tsundere"],
      loveDescription:
        "Serious and courteous, you build your relationships with clear personal standards. You are strict about keeping time and prefer a partner with whom you can plan a sincere future over a casual fling. Although you may appear somewhat stern on the surface, you are utterly devoted to your inner circle — a tsundere charm at its finest. Your upright character earns your partner's boundless trust.",
      checkGood:
        "Hates rude behavior above all else; is meticulous about punctuality. Fiercely devoted to her own people — a true tsundere.",
      checkBad:
        "Firm personal standards can sometimes come across as stubborn.",
      psychologicalAnalysis:
        "This type values 'Conscientiousness' and 'logical principles.' Psychologically, they possess a temperament optimized for forming stable long-term partnerships, with trust serving as the very foundation of their relationships.",
    },
    era_f: {
      type: "Era Girl",
      title: "The Cool Free Spirit",
      tagline:
        "When we respect each other's freedom, our love only grows bigger.",
      oneLiner:
        "A cool soul who dislikes being tied down and lives for the joy of the present moment.",
      keywords: ["FreeSpirit", "CoolVibes", "SpontaneousAdventure"],
      loveDescription:
        "You dislike being tied down and live for the joy of the present moment. You prefer spontaneous dates and value respecting each other's personal time over jealousy and possessiveness — a mature approach to love. Even after a fight, you shake it off without any lingering grudges. Your coolness gives your partner both emotional freedom and comfort at the same time.",
      checkGood:
        "An adventurer who thrives on spontaneous trips and dates. Values personal time for both partners over jealousy or clinginess.",
      checkBad:
        "Your quick ability to let things go after a fight can feel lukewarm to a partner who craves serious, deep conversations.",
      psychologicalAnalysis:
        "The Era Girl type has strong 'exploratory temperament' and 'autonomy.' They strive to maintain an independent sense of self within the relationship, which allows them to keep a healthy distance from their partner and preserve the freshness of the bond.",
    },
  },

  // ─────────────────────────────────────────────
  // JAPANESE
  // ─────────────────────────────────────────────
  ja: {
    /* ── Male Types ── */
    teto: {
      type: "テト男",
      title: "確信の直進ブルドーザー",
      tagline:
        "駆け引きは時間の無駄。僕の心の終着駅は、もうあなたです。",
      oneLiner:
        "迷いのない推進力と透明な素直さで、関係に確信を与える生まれながらのリーダー。",
      keywords: [
        "確信メーカー",
        "遠慮なしロマンス",
        "リードする恋愛",
        "透明度100%",
      ],
      loveDescription:
        "恋に落ちたテト男は、頭の中で計算機を叩きません。あなたの恋愛辞書には「駆け引き」という言葉が存在しないのです。相手が戸惑う隙を与えず先に手を差し伸べ、毎瞬「僕はあなたをこれだけ愛している」という確信をプレゼントします。あなたのリーダーシップは恋人に大きな精神的安定感を与え、あなたと一緒ならどんな知らない場所でも安全だという信頼を生みます。素直さが武器であるだけに、相手にも透明なコミュニケーションを期待する情熱的なスタイルです。",
      checkGood:
        "もどかしさのないストレートな愛情表現と、衝突が起きたときに逃げずにすぐ解決しようとする姿勢。",
      checkBad:
        "自分のペースが速すぎて、相手が感情的についてこられない場合、独断的に感じられることも。",
      psychologicalAnalysis:
        "心理学的にテト男タイプは「外向性（Extraversion）」と「判断型（Judging）」の組み合わせが頂点に達しています。対人関係で曖昧さを許容するより、明確な目標指向のコミュニケーションを好みます。達成動機が恋愛にも投影され、恋人を幸せにすることを一つの「ミッション」として遂行し、そこにやりがいを感じます。この確信型のコミュニケーションスタイルは、関係の初期段階で生じうる不要な不安感を根本からブロックする強力なエネルギーとなります。",
    },
    potato: {
      type: "ポテト男",
      title: "穏やかな人間の安息所",
      tagline:
        "あなたの一番大変だった一日の終わりに、黙って差し出せる広い背中。",
      oneLiner:
        "変わらない安定感と深い包容力で恋人を包み込む「人間毛布」のような存在。",
      keywords: [
        "人間のカンマ",
        "心の守護者",
        "隠れた本物",
        "共感マスター",
      ],
      loveDescription:
        "ポテト男の愛は、華やかな花火より一晩中ほのかに温もりを伝えるオンドル床に似ています。恋人のほんの些細な目線の変化や口調の上がり下がりだけでコンディションを見抜き、温かいお茶をそっと差し出す繊細さを持っています。あなたとの恋愛は、刺激的なドーパミンよりも穏やかなセロトニンのような幸せを与えます。派手ではなくても時間が経つほどその価値が輝くあなたは、恋人に「この人のそばなら一生安全だ」という深い信頼と安息を提供する、本物中の本物です。",
      checkGood:
        "相手の好みやルーティンを完璧に尊重し、安定した感情状態で恋人をいつも安心させる。",
      checkBad:
        "相手の気持ちに合わせるあまり、自分の寂しさを内に溜め込み、一気に崩れるリスクがある。",
      psychologicalAnalysis:
        "このタイプは心理学的に「協調性（Agreeableness）」と「情緒的サポート」の指数が非常に高く出ます。スターンバーグの愛の三角形理論によれば、「親密さ」と「コミットメント」が結合した「友愛的な愛」に最も最適化された性格群です。葛藤の場面で「自分の正しさ」より「二人の平和」を優先し、これが長期的な関係維持能力で他の追随を許さない安定した恋愛の原動力となります。",
    },
    egen: {
      type: "エゲン男",
      title: "感性ロマンチスト",
      tagline:
        "僕たちの平凡な日常を、一本の映画のように変えてみせます。",
      oneLiner:
        "深い共感力と繊細な感受性で、魂の交感を夢見るロマンチスト。",
      keywords: [
        "魂のパートナー",
        "芸術的感性",
        "繊細な思いやり",
        "夢想家",
      ],
      loveDescription:
        "あなたにとって恋愛は、単に時間を共有することではなく、魂の響きを分かち合うプロセスです。美しい風景やいい音楽に出会うと真っ先に恋人を思い浮かべ、言葉では語り尽くせない深い感情をまなざしとちょっとした気遣いに込めます。あなたの繊細さは、恋人に「愛されている」を超えた「理解されている」という深い充足感を与えてくれます。",
      checkGood:
        "相手の感情の流れを鋭く読み取る癒しの魔法使い。",
      checkBad:
        "一人の世界に没頭してしまい、現実的な問題がおろそかになることも。",
      psychologicalAnalysis:
        "エゲン男タイプは「経験への開放性（Openness）」と「直感（Intuition）」が非常に発達しています。心理学的に、関係の中で情緒的な同質感を追求し、些細な出来事にも意味を付与して関係の物語を紡いでいく能力に優れています。これは関係に独創的な活力を吹き込む重要な要素となります。",
    },
    sweet_potato: {
      type: "ゴグマ男",
      title: "重厚な誠意の努力家",
      tagline:
        "ゆっくり温まるけれど、決して冷めない焼き芋のような愛。",
      oneLiner:
        "重厚な誠意と真面目さで信頼を積み重ねていく、頼もしい安息所。",
      keywords: [
        "さりげない優しさ",
        "行動派ロマンチスト",
        "信頼度100%",
        "家庭的",
      ],
      loveDescription:
        "話術が華やかだったり駆け引きが上手だったりはしませんが、あなたの誠意はいつも重厚な行動で証明されます。一度口にした約束は必ず守り、恋人が必要とするときにいつもその場にいてくれるあなたは、世界で最も安全な柵のような存在です。少し遅く見えても、あなたの愛は時間が経つほど深みと甘さが増していく、本物中の本物です。",
      checkGood:
        "相手の些細な好みを覚えておいて、さりげなくケアしてくれる気配り上手。",
      checkBad:
        "慎重すぎて、時に感情表現が遅れがちに見えることも。",
      psychologicalAnalysis:
        "このタイプは「誠実性（Conscientiousness）」と「安定型愛着」の傾向が非常に強く現れます。心理学的に関係の持続性を保証する「信頼資産」の蓄積に集中し、それがパートナーに最も強力な心理的安全基地（Secure Base）を提供する結果につながります。",
    },
    cheese: {
      type: "チーズ男",
      title: "柔軟な共感マスター",
      tagline:
        "スマートな優しさの奥に隠された、深い思いやりを感じてください。",
      oneLiner:
        "柔らかなマナーとユーモアセンスで雰囲気をリードするロマンチックな社交家。",
      keywords: [
        "ムードメーカー",
        "スイートマナー",
        "共感の達人",
        "スマート紳士",
      ],
      loveDescription:
        "溶けたチーズのように柔らかく柔軟な態度で、恋愛の緊張感を溶かす才能があります。気まずい雰囲気を機転の利いたジョークで変え、相手の感情を素早く察して適切なリアクションをしてくれるあなたは、恋愛の達人と呼ばれるにふさわしい存在。あなたと一緒なら退屈する暇がなく、いつも尊重されていると感じられるので、恋人の自己肯定感を高めてくれる最高のパートナーです。",
      checkGood:
        "どんな場面でも柔軟に対処できる高いソーシャルインテリジェンス。",
      checkBad:
        "誰にでも親切な姿が、恋人にヤキモチを焼かせてしまうことも。",
      psychologicalAnalysis:
        "チーズ男タイプは「社会的知性（SQ）」と「共感的配慮」能力が頂点に達しています。他者のニーズを先回りして察知し、衝突を未然に防ぐ戦略的コミュニケーターであり、ポジティブな自己暗示を通じて関係のエネルギーを好循環させる特徴があります。",
    },
    salsa: {
      type: "サルサ男",
      title: "情熱のエナジャイザー",
      tagline:
        "毎瞬間がお祭りのように、熱い情熱であなたを愛します。",
      oneLiner:
        "溢れるエネルギーと積極的な表現で、恋愛の花火を毎日打ち上げる情熱派。",
      keywords: [
        "熱い表現",
        "人間ビタミン",
        "積極スキンシップ",
        "直進男",
      ],
      loveDescription:
        "冷めた恋愛なんて、あなたにはあり得ません。毎日が記念日のように情熱的に表現し、恋人とのすべての活動に200%のエネルギーを注ぎ込みます。あなたの積極的な表現と尽きることのないバイタリティは、恋人の日常を鮮やかな色彩で染め上げます。あなたのそばにいると、世界中のすべてが楽しく見える魔法のような恋愛が体験できます。",
      checkGood:
        "疲れ知らずのリアクションと表現で恋人を幸せにする。",
      checkBad:
        "テンションが高すぎて、相手がたまに疲れを感じることも。",
      psychologicalAnalysis:
        "サルサ男タイプは「外向性」と「刺激追求型」の気質が強い性格です。心理学的に「情熱的な愛」の段階のエネルギーを関係全体にわたって維持しようとする本能が強く、これにより関係の生命力を持続させる原動力となります。マンネリ化を防ぐ強力なワクチンの役割を果たします。",
    },
    ehem: {
      type: "エヘム男",
      title: "重厚な原則主義者",
      tagline:
        "軽くない重みで、あなたへの信頼を守り抜きます。",
      oneLiner:
        "言葉より行動で、責任感と原則に基づいて愛を育む頼もしい戦略家。",
      keywords: [
        "真面目さん",
        "高い責任感",
        "安定した未来",
        "不器用な優しさ",
      ],
      loveDescription:
        "一度口にした言葉は必ず守る、信用度100%の恋愛を目指します。華やかな修辞は苦手かもしれませんが、あなたが描く人生計画の中には、いつも恋人の席がしっかりと確保されています。危機的状況でも揺らがず中心を保ってくれるあなたの重厚さは、時間が経つほど恋人にとって代えの利かない安心感をプレゼントします。",
      checkGood:
        "危機的状況でも動じず、解決策を提示する頼もしさ。",
      checkBad:
        "自分だけのルールが確固としていて、時に頑固に見えてしまうことも。",
      psychologicalAnalysis:
        "このタイプは「道徳的責務感」と「論理的分析力」をベースに関係を構築します。恋愛を単なる感情の交流を超えた一つの相互約束として捉え、責任ある献身を通じて「長期的パートナーシップ」のお手本を示す性格群です。",
    },
    era: {
      type: "エラ男",
      title: "クールな自由主義者",
      tagline:
        "縛られない自由の中にこそ、もっと深い愛が見つかる。",
      oneLiner:
        "計画より即興の楽しさを、束縛よりリスペクトを追求する自由な魂。",
      keywords: [
        "YOLOロマンス",
        "クールな恋愛",
        "後腐れゼロ",
        "イベント製造機",
      ],
      loveDescription:
        "決められた枠にはまったデートより、即興の楽しさを好みます。執着するよりお互いの個人的な時間と成長を応援するクールな関係を目指します。無駄な感情消耗を嫌い、毎瞬間の楽しさに集中するあなたの姿勢は、恋人に新鮮な刺激と自立性を与え、より健全で独立した関係を作り上げていきます。",
      checkGood:
        "不要な感情消耗が少なく、毎瞬間の楽しさに集中できる。",
      checkBad:
        "真剣な将来設計の話になると、やや逃げ腰に見えることも。",
      psychologicalAnalysis:
        "エラ男タイプは「自律性（Autonomy）」の欲求が非常に高く、これは関係の中で自分の領域が尊重されるとより大きな献身を見せるという逆説的な特徴として現れます。信頼に基づく自由を恋愛の原動力とし、現代的な恋愛トレンドに最もフィットするクールな関係を形成します。",
    },

    /* ── Female Types ── */
    teto_f: {
      type: "テト女",
      title: "確信のカリスマリーダー",
      tagline:
        "私たちの恋愛ルートは私が決める。あなたは楽しむだけ！",
      oneLiner:
        "恋愛の主導権を握って爽快にリードするスタイル。優柔不断な彼には救世主のような存在。",
      keywords: ["完璧設計", "後腐れなしのクール", "サポーター"],
      loveDescription:
        "恋愛の主導権を握り、爽快にリードするあなたは、優柔不断な彼にとって救世主のような存在です。デートコースからレストラン予約まで完璧にプランニングし、言いたいことはすぐ言う後腐れのないクールな性格で、衝突も素早く解決します。あなたの推進力は関係に活力を吹き込み、恋人があなたを信頼してついていきたくなる強力な魅力になります。",
      checkGood:
        "デートプランからレストラン予約まで完璧設計。言いたいことはすぐ言う、後腐れなしのクールな性格。",
      checkBad:
        "リードしすぎると、相手が受け身に感じてしまうことも。",
      psychologicalAnalysis:
        "テト女タイプは「自己効力感」と「主導性」が非常に高い性格です。恋愛を能動的にデザインし、自分のエネルギーを恋人の成長と幸せに投影するリーダーシップ型ロマンチストです。",
    },
    potato_f: {
      type: "ポテト女",
      title: "ぽかぽか人間の安息所",
      tagline:
        "疲れた一日の終わりに、あなたが安らげる一番温かい懐になるよ。",
      oneLiner:
        "安定した優しい性格で、そばにいるだけでヒーリングを与える存在。",
      keywords: ["人間ビタミン", "守護者", "日常の幸せ"],
      loveDescription:
        "安定した優しい性格で、そばにいるだけでヒーリングを与える存在です。恋人の些細な気分の変化を超能力のように察知して温かく包み込みます。華やかなイベントよりささやかな日常の幸せを大切にし、相手を思いやるあまり自分の寂しさを隠してしまうこともありますが、それだけ深い愛と献身を見せてくれる守護者です。",
      checkGood:
        "恋人の些細な気分の変化を超能力レベルで察知。華やかなイベントより日常のささやかな幸せを大切にする。",
      checkBad:
        "相手を気遣うあまり、自分の寂しさを隠しがち。",
      psychologicalAnalysis:
        "このタイプは「情緒的共感」指数が頂点に達しており、心理学的にパートナーにとって最も強力な「情緒的安全基地」の役割を果たします。関係の平和を最優先価値として守ります。",
    },
    egen_f: {
      type: "エゲン女",
      title: "繊細な感性ミューズ",
      tagline:
        "私たちの恋が映画なら、毎シーンに本気を注ぐよ。",
      oneLiner:
        "豊かな想像力と深い感受性を持つロマンチスト。心の交感を何より大切にする。",
      keywords: ["感性ミューズ", "ロマンチスト", "アナログ感性"],
      loveDescription:
        "豊かな想像力と深い感受性を持つロマンチストです。心の交感を何より大切にし、手書きの手紙や手作りのプレゼントなどアナログ的な感性で愛を表現します。あなたの繊細さは恋人に「愛されている」と深く感じさせ、平凡な日常を一篇の詩のように美しく彩る才能があります。",
      checkGood:
        "手書きの手紙や手作りのプレゼントなど、アナログ感性を大切にする。心の交感を何よりも重視。",
      checkBad:
        "たった一言で大きく感動したり傷ついたりすることも。時々思いがけない「もしも」の質問で彼を困らせることも。",
      psychologicalAnalysis:
        "エゲン女タイプは「開放性」と「直感」が発達しており、関係の中で象徴的な意味と情緒的一体感を追求します。独創的な感受性で関係の深みを増していきます。",
    },
    sweet_potato_f: {
      type: "ゴグマ女",
      title: "重厚な誠意のひまわり",
      tagline:
        "表現はちょっと不器用でも、私の行動の中にはあなただけ。",
      oneLiner:
        "外見はちょっとぶっきらぼうに見えるけど、中身は誰よりも温かく頑丈な「本物の」彼女。",
      keywords: [
        "ツンデレの教科書",
        "誠実な愛",
        "行動派",
        "頼れるパートナー",
      ],
      loveDescription:
        "ゴグマ女は、言葉で愛を調理するより行動で誠意を証明するタイプです。照れくさい愛情表現にはぎこちなく恥ずかしがるかもしれませんが、恋人が体調を崩した時には黙ってお粥をデリバリーし、大事な予定をメモしておいて応援メッセージを送る努力家です。あなたの愛は焼き芋のようにゆっくり熟していきますが、一度心を開けば決して冷めない高い密度を誇ります。華やかな修辞より重厚な責任感でそばを守るあなたは、時間が経つほどかけがえのない存在になります。",
      checkGood:
        "ただ一人だけを見つめる徹底的な誠実さと、恋愛を単なる感情ではなく「約束」として捉える責任感。",
      checkBad:
        "自分の感情を外に出すのに時間がかかり、相手に「私だけが好きなの？」と誤解を与えてしまうことも。",
      psychologicalAnalysis:
        "心理学的に「安定型愛着（Secure Attachment）」の典型的な特徴を示します。関係において一時的な感情消耗より持続可能な信頼の形成を重視します。ビッグファイブの中で「誠実性（Conscientiousness）」が非常に高く、恋愛でも計画的で献身的な態度として表れます。このような特性は恋人に「自分のために努力してくれている」という実質的な証拠を提供し、深い情緒的絆を形成します。",
    },
    cheese_f: {
      type: "チーズ女",
      title: "とろける恋愛マジシャン",
      tagline:
        "二人の間にぎこちなさは0%。毎瞬間を甘い思い出で満たすよ。",
      oneLiner:
        "卓越したソーシャルインテリジェンスと柔らかなマナーで、恋愛のあらゆる場面を柔軟にリードする社交家。",
      keywords: [
        "ムードメーカー",
        "共感力MAX",
        "柔軟なコミュニケーション",
        "リアクション名人",
      ],
      loveDescription:
        "チーズ女との恋愛は退屈する暇がありません。溶けたチーズのようにどんな場面でも柔軟に対応し、特有のウィットと優しさで相手の気分をすぐに溶かしてしまいます。彼氏の友人ともすぐに打ち解けるほどの親和力があり、相手が言わなくても何を求めているか察するセンスを兼ね備えています。あなたとの恋愛はいつも大切にされている、尊重されていると感じさせてくれ、衝突が起きてもあなたの柔らかな話し方のおかげで大きなケンカにならず穏やかに解決します。",
      checkGood:
        "相手の感情の流れを鋭く把握し、最適な反応を返す高いソーシャルインテリジェンスとマナー。",
      checkBad:
        "みんなに優しい性格ゆえに、恋人がひそかに疎外感を感じたりヤキモチを焼いたりすることも。",
      psychologicalAnalysis:
        "このタイプは「社会的視点取得（Social Perspective Taking）」能力が非常に優れています。他者の立場で考え感じる能力が発達しており、関係の潤滑油の役割を自ら買って出ます。ポジティブな自己暗示と高い自己肯定感をベースに関係の満足度を高めようと努力し、それがパートナーにも良い影響を伝染させます。衝突管理の戦略でも「協力」と「受容」のバランスが非常によく取れている健全な性格群です。",
    },
    salsa_f: {
      type: "サルサ女",
      title: "情熱ホットガールエナジャイザー",
      tagline:
        "私の人生に「ほどほど」なんてない。愛もフルパワーで！",
      oneLiner:
        "溢れるエネルギーと積極的な自己表現で、恋愛の最前線にいつも活力を注入。",
      keywords: ["エナジャイザー", "フルパワー", "サプライズ"],
      loveDescription:
        "溢れるエネルギーと積極的な表現で、恋愛の最前線にいつも活力を吹き込みます。感情表現がはっきりしていて情熱的で、退屈なデートは我慢できず常に新しい楽しみを探し求めます。恋人のためにサプライズイベントを企画するのが大好きで、あなたの明るいエネルギーは恋人の憂鬱を一瞬で吹き飛ばす魔法のような力を持っています。",
      checkGood:
        "感情表現がはっきりしていて情熱的。恋人のためにサプライズイベントを企画するのが大好き。",
      checkBad:
        "フルパワーのエネルギーが、疲れている相手には負担に感じられることも。",
      psychologicalAnalysis:
        "サルサ女タイプは「活力性」と「外向性」が高い性格です。感情の表現が非常に透明で、関係の中で楽しさと刺激を通じて愛の生命力を確認する情熱的な性格群です。",
    },
    ehem_f: {
      type: "エヘム女",
      title: "凛とした原則主義者",
      tagline:
        "正直な愛が最高。信頼は行動で証明するものだから。",
      oneLiner:
        "真面目で礼儀正しく、自分だけの明確な基準を持って関係を築いていく。",
      keywords: ["原則主義", "正直な愛", "ツンデレ"],
      loveDescription:
        "真面目で礼儀正しく、自分だけの明確な基準を持って関係を築いていきます。時間の約束に厳しく、軽い付き合いより真剣な将来を共にできる相手を求めます。外見は少しぶっきらぼうに見えても、自分の大切な人には誰よりも献身的なツンデレの魅力を持ち、あなたの真っ直ぐな性格は恋人に無限の信頼を与えます。",
      checkGood:
        "無礼な振る舞いが一番嫌いで、時間厳守は徹底。自分の人には献身的なツンデレ。",
      checkBad:
        "自分だけのルールが確固としていて、時に頑固に感じられることも。",
      psychologicalAnalysis:
        "このタイプは「誠実性」と「論理的価値」を重視します。心理学的に安定した長期パートナーシップの形成に最適化された気質を持ち、信頼を関係の根幹に据えています。",
    },
    era_f: {
      type: "エラ女",
      title: "クールな自由主義者",
      tagline:
        "お互いの自由を尊重する時、私たちの愛はもっと大きくなる。",
      oneLiner:
        "縛られるのが嫌いで、今の楽しさを追求するクールな持ち主。",
      keywords: ["自由主義", "クール", "即興アドベンチャー"],
      loveDescription:
        "縛られるのが嫌いで、今この瞬間の楽しさを追求するクールな性格の持ち主です。即興デートを楽しみ、嫉妬や執着よりお互いの個人的な時間を尊重する大人の恋愛を志向します。ケンカしても後腐れなくすぐに切り替えるあなたのクールさは、恋人に精神的な自由と安心感を同時に届けます。",
      checkGood:
        "即興の旅やデートを楽しむ冒険家タイプ。嫉妬や束縛よりお互いの個人時間を大事にする。",
      checkBad:
        "ケンカしてもすぐ忘れるクールさが、真剣な対話を望む相手にはあっさりし過ぎに感じられることも。",
      psychologicalAnalysis:
        "エラ女タイプは「探索的気質」と「自律性」が強い性格です。関係の中でも独立した自我を維持しようとし、それにより相手との健全な距離感を保ちながら関係の新鮮さを持続させます。",
    },
  },

  // ─────────────────────────────────────────────
  // CHINESE (Simplified)
  // ─────────────────────────────────────────────
  zh: {
    /* ── Male Types ── */
    teto: {
      type: "泰托男",
      title: "坚定的直线推土机",
      tagline:
        "欲擒故纵只是浪费时间，我的心早已到达终点站——你。",
      oneLiner:
        "凭借毫不犹豫的行动力和透明的坦率，给予恋爱关系十足确信感的天生领导者。",
      keywords: ["确信制造机", "毫不犹豫的浪漫", "主导型恋爱", "透明度100%"],
      loveDescription:
        "陷入爱情的泰托男不会在脑海中敲打计算器。在你的恋爱辞典里根本不存在「欲擒故纵」这个词。你不给对方犹豫的机会，率先伸出手，每时每刻都送上一份「我就是这么爱你」的确信。你的领导力给恋人带来极大的情感安全感——和你在一起，即使身处陌生的地方也会觉得安心。坦诚是你最大的武器，同样你也期待对方能和你一样透明地沟通，是一个充满热情的恋爱风格。",
      checkGood:
        "痛快清爽的爱意表达，发生矛盾时不回避、立刻解决的态度。",
      checkBad:
        "自己的节奏太快，对方在情感上可能跟不上，会显得有些武断。",
      psychologicalAnalysis:
        "从心理学角度来看，泰托男类型是「外向性（Extraversion）」和「判断型（Judging）」结合的巅峰。他们在人际关系中倾向于明确的目标导向型沟通，而非容忍暧昧和模糊。成就动机也投射到恋爱中，把让恋人幸福当作一项「使命」来执行并从中获得成就感。这种确信型沟通方式成为一股强大的能量，能从根源上消除恋爱初期可能出现的不必要焦虑。",
    },
    potato: {
      type: "土豆男",
      title: "平静的人间休憩所",
      tagline:
        "在你最疲惫的一天结束时，默默递出的宽厚肩膀。",
      oneLiner:
        "以不变的稳定感和深沉的包容力拥抱恋人的「人形毛毯」般的存在。",
      keywords: ["人间逗号", "情感守护者", "内敛真诚", "共情大师"],
      loveDescription:
        "土豆男的爱，不是华丽的烟火，更像是整夜默默传递温暖的暖炕。你能敏锐地从恋人细微的眼神变化或语调起伏中读出她的状态，悄悄递上一杯温热的茶。和你的恋爱，带来的不是刺激的多巴胺快感，而是安稳的血清素式幸福。虽然不够耀眼，但时间越久价值越闪耀的你，给恋人提供了「在这个人身边一辈子都会安全」的深厚信任和港湾——真正的极品好男人。",
      checkGood:
        "完美尊重对方的喜好和日常，情绪稳定、始终让恋人感到安心。",
      checkBad:
        "为了迎合对方的心情，可能把自己的委屈一直憋在心里，最终有一次性崩溃的风险。",
      psychologicalAnalysis:
        "该类型在心理学上的「宜人性（Agreeableness）」和「情感支持」指数非常高。根据斯滕伯格的爱情三角理论，他们最适合「亲密+承诺」组合而成的「伴侣式爱情」。在冲突中，他们把「我们的和平」置于「我的对错」之上，这使他们拥有无人能及的长期关系维持能力。",
    },
    egen: {
      type: "艾根男",
      title: "感性浪漫主义者",
      tagline:
        "把我们平凡的日常，变成一部电影。",
      oneLiner:
        "凭借深厚的共情能力和细腻的感受力，追求灵魂交融的恋爱家。",
      keywords: ["灵魂伴侣", "艺术感性", "细腻体贴", "梦想家"],
      loveDescription:
        "对你而言，恋爱不仅仅是共享时间，更是分享灵魂的共鸣。看到美丽的风景或动听的音乐，第一个想到的就是恋人，把言语无法表达的深沉情感融入眼神和细小的关怀中。你的细腻不仅让恋人感受到「被爱」，更让对方体会到「被理解」——那是一种深层的满足感。",
      checkGood:
        "精准读取对方情感波动的治愈魔法师。",
      checkBad:
        "有时会沉浸在自己的世界里，对现实问题偶尔疏忽。",
      psychologicalAnalysis:
        "艾根男类型的「经验开放性（Openness）」和「直觉（Intuition）」非常发达。心理学上，他们在关系中追求情感上的同质感，擅长赋予微小事件以意义，编织恋爱的叙事。这成为给关系注入独创活力的重要因素。",
    },
    sweet_potato: {
      type: "红薯男",
      title: "沉稳诚恳的实干派",
      tagline:
        "慢慢加热但永远不会冷却——如烤红薯般的爱。",
      oneLiner:
        "用沉甸甸的真心和踏实构建信任的可靠港湾。",
      keywords: ["低调温柔", "行动派浪漫", "可靠度100%", "顾家"],
      loveDescription:
        "你或许不擅长花言巧语，也不精于推拉博弈，但你的真心总是用沉甸甸的行动来证明。说出口的承诺一定会兑现，恋人需要你的时候你永远在场——你是这世上最安全的屏障。你看起来也许慢了些，但你的爱会随着时间推移愈加深沉和甜蜜，是名副其实的极品。",
      checkGood:
        "默默记住对方的小喜好，然后贴心地付诸行动。",
      checkBad:
        "过于谨慎，情感表达有时显得迟缓。",
      psychologicalAnalysis:
        "该类型表现出极强的「尽责性（Conscientiousness）」和「安全型依恋」倾向。心理学上，他们专注于积累维系关系的「信任资产」，最终为伴侣提供最强大的心理安全基地（Secure Base）。",
    },
    cheese: {
      type: "芝士男",
      title: "灵活共情大师",
      tagline:
        "在圆滑的温柔背后，感受那份深沉的体贴吧。",
      oneLiner:
        "凭借柔和的举止和幽默感引领气氛的浪漫社交家。",
      keywords: ["气氛担当", "甜蜜礼仪", "共情达人", "圆滑柔情"],
      loveDescription:
        "如融化的芝士般柔和灵活，你有化解恋爱紧张感的天赋。你能用机智把尴尬的气氛瞬间转换，迅速捕捉对方的情绪并给出恰到好处的回应——堪称恋爱达人。和你在一起永远不会无聊，恋人总会感到被尊重，你是那个能提升对方自信心的最佳伴侣。",
      checkGood:
        "在任何场合都能灵活应对的高社交智商。",
      checkBad:
        "对所有人都很亲切，可能会让恋人产生醋意。",
      psychologicalAnalysis:
        "芝士男类型的「社会智力（SQ）」和「共情关怀」能力达到了顶峰。他们是能预判他人需求、将冲突扼杀在萌芽状态的策略型沟通者，通过积极的自我暗示让关系能量形成良性循环。",
    },
    salsa: {
      type: "萨尔萨男",
      title: "热情能量站",
      tagline:
        "每一刻都像节日，用火热的激情爱着你。",
      oneLiner:
        "以充沛的精力和积极的表达，每天在恋爱中点燃烟花的激情派。",
      keywords: ["火热表达", "人间维他命", "主动的亲密", "直球男"],
      loveDescription:
        "冷淡的恋爱在你身上是不可能的。你像每天都是纪念日一样火热地表达爱意，把200%的能量倾注到和恋人的每一项活动中。你积极的表达和永不疲倦的活力，为恋人的日常生活涂上鲜艳的色彩。在你身边，仿佛世界上所有的事情都变得开心了——这就是和你恋爱的魔力。",
      checkGood:
        "永不疲倦的回应和表达，让恋人始终沉浸在幸福中。",
      checkBad:
        "自己的精力太旺盛，对方偶尔可能会感到疲惫。",
      psychologicalAnalysis:
        "萨尔萨男类型具有很强的「外向性」和「刺激寻求型」气质。心理学上，他们有在整段恋爱中维持「热恋」阶段能量的强烈本能，成为维系关系活力的发动机。这犹如一针有效预防恋爱倦怠期的强力疫苗。",
    },
    ehem: {
      type: "哼哼男",
      title: "沉稳的原则主义者",
      tagline:
        "用绝不轻浮的分量，守护着对你的信任。",
      oneLiner:
        "用行动胜过言语、以责任感和原则为基础经营爱情的可靠策略家。",
      keywords: ["模范生", "高度责任感", "稳定的未来", "闷骚温柔"],
      loveDescription:
        "你追求信用度100%的恋爱——说出口的话一定兑现。华丽的辞藻也许不是你的强项，但在你规划的人生蓝图中，恋人的位置永远稳固不变。在危机中也不动摇、坚守中心的你那份沉稳，随着时间流逝，将成为恋人无可替代的安全感来源。",
      checkGood:
        "危机中不动摇，沉着地提出解决方案的可靠感。",
      checkBad:
        "自己的标准过于坚定，有时会显得固执。",
      psychologicalAnalysis:
        "该类型以「道德责任感」和「逻辑分析力」为基础构建关系。他们将恋爱视为超越单纯情感交流的相互承诺，通过负责任的奉献展现「长期伙伴关系」的典范。",
    },
    era: {
      type: "随它男",
      title: "酷酷的自由主义者",
      tagline:
        "在不受束缚的自由中，能找到更深沉的爱。",
      oneLiner:
        "比起计划更爱即兴的快乐，比起束缚更追求尊重的自由灵魂。",
      keywords: ["YOLO式恋爱", "酷酷约会", "零芥蒂", "惊喜制造机"],
      loveDescription:
        "比起被框架限定的约会，你更喜欢即兴的乐趣。与其紧抓不放，你更倾向于互相支持彼此个人时间和成长的酷酷关系。你讨厌不必要的情绪消耗，专注享受当下的每一刻。你这样的态度给予恋人清新的刺激和自主性，建立起更健康、更独立的恋爱关系。",
      checkGood:
        "不必要的情绪消耗极少，专注享受每一刻的乐趣。",
      checkBad:
        "一涉及认真的未来规划，可能会显得有些回避。",
      psychologicalAnalysis:
        "随它男类型对「自主性（Autonomy）」的需求非常高，这反而呈现出一种悖论式的特征——当他们在关系中的个人空间被尊重时，会展现出更大的付出。他们以信任为基础的自由作为恋爱动力，形成最符合现代恋爱潮流的酷酷关系。",
    },

    /* ── Female Types ── */
    teto_f: {
      type: "泰托女",
      title: "自信满满的魅力领袖",
      tagline:
        "我们的恋爱路线由我来定——你只管享受就好！",
      oneLiner:
        "掌握恋爱主导权、痛快地引领关系的类型。对于有选择困难症的男友来说简直是救世主。",
      keywords: ["完美规划", "不留芥蒂的酷", "支持者"],
      loveDescription:
        "掌握恋爱主导权、痛快地引领关系的你，对于有选择困难症的男友来说简直是救世主。从约会路线到餐厅预订全部完美设计，有话直说、绝不拖泥带水的酷爽性格让矛盾快速解决。你的行动力为关系注入活力，成为让恋人信任并跟随的强大魅力。",
      checkGood:
        "从约会路线到餐厅预订全部完美设计。有话直说、不留芥蒂的酷爽性格。",
      checkBad:
        "引领过多时，对方可能会觉得自己过于被动。",
      psychologicalAnalysis:
        "泰托女类型的「自我效能感」和「主动性」非常高。她们主动设计恋爱，将自身能量投射到恋人的成长和幸福上——是领导力型的浪漫主义者。",
    },
    potato_f: {
      type: "土豆女",
      title: "温暖的人间休憩所",
      tagline:
        "在你疲惫一天的结尾，我会成为你最温暖的怀抱。",
      oneLiner:
        "性格稳定又温柔，光是待在身边就能给人治愈感的存在。",
      keywords: ["人间维他命", "守护者", "日常幸福"],
      loveDescription:
        "性格稳定又温柔，光是待在身边就能给人治愈感的存在。你能像超能力一样察觉恋人最细微的情绪变化，并用温暖将对方包裹。比起华丽的活动，你更珍惜平凡日常中的小确幸。虽然有时会因体贴对方而隐藏自己的委屈，但这恰恰体现了你深沉的爱与奉献——你是真正的守护者。",
      checkGood:
        "如同超能力般敏锐捕捉恋人的细微情绪变化。比起华丽活动，更珍惜日常小确幸。",
      checkBad:
        "为了照顾别人，经常把自己的委屈藏起来。",
      psychologicalAnalysis:
        "该类型的「情感共情」指数达到顶峰，在心理学上为伴侣扮演着最强大的「情感安全基地」角色。将关系中的和平视为最高价值。",
    },
    egen_f: {
      type: "艾根女",
      title: "细腻的感性缪斯",
      tagline:
        "如果我们的爱情是一部电影，那每一幕我都会全力以赴。",
      oneLiner:
        "拥有丰富想象力和深沉感受力的浪漫主义者，把情感交流看得比什么都重要。",
      keywords: ["感性缪斯", "浪漫主义者", "复古文艺"],
      loveDescription:
        "拥有丰富想象力和深沉感受力的浪漫主义者，把情感交流看得比什么都重要。你用手写信、亲手制作礼物等充满复古文艺感的方式表达爱意。你的细腻让恋人深深感受到「被爱」，还有把平凡的日常装点得如诗般美丽的才华。",
      checkGood:
        "偏爱手写信、手工礼物等复古文艺感的表达。把情感交流视为最重要的事。",
      checkBad:
        "可能因为一句话而大喜或深受伤害。偶尔会用天马行空的「如果」问题让男友措手不及。",
      psychologicalAnalysis:
        "艾根女类型的「开放性」和「直觉」发达，在关系中追求象征性意义和情感上的一体感。以独特的感受力不断加深关系的深度。",
    },
    sweet_potato_f: {
      type: "红薯女",
      title: "沉稳真心的向日葵",
      tagline:
        "表达虽然有点笨拙，但我的行动里只有你一个人。",
      oneLiner:
        "外表可能看起来有些木讷，内心却比任何人都温暖坚定的「真宝藏」女友。",
      keywords: ["经典傲娇", "踏实的爱", "行动派", "可靠的伙伴"],
      loveDescription:
        "红薯女是比起用语言烹饪爱情，更习惯用行动证明真心的类型。面对肉麻的爱意表达你可能会害羞地手足无措，但恋人生病时你会默默叫外卖送粥，把对方的重要日程记在备忘录里准时发去鼓励短信。你的爱像烤红薯一样慢慢变熟，但一旦敞开心扉就拥有永不降温的高密度。比起华丽的言辞，你用沉甸甸的责任感守在恋人身边，时间越久你越不可替代。",
      checkGood:
        "只凝望一个人的极致忠诚，将恋爱不仅仅视为感情、更视为'承诺'的责任感。",
      checkBad:
        "把自己的感情向外表达需要很长时间，可能让对方产生'是不是只有我在爱？'的误解。",
      psychologicalAnalysis:
        "心理学上呈现出「安全型依恋（Secure Attachment）」的典型特征。她们在关系中重视可持续的信任建设，而非一时的情感消耗。在大五人格中「尽责性（Conscientiousness）」极高，在恋爱中也表现为有计划、有奉献的态度。这些特征为恋人提供了'有人在为我真实地努力'的切实证据，从而形成深厚的情感纽带。",
    },
    cheese_f: {
      type: "芝士女",
      title: "融化心灵的恋爱魔法师",
      tagline:
        "我们之间零尴尬，每一刻都填满甜蜜的回忆。",
      oneLiner:
        "凭借卓越的社交智商和温柔的举止，灵活引领恋爱每一刻的社交达人。",
      keywords: ["气氛担当", "共情力满级", "灵活沟通", "反应达人"],
      loveDescription:
        "和芝士女在一起的恋爱永远不会无聊。如同融化的芝士般灵活应对任何场合，凭借独有的机智和温柔瞬间融化对方的情绪。你的亲和力强到能迅速和男友的朋友打成一片，而且不需要对方说出口就能察觉他想要什么。和你在一起总是觉得被尊重、被珍惜，即使有了矛盾，靠你温柔的表达方式也能在没有大吵大闹的情况下和平解决。",
      checkGood:
        "精准把握对方的情绪波动，给出最佳回应的高社交智商和礼仪。",
      checkBad:
        "对所有人都温柔，可能会让恋人暗暗产生被忽略感或醋意。",
      psychologicalAnalysis:
        "该类型在「社会视角采择（Social Perspective Taking）」方面能力出众。能从他人角度思考和感受的能力高度发达，自然而然地担当起关系润滑剂的角色。以积极的自我暗示和高度的自尊心为基础，努力提升关系满意度，而且这种积极性还会「传染」给伴侣。在冲突管理策略上，「合作」与「接纳」之间的平衡把握得非常好——是一种十分健康的人格类型。",
    },
    salsa_f: {
      type: "萨尔萨女",
      title: "热情辣妹能量站",
      tagline:
        "我的人生没有'适可而止'这个词。爱也要全力以赴！",
      oneLiner:
        "以充沛的精力和积极的自我表达，不断为恋爱注入活力。",
      keywords: ["能量站", "全力以赴", "惊喜"],
      loveDescription:
        "以充沛的精力和积极的表达，不断为恋爱注入活力。情感表达爽快而火热，无法忍受无聊的约会，总在寻找新的乐趣。你热爱为恋人策划惊喜活动，你那明亮的能量拥有一种魔力——能在瞬间吹散恋人所有的忧愁。",
      checkGood:
        "情感表达爽快而火热。热爱为恋人策划惊喜活动。",
      checkBad:
        "全力以赴的能量，对于已经很疲惫的对方来说可能会成为负担。",
      psychologicalAnalysis:
        "萨尔萨女类型的「活力性」和「外向性」很高。情感表达极为透明，是通过关系中的乐趣和刺激来确认爱情生命力的热情型人格。",
    },
    ehem_f: {
      type: "哼哼女",
      title: "端庄的原则主义者",
      tagline:
        "诚实的爱情最好。信任是用行动来证明的。",
      oneLiner:
        "稳重、有礼貌，拥有自己明确的标准来经营关系。",
      keywords: ["原则主义", "诚实的爱", "傲娇"],
      loveDescription:
        "稳重、有礼貌，拥有自己明确的标准来经营关系。对守时非常严格，比起随意的暧昧关系，更想找到能一起规划认真未来的人。外表看起来可能有些冷淡，但对自己的人比谁都尽心尽力——这就是典型的傲娇魅力。你正直的性格，给恋人带来无限的信任。",
      checkGood:
        "最讨厌无礼的行为，对守时严格到极致。对自己的人尽心尽力的傲娇。",
      checkBad:
        "自己的标准过于坚定，有时会显得固执。",
      psychologicalAnalysis:
        "该类型重视「尽责性」和「逻辑价值」。心理学上，她们拥有最适合建立稳定长期伙伴关系的气质，将信任视为关系的根基。",
    },
    era_f: {
      type: "随它女",
      title: "酷酷的自由主义者",
      tagline:
        "当我们互相尊重彼此的自由时，我们的爱才会更加壮大。",
      oneLiner:
        "讨厌被束缚、追求当下快乐的酷酷性格的拥有者。",
      keywords: ["自由主义", "酷酷", "即兴冒险"],
      loveDescription:
        "你讨厌被束缚，追求当下的快乐。喜欢即兴约会，比起嫉妒和占有欲更看重尊重彼此的个人时间——志向成熟的恋爱方式。吵架之后也毫无芥蒂地迅速释怀，你这份潇洒同时给恋人带来情感上的自由和安心。",
      checkGood:
        "享受即兴旅行和约会的冒险家类型。比起嫉妒和粘人，更看重双方各自的个人时间。",
      checkBad:
        "吵架后马上忘记的潇洒，对于想要认真深入对话的对方来说可能显得太淡了。",
      psychologicalAnalysis:
        "随它女类型的「探索性气质」和「自主性」很强。在关系中努力维持独立的自我，借此与对方保持健康的距离感，持续保鲜关系的新鲜度。",
    },
  },
};
