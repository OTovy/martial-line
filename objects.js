
var nodes_list = [

  /*


  Onogawa Kisaburo
  */
  // Sumo

   {"id": "Hosokawa Clan", "label": "Hosokawa Clan", "linked_nodes": ["Yoshida Family"]},
   {"id": "Sumo", "label": "Sumo", "linked_nodes": ["Dewanoumi Ichimon", "Nishonoseki Ichimon", "Takasago Ichimon", "Tokitsukaze Ichimon", "Isegahama Ichimon"]},
    {"id": "Tokitsukaze Ichimon", "label": "Tokitsukaze Ichimon", "linked_nodes": ["Isenoumi Heya"]},
    {"id": "Isenoumi Heya", "label": "Isenoumi Heya", "linked_nodes": ["Tanikaze Kajinosuke", "Nishikigi Tetsuya", "Wakaikari"]},

    
    {"id": "Kusazuri Heya", "label": "Kusazuri Heya", "linked_nodes": ["Onogawa Kisaburo"]},
    {"id": "Onogawa Heya", "label": "Onogawa Heya", "linked_nodes": ["Onogawa Kisaburo"]},
    
    {"id": "Isa Tomomune", "label": "Isa Tomomune", "linked_nodes": ["Date Clan"]},
    {"id": "Date Clan", "label": "Date Clan", "linked_nodes": ["Tanikaze Kajinosuke"]},
    {"id": "Tanikaze Kajinosuke", "label": "Tanikaze Kajinosuke", "linked_nodes": ["Raiden Tameemon"]},

  
    {"id": "Samurai", "label": "Samurai", "linked_nodes": ["Saigo Tanomo", "Sakakibara Kenkichi", "Date Clan", "Hosokawa Clan"]},

  
  {"id": "Shaolin", "label": "Shaolin", "linked_nodes": ["Southern Shaolin", "Five Elders", "Tode"]},
  {"id": "Southern Shaolin", "label": "Southern Shaolin", "linked_nodes": ["Luo Han Quan (Monk Fist)"]},

  // Five Elders
  {"id": "Five Elders", "label": "Five Elders", "linked_nodes": ["Miu Hin", "Fung Dou Dak", "Ng Mui", "Ji Sin", "Bak Mei"]},
  {"id": "Miu Hin", "label": "Miu Hin", "linked_nodes": ["Yim Wing Chun"]},
  {"id": "Ji Sin", "label": "Ji Sin", "linked_nodes": ["Five Elder Families"]},
  {"id": "Bak Mei", "label": "Bak Mei", "linked_nodes": ["Bak Mei Pai"]},
  
  {"id": "Hakka", "label": "Hakka", "linked_nodes": ["Bak Mei Pai", "Southern Praying Mantis", "Southern Dragon", "Phoenix Eye Fist (Chuka Shaolin)"]},
  
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
  {"id": "Yim Wing Chun", "label": "Yim Wing Chun", "linked_nodes": ["Leung Bok-chao", "Leung Jan", "Leung Yee-tai", "Wing Chun"]},
  {"id": "Leung Bok-chao", "label": "Leung Bok-chao", "linked_nodes": ["Leung Lan-kwai", "Wong Wah-bo"]},
  {"id": "Leung Jan", "label": "Leung Jan", "linked_nodes": ["Chan Wan-shun", "Ip Man"]},
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
  {"id": "Wai Xinxian", "label": "Wai Xinxian", "linked_nodes": ["Arakaki Seisho"]},
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

  {"id": "Waishinzan", "label": "Waishinzan", "linked_nodes": ["Kogusuku Taitei"]},

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

  {"id": "Chotoku Kyan", "label": "Chotoku Kyan", "linked_nodes": ["Joen Nakazato", "Kenwa Mabuni"]},
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
  {"id": "Shoshin Nagamine", "label": "Zenryo Shimabukuro", "linked_nodes": ["Matsubayashi Ryu (Shorin)"]},

  
  {"id": "Kenyu Yabu", "label": "Kenyu Yabu", "linked_nodes": ["Gichin Funakoshi"]},
  {"id": "Aanko Asato", "label": "Aanko Asato", "linked_nodes": ["Chomo Hanashiro"]},
  {"id": "Aanko Itosu", "label": "Aanko Itosu", "linked_nodes": ["Choshin Chibana"]},
  {"id": "Chofu Kyan", "label": "Chofu Kyan", "linked_nodes": ["Kanken Toyama"]},
 
  // Shotokan Karate
  {"id": "Gichin Funakoshi", "label": "Gichin Funakoshi", "linked_nodes": ["Shotokan Karate", "Gigo Funakoshi", "Lee Won-kuk", "Ro Byung Jik", "Yoon Byung-In", "Chun Sang Sup"]},
  {"id": "Chomo Hanashiro", "label": "Chomo Hanashiro", "linked_nodes": ["Kobayashi Ryu (Shorin)"]},
  {"id": "Choshin Chibana", "label": "Choshin Chibana", "linked_nodes": ["Shudokan"]},

  {"id": "Izumo Kanja Yoshiteru", "label": "Izumo Kanja Yoshiteru", "linked_nodes": ["Shinden Fudo Ryu"]},
  {"id": "Iizasa Choisai Lenao", "label": "Iizasa Choisai Lenao", "linked_nodes": ["Tenshin Shoden Katori Shinto Ryu"]},
  {"id": "Tenshin Shoden Katori Shinto Ryu", "label": "Tenshin Shoden Katori Shinto Ryu", "linked_nodes": ["Nakamura-ryu", "Meifu Shinkage-ryu", "Shinto Muso-ryu", "Yagyū Shinkage-ryu"]},

  
  // Jujutsu
  {"id": "Jujutsu", "label": "Jujutsu", "linked_nodes": ["Yoshin-ryu"]},
  {"id": "Yoshin-ryu", "label": "Yoshin-ryu", "linked_nodes": ["Yamamoto Tamiza Hideya"]},
  {"id": "Yamamoto Tamiza Hideya", "label": "Yamamoto o' Tamiza Hideya", "linked_nodes": ["Hitotsuyanagi Oribe", "Shin no Shinto-ryu"]},
  {"id": "Shin no Shinto-ryu", "label": "Shin no Shinto-ryu", "linked_nodes": ["Homma Jouemon"]},
  {"id": "Hitotsuyanagi Oribe", "label": "Hitotsuyanagi Oribe", "linked_nodes": ["Iso Mataemon Ryukansai Minamoto no Masatari"]},
  {"id": "Homma Jouemon", "label": "Homma Jouemon", "linked_nodes": ["Iso Mataemon Ryukansai Minamoto no Masatari"]},
   {"id": "Iso Mataemon Ryukansai Minamoto no Masatari", "label": "Iso Mataemon Ryukansai Minamoto no Masatari", "linked_nodes": ["Tenjin Shinyo Ryu"]},
  {"id": "Terada", "label": "Terada", "linked_nodes": ["Kito Ryu"]},
  {"id": "Fukuno Shichirouemon n Masakatsu", "label": "Fukuno Shichirouemon n Masakatsu", "linked_nodes": ["Ryoi Shinto Ryu", "Kito Ryu"]},
  {"id": "Takenouchi Nakatsukasa daiyu Hisamori", "label": "Takenouchi Nakatsukasa daiyu Hisamori", "linked_nodes": ["Takenouchi Ryu"]},

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
  {"id": "Carlos Gracie", "label": "Carlos Gracie", "linked_nodes": ["Carlos Gracie Jr.", "Helio Gracie", "Rickson Gracie", "Royce Gracie", "Relson Gracie", "Rolls Gracie", "Rorion Gracie", "Carlos Gracie Jr.", "Jean Jacques Machado"]},
  {"id": "Helio Gracie", "label": "Helio Gracie", "linked_nodes": ["Rickson Gracie", "Royce Gracie", "Relson Gracie", "Rolls Gracie", "Rorion Gracie", "Carlos Gracie Jr.", "Jean Jacques Machado"]},
  {"id": "Carlos Gracie Jr.", "label": "Carlos Gracie Jr.", "linked_nodes": ["Carlinhos Gracie", "Carlinhos Gracie"]},
  {"id": "Carlinhos Gracie", "label": "Carlinhos Gracie", "linked_nodes": ["Gracie Barra"]},

  // Kyokushin Karate
  {"id": "Gigo Funakoshi", "label": "Gigo Funakoshi", "linked_nodes": ["Masutatsu Oyama"]},
  {"id": "Gogen Yamaguchi", "label": "Gogen Yamaguchi", "linked_nodes": ["Masutatsu Oyama"]},
  {"id": "Masutatsu Oyama", "label": "Masutatsu Oyama", "linked_nodes": ["Kyokushin Karate"]},
  
  // Taichi
  {"id": "Wudang", "label": "Wudang", "linked_nodes": ["Chen Tuan", "Zhang Sanfeng", "Lai"]},
  {"id": "Daoyin", "label": "Daoyin", "linked_nodes": ["Chen Wangting"]},

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

  {"id": "Chen Zhongshen", "label": "Chen Zhongshen", "linked_nodes": ["Chen Xin"]},
  {"id": "Chen Xin", "label": "Chen Xin", "linked_nodes": ["Chen Kezhong"]},

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

  {"id": "Song Yunhua", "label": "Song Yunhua", "linked_nodes": []},

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


const positionsList = [

    {
        "id": "Hosokawa Clan",
        "position": {
            "x": 513,
            "y": 1229
        }
    },
    {
        "id": "Sumo",
        "position": {
            "x": 1301,
            "y": 965
        }
    },
    {
        "id": "Tokitsukaze Ichimon",
        "position": {
            "x": 1565,
            "y": 1097
        }
    },
    {
        "id": "Isenoumi Heya",
        "position": {
            "x": 721,
            "y": 1229
        }
    },
    {
        "id": "Kusazuri Heya",
        "position": {
            "x": 11867,
            "y": 41
        }
    },
    {
        "id": "Onogawa Heya",
        "position": {
            "x": 11999,
            "y": 41
        }
    },
    {
        "id": "Isa Tomomune",
        "position": {
            "x": 173,
            "y": 1097
        }
    },
    {
        "id": "Date Clan",
        "position": {
            "x": 381,
            "y": 1229
        }
    },
    {
        "id": "Tanikaze Kajinosuke",
        "position": {
            "x": 259,
            "y": 1361
        }
    },
    {
        "id": "Samurai",
        "position": {
            "x": 1169,
            "y": 1097
        }
    },
    {
        "id": "Shaolin",
        "position": {
            "x": 4071,
            "y": 569
        }
    },
    {
        "id": "Southern Shaolin",
        "position": {
            "x": 1849,
            "y": 701
        }
    },
    {
        "id": "Five Elders",
        "position": {
            "x": 3351,
            "y": 701
        }
    },
    {
        "id": "Miu Hin",
        "position": {
            "x": 2349,
            "y": 833
        }
    },
    {
        "id": "Ji Sin",
        "position": {
            "x": 3605,
            "y": 833
        }
    },
    {
        "id": "Bak Mei",
        "position": {
            "x": 3737,
            "y": 833
        }
    },
    {
        "id": "Hakka",
        "position": {
            "x": 2793,
            "y": 833
        }
    },
    {
        "id": "Five Elder Families",
        "position": {
            "x": 4153,
            "y": 965
        }
    },
    {
        "id": "Lau Saam Ngan",
        "position": {
            "x": 3709,
            "y": 1097
        }
    },
    {
        "id": "Mok Ching Giu",
        "position": {
            "x": 3841,
            "y": 1097
        }
    },
    {
        "id": "Hung Hei-gun",
        "position": {
            "x": 4105,
            "y": 1097
        }
    },
    {
        "id": "Choy Gau Yi",
        "position": {
            "x": 4417,
            "y": 1097
        }
    },
    {
        "id": "Lei Yau Saan",
        "position": {
            "x": 4549,
            "y": 1229
        }
    },
    {
        "id": "Hung Ga",
        "position": {
            "x": 4105,
            "y": 1229
        }
    },
    {
        "id": "Choy Ga",
        "position": {
            "x": 4417,
            "y": 1229
        }
    },
    {
        "id": "Lei Ga",
        "position": {
            "x": 4549,
            "y": 1361
        }
    },
    {
        "id": "Fut Ga Buddha Family",
        "position": {
            "x": 4181,
            "y": 1361
        }
    },
    {
        "id": "Chan Heung",
        "position": {
            "x": 2957,
            "y": 1493
        }
    },
    {
        "id": "Yim Wing Chun",
        "position": {
            "x": 2349,
            "y": 965
        }
    },
    {
        "id": "Leung Bok-chao",
        "position": {
            "x": 2037,
            "y": 1097
        }
    },
    {
        "id": "Leung Jan",
        "position": {
            "x": 2519,
            "y": 1097
        }
    },
    {
        "id": "Ip Man",
        "position": {
            "x": 2651,
            "y": 1229
        }
    },
    {
        "id": "Bruce Lee",
        "position": {
            "x": 1939,
            "y": 1361
        }
    },
    {
        "id": "Joseph Cowles",
        "position": {
            "x": 2513,
            "y": 1493
        }
    },
    {
        "id": "Wing Chun",
        "position": {
            "x": 2887,
            "y": 1361
        }
    },
    {
        "id": "Lama Pai (Lions Roar)",
        "position": {
            "x": 2235,
            "y": 1097
        }
    },
    {
        "id": "Adatuo",
        "position": {
            "x": 1621,
            "y": 1229
        }
    },
    {
        "id": "Wong Yan-lam",
        "position": {
            "x": 2071,
            "y": 1361
        }
    },
    {
        "id": "Wong Lam-hoi",
        "position": {
            "x": 1401,
            "y": 1361
        }
    },
    {
        "id": "Luo Han Quan (Monk Fist)",
        "position": {
            "x": 1849,
            "y": 833
        }
    },
    {
        "id": "Fang Zhengdong",
        "position": {
            "x": 1905,
            "y": 965
        }
    },
    {
        "id": "Fang Qiniang",
        "position": {
            "x": 1905,
            "y": 1097
        }
    },
    {
        "id": "Fujian White Crane",
        "position": {
            "x": 995,
            "y": 1229
        }
    },
    {
        "id": "Ryu Ryu Ko",
        "position": {
            "x": 787,
            "y": 1361
        }
    },
    {
        "id": "Higaonna Kanryo",
        "position": {
            "x": 1853,
            "y": 1493
        }
    },
    {
        "id": "Miyagi Chojun",
        "position": {
            "x": 1589,
            "y": 1625
        }
    },
    {
        "id": "Goju Ryu",
        "position": {
            "x": 1589,
            "y": 1757
        }
    },
    {
        "id": "Wai Xinxian",
        "position": {
            "x": 3057,
            "y": 833
        }
    },
    {
        "id": "Arakaki Seisho",
        "position": {
            "x": 3321,
            "y": 965
        }
    },
    {
        "id": "Uechi Kanbun",
        "position": {
            "x": 2963,
            "y": 1097
        }
    },
    {
        "id": "Kyoda Juhatsu",
        "position": {
            "x": 1721,
            "y": 1625
        }
    },
    {
        "id": "Nakaima Keko",
        "position": {
            "x": 2117,
            "y": 1625
        }
    },
    {
        "id": "Tode",
        "position": {
            "x": 5995,
            "y": 701
        }
    },
    {
        "id": "Naha Te",
        "position": {
            "x": 4823,
            "y": 833
        }
    },
    {
        "id": "Kogusuku (Kojo) Uekata",
        "position": {
            "x": 4813,
            "y": 965
        }
    },
    {
        "id": "Kogusuku Pechin",
        "position": {
            "x": 4813,
            "y": 1097
        }
    },
    {
        "id": "San Shoi",
        "position": {
            "x": 4813,
            "y": 1229
        }
    },
    {
        "id": "Iwah",
        "position": {
            "x": 2519,
            "y": 1229
        }
    },
    {
        "id": "Waishinzan",
        "position": {
            "x": 12131,
            "y": 41
        }
    },
    {
        "id": "Kogusuku Isei",
        "position": {
            "x": 4331,
            "y": 1361
        }
    },
    {
        "id": "Kogusuku Kaho",
        "position": {
            "x": 2777,
            "y": 1493
        }
    },
    {
        "id": "Maeri Ranho",
        "position": {
            "x": 2249,
            "y": 1493
        }
    },
    {
        "id": "Kogusuku Saikyo",
        "position": {
            "x": 2711,
            "y": 1625
        }
    },
    {
        "id": "Kogusuku Shuren",
        "position": {
            "x": 2249,
            "y": 1625
        }
    },
    {
        "id": "Kogusuku Kafu",
        "position": {
            "x": 2513,
            "y": 1757
        }
    },
    {
        "id": "Tomari Te",
        "position": {
            "x": 5087,
            "y": 965
        }
    },
    {
        "id": "Kishin Teruya",
        "position": {
            "x": 5011,
            "y": 1097
        }
    },
    {
        "id": "Karyu Sokyu",
        "position": {
            "x": 5219,
            "y": 1097
        }
    },
    {
        "id": "Kousaku Matsumora",
        "position": {
            "x": 5077,
            "y": 1229
        }
    },
    {
        "id": "Koho Kuba",
        "position": {
            "x": 5171,
            "y": 1361
        }
    },
    {
        "id": "Kotasu Iha",
        "position": {
            "x": 3759,
            "y": 1493
        }
    },
    {
        "id": "Chotoku Kyan",
        "position": {
            "x": 6213,
            "y": 1493
        }
    },
    {
        "id": "Shoshin Nagamine",
        "position": {
            "x": 4957,
            "y": 1625
        }
    },
    {
        "id": "Shuri Te",
        "position": {
            "x": 7471,
            "y": 833
        }
    },
    {
        "id": "Kanga Sakugawa",
        "position": {
            "x": 7471,
            "y": 965
        }
    },
    {
        "id": "Sokon Matsumura",
        "position": {
            "x": 7471,
            "y": 1097
        }
    },
    {
        "id": "Choyu Motobu",
        "position": {
            "x": 5507,
            "y": 1229
        }
    },
    {
        "id": "Choki Motobu",
        "position": {
            "x": 5903,
            "y": 1361
        }
    },
    {
        "id": "Motobo Ryu",
        "position": {
            "x": 6387,
            "y": 1493
        }
    },
    {
        "id": "Motobo Udundi",
        "position": {
            "x": 4429,
            "y": 1493
        }
    },
    {
        "id": "Hironori Otsuka",
        "position": {
            "x": 5685,
            "y": 1493
        }
    },
    {
        "id": "Tatsuo Yamada",
        "position": {
            "x": 5817,
            "y": 1493
        }
    },
    {
        "id": "Yasuhiro Konishi",
        "position": {
            "x": 5949,
            "y": 1493
        }
    },
    {
        "id": "Kenwa Mabuni",
        "position": {
            "x": 6717,
            "y": 1625
        }
    },
    {
        "id": "Joen Nakazato",
        "position": {
            "x": 6849,
            "y": 1625
        }
    },
    {
        "id": "Zenryo Shimabukuro",
        "position": {
            "x": 7047,
            "y": 1625
        }
    },
    {
        "id": "Kenyu Yabu",
        "position": {
            "x": 7123,
            "y": 1229
        }
    },
    {
        "id": "Aanko Asato",
        "position": {
            "x": 7463,
            "y": 1229
        }
    },
    {
        "id": "Aanko Itosu",
        "position": {
            "x": 7595,
            "y": 1229
        }
    },
    {
        "id": "Chofu Kyan",
        "position": {
            "x": 7859,
            "y": 1229
        }
    },
    {
        "id": "Gichin Funakoshi",
        "position": {
            "x": 7123,
            "y": 1361
        }
    },
    {
        "id": "Chomo Hanashiro",
        "position": {
            "x": 7463,
            "y": 1361
        }
    },
    {
        "id": "Choshin Chibana",
        "position": {
            "x": 7595,
            "y": 1361
        }
    },
    {
        "id": "Izumo Kanja Yoshiteru",
        "position": {
            "x": 12263,
            "y": 41
        }
    },
    {
        "id": "Iizasa Choisai Lenao",
        "position": {
            "x": 11735,
            "y": 41
        }
    },
    {
        "id": "Tenshin Shoden Katori Shinto Ryu",
        "position": {
            "x": 11735,
            "y": 173
        }
    },
    {
        "id": "Jujutsu",
        "position": {
            "x": 8353.541501507607,
            "y": -275.7616450947179
        }
    },
    {
        "id": "Yoshin-ryu",
        "position": {
            "x": 8421,
            "y": 173
        }
    },
    {
        "id": "Yamamoto Tamiza Hideya",
        "position": {
            "x": 8421,
            "y": 305
        }
    },
    {
        "id": "Shin no Shinto-ryu",
        "position": {
            "x": 8883,
            "y": 437
        }
    },
    {
        "id": "Hitotsuyanagi Oribe",
        "position": {
            "x": 7947,
            "y": 569
        }
    },
    {
        "id": "Homma Jouemon",
        "position": {
            "x": 8883,
            "y": 569
        }
    },
    {
        "id": "Iso Mataemon Ryukansai Minamoto no Masatari",
        "position": {
            "x": 8421,
            "y": 701
        }
    },
    {
        "id": "Terada",
        "position": {
            "x": 9025,
            "y": 701
        }
    },
    {
        "id": "Fukuno Shichirouemon n Masakatsu",
        "position": {
            "x": 9253,
            "y": 701
        }
    },
    {
        "id": "Takenouchi Nakatsukasa daiyu Hisamori",
        "position": {
            "x": 12395,
            "y": 41
        }
    },
    {
        "id": "Tenjin Shinyo Ryu",
        "position": {
            "x": 8421,
            "y": 833
        }
    },
    {
        "id": "Kito Ryu",
        "position": {
            "x": 9187,
            "y": 833
        }
    },
    {
        "id": "Iikubo Tsunetoshi",
        "position": {
            "x": 9187,
            "y": 965
        }
    },
    {
        "id": "Mataemon Masatomo",
        "position": {
            "x": 8011,
            "y": 965
        }
    },
    {
        "id": "Fukuda Hachinosuke",
        "position": {
            "x": 8421,
            "y": 965
        }
    },
    {
        "id": "Kano Jigoro",
        "position": {
            "x": 8421,
            "y": 1097
        }
    },
    {
        "id": "Kodokan Judo",
        "position": {
            "x": 8421,
            "y": 1229
        }
    },
    {
        "id": "Tomita Tsunejiro",
        "position": {
            "x": 9007,
            "y": 1493
        }
    },
    {
        "id": "Kosen Judo",
        "position": {
            "x": 8153,
            "y": 1361
        }
    },
    {
        "id": "Four Guardians of the Kodokan",
        "position": {
            "x": 8345,
            "y": 1361
        }
    },
    {
        "id": "Mataichiro Iso",
        "position": {
            "x": 4237,
            "y": 1229
        }
    },
    {
        "id": "Kentaro Inoue",
        "position": {
            "x": 9111,
            "y": 1229
        }
    },
    {
        "id": "Takisaburo Tobari",
        "position": {
            "x": 7727,
            "y": 1361
        }
    },
    {
        "id": "Otani Nobutomo",
        "position": {
            "x": 3973,
            "y": 1097
        }
    },
    {
        "id": "Saigo Tanomo",
        "position": {
            "x": 249,
            "y": 1229
        }
    },
    {
        "id": "Toma Shibuya",
        "position": {
            "x": 4681,
            "y": 1229
        }
    },
    {
        "id": "Sakakibara Kenkichi",
        "position": {
            "x": 1763,
            "y": 1229
        }
    },
    {
        "id": "Takeda Sokaku",
        "position": {
            "x": 1555,
            "y": 1361
        }
    },
    {
        "id": "Morihei Ueshiba",
        "position": {
            "x": 4561,
            "y": 1493
        }
    },
    {
        "id": "Mitsuyo Maeda",
        "position": {
            "x": 9007,
            "y": 1625
        }
    },
    {
        "id": "Carlos Gracie",
        "position": {
            "x": 8941,
            "y": 1757
        }
    },
    {
        "id": "Helio Gracie",
        "position": {
            "x": 8863,
            "y": 1889
        }
    },
    {
        "id": "Carlos Gracie Jr.",
        "position": {
            "x": 8917,
            "y": 2021
        }
    },
    {
        "id": "Carlinhos Gracie",
        "position": {
            "x": 8917,
            "y": 2153
        }
    },
    {
        "id": "Gigo Funakoshi",
        "position": {
            "x": 7123,
            "y": 1889
        }
    },
    {
        "id": "Gogen Yamaguchi",
        "position": {
            "x": 1589,
            "y": 1889
        }
    },
    {
        "id": "Masutatsu Oyama",
        "position": {
            "x": 4507,
            "y": 2021
        }
    },
    {
        "id": "Wudang",
        "position": {
            "x": 11141,
            "y": 41
        }
    },
    {
        "id": "Daoyin",
        "position": {
            "x": 8959,
            "y": 305
        }
    },
    {
        "id": "Qi Jiguang",
        "position": {
            "x": 10121,
            "y": 173
        }
    },
    {
        "id": "Jixiao Xinshu",
        "position": {
            "x": 9223,
            "y": 305
        }
    },
    {
        "id": "Lianbing Shiji",
        "position": {
            "x": 10877,
            "y": 305
        }
    },
    {
        "id": "Chen Tuan",
        "position": {
            "x": 9091,
            "y": 173
        }
    },
    {
        "id": "Zhang Sanfeng",
        "position": {
            "x": 11141,
            "y": 173
        }
    },
    {
        "id": "Wang Zongyue",
        "position": {
            "x": 11075,
            "y": 305
        }
    },
    {
        "id": "Chen Wangting",
        "position": {
            "x": 10121,
            "y": 437
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
            "x": 11207,
            "y": 701
        }
    },
    {
        "id": "Chen Jingbo",
        "position": {
            "x": 11197,
            "y": 833
        }
    },
    {
        "id": "Zhang Zongyu",
        "position": {
            "x": 11197,
            "y": 965
        }
    },
    {
        "id": "Zhang Yan",
        "position": {
            "x": 11197,
            "y": 1097
        }
    },
    {
        "id": "Chen Qingping",
        "position": {
            "x": 11187,
            "y": 1229
        }
    },
    {
        "id": "Chen Zhongshen",
        "position": {
            "x": 10989,
            "y": 1229
        }
    },
    {
        "id": "Chen Xin",
        "position": {
            "x": 10989,
            "y": 1361
        }
    },
    {
        "id": "Wu Yuxiang",
        "position": {
            "x": 11197,
            "y": 1361
        }
    },
    {
        "id": "Li Yiyu",
        "position": {
            "x": 11197,
            "y": 1493
        }
    },
    {
        "id": "Hao Weizhen",
        "position": {
            "x": 11197,
            "y": 1625
        }
    },
    {
        "id": "Sun Lutang",
        "position": {
            "x": 11131,
            "y": 1757
        }
    },
    {
        "id": "Sun Jianyun",
        "position": {
            "x": 11131,
            "y": 1889
        }
    },
    {
        "id": "Sun Yongtian",
        "position": {
            "x": 11131,
            "y": 2021
        }
    },
    {
        "id": "Hao Yueru",
        "position": {
            "x": 11263,
            "y": 1757
        }
    },
    {
        "id": "Hao Shaoru",
        "position": {
            "x": 11263,
            "y": 1889
        }
    },
    {
        "id": "Liu Jishun",
        "position": {
            "x": 11263,
            "y": 2021
        }
    },
    {
        "id": "Song Yunhua",
        "position": {
            "x": 12527,
            "y": 41
        }
    },
    {
        "id": "Chen Kezhong",
        "position": {
            "x": 10989,
            "y": 1493
        }
    },
    {
        "id": "Chen Boxiang",
        "position": {
            "x": 10989,
            "y": 1625
        }
    },
    {
        "id": "Lu Zhizhong",
        "position": {
            "x": 10989,
            "y": 1757
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
            "x": 9451,
            "y": 701
        }
    },
    {
        "id": "Chen Shantong",
        "position": {
            "x": 9451,
            "y": 833
        }
    },
    {
        "id": "Chen Dapeng",
        "position": {
            "x": 9583,
            "y": 701
        }
    },
    {
        "id": "Chen Shanzhi",
        "position": {
            "x": 9583,
            "y": 833
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
            "x": 9735,
            "y": 701
        }
    },
    {
        "id": "Chen Jixia",
        "position": {
            "x": 9735,
            "y": 833
        }
    },
    {
        "id": "Chen Zhengru",
        "position": {
            "x": 10689,
            "y": 701
        }
    },
    {
        "id": "Chen Jie",
        "position": {
            "x": 10669,
            "y": 833
        }
    },
    {
        "id": "Chen Gongzhao",
        "position": {
            "x": 10669,
            "y": 965
        }
    },
    {
        "id": "Chen Bingwang",
        "position": {
            "x": 9791,
            "y": 965
        }
    },
    {
        "id": "Chen Changxing",
        "position": {
            "x": 9791,
            "y": 1097
        }
    },
    {
        "id": "Chen Gengyun",
        "position": {
            "x": 9923,
            "y": 1229
        }
    },
    {
        "id": "Chen Yanxi",
        "position": {
            "x": 9923,
            "y": 1361
        }
    },
    {
        "id": "Chen Fake",
        "position": {
            "x": 9923,
            "y": 1493
        }
    },
    {
        "id": "Chen Zhaopi",
        "position": {
            "x": 9565,
            "y": 1625
        }
    },
    {
        "id": "Chen Zhaokui",
        "position": {
            "x": 9999,
            "y": 1625
        }
    },
    {
        "id": "Chen Xiaowang",
        "position": {
            "x": 9923,
            "y": 1757
        }
    },
    {
        "id": "Chen Youben",
        "position": {
            "x": 10669,
            "y": 1097
        }
    },
    {
        "id": "Yang Luchan",
        "position": {
            "x": 10527,
            "y": 1229
        }
    },
    {
        "id": "Wang Lanting",
        "position": {
            "x": 10857,
            "y": 1361
        }
    },
    {
        "id": "Yang Jianhou",
        "position": {
            "x": 10593,
            "y": 1361
        }
    },
    {
        "id": "Yang Chengfu",
        "position": {
            "x": 10593,
            "y": 1493
        }
    },
    {
        "id": "Zhang Qinlin",
        "position": {
            "x": 10857,
            "y": 1625
        }
    },
    {
        "id": "Yang Zhenduo",
        "position": {
            "x": 10725,
            "y": 1625
        }
    },
    {
        "id": "Yang Jun",
        "position": {
            "x": 10725,
            "y": 1757
        }
    },
    {
        "id": "Yang Style",
        "position": {
            "x": 10725,
            "y": 1889
        }
    },
    {
        "id": "Yang Banhou",
        "position": {
            "x": 10131,
            "y": 1361
        }
    },
    {
        "id": "Wang Jiaoyu",
        "position": {
            "x": 10197,
            "y": 1493
        }
    },
    {
        "id": "Wu Quanyou",
        "position": {
            "x": 10329,
            "y": 1493
        }
    },
    {
        "id": "Wu Jianquan",
        "position": {
            "x": 10329,
            "y": 1625
        }
    },
    {
        "id": "Wu Gongyi",
        "position": {
            "x": 10329,
            "y": 1757
        }
    },
    {
        "id": "Wu Yanxia",
        "position": {
            "x": 10461,
            "y": 1889
        }
    },
    {
        "id": "Wu Kuang-yu",
        "position": {
            "x": 10461,
            "y": 2021
        }
    },
    {
        "id": "Yun Mu Kwan",
        "position": {
            "x": 8609,
            "y": 1361
        }
    },
    {
        "id": "Chun Sang Sup",
        "position": {
            "x": 8545,
            "y": 1493
        }
    },
    {
        "id": "Ji Do Kwan",
        "position": {
            "x": 8545,
            "y": 1625
        }
    },
    {
        "id": "Lee Kyo Yoon",
        "position": {
            "x": 8545,
            "y": 1757
        }
    },
    {
        "id": "Yoon Byung-In",
        "position": {
            "x": 7331,
            "y": 1493
        }
    },
    {
        "id": "Chang Moo Kwan",
        "position": {
            "x": 7331,
            "y": 1625
        }
    },
    {
        "id": "Park Chul Hee",
        "position": {
            "x": 7265,
            "y": 1757
        }
    },
    {
        "id": "Hong Jong Pyo",
        "position": {
            "x": 7875,
            "y": 1757
        }
    },
    {
        "id": "Ro Byung Jik",
        "position": {
            "x": 7199,
            "y": 1493
        }
    },
    {
        "id": "Subak",
        "position": {
            "x": 5639,
            "y": 1229
        }
    },
    {
        "id": "Taekkyon",
        "position": {
            "x": 5351,
            "y": 1361
        }
    },
    {
        "id": "Hwang Kee",
        "position": {
            "x": 3495,
            "y": 1493
        }
    },
    {
        "id": "Lee Won-kuk",
        "position": {
            "x": 6081,
            "y": 1493
        }
    },
    {
        "id": "Chung Do Kwan",
        "position": {
            "x": 4551,
            "y": 1625
        }
    },
    {
        "id": "Lee Yong Woo",
        "position": {
            "x": 3447,
            "y": 1757
        }
    },
    {
        "id": "Choi Hong Hi",
        "position": {
            "x": 4617,
            "y": 1757
        }
    },
    {
        "id": "Lai",
        "position": {
            "x": 11405,
            "y": 173
        }
    },
    {
        "id": "Wu Zhong",
        "position": {
            "x": 11471,
            "y": 305
        }
    },
    {
        "id": "Yoshida Family",
        "position": {
            "x": 391,
            "y": 1361
        }
    },
    {
        "id": "Dewanoumi Ichimon",
        "position": {
            "x": 41,
            "y": 1097
        }
    },
    {
        "id": "Nishonoseki Ichimon",
        "position": {
            "x": 1301,
            "y": 1097
        }
    },
    {
        "id": "Takasago Ichimon",
        "position": {
            "x": 1433,
            "y": 1097
        }
    },
    {
        "id": "Isegahama Ichimon",
        "position": {
            "x": 1707,
            "y": 1097
        }
    },
    {
        "id": "Nishikigi Tetsuya",
        "position": {
            "x": 523,
            "y": 1361
        }
    },
    {
        "id": "Wakaikari",
        "position": {
            "x": 655,
            "y": 1361
        }
    },
    {
        "id": "Onogawa Kisaburo",
        "position": {
            "x": 11999,
            "y": 173
        }
    },
    {
        "id": "Raiden Tameemon",
        "position": {
            "x": 259,
            "y": 1493
        }
    },
    {
        "id": "Fung Dou Dak",
        "position": {
            "x": 2529,
            "y": 833
        }
    },
    {
        "id": "Ng Mui",
        "position": {
            "x": 2925,
            "y": 833
        }
    },
    {
        "id": "Bak Mei Pai",
        "position": {
            "x": 2991,
            "y": 965
        }
    },
    {
        "id": "Southern Praying Mantis",
        "position": {
            "x": 2641,
            "y": 965
        }
    },
    {
        "id": "Southern Dragon",
        "position": {
            "x": 2773,
            "y": 965
        }
    },
    {
        "id": "Phoenix Eye Fist (Chuka Shaolin)",
        "position": {
            "x": 3123,
            "y": 965
        }
    },
    {
        "id": "Lau Ga",
        "position": {
            "x": 3709,
            "y": 1229
        }
    },
    {
        "id": "Mok Ga",
        "position": {
            "x": 3841,
            "y": 1229
        }
    },
    {
        "id": "Choy Lei Fut",
        "position": {
            "x": 2957,
            "y": 1625
        }
    },
    {
        "id": "Leung Yee-tai",
        "position": {
            "x": 2811,
            "y": 1097
        }
    },
    {
        "id": "Leung Lan-kwai",
        "position": {
            "x": 1127,
            "y": 1229
        }
    },
    {
        "id": "Wong Wah-bo",
        "position": {
            "x": 1259,
            "y": 1229
        }
    },
    {
        "id": "Chan Wan-shun",
        "position": {
            "x": 2387,
            "y": 1229
        }
    },
    {
        "id": "Jeet Kune Do",
        "position": {
            "x": 2381,
            "y": 1493
        }
    },
    {
        "id": "Wu Wei",
        "position": {
            "x": 2513,
            "y": 1625
        }
    },
    {
        "id": "Hop Ga",
        "position": {
            "x": 2645,
            "y": 1493
        }
    },
    {
        "id": "Pak Hok Pai (Tibetan White Crane)",
        "position": {
            "x": 853,
            "y": 1493
        }
    },
    {
        "id": "Incense Shop Boxing",
        "position": {
            "x": 1773,
            "y": 965
        }
    },
    {
        "id": "Nakaima Kenri",
        "position": {
            "x": 1853,
            "y": 1625
        }
    },
    {
        "id": "Nakaima Kenchu",
        "position": {
            "x": 1985,
            "y": 1625
        }
    },
    {
        "id": "Pangal-noon (Uechi Ryu)",
        "position": {
            "x": 2963,
            "y": 1229
        }
    },
    {
        "id": "Toon Ryu",
        "position": {
            "x": 1721,
            "y": 1757
        }
    },
    {
        "id": "Ryuei Ryu",
        "position": {
            "x": 2117,
            "y": 1757
        }
    },
    {
        "id": "Kogusuku Taitei",
        "position": {
            "x": 12131,
            "y": 173
        }
    },
    {
        "id": "Kojo Ryu",
        "position": {
            "x": 2513,
            "y": 1889
        }
    },
    {
        "id": "Giel Yamada",
        "position": {
            "x": 4945,
            "y": 1229
        }
    },
    {
        "id": "Kokan Oyadomari",
        "position": {
            "x": 5209,
            "y": 1229
        }
    },
    {
        "id": "Kosei Nakamoto",
        "position": {
            "x": 4297,
            "y": 1493
        }
    },
    {
        "id": "Chojin Kuba",
        "position": {
            "x": 3627,
            "y": 1625
        }
    },
    {
        "id": "Seiyu Nakasone",
        "position": {
            "x": 3759,
            "y": 1625
        }
    },
    {
        "id": "Matsubayashi Ryu (Shorin)",
        "position": {
            "x": 4901,
            "y": 1757
        }
    },
    {
        "id": "Shorinji Ryu",
        "position": {
            "x": 5089,
            "y": 1757
        }
    },
    {
        "id": "Ryosei Kuwae",
        "position": {
            "x": 7991,
            "y": 1229
        }
    },
    {
        "id": "Chosei Motobu",
        "position": {
            "x": 4825,
            "y": 1625
        }
    },
    {
        "id": "Wado Ryu",
        "position": {
            "x": 4155,
            "y": 1625
        }
    },
    {
        "id": "Nihon Kenpo Karatedo",
        "position": {
            "x": 4287,
            "y": 1625
        }
    },
    {
        "id": "Shinto Jinen Ryu",
        "position": {
            "x": 4419,
            "y": 1625
        }
    },
    {
        "id": "Shito Ryu",
        "position": {
            "x": 6849,
            "y": 1757
        }
    },
    {
        "id": "Seibukan",
        "position": {
            "x": 7047,
            "y": 1757
        }
    },
    {
        "id": "Kanken Toyama",
        "position": {
            "x": 7859,
            "y": 1361
        }
    },
    {
        "id": "Shotokan Karate",
        "position": {
            "x": 6783,
            "y": 1493
        }
    },
    {
        "id": "Kobayashi Ryu (Shorin)",
        "position": {
            "x": 7463,
            "y": 1493
        }
    },
    {
        "id": "Shudokan",
        "position": {
            "x": 7595,
            "y": 1493
        }
    },
    {
        "id": "Shinden Fudo Ryu",
        "position": {
            "x": 12263,
            "y": 173
        }
    },
    {
        "id": "Nakamura-ryu",
        "position": {
            "x": 11603,
            "y": 305
        }
    },
    {
        "id": "Meifu Shinkage-ryu",
        "position": {
            "x": 11735,
            "y": 305
        }
    },
    {
        "id": "Shinto Muso-ryu",
        "position": {
            "x": 11867,
            "y": 305
        }
    },
    {
        "id": "Yagyū Shinkage-ryu",
        "position": {
            "x": 11999,
            "y": 305
        }
    },
    {
        "id": "Ryoi Shinto Ryu",
        "position": {
            "x": 9319,
            "y": 833
        }
    },
    {
        "id": "Takenouchi Ryu",
        "position": {
            "x": 12395,
            "y": 173
        }
    },
    {
        "id": "Kyuzo Mifune",
        "position": {
            "x": 8477,
            "y": 1361
        }
    },
    {
        "id": "Masahiko Kimura",
        "position": {
            "x": 8681,
            "y": 1493
        }
    },
    {
        "id": "Yokoyama Sakujiro",
        "position": {
            "x": 9413,
            "y": 1493
        }
    },
    {
        "id": "Saigo Shiro",
        "position": {
            "x": 8813,
            "y": 1493
        }
    },
    {
        "id": "Yamashita Yoshitsugu",
        "position": {
            "x": 9545,
            "y": 1493
        }
    },
    {
        "id": "Daito Ryu",
        "position": {
            "x": 985,
            "y": 1493
        }
    },
    {
        "id": "Aikido",
        "position": {
            "x": 4023,
            "y": 1625
        }
    },
    {
        "id": "Luiz Franca",
        "position": {
            "x": 9287,
            "y": 1757
        }
    },
    {
        "id": "Oswaldo Fadda",
        "position": {
            "x": 9479,
            "y": 1757
        }
    },
    {
        "id": "Rickson Gracie",
        "position": {
            "x": 8653,
            "y": 2021
        }
    },
    {
        "id": "Royce Gracie",
        "position": {
            "x": 8785,
            "y": 2021
        }
    },
    {
        "id": "Relson Gracie",
        "position": {
            "x": 9049,
            "y": 2021
        }
    },
    {
        "id": "Rolls Gracie",
        "position": {
            "x": 9181,
            "y": 2021
        }
    },
    {
        "id": "Rorion Gracie",
        "position": {
            "x": 9313,
            "y": 2021
        }
    },
    {
        "id": "Jean Jacques Machado",
        "position": {
            "x": 9445,
            "y": 2021
        }
    },
    {
        "id": "Gracie Barra",
        "position": {
            "x": 8917,
            "y": 2285
        }
    },
    {
        "id": "Kyokushin Karate",
        "position": {
            "x": 4507,
            "y": 2153
        }
    },
    {
        "id": "Liuhebafa Quan",
        "position": {
            "x": 9091,
            "y": 305
        }
    },
    {
        "id": "Neijia",
        "position": {
            "x": 11207,
            "y": 305
        }
    },
    {
        "id": "Chen Tai Chi",
        "position": {
            "x": 9091,
            "y": 569
        }
    },
    {
        "id": "He Zhaoyuan",
        "position": {
            "x": 11329,
            "y": 1361
        }
    },
    {
        "id": "Sun Style",
        "position": {
            "x": 11131,
            "y": 2153
        }
    },
    {
        "id": "Wu (Hao) Style",
        "position": {
            "x": 11263,
            "y": 2153
        }
    },
    {
        "id": "Chen Small Frame",
        "position": {
            "x": 10989,
            "y": 1889
        }
    },
    {
        "id": "Chen Bingqi",
        "position": {
            "x": 9527,
            "y": 965
        }
    },
    {
        "id": "Chen Bingren",
        "position": {
            "x": 9659,
            "y": 965
        }
    },
    {
        "id": "Chen Shenru",
        "position": {
            "x": 9867,
            "y": 701
        }
    },
    {
        "id": "Chen Xunru",
        "position": {
            "x": 9999,
            "y": 701
        }
    },
    {
        "id": "Chen Xiaoxing",
        "position": {
            "x": 10055,
            "y": 1757
        }
    },
    {
        "id": "Chen Style",
        "position": {
            "x": 9923,
            "y": 1889
        }
    },
    {
        "id": "Li Ruidong",
        "position": {
            "x": 10857,
            "y": 1493
        }
    },
    {
        "id": "Cheng Man-ching",
        "position": {
            "x": 10461,
            "y": 1625
        }
    },
    {
        "id": "Fu Zhongwen",
        "position": {
            "x": 10593,
            "y": 1625
        }
    },
    {
        "id": "Wang Yannian",
        "position": {
            "x": 10857,
            "y": 1757
        }
    },
    {
        "id": "Yang Kuk Jin",
        "position": {
            "x": 10725,
            "y": 2021
        }
    },
    {
        "id": "Yang Shaohou",
        "position": {
            "x": 10065,
            "y": 1493
        }
    },
    {
        "id": "Kuo Lien Ying",
        "position": {
            "x": 10197,
            "y": 1625
        }
    },
    {
        "id": "Cheng Tin Hung",
        "position": {
            "x": 10197,
            "y": 1889
        }
    },
    {
        "id": "Wu Style",
        "position": {
            "x": 10461,
            "y": 2153
        }
    },
    {
        "id": "Han Moo Kwan",
        "position": {
            "x": 8545,
            "y": 1889
        }
    },
    {
        "id": "Kang Duk Won",
        "position": {
            "x": 7331,
            "y": 1889
        }
    },
    {
        "id": "Song Moo Kwan",
        "position": {
            "x": 7199,
            "y": 1625
        }
    },
    {
        "id": "Moo Duk Kwan",
        "position": {
            "x": 3495,
            "y": 1625
        }
    },
    {
        "id": "Jung Do Kwan",
        "position": {
            "x": 3447,
            "y": 1889
        }
    },
    {
        "id": "Oh Do Kwan",
        "position": {
            "x": 4617,
            "y": 1889
        }
    },
    {
        "id": "Pi",
        "position": {
            "x": 11339,
            "y": 305
        }
    },
    {
        "id": "Baji Quan",
        "position": {
            "x": 11339,
            "y": 437
        }
    },
    {
        "id": "Wu Ying",
        "position": {
            "x": 11537,
            "y": 437
        }
    }
];

export { nodes_list, positionsList };  
