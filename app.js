/* ===== DATA ===== */
const ROWS=[["あいうえお","a i u e o"],["かきくけこ","ka ki ku ke ko"],["さしすせそ","sa shi su se so"],["たちつてと","ta chi tsu te to"],["なにぬねの","na ni nu ne no"],["はひふへほ","ha hi fu he ho"],["まみむめも","ma mi mu me mo"],["や_ゆ_よ","ya _ yu _ yo"],["らりるれろ","ra ri ru re ro"],["わ___を","wa _ _ _ wo"],["ん","n"]];
const DAK=[["がぎぐげご","ga gi gu ge go"],["ざじずぜぞ","za ji zu ze zo"],["だぢづでど","da ji zu de do"],["ばびぶべぼ","ba bi bu be bo"],["ぱぴぷぺぽ","pa pi pu pe po"]];
const kata=s=>[...s].map(c=>c>="ぁ"&&c<="ゖ"?String.fromCharCode(c.charCodeAt(0)+96):c).join("");
const build=(rows,k)=>rows.map(([s,r])=>{const R=r.split(" ");return[...s].map((c,i)=>({jp:k?kata(c):c,ro:R[i]}))});
const SETS={hiragana:{name:"ฮิรางะนะ",icon:"あ",groups:[["พื้นฐาน",build(ROWS)],["เสียงขุ่น / กึ่งขุ่น",build(DAK)]]},
katakana:{name:"คาตาคานะ",icon:"ア",groups:[["พื้นฐาน",build(ROWS,1)],["เสียงขุ่น / กึ่งขุ่น",build(DAK,1)]]}};
const VCATS=[["สัตว์","🐱","ねこ(猫)|neko|แมว/cat;いぬ(犬)|inu|หมา/dog/สุนัข;さかな(魚)|sakana|ปลา/fish;とり(鳥)|tori|นก/bird;うま(馬)|uma|ม้า/horse;うさぎ(兎)|usagi|กระต่าย/rabbit;ぞう(像)|zou|ช้าง/elephant;さる(猿)|saru|ลิง/monkey"],
["อาหารและเครื่องดื่ม","🍜","ごはん(ご飯)|gohan|ข้าว/rice/meal;みず(水)|mizu|น้ำ/water;おちゃ(お茶)|ocha|ชา/tea;パン|pan|ขนมปัง/bread;たまご(卵)|tamago|ไข่/egg;にく(肉)|niku|เนื้อ/meat;りんご(林檎)|ringo|แอปเปิล/apple;コーヒー|koohii|กาแฟ/coffee;ラーメン|raamen|ราเมง/ramen"],
["สิ่งของในบ้าน","🏠","いえ(家)|ie|บ้าน/house/home;へや(部屋)|heya|ห้อง/room;つくえ(机)|tsukue|โต๊ะ/desk;いす(椅子)|isu|เก้าอี้/chair;ベッド|beddo|เตียง/bed;ドア|doa|ประตู/door;まど(窓)|mado|หน้าต่าง/window;かさ(傘)|kasa|ร่ม/umbrella"],
["ครอบครัวและบุคคล","👨‍👩‍👧","かぞく(家族)|kazoku|ครอบครัว/family;おかあさん(お母さん)|okaasan|แม่/mother/mom;おとうさん(お父さん)|otousan|พ่อ/father/dad;あに(兄)|ani|พี่ชาย/older brother;あね(姉)|ane|พี่สาว/older sister;いもうと(妹)|imouto|น้องสาว/younger sister;ともだち(友達)|tomodachi|เพื่อน/friend;ひと(人)|hito|คน/person"],
["โรงเรียนและการเรียน","🎒","がっこう(学校)|gakkou|โรงเรียน/school;せんせい(先生)|sensei|ครู/teacher;がくせい(学生)|gakusei|นักเรียน/student;ほん(本)|hon|หนังสือ/book;えんぴつ(鉛筆)|enpitsu|ดินสอ/pencil;ノート|nooto|สมุด/notebook;しゅくだい(宿題)|shukudai|การบ้าน/homework;しけん(試験)|shiken|สอบ/exam/test"],
["ธรรมชาติและสภาพอากาศ","🌸","やま(山)|yama|ภูเขา/mountain;うみ(海)|umi|ทะเล/sea/ocean;かわ(川)|kawa|แม่น้ำ/river;き(気)|ki|ต้นไม้/tree;はな(花)|hana|ดอกไม้/flower;あめ(雨)|ame|ฝน/rain;ゆき(雪)|yuki|หิมะ/snow;かぜ(風)|kaze|ลม/wind;そら(空)|sora|ท้องฟ้า/sky"],
["สี","🎨","あか(赤)|aka|แดง/red;あお(青)|ao|น้ำเงิน/blue;きいろ(黄色)|kiiro|เหลือง/yellow;みどり(緑)|midori|เขียว/green;しろ(白)|shiro|ขาว/white;くろ(黒)|kuro|ดำ/black;ピンク|pinku|ชมพู/pink;むらさき(紫)|murasaki|ม่วง/purple"],
["เวลาและวัน","⏰","きょう(今日)|kyou|วันนี้/today;あした(明日)|ashita|พรุ่งนี้/tomorrow;きのう(機能)|kinou|เมื่อวาน/yesterday;あさ(朝)|asa|เช้า/morning;ひる(昼)|hiru|กลางวัน/noon/daytime;よる(夜)|yoru|กลางคืน/night;いま(今)|ima|ตอนนี้/now;まいにち(毎日)|mainichi|ทุกวัน/every day"],
["คำกริยา","🏃","たべる(食べる)|taberu|กิน/to eat/eat;のむ(飲む)|nomu|ดื่ม/to drink/drink;いく(行く)|iku|ไป/to go/go;くる(来る)|kuru|มา/to come/come;みる(見る)|miru|ดู/to see/to watch/see/watch;きく(聞く)|kiku|ฟัง/to listen/to hear/listen;よむ(読む)|yomu|อ่าน/to read/read;かく(書く)|kaku|เขียน/to write/write"],
["ความรู้สึกและอารมณ์","😆","うれしい(嬉しい)|ureshii|ดีใจ/happy/glad;たのしい(楽しい)|tanoshii|สนุก/fun;かなしい(悲しい)|kanashii|เศร้า/sad;こわい(怖い)|kowai|น่ากลัว/scary/afraid;ねむい(眠い)|nemui|ง่วง/sleepy;すき(好き)|suki|ชอบ/like;きらい(嫌い)|kirai|เกลียด/dislike;はずかしい(恥ずかしい)|hazukashii|อาย/embarrassed/shy"],
["เกมและเทคโนโลยี","🎮","ゲーム|geemu|เกม/game;スマホ|sumaho|สมาร์ทโฟน/smartphone/phone;パソコン|pasokon|คอมพิวเตอร์/computer/pc;インターネット|intaanetto|อินเทอร์เน็ต/internet;アプリ|apuri|แอป/app;メール|meeru|อีเมล/email/mail;しゃしん(写真)|shashin|รูปถ่าย/photo;カメラ|kamera|กล้อง/camera"],
["การเดินทางและยานพาหนะ","🚆","くるま(車)|kuruma|รถ/car;でんしゃ(電車)|densha|รถไฟ/train;バス|basu|รถบัส/bus;ひこうき(飛行機)|hikouki|เครื่องบิน/airplane/plane;じてんしゃ(自転車)|jitensha|จักรยาน/bicycle/bike;タクシー|takushii|แท็กซี่/taxi;えき(駅)|eki|สถานี/station;ふね(船)|fune|เรือ/ship/boat"],
["เสื้อผ้าและเครื่องแต่งกาย","👗","ふく(服)|fuku|เสื้อผ้า/clothes;シャツ|shatsu|เสื้อเชิ้ต/shirt;ズボン|zubon|กางเกง/pants/trousers;くつ(靴)|kutsu|รองเท้า/shoes;ぼうし(防止)|boushi|หมวก/hat/cap;めがね(眼鏡)|megane|แว่นตา/glasses;かばん(鞄)|kaban|กระเป๋า/bag;スカート|sukaato|กระโปรง/skirt"],
["สถานที่","📍","びょういん(病院)|byouin|โรงพยาบาล/hospital;みせ(店)|mise|ร้าน/shop/store;こうえん(公園)|kouen|สวนสาธารณะ/park;ぎんこう(銀行)|ginkou|ธนาคาร/bank;としょかん(図書館)|toshokan|ห้องสมุด/library;レストラン|resutoran|ร้านอาหาร/restaurant;トイレ|toire|ห้องน้ำ/toilet/restroom;くうこう(空港)|kuukou|สนามบิน/airport"],
["คำคุณศัพท์","✨","おおきい(大きい)|ookii|ใหญ่/big/large;ちいさい(小さい)|chiisai|เล็ก/small;あたらしい(新しい)|atarashii|ใหม่/new;ふるい(古い)|furui|เก่า/old;たかい(高い)|takai|แพง/สูง/expensive/high/tall;やすい(安い)|yasui|ถูก/cheap;おいしい(美味しい)|oishii|อร่อย/delicious/tasty;かわいい(可愛い)|kawaii|น่ารัก/cute"]];
const VOCAB=VCATS.flatMap(([n,e,t],ci)=>t.split(";").map(l=>{const[jp,ro,m]=l.split("|"),a=m.split("/");return{jp,ro,th:a[0],en:a.slice(1),alts:a,cat:ci}}));
const PART=`は|wa|ชี้หัวข้อของประโยค (ส่วนเรื่อง...)|わたしは たなかです。|watashi wa tanaka desu.|ฉันชื่อทานากะ|wa ta shi ha ta na ka de su|wa ta shi wa ta na ka de su|เมื่อ は เป็นคำช่วย จะไม่อ่านว่า "ฮะ (ha)" แต่อ่านว่า "วะ (wa)"
が|ga|ชี้ประธาน / สิ่งที่ชอบ-ทำได้|ねこが すきです。|neko ga suki desu.|ชอบแมว|||
を|o|ชี้กรรมของกริยา|みずを のみます。|mizu o nomimasu.|ดื่มน้ำ|||
に|ni|เวลา / จุดหมาย / ที่ที่อยู่|がっこうに いきます。|gakkou ni ikimasu.|ไปโรงเรียน|||
で|de|สถานที่ที่ทำกริยา / วิธีการ|うちで たべます。|uchi de tabemasu.|กินที่บ้าน|||
の|no|ของ (ความเป็นเจ้าของ)|わたしの ほん。|watashi no hon|หนังสือของฉัน|||
と|to|และ / กับ|ともだちと いきます。|tomodachi to ikimasu.|ไปกับเพื่อน|||
も|mo|ก็ / เหมือนกัน|わたしも がくせいです。|watashi mo gakusei desu.|ฉันก็เป็นนักเรียน|||
へ|e|ไปทางทิศ... |にほんへ いきます。|nihon e ikimasu.|ไปญี่ปุ่น|ni ho n he i ki ma su|ni ho n e i ki ma su|へ เป็นคำช่วยอ่านว่า "เอะ (e)" ไม่ใช่ "เฮะ (he)"
から|kara|จาก / เพราะ|タイから きました。|tai kara kimashita.|มาจากไทย|||
まで|made|จนถึง|ごじまで はたらきます。|goji made hatarakimasu.|ทำงานถึงห้าโมง|||
か|ka|ท้ายประโยคทำให้เป็นคำถาม|おげんきですか。|ogenki desu ka.|สบายดีไหม|||`.split("\n").map(l=>{const[p,rd,use,ex,exr,th,wr,ok,note]=l.split("|");return{p,rd,use,ex,exr,th,wr,ok,note}});
const flat=k=>SETS[k].groups.flatMap(g=>g[1].flat()).filter(x=>x.ro!=="_"&&x.jp!=="_");

/* ===== UTIL ===== */
const $=s=>document.querySelector(s),app=$("#app");
const norm=s=>s.toLowerCase().trim().replace(/\s+/g," ").replace(/\bsi\b/g,"shi").replace(/\bti\b/g,"chi").replace(/\btu\b/g,"tsu").replace(/\bhu\b/g,"fu").replace(/\b(zi|di)\b/g,"ji").replace(/\bdu\b/g,"zu").replace(/ou\b/g,"o").replace(/oo/g,"o");
// ตัดคันจิที่อยู่ในวงเล็บออกก่อนอ่านเสียง
const cleanJP = t => t
  .replace(/[(（][一-龯々〆ヵヶ]+[)）]/g, "")
  .replace(/\s+/g, " ")
  .trim();
let au;
const tts=t=>{const S=window.speechSynthesis;if(!S)return;const u=new SpeechSynthesisUtterance(t);u.lang="ja-JP";u.rate=.8;const v=S.getVoices().filter(x=>x.lang.startsWith("ja"));const b=v.find(x=>/google|nanami|kyoko|haruka|o-ren/i.test(x.name))||v[0];if(b)u.voice=b;S.cancel();S.speak(u)};
const say=t=>{
  t=cleanJP(t);
  try{
    au&&au.pause();
    au=new Audio("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q="+encodeURIComponent(t));
    au.onerror=()=>tts(t);
    const p=au.play();
    p&&p.catch(()=>tts(t));
  }catch{
    tts(t);
  }
};

const ttsK=t=>{const S=window.speechSynthesis;if(!S)return;const u=new SpeechSynthesisUtterance(t);u.lang="ja-JP";u.pitch=2;u.rate=1.1;const v=S.getVoices().filter(x=>x.lang.startsWith("ja"));const b=v.find(x=>/nanami|kyoko|haruka|o-ren|google/i.test(x.name))||v[0];if(b)u.voice=b;S.cancel();S.speak(u)};
const KBASE="voice/kitty/";
const sayKfx=t=>{try{au&&au.pause();au=new Audio("https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&q="+encodeURIComponent(t));au.preservesPitch=false;au.mozPreservesPitch=false;au.webkitPreservesPitch=false;au.playbackRate=1.35;au.onerror=()=>ttsK(t);const p=au.play();p&&p.catch(()=>ttsK(t))}catch{ttsK(t)}};
const sayK=t=>{try{au&&au.pause();au=new Audio(KBASE+encodeURIComponent(t)+".wav");au.onerror=()=>sayKfx(t);const p=au.play();p&&p.catch(()=>sayKfx(t))}catch{sayKfx(t)}};
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const store={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
let best=store.get("best",0),streak=0;
let xp=store.get("xp",0);const lvl=()=>Math.floor(xp/100)+1;const addXp=n=>{xp+=n;store.set("xp",xp);hud()};
const hud=()=>{$("#hudStreak").textContent="🔥 "+streak+" · 🏆 "+best;$("#hudBest").textContent="⭐ Lv "+lvl()+" · "+(xp%100)+"/100"};
const rain=()=>{const r=$("#rain"),ch="あいうえおアイウエオ日月火水木金土桜愛夢";for(let i=0;i<22;i++){const s=document.createElement("span");s.textContent=ch[Math.floor(Math.random()*ch.length)];s.style.cssText=`left:${Math.random()*100}%;font-size:${20+Math.random()*50}px;animation-duration:${14+Math.random()*20}s;animation-delay:-${Math.random()*30}s`;r.append(s)}};

/* ===== VIEWS ===== */
const tile=(h,k,t,s,c="")=>`<a class="tile ${c}" href="${h}"><span class="kana">${k}</span><h2>${t}</h2><small>${s}</small></a>`;
const views={
home:()=>`<section class="hero"><div><h1>เรียนภาษาญี่ปุ่น</h1><p>ฝึกอ่านตัวอักษร ฟังเสียงจริง จำคำศัพท์ แล้วพิมพ์ตอบเองในโหมดทดสอบ เก็บสถิติสูงสุดไว้ในเครื่องคุณ</p>
<div class="tiles">${tile("#/learn","学","แบบเรียน","ตารางอักษร • เสียงอ่าน • แฟลชการ์ด","")}${tile("#/test","試","แบบทดสอบ","พิมพ์ตอบเอง • สะสมสตรีค","red")}</div></div><div class="vert" aria-hidden="true">日本語</div></section>`,
menu:m=>`<a class="crumb" href="#/">← กลับหน้าแรก</a><h1 class="page">${m=="learn"?"แบบเรียน":"แบบทดสอบ"}</h1><p class="sub">เลือกหมวดที่อยากฝึก</p><div class="tiles">${tile(`#/${m}/hiragana`,"あ","ฮิรางะนะ","46 ตัว + เสียงขุ่น")}${tile(`#/${m}/katakana`,"ア","คาตาคานะ","ใช้เขียนคำต่างชาติ")}${tile(`#/${m}/vocab`,"語","คำศัพท์",VOCAB.length+" คำพื้นฐาน")}</div>`,
learnKana:k=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">${SETS[k].name}</h1><p class="sub">กดที่ตัวอักษรเพื่อฟังเสียงอ่าน (เสียงมาจากเบราว์เซอร์ของคุณ)</p>`+SETS[k].groups.map(([n,rows])=>`<div class="sec">${n}</div><div class="grid">${rows.flat().map(x=>x.ro==="_"||x.jp==="_"?`<div class="card blank"></div>`:`<button class="card" data-s="${x.jp}">${x.jp}<small>${x.ro}</small></button>`).join("")}</div>`).join("")+`<a class="btn" href="#/test/${k}">ทดสอบเลย</a>`,
learnVocab:()=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">คำศัพท์</h1><p class="sub">กดการ์ดเพื่อพลิกดูความหมาย • กดค้างไม่ต้อง แค่กดซ้ำเพื่อฟังเสียง</p><div class="vgrid">${VOCAB.map(v=>`<button class="flip" data-s="${v.jp}"><div><span class="face front"><b>${v.jp}</b><span>${v.ro}</span></span><span class="face back">${v.th}<small>${v.en[0]||""}</small></span></div></button>`).join("")}</div><a class="btn" href="#/test/vocab">ทดสอบเลย</a>`
};

/* ===== VIEWS V2 ===== */
const kname=k=>k==="vocab"?"คำศัพท์":SETS[k].name;
const T={learn:["แบบเรียน","เลือกหมวดที่อยากฝึก"],test:["แบบทดสอบ","เลือกหมวดที่อยากทดสอบ"],"play/match":["จับคู่การ์ด","เลือกหมวดที่อยากเล่น"],"play/speed":["สปีดรัน 30 วิ","เลือกหมวดที่อยากเล่น"]};
views.home=()=>`<section class="hero"><div><h1>เรียนภาษาญี่ปุ่น</h1><p>อ่าน ฟัง เล่นเกม ทำแบบทดสอบ สะสม XP เลเวลอัปไปเรื่อยๆ ทุกอย่างกดได้ด้วยนิ้วโป้งเดียว</p>
<div class="tiles">${tile("#/learn","学","แบบเรียน","ตารางอักษร • แฟลชการ์ด")}${tile("#/test","試","แบบทดสอบ","แตะเลือก • พิมพ์ • ฟัง","red")}${tile("#/play","遊","เกม","จับคู่ • สปีดรัน","blue")}</div></div><div class="vert" aria-hidden="true">日本語</div></section>`;
views.menu=m=>`<a class="crumb" href="${m.startsWith("play/")?"#/play":"#/"}">← กลับ</a><h1 class="page">${T[m][0]}</h1><p class="sub">${T[m][1]}</p><div class="tiles">${tile(`#/${m}/hiragana`,"あ","ฮิรางะนะ","46 ตัว + เสียงขุ่น")}${tile(`#/${m}/katakana`,"ア","คาตาคานะ","คำต่างชาติ")}${tile(`#/${m}/vocab`,"語","คำศัพท์",VOCAB.length+" คำพื้นฐาน")}</div>`;
views.play=()=>`<a class="crumb" href="#/">← กลับ</a><h1 class="page">เกม</h1><p class="sub">เล่นสนุกแล้วได้ XP ด้วย</p><div class="tiles">${tile("#/play/match","🃏","จับคู่การ์ด","จับอักษรคู่กับคำอ่าน/คำแปล","red")}${tile("#/play/speed","⚡","สปีดรัน","30 วินาที ตอบให้ได้มากที่สุด","blue")}</div>`;

/* ===== QUIZ V2 ===== */
let run=0;
const lab=(q,k)=>k==="vocab"?q.en[0]+" · "+q.th:q.ro;
const mk=(q,pool,k,listen)=>{const f=listen?x=>x.jp:x=>lab(x,k),a=f(q),set=new Set([a]);for(const x of shuffle(pool)){if(set.size>=4)break;set.add(f(x))}return shuffle([...set]).map(t=>({t,ok:t===a}))};
const opts=(q,pool,k,l)=>`<div class="opts ${l?"jp":""}">${mk(q,pool,k,l).map(o=>`<button class="opt" data-ok="${o.ok}">${o.t}</button>`).join("")}</div>`;
const bump=()=>{if(streak>best){best=streak;store.set("best",best)}hud()};
const pickMode=k=>{app.innerHTML=`<a class="crumb" href="#/test">← กลับ</a><h1 class="page">เลือกวิธีตอบ</h1><p class="sub">${kname(k)}</p><div class="tiles">${tile(`#/test/${k}/choice`,"👆","แตะเลือก","4 ตัวเลือก เหมาะกับมือถือ")}${tile(`#/test/${k}/type`,"⌨️","พิมพ์ตอบเอง","พิมพ์โรมันจิ / คำแปล","red")}${tile(`#/test/${k}/listen`,"👂","ฟังแล้วเลือก","ฟังเสียง เลือกตัวที่ใช่","blue")}</div>`};
function quiz(kind,mode){
  if(!["choice","type","listen"].includes(mode))return pickMode(kind);
  const pool=kind==="vocab"?VOCAB:flat(kind),N=10,qs=shuffle(pool).slice(0,N),word=kind==="vocab",id=++run;let i=0,score=0,miss=[],locked=false;
  const ans=q=>word?q.en[0]+" / "+q.th:q.ro;
  const show=()=>{locked=false;const q=qs[i];
    const prompt=mode==="listen"?`<button class="q speak" id="snd" aria-label="ฟังเสียง">🔊</button><div class="hint">แตะเพื่อฟังอีกครั้ง แล้วเลือกตัวที่ได้ยิน</div>`:`<div class="q ${word?"word":""}">${q.jp}</div><div class="hint">${mode==="type"?(word?"พิมพ์ความหมาย (อังกฤษ/ไทย)":"พิมพ์โรมันจิ เช่น ka, shi")+" • ":""}<a href="#" id="snd">🔊 ฟังเสียง</a></div>`;
    const body=mode==="type"?`<input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="คำตอบ"><div class="fb" id="fb"></div><button class="btn" id="go">ตรวจคำตอบ</button><button class="btn ghost" id="skip">ข้าม</button>`:opts(q,pool,kind,mode==="listen")+`<div class="fb" id="fb"></div>`;
    app.innerHTML=`<div class="quiz"><a class="crumb" href="#/test/${kind}">← เปลี่ยนโหมด</a><div class="bar"><i style="width:${i/N*100}%"></i></div>${prompt}${body}</div>`;
    $("#snd").onclick=e=>{e.preventDefault();say(q.jp)};setTimeout(()=>say(q.jp),150);
    if(mode==="type"){const inp=$("#ans");inp.focus();$("#go").onclick=check;$("#skip").onclick=()=>{if(!locked)finish(false)};inp.onkeydown=e=>{if(e.key==="Enter")check()}}
    else document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{if(locked)return;const ok=b.dataset.ok==="true";b.classList.add(ok?"ok":"no");if(!ok)$('.opt[data-ok="true"]').classList.add("ok");finish(ok)});
  };
  const check=()=>{if(locked)return;const v=norm($("#ans").value);if(!v)return;const q=qs[i];finish(word?q.alts.some(a=>norm(a)===v)||norm(q.ro)===v:norm(q.ro)===v)};
  const finish=ok=>{locked=true;const q=qs[i];
    if(ok){score++;streak++;addXp(10)}else{streak=0;miss.push(`${q.jp} = ${ans(q)}`)}
    bump();if(mode==="type"){$("#ans").className=ok?"ok":"no";$("#go")?.remove();$("#skip")?.remove()}
    $("#fb").innerHTML=ok?`✅ ถูกต้อง! +10 XP`:`❌ เฉลย: <b>${ans(q)}</b>`;
    setTimeout(()=>{if(id!==run)return;i++;i<N?show():end()},ok?700:1500)};
  const end=()=>{addXp(score>=9?20:0);app.innerHTML=`<div class="quiz"><div class="score">${score}/${N}</div><h1 class="page">${score>=9?"สุดยอด! 🌸":score>=6?"เก่งมาก!":"ฝึกอีกนิดนะ สู้ๆ!"}</h1><p class="sub">${hudText()}</p>${miss.length?`<div class="sec">ที่ควรทบทวน</div><div class="wrong">${miss.map(m=>`<span>${m}</span>`).join("")}</div>`:""}<a class="btn" href="#/test/${kind}/${mode}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/learn/${kind}">กลับไปเรียน</a></div>`;$("#again").onclick=e=>{e.preventDefault();quiz(kind,mode)}};
  show();
}
const hudText=()=>`⭐ Lv ${lvl()} • สตรีคสูงสุด 🏆 ${best}`;

/* ===== GAMES ===== */
function match(kind){
  const pool=kind==="vocab"?VOCAB:flat(kind),ps=shuffle(pool).slice(0,6);run++;
  const cards=shuffle(ps.flatMap((p,n)=>[{id:n,t:p.jp,j:1},{id:n,t:lab(p,kind),j:0}]));
  let sel=null,done=0,moves=0;const t0=Date.now();
  app.innerHTML=`<a class="crumb" href="#/play/match">← กลับ</a><h1 class="page">จับคู่การ์ด</h1><p class="sub">แตะอักษรกับคำอ่าน/คำแปลที่ตรงกัน • <b id="mv">0</b> ครั้ง</p><div class="mgrid">${cards.map((c,n)=>`<button class="mc ${c.j?"jp":""}">${c.t}</button>`).join("")}</div>`;
  document.querySelectorAll(".mc").forEach((b,n)=>b.onclick=()=>{
    const c=cards[n];if(b.classList.contains("hit")||b.classList.contains("bad")||(sel&&sel.b===b))return;
    if(c.j)say(c.t);b.classList.add("on");if(!sel){sel={b,c};return}
    const s=sel;sel=null;moves++;$("#mv").textContent=moves;
    if(s.c.id===c.id&&s.c.j!==c.j){[s.b,b].forEach(x=>{x.classList.remove("on");x.classList.add("hit")});streak++;bump();if(++done===6)win()}
    else{[s.b,b].forEach(x=>x.classList.add("bad"));streak=0;hud();setTimeout(()=>[s.b,b].forEach(x=>x.classList.remove("on","bad")),500)}});
  const win=()=>{const xpg=Math.max(20,70-moves*3);addXp(xpg);setTimeout(()=>{app.innerHTML=`<div class="quiz"><div class="score">🎉</div><h1 class="page">จับคู่ครบแล้ว!</h1><p class="sub">${moves} ครั้ง • ${Math.round((Date.now()-t0)/1000)} วินาที • +${xpg} XP</p><a class="btn" href="#/play/match/${kind}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();match(kind)}},500)};
}
function speed(kind){
  const pool=kind==="vocab"?VOCAB:flat(kind),id=++run,key="sp_"+kind,hi=store.get(key,0);let t=30,score=0,q;
  app.innerHTML=`<div class="quiz"><a class="crumb" href="#/play/speed">← กลับ</a><div class="bar"><i id="tb" style="width:100%"></i></div><div class="hud2"><span>⏱ <b id="tm">30</b></span><span>คะแนน <b id="sc">0</b></span><span>🏆 ${hi}</span></div><div class="q ${kind==="vocab"?"word":""}" id="sq"></div><div id="so"></div><p class="hint">ตอบผิดเสียเวลา 2 วินาที</p></div>`;
  const next=()=>{q=pool[Math.floor(Math.random()*pool.length)];$("#sq").textContent=q.jp;$("#so").innerHTML=opts(q,pool,kind,false)};
  $("#so").onclick=e=>{const b=e.target.closest(".opt");if(!b||b.disabled)return;
    if(b.dataset.ok==="true"){score++;$("#sc").textContent=score;streak++;bump();next()}else{streak=0;hud();t=Math.max(0,t-2);b.disabled=true;b.classList.add("no")}};
  const iv=setInterval(()=>{if(id!==run){clearInterval(iv);return}t--;$("#tm").textContent=t;$("#tb").style.width=t/30*100+"%";if(t<=0){clearInterval(iv);over()}},1000);
  const over=()=>{const nb=score>hi;if(nb)store.set(key,score);addXp(score*3);app.innerHTML=`<div class="quiz"><div class="score">${score}</div><h1 class="page">${nb?"สถิติใหม่! 🔥":"หมดเวลา!"}</h1><p class="sub">+${score*3} XP • สถิติสูงสุด ${Math.max(score,hi)}</p><a class="btn" href="#/play/speed/${kind}" id="again">เล่นอีกรอบ</a><a class="btn ghost" href="#/play">เกมอื่น</a></div>`;$("#again").onclick=e=>{e.preventDefault();speed(kind)}};
  next();
}

/* ===== V3: mascot, vocab cats, particles, writing ===== */
T.write=["ฝึกเขียน","เลือกชุดอักษรที่อยากฝึกเขียนตามเส้น"];
const PH=[["こんにちは！","สวัสดี!"],["がんばって！","สู้ๆ นะ!"],["すごい！","เก่งมากเลย!"],["だいすき！","รักที่สุดเลย!"],["いっしょにあそぼう！","มาเล่นด้วยกันนะ!"],["おなかすいた","หิวจังเลย"],["かわいい！","น่ารักจัง!"]];
const MAS=`<svg id="mas" viewBox="0 0 200 190" role="img" aria-label="คิตตี้จัง"><g stroke="#5a2145" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M38 78 L44 14 L88 46Z M162 78 L156 14 L112 46Z" fill="#fff"/><ellipse cx="100" cy="108" rx="80" ry="64" fill="#fff"/><path d="M52 62 L50 34 L72 50Z" fill="#ffc2da" stroke="none"/><ellipse cx="68" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/><ellipse cx="132" cy="104" rx="7" ry="10" fill="#5a2145" class="eye"/><ellipse cx="100" cy="120" rx="9" ry="6" fill="#ffb703" stroke-width="3"/><path d="M90 132q10 9 20 0" fill="none" stroke-width="4"/><path d="M12 112l34 6M12 130l34-4M188 112l-34 6M188 130l-34-4" fill="none" stroke-width="3"/><circle cx="48" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/><circle cx="152" cy="124" r="10" fill="#ff8fb8" stroke="none" opacity=".7"/><path d="M138 40 L172 22 L168 62Z M138 40 L110 20 L116 60Z" fill="#ff4f8b"/><circle cx="140" cy="40" r="10" fill="#ff8fb8"/></g></svg>`;
views.home=()=>`<section class="hero"><div class="hl"><h1>เรียนภาษาญี่ปุ่น</h1><p>อ่าน ฟัง เขียนตามเส้น เล่นเกม สะสม XP เลเวลอัปไปกับคิตตี้จัง</p><div class="tiles">${tile("#/learn","学","แบบเรียน","อักษร • คำศัพท์ • คำช่วย")}${tile("#/write","✏️","ฝึกเขียน","ลากนิ้วเขียนตามเส้น","blue")}${tile("#/test","試","แบบทดสอบ","แตะ • พิมพ์ • ฟัง","red")}${tile("#/play","遊","เกม","จับคู่ • สปีดรัน")}</div></div>
<div class="mwrap"><div class="bub" id="bub"><b>こんにちは！</b><small>คิตตี้จังเอง กดที่ตัวฉันสิ~</small></div>${MAS}<button class="btn" id="mplay">🎮 เล่นกับคิตตี้</button></div></section>`;
views.menu=m=>{const t=T[m],L=[["hiragana","あ","ฮิรางะนะ","46 ตัว + เสียงขุ่น"],["katakana","ア","คาตาคานะ","คำต่างชาติ"]];if(m!=="write")L.push(["vocab","語","คำศัพท์",VCATS.length+" หมวด • "+VOCAB.length+" คำ"]);if(m==="learn")L.push(["particle","は","คำช่วย 助詞","は を へ อ่านยังไง"]);
 return `<a class="crumb" href="${m.startsWith("play/")?"#/play":"#/"}">← กลับ</a><h1 class="page">${t[0]}</h1><p class="sub">${t[1]}</p><div class="tiles">${L.map(l=>tile(`#/${m}/${l[0]}`,l[1],l[2],l[3])).join("")}</div>`};
views.vcats=()=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">คำศัพท์</h1><p class="sub">เลือกหมวดที่อยากเรียน</p><div class="cats">${VCATS.map(([n,e],i)=>`<a class="cat" href="#/learn/vocab/${i}"><span>${e}</span>${n}<small>${VOCAB.filter(v=>v.cat===i).length} คำ</small></a>`).join("")}</div><a class="btn" href="#/test/vocab">ทดสอบคำศัพท์ทั้งหมด</a>`;
views.learnVocab=i=>`<a class="crumb" href="#/learn/vocab">← หมวดคำศัพท์</a><h1 class="page">${VCATS[i][1]} ${VCATS[i][0]}</h1><p class="sub">กดการ์ดเพื่อฟังเสียงและพลิกดูความหมาย</p><div class="vgrid">${VOCAB.filter(v=>v.cat===i).map(v=>`<button class="flip" data-s="${v.jp}"><div><span class="face front"><b>${v.jp}</b><span>${v.ro}</span></span><span class="face back">${v.th}<small>${v.en[0]||""}</small></span></div></button>`).join("")}</div>`;
views.particle=()=>`<a class="crumb" href="#/learn">← แบบเรียน</a><h1 class="page">คำช่วย 助詞</h1><p class="sub">ตัวเล็กๆ ที่บอกหน้าที่ของคำในประโยค กดตัวอักษรหรือประโยคเพื่อฟังเสียง</p>${PART.map(p=>`<article class="pcard"><div class="pk" data-s="${p.p}">${p.p}<small>อ่านว่า ${p.rd}</small></div><div><b>${p.use}</b><div class="ex" data-s="${p.ex}">${p.ex} 🔊<br><span>${p.exr}</span><br><i>${p.th}</i></div>${p.wr?`<div class="wrong2"><p class="x">✗ อ่านผิด: ${p.wr}</p><p class="v">✓ อ่านถูก: ${p.ok}</p><small>${p.note}</small></div>`:""}</div></article>`).join("")}`;

function mochi(){
  const el=$("#bub"),m=$("#mas"),pool=flat("hiragana");if(!el||!m)return;
  const heart=()=>{const r=m.getBoundingClientRect();for(let i=0;i<5;i++){const h=document.createElement("span");h.className="heart";h.textContent=["💖","✨","🌸","💗"][i%4];h.style.cssText=`left:${r.left+Math.random()*r.width}px;top:${r.top+r.height/2}px`;document.body.append(h);setTimeout(()=>h.remove(),1100)}};
  const react=(jp,th)=>{el.innerHTML=`<b>${jp}</b><small>${th}</small>`;sayK(jp.replace(/[！…]/g,""));m.classList.remove("hop");void m.offsetWidth;m.classList.add("hop");heart()};
  const ask=()=>{if(!$("#bub"))return;const q=pool[Math.floor(Math.random()*pool.length)];el.innerHTML=`<b>${q.jp}</b><small>โมจิถาม: อ่านว่าอะไรน้า?</small><div class="mopts">${mk(q,pool,"hiragana").map(o=>`<button data-ok="${o.ok}">${o.t}</button>`).join("")}</div>`;sayK(q.jp);
    el.querySelectorAll("button").forEach(b=>b.onclick=()=>{if(b.dataset.ok==="true"){addXp(5);streak++;bump();react("やった！","ถูกต้อง! +5 XP");setTimeout(ask,1600)}else{streak=0;hud();react("ざんねん…","เฉลยคือ "+q.ro+" ลองใหม่นะ");setTimeout(ask,1900)}})};
  m.onclick=()=>{const p=PH[Math.floor(Math.random()*PH.length)];react(p[0],p[1])};$("#mplay").onclick=ask;
}


function writePage(k){
  const full=SETS[k].groups.flatMap(g=>g[1].flat()),code=c=>c.codePointAt(0).toString(16).padStart(5,"0");
  let cur=full[0],strokes=[],si=0,pts=[],drawing=false,awarded=false,tk=0;
  app.innerHTML=`<a class="crumb" href="#/write">← กลับ</a><h1 class="page">ฝึกเขียน ${SETS[k].name}</h1><p class="sub">ล็อกทีละเส้น ต้องเริ่มที่จุดทองแล้วลากทับเส้นที่สว่างให้สุดและถูกทิศ เส้นที่ไม่ตรงจะไม่ผ่าน</p>
  <div class="wbox"><div class="pad" id="pad"><svg id="gs" viewBox="0 0 109 109"><g id="guides"></g><g id="inked"></g><polyline id="live"/><circle id="start" class="start" r="5.5" cx="-20" cy="-20"/></svg></div>
  <div class="wside"><div class="wch" id="wch"></div><div class="wprog" id="wprog">กำลังโหลดเส้น</div><p class="wstat" id="wstat"></p><button class="btn" id="wplay">▶ ดูทิศเส้นนี้</button><button class="btn ghost" id="wsay">🔊 ฟังเสียง</button><button class="btn ghost" id="wredo">↺ เขียนตัวนี้ใหม่</button><button class="btn" id="wnext" disabled>ตัวถัดไป</button></div></div>
  <div class="grid wsel">${full.map((x,n)=>x.ro==="_"||x.jp==="_"?`<div class="card blank"></div>`:`<button class="card" data-n="${n}">${x.jp}</button>`).join("")}</div>`;
  const gs=$("#gs"),pad=$("#pad"),live=$("#live"),start=$("#start");
  const hypot=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const setStat=(t,bad,good)=>{$("#wstat").className="wstat"+(bad?" bad":good?" good":"");$("#wstat").textContent=t};
  const shake=()=>{pad.classList.remove("shake");void pad.offsetWidth;pad.classList.add("shake")};
  const vb=e=>{const r=gs.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*109,y:(e.clientY-r.top)/r.height*109}};
  const samples=el=>{const L=el.getTotalLength(),n=32,pts=[];for(let i=0;i<n;i++){const p=el.getPointAtLength(L*i/(n-1));pts.push({x:p.x,y:p.y})}return{pts,len:L}};
  const resample=ps=>{if(ps.length<2)return null;const seg=[0];for(let i=1;i<ps.length;i++)seg.push(seg[i-1]+hypot(ps[i],ps[i-1]));const len=seg.at(-1);if(len<7)return null;const n=32,out=[];for(let i=0;i<n;i++){const t=len*i/(n-1);let j=1;while(j<seg.length-1&&seg[j]<t)j++;const a=ps[j-1],b=ps[j],u=Math.min(1,(t-seg[j-1])/(seg[j]-seg[j-1]||1));out.push({x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u})}return{pts:out,len}};
  const avg=(a,b)=>a.reduce((s,_,i)=>s+hypot(a[i],b[i]),0)/a.length;
  const cover=(tpl,user,rad)=>{let hit=0;for(const t of tpl){let best=1e9;for(const u of user)best=Math.min(best,hypot(t,u));if(best<=rad)hit++}return hit/tpl.length};
  const paint=()=>live.setAttribute("points",pts.map(p=>p.x.toFixed(1)+","+p.y.toFixed(1)).join(" "));
  const reveal=p=>{const L=p.getTotalLength();p.style.transition="none";p.style.strokeDasharray=L;p.style.strokeDashoffset=L;requestAnimationFrame(()=>requestAnimationFrame(()=>{p.style.transition="stroke-dashoffset .7s linear";p.style.strokeDashoffset="0"}))};
  const show=()=>{
    strokes.forEach((p,i)=>{p.classList.remove("now","done","wait");p.style.cssText="";p.classList.add(i<si?"done":i===si?"now":"wait")});
    live.classList.remove("bad");live.setAttribute("points","");pts=[];
    if(si>=strokes.length){start.style.display="none";$("#wprog").textContent=`ครบ ${strokes.length} เส้น`;$("#wnext").disabled=false;setStat("ครบทุกเส้นและตรงตามรอย +8 XP",0,1);if(!awarded){awarded=true;streak++;addXp(8);bump()}return}
    const p=strokes[si],a=p.getPointAtLength(0);
    start.style.display="";start.setAttribute("cx",a.x);start.setAttribute("cy",a.y);reveal(p);
    $("#wprog").textContent=`เส้น ${si+1} / ${strokes.length}`;$("#wnext").disabled=true;
    setStat("เริ่มที่จุดทอง แล้วลากทับเส้นชมพูให้สุดปลาย ตามทิศที่เส้นวิ่ง");
  };
  const fail=msg=>{pts=[];paint();live.classList.remove("bad");setStat(msg,1);shake()};
  const judge=()=>{
    const p=strokes[si];if(!p)return;
    const tpl=samples(p),user=resample(pts);
    if(!user)return fail("ลากให้ยาวตามเส้น ยังสั้นไป");
    const fwd=avg(user.pts,tpl.pts),rev=avg(user.pts,[...tpl.pts].reverse());
    const sd=hypot(user.pts[0],tpl.pts[0]),ed=hypot(user.pts.at(-1),tpl.pts.at(-1));
    const loose=tpl.len<32,tol=loose?17:14.5;
    if(rev+4<fwd&&fwd>11)return fail("ทิศกลับกัน ดูเส้นวิ่งแล้วลากตามลูกศร");
    if(sd>(loose?26:22))return fail("ต้องเริ่มชิดจุดทอง ห้ามเริ่มกลางเส้น");
    if(ed>(loose?26:21))return fail("ยังไม่สุดปลายเส้น ลากให้จบ");
    if(user.len<tpl.len*(loose?0.42:0.55))return fail("เส้นสั้นกว่าต้นแบบ ลากให้ครบช่วง");
    if(user.len>tpl.len*2.4)return fail("ลากยาวเกินเส้น ลองทับเส้นชมพูให้สนิท");
    if(cover(tpl.pts,user.pts,tol)<.78)return fail("ออกนอกเส้น ต้องเขียนทับรอยชมพู");
    if(fwd>tol+1)return fail("ยังไม่ตรงเส้น ลองช้าลงแล้วลากทับให้สนิท");
    const pl=document.createElementNS("http://www.w3.org/2000/svg","polyline");
    pl.setAttribute("points",pts.map(q=>q.x.toFixed(1)+","+q.y.toFixed(1)).join(" "));pl.setAttribute("class","committed");
    $("#inked").append(pl);si++;show();
  };
  const load=async x=>{
    cur=x;const id=++tk;si=0;awarded=false;drawing=false;strokes=[];$("#inked").innerHTML="";
    $("#wch").innerHTML=`${x.jp}<small>${x.ro}</small>`;$("#wnext").disabled=true;setStat("กำลังโหลดลำดับเส้น…");say(x.jp);
    document.querySelectorAll(".wsel .card").forEach(c=>c.classList.toggle("sel",full[+c.dataset.n]===x));
    try{
      const r=await fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${code(x.jp)}.svg`);if(!r.ok)throw 0;
      const d=new DOMParser().parseFromString(await r.text(),"image/svg+xml");if(id!==tk)return;
      const nodes=[...d.querySelectorAll('[id*="StrokePaths"] path')];
      const use=nodes.length?nodes:[...d.querySelectorAll("path")];
      $("#guides").innerHTML=use.map(p=>`<path d="${p.getAttribute("d")}" class="gp wait"/>`).join("");
      strokes=[...$("#guides").querySelectorAll(".gp")];
      if(!strokes.length)throw 0;show();
    }catch{if(id!==tk)return;$("#guides").innerHTML=`<text x="54.5" y="72" font-size="64" text-anchor="middle" class="gt">${x.jp}</text>`;setStat("โหลดเส้นไม่สำเร็จ ตรวจเน็ตแล้วเลือกตัวนี้อีกครั้ง",1)}
  };
  const next=()=>{const i=full.indexOf(cur);let n=i+1;while(full[n]&&(full[n].ro==="_"||full[n].jp==="_"))n++;load(full[n]||full[0])};
  document.querySelectorAll(".wsel .card[data-n]").forEach(c=>c.onclick=()=>load(full[+c.dataset.n]));
  $("#wplay").onclick=()=>{if(strokes[si])reveal(strokes[si])};
  $("#wsay").onclick=()=>say(cur.jp);$("#wredo").onclick=()=>load(cur);$("#wnext").onclick=next;
  pad.onpointerdown=e=>{
    if(!strokes[si]||si>=strokes.length)return;e.preventDefault();
    const p=vb(e),a=strokes[si].getPointAtLength(0);
    if(hypot(p,a)>24){setStat("เริ่มที่จุดทองที่กระพริบก่อน แล้วค่อยลาก",1);shake();return}
    drawing=true;pts=[p];try{pad.setPointerCapture(e.pointerId)}catch{}paint();
  };
  pad.onpointermove=e=>{
    if(!drawing)return;const p=vb(e);const last=pts.at(-1);if(hypot(p,last)<1.1)return;pts.push(p);paint();
    const tpl=samples(strokes[si]);let best=1e9;for(const t of tpl.pts)best=Math.min(best,hypot(p,t));
    live.classList.toggle("bad",best>18);
  };
  pad.onpointerup=pad.onpointercancel=()=>{if(!drawing)return;drawing=false;judge()};
  load(cur);
}

/* ===== ROUTER ===== */
function route(){
  const [,m,k,x]=(location.hash||"#/").split("/"),ok=z=>z==="vocab"||z in SETS,set=h=>app.innerHTML=h,H=()=>{set(views.home());mochi()};scrollTo(0,0);run++;window.speechSynthesis?.cancel();au&&au.pause();
  document.querySelectorAll(".dock a").forEach(a=>a.classList.toggle("act",a.dataset.m===(m||"")));
  if(m==="learn"){if(!k)set(views.menu("learn"));else if(k==="particle")set(views.particle());else if(k==="vocab")set(VCATS[+x]?views.learnVocab(+x):views.vcats());else if(k in SETS)set(views.learnKana(k));else H()}
  else if(m==="test")!k?set(views.menu("test")):ok(k)?quiz(k,x):H();
  else if(m==="write")!k?set(views.menu("write")):k in SETS?writePage(k):H();
  else if(m==="play"){if(!k)set(views.play());else if(!["match","speed"].includes(k))H();else if(!x)set(views.menu("play/"+k));else if(ok(x))(k==="match"?match:speed)(x);else H()}
  else H();
}
app.addEventListener("click",e=>{const c=e.target.closest("[data-s]");if(!c)return;say(c.dataset.s);
  if(c.classList.contains("flip"))c.classList.toggle("on");else if(c.classList.contains("card")){c.classList.remove("pop");void c.offsetWidth;c.classList.add("pop")}});
addEventListener("hashchange",route);rain();hud();route();