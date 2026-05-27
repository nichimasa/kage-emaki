// =====================================================
// 画像追加・編集はこのファイルだけ変更すればOKです
// 新しい画像を追加するときは、galleryの末尾に
// 下記と同じ形式でコピー＆追加してください
// =====================================================

const FEATURED = {
  file: "images/main.png",
  title_jp: "京都幻夢",
  title_en: "Kyoto Phantom Dream",
  desc_jp: "京の闇に宿る神々、妖狐、鬼、そして侍。\nAIが紡ぐ幻想の絵巻物語。",
  desc_en: "Gods, fox spirits, demons and samurai in the darkness of Kyoto.\nA phantom picture scroll woven by AI."
};

const GALLERY = [
  {
    file: "images/img01.png",
    series: "I",
    title_jp: "竹林の鬼狩り",
    title_en: "Demon Hunter of the Bamboo Grove",
    story_jp: "雨に濡れた竹林の奥、提灯に照らされた「百鬼夜行」の文字が揺れる。侍・影牙は刃を抜き、静かに息を整えた。左右の竹から無数の鬼と亡者が這い出でる——目玉の妖、角を持つ鬼、黒髪の幽霊。しかし影牙は動じない。「俺を喰らいたければ、かかってこい」。石段の先、鳥居だけが静かにそこにあった。",
    story_en: "Deep within a rain-soaked bamboo grove, a paper lantern sways bearing the words Night Parade of a Hundred Demons. The samurai Kagekiba draws his blade and steadies his breath. From the bamboo on all sides, countless demons crawl forth — eyeball spirits, horned oni, black-haired ghosts. Yet Kagekiba does not flinch. Come at me if you dare. Beyond the stone steps, the torii gate stood silent and waiting."
  },
  {
    file: "images/img02.png",
    series: "II",
    title_jp: "花月温泉",
    title_en: "Kagetsu Hot Springs",
    story_jp: "湯煙漂う山奥の温泉郷、花月。ここは人と妖が静かに共存する、秘密の楽園。赤い橋の袂に佇む娘・花鈴は、この地の女将にして、狐神の末裔。訪れた旅人は皆、帰り道を忘れてしまうという。",
    story_en: "Kagetsu — a hidden hot spring village veiled in drifting steam. Here, humans and spirits coexist in quiet harmony. Karin, the young innkeeper by the red bridge, is a descendant of the fox deity. They say every traveler who visits forgets the way home."
  },
  {
    file: "images/img03.png",
    series: "III",
    title_jp: "清水の龍神",
    title_en: "Dragon God of Kiyomizu",
    story_jp: "清水寺の夜、満月が山を照らすとき、天より龍が降りるという言い伝えがある。老僧・玄海はその夜を七十年待ち続けた。龍の眼が燃えるように光り、玄海の白衣が風に舞った。",
    story_en: "There is a legend that when the full moon illuminates Kiyomizudera, a dragon descends from the heavens. The aged monk Genkai had waited seventy years for that night. The dragon's eyes blazed like twin flames, and Genkai's white robes swirled in the sudden wind."
  },
  {
    file: "images/img04.png",
    series: "IV",
    title_jp: "緋色の剣士",
    title_en: "Crimson Swordswoman",
    story_jp: "紅葉が血のように舞い散る境内に、一人の女剣士が立つ。名は朱音。天照大神に仕える巫女にして、最後の剣鬼。彼女の白い着物に滲む赤は、散った紅葉か、それとも——鳥居の向こうに影が歩み出した。",
    story_en: "In the temple grounds where crimson leaves scatter like blood, a lone swordswoman stands. Her name is Akane — a shrine maiden of Amaterasu, and the last of the sword demons. The red staining her white kimono — is it fallen leaves, or something else? A shadow steps forward beyond the torii gate."
  },
  {
    file: "images/img05.png",
    series: "V",
    title_jp: "狐と侍の邂逅",
    title_en: "Encounter of Fox and Samurai",
    story_jp: "血月が照らす京の夜、妖狐の姫・玲と流れ者の侍・黒斗は、鳥居の前で出会った。周囲には無数の鬼と妖が溢れ、二人は背中合わせで刃と炎を構える。信じるわけじゃない。ただ、生き延びたいだけよ。",
    story_en: "Beneath a blood-red moon over Kyoto, the fox spirit princess Rei and the wandering samurai Kuro met before the torii gate. Countless demons surrounded them, and the two stood back to back. I don't trust you, she said. I simply want to survive this night."
  },
  {
    file: "images/img06.png",
    series: "VI",
    title_jp: "稲荷の狐",
    title_en: "Fox of Inari Shrine",
    story_jp: "満月の夜、稲荷神社の鳥居に白い影が揺れる。九つの尾を持つ神狐・白珠は、千年の時を超えて人の世を見守り続けてきた。狐面の娘はその化身か——青い炎を従えた白狐たちが、静かに頭を垂れた。",
    story_en: "On a night of the full moon, a white shadow sways at the torii of Inari Shrine. Hakuju, the divine fox bearing nine tails, has watched over the human world across a thousand years. Is the girl wearing the fox mask her incarnation? The white foxes wreathed in blue flame bowed their heads in silent reverence."
  },
  {
    file: "images/img07.png",
    series: "VII",
    title_jp:  "稲荷大神の社",
    title_en: "Shrine of the Great Fox God",
    story_jp: "雨降る夜、稲荷大神を祀る社が赤と青の炎に浮かび上がる。狛狐が左右に鎮座し、青い鬼火が石段を照らす。この場所に足を踏み入れた者は、神の試練を受けることになる。果たして、あなたは何を願うのか。",
    story_en: "On a rainy night, the shrine of the Great Fox God Inari glows with red lanterns and blue spirit flames. Guardian fox statues flank the steps as ghostly blue fire illuminates the stone stairway. Those who enter face a divine trial. What is it that you seek to wish for?"
  },
  {
    file: "images/img08.png",
    series: "VIII",
    title_jp: "悪霊退散",
    title_en: "Exorcism at the Torii",
    story_jp: "紫電が空を裂き、巨大な鬼神が鳥居の上に降臨した夜。陰陽師と侍は背中合わせで対峙する。陰陽師の呪陣が紫の光を放ち、侍の刃が雨の中で煌めく。その言葉が嵐の中に消えていった——悪霊退散。",
    story_en: "A night when purple lightning tears the sky and a great demon god descends upon the torii. An onmyoji and a samurai stand back to back. The onmyoji's summoning circle blazes with violet light as the samurai's blade gleams through the rain. Those words vanished into the storm — Evil spirits, begone."
  },
  {
    file: "images/img09.png",
    series: "IX",
    title_jp: "桜魔京",
    title_en: "Sakura Demon Capital",
    story_jp: "満開の桜が血色の月に染まる夜、鬼将軍が橋の上で侍を待ち受けていた。龍が空を舞い、幽霊が木々の間に漂う。ここは現と幽冥が重なり合う桜魔京——刃を持つ者だけが、この夜を生き延びられる。",
    story_en: "On a night when cherry blossoms are dyed crimson by the blood moon, a demon general awaits a samurai on the bridge. A dragon soars and ghosts drift between the trees. This is Sakura Demon Capital — where the living world overlaps with the realm of the dead. Only those who carry a blade survive this night."
  },
  {
    file: "images/img10.png",
    series: "X",
    title_jp: "二寧坂の夕暮れ",
    title_en: "Twilight on Nineizaka",
    story_jp: "夕暮れ時、二寧坂の石畳に金色の光が差し込む。桜が満開に咲き誇る中、一人の女性が五重塔を目指してゆっくりと歩いていく。この坂道は、迷い込んだ者が現の世に戻れなくなるという——彼女は今日、無事に帰れるだろうか。",
    story_en: "As twilight falls, golden light pours across the stone steps of Nineizaka. Beneath cherry blossoms in full bloom, a woman walks slowly toward the five-storied pagoda. Legend says those who wander onto this slope cannot find their way back to the waking world. Will she make it home safely today?"
  },
  {
    file: "images/img11.png",
    series: "XI",
    title_jp: "血月の百鬼街道",
    title_en: "Blood Moon Demon Parade",
    story_jp: "夜の京の大路に、血のような月が昇る夜。狐面の巫女と白狐を先頭に、鬼、妖、亡者が粛々と列をなして歩む。これが伝説の百鬼夜行——その行列に迷い込んだ者は、二度と人の世に戻れないという。",
    story_en: "On a night when a blood-red moon rises over Kyoto's great avenue, a procession of demons, spirits and the undead marches solemnly, led by a fox-masked shrine maiden. This is the legendary Night Parade of a Hundred Demons. Any soul who wanders into its path never returns to the world of the living."
  },
  {
    file: "images/img12.png",
    series: "XII",
    title_jp: "温泉街の宵",
    title_en: "Evening in the Hot Spring Town",
    story_jp: "夕暮れの温泉街に、浴衣姿の二人が並んで歩く。川沿いの旅館から湯煙が立ち上り、提灯の灯りが石畳に映える。この町には古い言い伝えがある——宵の温泉街で出会った縁は、来世まで続くのだと。",
    story_en: "Two young women in yukata stroll side by side through a hot spring town at dusk. Steam rises from the riverside inns as lantern light reflects off the stone-paved streets. An old legend speaks of this town — bonds formed here at dusk are said to last into the next life."
  },
  {
    file: "images/img13.png",
    series: "XIII",
    title_jp: "月夜の露天風呂",
    title_en: "Moonlit Open-Air Bath",
    story_jp: "満月の夜、山深くに佇む露天風呂。湯煙が冷えた空気に溶け、桜の花びらが静かに湯面に降り積もる。一人の娘が遠くの灯りを眺めながら、深く息を吐いた。この静寂は、現の世のものではないかもしれない。",
    story_en: "A moonlit night, deep in the mountains. Steam dissolves into the cold air as cherry blossoms drift silently onto the water. A young woman exhales slowly, gazing at the distant lights below. This silence may not belong to the world of the living."
  },
  {
    file: "images/img14.png",
    series: "XIV",
    title_jp: "夏祭りの縁",
    title_en: "Summer Festival Bond",
    story_jp: "幼い頃から共に育った二人は、いつしか言葉にできない感情を胸に抱えるようになっていた。祭りの夜、隣を歩く彼女の横顔を、彼はそっと盗み見た。えんむすびの神が祀られるこの社では、祭りの夜に想いを伝えた者の縁は、来世まで続くという言い伝えがある。花火が夜空に大きく咲いた。今夜こそ、言わなければ——彼は静かに、手を伸ばした。",
    story_en: "They had grown up side by side since childhood, and somewhere along the way, feelings neither could name had begun to take root. On the night of the festival, he stole a quiet glance at her face as she walked beside him. At this shrine — home to the god of bonds — there is a legend that those who speak their feelings on festival nights will be bound together across lifetimes. A great firework bloomed in the dark sky above. Tonight, at last, he had to say it. Slowly, he reached out his hand."
  },
  {
    file: "images/img15.png",
    series: "XV",
    title_jp: "竹林の求道者",
    title_en: "Seeker of the Bamboo Path",
    story_jp: "師は死の床でこう言った。剣の極みは、斬ることではない。斬らずに済む道を見つけることだ。その言葉の意味が、十年経った今もわからなかった。国を追われ、仲間を失い、ただ剣だけを拠り所に生きてきた。しかし今、この静寂の竹林に立つと、風が竹をそよがせるその音の中に、何かが聞こえる気がした。師の声ではない。もっと深いところから来る、何か——彼はゆっくりと、門へと歩み出した。",
    story_en: "On his deathbed, his master had said: the pinnacle of the sword is not in the act of cutting, but in finding the path where no cut is needed. Ten years had passed, and still those words held no meaning for him. Driven from his homeland, stripped of his companions, he had survived with nothing but his blade. Yet now, standing in the stillness of this bamboo grove, something in the sound of wind through the stalks seemed to reach him — not his master's voice, but something deeper, older. He took a slow step forward toward the gate."
  },
  {
    file: "images/img16.png",
    series: "XVI",
    title_jp: "巫女と神狐",
    title_en: "Shrine Maiden and the Divine Fox",
    story_jp: "朱莉が稲荷神社に奉職して三年が経つが、その白い狐を見たのは初めてだった。古老の神職はかつてこう語っていた。「白狐が人に頭を垂れるとき、その者は神に選ばれた証だ。しかし選ばれた者には、必ず試練が訪れる」。桜の花びらが二人の間をゆっくりと舞い落ちた。朱莉は怖くはなかった。ただ、この温かな眼差しを向ける小さな命が、自分に何かを伝えようとしているのだと、確かに感じた。その意味を知るのは、きっとまだ先のことだ。",
    story_en: "Three years had passed since Akari began serving at the Inari shrine, yet she had never once seen the white fox before today. An elder priest had spoken of it long ago: when the white fox lowers its head to a human, that person has been chosen by the divine — but those who are chosen are always met with trials to follow. Cherry blossoms drifted slowly between them. Akari felt no fear. She simply sensed, with quiet certainty, that this small creature gazing at her with such warmth was trying to tell her something. The meaning of it all, she knew, would only become clear with time."
  },
  {
    file: "images/img17.png",
    series: "XVII",
    title_jp: "雲海の巡礼",
    title_en: "Pilgrimage Above the Clouds",
    story_jp: "二人が旅を始めたのは、まだ雪が残る早春のことだった。侍・玄は巫女・澪を、遠い山の神殿まで送り届けるよう命じられた。当初は無言の道連れに過ぎなかった。しかし幾つもの峠を越え、嵐をくぐり抜け、共に飢えを凌いだ夜を経て、二人の間に言葉では表せない何かが生まれていた。そしてついに、雲海を見下ろすこの場所に辿り着いた今——玄は気づいてしまった。この旅が終われば、二人は別々の道を歩まねばならないと。それでも彼は、この景色を彼女と共に見られたことを、生涯忘れないだろう。",
    story_en: "Their journey had begun in early spring, when snow still clung to the mountain passes. The samurai Gen had been charged with escorting the shrine maiden Mio to a temple deep in the distant mountains — nothing more than a silent obligation. Yet as they crossed pass after pass, weathered storms together and shared nights of quiet hunger, something beyond words had grown between them. Now, at last standing here above the sea of clouds, Gen understood with a pang what he had been unwilling to face: when this journey ended, they would each walk separate paths. Even so, he knew he would carry this moment — this view, shared with her — for the rest of his life."
  },
 

  // =====================================================
  // 新しい画像を追加するときはここにコピーして追加：
  // =====================================================
  // ,{
  //   file: "images/img14.png",
  //   series: "XIV",
  //   title_jp: "タイトル（日本語）",
  //   title_en: "Title (English)",
  //   story_jp: "物語文（日本語）",
  //   story_en: "Story (English)"
  // }
];
