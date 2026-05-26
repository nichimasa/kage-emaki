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
    title_jp: "百鬼夜行",
    title_en: "Night Parade of Demons",
    story_jp: "竹林の奥、提灯の灯が揺れる道に、百の鬼が列をなして歩む夜がある。その名を百鬼夜行という。返り血に塗れた侍・蒼牙は、一人その道に立ちはだかった。鬼たちの眼が光る。しかし蒼牙は刃を下げず、ただ前を向いた。",
    story_en: "Deep within the bamboo grove, a hundred demons march in procession — the legendary Hyakki Yako. Soga, a samurai stained with battle, stood alone in their path. The demons' eyes gleamed. Yet Soga did not lower his blade. He simply faced forward."
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
  }
 

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
