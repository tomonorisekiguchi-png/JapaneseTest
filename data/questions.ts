import { Question } from "@/types";

const VOCAB_READING_INSTR = "次の文の　　の言葉の読み方として最もよいものを、1・2・3・4から一つ選んでください。";
const VOCAB_CONTEXT_INSTR  = "（　）に入れるのに最もよいものを、1・2・3・4から一つ選んでください。";
const VOCAB_MEANING_INSTR  = "　　の言葉と意味が最も近いものを、1・2・3・4から一つ選んでください。";
const GRAMMAR_INSTR        = "（　）に入れるのに最もよいものを、1・2・3・4から一つ選んでください。";
const READING_INSTR        = "次の文章を読んで、質問に答えてください。答えは1・2・3・4から一つ選んでください。";
const LISTENING_INSTR      = "音声を聞いて、質問に答えてください。答えは1・2・3・4から一つ選んでください。";

export const questions: Question[] = [

  // ═══════════════════════════════════════════════════════════════
  // N5 VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  { id:"n5-v1", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"毎日「学校」へ行きます。",
    options:["がっこう","がくこう","かっこう","がくしょう"], correctIndex:0,
    explanation:"学校 = がっこう (school)." },

  { id:"n5-v2", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「電話」してください。",
    options:["でんわ","でんき","てんわ","てんき"], correctIndex:0,
    explanation:"電話 = でんわ (telephone)." },

  { id:"n5-v3", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「右」に曲がってください。",
    options:["みぎ","ひだり","うえ","した"], correctIndex:0,
    explanation:"右 = みぎ (right)." },

  { id:"n5-v4", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「百円」のお菓子を買いました。",
    options:["ひゃくえん","ひゃっえん","はくえん","もえん"], correctIndex:0,
    explanation:"百円 = ひゃくえん (100 yen)." },

  { id:"n5-v5", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「火曜日」に来てください。",
    options:["かようび","すいようび","もくようび","きんようび"], correctIndex:0,
    explanation:"火曜日 = かようび (Tuesday)." },

  { id:"n5-v6", level:"N5", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「東口」で待っています。",
    options:["ひがしぐち","にしぐち","きたぐち","みなみぐち"], correctIndex:0,
    explanation:"東口 = ひがしぐち (east exit)." },

  { id:"n5-v7", level:"N5", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"図書館で本を（　）ます。",
    options:["よみ","かき","はなし","かい"], correctIndex:0,
    explanation:"本をよむ (to read a book)." },

  { id:"n5-v8", level:"N5", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"今日は（　）から、コートを着ます。",
    options:["さむい","あつい","すずしい","あたたかい"], correctIndex:0,
    explanation:"さむい (cold) → so you wear a coat." },

  { id:"n5-v9", level:"N5", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"喉が（　）から、水を飲みます。",
    options:["かわいた","つめたい","あつい","ひくい"], correctIndex:0,
    explanation:"喉がかわいた = (my) throat is dry / I'm thirsty." },

  { id:"n5-v10", level:"N5", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"（　）で手を洗います。",
    options:["せっけん","さとう","しお","こむぎこ"], correctIndex:0,
    explanation:"せっけん (soap) — used to wash hands." },

  // ═══════════════════════════════════════════════════════════════
  // N5 GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  { id:"n5-g1", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"公園（　）サッカーをします。",
    options:["で","に","が","は"], correctIndex:0,
    explanation:"で marks the location where an action takes place." },

  { id:"n5-g2", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"東京（　）大阪まで、新幹線で行きます。",
    options:["から","まで","で","に"], correctIndex:0,
    explanation:"から marks the starting point. 東京から大阪まで = from Tokyo to Osaka." },

  { id:"n5-g3", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"日本語（　）勉強しています。",
    options:["を","が","に","で"], correctIndex:0,
    explanation:"を is the direct-object marker. 日本語を勉強する = to study Japanese." },

  { id:"n5-g4", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"教室（　）先生がいます。",
    options:["に","で","が","は"], correctIndex:0,
    explanation:"に marks the location of existence (います/あります)." },

  { id:"n5-g5", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"明日、友達（　）会います。",
    options:["に","を","が","で"], correctIndex:0,
    explanation:"会う takes に. 友達に会う = to meet a friend." },

  { id:"n5-g6", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"暑い（　）、窓を開けました。",
    options:["から","ので","のに","が"], correctIndex:0,
    explanation:"から gives a reason. 暑いから = because it is hot." },

  { id:"n5-g7", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"もっとゆっくり話して（　）ませんか。",
    options:["くれ","あげ","やり","おき"], correctIndex:0,
    explanation:"〜てくれませんか = Won't you please ~? (asking a favour)." },

  { id:"n5-g8", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"宿題を（　）から、テレビを見てもいいですよ。",
    options:["して","した","する","しない"], correctIndex:0,
    explanation:"〜てから = after doing ~. してから = after doing (homework)." },

  { id:"n5-g9", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"日本語が少し（　）ようになりました。",
    options:["話せる","話す","話した","話せた"], correctIndex:0,
    explanation:"〜ようになる = to come to be able to. 話せるようになる = to come to be able to speak." },

  { id:"n5-g10", level:"N5", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"今日は時間（　）ないから、あとで電話します。",
    options:["が","は","を","に"], correctIndex:0,
    explanation:"時間がない = there is no time. が is the subject marker with ない." },

  // ═══════════════════════════════════════════════════════════════
  // N5 READING  — 2 passages × 5 questions
  // ═══════════════════════════════════════════════════════════════
  // Passage A
  { id:"n5-r1a", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pa",
    passage:"たなかさんは 毎日 8時に 家を 出ます。電車に 10分 乗って、駅から 歩いて 5分で 学校に 着きます。学校は 9時に 始まります。たなかさんは 毎日 授業に 遅れません。",
    question:"たなかさんは 家を 何時に 出ますか。",
    options:["7時","8時","9時","8時半"], correctIndex:1,
    explanation:"8時に家を出ます。" },

  { id:"n5-r2a", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pa",
    passage:"たなかさんは 毎日 8時に 家を 出ます。電車に 10分 乗って、駅から 歩いて 5分で 学校に 着きます。学校は 9時に 始まります。たなかさんは 毎日 授業に 遅れません。",
    question:"駅から 学校まで どのくらい かかりますか。",
    options:["5分","10分","15分","20分"], correctIndex:0,
    explanation:"駅から歩いて5分。" },

  { id:"n5-r3a", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pa",
    passage:"たなかさんは 毎日 8時に 家を 出ます。電車に 10分 乗って、駅から 歩いて 5分で 学校に 着きます。学校は 9時に 始まります。たなかさんは 毎日 授業に 遅れません。",
    question:"学校は 何時に 始まりますか。",
    options:["8時","8時半","9時","9時半"], correctIndex:2,
    explanation:"学校は9時に始まります。" },

  { id:"n5-r4a", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pa",
    passage:"たなかさんは 毎日 8時に 家を 出ます。電車に 10分 乗って、駅から 歩いて 5分で 学校に 着きます。学校は 9時に 始まります。たなかさんは 毎日 授業に 遅れません。",
    question:"たなかさんは 学校まで どうやって 行きますか。",
    options:["電車と 歩き","バスと 歩き","自転車","車"], correctIndex:0,
    explanation:"電車に乗って、駅から歩いて学校へ行く。" },

  { id:"n5-r5a", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pa",
    passage:"たなかさんは 毎日 8時に 家を 出ます。電車に 10分 乗って、駅から 歩いて 5分で 学校に 着きます。学校は 9時に 始まります。たなかさんは 毎日 授業に 遅れません。",
    question:"たなかさんは 授業に",
    options:["毎日 遅れません","よく 遅れます","ときどき 遅れます","いつも 遅れます"], correctIndex:0,
    explanation:"毎日授業に遅れません。" },

  // Passage B
  { id:"n5-r1b", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pb",
    passage:"私の 好きな 食べ物は すしです。毎週 日曜日に、家族 みんなで すし屋に 行きます。お父さんは まぐろが 好きです。お母さんは えびが 好きです。私は たまごが 一番 好きです。",
    question:"この 人は 毎週 何曜日に すし屋へ 行きますか。",
    options:["土曜日","日曜日","金曜日","月曜日"], correctIndex:1,
    explanation:"毎週日曜日にすし屋に行きます。" },

  { id:"n5-r2b", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pb",
    passage:"私の 好きな 食べ物は すしです。毎週 日曜日に、家族 みんなで すし屋に 行きます。お父さんは まぐろが 好きです。お母さんは えびが 好きです。私は たまごが 一番 好きです。",
    question:"この 人が 一番 好きな すしは 何ですか。",
    options:["まぐろ","えび","たまご","さけ"], correctIndex:2,
    explanation:"私はたまごが一番好きです。" },

  { id:"n5-r3b", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pb",
    passage:"私の 好きな 食べ物は すしです。毎週 日曜日に、家族 みんなで すし屋に 行きます。お父さんは まぐろが 好きです。お母さんは えびが 好きです。私は たまごが 一番 好きです。",
    question:"お父さんは 何が 好きですか。",
    options:["まぐろ","えび","たまご","さけ"], correctIndex:0,
    explanation:"お父さんはまぐろが好きです。" },

  { id:"n5-r4b", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pb",
    passage:"私の 好きな 食べ物は すしです。毎週 日曜日に、家族 みんなで すし屋に 行きます。お父さんは まぐろが 好きです。お母さんは えびが 好きです。私は たまごが 一番 好きです。",
    question:"誰と すし屋に 行きますか。",
    options:["家族 みんなで","友達と","一人で","先生と"], correctIndex:0,
    explanation:"家族みんなですし屋に行きます。" },

  { id:"n5-r5b", level:"N5", type:"reading", instruction: READING_INSTR,
    passageId:"n5-pb",
    passage:"私の 好きな 食べ物は すしです。毎週 日曜日に、家族 みんなで すし屋に 行きます。お父さんは まぐろが 好きです。お母さんは えびが 好きです。私は たまごが 一番 好きです。",
    question:"この 人の 好きな 食べ物は 何ですか。",
    options:["ラーメン","ピザ","カレー","すし"], correctIndex:3,
    explanation:"私の好きな食べ物はすしです。" },

  // ═══════════════════════════════════════════════════════════════
  // N5 LISTENING
  // ═══════════════════════════════════════════════════════════════
  { id:"n5-l1", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"おはようございます。今日はいい天気ですね。",
    question:"話している人は 今日の 何を 言っていますか。",
    options:["天気がいい","雨が降っている","寒い","夜だ"], correctIndex:0,
    explanation:"いい天気ですね = the weather is nice." },

  { id:"n5-l2", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"すみません、トイレはどこですか。",
    question:"この 人は 何を 探していますか。",
    options:["トイレ","出口","エレベーター","食堂"], correctIndex:0,
    explanation:"トイレはどこですか = where is the toilet?" },

  { id:"n5-l3", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"りんごが3つと、バナナが2つあります。",
    question:"りんごは いくつ ありますか。",
    options:["2つ","3つ","4つ","5つ"], correctIndex:1,
    explanation:"りんごが3つ。" },

  { id:"n5-l4", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"明日は火曜日です。",
    question:"明日は 何曜日ですか。",
    options:["月曜日","火曜日","水曜日","木曜日"], correctIndex:1,
    explanation:"火曜日 = Tuesday." },

  { id:"n5-l5", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このかばんは3000円です。",
    question:"このかばんは いくらですか。",
    options:["300円","1000円","3000円","30000円"], correctIndex:2,
    explanation:"3000円 = 3,000 yen." },

  { id:"n5-l6", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"午後3時に友達と映画を見に行きます。",
    question:"何時に 映画を 見に 行きますか。",
    options:["午後2時","午後3時","午後4時","午後5時"], correctIndex:1,
    explanation:"午後3時 = 3 PM." },

  { id:"n5-l7", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"今日は暑いから、アイスクリームを食べたいです。",
    question:"なぜ アイスクリームを 食べたいですか。",
    options:["寒いから","暑いから","お腹がすいたから","誕生日だから"], correctIndex:1,
    explanation:"暑いから = because it is hot." },

  { id:"n5-l8", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"先生は毎朝8時に学校に来ます。",
    question:"先生は 何時に 学校に 来ますか。",
    options:["7時","8時","9時","10時"], correctIndex:1,
    explanation:"毎朝8時に学校に来ます。" },

  { id:"n5-l9", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"バスは10分ごとに来ます。",
    question:"バスは 何分ごとに 来ますか。",
    options:["5分","10分","15分","30分"], correctIndex:1,
    explanation:"10分ごとに来ます = comes every 10 minutes." },

  { id:"n5-l10", level:"N5", type:"listening", instruction: LISTENING_INSTR,
    audioText:"田中さんはコーヒーが好きじゃないです。紅茶が好きです。",
    question:"田中さんは 何が 好きですか。",
    options:["コーヒー","紅茶","ジュース","水"], correctIndex:1,
    explanation:"紅茶が好きです = likes tea." },

  // ═══════════════════════════════════════════════════════════════
  // N4 VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  { id:"n4-v1", level:"N4", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"会議の「連絡」をお願いします。",
    options:["れんらく","れんけい","りんらく","りんけい"], correctIndex:0,
    explanation:"連絡 = れんらく (contact / notification)." },

  { id:"n4-v2", level:"N4", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「予約」を取りました。",
    options:["よやく","よくやく","ようやく","よいやく"], correctIndex:0,
    explanation:"予約 = よやく (reservation / booking)." },

  { id:"n4-v3", level:"N4", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「丁寧」に説明してください。",
    options:["ていねい","ていない","でいねい","てねい"], correctIndex:0,
    explanation:"丁寧 = ていねい (polite / careful)." },

  { id:"n4-v4", level:"N4", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「集める」のが趣味です。",
    options:["あつめる","あつまる","まとめる","そろえる"], correctIndex:0,
    explanation:"集める = あつめる (to collect / gather)." },

  { id:"n4-v5", level:"N4", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"これは「普通」のことです。",
    options:["ふつう","ふうつ","ふつつ","ほうつう"], correctIndex:0,
    explanation:"普通 = ふつう (ordinary / normal)." },

  { id:"n4-v6", level:"N4", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"薬は食事の（　）に飲んでください。",
    options:["あと","まえ","なか","そと"], correctIndex:0,
    explanation:"食事のあとに薬を飲む = take medicine after meals." },

  { id:"n4-v7", level:"N4", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"電車が（　）から、会議に遅刻しました。",
    options:["おくれた","こわれた","とまった","はしった"], correctIndex:0,
    explanation:"電車が遅れた = the train was late." },

  { id:"n4-v8", level:"N4", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"この仕事は（　）なので、よく確認してください。",
    options:["たいせつ","たのしい","むずかしい","おもしろい"], correctIndex:0,
    explanation:"大切 (taisetsu) = important." },

  { id:"n4-v9", level:"N4", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「決める」",
    options:["to decide","to begin","to continue","to change"], correctIndex:0,
    explanation:"決める = きめる = to decide." },

  { id:"n4-v10", level:"N4", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「我慢する」",
    options:["to endure / put up with","to enjoy","to complain","to celebrate"], correctIndex:0,
    explanation:"我慢する = がまんする = to endure, to be patient." },

  // ═══════════════════════════════════════════════════════════════
  // N4 GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  { id:"n4-g1", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"雨が降っている（　）、傘を持っていきます。",
    options:["ので","から","のに","が"], correctIndex:0,
    explanation:"ので gives a polite reason. 降っているので = because it is raining." },

  { id:"n4-g2", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼は日本語（　）話せます。",
    options:["が","を","に","で"], correctIndex:0,
    explanation:"が marks the object of potential-form verbs. 日本語が話せる = can speak Japanese." },

  { id:"n4-g3", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"朝ごはんを（　）、学校へ行きました。",
    options:["食べて","食べなくて","食べれば","食べると"], correctIndex:0,
    explanation:"〜て connects sequential actions. 食べて、行った = ate, then went." },

  { id:"n4-g4", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"もっとゆっくり話して（　）ますか。",
    options:["もらえ","くれ","あげ","さしあげ"], correctIndex:0,
    explanation:"〜てもらえますか = Could you please ~? (polite request)." },

  { id:"n4-g5", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"この映画は子供（　）見られます。",
    options:["でも","しか","だけ","ばかり"], correctIndex:0,
    explanation:"〜でも = even ~. 子供でも見られる = even children can watch." },

  { id:"n4-g6", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"明日までに報告書を出す（　）があります。",
    options:["必要","べき","ほう","わけ"], correctIndex:0,
    explanation:"〜する必要がある = there is a need to ~." },

  { id:"n4-g7", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼女は泣き（　）話しました。",
    options:["ながら","つつ","てから","つつも"], correctIndex:0,
    explanation:"〜ながら = while doing ~. 泣きながら = while crying." },

  { id:"n4-g8", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"熱がある（　）、学校を休みました。",
    options:["ので","から","のに","が"], correctIndex:0,
    explanation:"ので gives a reason politely. 熱があるので = because I have a fever." },

  { id:"n4-g9", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"友達に誕生日プレゼントを（　）あげました。",
    options:["買って","買い","買う","買った"], correctIndex:0,
    explanation:"〜てあげる = to do something for someone. 買ってあげた = bought (it) for (them)." },

  { id:"n4-g10", level:"N4", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"会議は3時（　）始まる予定です。",
    options:["に","で","が","を"], correctIndex:0,
    explanation:"に marks the time of an event. 3時に始まる = starts at 3 o'clock." },

  // ═══════════════════════════════════════════════════════════════
  // N4 READING  — 2 passages × 5 questions
  // ═══════════════════════════════════════════════════════════════
  // Passage A
  { id:"n4-r1a", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pa",
    passage:"山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。仕事が終わるのは夜6時ごろです。",
    question:"山田さんはどうやって会社へ行きますか。",
    options:["バス","自転車","電車","歩き"], correctIndex:2,
    explanation:"電車で30分かけて会社に着きます。" },

  { id:"n4-r2a", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pa",
    passage:"山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。仕事が終わるのは夜6時ごろです。",
    question:"昼休みは何時間ありますか。",
    options:["30分","1時間","1時間30分","2時間"], correctIndex:1,
    explanation:"12時から1時まで = 1時間。" },

  { id:"n4-r3a", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pa",
    passage:"山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。仕事が終わるのは夜6時ごろです。",
    question:"山田さんは何時に起きますか。",
    options:["6時","6時半","7時","8時"], correctIndex:2,
    explanation:"毎朝7時に起きます。" },

  { id:"n4-r4a", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pa",
    passage:"山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。仕事が終わるのは夜6時ごろです。",
    question:"山田さんの仕事はいつ終わりますか。",
    options:["午後5時ごろ","午後6時ごろ","午後7時ごろ","午後8時ごろ"], correctIndex:1,
    explanation:"仕事が終わるのは夜6時ごろです。" },

  { id:"n4-r5a", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pa",
    passage:"山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。仕事が終わるのは夜6時ごろです。",
    question:"山田さんが家を出るのは何時ですか。",
    options:["7時","7時半","8時","9時"], correctIndex:2,
    explanation:"8時に家を出ます。" },

  // Passage B
  { id:"n4-r1b", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pb",
    passage:"このアパートは駅から歩いて5分のところにあります。家賃は月6万円で、光熱費は別です。ペットは禁止されています。2階以上の部屋は眺めがよいです。",
    question:"このアパートから駅まで歩いて何分かかりますか。",
    options:["3分","5分","10分","15分"], correctIndex:1,
    explanation:"駅から歩いて5分。" },

  { id:"n4-r2b", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pb",
    passage:"このアパートは駅から歩いて5分のところにあります。家賃は月6万円で、光熱費は別です。ペットは禁止されています。2階以上の部屋は眺めがよいです。",
    question:"家賃はいくらですか。",
    options:["月4万円","月5万円","月6万円","月7万円"], correctIndex:2,
    explanation:"家賃は月6万円。" },

  { id:"n4-r3b", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pb",
    passage:"このアパートは駅から歩いて5分のところにあります。家賃は月6万円で、光熱費は別です。ペットは禁止されています。2階以上の部屋は眺めがよいです。",
    question:"このアパートで禁止されていることは何ですか。",
    options:["楽器演奏","ペットの飼育","喫煙","子供の入居"], correctIndex:1,
    explanation:"ペットは禁止されています。" },

  { id:"n4-r4b", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pb",
    passage:"このアパートは駅から歩いて5分のところにあります。家賃は月6万円で、光熱費は別です。ペットは禁止されています。2階以上の部屋は眺めがよいです。",
    question:"家賃に光熱費は含まれていますか。",
    options:["はい、含まれています","いいえ、別です","部屋によります","書いていません"], correctIndex:1,
    explanation:"光熱費は別です。" },

  { id:"n4-r5b", level:"N4", type:"reading", instruction: READING_INSTR, passageId:"n4-pb",
    passage:"このアパートは駅から歩いて5分のところにあります。家賃は月6万円で、光熱費は別です。ペットは禁止されています。2階以上の部屋は眺めがよいです。",
    question:"眺めがよい部屋はどこですか。",
    options:["1階の部屋","2階以上の部屋","角部屋","南向きの部屋"], correctIndex:1,
    explanation:"2階以上の部屋は眺めがよい。" },

  // ═══════════════════════════════════════════════════════════════
  // N4 LISTENING
  // ═══════════════════════════════════════════════════════════════
  { id:"n4-l1", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"明日の会議は午後2時から始まります。場所は3階の会議室です。",
    question:"会議はどこで行われますか。",
    options:["1階","2階","3階","4階"], correctIndex:2,
    explanation:"3階の会議室。" },

  { id:"n4-l2", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"電車が遅れているので、会議に少し遅刻するかもしれません。",
    question:"なぜ遅刻するかもしれませんか。",
    options:["道に迷った","電車が遅れている","体調が悪い","仕事が終わらない"], correctIndex:1,
    explanation:"電車が遅れているので。" },

  { id:"n4-l3", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このレストランは火曜日が定休日です。それ以外の日は11時から22時まで営業しています。",
    question:"このレストランが休みの日はいつですか。",
    options:["月曜日","火曜日","水曜日","日曜日"], correctIndex:1,
    explanation:"火曜日が定休日。" },

  { id:"n4-l4", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"荷物を送りたいのですが、この箱の重さは2キロです。",
    question:"この箱は何キロですか。",
    options:["1キロ","1.5キロ","2キロ","2.5キロ"], correctIndex:2,
    explanation:"2キロです。" },

  { id:"n4-l5", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"来月から新しい仕事を始めます。給料は今より少し高くなります。",
    question:"新しい仕事の給料はどうなりますか。",
    options:["下がる","変わらない","少し上がる","2倍になる"], correctIndex:2,
    explanation:"給料は今より少し高くなります。" },

  { id:"n4-l6", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"今日の宿題は教科書の10ページから15ページです。",
    question:"宿題は何ページから何ページですか。",
    options:["5〜10ページ","10〜15ページ","15〜20ページ","10〜20ページ"], correctIndex:1,
    explanation:"10ページから15ページ。" },

  { id:"n4-l7", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"駅の近くに新しいカフェができました。コーヒーが安くておいしいと評判です。",
    question:"新しいカフェについて正しいのはどれですか。",
    options:["駅から遠い","コーヒーが高い","コーヒーが安くておいしい","まずいと評判だ"], correctIndex:2,
    explanation:"コーヒーが安くておいしいと評判です。" },

  { id:"n4-l8", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"明日は雨の予報なので、傘を持って行ったほうがいいですよ。",
    question:"明日の天気はどうですか。",
    options:["晴れ","曇り","雨","雪"], correctIndex:2,
    explanation:"雨の予報。" },

  { id:"n4-l9", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このプールは午前9時から午後8時まで利用できます。月曜日はお休みです。",
    question:"このプールは何時まで利用できますか。",
    options:["午後6時","午後7時","午後8時","午後9時"], correctIndex:2,
    explanation:"午後8時まで利用できます。" },

  { id:"n4-l10", level:"N4", type:"listening", instruction: LISTENING_INSTR,
    audioText:"田中さんは今出かけています。2時間後に戻る予定です。",
    question:"田中さんはいつ戻りますか。",
    options:["30分後","1時間後","2時間後","3時間後"], correctIndex:2,
    explanation:"2時間後に戻る予定です。" },

  // ═══════════════════════════════════════════════════════════════
  // N3 VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  { id:"n3-v1", level:"N3", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼の「遠慮」がちな態度が気になります。",
    options:["えんりょ","えんよ","おんりょ","おんよ"], correctIndex:0,
    explanation:"遠慮 = えんりょ (reserve / holding back)." },

  { id:"n3-v2", level:"N3", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"状況を「把握」することが重要です。",
    options:["はあく","はっかく","ばあく","ぱあく"], correctIndex:0,
    explanation:"把握 = はあく (to grasp / fully understand)." },

  { id:"n3-v3", level:"N3", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「曖昧」な返事をするのはよくない。",
    options:["あいまい","あいめい","おいまい","あやまい"], correctIndex:0,
    explanation:"曖昧 = あいまい (vague / ambiguous)." },

  { id:"n3-v4", level:"N3", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"この問題の「影響」は大きい。",
    options:["えいきょう","えいこう","いんきょう","いんこう"], correctIndex:0,
    explanation:"影響 = えいきょう (influence / effect)." },

  { id:"n3-v5", level:"N3", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"困難に「我慢」することが大切だ。",
    options:["がまん","かまん","がばん","かばん"], correctIndex:0,
    explanation:"我慢 = がまん (endurance / patience)." },

  { id:"n3-v6", level:"N3", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"彼女はいつも（　）に仕事をします。",
    options:["丁寧","大変","急いで","わがまま"], correctIndex:0,
    explanation:"丁寧に仕事をする = to work carefully/politely." },

  { id:"n3-v7", level:"N3", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"試験に（　）するために、毎日勉強します。",
    options:["合格","失敗","中止","延期"], correctIndex:0,
    explanation:"合格するために = in order to pass." },

  { id:"n3-v8", level:"N3", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"彼は約束を（　）してくれました。",
    options:["確認","無視","変更","キャンセル"], correctIndex:0,
    explanation:"約束を確認する = to confirm a promise." },

  { id:"n3-v9", level:"N3", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「不便」",
    options:["inconvenient","convenient","expensive","impossible"], correctIndex:0,
    explanation:"不便 = ふべん = inconvenient." },

  { id:"n3-v10", level:"N3", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「解決する」",
    options:["to solve / resolve","to cause","to delay","to ignore"], correctIndex:0,
    explanation:"解決する = かいけつする = to solve / resolve." },

  // ═══════════════════════════════════════════════════════════════
  // N3 GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  { id:"n3-g1", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"試験に合格する（　）、毎日勉強します。",
    options:["ために","ように","からに","ものに"], correctIndex:0,
    explanation:"〜ために = in order to ~. Volitional verb + ために = purpose." },

  { id:"n3-g2", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼は来る（　）言っていたが、まだ来ていない。",
    options:["と","ように","ために","ので"], correctIndex:0,
    explanation:"〜と言っていた = said that ~. と quotes the content of speech." },

  { id:"n3-g3", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"この映画は子供でも楽しめる（　）評判だ。",
    options:["と","が","を","に"], correctIndex:0,
    explanation:"〜と評判だ = it is said that / is reputed to be." },

  { id:"n3-g4", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼女は本（　）読んでいる。",
    options:["ばかり","しか","だけ","も"], correctIndex:0,
    explanation:"〜ばかり = nothing but / only. 本ばかり読んでいる = does nothing but read." },

  { id:"n3-g5", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"雨（　）降れば、試合は中止になります。",
    options:["が","は","を","に"], correctIndex:0,
    explanation:"〜ば conditional. 雨が降れば = if it rains." },

  { id:"n3-g6", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"時間が（　）、もっと旅行したい。",
    options:["あれば","あって","あっても","あるなら"], correctIndex:0,
    explanation:"〜ば条件. 時間があれば = if I have time." },

  { id:"n3-g7", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"先生に（　）もらって、レポートを直しました。",
    options:["見て","見た","見る","見え"], correctIndex:0,
    explanation:"〜てもらう = to have someone do ~ for you. 見てもらった = had (the teacher) look at it." },

  { id:"n3-g8", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼は学生の（　）、働いています。",
    options:["くせに","ために","ように","せいで"], correctIndex:0,
    explanation:"〜くせに = even though / despite being. 学生のくせに働いている = despite being a student, is working." },

  { id:"n3-g9", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"練習すれば（　）、上手になります。",
    options:["するほど","なるほど","するたびに","したとき"], correctIndex:0,
    explanation:"〜ほど = the more ~. 練習すればするほど = the more you practice." },

  { id:"n3-g10", level:"N3", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"その知らせを聞いて、（　）ほどうれしかった。",
    options:["泣く","泣き","泣いた","泣こう"], correctIndex:0,
    explanation:"泣くほどうれしかった = was so happy I could cry." },

  // ═══════════════════════════════════════════════════════════════
  // N3 READING  — 2 passages × 5 questions
  // ═══════════════════════════════════════════════════════════════
  // Passage A
  { id:"n3-r1a", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pa",
    passage:"現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。また、就寝前の使用は睡眠の質を低下させるという研究結果もあります。",
    question:"専門家はどのくらいの頻度で目を休めることを勧めていますか。",
    options:["30分に一度","1時間に一度","2時間に一度","毎日一度"], correctIndex:1,
    explanation:"1時間に一度、目を休めることを勧めています。" },

  { id:"n3-r2a", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pa",
    passage:"現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。また、就寝前の使用は睡眠の質を低下させるという研究結果もあります。",
    question:"スマートフォンを長時間使用するとどうなりますか。",
    options:["頭痛と発熱","目や肩に負担がかかる","集中力が上がる","睡眠が深くなる"], correctIndex:1,
    explanation:"目や肩に負担がかかることがあります。" },

  { id:"n3-r3a", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pa",
    passage:"現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。また、就寝前の使用は睡眠の質を低下させるという研究結果もあります。",
    question:"就寝前のスマートフォン使用はどのような影響がありますか。",
    options:["リラックスできる","睡眠の質が下がる","目がよくなる","集中力が上がる"], correctIndex:1,
    explanation:"就寝前の使用は睡眠の質を低下させる。" },

  { id:"n3-r4a", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pa",
    passage:"現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。また、就寝前の使用は睡眠の質を低下させるという研究結果もあります。",
    question:"この文章の主なテーマは何ですか。",
    options:["スマートフォンの歴史","スマートフォン使用の利点と問題点","最新のスマートフォン機能","スマートフォンの値段"], correctIndex:1,
    explanation:"便利な反面、問題点もあると説明している。" },

  { id:"n3-r5a", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pa",
    passage:"現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。また、就寝前の使用は睡眠の質を低下させるという研究結果もあります。",
    question:"「便利な反面」の意味として最も適切なものはどれですか。",
    options:["便利なのに","便利な一方で","便利だから","便利ではなく"], correctIndex:1,
    explanation:"〜な反面 = on the other hand / while being ~." },

  // Passage B
  { id:"n3-r1b", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pb",
    passage:"最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。また、同僚とのコミュニケーションが減り、孤独を感じる人もいるようです。",
    question:"在宅勤務のメリットとして挙げられているのは何ですか。",
    options:["給料が上がる","通勤時間がなくなる","同僚と話せる","仕事量が減る"], correctIndex:1,
    explanation:"通勤時間がなくなる点はメリット。" },

  { id:"n3-r2b", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pb",
    passage:"最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。また、同僚とのコミュニケーションが減り、孤独を感じる人もいるようです。",
    question:"在宅勤務のデメリットとして挙げられていないのはどれですか。",
    options:["仕事とプライベートの境界が曖昧になる","同僚とのコミュニケーションが減る","孤独を感じる","通勤時間が増える"], correctIndex:3,
    explanation:"通勤時間はなくなるのがメリット。増えるとは書かれていない。" },

  { id:"n3-r3b", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pb",
    passage:"最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。また、同僚とのコミュニケーションが減り、孤独を感じる人もいるようです。",
    question:"「境界が曖昧になる」とはどういう意味ですか。",
    options:["どちらかわからなくなる","問題が起きる","仕事量が増える","プライベートが充実する"], correctIndex:0,
    explanation:"曖昧 = vague/unclear. 境界が曖昧 = the boundary becomes unclear." },

  { id:"n3-r4b", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pb",
    passage:"最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。また、同僚とのコミュニケーションが減り、孤独を感じる人もいるようです。",
    question:"在宅勤務で孤独を感じる理由は何ですか。",
    options:["家が狭い","同僚とのコミュニケーションが減る","給料が低い","仕事が難しい"], correctIndex:1,
    explanation:"同僚とのコミュニケーションが減り、孤独を感じる。" },

  { id:"n3-r5b", level:"N3", type:"reading", instruction: READING_INSTR, passageId:"n3-pb",
    passage:"最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。また、同僚とのコミュニケーションが減り、孤独を感じる人もいるようです。",
    question:"この文章の内容と合っているものはどれですか。",
    options:["在宅勤務には良い点しかない","在宅勤務には良い点も悪い点もある","在宅勤務は減っている","在宅勤務は勧められていない"], correctIndex:1,
    explanation:"メリットとデメリットの両方が述べられている。" },

  // ═══════════════════════════════════════════════════════════════
  // N3 LISTENING
  // ═══════════════════════════════════════════════════════════════
  { id:"n3-l1", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"本日のセミナーは予定より30分遅れて、午後2時半から始まります。参加者の皆さんはロビーでお待ちください。",
    question:"セミナーは何時から始まりますか。",
    options:["午後2時","午後2時半","午後3時","午後3時半"], correctIndex:1,
    explanation:"午後2時半から始まります。" },

  { id:"n3-l2", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"この薬は食後に飲んでください。一日三回、1回につき2錠です。",
    question:"1回に何錠飲みますか。",
    options:["1錠","2錠","3錠","4錠"], correctIndex:1,
    explanation:"1回につき2錠。" },

  { id:"n3-l3", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"明日の天気予報です。午前中は晴れですが、午後から雨になる見込みです。気温は最高20度です。",
    question:"明日の午後の天気はどうですか。",
    options:["晴れ","曇り","雨","雪"], correctIndex:2,
    explanation:"午後から雨になる見込みです。" },

  { id:"n3-l4", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このキャンペーンは今月末まで有効です。対象商品を2点以上購入された方に、500円の割引券をプレゼントします。",
    question:"割引券をもらうには何点以上買う必要がありますか。",
    options:["1点","2点","3点","5点"], correctIndex:1,
    explanation:"2点以上購入された方に割引券をプレゼント。" },

  { id:"n3-l5", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"お客様にお知らせします。ただいまエレベーターが点検中のため、ご利用いただけません。ご不便をおかけして申し訳ございません。",
    question:"エレベーターが使えない理由は何ですか。",
    options:["故障","点検中","満員","工事中"], correctIndex:1,
    explanation:"点検中のため利用できません。" },

  { id:"n3-l6", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"田中さんは来月から留学します。行き先はフランスで、期間は1年間です。",
    question:"田中さんはどこへ留学しますか。",
    options:["ドイツ","イタリア","フランス","スペイン"], correctIndex:2,
    explanation:"行き先はフランス。" },

  { id:"n3-l7", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"今週の土曜日、午前10時から駅前広場で清掃活動を行います。参加したい方は金曜日までに連絡してください。",
    question:"清掃活動は何曜日に行いますか。",
    options:["金曜日","土曜日","日曜日","月曜日"], correctIndex:1,
    explanation:"今週の土曜日に行います。" },

  { id:"n3-l8", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"山田先生の授業は月曜と水曜の午後1時から2時半までです。教室は302号室に変更になりました。",
    question:"山田先生の授業の教室はどこですか。",
    options:["201号室","203号室","302号室","303号室"], correctIndex:2,
    explanation:"302号室に変更になりました。" },

  { id:"n3-l9", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"この映画は3時間と長いですが、途中で15分の休憩があります。",
    question:"映画の途中に休憩は何分ありますか。",
    options:["10分","15分","20分","30分"], correctIndex:1,
    explanation:"途中で15分の休憩があります。" },

  { id:"n3-l10", level:"N3", type:"listening", instruction: LISTENING_INSTR,
    audioText:"来月から電気代が5%値上がりします。節電を心がけてください。",
    question:"電気代はどうなりますか。",
    options:["5%下がる","変わらない","5%上がる","10%上がる"], correctIndex:2,
    explanation:"5%値上がりします。" },

  // ═══════════════════════════════════════════════════════════════
  // N2 VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  { id:"n2-v1", level:"N2", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"両者の意見に「齟齬」が生じた。",
    options:["そご","しょご","そこ","しょこ"], correctIndex:0,
    explanation:"齟齬 = そご (discrepancy / mismatch)." },

  { id:"n2-v2", level:"N2", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼は地域に「貢献」したいと思っている。",
    options:["こうけん","こうげん","くうけん","こけん"], correctIndex:0,
    explanation:"貢献 = こうけん (contribution)." },

  { id:"n2-v3", level:"N2", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"この問題への「懸念」が高まっている。",
    options:["けねん","けんねん","かねん","かんねん"], correctIndex:0,
    explanation:"懸念 = けねん (concern / worry)." },

  { id:"n2-v4", level:"N2", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"規則から「逸脱」する行為は許されない。",
    options:["いつだつ","いつだく","いっだつ","いっだく"], correctIndex:0,
    explanation:"逸脱 = いつだつ (deviation / straying)." },

  { id:"n2-v5", level:"N2", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼の説明は「概念」的で難しかった。",
    options:["がいねん","かいねん","がいなん","かいなん"], correctIndex:0,
    explanation:"概念 = がいねん (concept / notion)." },

  { id:"n2-v6", level:"N2", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"計画が（　）どおりに進まなかった。",
    options:["予定","希望","目標","方針"], correctIndex:0,
    explanation:"予定どおりに進む = to go according to plan." },

  { id:"n2-v7", level:"N2", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"彼は（　）な態度で交渉に臨んだ。",
    options:["強硬","柔軟","消極","積極"], correctIndex:0,
    explanation:"強硬な態度 = a firm / hard-line stance." },

  { id:"n2-v8", level:"N2", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"新しい政策の（　）と短所を比較する必要がある。",
    options:["長所","欠点","問題","危険"], correctIndex:0,
    explanation:"長所と短所 = merits and demerits." },

  { id:"n2-v9", level:"N2", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「把握する」",
    options:["to fully grasp / understand","to ignore","to forget","to exaggerate"], correctIndex:0,
    explanation:"把握する = はあくする = to fully grasp or understand." },

  { id:"n2-v10", level:"N2", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「画期的」",
    options:["epoch-making / groundbreaking","traditional","predictable","controversial"], correctIndex:0,
    explanation:"画期的 = かっきてき = epoch-making / innovative." },

  // ═══════════════════════════════════════════════════════════════
  // N2 GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  { id:"n2-g1", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼女の努力（　）、プロジェクトは成功した。",
    options:["あって","よって","通して","もって"], correctIndex:0,
    explanation:"〜あって = owing to, thanks to. 努力あって = thanks to her effort." },

  { id:"n2-g2", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"予想に（　）、試験は簡単だった。",
    options:["反して","対して","関して","沿って"], correctIndex:0,
    explanation:"〜に反して = contrary to ~. 予想に反して = contrary to expectations." },

  { id:"n2-g3", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"社長（　）、全員が賛成した。",
    options:["をはじめ","をめぐって","をきっかけに","をもって"], correctIndex:0,
    explanation:"〜をはじめ = starting with ~, including. 社長をはじめ = starting with the president." },

  { id:"n2-g4", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"日本語を勉強した（　）、まだ話せない。",
    options:["ものの","ために","ように","にしては"], correctIndex:0,
    explanation:"〜ものの = although / even though (with contradictory result)." },

  { id:"n2-g5", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"このままでは会社が倒産せずには（　）。",
    options:["済まない","ならない","いられない","おかない"], correctIndex:0,
    explanation:"〜ずには済まない = cannot avoid doing ~. 倒産せずには済まない = cannot avoid going bankrupt." },

  { id:"n2-g6", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼は体が悪い（　）、毎日働いている。",
    options:["にもかかわらず","のために","ことから","わけで"], correctIndex:0,
    explanation:"〜にもかかわらず = despite / in spite of." },

  { id:"n2-g7", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"新製品は発売する（　）、すぐに売り切れた。",
    options:["や否や","とたんに","につれて","ものの"], correctIndex:0,
    explanation:"〜や否や = no sooner than / as soon as." },

  { id:"n2-g8", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"経験（　）、判断するのは難しい。",
    options:["なしに","なくて","ないで","なくとも"], correctIndex:0,
    explanation:"〜なしに = without ~. 経験なしに = without experience." },

  { id:"n2-g9", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"努力（　）、成功できないことはない。",
    options:["さえすれば","だけすれば","しかすれば","もすれば"], correctIndex:0,
    explanation:"〜さえすれば = if only you ~. 努力さえすれば = if only you make an effort." },

  { id:"n2-g10", level:"N2", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼の行動は、法律（　）問題ないが、倫理的には疑問だ。",
    options:["上は","として","においては","にとって"], correctIndex:0,
    explanation:"〜上は = from the standpoint of / in terms of. 法律上は = legally speaking." },

  // ═══════════════════════════════════════════════════════════════
  // N2 READING  — 2 passages × 5 questions
  // ═══════════════════════════════════════════════════════════════
  // Passage A
  { id:"n2-r1a", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pa",
    passage:"グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question:"真のコミュニケーションに不可欠なことは何ですか。",
    options:["外国語を流暢に話すこと","言語の背景にある文化や価値観を理解すること","多くの国を旅行すること","外国人の友人を作ること"], correctIndex:1,
    explanation:"文化や価値観を理解することが真のコミュニケーションには不可欠。" },

  { id:"n2-r2a", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pa",
    passage:"グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question:"文化の違いを理解することについて、筆者はどう述べていますか。",
    options:["簡単だ","難しく、誤解や摩擦を生むこともある","不可能だ","必要ではない"], correctIndex:1,
    explanation:"容易ではなく、時に誤解や摩擦を生むこともある。" },

  { id:"n2-r3a", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pa",
    passage:"グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question:"「ますます」の意味に最も近いものはどれですか。",
    options:["少し","変わらず","どんどん","突然"], correctIndex:2,
    explanation:"ますます = more and more / increasingly." },

  { id:"n2-r4a", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pa",
    passage:"グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question:"この文章で「単に」の使い方に最も近い意味は？",
    options:["特別に","ただ〜だけ","必ず","すぐに"], correctIndex:1,
    explanation:"単に = ただ〜だけ (merely / only)." },

  { id:"n2-r5a", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pa",
    passage:"グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question:"この文章の論調として最も適切なものはどれですか。",
    options:["異文化理解は簡単で楽しい","異文化理解は重要だが難しい面もある","外国語学習は不要だ","グローバル化は否定すべきだ"], correctIndex:1,
    explanation:"重要性を認めながら、難しさも指摘している。" },

  // Passage B
  { id:"n2-r1b", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pb",
    passage:"近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question:"少子高齢化の原因として挙げられているのはどれですか。",
    options:["経済の悪化","出生率の低下と平均寿命の延び","移民の増加","都市化の進行"], correctIndex:1,
    explanation:"出生率の低下と平均寿命の延びにより。" },

  { id:"n2-r2b", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pb",
    passage:"近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question:"懸念されていることとして正しいのはどれですか。",
    options:["物価の上昇","労働力不足と社会保障費の増大","環境汚染","教育水準の低下"], correctIndex:1,
    explanation:"労働力不足や社会保障費の増大が懸念されています。" },

  { id:"n2-r3b", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pb",
    passage:"近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question:"政府の対策の現状はどうですか。",
    options:["有効な対策が見つかった","対策を何も行っていない","様々な対策を講じているが根本的解決策はない","問題を無視している"], correctIndex:2,
    explanation:"さまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。" },

  { id:"n2-r4b", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pb",
    passage:"近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question:"「抜本的な解決策」の意味として最も適切なものはどれですか。",
    options:["一時的な対処法","根本からの解決策","費用のかかる対策","国際的な解決策"], correctIndex:1,
    explanation:"抜本的 = radical / fundamental (getting to the root of the problem)." },

  { id:"n2-r5b", level:"N2", type:"reading", instruction: READING_INSTR, passageId:"n2-pb",
    passage:"近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question:"この文章のテーマとして最も適切なものはどれですか。",
    options:["日本の経済成長","日本の少子高齢化問題","政府の福祉政策","日本の医療制度"], correctIndex:1,
    explanation:"少子高齢化を主テーマとして述べている。" },

  // ═══════════════════════════════════════════════════════════════
  // N2 LISTENING
  // ═══════════════════════════════════════════════════════════════
  { id:"n2-l1", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"弊社の新製品の発売日が、当初の予定より2週間遅れて、来月15日になることが決まりました。ご不便をおかけしますが、ご了承ください。",
    question:"新製品の発売はどのくらい遅れましたか。",
    options:["1週間","2週間","1か月","2か月"], correctIndex:1,
    explanation:"当初の予定より2週間遅れました。" },

  { id:"n2-l2", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"この地区では、毎週月曜日と木曜日に燃えるゴミを収集しています。資源ゴミは第1・第3水曜日のみです。",
    question:"資源ゴミはいつ収集されますか。",
    options:["毎週月曜日と木曜日","毎週水曜日","第1・第3水曜日","第2・第4水曜日"], correctIndex:2,
    explanation:"資源ゴミは第1・第3水曜日のみ。" },

  { id:"n2-l3", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"ただいまより、株主総会を開催いたします。本日の議題は、第一に昨年度の業績報告、第二に役員人事についてです。",
    question:"株主総会の第二の議題は何ですか。",
    options:["昨年度の業績報告","役員人事","新製品発表","配当金の発表"], correctIndex:1,
    explanation:"第二に役員人事について。" },

  { id:"n2-l4", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このシステムのエラーは、サーバーのメンテナンス後に発生しています。原因を調査中ですが、セキュリティ上の問題ではないことが確認されています。",
    question:"システムのエラーはいつ発生していますか。",
    options:["サーバーのメンテナンス前","サーバーのメンテナンス後","毎日定期的に","セキュリティ攻撃によって"], correctIndex:1,
    explanation:"サーバーのメンテナンス後に発生しています。" },

  { id:"n2-l5", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"弊社では、環境負荷低減のため、2025年までに二酸化炭素排出量を30%削減することを目標としています。",
    question:"会社の目標は何ですか。",
    options:["2025年までにCO2を20%削減","2025年までにCO2を30%削減","2030年までにCO2を30%削減","2025年までにカーボンニュートラルを達成"], correctIndex:1,
    explanation:"2025年までに二酸化炭素排出量を30%削減。" },

  { id:"n2-l6", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"来週の月曜日から、社内の全フロアでWi-Fiが利用可能になります。接続するには社員番号とパスワードが必要です。",
    question:"Wi-Fiを使うために何が必要ですか。",
    options:["社員証","社員番号とパスワード","上司の許可","申請書類"], correctIndex:1,
    explanation:"社員番号とパスワードが必要です。" },

  { id:"n2-l7", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"本日の採用面接ですが、交通機関の乱れのため、開始時刻を30分遅らせて、14時30分からとさせていただきます。",
    question:"面接の開始時刻は何時に変更になりましたか。",
    options:["14時","14時30分","15時","15時30分"], correctIndex:1,
    explanation:"14時30分からとさせていただきます。" },

  { id:"n2-l8", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"このプロジェクトの予算は当初の計画より15%オーバーしています。次回の会議でどう対処するか話し合う予定です。",
    question:"プロジェクトの予算はどのような状況ですか。",
    options:["予算内に収まっている","10%オーバーしている","15%オーバーしている","20%オーバーしている"], correctIndex:2,
    explanation:"当初の計画より15%オーバーしています。" },

  { id:"n2-l9", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"田中部長は今週出張中です。来週の火曜日に戻る予定ですので、それ以降にご連絡ください。",
    question:"田中部長に連絡できるのはいつからですか。",
    options:["今週中","来週の月曜日以降","来週の火曜日以降","来週の水曜日以降"], correctIndex:2,
    explanation:"来週の火曜日に戻る予定ですので、それ以降にご連絡ください。" },

  { id:"n2-l10", level:"N2", type:"listening", instruction: LISTENING_INSTR,
    audioText:"新しい健康保険の申請には、在職証明書と本人確認書類が必要です。申請期限は今月末です。",
    question:"申請に必要でないものはどれですか。",
    options:["在職証明書","本人確認書類","住民票","（必要でないものとして住民票）"], correctIndex:2,
    explanation:"必要なのは在職証明書と本人確認書類。住民票は言及されていない。" },

  // ═══════════════════════════════════════════════════════════════
  // N1 VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  { id:"n1-v1", level:"N1", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼の「逡巡」が判断を遅らせた。",
    options:["しゅんじゅん","じゅんしゅん","しんじゅん","じんしゅん"], correctIndex:0,
    explanation:"逡巡 = しゅんじゅん (hesitation / wavering)." },

  { id:"n1-v2", level:"N1", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「蓋然性」の高い仮説を選ぶ。",
    options:["がいぜんせい","かいぜんせい","がいねんせい","かいねんせい"], correctIndex:0,
    explanation:"蓋然性 = がいぜんせい (probability / likelihood)." },

  { id:"n1-v3", level:"N1", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"「瑣末」なことに時間をかけすぎている。",
    options:["さまつ","さはつ","しゃまつ","しゃはつ"], correctIndex:0,
    explanation:"瑣末 = さまつ (trivial / petty)." },

  { id:"n1-v4", level:"N1", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼の言動は「忖度」に満ちていた。",
    options:["そんたく","そんだく","すんたく","すんだく"], correctIndex:0,
    explanation:"忖度 = そんたく (reading/inferring others' intentions)." },

  { id:"n1-v5", level:"N1", type:"vocabulary", instruction: VOCAB_READING_INSTR,
    question:"彼女の主張には「恣意性」が見られる。",
    options:["しいせい","しいけい","じいせい","じいけい"], correctIndex:0,
    explanation:"恣意性 = しいせい (arbitrariness)." },

  { id:"n1-v6", level:"N1", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"両者の意見に（　）が生じ、議論は平行線をたどった。",
    options:["齟齬","摩擦","対立","誤解"], correctIndex:0,
    explanation:"齟齬が生じる = a discrepancy/mismatch occurs." },

  { id:"n1-v7", level:"N1", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"彼の研究は従来の学説に（　）する画期的なものだった。",
    options:["反証","証明","支持","確認"], correctIndex:0,
    explanation:"学説に反証する = to disprove / present counterevidence to an established theory." },

  { id:"n1-v8", level:"N1", type:"vocabulary", instruction: VOCAB_CONTEXT_INSTR,
    question:"その政策の（　）を客観的に評価することが求められる。",
    options:["妥当性","有効性","可能性","必要性"], correctIndex:0,
    explanation:"妥当性を評価する = to evaluate the validity / appropriateness." },

  { id:"n1-v9", level:"N1", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「敷衍する」",
    options:["to elaborate / expand upon","to contradict","to simplify","to conclude"], correctIndex:0,
    explanation:"敷衍する = ふえんする = to elaborate or expand upon an argument." },

  { id:"n1-v10", level:"N1", type:"vocabulary", instruction: VOCAB_MEANING_INSTR,
    question:"「僭越ながら」",
    options:["With all due respect / presumptuous as it may be","thankfully","reluctantly","urgently"], correctIndex:0,
    explanation:"僭越ながら = せんえつながら = with all due respect (formal apology for overstepping)." },

  // ═══════════════════════════════════════════════════════════════
  // N1 GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  { id:"n1-g1", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"規則である（　）、例外を認めることはできない。",
    options:["以上","から","ので","ゆえ"], correctIndex:0,
    explanation:"〜である以上 = given that it is / as long as it is." },

  { id:"n1-g2", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼はテレビを見る（　）、ぼんやりと画面を眺めていた。",
    options:["ともなく","ことなく","わけでなく","はずもなく"], correctIndex:0,
    explanation:"〜ともなく = without really intending to / absently." },

  { id:"n1-g3", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"信頼するに（　）人物だと認められた。",
    options:["足る","値する","あたる","かなう"], correctIndex:0,
    explanation:"〜に足る = worthy of ~. 信頼するに足る = worthy of trust." },

  { id:"n1-g4", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"長年の研究の末に、（　）新薬が開発された。",
    options:["ようやく","かえって","むしろ","あいにく"], correctIndex:0,
    explanation:"ようやく = finally / at last (after long effort)." },

  { id:"n1-g5", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"その計画は費用（　）、実現は難しいと判断された。",
    options:["の面からして","にとって","において","に関する"], correctIndex:0,
    explanation:"〜の面からして = from the standpoint of. 費用の面からして = in terms of cost." },

  { id:"n1-g6", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"彼の発言は誤解を招き（　）ものだった。",
    options:["かねない","かねる","えない","うる"], correctIndex:0,
    explanation:"〜かねない = might possibly ~, could risk ~. 誤解を招きかねない = could easily cause misunderstanding." },

  { id:"n1-g7", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"困難に（　）、彼は諦めなかった。",
    options:["直面しながらも","直面するために","直面するなり","直面してこそ"], correctIndex:0,
    explanation:"〜ながらも = even while / although. 困難に直面しながらも = even while facing difficulties." },

  { id:"n1-g8", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"現代社会における孤独の問題は、議論する（　）あると言えよう。",
    options:["に値","に足","に値し","にたる"], correctIndex:0,
    explanation:"〜に値する = to be worth ~. 議論するに値する = worth discussing." },

  { id:"n1-g9", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"この政策の是非は、（　）価値判断の問題だ。",
    options:["つまるところ","すなわち","あるいは","ひいては"], correctIndex:0,
    explanation:"つまるところ = ultimately / when all is said and done." },

  { id:"n1-g10", level:"N1", type:"grammar", instruction: GRAMMAR_INSTR,
    question:"科学的証拠（　）、その主張は受け入れられない。",
    options:["なき","のない","がない","なし"], correctIndex:0,
    explanation:"〜なき = without ~, lacking ~ (literary/formal). 証拠なき主張 = a claim without evidence." },

  // ═══════════════════════════════════════════════════════════════
  // N1 READING  — 2 passages × 5 questions
  // ═══════════════════════════════════════════════════════════════
  // Passage A
  { id:"n1-r1a", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pa",
    passage:"人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question:"サピア＝ウォーフ仮説の「強い形」について、現在の学術的見解はどうですか。",
    options:["広く受け入れられている","支持されていない","証明されつつある","議論が続いている"], correctIndex:1,
    explanation:"強い形での仮説は現在では支持されていない。" },

  { id:"n1-r2a", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pa",
    passage:"人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question:"心理言語学の実験が支持しているのは何ですか。",
    options:["強い形での仮説","言語と思考は完全に独立しているという説","弱い形の仮説（言語が思考に何らかの影響を与える）","全ての言語は同じように思考を構造化するという説"], correctIndex:2,
    explanation:"弱い形での仮説については心理言語学の実験によって一定の支持が得られている。" },

  { id:"n1-r3a", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pa",
    passage:"人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question:"この文章における言語の役割についての筆者の立場は？",
    options:["言語はコミュニケーションのみに使われる","言語は思考を規定する枠組みになりうる","言語は思考に全く影響しない","言語の役割は文化によって異なる"], correctIndex:1,
    explanation:"思考そのものを規定する枠組みであるという考え方を紹介している。" },

  { id:"n1-r4a", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pa",
    passage:"人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question:"「一定の支持が得られている」とはどういう意味ですか。",
    options:["完全に証明されている","いくらかの支持がある","ほとんど支持されていない","支持されるかどうか不明だ"], correctIndex:1,
    explanation:"一定の = a certain degree of / some. 完全な支持ではなく、程度の問題。" },

  { id:"n1-r5a", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pa",
    passage:"人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question:"サピア＝ウォーフ仮説の核心的な主張はどれですか。",
    options:["言語は思考に影響しない","言語が違えば世界の認識も異なる","すべての言語は同じ構造を持つ","思考は言語より先に存在する"], correctIndex:1,
    explanation:"言語が異なれば世界の認識も異なるという主張。" },

  // Passage B
  { id:"n1-r1b", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pb",
    passage:"民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question:"単純な多数決の問題点として指摘されていることは何ですか。",
    options:["時間がかかりすぎる","少数意見を抑圧しかねない","腐敗につながる","実施が難しい"], correctIndex:1,
    explanation:"単純な多数決は少数意見を抑圧しかねない。" },

  { id:"n1-r2b", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pb",
    passage:"民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question:"熟議民主主義の特徴として正しいものはどれですか。",
    options:["迅速に結論を出す","多数決を重視する","多様な意見を十分に議論する","少数意見を無視する"], correctIndex:2,
    explanation:"結論を急がず、多様な意見を十分に議論する。" },

  { id:"n1-r3b", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pb",
    passage:"民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question:"「正当性の高い意思決定」とはどういう意味ですか。",
    options:["法律に基づいた決定","より多くの人に支持される合理的な決定","多数決によって決まった決定","専門家が決めた決定"], correctIndex:1,
    explanation:"正当性 = legitimacy. 多様な意見を議論した上での決定は、より正当性が高い。" },

  { id:"n1-r4b", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pb",
    passage:"民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question:"なぜ少数者の権利保護が注目されているのですか。",
    options:["多数決が最善の手法だから","多数決では少数意見が抑圧される可能性があるから","少数派が常に正しいから","民主主義が機能していないから"], correctIndex:1,
    explanation:"単純な多数決は少数意見を抑圧しかねないため。" },

  { id:"n1-r5b", level:"N1", type:"reading", instruction: READING_INSTR, passageId:"n1-pb",
    passage:"民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question:"この文章の主旨として最も適切なものはどれですか。",
    options:["民主主義は廃止すべきだ","多数決は完璧な手法だ","多数決には限界があり熟議が重要だ","少数意見は無視してよい"], correctIndex:2,
    explanation:"多数決の限界を指摘し、熟議民主主義の重要性を述べている。" },

  // ═══════════════════════════════════════════════════════════════
  // N1 LISTENING
  // ═══════════════════════════════════════════════════════════════
  { id:"n1-l1", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"本プロジェクトの予算超過について、取締役会での審議の結果、追加予算の承認は見送られることになりました。代わりに、現行予算内で優先順位を見直すよう、各部門に指示が出ています。",
    question:"追加予算についてどのような決定がなされましたか。",
    options:["承認された","見送られた（先送りされた）","拒否された","縮小して承認された"], correctIndex:1,
    explanation:"追加予算の承認は見送られることになりました。" },

  { id:"n1-l2", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"今般の法改正により、有期契約労働者が同一の使用者との間で、通算5年を超えて契約を更新した場合、労働者の申し込みにより、期間の定めのない労働契約に転換されます。",
    question:"無期契約への転換が可能になるのはいつですか。",
    options:["3年を超えた場合","5年を超えた場合","10年を超えた場合","使用者が認めた場合"], correctIndex:1,
    explanation:"通算5年を超えて契約を更新した場合、転換できます。" },

  { id:"n1-l3", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"量子コンピュータの実用化に向けた課題は、エラー率の低減と量子ビットの安定性確保です。現在の技術では、環境ノイズによる量子デコヒーレンスが最大の障壁となっています。",
    question:"量子コンピュータ実用化の最大の障壁は何ですか。",
    options:["ハードウェアのコスト","環境ノイズによる量子デコヒーレンス","プログラミング言語の不足","処理速度の不足"], correctIndex:1,
    explanation:"環境ノイズによる量子デコヒーレンスが最大の障壁。" },

  { id:"n1-l4", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"当該地域における生物多様性の損失は、農業の集約化と土地利用の変化が主要因とされています。生態系サービスの劣化は、長期的には食料安全保障にも影響を及ぼしかねません。",
    question:"生物多様性の損失の主な原因は何ですか。",
    options:["気候変動と汚染","農業の集約化と土地利用の変化","乱獲と森林破壊","都市化と観光開発"], correctIndex:1,
    explanation:"農業の集約化と土地利用の変化が主要因。" },

  { id:"n1-l5", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"憲法改正の発議には、衆議院と参議院それぞれの総議員の3分の2以上の賛成が必要であり、その後、国民投票において過半数の賛成を得なければなりません。",
    question:"憲法改正が成立するためには、国民投票で何が必要ですか。",
    options:["3分の2以上の賛成","過半数の賛成","全会一致","内閣の承認"], correctIndex:1,
    explanation:"国民投票において過半数の賛成を得なければなりません。" },

  { id:"n1-l6", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"本研究では、認知バイアスが意思決定に与える影響を分析しました。結果として、情報提示の順序が判断に有意な差をもたらすことが確認されました。",
    question:"研究で確認されたことは何ですか。",
    options:["感情が意思決定を左右する","情報提示の順序が判断に有意な差をもたらす","認知バイアスは修正できない","専門家は偏見を持たない"], correctIndex:1,
    explanation:"情報提示の順序が判断に有意な差をもたらすことが確認されました。" },

  { id:"n1-l7", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"本社移転に伴い、登記上の住所が来月1日より変更になります。取引先への通知は各担当者が責任を持って行ってください。なお、電話番号とメールアドレスに変更はありません。",
    question:"変更がないものはどれですか。",
    options:["住所","電話番号とメールアドレス","担当者","登記番号"], correctIndex:1,
    explanation:"電話番号とメールアドレスに変更はありません。" },

  { id:"n1-l8", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"今後の金融政策について、総裁は「インフレ目標の達成が見通せる段階になれば、利上げを検討する余地がある」と述べ、現時点では緩和的な政策を維持する方針を示しました。",
    question:"総裁が利上げを検討すると言った条件は何ですか。",
    options:["景気が回復したとき","インフレ目標の達成が見通せる段階","失業率が下がったとき","国際情勢が安定したとき"], correctIndex:1,
    explanation:"インフレ目標の達成が見通せる段階になれば、利上げを検討する余地がある。" },

  { id:"n1-l9", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"この報告書の結論は、従来の学説を覆すものであり、専門家の間でも賛否が分かれています。批判的な立場からは、サンプル数の不足と方法論上の問題が指摘されています。",
    question:"批判的な立場から指摘されている問題は何ですか。",
    options:["結論が不明確","サンプル数の不足と方法論上の問題","研究者の資格","研究費用の問題"], correctIndex:1,
    explanation:"サンプル数の不足と方法論上の問題が指摘されています。" },

  { id:"n1-l10", level:"N1", type:"listening", instruction: LISTENING_INSTR,
    audioText:"先端技術の急速な発展により、既存の法的枠組みでは対応しきれない問題が生じています。特に、AIによる著作権侵害やプライバシーの問題については、早急な立法措置が必要とされています。",
    question:"早急な立法措置が必要とされている問題は何ですか。",
    options:["技術の輸出規制","AIによる著作権侵害とプライバシーの問題","インターネットの速度制限","デジタル格差"], correctIndex:1,
    explanation:"AIによる著作権侵害やプライバシーの問題については早急な立法措置が必要。" },
];
