(function () {
  // ---- CONFIG (edit these) ----
  var WHATSAPP = "963900000000"; // company WhatsApp number, no + or spaces

  var T = {
    ar: {
      brand:"نقاء", nav_services:"خدماتنا", nav_how:"كيف نعمل", nav_areas:"مناطقنا", nav_faq:"أسئلة شائعة", nav_contact:"تواصل معنا",
      cta_short:"احجز الآن", cta:"احجز خدمة التنظيف", cta_services:"تعرّف على خدماتنا",
      hero_eyebrow:"خدمة تنظيف موثوقة في دمشق", hero_title:"بيتك نظيف.. وراحتك علينا",
      hero_sub:"فريق مدرّب وأمين يعتني ببيتك بأعلى معايير النظافة. احجز موعدك في دقيقتين، وأكّد عبر واتساب.",
      trust1:"منزل تم تنظيفه", trust2:"تقييم العملاء", trust3:"أيام الأسبوع", fc1:"فريق موثوق ومُدرَّب", fc2:"حجز في دقيقتين",
      s_eyebrow:"خدماتنا", s_title:"كل ما يحتاجه بيتك", s_sub:"اختر الخدمة المناسبة، ونحن نؤكد لك السعر النهائي عبر واتساب قبل الموعد.",
      sv1_t:"تنظيف منزلي دوري", sv1_d:"تنظيف شامل ومنتظم لكل غرف البيت.",
      sv2_t:"عاملة بالساعة", sv2_d:"عاملة منزلية حسب الساعات التي تحتاجها.",
      sv3_t:"تنظيف عميق", sv3_d:"للزوايا والأماكن التي لا يصلها التنظيف العادي.",
      sv4_t:"تنظيف الانتقال", sv4_d:"قبل الدخول إلى بيتك الجديد أو عند التسليم.",
      sv5_t:"تنظيف النوافذ والواجهات", sv5_d:"زجاج لامع من الداخل والخارج.",
      sv6_t:"تنظيف الكنب والمطابخ", sv6_d:"كنب، فرشات، مطبخ وحمامات بعناية خاصة.",
      book_link:"احجز ←",
      h_eyebrow:"كيف نعمل", h_title:"ثلاث خطوات فقط",
      h1_t:"املأ طلب الحجز", h1_d:"اختر الخدمة والموعد والمنطقة.",
      h2_t:"نؤكد معك عبر واتساب", h2_d:"نتواصل معك لتأكيد التفاصيل والسعر.",
      h3_t:"نصل إلى بيتك", h3_d:"فريقنا يصل في الموعد ويترك بيتك لامعًا.",
      w_eyebrow:"لماذا نقاء؟", w_title:"نظافة تثق بها",
      w1_t:"فريق موثوق", w1_d:"عاملات وعمال تم التحقق منهم ومدرّبون.",
      w2_t:"مواد آمنة", w2_d:"منظفات فعّالة وآمنة على العائلة.",
      w3_t:"مواعيد مرنة", w3_d:"نختار الوقت الذي يناسبك طوال الأسبوع.",
      w4_t:"تواصل مباشر", w4_d:"كل شيء عبر واتساب، بسرعة ووضوح.",
      a_eyebrow:"مناطق الخدمة", a_title:"نخدم أحياء دمشق", a_sub:"إن لم تجد منطقتك، راسلنا وسنخبرك إن كان بإمكاننا الوصول إليك.",
      ar1:"المزة",ar2:"أبو رمانة",ar3:"المالكي",ar4:"الشعلان",ar5:"كفرسوسة",ar6:"المهاجرين",ar7:"باب توما",ar8:"القصاع",ar9:"برزة",ar10:"ركن الدين",ar11:"الميدان",ar12:"جرمانا",
      b_eyebrow:"الحجز", b_title:"احجز خدمة التنظيف", b_sub:"عبّئ الطلب وسنتواصل معك على واتساب لتأكيد الموعد والسعر.",
      f_step1:"1. الخدمة والعقار", f_step2:"2. الموعد والمنطقة", f_step3:"3. بيانات التواصل",
      f_service:"الخدمة", f_type:"نوع العقار", f_rooms:"عدد الغرف", t_apt:"شقة", t_villa:"فيلا / بيت عربي", t_office:"مكتب",
      f_date:"التاريخ", f_time:"الوقت", f_area:"المنطقة", ph_area:"مثال: المزة",
      f_name:"الاسم", f_phone:"رقم الهاتف / واتساب", f_address:"العنوان بالتفصيل", f_notes:"ملاحظات (اختياري)",
      price_note:"السعر النهائي يُؤكَّد عبر واتساب قبل الموعد. لا يوجد دفع إلكتروني حاليًا.",
      next:"التالي", prev:"السابق", submit:"إرسال الطلب",
      d_title:"تم استلام طلبك", d_ref:"رقم الحجز:", d_sub:"اضغط الزر أدناه لتأكيد الحجز معنا على واتساب.", d_wa:"تأكيد على واتساب",
      q_eyebrow:"أسئلة شائعة", q_title:"إجابات سريعة",
      q1:"كيف يتم تحديد السعر؟", q1a:"يعتمد على نوع الخدمة وحجم العقار. نؤكد لك السعر النهائي عبر واتساب قبل الموعد.",
      q2:"هل أحتاج لتوفير مواد التنظيف؟", q2a:"لا، فريقنا يحضر المواد والأدوات اللازمة.",
      q3:"كم تستغرق الخدمة؟", q3a:"من ٣ إلى ٦ ساعات تقريبًا حسب المساحة ونوع الخدمة.",
      q4:"هل يمكنني تغيير الموعد؟", q4a:"نعم، راسلنا على واتساب قبل الموعد بيوم على الأقل.",
      c_title:"تواصل معنا", c_sub:"نردّ عادةً خلال دقائق خلال ساعات العمل.", c_hours:"يوميًا من ٨ صباحًا حتى ٨ مساءً", c_wa:"راسلنا على واتساب",
      footer:"جميع الحقوق محفوظة", demo:"نسخة تجريبية للعرض",
      err:"يرجى تعبئة الحقول المطلوبة",
      wa_hello:"مرحبًا، أود تأكيد حجز التنظيف", wa_ref:"رقم الحجز", wa_service:"الخدمة", wa_prop:"العقار", wa_rooms:"الغرف", wa_date:"الموعد", wa_area:"المنطقة", wa_name:"الاسم", wa_addr:"العنوان", wa_notes:"ملاحظات"
    },
    en: {
      brand:"Naqaa", nav_services:"Services", nav_how:"How it works", nav_areas:"Areas", nav_faq:"FAQ", nav_contact:"Contact",
      cta_short:"Book now", cta:"Book a cleaning", cta_services:"Explore services",
      hero_eyebrow:"Trusted home cleaning in Damascus", hero_title:"Your home, spotless. Your time, yours.",
      hero_sub:"A trained, trustworthy team that cares for your home to the highest standard. Book in two minutes and confirm on WhatsApp.",
      trust1:"homes cleaned", trust2:"customer rating", trust3:"days a week", fc1:"Trusted, trained team", fc2:"Book in 2 minutes",
      s_eyebrow:"Our services", s_title:"Everything your home needs", s_sub:"Pick a service and we'll confirm the final price on WhatsApp before your appointment.",
      sv1_t:"Regular home cleaning", sv1_d:"Thorough, scheduled cleaning of every room.",
      sv2_t:"Hourly maid", sv2_d:"A home helper for exactly the hours you need.",
      sv3_t:"Deep cleaning", sv3_d:"For the corners ordinary cleaning never reaches.",
      sv4_t:"Move-in / move-out", sv4_d:"Before you settle in or when you hand over keys.",
      sv5_t:"Windows & facades", sv5_d:"Sparkling glass, inside and out.",
      sv6_t:"Sofa, kitchen & bathrooms", sv6_d:"Sofas, mattresses, kitchens and bathrooms with extra care.",
      book_link:"Book →",
      h_eyebrow:"How it works", h_title:"Just three steps",
      h1_t:"Fill in the booking", h1_d:"Choose the service, time and area.",
      h2_t:"We confirm on WhatsApp", h2_d:"We contact you to confirm details and price.",
      h3_t:"We arrive at your door", h3_d:"Our team arrives on time and leaves your home shining.",
      w_eyebrow:"Why Naqaa?", w_title:"Cleanliness you can trust",
      w1_t:"Trusted team", w1_d:"Verified, trained cleaners.",
      w2_t:"Safe products", w2_d:"Effective cleaners that are safe for your family.",
      w3_t:"Flexible times", w3_d:"Pick a slot that suits you, all week.",
      w4_t:"Direct contact", w4_d:"Everything on WhatsApp, quick and clear.",
      a_eyebrow:"Service areas", a_title:"We serve Damascus neighbourhoods", a_sub:"Can't see your area? Message us and we'll tell you if we can reach you.",
      ar1:"Mezzeh",ar2:"Abu Rummaneh",ar3:"Malki",ar4:"Shaalan",ar5:"Kafr Sousa",ar6:"Muhajirin",ar7:"Bab Touma",ar8:"Qassaa",ar9:"Barzeh",ar10:"Rukn al-Din",ar11:"Midan",ar12:"Jaramana",
      b_eyebrow:"Booking", b_title:"Book a cleaning", b_sub:"Fill in the request and we'll message you on WhatsApp to confirm time and price.",
      f_step1:"1. Service & property", f_step2:"2. Date & area", f_step3:"3. Your details",
      f_service:"Service", f_type:"Property type", f_rooms:"Number of rooms", t_apt:"Apartment", t_villa:"Villa / house", t_office:"Office",
      f_date:"Date", f_time:"Time", f_area:"Area", ph_area:"e.g. Mezzeh",
      f_name:"Name", f_phone:"Phone / WhatsApp", f_address:"Full address", f_notes:"Notes (optional)",
      price_note:"The final price is confirmed on WhatsApp before the appointment. No online payment for now.",
      next:"Next", prev:"Back", submit:"Send request",
      d_title:"Request received", d_ref:"Booking reference:", d_sub:"Tap below to confirm your booking with us on WhatsApp.", d_wa:"Confirm on WhatsApp",
      q_eyebrow:"FAQ", q_title:"Quick answers",
      q1:"How is the price decided?", q1a:"It depends on the service and property size. We confirm the final price on WhatsApp before your appointment.",
      q2:"Do I need to provide cleaning supplies?", q2a:"No, our team brings all materials and equipment.",
      q3:"How long does a visit take?", q3a:"Roughly 3 to 6 hours depending on size and service.",
      q4:"Can I reschedule?", q4a:"Yes, message us on WhatsApp at least a day before.",
      c_title:"Get in touch", c_sub:"We usually reply within minutes during working hours.", c_hours:"Daily, 8 AM – 8 PM", c_wa:"Message us on WhatsApp",
      footer:"All rights reserved", demo:"Preview version",
      err:"Please fill in the required fields",
      wa_hello:"Hello, I'd like to confirm a cleaning booking", wa_ref:"Reference", wa_service:"Service", wa_prop:"Property", wa_rooms:"Rooms", wa_date:"When", wa_area:"Area", wa_name:"Name", wa_addr:"Address", wa_notes:"Notes"
    }
  };

  var lang = "ar";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function applyLang(l) {
    lang = l;
    var d = T[l];
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    document.title = l === "ar" ? "نقاء | خدمات التنظيف المنزلي في دمشق" : "Naqaa | Home Cleaning in Damascus";
    $$("[data-i18n]").forEach(function (el) { var k = el.getAttribute("data-i18n"); if (d[k] != null) el.textContent = d[k]; });
    $$("[data-i18n-ph]").forEach(function (el) { var k = el.getAttribute("data-i18n-ph"); if (d[k]) el.placeholder = d[k]; });
    $("#langBtn").textContent = l === "ar" ? "EN" : "عربي";
    updateWaLinks();
  }

  $("#langBtn").addEventListener("click", function () { applyLang(lang === "ar" ? "en" : "ar"); });

  // mobile menu
  var menuBtn = $("#menuBtn"), nav = $("#nav");
  menuBtn.addEventListener("click", function () {
    var o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o);
  });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); }); });

  // service card links preselect the service
  $$("[data-service]").forEach(function (a) {
    a.addEventListener("click", function () { $("#service").value = a.getAttribute("data-service"); });
  });

  // date min = today
  var dateEl = $("#date");
  var now = new Date();
  var iso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateEl.min = iso; dateEl.value = iso;

  // stepper
  var steps = $$(".step"), bars = $$(".progress span"), current = 0;
  function show(i) {
    current = i;
    steps.forEach(function (s, n) { s.classList.toggle("is-active", n === i); });
    bars.forEach(function (b, n) { b.classList.toggle("on", n <= i); });
  }
  function validStep(i) {
    var ok = true;
    $$("[required]", steps[i]).forEach(function (f) {
      var bad = !f.value.trim();
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { var f = $("[required].invalid", steps[i]); if (f) f.focus(); }
    return ok;
  }
  $$("[data-next]").forEach(function (b) { b.addEventListener("click", function () { if (validStep(current)) show(current + 1); }); });
  $$("[data-prev]").forEach(function (b) { b.addEventListener("click", function () { show(current - 1); }); });
  $$("input,select").forEach(function (f) { f.addEventListener("input", function () { f.classList.remove("invalid"); }); });

  // submit (demo: no backend yet)
  var lastBooking = null;
  function makeRef() {
    var c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", r = "";
    for (var i = 0; i < 5; i++) r += c[Math.floor(Math.random() * c.length)];
    return "NQ-" + r;
  }
  function label(sel) { var o = sel.options[sel.selectedIndex]; return o ? o.textContent : sel.value; }

  function waText() {
    if (!lastBooking) return "";
    var d = T[lang], b = lastBooking;
    return [d.wa_hello,
      d.wa_ref + ": " + b.ref,
      d.wa_service + ": " + b.service,
      d.wa_prop + ": " + b.type + " — " + d.wa_rooms + ": " + b.rooms,
      d.wa_date + ": " + b.date + " " + b.time,
      d.wa_area + ": " + b.area,
      d.wa_name + ": " + b.name,
      d.wa_addr + ": " + b.address,
      b.notes ? d.wa_notes + ": " + b.notes : ""].filter(Boolean).join("\n");
  }
  function updateWaLinks() {
    var a = $("#waConfirm");
    if (a && lastBooking) a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(waText());
  }

  $("#bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validStep(2)) return;
    lastBooking = {
      ref: makeRef(),
      service: label($("#service")), type: label($("#ptype")), rooms: $("#rooms").value,
      date: $("#date").value, time: $("#time").value, area: $("#area").value.trim(),
      name: $("#name").value.trim(), address: $("#address").value.trim(), notes: $("#notes").value.trim()
    };
    // PRODUCTION: POST lastBooking to the backend here (email / Telegram / Google Sheet).
    $("#ref").textContent = lastBooking.ref;
    updateWaLinks();
    steps.forEach(function (s) { s.classList.remove("is-active"); });
    $(".progress").style.display = "none";
    $("#done").hidden = false;
    $("#done").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("#year").textContent = new Date().getFullYear();
  applyLang("ar");
})();
