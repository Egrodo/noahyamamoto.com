<script lang="ts">
  export let to: string;
  export let newTab: boolean;
</script>

<a
  href={to}
  class="fancyLink"
  target={newTab ? "_blank" : "_self"}
  rel={newTab ? "noopener noreferrer" : ""}
  tabIndex={0}
>
  <span class="fancyLinkText">
    <slot />
  </span>
</a>

<style>
  .fancyLink {
    font-family: "Work Sans";
    display: inline-flex;
    line-height: 25px;
  }

  .fancyLinkText {
    position: relative;
    display: inline-block;
  }

  .fancyLinkText::before,
  .fancyLinkText::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: left center;
  }

  .fancyLinkText::before {
    background: linear-gradient(135deg, #27c200, #00a5c2);
  }

  .fancyLinkText::after {
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.51, 0.92, 0.24, 1) 0.1s;
  }

  .fancyLink:hover .fancyLinkText::after,
  .fancyLink:active .fancyLinkText::after {
    transform: scaleX(1);
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
</style>
