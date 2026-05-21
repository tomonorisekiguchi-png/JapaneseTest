import { Question } from "@/types";

export const questions: Question[] = [
  // ─── N5 Vocabulary ───────────────────────────────────────────────────────────
  {
    id: "n5-v1", level: "N5", type: "vocabulary",
    question: "What does 「水」(みず) mean?",
    options: ["Fire", "Water", "Air", "Earth"],
    correctIndex: 1,
    explanation: "水 (mizu) means 'water'.",
  },
  {
    id: "n5-v2", level: "N5", type: "vocabulary",
    question: "Which word means 'book'?",
    options: ["ペン", "ほん", "かみ", "つくえ"],
    correctIndex: 1,
    explanation: "ほん (本) means 'book'. ペン = pen, かみ = paper, つくえ = desk.",
  },
  {
    id: "n5-v3", level: "N5", type: "vocabulary",
    question: "What does 「大きい」(おおきい) mean?",
    options: ["Small", "Fast", "Big", "Old"],
    correctIndex: 2,
    explanation: "大きい (ookii) means 'big/large'.",
  },
  {
    id: "n5-v4", level: "N5", type: "vocabulary",
    question: "How do you say 'nine' in Japanese?",
    options: ["はち", "なな", "きゅう", "じゅう"],
    correctIndex: 2,
    explanation: "きゅう (九) means 'nine'. はち=8, なな=7, じゅう=10.",
  },
  {
    id: "n5-v5", level: "N5", type: "vocabulary",
    question: "What does 「食べます」(たべます) mean?",
    options: ["To drink", "To sleep", "To eat", "To walk"],
    correctIndex: 2,
    explanation: "食べます (tabemasu) means 'to eat'.",
  },

  // ─── N5 Grammar ──────────────────────────────────────────────────────────────
  {
    id: "n5-g1", level: "N5", type: "grammar",
    question: "Choose the correct particle: 私___学生です。",
    options: ["を", "は", "が", "で"],
    correctIndex: 1,
    explanation: "は is the topic marker. 私は学生です = 'I am a student.'",
  },
  {
    id: "n5-g2", level: "N5", type: "grammar",
    question: "Choose the correct particle: 公園___あそびます。",
    options: ["に", "が", "で", "を"],
    correctIndex: 2,
    explanation: "で marks the location where an action takes place. 公園で = 'at the park'.",
  },
  {
    id: "n5-g3", level: "N5", type: "grammar",
    question: "Which is correct for 'I go to school'?",
    options: ["学校がいきます", "学校をいきます", "学校にいきます", "学校でいきます"],
    correctIndex: 2,
    explanation: "に marks the destination. 学校にいきます = 'I go to school'.",
  },
  {
    id: "n5-g4", level: "N5", type: "grammar",
    question: "Choose the correct form: この本は___です。(interesting)",
    options: ["おもしろく", "おもしろい", "おもしろくて", "おもしろな"],
    correctIndex: 1,
    explanation: "い-adjectives end in い before です. おもしろい = interesting.",
  },
  {
    id: "n5-g5", level: "N5", type: "grammar",
    question: "Which sentence means 'There is a cat on the desk'?",
    options: [
      "つくえのねこがあります",
      "つくえにねこがいます",
      "つくえをねこがいます",
      "つくえのねこはいます",
    ],
    correctIndex: 1,
    explanation: "います is used for living things. に marks location. つくえにねこがいます.",
  },

  // ─── N5 Reading ──────────────────────────────────────────────────────────────
  {
    id: "n5-r1", level: "N5", type: "reading",
    passage:
      "たなかさんは まいにち がっこうに いきます。がっこうは うちから あるいて じゅっぷん です。たなかさんは 八時に うちを でます。",
    question: "How long does it take Tanaka-san to walk to school?",
    options: ["5 minutes", "8 minutes", "10 minutes", "20 minutes"],
    correctIndex: 2,
    explanation: "じゅっぷん = 10 minutes.",
  },
  {
    id: "n5-r2", level: "N5", type: "reading",
    passage:
      "たなかさんは まいにち がっこうに いきます。がっこうは うちから あるいて じゅっぷん です。たなかさんは 八時に うちを でます。",
    question: "What time does Tanaka-san leave home?",
    options: ["7:00", "8:00", "9:00", "10:00"],
    correctIndex: 1,
    explanation: "八時 (はちじ) = 8 o'clock.",
  },
  {
    id: "n5-r3", level: "N5", type: "reading",
    passage:
      "きょうは にちようびです。てんきが いいです。やまださんは こうえんで さんぽを しています。",
    question: "What day is it today?",
    options: ["Saturday", "Sunday", "Monday", "Friday"],
    correctIndex: 1,
    explanation: "にちようび = Sunday.",
  },
  {
    id: "n5-r4", level: "N5", type: "reading",
    passage:
      "きょうは にちようびです。てんきが いいです。やまださんは こうえんで さんぽを しています。",
    question: "What is Yamada-san doing?",
    options: ["Studying", "Cooking", "Taking a walk", "Sleeping"],
    correctIndex: 2,
    explanation: "さんぽをしています = is taking a walk.",
  },
  {
    id: "n5-r5", level: "N5", type: "reading",
    passage:
      "わたしは まいあさ ごはんを たべます。それから、コーヒーを のみます。コーヒーが すきです。",
    question: "What does this person drink every morning?",
    options: ["Tea", "Juice", "Coffee", "Water"],
    correctIndex: 2,
    explanation: "コーヒーをのみます = drinks coffee.",
  },

  // ─── N5 Listening ────────────────────────────────────────────────────────────
  {
    id: "n5-l1", level: "N5", type: "listening",
    audioText: "おはようございます。きょうは いいてんきですね。",
    question: "What does the speaker say about today?",
    options: ["It is raining", "The weather is nice", "It is very cold", "It is evening"],
    correctIndex: 1,
    explanation: "いいてんき = nice/good weather.",
  },
  {
    id: "n5-l2", level: "N5", type: "listening",
    audioText: "すみません、トイレは どこですか。",
    question: "What is the speaker looking for?",
    options: ["The exit", "The toilet/restroom", "The elevator", "The cafeteria"],
    correctIndex: 1,
    explanation: "トイレはどこですか = Where is the toilet?",
  },
  {
    id: "n5-l3", level: "N5", type: "listening",
    audioText: "りんごが みっつ と バナナが ふたつ あります。",
    question: "How many apples are there?",
    options: ["Two", "Three", "Four", "Five"],
    correctIndex: 1,
    explanation: "みっつ = three (things).",
  },
  {
    id: "n5-l4", level: "N5", type: "listening",
    audioText: "あしたは かようびです。",
    question: "What day is tomorrow?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctIndex: 1,
    explanation: "かようび = Tuesday.",
  },
  {
    id: "n5-l5", level: "N5", type: "listening",
    audioText: "このかばんは さんぜんえん です。",
    question: "How much does the bag cost?",
    options: ["¥300", "¥1,000", "¥3,000", "¥30,000"],
    correctIndex: 2,
    explanation: "さんぜんえん = 3,000 yen.",
  },

  // ─── N4 Vocabulary ───────────────────────────────────────────────────────────
  {
    id: "n4-v1", level: "N4", type: "vocabulary",
    question: "What does 「連絡」(れんらく) mean?",
    options: ["Connection / contact", "Travel", "Preparation", "Reservation"],
    correctIndex: 0,
    explanation: "連絡 (renraku) means 'contact' or 'communication'.",
  },
  {
    id: "n4-v2", level: "N4", type: "vocabulary",
    question: "Which word means 'to decide'?",
    options: ["決める", "始める", "続ける", "変える"],
    correctIndex: 0,
    explanation: "決める (kimeru) = to decide. 始める = to start, 続ける = to continue, 変える = to change.",
  },
  {
    id: "n4-v3", level: "N4", type: "vocabulary",
    question: "What does 「丁寧」(ていねい) mean?",
    options: ["Rude", "Polite / careful", "Busy", "Lazy"],
    correctIndex: 1,
    explanation: "丁寧 (teinei) means 'polite' or 'careful/thorough'.",
  },
  {
    id: "n4-v4", level: "N4", type: "vocabulary",
    question: "What does 「集める」(あつめる) mean?",
    options: ["To scatter", "To collect / gather", "To throw away", "To share"],
    correctIndex: 1,
    explanation: "集める (atsumeru) means 'to collect' or 'to gather'.",
  },
  {
    id: "n4-v5", level: "N4", type: "vocabulary",
    question: "What does 「普通」(ふつう) mean?",
    options: ["Special", "Unusual", "Normal / ordinary", "Complicated"],
    correctIndex: 2,
    explanation: "普通 (futsuu) means 'normal' or 'ordinary'.",
  },

  // ─── N4 Grammar ──────────────────────────────────────────────────────────────
  {
    id: "n4-g1", level: "N4", type: "grammar",
    question: "Choose the correct form: 雨が降っている___、傘を持っていきます。",
    options: ["から", "ので", "のに", "が"],
    correctIndex: 1,
    explanation: "ので gives a polite reason. 雨が降っているので = because it is raining.",
  },
  {
    id: "n4-g2", level: "N4", type: "grammar",
    question: "Which correctly expresses ability: 彼は日本語___話せます。",
    options: ["に", "が", "を", "で"],
    correctIndex: 1,
    explanation: "が marks the object of potential verbs. 日本語が話せます = can speak Japanese.",
  },
  {
    id: "n4-g3", level: "N4", type: "grammar",
    question: "Choose the correct て-form connection: 朝ごはんを___、学校へ行きました。",
    options: ["食べなくて", "食べて", "食べれば", "食べると"],
    correctIndex: 1,
    explanation: "て-form connects sequential actions. 食べて、行きました = ate and then went.",
  },
  {
    id: "n4-g4", level: "N4", type: "grammar",
    question: "Which sentence means 'I was told to study'?",
    options: [
      "勉強しろと言われました",
      "勉強してよかったです",
      "勉強するようです",
      "勉強したいです",
    ],
    correctIndex: 0,
    explanation: "〜と言われました = was told to ~. 勉強しろと言われました = was told to study.",
  },
  {
    id: "n4-g5", level: "N4", type: "grammar",
    question: "Choose the correct form: もっとゆっくり話して___ますか。",
    options: ["くれ", "もらい", "あげ", "くださり"],
    correctIndex: 1,
    explanation: "〜てもらえますか = 'Could you please ~?' (asking for a favor).",
  },

  // ─── N4 Reading ──────────────────────────────────────────────────────────────
  {
    id: "n4-r1", level: "N4", type: "reading",
    passage:
      "山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。",
    question: "How does Yamada-san commute to work?",
    options: ["By bus", "By bicycle", "By train", "On foot"],
    correctIndex: 2,
    explanation: "電車で30分かけて = taking 30 minutes by train.",
  },
  {
    id: "n4-r2", level: "N4", type: "reading",
    passage:
      "山田さんは毎朝7時に起きます。朝ごはんを食べてから、8時に家を出ます。電車で30分かけて会社に着きます。昼休みは12時から1時までです。",
    question: "How long is Yamada-san's lunch break?",
    options: ["30 minutes", "45 minutes", "1 hour", "1.5 hours"],
    correctIndex: 2,
    explanation: "12時から1時まで = from 12 to 1 = 1 hour.",
  },
  {
    id: "n4-r3", level: "N4", type: "reading",
    passage:
      "来週、友達と映画を見に行く予定です。映画は午後3時から始まります。映画の後は、レストランで夕食を食べます。",
    question: "What time does the movie start?",
    options: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    correctIndex: 2,
    explanation: "午後3時から始まります = starts at 3 PM.",
  },
  {
    id: "n4-r4", level: "N4", type: "reading",
    passage:
      "来週、友達と映画を見に行く予定です。映画は午後3時から始まります。映画の後は、レストランで夕食を食べます。",
    question: "What will they do after the movie?",
    options: ["Go shopping", "Go home", "Eat dinner at a restaurant", "Go to a cafe"],
    correctIndex: 2,
    explanation: "映画の後はレストランで夕食を食べます = eat dinner at a restaurant after the movie.",
  },
  {
    id: "n4-r5", level: "N4", type: "reading",
    passage:
      "このアパートは駅から歩いて5分のところにあります。家賃は月6万円です。ペットは禁止されています。",
    question: "What is NOT allowed in this apartment?",
    options: ["Children", "Smoking", "Pets", "Guests"],
    correctIndex: 2,
    explanation: "ペットは禁止されています = pets are prohibited.",
  },

  // ─── N4 Listening ────────────────────────────────────────────────────────────
  {
    id: "n4-l1", level: "N4", type: "listening",
    audioText: "明日の会議は午後2時から始まります。場所は3階の会議室です。",
    question: "Where will tomorrow's meeting be held?",
    options: ["1st floor", "2nd floor", "3rd floor", "4th floor"],
    correctIndex: 2,
    explanation: "3階の会議室 = the conference room on the 3rd floor.",
  },
  {
    id: "n4-l2", level: "N4", type: "listening",
    audioText: "電車が遅れているので、会議に少し遅刻するかもしれません。",
    question: "Why might the speaker be late?",
    options: ["They forgot the meeting", "The train is delayed", "They are sick", "Traffic is bad"],
    correctIndex: 1,
    explanation: "電車が遅れているので = because the train is delayed.",
  },
  {
    id: "n4-l3", level: "N4", type: "listening",
    audioText: "このレストランは火曜日が定休日です。それ以外の日は11時から22時まで営業しています。",
    question: "When is this restaurant closed?",
    options: ["Monday", "Tuesday", "Wednesday", "Sunday"],
    correctIndex: 1,
    explanation: "火曜日が定休日 = Tuesday is the regular closing day.",
  },
  {
    id: "n4-l4", level: "N4", type: "listening",
    audioText: "荷物を送りたいのですが、この箱の重さは2キロです。",
    question: "How heavy is the package?",
    options: ["1 kg", "1.5 kg", "2 kg", "2.5 kg"],
    correctIndex: 2,
    explanation: "2キロ = 2 kilograms.",
  },
  {
    id: "n4-l5", level: "N4", type: "listening",
    audioText: "来月から新しい仕事を始めます。給料は今より少し高くなります。",
    question: "What will happen to the salary in the new job?",
    options: ["It will decrease", "It will stay the same", "It will increase slightly", "It will double"],
    correctIndex: 2,
    explanation: "給料は今より少し高くなります = salary will become a little higher than now.",
  },

  // ─── N3 Vocabulary ───────────────────────────────────────────────────────────
  {
    id: "n3-v1", level: "N3", type: "vocabulary",
    question: "What does 「遠慮」(えんりょ) mean?",
    options: ["Hesitation / holding back", "Effort", "Gratitude", "Apology"],
    correctIndex: 0,
    explanation: "遠慮 (enryo) means restraint or hesitation, often used as 'please don't hold back'.",
  },
  {
    id: "n3-v2", level: "N3", type: "vocabulary",
    question: "What does 「把握する」(はあくする) mean?",
    options: ["To ignore", "To grasp / understand fully", "To forget", "To exaggerate"],
    correctIndex: 1,
    explanation: "把握する (haaku suru) means 'to grasp' or 'to fully understand a situation'.",
  },
  {
    id: "n3-v3", level: "N3", type: "vocabulary",
    question: "Which best matches 「曖昧」(あいまい)?",
    options: ["Clear and precise", "Vague / ambiguous", "Honest", "Straightforward"],
    correctIndex: 1,
    explanation: "曖昧 (aimai) = vague, ambiguous, unclear.",
  },
  {
    id: "n3-v4", level: "N3", type: "vocabulary",
    question: "What does 「我慢する」(がまんする) mean?",
    options: ["To enjoy", "To complain", "To endure / put up with", "To celebrate"],
    correctIndex: 2,
    explanation: "我慢する (gaman suru) = to endure, to be patient, to hold back.",
  },
  {
    id: "n3-v5", level: "N3", type: "vocabulary",
    question: "What does 「影響」(えいきょう) mean?",
    options: ["Shadow", "Influence / effect", "Memory", "Image"],
    correctIndex: 1,
    explanation: "影響 (eikyou) = influence, effect, impact.",
  },

  // ─── N3 Grammar ──────────────────────────────────────────────────────────────
  {
    id: "n3-g1", level: "N3", type: "grammar",
    question: "Complete: 試験に合格する___、毎日勉強します。",
    options: ["ために", "ように", "からに", "ものに"],
    correctIndex: 0,
    explanation: "ために expresses purpose with a volitional verb. 合格するために = in order to pass.",
  },
  {
    id: "n3-g2", level: "N3", type: "grammar",
    question: "Which is correct? 雨___降れば、試合は中止になります。",
    options: ["が", "は", "を", "に"],
    correctIndex: 0,
    explanation: "が is used in conditional clauses 〜ば. 雨が降れば = if it rains.",
  },
  {
    id: "n3-g3", level: "N3", type: "grammar",
    question: "Choose the correct form: 彼は来る___言っていたが、まだ来ていない。",
    options: ["と", "ように", "ために", "ので"],
    correctIndex: 0,
    explanation: "〜と言っていた = said that ~. Quotes the content of speech with と.",
  },
  {
    id: "n3-g4", level: "N3", type: "grammar",
    question: "Which sentence uses 〜ばかり correctly?",
    options: [
      "彼女は本ばかり読んでいる",
      "彼女は本ばかりを読む",
      "彼女はばかり本を読む",
      "彼女ばかりは本を読む",
    ],
    correctIndex: 0,
    explanation: "〜ばかり attaches to the noun or verb て-form. 本ばかり読んでいる = doing nothing but reading.",
  },
  {
    id: "n3-g5", level: "N3", type: "grammar",
    question: "Complete: この映画は子供___見られます。",
    options: ["でも", "しか", "だけに", "ばかりが"],
    correctIndex: 0,
    explanation: "〜でも = even ~. 子供でも見られます = even children can watch it.",
  },

  // ─── N3 Reading ──────────────────────────────────────────────────────────────
  {
    id: "n3-r1", level: "N3", type: "reading",
    passage:
      "現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。",
    question: "According to experts, how often should you rest your eyes?",
    options: ["Every 30 minutes", "Every hour", "Every 2 hours", "Every day"],
    correctIndex: 1,
    explanation: "1時間に一度 = once every hour.",
  },
  {
    id: "n3-r2", level: "N3", type: "reading",
    passage:
      "現代社会では、スマートフォンの利用が増えています。便利な反面、長時間使用すると目や肩に負担がかかることがあります。専門家は1時間に一度、目を休めることを勧めています。",
    question: "What negative effect does long smartphone use have?",
    options: [
      "It causes headaches and fever",
      "It strains the eyes and shoulders",
      "It reduces concentration",
      "It causes sleep disorders",
    ],
    correctIndex: 1,
    explanation: "目や肩に負担がかかる = puts strain on the eyes and shoulders.",
  },
  {
    id: "n3-r3", level: "N3", type: "reading",
    passage:
      "日本では、ゴミは種類別に分けて捨てなければなりません。燃えるゴミ、燃えないゴミ、資源ゴミなどに分類されます。地域によってルールが異なるため、引越しの際には確認が必要です。",
    question: "What must be done when moving to a new area?",
    options: [
      "Buy new garbage bins",
      "Check the local garbage rules",
      "Apply for garbage collection service",
      "Sort garbage by color",
    ],
    correctIndex: 1,
    explanation: "地域によってルールが異なるため確認が必要 = rules differ by area so you need to check.",
  },
  {
    id: "n3-r4", level: "N3", type: "reading",
    passage:
      "日本では、ゴミは種類別に分けて捨てなければなりません。燃えるゴミ、燃えないゴミ、資源ゴミなどに分類されます。地域によってルールが異なるため、引越しの際には確認が必要です。",
    question: "Which type of garbage is NOT mentioned?",
    options: ["Burnable garbage", "Non-burnable garbage", "Recyclable garbage", "Hazardous garbage"],
    correctIndex: 3,
    explanation: "The text mentions 燃えるゴミ, 燃えないゴミ, 資源ゴミ. Hazardous is not mentioned.",
  },
  {
    id: "n3-r5", level: "N3", type: "reading",
    passage:
      "最近、在宅勤務をする人が増えています。通勤時間がなくなる点はメリットですが、仕事とプライベートの境界が曖昧になりやすいというデメリットもあります。",
    question: "What is a disadvantage of working from home?",
    options: [
      "Commuting takes too long",
      "The boundary between work and private life becomes unclear",
      "There is no internet connection at home",
      "It is difficult to communicate with colleagues",
    ],
    correctIndex: 1,
    explanation: "仕事とプライベートの境界が曖昧になりやすい = the boundary between work and personal life tends to blur.",
  },

  // ─── N3 Listening ────────────────────────────────────────────────────────────
  {
    id: "n3-l1", level: "N3", type: "listening",
    audioText: "本日のセミナーは予定より30分遅れて、午後2時半から始まります。参加者の皆さんはロビーでお待ちください。",
    question: "What time will the seminar start?",
    options: ["2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"],
    correctIndex: 1,
    explanation: "午後2時半 = 2:30 PM.",
  },
  {
    id: "n3-l2", level: "N3", type: "listening",
    audioText: "この薬は食後に飲んでください。一日三回、1回につき2錠です。",
    question: "How many tablets should be taken each time?",
    options: ["1 tablet", "2 tablets", "3 tablets", "4 tablets"],
    correctIndex: 1,
    explanation: "1回につき2錠 = 2 tablets per dose.",
  },
  {
    id: "n3-l3", level: "N3", type: "listening",
    audioText: "明日の天気予報です。午前中は晴れですが、午後から雨になる見込みです。気温は最高20度です。",
    question: "What will the weather be like in the afternoon tomorrow?",
    options: ["Sunny", "Cloudy", "Rainy", "Snowy"],
    correctIndex: 2,
    explanation: "午後から雨になる見込みです = expected to rain from the afternoon.",
  },
  {
    id: "n3-l4", level: "N3", type: "listening",
    audioText: "このキャンペーンは今月末まで有効です。対象商品を2点以上購入された方に、500円の割引券をプレゼントします。",
    question: "What do you need to buy to receive the discount coupon?",
    options: ["1 or more items", "2 or more items", "3 or more items", "5 or more items"],
    correctIndex: 1,
    explanation: "2点以上購入された方に = for those who purchase 2 or more items.",
  },
  {
    id: "n3-l5", level: "N3", type: "listening",
    audioText: "お客様にお知らせします。ただいまエレベーターが点検中のため、ご利用いただけません。ご不便をおかけして申し訳ございません。",
    question: "Why can't customers use the elevator?",
    options: ["It is broken", "It is under inspection/maintenance", "It is full", "It is closed for the day"],
    correctIndex: 1,
    explanation: "点検中 = under inspection/maintenance.",
  },

  // ─── N2 Vocabulary ───────────────────────────────────────────────────────────
  {
    id: "n2-v1", level: "N2", type: "vocabulary",
    question: "What does 「齟齬」(そご) mean?",
    options: ["Agreement", "Discrepancy / mismatch", "Cooperation", "Misunderstanding (between cultures)"],
    correctIndex: 1,
    explanation: "齟齬 (sogo) = discrepancy, mismatch, or a gap between expectations and reality.",
  },
  {
    id: "n2-v2", level: "N2", type: "vocabulary",
    question: "Which best defines 「概念」(がいねん)?",
    options: ["Concept / notion", "Summary", "Example", "Theory"],
    correctIndex: 0,
    explanation: "概念 (gainen) = concept or notion; an abstract idea.",
  },
  {
    id: "n2-v3", level: "N2", type: "vocabulary",
    question: "What does 「貢献する」(こうけんする) mean?",
    options: ["To criticize", "To contribute", "To compete", "To withdraw"],
    correctIndex: 1,
    explanation: "貢献する (kouken suru) = to contribute, to make a contribution.",
  },
  {
    id: "n2-v4", level: "N2", type: "vocabulary",
    question: "What does 「懸念」(けねん) mean?",
    options: ["Hope", "Expectation", "Concern / worry", "Confidence"],
    correctIndex: 2,
    explanation: "懸念 (kenen) = concern, worry, apprehension.",
  },
  {
    id: "n2-v5", level: "N2", type: "vocabulary",
    question: "What does 「逸脱する」(いつだつする) mean?",
    options: ["To excel", "To deviate / stray from", "To improve", "To concentrate"],
    correctIndex: 1,
    explanation: "逸脱する (itsudatsu suru) = to deviate or stray from a standard or norm.",
  },

  // ─── N2 Grammar ──────────────────────────────────────────────────────────────
  {
    id: "n2-g1", level: "N2", type: "grammar",
    question: "Complete: 彼女の努力___、プロジェクトは成功した。",
    options: ["あって", "によって", "にして", "において"],
    correctIndex: 0,
    explanation: "〜あって = owing to, thanks to. 彼女の努力あって = owing to her effort.",
  },
  {
    id: "n2-g2", level: "N2", type: "grammar",
    question: "Which correctly uses 〜に反して?",
    options: [
      "予想に反して、試験は簡単だった",
      "予想に反して、試験が難しかった",
      "予想に反して試験は難しかった",
      "A and C are both correct",
    ],
    correctIndex: 3,
    explanation: "〜に反して = contrary to ~. Both A and C are grammatically correct (comma optional).",
  },
  {
    id: "n2-g3", level: "N2", type: "grammar",
    question: "Complete: このままでは会社が倒産___ない。",
    options: ["せずには済ま", "しかね", "しないでは済ま", "しかねて"],
    correctIndex: 0,
    explanation: "〜ずには済まない = cannot avoid doing ~. 倒産せずには済まない = cannot avoid going bankrupt.",
  },
  {
    id: "n2-g4", level: "N2", type: "grammar",
    question: "Choose the correct form: 社長___、全員が賛成した。",
    options: ["をはじめ", "をもって", "をめぐって", "をきっかけに"],
    correctIndex: 0,
    explanation: "〜をはじめ = starting with, including. 社長をはじめ全員が = starting with the president, everyone.",
  },
  {
    id: "n2-g5", level: "N2", type: "grammar",
    question: "Which sentence correctly uses 〜ものの?",
    options: [
      "日本語を勉強したものの、まだ話せない",
      "日本語を勉強するものの、まだ話せない",
      "日本語を勉強したものの、すらすら話せる",
      "日本語を勉強するものの、すらすら話せる",
    ],
    correctIndex: 0,
    explanation: "〜ものの = although/even though (past tense, contradictory result). A is correct.",
  },

  // ─── N2 Reading ──────────────────────────────────────────────────────────────
  {
    id: "n2-r1", level: "N2", type: "reading",
    passage:
      "グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question: "What does the passage say is essential for true communication?",
    options: [
      "Learning multiple foreign languages",
      "Understanding the culture and values behind the language",
      "Avoiding cultural misunderstandings",
      "Traveling to foreign countries",
    ],
    correctIndex: 1,
    explanation: "文化や価値観を理解することが真のコミュニケーションには不可欠 = understanding culture and values is essential for true communication.",
  },
  {
    id: "n2-r2", level: "N2", type: "reading",
    passage:
      "グローバル化が進む現代において、異文化理解の重要性はますます高まっている。単に外国語を習得するだけでなく、その言語の背景にある文化や価値観を理解することが、真のコミュニケーションには不可欠だと言われている。しかし、文化の違いを理解することは容易ではなく、時に誤解や摩擦を生むこともある。",
    question: "What tone does the passage end with?",
    options: [
      "Optimistic — cultural understanding will solve all problems",
      "Cautious — cultural understanding is difficult and can cause friction",
      "Critical — globalization has many downsides",
      "Indifferent — cultural differences do not matter much",
    ],
    correctIndex: 1,
    explanation: "時に誤解や摩擦を生むこともある = it can sometimes cause misunderstandings and friction — a cautious tone.",
  },
  {
    id: "n2-r3", level: "N2", type: "reading",
    passage:
      "近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question: "What are the two main concerns caused by Japan's aging population issue?",
    options: [
      "Housing shortage and traffic congestion",
      "Labor shortage and increased social security costs",
      "Education costs and environmental degradation",
      "Economic recession and immigration problems",
    ],
    correctIndex: 1,
    explanation: "労働力不足や社会保障費の増大が懸念されている = concerns over labor shortage and increased social security costs.",
  },
  {
    id: "n2-r4", level: "N2", type: "reading",
    passage:
      "近年、日本における少子高齢化は深刻な社会問題となっている。出生率の低下と平均寿命の延びにより、労働力不足や社会保障費の増大が懸念されている。政府はさまざまな対策を講じているが、抜本的な解決策はまだ見つかっていない。",
    question: "According to the passage, what is the current status of government solutions?",
    options: [
      "The government has found effective solutions",
      "The government is not taking any action",
      "Fundamental solutions have not yet been found",
      "The government is ignoring the problem",
    ],
    correctIndex: 2,
    explanation: "抜本的な解決策はまだ見つかっていない = fundamental solutions have not yet been found.",
  },
  {
    id: "n2-r5", level: "N2", type: "reading",
    passage:
      "AIの発展は私たちの生活に多大な恩恵をもたらす一方、雇用への影響や倫理的問題も指摘されている。特に、AIによる意思決定の透明性や責任の所在については、法整備も含めた議論が必要とされている。",
    question: "What specific aspect of AI decision-making does the passage highlight as needing discussion?",
    options: [
      "The speed of AI processing",
      "AI's ability to learn from data",
      "Transparency and accountability of AI decisions",
      "The cost of developing AI systems",
    ],
    correctIndex: 2,
    explanation: "AIによる意思決定の透明性や責任の所在 = transparency and accountability of AI decision-making.",
  },

  // ─── N2 Listening ────────────────────────────────────────────────────────────
  {
    id: "n2-l1", level: "N2", type: "listening",
    audioText: "弊社の新製品の発売日が、当初の予定より2週間遅れて、来月15日になることが決まりました。ご不便をおかけしますが、ご了承ください。",
    question: "By how much was the product launch delayed?",
    options: ["1 week", "2 weeks", "1 month", "2 months"],
    correctIndex: 1,
    explanation: "当初の予定より2週間遅れて = 2 weeks later than originally scheduled.",
  },
  {
    id: "n2-l2", level: "N2", type: "listening",
    audioText: "この地区では、毎週月曜日と木曜日に燃えるゴミを収集しています。資源ゴミは第1・第3水曜日のみです。",
    question: "When is recyclable garbage collected?",
    options: [
      "Every Monday and Thursday",
      "Every Wednesday",
      "The 1st and 3rd Wednesday of the month",
      "The 2nd and 4th Wednesday of the month",
    ],
    correctIndex: 2,
    explanation: "第1・第3水曜日のみ = only the 1st and 3rd Wednesdays.",
  },
  {
    id: "n2-l3", level: "N2", type: "listening",
    audioText: "ただいまより、株主総会を開催いたします。本日の議題は、第一に昨年度の業績報告、第二に役員人事についてです。",
    question: "What is the second item on the agenda?",
    options: [
      "Last year's financial results",
      "Executive personnel matters",
      "New product development",
      "Dividend announcements",
    ],
    correctIndex: 1,
    explanation: "第二に役員人事について = second, regarding executive personnel matters.",
  },
  {
    id: "n2-l4", level: "N2", type: "listening",
    audioText: "このシステムのエラーは、サーバーのメンテナンス後に発生しています。原因を調査中ですが、セキュリティ上の問題ではないことが確認されています。",
    question: "When did the system error occur?",
    options: [
      "Before server maintenance",
      "After server maintenance",
      "During server maintenance",
      "Due to a security breach",
    ],
    correctIndex: 1,
    explanation: "サーバーのメンテナンス後に発生 = occurred after server maintenance.",
  },
  {
    id: "n2-l5", level: "N2", type: "listening",
    audioText: "弊社では、環境負荷低減のため、2025年までに二酸化炭素排出量を30%削減することを目標としています。",
    question: "What is the company's environmental target?",
    options: [
      "Reduce CO2 emissions by 20% by 2025",
      "Reduce CO2 emissions by 30% by 2025",
      "Achieve carbon neutrality by 2025",
      "Reduce energy consumption by 30% by 2030",
    ],
    correctIndex: 1,
    explanation: "2025年までに二酸化炭素排出量を30%削減 = reduce CO2 emissions by 30% by 2025.",
  },

  // ─── N1 Vocabulary ───────────────────────────────────────────────────────────
  {
    id: "n1-v1", level: "N1", type: "vocabulary",
    question: "What does 「忖度」(そんたく) mean?",
    options: [
      "Reading between the lines / inferring others' intentions",
      "Direct confrontation",
      "Public declaration",
      "Formal negotiation",
    ],
    correctIndex: 0,
    explanation: "忖度 (sontaku) = guessing or reading another's intentions and acting accordingly — a key concept in Japanese social dynamics.",
  },
  {
    id: "n1-v2", level: "N1", type: "vocabulary",
    question: "What does 「蓋然性」(がいぜんせい) mean?",
    options: ["Certainty", "Probability / likelihood", "Impossibility", "Inevitability"],
    correctIndex: 1,
    explanation: "蓋然性 (gaizensei) = probability, likelihood. Formal/academic term.",
  },
  {
    id: "n1-v3", level: "N1", type: "vocabulary",
    question: "Which best defines 「瑣末」(さまつ)?",
    options: ["Crucial / fundamental", "Trivial / minor details", "Mysterious", "Extravagant"],
    correctIndex: 1,
    explanation: "瑣末 (samatsu) = trivial, minor, petty details — often used in 瑣末なこと (trivial matters).",
  },
  {
    id: "n1-v4", level: "N1", type: "vocabulary",
    question: "What does 「齟齬をきたす」mean?",
    options: [
      "To reach agreement",
      "To create a discrepancy or breakdown",
      "To make progress",
      "To form a consensus",
    ],
    correctIndex: 1,
    explanation: "齟齬をきたす = to cause a discrepancy, breakdown, or misalignment.",
  },
  {
    id: "n1-v5", level: "N1", type: "vocabulary",
    question: "What does 「逡巡する」(しゅんじゅんする) mean?",
    options: ["To act decisively", "To hesitate / waver", "To accelerate", "To conclude"],
    correctIndex: 1,
    explanation: "逡巡する (shunjun suru) = to hesitate, to waver, to be indecisive.",
  },

  // ─── N1 Grammar ──────────────────────────────────────────────────────────────
  {
    id: "n1-g1", level: "N1", type: "grammar",
    question: "Complete: 彼の言葉は、私の心に深く___。",
    options: ["刻まれた", "刻んだ", "刻まされた", "刻もうとした"],
    correctIndex: 0,
    explanation: "刻まれた is the passive form of 刻む. 心に刻まれた = was engraved in my heart.",
  },
  {
    id: "n1-g2", level: "N1", type: "grammar",
    question: "Which correctly uses 〜に足る?",
    options: [
      "信頼するに足る人物だ",
      "信頼に足る人物だ",
      "信頼するに足らない人物だ",
      "Both A and C are correct",
    ],
    correctIndex: 3,
    explanation: "〜に足る = worthy of, sufficient to. Both 'worthy of trust' (A) and 'not worthy of trust' (C) are correct uses.",
  },
  {
    id: "n1-g3", level: "N1", type: "grammar",
    question: "Choose the best completion: 規則___、例外を認めることはできない。",
    options: ["である以上", "であれば", "であるからには", "であっても"],
    correctIndex: 0,
    explanation: "〜である以上 = as long as ~ / given that ~. 規則である以上 = given that it is a rule.",
  },
  {
    id: "n1-g4", level: "N1", type: "grammar",
    question: "Which uses 〜ともなく correctly?",
    options: [
      "彼はテレビを見るともなく、ぼんやりと画面を眺めていた",
      "彼はテレビを見るともなく、集中して見ていた",
      "彼はテレビを見ないともなく眺めていた",
      "彼のテレビはともなく見ていた",
    ],
    correctIndex: 0,
    explanation: "〜ともなく = without really intending to, absently. Implies doing something without full attention.",
  },
  {
    id: "n1-g5", level: "N1", type: "grammar",
    question: "Complete: 長年の研究の末に、___新薬が開発された。",
    options: ["ようやく", "かえって", "むしろ", "あいにく"],
    correctIndex: 0,
    explanation: "ようやく = finally, at last — fits the nuance of achievement after long effort.",
  },

  // ─── N1 Reading ──────────────────────────────────────────────────────────────
  {
    id: "n1-r1", level: "N1", type: "reading",
    passage:
      "人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question: "What is the current academic view of the strong form of the Sapir-Whorf hypothesis?",
    options: [
      "It is widely accepted",
      "It is no longer supported",
      "It is still under debate with no consensus",
      "It has been proven through experiments",
    ],
    correctIndex: 1,
    explanation: "強い形での仮説は現在では支持されていない = the strong form of the hypothesis is no longer supported.",
  },
  {
    id: "n1-r2", level: "N1", type: "reading",
    passage:
      "人間の言語は、単なるコミュニケーションツールではなく、思考そのものを規定する枠組みであるという考え方がある。サピア＝ウォーフ仮説として知られるこの理論は、言語が異なれば世界の認識も異なるという主張であるが、強い形での仮説は現在では支持されていない。しかし、言語が思考に何らかの影響を与えるという弱い形での仮説については、心理言語学の実験によって一定の支持が得られている。",
    question: "What does psycholinguistic research support?",
    options: [
      "The strong form of the hypothesis",
      "The weak form — that language has some influence on thought",
      "That language and thought are completely independent",
      "That all languages structure thought identically",
    ],
    correctIndex: 1,
    explanation: "弱い形での仮説については心理言語学の実験によって一定の支持が得られている = the weak form has received some support from psycholinguistic experiments.",
  },
  {
    id: "n1-r3", level: "N1", type: "reading",
    passage:
      "民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question: "What is the main concern with simple majority rule mentioned in the passage?",
    options: [
      "It is too slow to make decisions",
      "It can suppress minority opinions",
      "It leads to corruption",
      "It is difficult to implement",
    ],
    correctIndex: 1,
    explanation: "単純な多数決は少数意見を抑圧しかねない = simple majority rule can suppress minority opinions.",
  },
  {
    id: "n1-r4", level: "N1", type: "reading",
    passage:
      "民主主義においては、多数決が基本原理とされるが、単純な多数決は少数意見を抑圧しかねない。そのため、少数者の権利保護や熟議民主主義の概念が注目されている。熟議民主主義では、結論を急がず、多様な意見を十分に議論することで、より正当性の高い意思決定を目指す。",
    question: "What is the goal of deliberative democracy as described?",
    options: [
      "To reach conclusions as quickly as possible",
      "To ensure the majority always wins",
      "To achieve more legitimate decision-making through thorough discussion",
      "To eliminate the need for voting",
    ],
    correctIndex: 2,
    explanation: "多様な意見を十分に議論することで、より正当性の高い意思決定を目指す = aims for more legitimate decision-making through thorough discussion of diverse opinions.",
  },
  {
    id: "n1-r5", level: "N1", type: "reading",
    passage:
      "科学的知識は絶対的な真理ではなく、反証可能性を持つ仮説の集積である。カール・ポパーが提唱したこの科学哲学の立場によれば、いかなる科学理論も、反証される可能性を持ち、より精緻な理論に取って代わられる可能性がある。この観点から見れば、科学の進歩とは既存の理論の修正や更新の連続である。",
    question: "According to Popper's philosophy of science described in the passage, what characterizes scientific knowledge?",
    options: [
      "It is absolute and unchangeable truth",
      "It consists of hypotheses that can be falsified",
      "It is based solely on observation without theory",
      "It is determined by consensus among scientists",
    ],
    correctIndex: 1,
    explanation: "反証可能性を持つ仮説の集積である = it is an accumulation of hypotheses that have falsifiability.",
  },

  // ─── N1 Listening ────────────────────────────────────────────────────────────
  {
    id: "n1-l1", level: "N1", type: "listening",
    audioText: "本プロジェクトの予算超過について、取締役会での審議の結果、追加予算の承認は見送られることになりました。代わりに、現行予算内で優先順位を見直すよう、各部門に指示が出ています。",
    question: "What was decided regarding the additional budget?",
    options: [
      "It was approved by the board",
      "Its approval was deferred/postponed",
      "It was rejected permanently",
      "A smaller amount was approved",
    ],
    correctIndex: 1,
    explanation: "追加予算の承認は見送られることになりました = the approval of the additional budget was deferred (passed over).",
  },
  {
    id: "n1-l2", level: "N1", type: "listening",
    audioText: "今般の法改正により、有期契約労働者が同一の使用者との間で、通算5年を超えて契約を更新した場合、労働者の申し込みにより、期間の定めのない労働契約に転換されます。",
    question: "Under this law, when can a fixed-term worker convert to a permanent contract?",
    options: [
      "After 3 years of cumulative contract renewals",
      "After 5 years of cumulative contract renewals with the same employer",
      "After the employer approves the conversion",
      "After completing a trial period",
    ],
    correctIndex: 1,
    explanation: "通算5年を超えて契約を更新した場合、労働者の申し込みにより転換される = after cumulative renewals exceed 5 years, conversion is possible upon the worker's application.",
  },
  {
    id: "n1-l3", level: "N1", type: "listening",
    audioText: "量子コンピュータの実用化に向けた課題は、エラー率の低減と量子ビットの安定性確保です。現在の技術では、環境ノイズによる量子デコヒーレンスが最大の障壁となっています。",
    question: "What is identified as the biggest barrier in current quantum computing technology?",
    options: [
      "The high cost of hardware",
      "Quantum decoherence caused by environmental noise",
      "Lack of programming languages",
      "Insufficient processing speed",
    ],
    correctIndex: 1,
    explanation: "環境ノイズによる量子デコヒーレンスが最大の障壁 = quantum decoherence caused by environmental noise is the biggest barrier.",
  },
  {
    id: "n1-l4", level: "N1", type: "listening",
    audioText: "当該地域における生物多様性の損失は、農業の集約化と土地利用の変化が主要因とされています。生態系サービスの劣化は、長期的には食料安全保障にも影響を及ぼしかねません。",
    question: "What are the main causes of biodiversity loss in the region?",
    options: [
      "Climate change and pollution",
      "Agricultural intensification and land use changes",
      "Overfishing and deforestation",
      "Urbanization and tourism",
    ],
    correctIndex: 1,
    explanation: "農業の集約化と土地利用の変化が主要因 = agricultural intensification and land use changes are the main factors.",
  },
  {
    id: "n1-l5", level: "N1", type: "listening",
    audioText: "憲法改正の発議には、衆議院と参議院それぞれの総議員の3分の2以上の賛成が必要であり、その後、国民投票において過半数の賛成を得なければなりません。",
    question: "What is required after a constitutional amendment passes in the parliament?",
    options: [
      "Approval by the Supreme Court",
      "A majority vote in a national referendum",
      "Approval by the Cabinet",
      "Ratification by all prefectures",
    ],
    correctIndex: 1,
    explanation: "国民投票において過半数の賛成を得なければならない = must obtain majority approval in a national referendum.",
  },
];
