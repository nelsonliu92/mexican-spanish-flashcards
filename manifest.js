// 每日一字卡片清單。每天排程執行完會自動在最後面 push 一筆新資料。
//
// 統一格式（2026-09-21 起全面改用即時 HTML 渲染卡片，2026-09-01~19 的舊卡片
// 已於 2026-09-21 從合成截圖轉錄回結構化資料，圖片改用裁切出的純情境圖）：
//   {
//     date: "YYYY-MM-DD",
//     image: "每日一字/<date>-photo.jpg",   // 純情境插圖（無文字），瀏覽器即時排版文字
//     word_es: "el ejemplo",
//     pos: "n.m.",
//     word_zh: "中文翻譯",
//     desc_zh: "中文說明...",
//     example_es: "西語例句...",
//     example_zh: "例句中文翻譯..."
//   }
window.CARD_LIST = [
  {
    date: "2026-09-01",
    image: "每日一字/2026-09-01-photo.jpg",
    word_es: "la quesadilla",
    pos: "n.f.",
    word_zh: "墨西哥烤餅（夾餡玉米餅）",
    desc_zh: "用玉米餅或麵粉餅對折，夾入起司或各種餡料（雞肉、菇類、南瓜花等）烤或煎至融化，是墨西哥最國民的街頭小吃之一，早餐、消夜都很常見。",
    example_es: "¿Me da dos quesadillas de flor de calabaza, por favor?",
    example_zh: "請給我兩份南瓜花起司烤餅，謝謝。"
  },
  {
    date: "2026-09-02",
    image: "每日一字/2026-09-02-photo.jpg",
    word_es: "¿Qué onda?",
    pos: "expr.",
    word_zh: "你好嗎？／怎麼樣？（口語問候）",
    desc_zh: "墨西哥人打招呼最常用的口語說法之一，介於「最近如何」和「怎麼回事」之間，朋友、同輩之間隨時都能用，語氣輕鬆隨性。",
    example_es: "¡Qué onda, güey! ¿Cómo has estado?",
    example_zh: "嘿，老兄！你最近怎麼樣？"
  },
  {
    date: "2026-09-03",
    image: "每日一字/2026-09-03-photo.jpg",
    word_es: "el metro",
    pos: "n.m.",
    word_zh: "地鐵",
    desc_zh: "墨西哥城的地鐵系統是全球運量最大的地鐵之一，票價非常便宜，是當地人通勤上班、上學最主要的交通工具。",
    example_es: "Es más rápido si te vas en metro a esta hora.",
    example_zh: "這個時間搭地鐵去會比較快。"
  },
  {
    date: "2026-09-04",
    image: "每日一字/2026-09-04-photo.jpg",
    word_es: "la alberca",
    pos: "n.f.",
    word_zh: "游泳池",
    desc_zh: "在墨西哥，「piscina」比較少用，日常都說「alberca」。夏天炎熱時，公共或社區游泳池是家庭週末最愛去的地方。",
    example_es: "Los niños quieren ir a la alberca este fin de semana.",
    example_zh: "孩子們這個週末想去游泳池。"
  },
  {
    date: "2026-09-05",
    image: "每日一字/2026-09-05-photo.jpg",
    word_es: "el compa",
    pos: "n.m.",
    word_zh: "兄弟／哥們（好朋友的暱稱）",
    desc_zh: "「compa」是「compadre」的簡稱，原本指教父／好友的關係，現在墨西哥人常用來稱呼熟識的朋友，帶有親切、江湖義氣的感覺。",
    example_es: "Oye compa, ¿me echas la mano con esto?",
    example_zh: "欸兄弟，可以幫我一下這個嗎？"
  },
  {
    date: "2026-09-06",
    image: "每日一字/2026-09-06-photo.jpg",
    word_es: "la lana",
    pos: "n.f.",
    word_zh: "錢（俚語）",
    desc_zh: "字面意思是「羊毛」，但在墨西哥口語中是「錢」的俚語說法，使用頻率很高，幾乎所有年齡層都會用。",
    example_es: "No traigo lana ahorita, ¿me prestas para el camión?",
    example_zh: "我現在身上沒錢，可以借我搭車的錢嗎？"
  },
  {
    date: "2026-09-07",
    image: "每日一字/2026-09-07-photo.jpg",
    word_es: "el changarro",
    pos: "n.m.",
    word_zh: "小商店／小攤位",
    desc_zh: "泛指街角的小雜貨店、小生意，通常是家庭經營、規模不大，但幾乎每個社區轉角都會有一間，是墨西哥常民經濟的縮影。",
    example_es: "Mi tío puso un changarro de tacos en la esquina.",
    example_zh: "我叔叔在轉角開了一間賣塔可的小攤。"
  },
  {
    date: "2026-09-08",
    image: "每日一字/2026-09-08-photo.jpg",
    word_es: "la chamba",
    pos: "n.f.",
    word_zh: "工作（俚語）",
    desc_zh: "墨西哥人日常幾乎都用「chamba」取代正式的「trabajo」，動詞形式「chambear」則是「工作、幹活」，非常生活化的用詞。",
    example_es: "Ya me voy, tengo mucha chamba pendiente.",
    example_zh: "我要走了，還有很多工作沒做完。"
  },
  {
    date: "2026-09-09",
    image: "每日一字/2026-09-09-photo.jpg",
    word_es: "el antojito",
    pos: "n.m.",
    word_zh: "街頭小吃／零嘴",
    desc_zh: "泛指墨西哥街邊各式各樣的小吃，例如塔可、烤玉米、玉米餅捲等，「antojo」原意是「渴望、想吃的慾望」，非常貼切地描述這些讓人一看就想吃的小吃。",
    example_es: "Vamos por unos antojitos después del cine.",
    example_zh: "看完電影後我們去吃點街頭小吃吧。"
  },
  {
    date: "2026-09-10",
    image: "每日一字/2026-09-10-photo.jpg",
    word_es: "la neta",
    pos: "expr.",
    word_zh: "真的／老實說（口語）",
    desc_zh: "「neta」在墨西哥口語中代表「真相、真的」，「¿Neta?」是「真的假的？」的意思，是年輕人之間非常高頻的用語。",
    example_es: "La neta, no sabía que ibas a venir.",
    example_zh: "老實說，我不知道你會來。"
  },
  {
    date: "2026-09-11",
    image: "每日一字/2026-09-11-photo.jpg",
    word_es: "el súper",
    pos: "n.m.",
    word_zh: "超市",
    desc_zh: "「supermercado」的口語簡稱，墨西哥人日常買生活用品幾乎都直接說「el súper」，簡短又方便。",
    example_es: "Voy al súper, ¿se te ofrece algo?",
    example_zh: "我要去超市，你需要什麼嗎？"
  },
  {
    date: "2026-09-12",
    image: "每日一字/2026-09-12-photo.jpg",
    word_es: "la cruda",
    pos: "n.f.",
    word_zh: "宿醉",
    desc_zh: "字面意思是「生的、未煮熟的」，但在墨西哥口語中專門用來形容喝酒隔天的宿醉狀態，形容詞用法是「estar crudo/a」。",
    example_es: "Traigo una cruda espantosa después de la fiesta.",
    example_zh: "派對過後我宿醉得很嚴重。"
  },
  {
    date: "2026-09-13",
    image: "每日一字/2026-09-13-photo.jpg",
    word_es: "el refresco",
    pos: "n.m.",
    word_zh: "汽水／碳酸飲料",
    desc_zh: "墨西哥是全世界人均汽水消費量最高的國家之一，「refresco」泛指所有碳酸飲料，餐廳點餐時服務生常會直接問要配哪一種。",
    example_es: "¿Qué refresco quieres, de cola o de naranja?",
    example_zh: "你要哪種汽水，可樂還是柳橙口味？"
  },
  {
    date: "2026-09-14",
    image: "每日一字/2026-09-14-photo.jpg",
    word_es: "la fiesta",
    pos: "n.f.",
    word_zh: "派對／慶祝活動",
    desc_zh: "墨西哥文化中派對是生活的重要一環，無論生日、婚禮還是宗教節日，都少不了音樂、食物與親朋好友齊聚一堂的「fiesta」。",
    example_es: "Este sábado hay fiesta en la casa de mi prima.",
    example_zh: "這個星期六我表妹家有派對。"
  },
  {
    date: "2026-09-15",
    image: "每日一字/2026-09-15-photo.jpg",
    word_es: "el mole",
    pos: "n.m.",
    word_zh: "摩雷醬（墨西哥經典醬料）",
    desc_zh: "用可可、辣椒、香料等數十種食材熬煮而成的濃郁醬汁，是墨西哥最具代表性的傳統料理之一，常見於節慶與家庭聚餐場合，尤其獨立紀念日前後家家戶戶都會準備。",
    example_es: "Mi abuela prepara mole poblano para las fiestas patrias.",
    example_zh: "我奶奶在國慶假期會準備普埃布拉風味摩雷醬。"
  },
  {
    date: "2026-09-16",
    image: "每日一字/2026-09-16-photo.jpg",
    word_es: "el grito",
    pos: "n.m.",
    word_zh: "獨立呼喊（墨西哥獨立紀念日的吶喊儀式）",
    desc_zh: "每年9月15日深夜，全國上下會重現1810年神父伊達爾戈號召起義的「多洛雷斯呼喊」，總統會在國家宮陽台帶領民眾高喊「墨西哥萬歲！」，隔天9月16日正是墨西哥獨立紀念日。",
    example_es: "Vamos al zócalo a gritar el Grito de Independencia.",
    example_zh: "我們去憲法廣場一起喊獨立紀念的口號吧。"
  },
  {
    date: "2026-09-17",
    image: "每日一字/2026-09-17-photo.jpg",
    word_es: "la cantina",
    pos: "n.f.",
    word_zh: "酒館／小酒吧",
    desc_zh: "傳統墨西哥式的酒館，通常提供龍舌蘭、啤酒，點酒還會附上小菜，是男性朋友下班後小聚、看球賽聊天的傳統去處，帶有濃厚的市井生活氣息。",
    example_es: "Después del trabajo nos vemos en la cantina de la esquina.",
    example_zh: "下班後我們在轉角的酒館見。"
  },
  {
    date: "2026-09-18",
    image: "每日一字/2026-09-18-photo.jpg",
    word_es: "el camión",
    pos: "n.m.",
    word_zh: "公車（墨西哥用語）",
    desc_zh: "在墨西哥，日常搭乘的公共汽車幾乎都叫「el camión」，而不是其他西語地區常用的「el autobús」。這是墨西哥人通勤、上下班、上下學最常用的交通方式，尤其在城市裡隨招隨停的老式公車特別有代表性。",
    example_es: "Voy a tomar el camión para llegar a la chamba.",
    example_zh: "我要搭公車去上班。"
  },
  {
    date: "2026-09-19",
    image: "每日一字/2026-09-19-photo.jpg",
    word_es: "la recámara",
    pos: "n.f.",
    word_zh: "臥室",
    desc_zh: "在墨西哥，日常對話中通常用「la recámara」來稱呼「臥室」，而不是西班牙本土常用的「el dormitorio」或「la habitación」。這是墨西哥西語最具代表性的地域用詞之一，幾乎家家戶戶都這樣說。若跟墨西哥朋友聊到房子格局，用這個字準沒錯，聽起來也更道地、更貼近當地人的說法。",
    example_es: "Voy a mi recámara a descansar un rato antes de la cena.",
    example_zh: "我要去我的臥室休息一下，然後再吃晚餐。"
  },
  {
    date: "2026-09-20",
    image: "每日一字/2026-09-20-photo.jpg",
    word_es: "la jefa",
    pos: "n.f. (口語)",
    word_zh: "老媽（俚語稱呼母親）",
    desc_zh: "在墨西哥，人們常用「mi jefa」（字面意思是「我的女老闆」）來親暱地稱呼自己的媽媽，「mi jefe」則是稱呼爸爸。這說法把父母比喻成家裡真正做主的「老闆」，帶著又尊敬又親切的味道，在朋友間聊天、傳訊息時非常常見。跟長輩或不熟的人講話時，還是用「mi mamá」比較穩妥。",
    example_es: "Voy a comer a la casa de mi jefa este domingo.",
    example_zh: "這週日我要去我老媽家吃飯。"
  },
  {
    date: "2026-09-21",
    image: "每日一字/2026-09-21-photo.jpg",
    word_es: "el chipichipi",
    pos: "n.m. (口語)",
    word_zh: "毛毛雨、綿綿細雨（口語）",
    desc_zh: "「el chipichipi」是墨西哥中部很生活化的說法，用來形容那種下不停但雨勢很小、綿綿不絕的毛毛雨，尤其在哈拉帕（Xalapa）等城市經常聽到，當地甚至有「chipichipi 之城」的暱稱。這個疊字唸起來俏皮可愛，朋友聊天抱怨天氣時很常會用到。",
    example_es: "No traigo paraguas, pero no importa, nomás está cayendo un chipichipi.",
    example_zh: "我沒帶傘，不過沒關係，只是下著毛毛雨而已。"
  },
  {
    date: "2026-09-22",
    image: "每日一字/2026-09-22-photo.jpg",
    word_es: "los chilaquiles",
    pos: "n.m.pl.",
    word_zh: "奇拉基萊斯（墨西哥式玉米片早餐）",
    desc_zh: "用炸過或烤過的玉米片碎塊，淋上紅或綠莎莎醬燉煮至微軟，再撒上起司碎、酸奶油、洋蔥絲，通常還會加顆荷包蛋或雞肉，是墨西哥人週末或宿醉隔天早上最愛吃的國民早餐。紅醬派和綠醬派誰比較道地，幾乎是每個家庭都能吵起來的話題。",
    example_es: "Los domingos mi mamá siempre nos hace chilaquiles verdes con huevo.",
    example_zh: "每個星期天我媽媽總是會幫我們做加蛋的綠莎莎奇拉基萊斯。"
  }
];
