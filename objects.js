
var nodes_list = [

  /*
  
   {"id": "xxxxx", "label": "xxxxx", "linked_nodes": ["xxxxx"]},

   
  */

  // Plum Blossom 
  {"id": "Yang Bing", "label": "Yang Bing", "linked_nodes": ["Meihua Quan (Plum Blossom Fist)"]},
  {"id": "Feng Keshan", "label": "Feng Keshan", "linked_nodes": ["Meihua Quan (Plum Blossom Fist)"]},

  {"id": "Meihua Quan (Plum Blossom Fist)", "label": "Meihua Quan (Plum Blossom Fist)", "linked_nodes": ["Meishan Quan", "Wan Fuzi", "Zhang Yimin", "De'ang Meihua Quan", "Han Kuisheng"]},

  {"id": "Wan Fuzi", "label": "Wan Fuzi", "linked_nodes": ["Hunan Meihua Quan"]},
  {"id": "Zhang Yimin", "label": "Zhang Yimin", "linked_nodes": ["Zhou Beitao"]},
  {"id": "Zhou Beitao", "label": "Zhou Beitao", "linked_nodes": ["Emei Meihua Quan"]},

  {"id": "Han Kuisheng", "label": "Han Kuisheng", "linked_nodes": ["Fu Xiushan"]},
  {"id": "Fu Xiushan", "label": "Fu Xiushan", "linked_nodes": ["Meihua Jie Quan"]},
  
  // Shuai Jiao
   {"id": "Jiaodi", "label": "Jiaodi", "linked_nodes": ["Jiao Li"]},
   {"id": "Jiao Li", "label": "Jiao Li", "linked_nodes": ["Ma Liang"]},
   {"id": "Kangxi Emperor", "label": "Kangxi Emperor", "linked_nodes": ["Shanpuying"]},
   {"id": "Shanpuying", "label": "Shanpuying", "linked_nodes": ["Jiao Li"]},
   {"id": "Ma Liang", "label": "Ma Liang", "linked_nodes": ["Central Guoshu Institute"]},
   {"id": "Central Guoshu Institute", "label": "Central Guoshu Institute", "linked_nodes": ["Shuai Jiao"]},

  
  // Sumo
   {"id": "Hosokawa Clan", "label": "Hosokawa Clan", "linked_nodes": ["Yoshida Family"]},
   {"id": "Sumo", "label": "Sumo", "linked_nodes": ["Dewanoumi Ichimon", "Nishonoseki Ichimon", "Takasago Ichimon", "Tokitsukaze Ichimon", "Isegahama Ichimon", "Kusazuri Heya", "Onogawa Heya"]},
    {"id": "Tokitsukaze Ichimon", "label": "Tokitsukaze Ichimon", "linked_nodes": ["Isenoumi Heya"]},
    {"id": "Isenoumi Heya", "label": "Isenoumi Heya", "linked_nodes": ["Tanikaze Kajinosuke", "Nishikigi Tetsuya", "Wakaikari"]},

    
    {"id": "Kusazuri Heya", "label": "Kusazuri Heya", "linked_nodes": ["Onogawa Kisaburo"]},
    {"id": "Onogawa Heya", "label": "Onogawa Heya", "linked_nodes": ["Onogawa Kisaburo"]},
    
    {"id": "Isa Tomomune", "label": "Isa Tomomune", "linked_nodes": ["Date Clan"]},
    {"id": "Date Clan", "label": "Date Clan", "linked_nodes": ["Tanikaze Kajinosuke"]},
    {"id": "Tanikaze Kajinosuke", "label": "Tanikaze Kajinosuke", "linked_nodes": ["Raiden Tameemon"]},

  
    {"id": "Samurai", "label": "Samurai", "linked_nodes": ["The Imperial Clan", "Takenouchi Hisamori", "Saigo Tanomo", "Sakakibara Kenkichi", "Date Clan", "Hosokawa Clan", "Miyamoto Musashi"]},
    {"id": "Miyamoto Musashi", "label": "Miyamoto Musashi", "linked_nodes": ["Niten Ichi Ryu"]},
    {"id": "The Imperial Clan", "label": "The Imperial Clan", "linked_nodes": ["Gempeitokitsu"]},
    {"id": "Gempeitokitsu", "label": "Gempeitokitsu", "linked_nodes": ["Taira Clan", "Minamoto Clan", "Fujiwara Clan", "Tachibana Clan"]},
    {"id": "Taira Clan", "label": "Taira Clan", "linked_nodes": ["Chiba Tsunetane"]},
    {"id": "Chiba Tsunetane", "label": "Chiba Tsunetane", "linked_nodes": ["Chiba Clan"]},
    {"id": "Minamoto Clan", "label": "Minamoto Clan", "linked_nodes": ["Matsudaira Clan", "Sasaki Clan", "Nishina Clan"]},
    {"id": "Matsudaira Clan", "label": "Matsudaira Clan", "linked_nodes": ["Tokugawa Clan"]},
    {"id": "Tokugawa Clan", "label": "Matsudaira Clan", "linked_nodes": ["Hattori Hanzo"]},
    {"id": "Hattori Hanzo", "label": "Hattori Hanzo", "linked_nodes": ["beatrix kiddo"]},
    {"id": "Chiba Clan", "label": "Chiba Clan", "linked_nodes": ["Iizasa Choisai Ienao"]},

  // Ninjitsu
  {"id": "Ninjitsu", "label": "Ninjitsu", "linked_nodes": ["Iga Ryu", "Koga Ryu", "Togakure Ryu"]},
  {"id": "Nishina Clan", "label": "Nishina Clan", "linked_nodes": ["Daisuke Nishina"]},
  {"id": "Kain Doshi", "label": "Kain Doshi", "linked_nodes": ["Daisuke Nishina"]},
  {"id": "Daisuke Nishina", "label": "Daisuke Nishina", "linked_nodes": ["Togakure Ryu", "Shima Kosanta Minamoto no Kanesada"]},
  {"id": "Iga Ikki", "label": "Iga Ikki", "linked_nodes": ["Iga Ryu"]},
  {"id": "Iga Ryu", "label": "Iga Ryu", "linked_nodes": ["Momochi Sandayu", "Fujibayashi Nagato", "Tateoka Doshun"]},

  {"id": "Koga Ikki", "label": "Koga Ikki", "linked_nodes": ["Koga Ryu"]},
  {"id": "Sasaki Clan", "label": "Sasaki Clan", "linked_nodes": ["Rokkaku Clan"]},

   {"id": "Shima Kosanta Minamoto no Kanesada", "label": "Shima Kosanta Minamoto no Kanesada", "linked_nodes": ["Goro Togakure"]},
   {"id": "Goro Togakure", "label": "Goro Togakure", "linked_nodes": ["Kosanta Togakure"]},
   {"id": "Kosanta Togakure", "label": "Kosanta Togakure", "linked_nodes": ["Kisanta Koga"]},
   {"id": "Kisanta Koga", "label": "Kisanta Koga", "linked_nodes": ["Tomoharu Kaneko"]},
   {"id": "Tomoharu Kaneko", "label": "Tomoharu Kaneko", "linked_nodes": ["Ryuho Togakure"]},
   {"id": "Ryuho Togakure", "label": "Ryuho Togakure", "linked_nodes": ["Gakuun Togakure"]},
   {"id": "Gakuun Togakure", "label": "Gakuun Togakure", "linked_nodes": ["Koseki Kido"]},
   {"id": "Koseki Kido", "label": "Koseki Kido", "linked_nodes": ["Tenryu Iga"]},
   {"id": "Tenryu Iga", "label": "Tenryu Iga", "linked_nodes": ["Rihei Ueno"]},
   {"id": "Rihei Ueno", "label": "Rihei Ueno", "linked_nodes": ["Senri Ueno"]},
   {"id": "Senri Ueno", "label": "Senri Ueno", "linked_nodes": ["Majiro Ueno"]},
   {"id": "Majiro Ueno", "label": "Majiro Ueno", "linked_nodes": ["Saburo Iisuka"]},
   {"id": "Saburo Iisuka", "label": "Saburo Iisuka", "linked_nodes": ["Goro Sawada"]},
   {"id": "Goro Sawada", "label": "Goro Sawada", "linked_nodes": ["Ippei Ozaru"]},
   {"id": "Ippei Ozaru", "label": "Ippei Ozaru", "linked_nodes": ["Hachiro Kimata"]},
   {"id": "Hachiro Kimata", "label": "Hachiro Kimata", "linked_nodes": ["Heizaemon Kataoka"]},
   {"id": "Heizaemon Kataoka", "label": "Heizaemon Kataoka", "linked_nodes": ["Ugenta Mori"]},
   {"id": "Ugenta Mori", "label": "Ugenta Mori", "linked_nodes": ["Gobei Toda"]},
   {"id": "Gobei Toda", "label": "Gobei Toda", "linked_nodes": ["Seiun Kobe"]},
   {"id": "Seiun Kobe", "label": "Seiun Kobe", "linked_nodes": ["Kobei Momochi"]},
   {"id": "Kobei Momochi", "label": "Kobei Momochi", "linked_nodes": ["Tenzen Tobari"]},
   {"id": "Tenzen Tobari", "label": "Tenzen Tobari", "linked_nodes": ["Seiryu Nobutsuna Toda"]},
   {"id": "Seiryu Nobutsuna Toda", "label": "Seiryu Nobutsuna Toda", "linked_nodes": ["Fudo Nobuchika Toda"]},
   {"id": "Fudo Nobuchika Toda", "label": "Fudo Nobuchika Toda", "linked_nodes": ["Kangoro Nobuyasu Toda"]},
   {"id": "Kangoro Nobuyasu Toda", "label": "Kangoro Nobuyasu Toda", "linked_nodes": ["Eisaburo Nobumasa Toda"]},
   {"id": "Eisaburo Nobumasa Toda", "label": "Eisaburo Nobumasa Toda", "linked_nodes": ["Shinbei Masachika Toda"]},
   {"id": "Shinbei Masachika Toda", "label": "Shinbei Masachika Toda", "linked_nodes": ["Shingoro Masayoshi Toda"]},
   {"id": "Shingoro Masayoshi Toda", "label": "Shingoro Masayoshi Toda", "linked_nodes": ["Daigoro Chikahide Toda"]},
   {"id": "Daigoro Chikahide Toda", "label": "Daigoro Chikahide Toda", "linked_nodes": ["Daisaburo Chikashige Toda"]},
   {"id": "Daisaburo Chikashige Toda", "label": "Daisaburo Chikashige Toda", "linked_nodes": ["Shinryuken Masamitsu Toda"]},
   {"id": "Shinryuken Masamitsu Toda", "label": "Shinryuken Masamitsu Toda", "linked_nodes": ["Toshitsugu Takamatsu"]},
   {"id": "Toshitsugu Takamatsu", "label": "Toshitsugu Takamatsu", "linked_nodes": ["Masaaki Hatsumi"]},
   {"id": "Masaaki Hatsumi", "label": "Masaaki Hatsumi", "linked_nodes": ["Takumi Tsutsui", "Bujinkan"]},

  
  // Shaolin
  {"id": "Bodhidharma", "label": "Bodhidharma", "linked_nodes": ["Dazu Huike", "Shaolin"]},
  {"id": "Dazu Huike", "label": "Dazu Huike", "linked_nodes": ["Shaolin"]},
  {"id": "Butuo Buddhabhadra", "label": "Butuo Buddhabhadra", "linked_nodes": ["Shaolin"]},
  {"id": "Shaolin", "label": "Shaolin", "linked_nodes": ["Luo Han Quan (Monk Fist)", "Five Elders", "Tode"]},

  // Five Elders
  {"id": "Five Elders", "label": "Five Elders", "linked_nodes": ["Miu Hin", "Fung Dou Dak", "Ng Mui", "Ji Sin", "Bak Mei"]},
  {"id": "Miu Hin", "label": "Miu Hin", "linked_nodes": ["Yim Wing Chun"]},
  {"id": "Ji Sin", "label": "Ji Sin", "linked_nodes": ["Five Elder Families", "Leung Yee Tai"]},
  {"id": "Bak Mei", "label": "Bak Mei", "linked_nodes": ["Bak Mei Pai"]},

  // Wu Mei Pai
  {"id": "Ng Mui", "label": "Ng Mui", "linked_nodes": ["Wu Mei Pai", "Huang Baolin"]},
  {"id": "Huang Baolin", "label": "Huang Baolin", "linked_nodes": ["Gong Rongguang"]},
  
  {"id": "Hakka", "label": "Hakka", "linked_nodes": ["Southern Praying Mantis", "Bak Mei Pai", "Southern Dragon"]},

  {"id": "Chow Ah-Nam", "label": "Chow Ah-Nam", "linked_nodes": ["Wong Fook Go"]},
  {"id": "Wong Fook Go", "label": "Wong Fook Go", "linked_nodes": ["Lau Soei"]},
  {"id": "Lau Soei", "label": "Lau Soei", "linked_nodes": ["Chow Gar"]},
  {"id": "Chu Fook-To", "label": "Chu Fook-To", "linked_nodes": ["Chu Gar (Chuka Shaolin)"]},
  {"id": "Som Dot", "label": "Som Dot", "linked_nodes": ["Bamboo Forest"]},
  {"id": "Hung Mei", "label": "Hung Mei", "linked_nodes": ["Iron Ox"]},
  {"id": "Chen Kiu", "label": "Chen Kiu", "linked_nodes": ["Hsiung Thong Long Quet Tsot"]},
  
  {"id": "Southern Praying Mantis", "label": "Southern Praying Mantis", "linked_nodes": ["Chow Ah-Nam", "Chu Fook-To", "Som Dot", "Hung Mei", "Chen Kiu"]},
  // Five Elder Families
  {"id": "Five Elder Families", "label": "Five Elder Families", "linked_nodes": ["Lau Saam Ngan", "Mok Ching Giu", "Hung Hei-gun", "Choy Gau Yi", "Lei Yau Saan"]},
  {"id": "Lau Saam Ngan", "label": "Lau Saam Ngan", "linked_nodes": ["Lau Ga"]},
  {"id": "Mok Ching Giu", "label": "Mok Ching Giu", "linked_nodes": ["Mok Ga"]},
  {"id": "Hung Hei-gun", "label": "Hung Hei-gun", "linked_nodes": ["Hung Ga"]},
  {"id": "Choy Gau Yi", "label": "Choy Gau Yi", "linked_nodes": ["Choy Ga"]},
  {"id": "Lei Yau Saan", "label": "Lei Yau Saan", "linked_nodes": ["Lei Ga"]},

  {"id": "Hung Ga", "label": "Hung Ga", "linked_nodes": ["Fut Ga Buddha Family", "Wong Yan-lam"]},
  {"id": "Choy Ga", "label": "Choy Ga", "linked_nodes": ["Fut Ga Buddha Family", "Chan Heung"]},
  {"id": "Lei Ga", "label": "Lei Ga", "linked_nodes": ["Chan Heung"]},

  // Choy Lei Fut
  {"id": "Fut Ga Buddha Family", "label": "Fut Ga Buddha Family", "linked_nodes": ["Chan Heung"]},
  {"id": "Chan Heung", "label": "Chan Heung", "linked_nodes": ["Choy Lei Fut"]},

  // Wing Chun
  {"id": "Yim Wing Chun", "label": "Yim Wing Chun", "linked_nodes": ["Leung Bok-chao", "Wing Chun"]},
  {"id": "Leung Bok-chao", "label": "Leung Bok-chao", "linked_nodes": ["Leung Lan-kwai"]},
  {"id": "Leung Lan-kwai", "label": "Leung Lan-kwai", "linked_nodes": ["Wong Wah-bo"]},
  {"id": "Wong Wah-bo", "label": "Wong Wah-bo", "linked_nodes": ["Leung Jan"]},
  {"id": "Leung Yee Tai", "label": "Wong Wah-bo", "linked_nodes": ["Leung Jan"]},
  
  {"id": "Leung Jan", "label": "Leung Jan", "linked_nodes": ["Chan Wan-shun", "Leung Bik"]},
  {"id": "Leung Bik", "label": "Leung Bik", "linked_nodes": ["Ip Man"]},
  {"id": "Ip Man", "label": "Ip Man", "linked_nodes": ["Bruce Lee"]},
  {"id": "Bruce Lee", "label": "Bruce Lee", "linked_nodes": ["Jeet Kune Do", "Joseph Cowles"]},
  {"id": "Joseph Cowles", "label": "Joseph Cowles", "linked_nodes": ["Wu Wei"]},
  {"id": "Wing Chun", "label": "Wing Chun", "linked_nodes": ["Hwang Kee"]},

  // Tibetean White Crane
  {"id": "Lama Pai (Lions Roar)", "label": "Lama Pai (Lions Roar)", "linked_nodes": ["Adatuo"]},
  {"id": "Adatuo", "label": "Adatuo", "linked_nodes": ["Wong Yan-lam", "Wong Lam-hoi"]},
  {"id": "Wong Yan-lam", "label": "Wong Yan-lam", "linked_nodes": ["Hop Ga"]},
  {"id": "Wong Lam-hoi", "label": "Wong Lam-hoi", "linked_nodes": ["Pak Hok Pai (Tibetan White Crane)"]},
  
  // Luo Han
  {"id": "Luo Han Quan (Monk Fist)", "label": "Luo Han Quan (Monk Fist)", "linked_nodes": ["Incense Shop Boxing", "Fang Zhengdong", "Arakaki Seisho"]},
  {"id": "Fang Zhengdong", "label": "Fang Zhengdong", "linked_nodes": ["Fang Qiniang"]},
  {"id": "Fang Qiniang", "label": "Fang Qiniang", "linked_nodes": ["Fujian White Crane"]},
  {"id": "Fujian White Crane", "label": "Fujian White Crane", "linked_nodes": ["Ryu Ryu Ko"]},

  // Goju Ryu
  {"id": "Ryu Ryu Ko", "label": "Ryu Ryu Ko", "linked_nodes": ["Higaonna Kanryo"]},
  {"id": "Higaonna Kanryo", "label": "Higaonna Kanryo", "linked_nodes": ["Miyagi Chojun", "Kyoda Juhatsu", "Nakaima Kenri", "Nakaima Kenchu", "Nakaima Keko"]},
  {"id": "Miyagi Chojun", "label": "Miyagi Chojun", "linked_nodes": ["Goju Ryu"]},
  {"id": "Goju Ryu", "label": "Goju Ryu", "linked_nodes": ["Gogen Yamaguchi"]},
  
  // Uechi Ryu
  {"id": "Wai Xinxian", "label": "Wai Xinxian", "linked_nodes": ["Arakaki Seisho", "Kogusuku Taitei"]},
  {"id": "Arakaki Seisho", "label": "Arakaki Seisho", "linked_nodes": ["Uechi Kanbun", "Higaonna Kanryo"]},
  {"id": "Uechi Kanbun", "label": "Uechi Kanbun", "linked_nodes": ["Pangal-noon (Uechi Ryu)"]},

  {"id": "Kyoda Juhatsu", "label": "Kyoda Juhatsu", "linked_nodes": ["Toon Ryu"]},
  {"id": "Nakaima Keko", "label": "Nakaima Keko", "linked_nodes": ["Ryuei Ryu"]},
  
  {"id": "Tode", "label": "Tode", "linked_nodes": ["Naha Te", "Tomari Te", "Shuri Te"]},
  // Naha Te
  {"id": "Naha Te", "label": "Naha Te", "linked_nodes": ["Kogusuku (Kojo) Uekata", "Arakaki Seisho"]},
  {"id": "Kogusuku (Kojo) Uekata", "label": "Kogusuku (Kojo) Uekata", "linked_nodes": ["Kogusuku Pechin"]},
  {"id": "Kogusuku Pechin", "label": "Kogusuku Pechin", "linked_nodes": ["San Shoi"]},
  {"id": "San Shoi", "label": "San Shoi", "linked_nodes": ["Kogusuku Isei"]},
  {"id": "Iwah", "label": "Iwah", "linked_nodes": ["Kogusuku Isei"]},


  // Kojo Ryu
  {"id": "Kogusuku Isei", "label": "Kogusuku Isei", "linked_nodes": ["Kogusuku Kaho"]},
  {"id": "Kogusuku Kaho", "label": "Kogusuku Kaho", "linked_nodes": ["Kogusuku Saikyo", "Kogusuku Kafu"]},
  {"id": "Maeri Ranho", "label": "Maeri Ranho", "linked_nodes": ["Kogusuku Shuren"]},
  {"id": "Kogusuku Saikyo", "label": "Kogusuku Saikyo", "linked_nodes": ["Kogusuku Kafu"]},
  {"id": "Kogusuku Shuren", "label": "Kogusuku Shuren", "linked_nodes": ["Kogusuku Kafu"]},
  {"id": "Kogusuku Kafu", "label": "Kogusuku Kafu", "linked_nodes": ["Kojo Ryu"]},

  // Tomeri Te
  {"id": "Tomari Te", "label": "Tomari Te", "linked_nodes": ["Kishin Teruya", "Karyu Sokyu"]},
  {"id": "Kishin Teruya", "label": "Kishin Teruya", "linked_nodes": ["Giel Yamada", "Kousaku Matsumora"]},
  {"id": "Karyu Sokyu", "label": "Karyu Sokyu", "linked_nodes": ["Kokan Oyadomari", "Kousaku Matsumora"]},
  {"id": "Kousaku Matsumora", "label": "Kousaku Matsumora", "linked_nodes": ["Kotasu Iha", "Chotoku Kyan", "Choki Motobu", "Koho Kuba"]},

  {"id": "Koho Kuba", "label": "Koho Kuba", "linked_nodes": ["Kosei Nakamoto"]},
  {"id": "Kotasu Iha", "label": "Kotasu Iha", "linked_nodes": ["Chojin Kuba", "Seiyu Nakasone", "Shoshin Nagamine"]},

  {"id": "Shoshin Nagamine", "label": "Shoshin Nagamine", "linked_nodes": ["Matsubayashi Ryu (Shorin)", "Shorinji Ryu"]},

  // Shuri Te
  {"id": "Shuri Te", "label": "Shuri Te", "linked_nodes": ["Kanga Sakugawa"]},
  {"id": "Kanga Sakugawa", "label": "Kanga Sakugawa", "linked_nodes": ["Sokon Matsumura"]},
  {"id": "Sokon Matsumura", "label": "Sokon Matsumura", "linked_nodes": ["Choyu Motobu", "Kenyu Yabu", "Aanko Asato", "Aanko Itosu", "Chofu Kyan", "Ryosei Kuwae", "Chotoku Kyan", "Choki Motobu"]},

  {"id": "Choyu Motobu", "label": "Choyu Motobu", "linked_nodes": ["Motobo Udundi", "Choki Motobu"]},
  {"id": "Choki Motobu", "label": "Choki Motobu", "linked_nodes": ["Chotoku Kyan", "Hironori Otsuka", "Tatsuo Yamada", "Yasuhiro Konishi", "Shoshin Nagamine", "Motobo Ryu"]},
  {"id": "Chotoku Kyan", "label": "Chotoku Kyan", "linked_nodes": ["Kenwa Mabuni", "Joen Nakazato", "Zenryo Shimabukuro", "Shoshin Nagamine"]},
  {"id": "Motobo Ryu", "label": "Motobo Ryu", "linked_nodes": ["Chosei Motobu"]},
  {"id": "Motobo Udundi", "label": "Motobo Udundi", "linked_nodes": ["Chosei Motobu"]},

  {"id": "Hironori Otsuka", "label": "Hironori Otsuka", "linked_nodes": ["Wado Ryu"]},
  {"id": "Tatsuo Yamada", "label": "Tatsuo Yamada", "linked_nodes": ["Nihon Kenpo Karatedo"]},
  {"id": "Yasuhiro Konishi", "label": "Yasuhiro Konishi", "linked_nodes": ["Shinto Jinen Ryu"]},

  {"id": "Kenwa Mabuni", "label": "Kenwa Mabuni", "linked_nodes": ["Shito Ryu"]},
  {"id": "Joen Nakazato", "label": "Joen Nakazato", "linked_nodes": ["Shorinji Ryu"]},
  {"id": "Zenryo Shimabukuro", "label": "Zenryo Shimabukuro", "linked_nodes": ["Seibukan"]},

  
  {"id": "Kenyu Yabu", "label": "Kenyu Yabu", "linked_nodes": ["Gichin Funakoshi"]},
  {"id": "Aanko Asato", "label": "Aanko Asato", "linked_nodes": ["Chomo Hanashiro"]},
  {"id": "Aanko Itosu", "label": "Aanko Itosu", "linked_nodes": ["Choshin Chibana"]},
  {"id": "Chofu Kyan", "label": "Chofu Kyan", "linked_nodes": ["Kanken Toyama"]},
 
  // Shotokan Karate
  {"id": "Gichin Funakoshi", "label": "Gichin Funakoshi", "linked_nodes": ["Shotokan Karate", "Gigo Funakoshi", "Lee Won-kuk", "Ro Byung Jik", "Yoon Byung-In", "Chun Sang Sup"]},
  {"id": "Chomo Hanashiro", "label": "Chomo Hanashiro", "linked_nodes": ["Kobayashi Ryu (Shorin)"]},
  {"id": "Choshin Chibana", "label": "Choshin Chibana", "linked_nodes": ["Shudokan"]},

  {"id": "Izumo Kanja Yoshiteru", "label": "Izumo Kanja Yoshiteru", "linked_nodes": ["Shinden Fudo Ryu"]},
  {"id": "Iizasa Choisai Ienao", "label": "Iizasa Choisai Ienao", "linked_nodes": ["Tenshin Shoden Katori Shinto Ryu"]},
  {"id": "Tenshin Shoden Katori Shinto Ryu", "label": "Tenshin Shoden Katori Shinto Ryu", "linked_nodes": ["Nakamura-ryu", "Meifu Shinkage-ryu", "Shinto Muso-ryu", "Yagyū Shinkage-ryu"]},

  
  // Jujutsu
  
  {"id": "Takenouchi Hisamori", "label": "Takenouchi Hisamori", "linked_nodes": ["Takenouchi Ryu"]},
  {"id": "Takenouchi Ryu", "label": "Takenouchi Ryu", "linked_nodes": ["Jujutsu"]},
  {"id": "Jujutsu", "label": "Jujutsu", "linked_nodes": ["Yoshin Ryu", "Izumo Kanja Yoshiteru"]},
  {"id": "Yoshin Ryu", "label": "Yoshin Ryu", "linked_nodes": ["Yamamoto Tamiza Hideya"]},
  {"id": "Yamamoto Tamiza Hideya", "label": "Yamamoto o' Tamiza Hideya", "linked_nodes": ["Hitotsuyanagi Oribe", "Shin no Shinto-ryu"]},
  {"id": "Shin no Shinto-ryu", "label": "Shin no Shinto-ryu", "linked_nodes": ["Homma Jouemon"]},
  {"id": "Hitotsuyanagi Oribe", "label": "Hitotsuyanagi Oribe", "linked_nodes": ["Iso Mataemon Ryukansai Minamoto no Masatari"]},
  {"id": "Homma Jouemon", "label": "Homma Jouemon", "linked_nodes": ["Iso Mataemon Ryukansai Minamoto no Masatari"]},
  {"id": "Iso Mataemon Ryukansai Minamoto no Masatari", "label": "Iso Mataemon Ryukansai Minamoto no Masatari", "linked_nodes": ["Tenjin Shinyo Ryu"]},
  {"id": "Terada", "label": "Terada", "linked_nodes": ["Kito Ryu"]},
  {"id": "Fukuno Shichirouemon n Masakatsu", "label": "Fukuno Shichirouemon n Masakatsu", "linked_nodes": ["Ryoi Shinto Ryu", "Kito Ryu"]},

  {"id": "Tenjin Shinyo Ryu", "label": "Tenjin Shinyo Ryu", "linked_nodes": ["Mataemon Masatomo", "Fukuda Hachinosuke", "Kentaro Inoue"]},
  {"id": "Kito Ryu", "label": "Kito Ryu", "linked_nodes": ["Iikubo Tsunetoshi"]},
  {"id": "Iikubo Tsunetoshi", "label": "Iikubo Tsunetoshi", "linked_nodes": ["Kano Jigoro"]},
  {"id": "Mataemon Masatomo", "label": "Mataemon Masatomo", "linked_nodes": ["Kano Jigoro"]},
  {"id": "Fukuda Hachinosuke", "label": "Fukuda Hachinosuke", "linked_nodes": ["Kano Jigoro"]},

  // Judo
  {"id": "Kano Jigoro", "label": "Kano Jigoro", "linked_nodes": ["Kodokan Judo"]},
  {"id": "Kodokan Judo", "label": "Kodokan Judo", "linked_nodes": ["Kosen Judo", "Four Guardians of the Kodokan", "Kyuzo Mifune", "Yun Mu Kwan", "Takisaburo Tobari"]},
  {"id": "Tomita Tsunejiro", "label": "Tomita Tsunejiro", "linked_nodes": ["Mitsuyo Maeda"]},
  {"id": "Kosen Judo", "label": "Kosen Judo", "linked_nodes": ["Masahiko Kimura"]},
  
    {"id": "Four Guardians of the Kodokan", "label": "Four Guardians of the Kodokan", "linked_nodes": ["Yokoyama Sakujiro", "Saigo Shiro", "Tomita Tsunejiro", "Yamashita Yoshitsugu"]},

    {"id": "Mataichiro Iso", "label": "Mataichiro Iso", "linked_nodes": ["Takisaburo Tobari"]},
    {"id": "Kentaro Inoue", "label": "Kentaro Inoue", "linked_nodes": ["Takisaburo Tobari", "Yokoyama Sakujiro"]},
    {"id": "Takisaburo Tobari", "label": "Takisaburo Tobari", "linked_nodes": ["Morihei Ueshiba"]},

    // Aikido
    {"id": "Otani Nobutomo", "label": "Otani Nobutomo", "linked_nodes": ["Sakakibara Kenkichi"]},
    {"id": "Saigo Tanomo", "label": "Saigo Tanomo", "linked_nodes": ["Takeda Sokaku"]},
    {"id": "Toma Shibuya", "label": "Toma Shibuya", "linked_nodes": ["Takeda Sokaku"]},
    {"id": "Sakakibara Kenkichi", "label": "Sakakibara Kenkichi", "linked_nodes": ["Takeda Sokaku"]},
    {"id": "Takeda Sokaku", "label": "Sakakibara Kenkichi", "linked_nodes": ["Daito Ryu", "Morihei Ueshiba"]},

    {"id": "Morihei Ueshiba", "label": "Morihei Ueshiba", "linked_nodes": ["Aikido"]},  
  
  // BJJ
  {"id": "Mitsuyo Maeda", "label": "Mitsuyo Maeda", "linked_nodes": ["Carlos Gracie", "Luiz Franca", "Oswaldo Fadda"]},
  {"id": "Carlos Gracie", "label": "Carlos Gracie", "linked_nodes": ["Carlos Gracie Jr.", "Helio Gracie", "Rickson Gracie", "Royce Gracie", "Relson Gracie", "Rolls Gracie", "Rorion Gracie", "Jean Jacques Machado"]},
  {"id": "Helio Gracie", "label": "Helio Gracie", "linked_nodes": ["Rickson Gracie", "Royce Gracie", "Relson Gracie", "Rolls Gracie", "Rorion Gracie", "Carlos Gracie Jr.", "Jean Jacques Machado"]},
  {"id": "Carlos Gracie Jr.", "label": "Carlos Gracie Jr.", "linked_nodes": ["Carlinhos Gracie"]},
  {"id": "Carlinhos Gracie", "label": "Carlinhos Gracie", "linked_nodes": ["Gracie Barra"]},

  // Kyokushin Karate
  {"id": "Gigo Funakoshi", "label": "Gigo Funakoshi", "linked_nodes": ["Masutatsu Oyama"]},
  {"id": "Gogen Yamaguchi", "label": "Gogen Yamaguchi", "linked_nodes": ["Masutatsu Oyama"]},
  {"id": "Masutatsu Oyama", "label": "Masutatsu Oyama", "linked_nodes": ["Kyokushin Karate"]},
  
  {"id": "Wudang", "label": "Wudang", "linked_nodes": ["Chen Tuan", "Zhang Sanfeng", "Lai", "Zhou Tong"]},
  {"id": "Daoyin", "label": "Daoyin", "linked_nodes": ["Chen Wangting"]},
  {"id": "Zhou Tong", "label": "Zhou Tong", "linked_nodes": ["Yue Fei"]},
  {"id": "Yue Fei", "label": "Yue Fei", "linked_nodes": ["Xing Yi Quan", "Eagle Claw"]},



  // Taichi
  {"id": "Qi Jiguang", "label": "Qi Jiguang", "linked_nodes": ["Jixiao Xinshu", "Lianbing Shiji"]},
  {"id": "Jixiao Xinshu", "label": "Jixiao Xinshu", "linked_nodes": ["Chen Wangting"]},
  {"id": "Lianbing Shiji", "label": "Lianbing Shiji", "linked_nodes": ["Chen Wangting"]},

  {"id": "Chen Tuan", "label": "Chen Tuan", "linked_nodes": ["Liuhebafa Quan"]},
  {"id": "Zhang Sanfeng", "label": "Zhang Sanfeng", "linked_nodes": ["Wang Zongyue", "Neijia"]},
  {"id": "Wang Zongyue", "label": "Wang Zongyue", "linked_nodes": ["Chen Wangting", "Jiang Fa"]},

   // Taichi Chen
   {"id": "Chen Wangting", "label": "Chen Wangting", "linked_nodes": ["Chen Tai Chi", "Chen Ruxin", "Chen Suole"]},
 
  {"id": "Jiang Fa", "label": "Jiang Fa", "linked_nodes": ["Xing Xihuai"]},
  {"id": "Xing Xihuai", "label": "Xing Xihuai", "linked_nodes": ["Zhang Chucheni"]},
  {"id": "Zhang Chucheni", "label": "Zhang Chucheni", "linked_nodes": ["Chen Jingbo"]},
  {"id": "Chen Jingbo", "label": "Chen Jingbo", "linked_nodes": ["Zhang Zongyu"]},
  {"id": "Zhang Zongyu", "label": "Zhang Zongyu", "linked_nodes": ["Zhang Yan"]},
  {"id": "Zhang Yan", "label": "Zhang Yan", "linked_nodes": ["Chen Qingping"]},
  {"id": "Chen Qingping", "label": "Chen Qingping", "linked_nodes": ["He Zhaoyuan", "Wu Yuxiang"]},
  {"id": "He Zhaoyuan", "label": "He Zhaoyuan", "linked_nodes": ["He Qingxi"]},
  {"id": "He Qingxi", "label": "He Qingxi", "linked_nodes": ["Song Yunhua"]},
  {"id": "Song Yunhua", "label": "Song Yunhua", "linked_nodes": ["Zhaobao Style"]},
  {"id": "Chen Zhongshen", "label": "Chen Zhongshen", "linked_nodes": ["Chen Xin"]},

  
  // Taichi Sun Style
  {"id": "Wu Yuxiang", "label": "Wu Yuxiang", "linked_nodes": ["Li Yiyu"]},
  {"id": "Li Yiyu", "label": "Li Yiyu", "linked_nodes": ["Hao Weizhen"]},
  {"id": "Hao Weizhen", "label": "Hao Weizhen", "linked_nodes": ["Sun Lutang", "Hao Yueru"]},
  {"id": "Sun Lutang", "label": "Sun Lutang", "linked_nodes": ["Sun Jianyun"]},
  {"id": "Sun Jianyun", "label": "Sun Jianyun", "linked_nodes": ["Sun Yongtian"]},
  {"id": "Sun Yongtian", "label": "Sun Yongtian", "linked_nodes": ["Sun Style"]},

  // Taichi Hao Style
  {"id": "Hao Yueru", "label": "Hao Yueru", "linked_nodes": ["Hao Shaoru"]},
  {"id": "Hao Shaoru", "label": "Hao Shaoru", "linked_nodes": ["Liu Jishun"]},  
  {"id": "Liu Jishun", "label": "Liu Jishun", "linked_nodes": ["Wu (Hao) Style"]},


  // Taichi Chen Small Frame
  {"id": "Chen Xin", "label": "Chen Xin", "linked_nodes": ["Chen Kezhong"]},
  {"id": "Chen Kezhong", "label": "Chen Kezhong", "linked_nodes": ["Chen Boxiang"]},
  {"id": "Chen Boxiang", "label": "Chen Boxiang", "linked_nodes": ["Lu Zhizhong"]},
  {"id": "Lu Zhizhong", "label": "Lu Zhizhong", "linked_nodes": ["Chen Small Frame"]},
  
  {"id": "Chen Ruxin", "label": "Chen Ruxin", "linked_nodes": ["Chen Dakun", "Chen Dapeng"]},
  {"id": "Chen Dakun", "label": "Chen Dakun", "linked_nodes": ["Chen Shantong"]},
  {"id": "Chen Shantong", "label": "Chen Shantong", "linked_nodes": ["Chen Bingqi", "Chen Bingren", "Chen Bingwang"]},
  {"id": "Chen Dapeng", "label": "Chen Dapeng", "linked_nodes": ["Chen Shanzhi"]},
  {"id": "Chen Shanzhi", "label": "Chen Shanzhi", "linked_nodes": ["Chen Bingren", "Chen Bingwang"]},

  {"id": "Chen Suole", "label": "Chen Suole", "linked_nodes": ["Chen Guangyin", "Chen Shenru", "Chen Xunru", "Chen Zhengru"]},
  {"id": "Chen Guangyin", "label": "Chen Guangyin", "linked_nodes": ["Chen Jixia"]},
  {"id": "Chen Jixia", "label": "Chen Jixia", "linked_nodes": ["Chen Bingqi", "Chen Bingren", "Chen Bingwang"]},
  {"id": "Chen Zhengru", "label": "Chen Zhengru", "linked_nodes": ["Chen Jie", "Chen Jingbo"]},
  {"id": "Chen Jie", "label": "Chen Jie", "linked_nodes": ["Chen Gongzhao"]},
  {"id": "Chen Gongzhao", "label": "Chen Gongzhao", "linked_nodes": ["Chen Youben"]},
  {"id": "Chen Bingwang", "label": "Chen Bingwang", "linked_nodes": ["Chen Changxing"]},

  {"id": "Chen Changxing", "label": "Chen Changxing", "linked_nodes": ["Yang Luchan", "Chen Gengyun"]},

  // Taichi Chen Style
  {"id": "Chen Gengyun", "label": "Chen Gengyun", "linked_nodes": ["Chen Yanxi"]},
  {"id": "Chen Yanxi", "label": "Chen Yanxi", "linked_nodes": ["Chen Fake"]},
  {"id": "Chen Fake", "label": "Chen Fake", "linked_nodes": ["Chen Zhaopi", "Chen Zhaokui"]},
  {"id": "Chen Zhaopi", "label": "Chen Zhaopi", "linked_nodes": ["Chen Xiaowang", "Chen Xiaoxing"]},
  {"id": "Chen Zhaokui", "label": "Chen Zhaokui", "linked_nodes": ["Chen Xiaoxing", "Chen Xiaowang"]},
  {"id": "Chen Xiaowang", "label": "Chen Xiaowang", "linked_nodes": ["Chen Style"]},

  {"id": "Chen Youben", "label": "Chen Youben", "linked_nodes": ["Yang Luchan", "Chen Zhongshen", "Chen Qingping"]},

  {"id": "Yang Luchan", "label": "Yang Luchan", "linked_nodes": ["Yang Banhou", "Yang Jianhou", "Wang Lanting", "Wu Yuxiang"]},
  {"id": "Wang Lanting", "label": "Wang Lanting", "linked_nodes": ["Li Ruidong"]},
  {"id": "Yang Jianhou", "label": "Yang Jianhou", "linked_nodes": ["Yang Chengfu"]},

  // Taichi Yang Style
  {"id": "Yang Chengfu", "label": "Yang Chengfu", "linked_nodes": ["Cheng Man-ching", "Fu Zhongwen", "Yang Zhenduo", "Zhang Qinlin"]},
  {"id": "Zhang Qinlin", "label": "Zhang Qinlin", "linked_nodes": ["Wang Yannian"]},
  {"id": "Yang Zhenduo", "label": "Yang Zhenduo", "linked_nodes": ["Yang Jun"]},
  {"id": "Yang Jun", "label": "Yang Jun", "linked_nodes": ["Yang Style"]},
  {"id": "Yang Style", "label": "Yang Style", "linked_nodes": ["Yang Kuk Jin"]},

  {"id": "Yang Banhou", "label": "Yang Banhou", "linked_nodes": ["Yang Shaohou", "Wang Jiaoyu", "Wu Quanyou"]},
  {"id": "Wang Jiaoyu", "label": "Wang Jiaoyu", "linked_nodes": ["Kuo Lien Ying"]},

  // Taichi Wu Style
  {"id": "Wu Quanyou", "label": "Wu Quanyou", "linked_nodes": ["Wu Jianquan"]},
  {"id": "Wu Jianquan", "label": "Wu Jianquan", "linked_nodes": ["Wu Gongyi"]},
  {"id": "Wu Gongyi", "label": "Wu Gongyi", "linked_nodes": ["Cheng Tin Hung", "Wu Yanxia"]},
  {"id": "Wu Yanxia", "label": "Wu Yanxia", "linked_nodes": ["Wu Kuang-yu"]},
  {"id": "Wu Kuang-yu", "label": "Wu Kuang-yu", "linked_nodes": ["Wu Style"]},
  

// Taekwondo
{"id": "Yun Mu Kwan", "label": "Yun Mu Kwan", "linked_nodes": ["Chun Sang Sup"]},
  
{"id": "Chun Sang Sup", "label": "Chun Sang Sup", "linked_nodes": ["Ji Do Kwan"]},
{"id": "Ji Do Kwan", "label": "Ji Do Kwan", "linked_nodes": ["Lee Kyo Yoon"]},
{"id": "Lee Kyo Yoon", "label": "Lee Kyo Yoon", "linked_nodes": ["Han Moo Kwan"]},

{"id": "Yoon Byung-In", "label": "Yoon Byung-In", "linked_nodes": ["Chang Moo Kwan"]},
{"id": "Chang Moo Kwan", "label": "Chang Moo Kwan", "linked_nodes": ["Park Chul Hee", "Hong Jong Pyo"]},
{"id": "Park Chul Hee", "label": "Park Chul Hee", "linked_nodes": ["Kang Duk Won"]},
{"id": "Hong Jong Pyo", "label": "Hong Jong Pyo", "linked_nodes": ["Kang Duk Won"]},
  
{"id": "Ro Byung Jik", "label": "Ro Byung Jik", "linked_nodes": ["Song Moo Kwan"]},

{"id": "Subak", "label": "Subak", "linked_nodes": ["Taekkyon"]},
{"id": "Taekkyon", "label": "Taekkyon", "linked_nodes": ["Lee Won-kuk", "Hwang Kee"]},
{"id": "Hwang Kee", "label": "Hwang Kee", "linked_nodes": ["Moo Duk Kwan"]},

{"id": "Lee Won-kuk", "label": "Lee Won-kuk", "linked_nodes": ["Chung Do Kwan"]},
{"id": "Chung Do Kwan", "label": "Chung Do Kwan", "linked_nodes": ["Lee Yong Woo", "Choi Hong Hi"]},
{"id": "Lee Yong Woo", "label": "Lee Yong Woo", "linked_nodes": ["Jung Do Kwan"]},
{"id": "Choi Hong Hi", "label": "Choi Hong Hi", "linked_nodes": ["Oh Do Kwan"]},

// Baji Quan
{"id": "Lai", "label": "Lai", "linked_nodes": ["Pi", "Wu Zhong"]},
{"id": "Wu Zhong", "label": "Wu Zhong", "linked_nodes": ["Baji Quan", "Wu Ying"]}


];


const positionsList = 

[
    {
        "id": "Yang Bing",
        "position": {
            "x": 4824.402777368443,
            "y": -687.0923543472557
        }
    },
    {
        "id": "Feng Keshan",
        "position": {
            "x": 4712.232161693437,
            "y": -603.2489481867199
        }
    },
    {
        "id": "Meihua Quan (Plum Blossom Fist)",
        "position": {
            "x": 4764.606451659762,
            "y": -483.77727324519066
        }
    },
    {
        "id": "Wan Fuzi",
        "position": {
            "x": 4647.938113344685,
            "y": -352.7409905573807
        }
    },
    {
        "id": "Zhang Yimin",
        "position": {
            "x": 4896.606451659762,
            "y": -351.77727324519066
        }
    },
    {
        "id": "Zhou Beitao",
        "position": {
            "x": 4896.606451659762,
            "y": -219.77727324519066
        }
    },
    {
        "id": "Han Kuisheng",
        "position": {
            "x": 4763.672006117609,
            "y": -352.7409905573807
        }
    },
    {
        "id": "Fu Xiushan",
        "position": {
            "x": 4763.672006117609,
            "y": -220.7409905573807
        }
    },
    {
        "id": "Jiaodi",
        "position": {
            "x": 4722.4659051475,
            "y": -2001.0738078867525
        }
    },
    {
        "id": "Jiao Li",
        "position": {
            "x": 4719.379942602301,
            "y": -1731.8135755661976
        }
    },
    {
        "id": "Kangxi Emperor",
        "position": {
            "x": 4831.140753821377,
            "y": -1866.93618886758
        }
    },
    {
        "id": "Shanpuying",
        "position": {
            "x": 4831.140753821377,
            "y": -1734.9361888675799
        }
    },
    {
        "id": "Ma Liang",
        "position": {
            "x": 4718.446048495789,
            "y": -1610.0864107378268
        }
    },
    {
        "id": "Central Guoshu Institute",
        "position": {
            "x": 4718.446048495789,
            "y": -1478.086410737827
        }
    },
    {
        "id": "Hosokawa Clan",
        "position": {
            "x": 10459.009013715538,
            "y": 5417.662582434933
        }
    },
    {
        "id": "Sumo",
        "position": {
            "x": 9603.22770173613,
            "y": 5651.864229392886
        }
    },
    {
        "id": "Tokitsukaze Ichimon",
        "position": {
            "x": 9849.709644523453,
            "y": 5943.5638097102765
        }
    },
    {
        "id": "Isenoumi Heya",
        "position": {
            "x": 9848.371165430392,
            "y": 6087.516303197726
        }
    },
    {
        "id": "Kusazuri Heya",
        "position": {
            "x": 9509.607510113798,
            "y": 6094.800380205127
        }
    },
    {
        "id": "Onogawa Heya",
        "position": {
            "x": 9641.607510113798,
            "y": 6094.800380205127
        }
    },
    {
        "id": "Isa Tomomune",
        "position": {
            "x": 10228.672214607901,
            "y": 5612.647391861486
        }
    },
    {
        "id": "Date Clan",
        "position": {
            "x": 10219.936938381099,
            "y": 5754.115030611383
        }
    },
    {
        "id": "Tanikaze Kajinosuke",
        "position": {
            "x": 10176.19463262436,
            "y": 5918.345469960883
        }
    },
    {
        "id": "Samurai",
        "position": {
            "x": 9943.043962132657,
            "y": 5144.303922310701
        }
    },
    {
        "id": "Miyamoto Musashi",
        "position": {
            "x": 10664.363237100866,
            "y": 5396.884195457885
        }
    },
    {
        "id": "The Imperial Clan",
        "position": {
            "x": 10767.32734276669,
            "y": 6082.981514728441
        }
    },
    {
        "id": "Gempeitokitsu",
        "position": {
            "x": 10767.32734276669,
            "y": 6214.981514728442
        }
    },
    {
        "id": "Taira Clan",
        "position": {
            "x": 10441.327342766692,
            "y": 6346.981514728442
        }
    },
    {
        "id": "Chiba Tsunetane",
        "position": {
            "x": 10441.327342766692,
            "y": 6478.981514728441
        }
    },
    {
        "id": "Chiba Clan",
        "position": {
            "x": 10441.327342766692,
            "y": 6610.981514728441
        }
    },
    {
        "id": "Bodhidharma",
        "position": {
            "x": 4138.81480493236,
            "y": -1905.6058191711263
        }
    },
    {
        "id": "Dazu Huike",
        "position": {
            "x": 4282.48387096774,
            "y": -1745.5376344086042
        }
    },
    {
        "id": "Butuo Buddhabhadra",
        "position": {
            "x": 4007.537634408604,
            "y": -1757.3225806451633
        }
    },
    {
        "id": "Shaolin",
        "position": {
            "x": 4135.749502841043,
            "y": -1571.1759171842184
        }
    },
    {
        "id": "Five Elders",
        "position": {
            "x": 4139.931054836276,
            "y": 259.32457635442273
        }
    },
    {
        "id": "Miu Hin",
        "position": {
            "x": 3833.9747691019597,
            "y": 491.2089676821922
        }
    },
    {
        "id": "Ji Sin",
        "position": {
            "x": 3973.8313610625364,
            "y": 499.66292313165025
        }
    },
    {
        "id": "Bak Mei",
        "position": {
            "x": 4460.307917633226,
            "y": 515.6729461782659
        }
    },
    {
        "id": "Ng Mui",
        "position": {
            "x": 4288.7736400196545,
            "y": 507.6163006217315
        }
    },
    {
        "id": "Huang Baolin",
        "position": {
            "x": 4323.012141699591,
            "y": 636.0550521334092
        }
    },
    {
        "id": "Hakka",
        "position": {
            "x": 4664.903464717452,
            "y": 447.6234372457236
        }
    },
    {
        "id": "Chow Ah-Nam",
        "position": {
            "x": 5428.462365591399,
            "y": 917.9032258064512
        }
    },
    {
        "id": "Wong Fook Go",
        "position": {
            "x": 5428.462365591399,
            "y": 1049.9032258064508
        }
    },
    {
        "id": "Lau Soei",
        "position": {
            "x": 5428.462365591399,
            "y": 1181.9032258064517
        }
    },
    {
        "id": "Chu Fook-To",
        "position": {
            "x": 5296.462365591399,
            "y": 917.9032258064512
        }
    },
    {
        "id": "Som Dot",
        "position": {
            "x": 5032.462365591399,
            "y": 917.9032258064512
        }
    },
    {
        "id": "Hung Mei",
        "position": {
            "x": 4900.462365591399,
            "y": 917.9032258064512
        }
    },
    {
        "id": "Chen Kiu",
        "position": {
            "x": 4768.462365591399,
            "y": 917.9032258064512
        }
    },
    {
        "id": "Southern Praying Mantis",
        "position": {
            "x": 4917.737464565467,
            "y": 662.243022635694
        }
    },
    {
        "id": "Five Elder Families",
        "position": {
            "x": 4145.155904047024,
            "y": 1126.2494002126193
        }
    },
    {
        "id": "Lau Saam Ngan",
        "position": {
            "x": 4070.3305107904444,
            "y": 1428.4784551627347
        }
    },
    {
        "id": "Mok Ching Giu",
        "position": {
            "x": 4172.528754785797,
            "y": 1434.9804765570045
        }
    },
    {
        "id": "Hung Hei-gun",
        "position": {
            "x": 4584.905574193837,
            "y": 1441.252871450661
        }
    },
    {
        "id": "Choy Gau Yi",
        "position": {
            "x": 4462.628194206968,
            "y": 1439.2219856313848
        }
    },
    {
        "id": "Lei Yau Saan",
        "position": {
            "x": 4316.664664055595,
            "y": 1431.574181276935
        }
    },
    {
        "id": "Hung Ga",
        "position": {
            "x": 4554.582679796488,
            "y": 1563.9357985057848
        }
    },
    {
        "id": "Choy Ga",
        "position": {
            "x": 4453.353492348479,
            "y": 1590.5713557897068
        }
    },
    {
        "id": "Lei Ga",
        "position": {
            "x": 4319.094588550135,
            "y": 1587.9836494087533
        }
    },
    {
        "id": "Fut Ga Buddha Family",
        "position": {
            "x": 4525.467473796409,
            "y": 1735.7225843108147
        }
    },
    {
        "id": "Chan Heung",
        "position": {
            "x": 4388.425073189413,
            "y": 1735.8342624995814
        }
    },
    {
        "id": "Yim Wing Chun",
        "position": {
            "x": 3832.9428777325197,
            "y": 646.2937551972491
        }
    },
    {
        "id": "Leung Bok-chao",
        "position": {
            "x": 3826.779254990145,
            "y": 824.843936160911
        }
    },
    {
        "id": "Leung Lan-kwai",
        "position": {
            "x": 3822.752055005143,
            "y": 975.1958158201094
        }
    },
    {
        "id": "Wong Wah-bo",
        "position": {
            "x": 3819.7152167005147,
            "y": 1129.2570696314624
        }
    },
    {
        "id": "Leung Yee Tai",
        "position": {
            "x": 3975.657944203179,
            "y": 1274.0739519943995
        }
    },
    {
        "id": "Leung Jan",
        "position": {
            "x": 3821.8578307467465,
            "y": 1277.9499499210333
        }
    },
    {
        "id": "Leung Bik",
        "position": {
            "x": 3777.7707526223603,
            "y": 1421.5322557014997
        }
    },
    {
        "id": "Ip Man",
        "position": {
            "x": 3774.675391291888,
            "y": 1561.1670508946877
        }
    },
    {
        "id": "Bruce Lee",
        "position": {
            "x": 3773.907550017574,
            "y": 1705.8160690623668
        }
    },
    {
        "id": "Joseph Cowles",
        "position": {
            "x": 3810.7731129624176,
            "y": 1839.810639924278
        }
    },
    {
        "id": "Wing Chun",
        "position": {
            "x": 3641.072172715353,
            "y": 835.5266224862296
        }
    },
    {
        "id": "Lama Pai (Lions Roar)",
        "position": {
            "x": 4863.807929429921,
            "y": 1290.456384373448
        }
    },
    {
        "id": "Adatuo",
        "position": {
            "x": 4859.247206767615,
            "y": 1425.8245431074263
        }
    },
    {
        "id": "Wong Yan-lam",
        "position": {
            "x": 4798.404172770833,
            "y": 1567.1104196044982
        }
    },
    {
        "id": "Wong Lam-hoi",
        "position": {
            "x": 4936.152486569207,
            "y": 1562.2963371645303
        }
    },
    {
        "id": "Luo Han Quan (Monk Fist)",
        "position": {
            "x": 3325.5925677713108,
            "y": -1132.8055723553864
        }
    },
    {
        "id": "Fang Zhengdong",
        "position": {
            "x": 2944.3260730125703,
            "y": -715.1529538948264
        }
    },
    {
        "id": "Fang Qiniang",
        "position": {
            "x": 2933.898085031547,
            "y": -523.0749913961774
        }
    },
    {
        "id": "Fujian White Crane",
        "position": {
            "x": 2932.5529519232236,
            "y": -319.99219733699454
        }
    },
    {
        "id": "Ryu Ryu Ko",
        "position": {
            "x": 2722.082181854502,
            "y": -319.6971643056406
        }
    },
    {
        "id": "Higaonna Kanryo",
        "position": {
            "x": 2713.011055920701,
            "y": -107.67236395878795
        }
    },
    {
        "id": "Miyagi Chojun",
        "position": {
            "x": 2491.697349185447,
            "y": 28.209021523971067
        }
    },
    {
        "id": "Goju Ryu",
        "position": {
            "x": 2484.847315131751,
            "y": 161.65735481546875
        }
    },
    {
        "id": "Wai Xinxian",
        "position": {
            "x": 2486.445635504699,
            "y": -322.63038078059174
        }
    },
    {
        "id": "Arakaki Seisho",
        "position": {
            "x": 2030.9105611217708,
            "y": -94.02704459411416
        }
    },
    {
        "id": "Uechi Kanbun",
        "position": {
            "x": 2024.820416379668,
            "y": 33.03174087646031
        }
    },
    {
        "id": "Kyoda Juhatsu",
        "position": {
            "x": 2611.2922838949457,
            "y": 30.918178122344266
        }
    },
    {
        "id": "Nakaima Keko",
        "position": {
            "x": 3030.0407592860192,
            "y": 36.69489885378662
        }
    },
    {
        "id": "Tode",
        "position": {
            "x": 1458.2917653602667,
            "y": -1495.6410912219815
        }
    },
    {
        "id": "Naha Te",
        "position": {
            "x": 1470.8638810748762,
            "y": -819.7244931747828
        }
    },
    {
        "id": "Kogusuku (Kojo) Uekata",
        "position": {
            "x": 1469.7264327094426,
            "y": -547.5381772005005
        }
    },
    {
        "id": "Kogusuku Pechin",
        "position": {
            "x": 1468.6792013735512,
            "y": -419.9006518002617
        }
    },
    {
        "id": "San Shoi",
        "position": {
            "x": 1471.2418189391299,
            "y": -289.59895652419453
        }
    },
    {
        "id": "Iwah",
        "position": {
            "x": 1599.8810944216384,
            "y": -292.143670850504
        }
    },
    {
        "id": "Kogusuku Isei",
        "position": {
            "x": 1466.0663677289044,
            "y": -152.87856924376894
        }
    },
    {
        "id": "Kogusuku Kaho",
        "position": {
            "x": 1465.7498438635553,
            "y": -11.061616131742014
        }
    },
    {
        "id": "Maeri Ranho",
        "position": {
            "x": 1591.670453666274,
            "y": -12.727793341836062
        }
    },
    {
        "id": "Kogusuku Saikyo",
        "position": {
            "x": 1352.705642200258,
            "y": 116.71762806231138
        }
    },
    {
        "id": "Kogusuku Shuren",
        "position": {
            "x": 1593.0454725983475,
            "y": 105.0373112458388
        }
    },
    {
        "id": "Kogusuku Kafu",
        "position": {
            "x": 1469.531451750675,
            "y": 203.7720596789969
        }
    },
    {
        "id": "Tomari Te",
        "position": {
            "x": -2801.840995207055,
            "y": -926.5289204416919
        }
    },
    {
        "id": "Kishin Teruya",
        "position": {
            "x": -2859.911811127039,
            "y": -749.7059602416512
        }
    },
    {
        "id": "Karyu Sokyu",
        "position": {
            "x": -2651.911811127039,
            "y": -749.7059602416512
        }
    },
    {
        "id": "Kousaku Matsumora",
        "position": {
            "x": -2793.911811127039,
            "y": -617.7059602416521
        }
    },
    {
        "id": "Koho Kuba",
        "position": {
            "x": -2796.600832970922,
            "y": -440.3829812523321
        }
    },
    {
        "id": "Kotasu Iha",
        "position": {
            "x": -3053.2336364294333,
            "y": -450.73645529294066
        }
    },
    {
        "id": "Shoshin Nagamine",
        "position": {
            "x": -2913.911811127039,
            "y": -221.70596024165297
        }
    },
    {
        "id": "Shuri Te",
        "position": {
            "x": -221.91446226398455,
            "y": -885.7909280845713
        }
    },
    {
        "id": "Kanga Sakugawa",
        "position": {
            "x": -221.9144622639838,
            "y": -693.2167984604455
        }
    },
    {
        "id": "Sokon Matsumura",
        "position": {
            "x": -176.48386504588996,
            "y": 468.5434051496941
        }
    },
    {
        "id": "Choyu Motobu",
        "position": {
            "x": -1547.423124535153,
            "y": -736.6127986812799
        }
    },
    {
        "id": "Choki Motobu",
        "position": {
            "x": -1792.6044013107726,
            "y": -410.5444653326238
        }
    },
    {
        "id": "Chotoku Kyan",
        "position": {
            "x": -2106.4172408972117,
            "y": 26.574325351498864
        }
    },
    {
        "id": "Motobo Ryu",
        "position": {
            "x": -1641.863685854473,
            "y": -414.55446931994305
        }
    },
    {
        "id": "Motobo Udundi",
        "position": {
            "x": -1559.5253059270701,
            "y": -548.9099472440496
        }
    },
    {
        "id": "Hironori Otsuka",
        "position": {
            "x": -1530.572621730303,
            "y": -179.50051590874432
        }
    },
    {
        "id": "Tatsuo Yamada",
        "position": {
            "x": -1815.491201269701,
            "y": -206.5731509437702
        }
    },
    {
        "id": "Yasuhiro Konishi",
        "position": {
            "x": -1664.5403567451826,
            "y": -195.74409692975985
        }
    },
    {
        "id": "Kenwa Mabuni",
        "position": {
            "x": -2023.4602946147875,
            "y": 233.89686725180204
        }
    },
    {
        "id": "Joen Nakazato",
        "position": {
            "x": -2235.354333209423,
            "y": 225.67842235625926
        }
    },
    {
        "id": "Zenryo Shimabukuro",
        "position": {
            "x": -1870.1959897892386,
            "y": 239.71274066269507
        }
    },
    {
        "id": "Kenyu Yabu",
        "position": {
            "x": 36.53810031475376,
            "y": 684.179322261922
        }
    },
    {
        "id": "Aanko Asato",
        "position": {
            "x": -508.62463369874877,
            "y": 675.3177448750478
        }
    },
    {
        "id": "Aanko Itosu",
        "position": {
            "x": -376.6246336987486,
            "y": 675.3177448750478
        }
    },
    {
        "id": "Chofu Kyan",
        "position": {
            "x": -206.0076285388964,
            "y": 684.6614520512472
        }
    },
    {
        "id": "Gichin Funakoshi",
        "position": {
            "x": 87.19411077252039,
            "y": 901.3725967338755
        }
    },
    {
        "id": "Chomo Hanashiro",
        "position": {
            "x": -508.62463369874877,
            "y": 807.3177448750478
        }
    },
    {
        "id": "Choshin Chibana",
        "position": {
            "x": -376.6246336987486,
            "y": 807.3177448750478
        }
    },
    {
        "id": "Izumo Kanja Yoshiteru",
        "position": {
            "x": 7658.979172664131,
            "y": 272.6340714843821
        }
    },
    {
        "id": "Iizasa Choisai Ienao",
        "position": {
            "x": 10435.48890970155,
            "y": 6763.128601584678
        }
    },
    {
        "id": "Tenshin Shoden Katori Shinto Ryu",
        "position": {
            "x": 10435.48890970155,
            "y": 6895.128601584677
        }
    },
    {
        "id": "Takenouchi Hisamori",
        "position": {
            "x": 7924.139784946236,
            "y": -262.05376344086017
        }
    },
    {
        "id": "Takenouchi Ryu",
        "position": {
            "x": 7897.066582740621,
            "y": -11.771520716939628
        }
    },
    {
        "id": "Jujutsu",
        "position": {
            "x": 7886.04529009375,
            "y": 151.1137328617483
        }
    },
    {
        "id": "Yoshin Ryu",
        "position": {
            "x": 7885.042081623077,
            "y": 319.7483794141624
        }
    },
    {
        "id": "Yamamoto Tamiza Hideya",
        "position": {
            "x": 7884.925147523275,
            "y": 444.37682862372844
        }
    },
    {
        "id": "Shin no Shinto-ryu",
        "position": {
            "x": 7944.300974947406,
            "y": 566.2859972308493
        }
    },
    {
        "id": "Hitotsuyanagi Oribe",
        "position": {
            "x": 7796.394906731259,
            "y": 564.0779397055578
        }
    },
    {
        "id": "Homma Jouemon",
        "position": {
            "x": 7943.291891808119,
            "y": 693.2405815344098
        }
    },
    {
        "id": "Iso Mataemon Ryukansai Minamoto no Masatari",
        "position": {
            "x": 7871.999921169643,
            "y": 813.947812545133
        }
    },
    {
        "id": "Terada",
        "position": {
            "x": 8106.643014580788,
            "y": 893.5220300827139
        }
    },
    {
        "id": "Fukuno Shichirouemon n Masakatsu",
        "position": {
            "x": 8263.049621526978,
            "y": 884.9990071001178
        }
    },
    {
        "id": "Tenjin Shinyo Ryu",
        "position": {
            "x": 7869.061069527032,
            "y": 961.4614290023051
        }
    },
    {
        "id": "Kito Ryu",
        "position": {
            "x": 8197.049621526981,
            "y": 1016.999007100118
        }
    },
    {
        "id": "Iikubo Tsunetoshi",
        "position": {
            "x": 8197.049621526981,
            "y": 1148.999007100118
        }
    },
    {
        "id": "Mataemon Masatomo",
        "position": {
            "x": 7470.748388295244,
            "y": 1105.1487477705136
        }
    },
    {
        "id": "Fukuda Hachinosuke",
        "position": {
            "x": 7880.74838829524,
            "y": 1105.1487477705136
        }
    },
    {
        "id": "Kano Jigoro",
        "position": {
            "x": 7880.74838829524,
            "y": 1237.148747770514
        }
    },
    {
        "id": "Kodokan Judo",
        "position": {
            "x": 7236.438722023896,
            "y": 2289.0634266251695
        }
    },
    {
        "id": "Tomita Tsunejiro",
        "position": {
            "x": 7340.784649101214,
            "y": 3309.1890348358997
        }
    },
    {
        "id": "Kosen Judo",
        "position": {
            "x": 6763.101893868433,
            "y": 2815.293428285173
        }
    },
    {
        "id": "Four Guardians of the Kodokan",
        "position": {
            "x": 7008.230397268545,
            "y": 2687.127048731949
        }
    },
    {
        "id": "Mataichiro Iso",
        "position": {
            "x": 7603.997972396578,
            "y": 2670.8564012424877
        }
    },
    {
        "id": "Kentaro Inoue",
        "position": {
            "x": 7669.314886668833,
            "y": 3189.219934626362
        }
    },
    {
        "id": "Takisaburo Tobari",
        "position": {
            "x": 7606.687598035972,
            "y": 2928.0798801103106
        }
    },
    {
        "id": "Otani Nobutomo",
        "position": {
            "x": 8930.389160122359,
            "y": 5582.023439748463
        }
    },
    {
        "id": "Saigo Tanomo",
        "position": {
            "x": 9142.85868810573,
            "y": 5718.312879263989
        }
    },
    {
        "id": "Toma Shibuya",
        "position": {
            "x": 9040.581404032775,
            "y": 5721.171043294857
        }
    },
    {
        "id": "Sakakibara Kenkichi",
        "position": {
            "x": 8924.948788130507,
            "y": 5715.740503184087
        }
    },
    {
        "id": "Takeda Sokaku",
        "position": {
            "x": 9031.199278629994,
            "y": 5914.139415520453
        }
    },
    {
        "id": "Morihei Ueshiba",
        "position": {
            "x": 8773.976075187667,
            "y": 5893.8758159907975
        }
    },
    {
        "id": "Mitsuyo Maeda",
        "position": {
            "x": 7335.827826513861,
            "y": 3468.90635698234
        }
    },
    {
        "id": "Carlos Gracie",
        "position": {
            "x": 7334.752832602465,
            "y": 3603.310986837475
        }
    },
    {
        "id": "Helio Gracie",
        "position": {
            "x": 7468.575641786956,
            "y": 3604.5374021390526
        }
    },
    {
        "id": "Carlos Gracie Jr.",
        "position": {
            "x": 7310.752832602465,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Carlinhos Gracie",
        "position": {
            "x": 7310.752832602465,
            "y": 3999.310986837476
        }
    },
    {
        "id": "Gigo Funakoshi",
        "position": {
            "x": 2049.5251058424756,
            "y": 343.07073976535014
        }
    },
    {
        "id": "Gogen Yamaguchi",
        "position": {
            "x": 2484.6615655544533,
            "y": 302.58923271661035
        }
    },
    {
        "id": "Masutatsu Oyama",
        "position": {
            "x": 2176.0129646350824,
            "y": 538.6482249656409
        }
    },
    {
        "id": "Wudang",
        "position": {
            "x": 10329.10367456732,
            "y": -545.0635095443166
        }
    },
    {
        "id": "Daoyin",
        "position": {
            "x": 9914.311349030944,
            "y": 285.6420795740032
        }
    },
    {
        "id": "Zhou Tong",
        "position": {
            "x": 9869.666666666668,
            "y": -451.6021505376345
        }
    },
    {
        "id": "Yue Fei",
        "position": {
            "x": 9869.666666666668,
            "y": -319.6021505376345
        }
    },
    {
        "id": "Qi Jiguang",
        "position": {
            "x": 10030.423253609188,
            "y": 63.17569500113845
        }
    },
    {
        "id": "Jixiao Xinshu",
        "position": {
            "x": 9960.474476482159,
            "y": 176.13352802882218
        }
    },
    {
        "id": "Lianbing Shiji",
        "position": {
            "x": 10094.602467715573,
            "y": 175.7201894239979
        }
    },
    {
        "id": "Chen Tuan",
        "position": {
            "x": 11130.516255764409,
            "y": -335.1955967024911
        }
    },
    {
        "id": "Zhang Sanfeng",
        "position": {
            "x": 10335.999166451644,
            "y": 157.14906938160763
        }
    },
    {
        "id": "Wang Zongyue",
        "position": {
            "x": 10333.402888925213,
            "y": 288.0168600517224
        }
    },
    {
        "id": "Chen Wangting",
        "position": {
            "x": 10333.855354018411,
            "y": 431.3389533505742
        }
    },
    {
        "id": "Jiang Fa",
        "position": {
            "x": 11207,
            "y": 437
        }
    },
    {
        "id": "Xing Xihuai",
        "position": {
            "x": 11207,
            "y": 569
        }
    },
    {
        "id": "Zhang Chucheni",
        "position": {
            "x": 11215.675418452643,
            "y": 961.2625535793027
        }
    },
    {
        "id": "Chen Jingbo",
        "position": {
            "x": 11205.675418452643,
            "y": 1093.2625535793027
        }
    },
    {
        "id": "Zhang Zongyu",
        "position": {
            "x": 11205.675418452643,
            "y": 1225.2625535793027
        }
    },
    {
        "id": "Zhang Yan",
        "position": {
            "x": 11205.675418452643,
            "y": 1357.2625535793027
        }
    },
    {
        "id": "Chen Qingping",
        "position": {
            "x": 11203.444155437688,
            "y": 1489.2625535793027
        }
    },
    {
        "id": "He Zhaoyuan",
        "position": {
            "x": 11492.500585377375,
            "y": 1621.2625535793027
        }
    },
    {
        "id": "He Qingxi",
        "position": {
            "x": 11491.835255496908,
            "y": 1739.312765562073
        }
    },
    {
        "id": "Song Yunhua",
        "position": {
            "x": 11491.03848127254,
            "y": 1884.8949826068813
        }
    },
    {
        "id": "Chen Zhongshen",
        "position": {
            "x": 11760.154644809028,
            "y": 1483.4421014697118
        }
    },
    {
        "id": "Wu Yuxiang",
        "position": {
            "x": 11200.81995783699,
            "y": 1620.2914614561719
        }
    },
    {
        "id": "Li Yiyu",
        "position": {
            "x": 11205.675418452643,
            "y": 1753.2625535793027
        }
    },
    {
        "id": "Hao Weizhen",
        "position": {
            "x": 11205.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Sun Lutang",
        "position": {
            "x": 11139.675418452643,
            "y": 2017.2625535793027
        }
    },
    {
        "id": "Sun Jianyun",
        "position": {
            "x": 11139.675418452643,
            "y": 2149.2625535793027
        }
    },
    {
        "id": "Sun Yongtian",
        "position": {
            "x": 11139.675418452643,
            "y": 2281.2625535793027
        }
    },
    {
        "id": "Hao Yueru",
        "position": {
            "x": 11271.675418452643,
            "y": 2017.2625535793027
        }
    },
    {
        "id": "Hao Shaoru",
        "position": {
            "x": 11271.675418452643,
            "y": 2149.2625535793027
        }
    },
    {
        "id": "Liu Jishun",
        "position": {
            "x": 11271.675418452643,
            "y": 2281.2625535793027
        }
    },
    {
        "id": "Chen Xin",
        "position": {
            "x": 11760.154644809028,
            "y": 1615.4421014697118
        }
    },
    {
        "id": "Chen Kezhong",
        "position": {
            "x": 11760.154644809028,
            "y": 1747.4421014697118
        }
    },
    {
        "id": "Chen Boxiang",
        "position": {
            "x": 11760.154644809028,
            "y": 1879.4421014697118
        }
    },
    {
        "id": "Lu Zhizhong",
        "position": {
            "x": 11760.154644809028,
            "y": 2011.4421014697118
        }
    },
    {
        "id": "Chen Ruxin",
        "position": {
            "x": 9517,
            "y": 569
        }
    },
    {
        "id": "Chen Dakun",
        "position": {
            "x": 9459.675418452643,
            "y": 961.2625535793027
        }
    },
    {
        "id": "Chen Shantong",
        "position": {
            "x": 9459.675418452643,
            "y": 1093.2625535793027
        }
    },
    {
        "id": "Chen Dapeng",
        "position": {
            "x": 9591.675418452643,
            "y": 961.2625535793027
        }
    },
    {
        "id": "Chen Shanzhi",
        "position": {
            "x": 9591.675418452643,
            "y": 1093.2625535793027
        }
    },
    {
        "id": "Chen Suole",
        "position": {
            "x": 10329,
            "y": 569
        }
    },
    {
        "id": "Chen Guangyin",
        "position": {
            "x": 9743.675418452643,
            "y": 961.2625535793027
        }
    },
    {
        "id": "Chen Jixia",
        "position": {
            "x": 9743.675418452643,
            "y": 1093.2625535793027
        }
    },
    {
        "id": "Chen Zhengru",
        "position": {
            "x": 10683.590802575198,
            "y": 963.6099895588771
        }
    },
    {
        "id": "Chen Jie",
        "position": {
            "x": 10677.675418452643,
            "y": 1093.2625535793027
        }
    },
    {
        "id": "Chen Gongzhao",
        "position": {
            "x": 10677.675418452643,
            "y": 1225.2625535793027
        }
    },
    {
        "id": "Chen Bingwang",
        "position": {
            "x": 9740.346384493321,
            "y": 1234.6798605569725
        }
    },
    {
        "id": "Chen Changxing",
        "position": {
            "x": 9738.642082983708,
            "y": 1359.609989558877
        }
    },
    {
        "id": "Chen Gengyun",
        "position": {
            "x": 9736.838232147966,
            "y": 1479.8728096610048
        }
    },
    {
        "id": "Chen Yanxi",
        "position": {
            "x": 9736.838232147966,
            "y": 1611.8728096610048
        }
    },
    {
        "id": "Chen Fake",
        "position": {
            "x": 9736.838232147966,
            "y": 1743.8728096610048
        }
    },
    {
        "id": "Chen Zhaopi",
        "position": {
            "x": 9604.441639220286,
            "y": 1846.6770746281163
        }
    },
    {
        "id": "Chen Zhaokui",
        "position": {
            "x": 9849.996440371642,
            "y": 1862.602021009692
        }
    },
    {
        "id": "Chen Xiaowang",
        "position": {
            "x": 9712.950812575604,
            "y": 2124.6557497925587
        }
    },
    {
        "id": "Chen Youben",
        "position": {
            "x": 10677.675418452643,
            "y": 1357.2625535793027
        }
    },
    {
        "id": "Yang Luchan",
        "position": {
            "x": 10676.187697954956,
            "y": 1485.9089716785309
        }
    },
    {
        "id": "Wang Lanting",
        "position": {
            "x": 10791.007289476189,
            "y": 1619.952586404277
        }
    },
    {
        "id": "Yang Jianhou",
        "position": {
            "x": 10673.723613079046,
            "y": 1613.4027505291494
        }
    },
    {
        "id": "Yang Chengfu",
        "position": {
            "x": 10669.793711553972,
            "y": 1754.5725207543283
        }
    },
    {
        "id": "Zhang Qinlin",
        "position": {
            "x": 10856.505648227465,
            "y": 1889.1924551043792
        }
    },
    {
        "id": "Yang Zhenduo",
        "position": {
            "x": 10733.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Yang Jun",
        "position": {
            "x": 10733.675418452643,
            "y": 2017.2625535793027
        }
    },
    {
        "id": "Yang Style",
        "position": {
            "x": 10733.675418452643,
            "y": 2149.2625535793027
        }
    },
    {
        "id": "Yang Banhou",
        "position": {
            "x": 10222.20335047925,
            "y": 1606.852914654022
        }
    },
    {
        "id": "Wang Jiaoyu",
        "position": {
            "x": 10205.675418452643,
            "y": 1753.2625535793027
        }
    },
    {
        "id": "Wu Quanyou",
        "position": {
            "x": 10337.675418452643,
            "y": 1753.2625535793027
        }
    },
    {
        "id": "Wu Jianquan",
        "position": {
            "x": 10337.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Wu Gongyi",
        "position": {
            "x": 10337.675418452643,
            "y": 2017.2625535793027
        }
    },
    {
        "id": "Wu Yanxia",
        "position": {
            "x": 10388.457453601062,
            "y": 2141.4027505291497
        }
    },
    {
        "id": "Wu Kuang-yu",
        "position": {
            "x": 10388.457453601062,
            "y": 2273.4027505291497
        }
    },
    {
        "id": "Yun Mu Kwan",
        "position": {
            "x": 287.53064533338977,
            "y": 4976.692022013957
        }
    },
    {
        "id": "Chun Sang Sup",
        "position": {
            "x": 168.15521167220678,
            "y": 5143.301669765992
        }
    },
    {
        "id": "Ji Do Kwan",
        "position": {
            "x": 164.6942467130829,
            "y": 5285.684564643364
        }
    },
    {
        "id": "Lee Kyo Yoon",
        "position": {
            "x": 164.6942467130829,
            "y": 5417.684564643364
        }
    },
    {
        "id": "Yoon Byung-In",
        "position": {
            "x": -143.29311616056637,
            "y": 1243.7904392961618
        }
    },
    {
        "id": "Chang Moo Kwan",
        "position": {
            "x": -143.29311616056637,
            "y": 1375.7904392961636
        }
    },
    {
        "id": "Park Chul Hee",
        "position": {
            "x": -209.29311616056756,
            "y": 1507.790439296166
        }
    },
    {
        "id": "Hong Jong Pyo",
        "position": {
            "x": -63.734891984735924,
            "y": 1509.0827320879446
        }
    },
    {
        "id": "Ro Byung Jik",
        "position": {
            "x": 7.491708023104124,
            "y": 1246.6459037688362
        }
    },
    {
        "id": "Subak",
        "position": {
            "x": 263.7701850741876,
            "y": 975.5117575796107
        }
    },
    {
        "id": "Taekkyon",
        "position": {
            "x": 265.1535471983415,
            "y": 1075.0408318322434
        }
    },
    {
        "id": "Hwang Kee",
        "position": {
            "x": 338.3782321150554,
            "y": 1235.6442445077175
        }
    },
    {
        "id": "Lee Won-kuk",
        "position": {
            "x": 189.46476515676437,
            "y": 1243.937343540787
        }
    },
    {
        "id": "Chung Do Kwan",
        "position": {
            "x": 193.48418856113432,
            "y": 1377.0848594257354
        }
    },
    {
        "id": "Lee Yong Woo",
        "position": {
            "x": 201.5855951167228,
            "y": 1525.5293773256521
        }
    },
    {
        "id": "Choi Hong Hi",
        "position": {
            "x": 330.7648736702417,
            "y": 1527.8787454609424
        }
    },
    {
        "id": "Lai",
        "position": {
            "x": 12210.483037056927,
            "y": -388.62121671589927
        }
    },
    {
        "id": "Wu Zhong",
        "position": {
            "x": 12276.483037056927,
            "y": -256.6212167158992
        }
    },
    {
        "id": "Meishan Quan",
        "position": {
            "x": 4520.698156365558,
            "y": -357.559577118331
        }
    },
    {
        "id": "De'ang Meihua Quan",
        "position": {
            "x": 5031.556147136409,
            "y": -346.9586866842404
        }
    },
    {
        "id": "Hunan Meihua Quan",
        "position": {
            "x": 4647.938113344685,
            "y": -220.7409905573807
        }
    },
    {
        "id": "Emei Meihua Quan",
        "position": {
            "x": 4896.606451659762,
            "y": -87.7772732451906
        }
    },
    {
        "id": "Meihua Jie Quan",
        "position": {
            "x": 4763.672006117609,
            "y": -88.74099055738066
        }
    },
    {
        "id": "Shuai Jiao",
        "position": {
            "x": 4718.446048495789,
            "y": -1346.0864107378272
        }
    },
    {
        "id": "Yoshida Family",
        "position": {
            "x": 10451.952709059584,
            "y": 5538.343421147667
        }
    },
    {
        "id": "Dewanoumi Ichimon",
        "position": {
            "x": 9340.316387216028,
            "y": 5931.0148209948675
        }
    },
    {
        "id": "Nishonoseki Ichimon",
        "position": {
            "x": 9469.869590114744,
            "y": 5934.672049071063
        }
    },
    {
        "id": "Takasago Ichimon",
        "position": {
            "x": 9597.127122639979,
            "y": 5935.307172312167
        }
    },
    {
        "id": "Isegahama Ichimon",
        "position": {
            "x": 9718.604815642768,
            "y": 5935.536818477163
        }
    },
    {
        "id": "Nishikigi Tetsuya",
        "position": {
            "x": 9773.692916334956,
            "y": 6245.486701627544
        }
    },
    {
        "id": "Wakaikari",
        "position": {
            "x": 9910.538039887346,
            "y": 6251.519241017848
        }
    },
    {
        "id": "Onogawa Kisaburo",
        "position": {
            "x": 9628.76219504287,
            "y": 6252.491010346982
        }
    },
    {
        "id": "Raiden Tameemon",
        "position": {
            "x": 10175.273271262464,
            "y": 6060.026024446832
        }
    },
    {
        "id": "Niten Ichi Ryu",
        "position": {
            "x": 10655.066026452447,
            "y": 5539.358630407187
        }
    },
    {
        "id": "Minamoto Clan",
        "position": {
            "x": 10573.32734276669,
            "y": 6346.981514728442
        }
    },
    {
        "id": "Fujiwara Clan",
        "position": {
            "x": 10705.32734276669,
            "y": 6346.981514728442
        }
    },
    {
        "id": "Tachibana Clan",
        "position": {
            "x": 10837.32734276669,
            "y": 6346.981514728442
        }
    },
    {
        "id": "Fung Dou Dak",
        "position": {
            "x": 4136.417968991994,
            "y": 504.2383217325503
        }
    },
    {
        "id": "Bak Mei Pai",
        "position": {
            "x": 4448.03135776949,
            "y": 647.0530142518932
        }
    },
    {
        "id": "Wu Mei Pai",
        "position": {
            "x": 4222.620291430686,
            "y": 636.0550521334089
        }
    },
    {
        "id": "Gong Rongguang",
        "position": {
            "x": 4323.012141699591,
            "y": 768.055052133409
        }
    },
    {
        "id": "Southern Dragon",
        "position": {
            "x": 4669.316434986128,
            "y": 649.4799131508554
        }
    },
    {
        "id": "Chow Gar",
        "position": {
            "x": 5428.806451612904,
            "y": 1355.150537634409
        }
    },
    {
        "id": "Chu Gar (Chuka Shaolin)",
        "position": {
            "x": 5296.462365591399,
            "y": 1049.9032258064508
        }
    },
    {
        "id": "Bamboo Forest",
        "position": {
            "x": 5032.462365591399,
            "y": 1049.9032258064508
        }
    },
    {
        "id": "Iron Ox",
        "position": {
            "x": 4900.462365591399,
            "y": 1049.9032258064508
        }
    },
    {
        "id": "Hsiung Thong Long Quet Tsot",
        "position": {
            "x": 4768.462365591399,
            "y": 1049.9032258064508
        }
    },
    {
        "id": "Lau Ga",
        "position": {
            "x": 4061.3737520767163,
            "y": 1584.336091878785
        }
    },
    {
        "id": "Mok Ga",
        "position": {
            "x": 4183.7982415520055,
            "y": 1590.6961040060771
        }
    },
    {
        "id": "Choy Lei Fut",
        "position": {
            "x": 4392.009379335158,
            "y": 1883.3825038403354
        }
    },
    {
        "id": "Chan Wan-shun",
        "position": {
            "x": 3892.5497167415724,
            "y": 1421.546272901493
        }
    },
    {
        "id": "Jeet Kune Do",
        "position": {
            "x": 3680.022979976082,
            "y": 1805.8790411404548
        }
    },
    {
        "id": "Wu Wei",
        "position": {
            "x": 3811.015342299157,
            "y": 1983.834260370386
        }
    },
    {
        "id": "Hop Ga",
        "position": {
            "x": 4793.36355420969,
            "y": 1678.820828082891
        }
    },
    {
        "id": "Pak Hok Pai (Tibetan White Crane)",
        "position": {
            "x": 4935.953646457877,
            "y": 1685.5422869400352
        }
    },
    {
        "id": "Incense Shop Boxing",
        "position": {
            "x": 3463.5918495281376,
            "y": -1034.8868800589157
        }
    },
    {
        "id": "Nakaima Kenri",
        "position": {
            "x": 2717.42545242624,
            "y": 39.932405896012106
        }
    },
    {
        "id": "Nakaima Kenchu",
        "position": {
            "x": 2862.8530390944306,
            "y": 39.93240589601188
        }
    },
    {
        "id": "Kogusuku Taitei",
        "position": {
            "x": 2485.58187903022,
            "y": -167.989394719314
        }
    },
    {
        "id": "Pangal-noon (Uechi Ryu)",
        "position": {
            "x": 2017.090635027496,
            "y": 165.77335076274224
        }
    },
    {
        "id": "Toon Ryu",
        "position": {
            "x": 2602.4725705607398,
            "y": 171.4102164360884
        }
    },
    {
        "id": "Ryuei Ryu",
        "position": {
            "x": 3035.1147669705733,
            "y": 202.00409096728217
        }
    },
    {
        "id": "Kojo Ryu",
        "position": {
            "x": 1474.4642643044635,
            "y": 351.8944543158793
        }
    },
    {
        "id": "Giel Yamada",
        "position": {
            "x": -2925.911811127039,
            "y": -617.7059602416521
        }
    },
    {
        "id": "Kokan Oyadomari",
        "position": {
            "x": -2595.4381086093695,
            "y": -631.3028539384482
        }
    },
    {
        "id": "Kosei Nakamoto",
        "position": {
            "x": -2786.8027426791805,
            "y": -341.61983251116715
        }
    },
    {
        "id": "Chojin Kuba",
        "position": {
            "x": -3178.267609947973,
            "y": -274.11393102195456
        }
    },
    {
        "id": "Seiyu Nakasone",
        "position": {
            "x": -3060.4518411884255,
            "y": -287.78332484147194
        }
    },
    {
        "id": "Matsubayashi Ryu (Shorin)",
        "position": {
            "x": -2969.911811127039,
            "y": -89.70596024165206
        }
    },
    {
        "id": "Shorinji Ryu",
        "position": {
            "x": -2781.911811127039,
            "y": -89.70596024165206
        }
    },
    {
        "id": "Ryosei Kuwae",
        "position": {
            "x": -79.99127316359747,
            "y": 687.3500979176629
        }
    },
    {
        "id": "Chosei Motobu",
        "position": {
            "x": -1504.140874606113,
            "y": -388.9339230520113
        }
    },
    {
        "id": "Wado Ryu",
        "position": {
            "x": -1528.0363150395826,
            "y": -40.13875398187149
        }
    },
    {
        "id": "Nihon Kenpo Karatedo",
        "position": {
            "x": -1821.0976466276138,
            "y": -46.323790341573776
        }
    },
    {
        "id": "Shinto Jinen Ryu",
        "position": {
            "x": -1663.668854606303,
            "y": -44.890410835670615
        }
    },
    {
        "id": "Shito Ryu",
        "position": {
            "x": -2032.0027123049304,
            "y": 389.61574191148463
        }
    },
    {
        "id": "Seibukan",
        "position": {
            "x": -1854.734671990395,
            "y": 390.95772699212176
        }
    },
    {
        "id": "Kanken Toyama",
        "position": {
            "x": -206.0076285388964,
            "y": 816.661452051247
        }
    },
    {
        "id": "Shotokan Karate",
        "position": {
            "x": -49.89293195974483,
            "y": 906.0445271126154
        }
    },
    {
        "id": "Kobayashi Ryu (Shorin)",
        "position": {
            "x": -508.62463369874877,
            "y": 939.3177448750473
        }
    },
    {
        "id": "Shudokan",
        "position": {
            "x": -376.6246336987486,
            "y": 939.3177448750473
        }
    },
    {
        "id": "Shinden Fudo Ryu",
        "position": {
            "x": 7658.979172664131,
            "y": 404.6340714843816
        }
    },
    {
        "id": "Nakamura-ryu",
        "position": {
            "x": 10303.488909701548,
            "y": 7027.128601584676
        }
    },
    {
        "id": "Meifu Shinkage-ryu",
        "position": {
            "x": 10435.48890970155,
            "y": 7027.128601584676
        }
    },
    {
        "id": "Shinto Muso-ryu",
        "position": {
            "x": 10567.488909701551,
            "y": 7027.128601584676
        }
    },
    {
        "id": "Yagyū Shinkage-ryu",
        "position": {
            "x": 10699.488909701551,
            "y": 7027.128601584676
        }
    },
    {
        "id": "Ryoi Shinto Ryu",
        "position": {
            "x": 8329.049621526978,
            "y": 1016.999007100118
        }
    },
    {
        "id": "Kyuzo Mifune",
        "position": {
            "x": 6640.5615487561745,
            "y": 2814.062812440154
        }
    },
    {
        "id": "Masahiko Kimura",
        "position": {
            "x": 6756.258382038602,
            "y": 2929.757575438293
        }
    },
    {
        "id": "Yokoyama Sakujiro",
        "position": {
            "x": 7505.107778230054,
            "y": 3316.357846396863
        }
    },
    {
        "id": "Saigo Shiro",
        "position": {
            "x": 7113.974053983291,
            "y": 3299.6932272158556
        }
    },
    {
        "id": "Yamashita Yoshitsugu",
        "position": {
            "x": 7216.553468999473,
            "y": 3299.6932272158556
        }
    },
    {
        "id": "Daito Ryu",
        "position": {
            "x": 9032.965200715693,
            "y": 6032.115149609287
        }
    },
    {
        "id": "Aikido",
        "position": {
            "x": 8771.948909060979,
            "y": 6045.239642785531
        }
    },
    {
        "id": "Luiz Franca",
        "position": {
            "x": 7093.511417995892,
            "y": 3599.9367166003403
        }
    },
    {
        "id": "Oswaldo Fadda",
        "position": {
            "x": 7213.273474212075,
            "y": 3600.7382598853847
        }
    },
    {
        "id": "Rickson Gracie",
        "position": {
            "x": 7046.752832602465,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Royce Gracie",
        "position": {
            "x": 7178.752832602465,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Relson Gracie",
        "position": {
            "x": 7442.752832602467,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Rolls Gracie",
        "position": {
            "x": 7574.752832602467,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Rorion Gracie",
        "position": {
            "x": 7706.752832602464,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Jean Jacques Machado",
        "position": {
            "x": 7838.752832602461,
            "y": 3867.310986837476
        }
    },
    {
        "id": "Gracie Barra",
        "position": {
            "x": 7310.752832602465,
            "y": 4131.310986837475
        }
    },
    {
        "id": "Kyokushin Karate",
        "position": {
            "x": 2174.7825084397864,
            "y": 687.9514810449441
        }
    },
    {
        "id": "Xing Yi Quan",
        "position": {
            "x": 9935.666666666668,
            "y": -187.60215053763437
        }
    },
    {
        "id": "Eagle Claw",
        "position": {
            "x": 9803.666666666668,
            "y": -187.60215053763437
        }
    },
    {
        "id": "Liuhebafa Quan",
        "position": {
            "x": 11126.189910382642,
            "y": -187.0001975789238
        }
    },
    {
        "id": "Neijia",
        "position": {
            "x": 10480.12161021372,
            "y": 158.94499644481303
        }
    },
    {
        "id": "Chen Tai Chi",
        "position": {
            "x": 9806.881258668956,
            "y": 439.43866790960595
        }
    },
    {
        "id": "Zhaobao Style",
        "position": {
            "x": 11484.797747909422,
            "y": 2026.7711241870325
        }
    },
    {
        "id": "Sun Style",
        "position": {
            "x": 11139.675418452643,
            "y": 2413.2625535793027
        }
    },
    {
        "id": "Wu (Hao) Style",
        "position": {
            "x": 11271.675418452643,
            "y": 2413.2625535793027
        }
    },
    {
        "id": "Chen Small Frame",
        "position": {
            "x": 11760.154644809028,
            "y": 2143.442101469712
        }
    },
    {
        "id": "Chen Bingqi",
        "position": {
            "x": 9457.511770537983,
            "y": 1223.3790921837685
        }
    },
    {
        "id": "Chen Bingren",
        "position": {
            "x": 9587.628309142448,
            "y": 1231.8546684636717
        }
    },
    {
        "id": "Chen Shenru",
        "position": {
            "x": 10026.265917731263,
            "y": 951.4638904957823
        }
    },
    {
        "id": "Chen Xunru",
        "position": {
            "x": 10254.698800232,
            "y": 942.5144517982092
        }
    },
    {
        "id": "Chen Xiaoxing",
        "position": {
            "x": 9720.205399253262,
            "y": 1960.0979705162783
        }
    },
    {
        "id": "Chen Style",
        "position": {
            "x": 9707.642497115077,
            "y": 2256.6557497925587
        }
    },
    {
        "id": "Li Ruidong",
        "position": {
            "x": 10794.937191001265,
            "y": 1757.1924551043792
        }
    },
    {
        "id": "Cheng Man-ching",
        "position": {
            "x": 10469.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Fu Zhongwen",
        "position": {
            "x": 10601.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Wang Yannian",
        "position": {
            "x": 10865.675418452643,
            "y": 2017.2625535793027
        }
    },
    {
        "id": "Yang Kuk Jin",
        "position": {
            "x": 10733.675418452643,
            "y": 2281.2625535793027
        }
    },
    {
        "id": "Yang Shaohou",
        "position": {
            "x": 10073.675418452643,
            "y": 1753.2625535793027
        }
    },
    {
        "id": "Kuo Lien Ying",
        "position": {
            "x": 10205.675418452643,
            "y": 1885.2625535793027
        }
    },
    {
        "id": "Cheng Tin Hung",
        "position": {
            "x": 10265.933908503817,
            "y": 2138.7828161790985
        }
    },
    {
        "id": "Wu Style",
        "position": {
            "x": 10388.457453601062,
            "y": 2405.4027505291497
        }
    },
    {
        "id": "Han Moo Kwan",
        "position": {
            "x": 164.6942467130829,
            "y": 5549.684564643364
        }
    },
    {
        "id": "Kang Duk Won",
        "position": {
            "x": -143.29311616056637,
            "y": 1639.7904392961686
        }
    },
    {
        "id": "Song Moo Kwan",
        "position": {
            "x": 7.491708023104124,
            "y": 1378.645903768838
        }
    },
    {
        "id": "Moo Duk Kwan",
        "position": {
            "x": 342.65518354644865,
            "y": 1379.6942815622642
        }
    },
    {
        "id": "Jung Do Kwan",
        "position": {
            "x": 201.38008915450098,
            "y": 1676.2743491543256
        }
    },
    {
        "id": "Oh Do Kwan",
        "position": {
            "x": 337.3440158249365,
            "y": 1676.6921087451624
        }
    },
    {
        "id": "Pi",
        "position": {
            "x": 12144.483037056927,
            "y": -256.6212167158992
        }
    },
    {
        "id": "Baji Quan",
        "position": {
            "x": 12144.483037056927,
            "y": -124.62121671589924
        }
    },
    {
        "id": "Wu Ying",
        "position": {
            "x": 12342.483037056927,
            "y": -124.62121671589924
        }
    }
]
  ;

export { nodes_list, positionsList };  
