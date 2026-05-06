(function(){
  const translations = {
    es: {
      title: "KICKFEST — KICKPARTY",
      description: "Kickfest: la mejor fiesta abierta al público. Sin postureo. Sin drama. Ven con ganas.",
      rotate: "En horizontal no se baila igual 🖤",
      lead: "<strong>A todos nos han dado la patada alguna vez.</strong><br/>En el amor, en el curro o justo cuando menos lo esperábamos.<br/>En lugar de quedarnos en el drama, decidimos hacer algo mejor: <span class=\"pink\">celebrarlo.</span><br/>Así nace <strong><span class=\"pink\">Kickfest.</span></strong><br/>Sin postureo. Sin drama. Ven con ganas.<br/>",
      eventDate: "14 NOVIEMBRE",
      eventTime: "A partir de las 18:00h",
      comeback: "VOLVEMOS",
      tagline: "La patada se celebra bailando.",
      instagramCta: "Síguenos para enterarte",
      days: "DÍAS",
      hours: "HORAS",
      minutes: "MINUTOS",
      seconds: "SEGUNDOS",
      cardOneTitle: "PATADA BRINDIS",
      cardOneText: "Porque a todos nos han dado una",
      cardTwoTitle: "MÁLAGA",
      cardTwoText: "Sol fuera, ganas dentro",
      cardThreeTitle: "AMIGOS",
      cardThreeText: "Ven con los tuyos",
      playlistTitle: "LA PREVIA YA SUENA",
      playlistText: "Dale al play y ve calentando.",
      instagramTitle: "ÚLTIMAS PATADAS EN INSTAGRAM",
      instagramText: "Lo que se cuece...",
      postAria: "Ver post de Instagram",
      postOneAlt: "Publicación de Instagram de Kickfest: Save the date 14 noviembre",
      postTwoAlt: "Publicación de Instagram de Kickfest con gente en la fiesta",
      postThreeAlt: "Publicación de Instagram de Kickfest sobre sorteos Kick Party"
    },
    en: {
      title: "KICKFEST — KICKPARTY",
      description: "Kickfest: the party where getting kicked becomes something to celebrate. No posing. No drama. Come ready.",
      rotate: "You can't dance the same sideways 🖤",
      lead: "<strong>We've all been kicked at some point.</strong><br/>In love, at work, or right when we least expected it.<br/>Instead of staying in the drama, we decided to do something better: <span class=\"pink\">celebrate it.</span><br/>That's how <strong><span class=\"pink\">Kickfest.</span></strong> was born.<br/>No posing. No drama. Come ready.<br/>",
      eventDate: "14 NOVEMBER",
      eventTime: "From 18:00",
      comeback: "WE'RE BACK",
      tagline: "The kick is celebrated on the dance floor.",
      instagramCta: "Follow us for updates",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
      cardOneTitle: "KICK TOAST",
      cardOneText: "Because we have all had one",
      cardTwoTitle: "MALAGA",
      cardTwoText: "Sun outside, fire inside",
      cardThreeTitle: "FRIENDS",
      cardThreeText: "Bring your people",
      playlistTitle: "THE WARM-UP IS ON",
      playlistText: "Press play and get ready.",
      instagramTitle: "LATEST KICKS ON INSTAGRAM",
      instagramText: "What's cooking...",
      postAria: "View Instagram post",
      postOneAlt: "Kickfest Instagram post: save the date, 14 November",
      postTwoAlt: "Kickfest Instagram post with people at the party",
      postThreeAlt: "Kickfest Instagram post about Kick Party giveaways"
    }
  };

  const buttons = document.querySelectorAll("[data-lang]");
  const metaDescription = document.querySelector('meta[name="description"]');

  function getInitialLanguage(){
    const saved = localStorage.getItem("kickfest-language");
    if(saved === "es" || saved === "en") return saved;
    return "es";
  }

  function applyLanguage(lang){
    const copy = translations[lang] || translations.es;

    document.documentElement.lang = lang;
    document.title = copy.title;
    if(metaDescription) metaDescription.setAttribute("content", copy.description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if(copy[key]) el.textContent = copy[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if(copy[key]) el.innerHTML = copy[key];
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if(copy[key]) el.setAttribute("aria-label", copy[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if(copy[key]) el.setAttribute("alt", copy[key]);
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });

    localStorage.setItem("kickfest-language", lang);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.getAttribute("data-lang")));
  });

  applyLanguage(getInitialLanguage());
})();
