/**
 * 질문 다국어 번역 데이터
 * locale → questionId → { question, options: string[] }
 * Korean(ko)은 기본 언어이므로 여기에 포함하지 않음
 */

export type QuestionI18n = {
  question: string;
  options: string[];
};

export type QuestionsI18nMap = Record<string, Record<number, QuestionI18n>>;

// ─────────────────────────────────────────────
// 남자친구 테토 농도 분석 (Boyfriend) - 15 questions
// ─────────────────────────────────────────────
export const QUESTIONS_I18N: QuestionsI18nMap = {
  en: {
    1: {
      question: "When deciding on a date course, what's his style?",
      options: [
        "\"Let's go here!\" He already has a fully planned route from restaurants to the schedule — 100% prepared.",
        "\"What do you feel like eating?\" He asks for my opinion and carefully suggests options.",
        "\"Why don't we just go wherever our feet take us?\" He goes with the spontaneous vibe.",
        "\"I want to go somewhere with a nice atmosphere.\" He intensely searches for romantic spots.",
        "\"Wanna go here? I wanted to treat you to something good..\" He smoothly takes the lead in a sweet, natural way.",
      ],
    },
    2: {
      question: "When he spots me at our meeting place, how does he react?",
      options: [
        "\"Hey~! Over here!\" He waves big from far away with a bright smile.",
        "\"Thanks for coming.\" He gives a gentle smile and naturally takes my bags.",
        "He waits quietly until our eyes meet, then shyly walks over to say hi.",
        "\"Right on time? Hungry? Let's go!\" He coolly moves on to the next plan.",
      ],
    },
    3: {
      question: "At a crowded hotspot, if I say \"There are so many people, it's draining..\" how does he react?",
      options: [
        "\"Then let's go somewhere else right away. I know a quiet place nearby.\"",
        "\"That must be tough.. Let's hang in there a bit more! I'll buy you something delicious after.\"",
        "\"Sorry, I should have checked more carefully.. Shall we sit down and rest for a bit?\"",
        "\"Weekends are always like this. Just hang on a little longer and it'll be our turn.\"",
      ],
    },
    4: {
      question: "When choosing a menu item, what does he prioritize most?",
      options: [
        "No-fail classics. He always picks the restaurant's signature dish.",
        "Photogenic dishes. He goes for visually stunning plating and presentation.",
        "\"This one just calls to me today.\" He boldly tries a new menu item based on the name alone.",
        "\"What do you like? Order two things you want and I'll pick one more.\"",
      ],
    },
    5: {
      question: "If I ask \"Do I look tired today?\", how does he react?",
      options: [
        "\"What time did you go to bed last night? Want some coffee?\" He looks for the cause and solution first.",
        "\"Oh no.. that's upsetting. Let's not push it today and head home early?\" He comforts my feelings first.",
        "\"You still look beautiful to me! Let's go get some sugar!\" He cheekily lifts my mood.",
        "\"I'm a bit tired today too. Let's go eat something good together and cheer up!\"",
        "\"Really? You seem fine to me.. Let's sit down and rest for a bit.\" He seems blunt but takes care of you through actions.",
      ],
    },
    6: {
      question: "It starts raining after we leave the restaurant. When there's only one umbrella, how does he handle it?",
      options: [
        "\"Hold on, I've already located the convenience store!\" He dashes off and comes back with another umbrella in 10 seconds.",
        "\"Even better!\" He tilts the umbrella toward me and walks close together.",
        "\"There's something charming about the rain. Want to watch it from a nearby cafe?\"",
        "\"Our clothes will get soaked. Let's duck into the nearest building and wait it out.\"",
      ],
    },
    7: {
      question: "At a cafe, if I ask \"What would it be like if we broke up?\", how does he react?",
      options: [
        "\"Why would you suddenly say that? Is something wrong?\" He asks for the reason logically.",
        "\"Just imagining it makes me so sad.. Let's promise to never break up.\" He gets emotional and empathizes deeply.",
        "\"Break up? No way~ You're stuck with me forever!\" He playfully brushes it off.",
        "\"Hmm.. but we're doing great right now, aren't we? Let's deal with the future when it comes.\"",
      ],
    },
    8: {
      question: "When the mood turns cold during a date due to a small misunderstanding, what's his style?",
      options: [
        "\"Here's why I did that.\" He logically explains the situation and clears up the misunderstanding right away.",
        "\"I'm sorry I upset you.. I'll wait until you feel better.\" He puts my feelings first.",
        "\"Forget it! Let's eat something good and feel better!\" He tries to change the mood.",
        "\"Can you calmly tell me what I did wrong? I want to fix it.\"",
        "\"...Let's go outside and take a walk.\" He stays quiet and gives it time to let the emotions cool down.",
      ],
    },
    9: {
      question: "When he takes photos of me, what's his style?",
      options: [
        "\"Keep the horizon level and align the feet with the line.\" He takes multiple shots for the perfect composition.",
        "\"Your expression right now is perfect!\" He focuses on capturing the mood and the moment.",
        "\"I'll keep shooting until we get the best shot!\" He showers me with compliments while enthusiastically clicking away.",
        "\"Ready? One, two, three!\" He takes a straightforward shot and shows me right away.",
      ],
    },
    11: {
      question: "When a gift I prepared is the complete opposite of his taste, how does he react?",
      options: [
        "\"I'm truly touched.. The thought of you picking this out for me is so precious.\"",
        "\"Wow, thanks! I'll use it well!\" He reacts big, but you can tell he's secretly thinking about how to use it.",
        "\"You must have put a lot of effort into this. But next time, something more like this would be even better!\"",
        "\"Thanks. But honestly, I think this would suit you better than me.\"",
        "\"Whoa, where'd you get this? Wait, how did you know I like this kind of thing?\" A genuinely honest burst of excitement.",
      ],
    },
    12: {
      question: "When saying goodbye after a date, what's his closing style?",
      options: [
        "\"Today was so lovely~\" He looks through the photos they took together and gets all warm and fuzzy.",
        "\"Let me sort out today's expenses and check tomorrow's to-do list.\" He wraps things up neatly.",
        "\"That restaurant was so good.. We should suggest going there next time.\"",
        "\"We had a solid day! Alright, time for some me-time now?\"",
      ],
    },
    13: {
      question: "When posting our photos on social media, what's his style?",
      options: [
        "\"This photo turned out so well! Can I post it?\" He always asks for consent and carefully crafts the caption.",
        "\"I don't really use social media..\" He prefers saving photos in his phone gallery rather than posting them.",
        "\"Look at this! We look so great together~\" He uploads proudly and enjoys the reactions.",
        "He takes photos but doesn't post them. He values private memories over public sharing.",
        "\"Which filter looks best?\" He stylishly edits the photo and posts it on stories.",
      ],
    },
    14: {
      question: "During a long trip together, what is he like?",
      options: [
        "He prepares a playlist in advance and suggests listening together.",
        "He quietly leans on my shoulder and dozes off, or stares out the window in a daze.",
        "\"Wanna play a game? I'm bored.\" He looks for all sorts of things to do together.",
        "\"There's a good restaurant here! Should we stop and eat on the way?\" He searches for food spots in real time.",
        "He uses the travel time to organize upcoming plans and schedules.",
      ],
    },
    15: {
      question: "When it comes to celebrating anniversaries, what's his style?",
      options: [
        "He books a restaurant a month in advance and has a gift list prepared down to every detail.",
        "\"When was our anniversary again..?\" He's bad with dates but does his best once you remind him.",
        "\"It's our anniversary, let's do something special!\" He enjoys planning events himself.",
        "He prepares heartfelt analog gifts like handwritten letters or cards.",
        "\"Every day is an anniversary~\" He's the type who shows love consistently in daily life rather than on special days.",
        "\"Is there anything you want? Tell me!\" He directly asks what you actually want and gets it for you.",
      ],
    },
  },

  ja: {
    1: {
      question: "デートコースを決めるとき、彼のスタイルは？",
      options: [
        "「ここに行こう！」もうグルメスポットから移動ルートまで完璧に計画を立ててくる。",
        "「何食べたい？」私の意見を聞いて、慎重にオプションを提案してくれる。",
        "「とりあえず気の向くまま行ってみない？」即興的なムードに身を任せる。",
        "「雰囲気のいいところに行きたいな。」ロマンチックな場所を猛検索する。",
        "「とりあえずここ行かない？美味しいもの食べさせたくて..」甘くて自然にエスコートしてくれる。",
      ],
    },
    2: {
      question: "待ち合わせ場所で私を見つけたとき、彼の反応は？",
      options: [
        "「おーい！こっちだよ！」遠くから大きく手を振って、満面の笑みで迎えてくれる。",
        "「来てくれてありがとう。」優しく微笑みながら、自然と荷物を持ってくれる。",
        "目が合うまで静かに待って、照れくさそうに近づいてくる。",
        "「ちょうどいいね。お腹空いた？すぐ行こうか？」クールに次の予定を進める。",
      ],
    },
    3: {
      question: "混雑した人気スポットで「人が多すぎて疲れる..」と言ったら、彼の反応は？",
      options: [
        "「じゃあすぐ別の場所に行こうか？近くに静かなところ知ってるよ。」",
        "「大変だったね..もう少し頑張ろう！食べ終わったら美味しいもの買ってあげるから。」",
        "「ごめん、もっとちゃんとチェックしておけばよかった..少し座って休もうか？」",
        "「週末はどこもこんなもんだよ。もう少し待てば僕らの番だから。」",
      ],
    },
    4: {
      question: "メニューを選ぶとき、彼が一番重視することは？",
      options: [
        "ハズレのない定番。その店の看板メニューを迷わず選ぶ。",
        "写真映えするメニュー。ビジュアルと盛り付けがおしゃれなものを選ぶ。",
        "「なんか今日はこれが食べたい気分。」名前だけ見てピンときた新メニューに挑戦する。",
        "「何が好き？食べたいの2つ頼んで、僕がもう1つ選ぶよ。」",
      ],
    },
    5: {
      question: "「今日、私ちょっと疲れて見える？」と聞いたら、彼の反応は？",
      options: [
        "「昨日何時に寝た？コーヒーでも飲もうか？」原因と解決策からまず探す。",
        "「大丈夫？..無理しないで今日は早めに帰ろうか？」まず気持ちを落ち着かせてくれる。",
        "「僕にはいつも通り可愛く見えるけど？早く甘いもの食べに行こう！」ちゃっかり気分を上げてくれる。",
        "「僕もちょっと疲れてるけど、一緒に美味しいもの食べて元気出そう！」",
        "「え？俺から見たら大丈夫そうだけど..とりあえず座って少し休もう。」ぶっきらぼうだけど行動で気遣ってくれる。",
      ],
    },
    6: {
      question: "ご飯の後に出たら雨が降っている。傘が1本しかないとき、彼の対処法は？",
      options: [
        "「ちょっと待って、コンビニの場所もう把握済み！」10秒でもう1本買ってくる。",
        "「むしろラッキー！」傘を私の方に傾けて、ぴったりくっついて歩く。",
        "「雨もなかなか風情があるね。近くのカフェで雨を眺めながら過ごさない？」",
        "「服が濡れちゃうよ。とりあえず近くの建物に入って雨宿りしよう。」",
      ],
    },
    7: {
      question: "カフェで「もし私たちが別れたらどうなると思う？」と聞いたら、彼の反応は？",
      options: [
        "「急にどうしたの？何かあった？」理由を論理的に聞こうとする。",
        "「想像するだけで悲しすぎる..絶対に別れないでいよう。」感情的になって共感する。",
        "「別れるわけないでしょ～ずっと僕のそばにいてよ！」冗談っぽく雰囲気を変える。",
        "「うーん..でも今うまくいってるじゃん？未来のことはその時考えよう。」",
      ],
    },
    8: {
      question: "デート中にちょっとした誤解で気まずくなったとき、彼のスタイルは？",
      options: [
        "「これはこういう理由でそうなったんだよ。」論理的に状況を説明して、すぐ誤解を解く。",
        "「嫌な思いさせてごめん..気が済むまで待つよ。」私の感情をまず気遣う。",
        "「もういいや！美味しいもの食べて気分転換しよう！」雰囲気を変えようとする。",
        "「僕が何を間違えたか、ゆっくり教えてくれる？直したいから。」",
        "「...とりあえず外に出て少し歩こう。」黙って時間を置いて、感情を落ち着かせようとする。",
      ],
    },
    9: {
      question: "私の写真を撮ってくれるとき、彼のスタイルは？",
      options: [
        "「水平をしっかり合わせて、足元はラインに揃えないと。」完璧な構図のために何枚も撮る。",
        "「今の表情すごくいい！」雰囲気と一瞬の感性を捉えることに集中する。",
        "「最高の一枚が撮れるまで撮り続けるよ！」褒めまくりながら熱心にシャッターを押す。",
        "「はい、撮るよ？ 1、2、3！」素直に撮ってすぐ見せてくれる。",
      ],
    },
    11: {
      question: "私が用意したプレゼントが彼の好みと正反対だったとき、彼の反応は？",
      options: [
        "「本当に感動した..僕のことを思って選んでくれたその気持ちが嬉しい。」",
        "「わあ、ありがとう！大事に使うね！」リアクションは大きいけど、内心では活用法を考えている様子。",
        "「準備大変だったでしょ。でも次はこういうスタイルだともっと嬉しいかも！」",
        "「ありがとう。でもこれ、僕より君の方が似合うんじゃない？」",
        "「えっ、これどこで見つけたの？てかこういうの好きなんだけど、なんでわかったの？」素直に感動が溢れる。",
      ],
    },
    12: {
      question: "デートが終わって別れるとき、彼の締めくくりスタイルは？",
      options: [
        "「今日は本当に幸せだった～」一緒に撮った写真を見返しながらほっこりする。",
        "「今日の出費をまとめて、明日の予定もチェックしなきゃ。」きっちり締めくくる。",
        "「さっきのレストラン美味しかったなあ..次はあそこに行こうって言わなきゃ。」",
        "「今日も充実してたな！さて、自分の時間だ！」",
      ],
    },
    13: {
      question: "SNSに二人の写真を投稿するとき、彼のスタイルは？",
      options: [
        "「この写真すごくいい！載せてもいい？」必ず同意を求めて、キャプションも考え抜いて投稿する。",
        "「SNSあんまりやらないから..」投稿するよりスマホのギャラリーに大切に保存する派。",
        "「これ見て！僕たちめっちゃお似合いだよね～」自慢げにアップして反応を楽しむ。",
        "写真は撮るけど投稿はしない。公開よりも二人だけの思い出を大切にする。",
        "「フィルター何がいいかな？」感性的に加工してストーリーに載せる。",
      ],
    },
    14: {
      question: "長距離移動中、一緒に過ごす時間での彼の様子は？",
      options: [
        "事前にプレイリストを作ってきて、一緒に聴こうと提案する。",
        "静かに私の肩にもたれて眠ったり、窓の外をぼんやり眺めている。",
        "「暇だからゲームしない？」いろいろと一緒にできることを探す。",
        "「ここに美味しいお店があるって！途中で降りて食べていかない？」リアルタイムで立ち寄りスポットを検索する。",
        "移動時間を使って、これからの予定やスケジュールを整理する。",
      ],
    },
    15: {
      question: "記念日を祝う方法で、彼のスタイルは？",
      options: [
        "1ヶ月前からレストランの予約、プレゼントリストまで抜かりなく準備する。",
        "「記念日いつだっけ..？」日付は覚えていないけど、教えてもらえば全力を尽くす。",
        "「記念日だから特別なことしよう！」自分でイベントを企画するのを楽しむ。",
        "手紙や手書きのカードなど、気持ちのこもったアナログな贈り物を用意する。",
        "「毎日が記念日だよ～」特別な日より、日常でコツコツ愛情を示すタイプ。",
        "「何か欲しいものある？言って！」相手が本当に欲しいものを直接聞いて買ってくれる。",
      ],
    },
  },

  zh: {
    1: {
      question: "决定约会路线时，他的风格是？",
      options: [
        "「去这里吧！」已经从美食到路线全部规划好了，计划满分。",
        "「你想吃什么？」先问我的意见，再小心翼翼地提出建议。",
        "「我们随便走走看吧？」随性地跟着感觉走。",
        "「想去氛围好的地方。」疯狂搜索浪漫的约会地点。",
        "「先去这里吧？想带你吃好吃的..」甜蜜又自然地带领节奏。",
      ],
    },
    2: {
      question: "在约会地点发现我时，他的反应是？",
      options: [
        "「嘿~！这里这里！」远远地就大力挥手，笑容灿烂。",
        "「辛苦你了。」温柔地微笑，自然地帮我拿东西。",
        "安静地等着目光相遇，然后害羞地走过来打招呼。",
        "「刚好到？饿了吧？直接走吧？」酷酷地安排下一个行程。",
      ],
    },
    3: {
      question: "在拥挤的热门地点，如果我说「人太多了，好累..」他的反应是？",
      options: [
        "「那我们直接去别的地方吧？我知道附近有个安静的地方。」",
        "「辛苦了..再坚持一下！吃完了请你吃好吃的。」",
        "「抱歉，我应该提前查清楚的..要不先坐下来休息一会儿？」",
        "「周末到哪都是这样。再等一会儿就轮到我们了。」",
      ],
    },
    4: {
      question: "点菜时，他最看重的是什么？",
      options: [
        "不出错的经典选择。直接点这家店的招牌菜。",
        "拍照好看的菜品。选择摆盘精致、颜值高的菜。",
        "「今天不知道为什么特别想吃这个。」光看名字就冲动尝试新菜品。",
        "「你喜欢什么？你先点两个想吃的，我再加一个。」",
      ],
    },
    5: {
      question: "如果我问「我今天看起来很累吗？」，他的反应是？",
      options: [
        "「昨天几点睡的？要不要喝杯咖啡？」先找原因和解决办法。",
        "「哎呀..心疼。今天别勉强了，早点回去吧？」先安抚我的情绪。",
        "「在我眼里你一直很好看啊？快去吃点甜的补充能量！」用甜言蜜语逗我开心。",
        "「我今天也有点累，我们一起去吃点好的打打气吧！」",
        "「真的吗？我看着觉得还好啊..先坐下来休息一下吧。」虽然看起来不太会说话，但会用行动照顾你。",
      ],
    },
    6: {
      question: "吃完饭出来发现下雨了，只有一把伞时，他的应对方式是？",
      options: [
        "「等一下，便利店位置已经锁定了！」10秒内冲去买了另一把伞回来。",
        "「这样更好！」把伞往我这边倾斜，紧紧贴着一起走。",
        "「下雨也挺有情调的。去附近的咖啡厅看看雨景吧？」",
        "「衣服会湿透的。先到最近的建筑里面避一下雨吧。」",
      ],
    },
    7: {
      question: "在咖啡厅里如果我问「如果我们分手了会怎样？」，他的反应是？",
      options: [
        "「怎么突然说这种话？发生什么事了？」理性地追问原因。",
        "「光是想想就太难过了..我们永远不要分手。」感性地代入情感。",
        "「分什么手～你得一辈子待在我身边！」用开玩笑的方式化解气氛。",
        "「嗯..但我们现在不是很好吗？以后的事以后再说吧。」",
      ],
    },
    8: {
      question: "约会中因为小误会气氛变冷时，他的风格是？",
      options: [
        "「事情是这样的。」用逻辑解释情况，马上消除误会。",
        "「让你不开心了，对不起..我等你气消了再说。」先顾及我的感受。",
        "「算了算了！我们去吃点好的，心情就好了！」试图转换气氛。",
        "「你能慢慢告诉我我哪里做错了吗？我想改正。」",
        "「...先出去走走吧。」沉默不语，给彼此时间冷静下来。",
      ],
    },
    9: {
      question: "帮我拍照时，他的风格是？",
      options: [
        "「水平要对齐，脚要踩在线上。」为了完美构图反复拍好几次。",
        "「你现在的表情太好了！」专注于捕捉氛围和那一瞬间的感觉。",
        "「拍到最满意的为止！」一边夸我一边热情地按快门。",
        "「来，拍了啊？一、二、三！」老实地拍完直接给我看。",
      ],
    },
    11: {
      question: "当我准备的礼物完全不合他的口味时，他的反应是？",
      options: [
        "「真的好感动..你为我挑选礼物的这份心意太珍贵了。」",
        "「哇谢谢！我会好好用的！」反应很大，但内心在想怎么用。",
        "「你准备一定花了不少心思。不过下次送这种风格的话我会更喜欢！」",
        "「谢谢。不过这个我觉得你用比我用更合适。」",
        "「哇这个哪来的？等等，你怎么知道我喜欢这种东西？」真诚又直率地表达感动。",
      ],
    },
    12: {
      question: "约会结束道别时，他的收尾风格是？",
      options: [
        "「今天真的好幸福～」回看一起拍的照片，满脸甜蜜。",
        "「整理一下今天的开销，再确认明天的安排。」干净利落地收尾。",
        "「刚才那家店真好吃..下次一定要再去。」",
        "「今天也玩得很充实！好了，接下来是我的个人时间了？」",
      ],
    },
    13: {
      question: "在社交媒体上发我们的合照时，他的风格是？",
      options: [
        "「这张照片拍得真好！可以发吗？」一定会征求同意，配文也斟酌再三才发。",
        "「我不怎么用社交媒体..」比起发帖，更喜欢珍藏在手机相册里。",
        "「你看这张！我们真的超配的～」自豪地上传，享受大家的反应。",
        "照片会拍，但不会发。比起公开分享，更珍惜两个人的回忆。",
        "「用什么滤镜好呢？」用感性的方式编辑后发到动态上。",
      ],
    },
    14: {
      question: "长途出行中一起度过的时间里，他的样子是？",
      options: [
        "提前做好歌单，提议一起听歌。",
        "安静地靠在我的肩膀上打盹，或者发呆看着窗外。",
        "「好无聊，玩个游戏吧？」找各种可以一起做的事情。",
        "「这里有家好吃的！中途下车吃一顿吧？」实时搜索沿途美食。",
        "利用路上的时间整理接下来的行程和计划。",
      ],
    },
    15: {
      question: "庆祝纪念日的方式上，他的风格是？",
      options: [
        "提前一个月就预订餐厅，连礼物清单都准备得滴水不漏。",
        "「纪念日是哪天来着..？」虽然记不住日子，但提醒后会全力以赴。",
        "「纪念日要做点特别的！」喜欢自己亲手策划活动。",
        "准备手写信或贺卡等充满心意的手工礼物。",
        "「每天都是纪念日嘛～」比起特别的日子，更注重在日常中持续表达爱意。",
        "「你有什么想要的吗？说吧！」直接问对方真正想要什么，然后买给你。",
      ],
    },
  },
};

// ─────────────────────────────────────────────
// 여자친구 테토 농도 분석 (Girlfriend) - 15 questions
// ─────────────────────────────────────────────
export const QUESTIONS_GIRLFRIEND_I18N: QuestionsI18nMap = {
  en: {
    1: {
      question: "When deciding on a weekend date spot, what's her style?",
      options: [
        "\"Let's go here!\" She already has the hotspot list and route all planned out.",
        "\"Let's do whatever you want~\" she says, while subtly waiting for me to choose.",
        "\"I heard this place is pretty these days.\" She searches for Instagram-worthy spots.",
        "\"Let's just meet up and decide then?\" She goes with the flow, no plans needed.",
        "\"Wanna check this place out? Let's eat something good together~\" She naturally takes the lead.",
      ],
    },
    2: {
      question: "When I arrive a bit late to our meeting spot, how does she react?",
      options: [
        "\"Why are you late?\" She asks the reason and firmly tells me not to be late next time.",
        "\"It must have been tough getting here. I'm fine~\" She smiles it off, but seems slightly down.",
        "\"Hey~ You owe me something delicious!\" She playfully pouts and lets it slide naturally.",
        "(She's also late) \"It's fine! I just got here too!\" She coolly understands.",
      ],
    },
    3: {
      question: "When choosing a menu at a restaurant, what does she say most often?",
      options: [
        "\"I'm fine with anything! Just order what you want.\" (But sometimes she vetoes my choice.)",
        "\"This place is known for this dish.\" She carefully picks the best-reviewed signature menu.",
        "\"This would look amazing in photos!\" She eyes the most photogenic dish over taste.",
        "\"I want this AND that!\" She has too many things she wants to eat and can't decide.",
      ],
    },
    4: {
      question: "When I open up about being stressed with work or studying, how does she respond?",
      options: [
        "\"That person/situation was in the wrong!\" She takes my side and empathizes emotionally.",
        "\"You must have had a hard time. Let's eat something good today and get some rest.\" She warmly comforts me.",
        "\"Then how about trying this?\" She analyzes the situation and suggests practical solutions.",
        "\"You can do it! Cheer up!\" She tries to lift my spirits with bright energy.",
      ],
    },
    5: {
      question: "At a cute cafe, what's her attitude toward getting the perfect shot?",
      options: [
        "\"Make sure it's level and retake it!\" She coaches the angles until she's satisfied — fully committed.",
        "\"Just take it casually~\" she says, but she's over the moon when the photo turns out great.",
        "\"Wow, the background is so pretty right now! Let's take a selfie together!\" She prefers photos with me.",
        "\"I love the vibe right now more than photos.\" She takes one or two and focuses on conversation.",
        "\"Isn't this angle better?\" She personally adjusts the pose and angle to create the perfect shot.",
      ],
    },
    6: {
      question: "When we walk past something she's been wanting!",
      options: [
        "\"Wow, that's so pretty!\" She can't take her eyes off it, but doesn't quite ask me to buy it.",
        "\"I'll save up and buy it later~\" She plans ahead and makes a mental note for next time.",
        "\"Babe, can you get me that? (sparkle)\" She drops a hint with unabashed aegyo.",
        "\"It's pretty, but I don't really need it right now.\" She's very practical and coolly walks past.",
      ],
    },
    7: {
      question: "When we get into a small argument, what's her communication style?",
      options: [
        "She logically lays out point by point what I did wrong.",
        "\"I'm just upset..\" Rather than specific reasons, she wants me to understand her feelings first.",
        "When she's angry, she goes quiet and needs some alone time.",
        "\"I'm sorry, let's not fight!\" She makes the first move to reconcile and ease the tension.",
      ],
    },
    8: {
      question: "When she's out with friends, what's her texting style with me?",
      options: [
        "\"Look what I'm eating!\", \"You won't believe what someone said!\" She live-reports everything.",
        "\"I'll have fun and text you when I'm heading home!\" She lets me know in advance and focuses on hanging out.",
        "She checks on me from time to time and sweetly says \"I was thinking of you.\"",
        "Her replies are quite slow, but when they come, they're long and thoughtful.",
        "\"Check out this photo I just took~\" She shares fun moments through photos.",
      ],
    },
    9: {
      question: "When I prepare a surprise gift, what's her very first reaction?",
      options: [
        "\"OMG! When did you prepare this?\" She explodes with excitement and takes proof shots right away.",
        "(Tears up) She's touched by the thought and effort I put into it.",
        "\"Thank you! But this wasn't expensive, was it?\" Half worried, half grateful — she thinks about the price first.",
        "\"Wow, I actually needed this!\" She's totally satisfied if the gift is practical.",
      ],
    },
    11: {
      question: "When I walk her home after a date, what's her final moment like?",
      options: [
        "She keeps turning back and waving until she's through the front door.",
        "\"Text me when you get home!\" She says a quick goodbye and coolly goes inside.",
        "\"I don't want this to end.. Can we stay together a little longer?\" She lingers at the door for a while.",
        "\"Today was so fun, get home safe!\" She gives a warm goodbye with feedback on the date.",
        "\"What are you doing tomorrow? Can we meet again?\" She's already planning the next date before saying goodbye.",
      ],
    },
    12: {
      question: "During late-night phone calls, how does she usually wrap up the conversation?",
      options: [
        "\"You worked hard today, I love you!\" She ends with sweet words of affection.",
        "\"What time should we text tomorrow?\" She confirms the next day's schedule before hanging up.",
        "\"I'm sleepy.. you hang up first~\" She tries to keep the call going until the very end.",
        "\"Let's talk more when we meet tomorrow. Good night!\" She says a clean goodbye and falls asleep.",
      ],
    },
    13: {
      question: "When posting our photos on social media, what's her style?",
      options: [
        "\"Can I post this?\" She always checks with me first and carefully picks the caption and filter.",
        "She prefers saving photos in her gallery rather than social media. She values private memories over public posts.",
        "\"Our photo turned out so well!\" She proudly posts it on stories and enjoys the reactions.",
        "She takes selfies all the time but never posts them. She saves them like a photo album for later.",
        "\"Doesn't this filter give it a vibe?\" She edits with aesthetic flair and posts it beautifully.",
      ],
    },
    14: {
      question: "During a long trip together, what is she like?",
      options: [
        "She makes a playlist herself and listens together to set the mood.",
        "She gently leans on my shoulder and dozes off, or quietly enjoys gazing out the window.",
        "\"Let's do this together!\" She looks for games or quizzes to play together.",
        "\"There's a good restaurant here! Should we stop for a bit?\" She searches for food spots along the way in real time.",
        "She suggests using the travel time to plan the upcoming schedule together.",
      ],
    },
    15: {
      question: "When it comes to celebrating anniversaries, what's her style?",
      options: [
        "A perfectionist who books a restaurant a month in advance and even coordinates matching outfits.",
        "\"When was our anniversary again..?\" She's bad with dates but keeps a reminder set.",
        "\"What do you want to do for our anniversary?\" She likes asking me and planning it together.",
        "She prefers heartfelt analog gestures, like handwritten letters or handmade gifts.",
        "\"Every day is an anniversary~\" She's the type who shows love consistently in everyday moments rather than special days.",
        "\"Let's do this on that day!\" She enjoys personally planning surprise events.",
      ],
    },
  },

  ja: {
    1: {
      question: "週末のデートスポットを決めるとき、彼女のスタイルは？",
      options: [
        "「ここに行こう！」もうホットスポットリストと移動ルートまで全部決めてくる。",
        "「あなたのやりたいことしよう～」と言いながら、さりげなく私に選ばせようとする。",
        "「最近ここがかわいいんだって。」インスタ映えする場所を中心に探す。",
        "「とりあえず会ってから決めない？」計画なしで、その日の気分に任せる派。",
        "「ここ行ってみない？一緒においしいもの食べよ～」自然に雰囲気をリードする。",
      ],
    },
    2: {
      question: "待ち合わせ場所に私が少し遅れたとき、彼女の反応は？",
      options: [
        "「なんで遅れたの？」遅れた理由を聞いて、次は遅れないようにとはっきり言う。",
        "「来るの大変だったでしょ？私は大丈夫だよ～」笑って流してくれるけど、少し元気がなさそう。",
        "「もう～美味しいものおごってよね！」冗談っぽく拗ねて、自然に流す。",
        "（本人も遅刻して）「大丈夫！私もさっき来たところ！」とクールに理解してくれる。",
      ],
    },
    3: {
      question: "レストランでメニューを選ぶとき、彼女がよく言うセリフは？",
      options: [
        "「何でもいいよ！食べたいもの頼んで。」（でも私が選んだものを却下することもある）",
        "「この店はこれが看板メニューなんだって。」ハズレのないベストメニューをしっかり調べる。",
        "「これ絶対写真映えするよ！」味より見た目がかわいいメニューに目がいく。",
        "「これも食べたいし、あれも食べたい！」食べたいものが多すぎて決められない。",
      ],
    },
    4: {
      question: "仕事や勉強がつらいと打ち明けたとき、彼女は？",
      options: [
        "「その人/状況が悪いよ！」私の味方になって一緒に怒ってくれて、感情的に共感してくれる。",
        "「大変だったね。今日は美味しいもの食べてゆっくり休もう。」温かく慰めてくれる。",
        "「じゃあこうしてみたら？」状況を分析して、実際的な解決策を提案する。",
        "「あなたならできるよ！元気出して！」明るいエネルギーでテンションを上げようとしてくれる。",
      ],
    },
    5: {
      question: "おしゃれなカフェに行ったとき、彼女の「ベストショット」に対する姿勢は？",
      options: [
        "「水平ちゃんと合わせてもう一回撮って！」満足するまで構図をコーチしながら全力で取り組む。",
        "「適当に撮っていいよ～」と言うけど、仕上がりがよければ世界一幸せそうにする。",
        "「わ、今の背景めっちゃきれい！一緒にセルカ撮ろ！」私と一緒に撮る方が好き。",
        "「写真より今のこの雰囲気が好き。」写真を一枚二枚撮って会話に集中する。",
        "「この角度の方がよくない？」自らポーズと角度を調整して最高の一枚を作ってくれる。",
      ],
    },
    6: {
      question: "歩いていて、彼女が欲しがっていたものを見つけたとき！",
      options: [
        "「わあ、あれ超かわいい！」目が離せないけど、買ってとは言い出せない。",
        "「いつかお金貯めて買おう～」計画的に次の機会を考える。",
        "「ねえ、あれ買ってくれない？（キラキラ）」堂々と甘えたヒントを出す。",
        "「かわいいけど今は要らないかな。」すごく現実的にクールに通り過ぎる。",
      ],
    },
    7: {
      question: "ちょっとした口喧嘩になったとき、彼女の話し方は？",
      options: [
        "一つ一つ論理的に、私が何を間違えたか指摘する。",
        "「ただ寂しいの..」具体的な理由より、まず寂しい気持ちをわかってほしがる。",
        "怒ると口を閉じて、一人の時間が欲しくなる。",
        "「ごめんね、喧嘩しないでおこう！」先に仲直りの姿勢を見せて雰囲気を和らげようとする。",
      ],
    },
    8: {
      question: "彼女が友達と遊びに行ったとき、私への連絡スタイルは？",
      options: [
        "「今これ食べてる！」「誰がこんなこと言ったの！」リアルタイムで状況を実況するようにメッセージを送ってくる。",
        "「楽しんで、帰る時に連絡するね！」先に伝えてから遊びに集中する。",
        "ちょくちょく私の様子を聞きながら「あなたのこと思い出して連絡した」と優しく言ってくれる。",
        "返信はかなり遅いけど、来る時は長くて丁寧なメッセージが届く。",
        "「さっき撮った写真見て～」楽しい瞬間を写真でシェアしてくれる。",
      ],
    },
    9: {
      question: "サプライズプレゼントを用意したとき、彼女がまずする反応は？",
      options: [
        "「えっ、すごい！いつ準備したの？」大興奮で、その場ですぐ記念写真を撮る。",
        "（涙ぐみ）私のことを思って準備してくれた気持ちに感動する。",
        "「ありがとう！でもこれ高くなかった？」心配半分、嬉しさ半分でまず値段を気にする。",
        "「わあ、ちょうど欲しかったやつ！」実用的なプレゼントだと大満足する。",
      ],
    },
    11: {
      question: "デートの後、家まで送ったときの彼女の最後の姿は？",
      options: [
        "玄関に入るまでずっと振り返りながら手を振ってくれる。",
        "「家に着いたらメッセージしてね！」短く挨拶してクールに入っていく。",
        "「寂しい..もう少しだけ一緒にいちゃダメ？」玄関の前でしばらくウロウロする。",
        "「今日すごく楽しかった、気をつけてね！」優しい挨拶と一緒に今日のデートの感想を話してくれる。",
        "「明日何するの？明日も会える？」別れる前にもう次の約束をしようとする。",
      ],
    },
    12: {
      question: "寝る前の電話で、彼女がよくする会話の締めくくりは？",
      options: [
        "「今日もお疲れ様、大好きだよ！」甘い愛情表現で締めくくる。",
        "「明日は何時に連絡しようか？」次の予定を確認してから終わる。",
        "「眠い..あなたから先に切って～」最後まで電話を続けようとする。",
        "「詳しくは明日会って話そう。おやすみ！」さっぱり挨拶して眠りにつく。",
      ],
    },
    13: {
      question: "SNSに二人の写真を投稿するとき、彼女のスタイルは？",
      options: [
        "「この写真載せてもいい？」私に必ず確認して、キャプションもフィルターもこだわって投稿する。",
        "SNSよりギャラリーに大切に保管する。公開より二人だけの記録を大事にする。",
        "「二人の写真めっちゃよく撮れた！」自慢げにストーリーに載せて反応を楽しむ。",
        "セルカは毎回撮るけど載せない。後でアルバムみたいにまとめて保管するタイプ。",
        "「このフィルター、雰囲気あるよね？」感性たっぷりの編集でおしゃれに投稿する。",
      ],
    },
    14: {
      question: "長距離移動中、一緒に過ごす時間での彼女の様子は？",
      options: [
        "自分でプレイリストを作ってきて、一緒に聴きながら気分を上げる。",
        "私の肩にそっともたれて眠ったり、窓の外を眺めて静かな時間を楽しむ。",
        "「これ一緒にやろう！」ゲームやクイズなど、一緒にできることを探す。",
        "「ここに美味しいお店があるって！ちょっと降りて食べていかない？」リアルタイムで立ち寄りスポットを検索する。",
        "移動時間にこれからの予定を一緒に整理しようと提案する。",
      ],
    },
    15: {
      question: "記念日を祝う方法で、彼女のスタイルは？",
      options: [
        "1ヶ月前からレストラン予約、お揃いコーデまで完璧に準備する完璧主義者。",
        "「記念日いつだっけ..？」日付は覚えてないけど、リマインダーに登録してある。",
        "「記念日は何したい？」私に聞いて一緒に計画するのが好き。",
        "手紙や手作りのプレゼントなど、気持ちのこもったアナログ感性を好む。",
        "「毎日が記念日じゃん～」特別な日より、日常でコツコツ愛情を示すタイプ。",
        "「この日にこれしよう！」サプライズイベントを自分で企画するのが好き。",
      ],
    },
  },

  zh: {
    1: {
      question: "决定周末约会地点时，她的风格是？",
      options: [
        "「去这里吧！」已经把热门打卡点和路线全部安排好了。",
        "「你想做什么就做什么吧～」嘴上这么说，其实在等我来选。",
        "「最近听说这里很好看。」专门搜索ins风满满的地方。",
        "「先见面再说吧？」不做计划，随那天的心情走。",
        "「去这里看看吧？一起吃点好吃的～」自然而然地引导氛围。",
      ],
    },
    2: {
      question: "我迟到了一点到达约会地点时，她的反应是？",
      options: [
        "「为什么迟到了？」问清楚原因，明确说下次不要再迟到。",
        "「过来辛苦了吧？我没事～」笑着带过，但看起来有点低落。",
        "「哼～你得请我吃好吃的！」撒娇式地闹一下，自然地就过去了。",
        "（自己也迟到了）「没事！我也刚到！」很潇洒地表示理解。",
      ],
    },
    3: {
      question: "在餐厅点菜时，她最常说的话是？",
      options: [
        "「我都行！你想吃什么就点什么。」（但有时候会否决我的选择。）",
        "「这家店的招牌是这个。」仔细研究不踩雷的人气菜品。",
        "「这道菜拍照肯定很好看！」比起味道，更关注颜值高的菜。",
        "「这个也想吃那个也想吃！」想吃的太多，很难做决定。",
      ],
    },
    4: {
      question: "当我倾诉工作或学习的压力时，她会？",
      options: [
        "「那个人/那种情况才有问题！」站在我这边一起生气，从情感上共鸣。",
        "「辛苦了吧？今天吃点好的好好休息吧。」温柔地安慰和照顾我。",
        "「那你试试这样呢？」分析情况，提出实际的解决方案。",
        "「你一定可以的！加油！」用积极的能量试图给我打气。",
      ],
    },
    5: {
      question: "去了一家漂亮的咖啡厅时，她对拍「人生照」的态度是？",
      options: [
        "「水平对齐再拍一张！」一直指导构图直到满意为止，全力以赴。",
        "「随便拍拍就好～」嘴上这么说，照片拍好了就开心到飞起。",
        "「哇，现在的背景好好看！一起自拍吧！」比起单人照更喜欢和我一起拍。",
        "「比起拍照，更喜欢现在的氛围。」拍一两张就专注于聊天。",
        "「这个角度是不是更好看？」亲自帮忙调整姿势和角度，打造最完美的照片。",
      ],
    },
    6: {
      question: "走在路上发现了她一直想要的东西！",
      options: [
        "「哇，那个好好看！」眼睛移不开，但不太好意思让我买。",
        "「以后攒钱再买吧～」有计划地留到下次。",
        "「亲爱的，给我买那个好不好？（闪亮）」毫不掩饰地撒娇暗示。",
        "「好看是好看，但现在不需要。」非常现实地酷酷走过。",
      ],
    },
    7: {
      question: "当我们发生小争吵时，她的说话方式是？",
      options: [
        "一条一条地有逻辑地指出我哪里做错了。",
        "「就是觉得委屈..」比起具体的原因，更希望我先理解她的感受。",
        "生气的时候会先不说话，需要一个人待一会儿。",
        "「对不起，我们不要吵了！」先释放和解信号，试图缓和气氛。",
      ],
    },
    8: {
      question: "她和朋友们出去聚会时，给我发消息的风格是？",
      options: [
        "「我在吃这个！」「你猜谁说了什么！」实时播报现场情况。",
        "「我先玩，回家的时候联系你！」提前说好然后专心玩。",
        "时不时问我在干嘛，温柔地说「想你了才联系的」。",
        "回复挺慢的，但每次回复都很长很用心。",
        "「你看我刚拍的照片～」用照片分享开心的瞬间。",
      ],
    },
    9: {
      question: "当我准备了惊喜礼物时，她最先的反应是？",
      options: [
        "「天哪！你什么时候准备的？」超级激动，当场就拍认证照。",
        "（眼眶湿润）被我为她用心准备的心意感动到了。",
        "「谢谢！但这个不贵吧？」一半担心一半感激，先想到价格。",
        "「哇，我正好需要这个！」如果是实用的礼物就非常满意。",
      ],
    },
    11: {
      question: "约会结束送她到家时，她最后的样子是？",
      options: [
        "一直回头挥手，直到走进家门为止。",
        "「到家了发消息给我！」简短告别后潇洒地进去了。",
        "「好舍不得..能不能再待一会儿？」在门口徘徊好久。",
        "「今天太开心了，路上小心！」温柔地告别，并分享今天约会的感想。",
        "「你明天干嘛？明天也能见面吗？」分开之前就已经在约下次了。",
      ],
    },
    12: {
      question: "睡前打电话时，她通常怎么结束对话？",
      options: [
        "「今天辛苦了，我爱你！」用甜蜜的情话结尾。",
        "「我们明天几点联系？」确认好第二天的安排再挂电话。",
        "「困了..你先挂吧～」想把通话一直延续到最后。",
        "「详细的明天见面再说吧，晚安！」干脆利落地道别后入睡。",
      ],
    },
    13: {
      question: "在社交媒体上发我们的合照时，她的风格是？",
      options: [
        "「这张照片可以发吗？」一定会先问我，配文和滤镜都精心挑选后才发。",
        "比起社交媒体更喜欢保存在相册里。比起公开分享，更珍惜两个人的记录。",
        "「我们的照片拍得真好！」自豪地发到动态上，享受大家的反应。",
        "每次都拍自拍但从不发。把照片像相册一样收集起来保存的类型。",
        "「这个滤镜有没有感觉？」用满满的感性编辑后精心发布。",
      ],
    },
    14: {
      question: "长途出行中一起度过的时间里，她的样子是？",
      options: [
        "自己做好歌单，一起听歌来活跃气氛。",
        "轻轻靠在我的肩膀上打盹，或者望着窗外享受安静的时光。",
        "「这个一起玩吧！」找游戏或者猜谜等一起做的事情。",
        "「这里有家好吃的！下车吃一顿再走吧？」实时搜索沿途美食。",
        "提议利用路上的时间一起整理接下来的行程。",
      ],
    },
    15: {
      question: "庆祝纪念日的方式上，她的风格是？",
      options: [
        "提前一个月就订好餐厅、搭配好情侣穿搭，准备得无懈可击的完美主义者。",
        "「纪念日是哪天来着..？」虽然记不住日子，但设了提醒。",
        "「纪念日你想做什么？」喜欢问我然后一起计划。",
        "喜欢手写信或亲手制作的礼物等充满心意的手工感性。",
        "「每天都是纪念日嘛～」比起特别的日子，更注重在日常中持续表达爱意。",
        "「这天我们做这个吧！」喜欢亲自策划惊喜活动。",
      ],
    },
  },
};
