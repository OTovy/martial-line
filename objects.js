
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


export { nodes_list };  
