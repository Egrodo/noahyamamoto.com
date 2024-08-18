<script>
  const RESUME_LINK =
    "https://docs.google.com/document/d/1hDWX-ajZp1apR2rAwNDuaDgTmJFQoGTe/edit?usp=sharing&ouid=102337792161325988174&rtpof=true&sd=true";

  import { onMount } from "svelte";

  import profilePicUrl from "$lib/assets/profilePic.jpeg";
  import instagramImgUrl from "$lib/assets/instagram.png";
  import githubImgUrl from "$lib/assets/github.png";
  import linkedinImgUrl from "$lib/assets/linkedin.png";
  import FancyLink from "$lib/components/FancyLink.svelte";
  import Canvas from "$lib/components/Canvas.svelte";

  onMount(() => {
    console.log(
      "%c Thanks for checking out my site! Check out my Github while you're here if you want to see the real source.",
      "background-color: black; color: #b200f0; display: block; padding: 1em; text-align: center; font-family: Arial; font-size: 1.2em"
    );
    console.log("https://github.com/egrodo");
  });
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="%sveltekit.assets%/favicon.ico" />
  <link rel="stylesheet" href="%sveltekit.assets%/app.css" />

  <title>Noah Yamamoto</title>
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
  />
  <meta name="author" content="Noah Yamamoto" />
  <meta
    name="keywords"
    content="noah, yamamoto, egrodo, frontend, developer, website, personal"
  />
  <meta
    name="description"
    content="Personal website for Noah Yamamoto, frontend developer and aspiring entropy deccelerator."
  />
  <meta name="theme-color" content="#000000" />
  <meta name="msapplication-navbutton-color" content="#000000" />

  <meta property="og:title" content="Noah Yamamoto" />
  <meta property="og:site_name" content="Noah Yamamoto" />
  <meta
    property="og:description"
    content="Personal website for Noah Yamamoto, frontend developer and aspiring entropy deccelerator."
  />
  <meta property="og:image" content="%sveltekit.assets%/favicon-512x512.png" />

  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="%sveltekit.assets%/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="%sveltekit.assets%/favicon-16x16.png"
  />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div>
  <Canvas />
  <main class="main">
    <div class="profileImgContainer">
      <img
        src={profilePicUrl}
        class="profileImg"
        alt="Profile pic of Noah Yamamoto"
      />
    </div>
    <header>
      <h1 class="introContainerText">Hi there, I&apos;m</h1>
      <span class="fancyGradient">
        <h1 class="fancyName introContainerText">Noah Yamamoto</h1>
      </span>
    </header>
    <div class="blurbContainer">
      <p>
        I&apos;m a frontend developer in NYC. I love making cool things on the
        web with a focus on performant, satisfying UX. Currently working at Meta
        on WhatsApp Web.
      </p>
      <FancyLink to={RESUME_LINK} newTab>Full Résumé</FancyLink>
    </div>
    <div class="socialContainer">
      <a
        href="https://instagram.com/egrodo"
        target="_blank"
        rel="noopener noreferrer"
        class="socialLink"
        tabindex="0"
      >
        <img src={instagramImgUrl} class="socialImg" alt="Instagram Link" />
      </a>
      <a
        href="https://www.linkedin.com/in/~noah"
        target="_blank"
        rel="noopener noreferrer"
        class="socialLink"
        tabindex="0"
      >
        <img src={linkedinImgUrl} class="socialImg" alt="Linkedin Link" />
      </a>
      <a
        href="https://github.com/Egrodo/"
        target="_blank"
        rel="noreferrer noopener"
        class="socialLink"
        tabindex="0"
      >
        <img src={githubImgUrl} class="socialImg" alt="Github Link" />
      </a>
    </div>
  </main>
</div>

<style>
  .main {
    text-align: center;
    position: relative;
    height: 100vh;
    top: 0;
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .profileImgContainer {
    display: block;
    width: 100%;
    padding-top: 3rem;
    margin-bottom: 1rem;
  }

  .profileImg {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  .introContainerText {
    line-height: 1.3rem;
    font-weight: 400;
    font-size: 1.3rem;
    margin: 0;
  }

  .fancyGradient {
    position: relative;
    display: inline-block;
    padding: 0.2rem;
  }

  .fancyGradient::before {
    content: "";
    position: absolute;
    padding: 0.2rem;
    top: 0.2rem;
    right: 0;
    left: 0;
    bottom: 0.2rem;
    background: linear-gradient(
      270deg,
      #27c200,
      #00a5c2,
      #000cff,
      #b200f0,
      #ff0000
    );
    background-size: 400% 400%;
    animation: gradient 7s linear infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .fancyName {
    position: relative;
  }

  .blurbContainer {
    background-color: #1f1f1f;
    border-radius: 10px;
    line-height: 1.3rem;
    font-weight: 300;
    font-size: 1rem;
    padding: 0.6rem;
    margin: 2rem 2rem 1rem 2rem;
  }

  .blurbContainer > p {
    color: #f3f3f3;
    padding: 0.3rem 0;
  }

  .socialLink {
    display: inline-block;
    padding: 0 0.5rem;
    height: 100%;
  }

  .socialImg {
    width: 2.3rem;
    height: 2.3rem;
  }

  /* Begin breakpoints */
  @media only screen and (min-width: 700px) {
    .blurbContainer {
      width: 500px;
      margin: 1.8rem auto;
    }
    .blurbContainer > p {
      padding: 0.5rem 0;
    }
  }

  @media only screen and (min-height: 900px) {
    .profileImgContainer {
      margin-bottom: 2rem;
    }
    .profileImg {
      width: 200px;
      height: 200px;
    }
    .introContainerText {
      font-size: 1.5em;
    }
    .blurbContainer {
      font-size: 18px;
      padding: 0.8rem;
    }
    .blurbContainer > p {
      padding-bottom: 0.8rem;
    }
  }

  /* End breakpoints */
</style>
