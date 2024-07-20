/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, m as maybeRenderHead, e as renderSlot, f as renderHead, F as Fragment } from '../chunks/astro/server_fruuxTf9.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_ts4CPwVB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://audiotheft.com");
const $$Metas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Metas;
  const { title, description, url, socialImage, twitterImage, author } = Astro2.props;
  let subtitle = "AudioTheft";
  return renderTemplate`<!--
    Standard meta
 --><meta charset="UTF-8"><meta name="author" content="Qrius Global"><meta name="theme-color" content="#ffffff"><meta name="viewport" content="width=device-width"><meta name="msapplication-TileColor" content="#ffffff"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="your keywords" content="Add ypour keywords here"><!--
    General meta for Open Graphs
 --><meta name="title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><!---------------------
    open graph standard
---------------------><meta property="og:title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><!---------------------
     open graph Meta
---------------------><meta property="og:image"${addAttribute(Astro2.site ? `${Astro2.site}${socialImage}` : socialImage, "content")}><!---------------------
    Open Graph Twitter
 ---------------------><meta property="og:site_name"${addAttribute(title, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(Astro2.site ? `${Astro2.site}${twitterImage}` : twitterImage, "content")}><title>${title} - ${subtitle}</title>`;
}, "/home/mishal/code/audiotheft-web-streamer/src/components/seo/Metas.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://audiotheft.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title = "AudioTheft",
    description = "Sensation of serengeti",
    url,
    socialImage = "/social-preview-image.png",
    twitterImage = "/twitter-preview-image.png",
    // Assuming you have a separate image for Twitter
    author = "Qrius Global"
  } = Astro2.props;
  const sanitizedTitle = title.toLowerCase().replaceAll(" ", "-");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", ` <!-- HTML in your document's head --> <link rel="preconnect" href="https://rsms.me/"> <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> <link href="https://api.fontshare.com/v2/css?f[]=jet-brains-mono@1,2&display=swap" rel="stylesheet"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap" rel="stylesheet"> <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"><\/script>`])), renderComponent($$result, "Metas", $$Metas, { "title": title, "description": description.substring(0, 100), "url": Astro2.site ? `${Astro2.site}/${sanitizedTitle}` : `https://lexingtonthemes.com/${sanitizedTitle}`, "image": socialImage, "author": author, "twitterImage": twitterImage }));
}, "/home/mishal/code/audiotheft-web-streamer/src/components/BaseHead.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="justify-center w-full mx-auto bg-black hidden"> <div x-data="{ open: false }" class="flex flex-col w-full px-8 py-4 uppercase text-sm mx-auto md:px-12 md:items-center md:justify-between md:flex-row text-white max-w-screen-xl"> <div class="flex flex-row items-center justify-between w-full"> <a class="inline-flex items-center gap-3 font-bold tracking-tight" href="/"> <span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 44 48" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2 8.04745C23.2 6.96404 22.9478 5.89551 22.4632 4.92647C22.0444 4.08884 21.7985 3.17549 21.7401 2.24081L21.6 0L21.46 2.24073C21.4015 3.17542 21.1556 4.0888 20.7368 4.92644C20.2523 5.8955 20 6.96406 20 8.04749V39.9525C20 41.0359 20.2523 42.1045 20.7368 43.0736C21.1556 43.9112 21.4015 44.8246 21.46 45.7593L21.6 48L21.7401 45.7592C21.7985 44.8245 22.0444 43.9112 22.4632 43.0735C22.9478 42.1045 23.2 41.036 23.2 39.9525V8.04745ZM14.4632 8.12647C14.9478 9.09551 15.2 10.1641 15.2 11.2475V36.7525C15.2 37.836 14.9478 38.9045 14.4632 39.8736C14.0444 40.7112 13.7985 41.6246 13.74 42.5592L13.6 44.8L13.46 42.5592C13.4015 41.6246 13.1556 40.7112 12.7368 39.8736C12.2522 38.9045 12 37.836 12 36.7525V11.2475C12 10.1641 12.2522 9.09551 12.7368 8.12647C13.1556 7.28883 13.4015 6.37547 13.46 5.44078L13.6 3.20001L13.74 5.44078C13.7985 6.37547 14.0444 7.28883 14.4632 8.12647ZM11.2 14.4475C11.2 13.364 10.9478 12.2955 10.4632 11.3265C10.0444 10.4888 9.79847 9.57545 9.74005 8.64076L9.6 6.39999L9.45995 8.64076C9.40153 9.57545 9.15559 10.4888 8.73677 11.3265C8.25225 12.2955 8 13.364 8 14.4475V33.5525C8 34.6359 8.25225 35.7045 8.73677 36.6735C9.15559 37.5112 9.40153 38.4245 9.45995 39.3592L9.6 41.6L9.74005 39.3592C9.79847 38.4245 10.0444 37.5112 10.4632 36.6735C10.9478 35.7045 11.2 34.6359 11.2 33.5525V14.4475ZM6.46323 17.7264C6.94775 18.6955 7.2 19.764 7.2 20.8475V27.1525C7.2 28.2359 6.94775 29.3045 6.46323 30.2735C6.04441 31.1112 5.79847 32.0245 5.74005 32.9592L5.6 35.2L5.45995 32.9592C5.40153 32.0245 5.15559 31.1112 4.73677 30.2735C4.25225 29.3045 4 28.2359 4 27.1525V20.8475C4 19.764 4.25225 18.6955 4.73677 17.7264C5.15559 16.8888 5.40153 15.9754 5.45995 15.0408L5.6 12.8L5.74005 15.0408C5.79847 15.9754 6.04441 16.8888 6.46323 17.7264ZM3.19984 24L3.2 24.0475V23.9525L3.19984 24ZM0 24.0475L0.000161422 24C0.00741925 25.0672 0.259327 26.1187 0.736771 27.0735C1.15559 27.9112 1.40153 28.8245 1.45995 29.7592L1.6 32L1.74005 29.7592C1.79847 28.8245 2.04441 27.9112 2.46323 27.0735C2.94067 26.1187 3.19258 25.0672 3.19984 24C3.19258 22.9328 2.94067 21.8813 2.46323 20.9265C2.04441 20.0888 1.79847 19.1755 1.74005 18.2408L1.6 16L1.45995 18.2408C1.40153 19.1755 1.15559 20.0888 0.736771 20.9265C0.259327 21.8813 0.00741927 22.9328 0.000161422 24L0 23.9525V24.0475ZM18.4632 4.92646C18.9478 5.8955 19.2 6.96405 19.2 8.04747V39.9525C19.2 41.036 18.9478 42.1045 18.4632 43.0735C18.0444 43.9112 17.7985 44.8245 17.74 45.7592L17.6 48L17.46 45.7592C17.4015 44.8245 17.1556 43.9112 16.7368 43.0735C16.2522 42.1045 16 41.036 16 39.9525V8.04747C16 6.96405 16.2522 5.8955 16.7368 4.92646C17.1556 4.08882 17.4015 3.17545 17.46 2.24077L17.6 0L17.74 2.24077C17.7985 3.17545 18.0444 4.08882 18.4632 4.92646ZM26.4632 4.92646C26.9478 5.8955 27.2 6.96405 27.2 8.04747V39.9525C27.2 41.036 26.9478 42.1045 26.4632 43.0735C26.0444 43.9112 25.7985 44.8245 25.74 45.7592L25.6 48L25.46 45.7592C25.4015 44.8245 25.1556 43.9112 24.7368 43.0735C24.2522 42.1045 24 41.036 24 39.9525V8.04747C24 6.96405 24.2522 5.8955 24.7368 4.92646C25.1556 4.08882 25.4015 3.17545 25.46 2.24077L25.6 0L25.74 2.24077C25.7985 3.17545 26.0444 4.08882 26.4632 4.92646ZM31.2 11.2475C31.2 10.1641 30.9478 9.09551 30.4632 8.12647C30.0444 7.28883 29.7985 6.37547 29.74 5.44078L29.6 3.20001L29.46 5.44078C29.4015 6.37547 29.1556 7.28883 28.7368 8.12647C28.2522 9.09551 28 10.1641 28 11.2475V36.7525C28 37.836 28.2522 38.9045 28.7368 39.8736C29.1556 40.7112 29.4015 41.6246 29.46 42.5592L29.6 44.8L29.74 42.5592C29.7985 41.6246 30.0444 40.7112 30.4632 39.8736C30.9478 38.9045 31.2 37.836 31.2 36.7525V11.2475ZM34.4632 11.3265C34.9478 12.2955 35.2 13.364 35.2 14.4475V33.5525C35.2 34.6359 34.9478 35.7045 34.4632 36.6735C34.0444 37.5112 33.7985 38.4245 33.74 39.3592L33.6 41.6L33.46 39.3592C33.4015 38.4245 33.1556 37.5112 32.7368 36.6735C32.2523 35.7045 32 34.6359 32 33.5525V14.4475C32 13.364 32.2523 12.2955 32.7368 11.3265C33.1556 10.4888 33.4015 9.57545 33.46 8.64076L33.6 6.39999L33.74 8.64076C33.7985 9.57545 34.0444 10.4888 34.4632 11.3265ZM39.2 20.8475C39.2 19.764 38.9478 18.6955 38.4632 17.7264C38.0444 16.8888 37.7985 15.9754 37.74 15.0408L37.6 12.8L37.46 15.0408C37.4015 15.9754 37.1556 16.8888 36.7368 17.7264C36.2523 18.6955 36 19.764 36 20.8475V27.1525C36 28.2359 36.2523 29.3045 36.7368 30.2735C37.1556 31.1112 37.4015 32.0245 37.46 32.9592L37.6 35.2L37.74 32.9592C37.7985 32.0245 38.0444 31.1112 38.4632 30.2735C38.9478 29.3045 39.2 28.2359 39.2 27.1525V20.8475ZM43.1998 24C43.1999 24.0158 43.2 24.0316 43.2 24.0475V23.9525C43.2 23.9684 43.1999 23.9842 43.1998 24ZM40.0002 24C40.0074 25.0672 40.2593 26.1187 40.7368 27.0735C41.1556 27.9112 41.4015 28.8245 41.46 29.7592L41.6 32L41.74 29.7592C41.7985 28.8245 42.0444 27.9112 42.4632 27.0735C42.9407 26.1187 43.1926 25.0672 43.1998 24C43.1926 22.9328 42.9407 21.8813 42.4632 20.9265C42.0444 20.0888 41.7985 19.1755 41.74 18.2408L41.6 16L41.46 18.2408C41.4015 19.1755 41.1556 20.0888 40.7368 20.9265C40.2593 21.8813 40.0074 22.9328 40.0002 24ZM40.0002 24C40.0001 23.9842 40 23.9684 40 23.9525V24.0475C40 24.0316 40.0001 24.0158 40.0002 24Z" class="ccustom" fill="currentColor"></path> </svg></span> <span>Streamer</span> </a> <a class="hover:text-white focus:outline-none focus:shadow-none focus:text-white/90" href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/f50206e4-c120-45bd-aa1e-22681509cdd4">About Streamer
</a> </div> </div> </div>`;
}, "/home/mishal/code/audiotheft-web-streamer/src/components/global/Navigation.astro", void 0);

const $$Astro = createAstro("https://audiotheft.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="px-8 py-12 mx-auto md:px-12 max-w-screen-xl lg:py-12 text-white"> <div class="grid grid-cols-2 lg:grid-cols-3 gap-6"> <div class="grid grid-cols-2 lg:grid-cols-2 max-w-xl gap-2 gap-y-12"> <div class="mt-12 md:mt-0"> <h3 class="text-sm font-medium font-serif uppercase tracking-wide">
Studio
</h3> <ul role="list" class="mt-4 space-y-2 text-sm"> <li> <a href="https://www.monomod.studio" class="text-zinc-500 hover:">
Monomod
</a> </li> </ul> </div> <div> <h3 class="text-sm font-medium font-serif uppercase tracking-wide">
Stay updated
</h3> <ul role="list" class="mt-4 space-y-2 text-sm"> <li> <a href="https://www.lexingtonthemes.com/license" class="text-zinc-500 hover:">
License
</a> </li> <li> <a href="https://www.lexingtonthemes.com/documentation" class="text-zinc-500 hover:">
Documentation
</a> </li> </ul> </div> <div class="mt-12 md:mt-0"> <h3 class="text-sm font-medium font-serif uppercase tracking-wide">
Socials
</h3> <ul role="list" class="mt-4 space-y-2 text-sm"> <li> <a href="https://twitter.com/lexingtonthemes" class="text-zinc-500 hover:">
@lexingtonthemes
</a> </li> <li> <a href="https://twitter.com/Mike_Andreuzza" class="text-zinc-500 hover:">
@Mike_Andreuzza
</a> </li> </ul> </div> <div class="mt-12 md:mt-0"> <h3 class="text-sm font-medium font-serif uppercase tracking-wide">
More themes
</h3> <ul role="list" class="mt-4 space-y-2 text-sm"> <li> <a href="https://www.lexingtonthemes.com/" class="text-zinc-500 hover:">
Lexington Themes
</a> </li> </ul> </div> </div> <div class="gap-x-8 gap-y-6 lg:col-span-2 text-zinc-500 font-light uppercase"> <p class="lg:col-span-2 md:text-base xl:text-2xl">
© 2023 Lexington Themes. All rights reserved. Lexington Themes is not
          affiliated with Astro or Tailwind Labs team, nor is it endorsed by or
          sponsored by this ones.
<br> <br>
A side project by <a href="https://michaelandreuzza.com/" class="underline hover:text-white duration-300">Michael Andreuzza</a> This website was built with Astro &amp; Tailwind. Crafted in Åland
          Islands, Finland.
</p> </div> </div> <svg class="-mb-[0.3rem] lg:-mb-[8rem] text-white mt-12 lg:mt-64" viewBox="0 0 490 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1465_3)"> <path d="M5.70273 40.2564C5.70273 44.7536 6.79227 48.1845 8.97136 50.5491C11.1968 52.9136 13.9091 54.0959 17.1082 54.0959C20.3073 54.0959 22.9268 53.3309 24.9668 51.8009C27.0068 50.2245 28.0268 47.7673 28.0268 44.4291C28.0268 41.4155 26.4273 38.7264 23.2282 36.3618C21.8373 35.3418 20.2841 34.345 18.5686 33.3714C16.8532 32.3514 15.1377 31.3082 13.4223 30.2418C11.7068 29.1755 10.1536 28.0627 8.76273 26.9036C5.56364 24.2145 3.96409 21.085 3.96409 17.515C3.96409 13.8986 5.26227 11.0241 7.85864 8.89136C10.5014 6.75863 13.9786 5.69227 18.2905 5.69227C22.6486 5.69227 26.6823 6.64272 30.3914 8.54363C30.3914 10.8618 30.0436 14.8491 29.3482 20.5055L28.305 20.2273C28.305 15.8691 27.2386 12.6236 25.1059 10.4909C22.9732 8.31181 20.5159 7.22227 17.7341 7.22227C14.9986 7.22227 12.7964 8.03363 11.1273 9.65636C9.45818 11.2327 8.62364 13.1105 8.62364 15.2895C8.62364 17.4686 9.20318 19.3464 10.3623 20.9227C11.5677 22.4527 13.0514 23.7277 14.8132 24.7477C16.6214 25.7677 18.5686 26.9036 20.655 28.1555C22.7414 29.3609 24.6655 30.5664 26.4273 31.7718C28.2355 32.9309 29.7191 34.4609 30.8782 36.3618C32.0836 38.2627 32.6864 40.3955 32.6864 42.76C32.6864 47.0255 31.1564 50.2477 28.0964 52.4268C25.0827 54.6059 21.4432 55.6955 17.1777 55.6955C14.8132 55.6955 12.3791 55.3245 9.87546 54.5827C7.41818 53.8409 5.40136 52.7514 3.825 51.3141C3.825 48.3468 4.10318 44.5914 4.65955 40.0477L5.70273 40.2564ZM54.9681 6.31818H95.0263V16.3327L94.3308 16.1936C94.3308 10.5373 88.7208 7.70909 77.5008 7.70909V39.2827C77.5008 46.1445 77.8949 50.3173 78.6831 51.8009C78.9613 52.3573 79.4481 52.8441 80.1435 53.2614C80.839 53.6786 81.5808 53.9336 82.369 54.0264C83.1572 54.1191 84.2467 54.1655 85.6376 54.1655L85.7767 55H64.3567L64.4958 54.1655C65.8867 54.1655 66.9763 54.1423 67.7644 54.0959C68.599 54.0032 69.3408 53.725 69.9899 53.2614C70.6854 52.7977 71.1722 52.3109 71.4504 51.8009C71.7749 51.2909 72.0531 50.3868 72.2849 49.0886C72.5167 47.5123 72.6326 44.2436 72.6326 39.2827V7.70909C61.4126 7.70909 55.8026 10.5373 55.8026 16.1936L54.9681 16.3327V6.31818ZM152.502 55C151.343 55 150.184 54.4205 149.025 53.2614C147.912 52.0559 146.892 50.5723 145.964 48.8105C145.084 47.0486 144.04 45.1477 142.835 43.1077C141.63 41.0214 140.424 39.0741 139.219 37.2659C138.013 35.4577 136.483 33.9277 134.629 32.6759C132.774 31.4241 130.804 30.7518 128.717 30.6591V39.2827C128.717 44.29 128.856 47.6977 129.134 49.5059C129.459 51.2677 129.899 52.3805 130.456 52.8441C131.569 53.725 133.284 54.1655 135.602 54.1655L135.741 55H117.103L117.242 54.1655C119.514 54.1655 121.183 53.7482 122.249 52.9136C123.13 52.2182 123.64 49.9464 123.779 46.0982C123.872 44.5682 123.919 42.2964 123.919 39.2827V21.6877C123.919 16.5414 123.779 13.1336 123.501 11.4645C123.223 9.79545 122.806 8.75227 122.249 8.335C121.183 7.54682 119.514 7.15272 117.242 7.15272L117.103 6.31818H133.238C144.921 6.31818 150.763 10.2591 150.763 18.1409C150.763 21.5255 149.558 24.3768 147.147 26.695C144.782 28.9668 141.908 30.2882 138.523 30.6591C141.908 32.6527 145.037 36.3155 147.912 41.6473C149.025 43.7336 150.207 45.7273 151.459 47.6282C154.194 51.9864 157.718 54.1655 162.029 54.1655L162.169 55H152.502ZM128.717 7.91772V29.2682H133.099C136.622 29.2682 139.543 28.3641 141.861 26.5559C144.18 24.7477 145.339 22.0586 145.339 18.4886C145.339 11.4414 141.305 7.91772 133.238 7.91772H128.717ZM214.633 55H179.582L179.721 54.1655C182.039 54.1655 183.732 53.725 184.798 52.8441C185.957 51.8705 186.537 47.35 186.537 39.2827V22.0355C186.537 17.0745 186.374 13.69 186.05 11.8818C185.772 10.0273 185.354 8.86818 184.798 8.40454C183.732 7.52363 182.039 7.08318 179.721 7.08318L179.582 6.31818H212.06V16.3327L211.225 16.1936C211.225 13.0873 209.579 10.9314 206.288 9.72591C203.042 8.52045 198.058 7.91772 191.335 7.91772V29.8245C195.786 29.8245 198.985 29.5927 200.933 29.1291C202.88 28.6655 204.132 27.97 204.688 27.0427C205.244 26.0691 205.523 24.4695 205.523 22.2441L206.288 22.105V39.0045L205.523 38.8655C205.523 36.5936 205.244 34.9941 204.688 34.0668C204.132 33.1395 202.88 32.4673 200.933 32.05C198.985 31.5864 195.786 31.3545 191.335 31.3545V40.3259C191.335 45.2405 191.498 48.5091 191.822 50.1318C192.193 51.7545 192.981 52.8441 194.187 53.4005C207.261 53.4005 213.798 50.6186 213.798 45.055L214.633 44.9159V55ZM267.155 54.1655C268.916 54.1655 270.145 54.0264 270.84 53.7482C271.582 53.47 271.953 52.7514 271.953 51.5923C271.953 50.4332 270.725 46.4923 268.267 39.7695H247.056C245.062 45.6577 244.065 49.3668 244.065 50.8968C244.065 52.3805 244.436 53.3077 245.178 53.6786C245.966 54.0032 247.357 54.1655 249.351 54.1655L249.49 55H233.842L233.981 54.1655C235.326 54.1655 236.369 54.0495 237.111 53.8177C237.899 53.5859 238.734 52.9832 239.615 52.0095C240.542 50.9895 241.423 49.5291 242.257 47.6282C243.092 45.7273 244.089 43.0614 245.248 39.6305L251.437 21.7573C253.616 15.4518 254.706 11.6268 254.706 10.2823C254.706 8.93772 254.381 8.08 253.732 7.70909C253.083 7.29182 251.831 7.08318 249.977 7.08318L249.838 6.31818H261.313L273.622 39.6305C275.709 45.1477 277.1 48.6482 277.795 50.1318C278.537 51.6155 279.232 52.5659 279.881 52.9832C281.04 53.7714 282.501 54.1655 284.263 54.1655L284.402 55H267.015L267.155 54.1655ZM257.418 10.0736L247.612 38.1005H267.711L257.418 10.0736ZM356.609 22.0355V39.2827C356.609 44.2436 356.748 47.6282 357.026 49.4364C357.351 51.2445 357.791 52.3805 358.348 52.8441C359.414 53.725 361.106 54.1655 363.424 54.1655L363.564 55H344.925L345.064 54.1655C347.336 54.1655 349.005 53.7482 350.072 52.9136C350.953 52.2182 351.463 49.9464 351.602 46.0982C351.694 44.5682 351.741 42.2964 351.741 39.2827V9.865L332.268 54.3045L312.169 16.6805V39.1436C312.169 43.78 312.378 47.1414 312.795 49.2277C313.259 51.2677 313.978 52.6123 314.951 53.2614C315.925 53.8641 317.548 54.1655 319.819 54.1655L319.959 55H302.85L302.989 54.1655C304.705 54.1655 305.98 54.0495 306.814 53.8177C307.695 53.5395 308.437 52.8441 309.04 51.7314C309.643 50.6186 310.014 49.135 310.153 47.2805C310.338 45.4259 310.431 42.7136 310.431 39.1436V22.105C310.431 18.535 310.338 15.8227 310.153 13.9682C310.014 12.1136 309.643 10.63 309.04 9.51727C308.437 8.40454 307.695 7.73227 306.814 7.50045C305.98 7.22227 304.705 7.08318 302.989 7.08318L302.85 6.31818H312.169L333.659 46.8632L351.393 6.31818H363.564L363.424 7.08318C361.106 7.08318 359.414 7.52363 358.348 8.40454C357.189 9.37818 356.609 13.9218 356.609 22.0355ZM422.93 55H387.879L388.018 54.1655C390.336 54.1655 392.028 53.725 393.095 52.8441C394.254 51.8705 394.833 47.35 394.833 39.2827V22.0355C394.833 17.0745 394.671 13.69 394.347 11.8818C394.068 10.0273 393.651 8.86818 393.095 8.40454C392.028 7.52363 390.336 7.08318 388.018 7.08318L387.879 6.31818H420.357V16.3327L419.522 16.1936C419.522 13.0873 417.876 10.9314 414.584 9.72591C411.339 8.52045 406.355 7.91772 399.632 7.91772V29.8245C404.083 29.8245 407.282 29.5927 409.229 29.1291C411.177 28.6655 412.428 27.97 412.985 27.0427C413.541 26.0691 413.819 24.4695 413.819 22.2441L414.584 22.105V39.0045L413.819 38.8655C413.819 36.5936 413.541 34.9941 412.985 34.0668C412.428 33.1395 411.177 32.4673 409.229 32.05C407.282 31.5864 404.083 31.3545 399.632 31.3545V40.3259C399.632 45.2405 399.794 48.5091 400.119 50.1318C400.49 51.7545 401.278 52.8441 402.483 53.4005C415.558 53.4005 422.095 50.6186 422.095 45.055L422.93 44.9159V55ZM483.658 55C482.499 55 481.339 54.4205 480.18 53.2614C479.068 52.0559 478.048 50.5723 477.12 48.8105C476.239 47.0486 475.196 45.1477 473.991 43.1077C472.785 41.0214 471.58 39.0741 470.374 37.2659C469.169 35.4577 467.639 33.9277 465.784 32.6759C463.93 31.4241 461.959 30.7518 459.873 30.6591V39.2827C459.873 44.29 460.012 47.6977 460.29 49.5059C460.615 51.2677 461.055 52.3805 461.612 52.8441C462.724 53.725 464.44 54.1655 466.758 54.1655L466.897 55H448.259L448.398 54.1655C450.67 54.1655 452.339 53.7482 453.405 52.9136C454.286 52.2182 454.796 49.9464 454.935 46.0982C455.028 44.5682 455.074 42.2964 455.074 39.2827V21.6877C455.074 16.5414 454.935 13.1336 454.657 11.4645C454.379 9.79545 453.962 8.75227 453.405 8.335C452.339 7.54682 450.67 7.15272 448.398 7.15272L448.259 6.31818H464.394C476.077 6.31818 481.919 10.2591 481.919 18.1409C481.919 21.5255 480.714 24.3768 478.303 26.695C475.938 28.9668 473.064 30.2882 469.679 30.6591C473.064 32.6527 476.193 36.3155 479.068 41.6473C480.18 43.7336 481.363 45.7273 482.614 47.6282C485.35 51.9864 488.874 54.1655 493.185 54.1655L493.324 55H483.658ZM459.873 7.91772V29.2682H464.254C467.778 29.2682 470.699 28.3641 473.017 26.5559C475.335 24.7477 476.494 22.0586 476.494 18.4886C476.494 11.4414 472.461 7.91772 464.394 7.91772H459.873Z" fill="currentColor"></path> </g> <defs> <clipPath id="clip0_1465_3"> <rect width="490" height="56" fill="white"></rect> </clipPath> </defs> </svg> </div> </footer>`;
}, "/home/mishal/code/audiotheft-web-streamer/src/components/global/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="bg-black"> ', " ", " ", ' <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, {}), renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/mishal/code/audiotheft-web-streamer/src/layouts/BaseLayout.astro", void 0);

const heroPic = new Proxy({"src":"/_astro/portraitpic1.Ctl3wdv3.webp","width":5504,"height":8256,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/mishal/code/audiotheft-web-streamer/src/assets/portraitpic1.webp";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8"> <div class="px-8 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"> <div class="mx-auto max-w-lg lg:mx-0"> <a class="inline-flex items-center gap-3 font-light tracking-tight text-white" href="/"> <!-- Insert audiotheft logo here --> <span>AudioTheft</span> </a> <p class="mt-8 text-4xl font-light lg:text-6xl text-balance tracking-tight text-white uppercase font-serif">
Lorem ipsum
</p> <p class="mt-6 text-lg leading-8 font-light lg:text-xl text-zinc-400">
Lorem Ipsum
</p> </div> </div> <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"> ${renderComponent($$result, "Image", $$Image, { "src": heroPic, "alt": "hero pic", "class": "aspect-[3/2] w-full bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" })} <!-- <img
        src={heroPic.src}
        alt="hero pic"
        class="aspect-[3/2] w-full bg-black object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
      /> --> </div> </div> </div>`;
}, "/home/mishal/code/audiotheft-web-streamer/src/components/landing/Hero.astro", void 0);

const one = {
  title: "Unearthing History",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
  episode: "Episode 1",
  description: "Join us in exploring the depths of inner adventures and the intricacies of the human mind and emotions.",
  date: " February 24, 2022",
  audio: ""
};
const two = {
  title: "Mysteries Explored",
  image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  episode: "Episode 2",
  description: "Unveil captivating conversations with insightful guests who share their unique perspectives and life stories.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const three = {
  title: "Creative Sparks",
  image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  episode: "Episode 3",
  description: "Join us as we dig into the past to uncover forgotten tales and historical gems that shape our present.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const four = {
  title: "Journey of Discovery",
  image: "https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80",
  episode: "Episode 4",
  description: "In this episode, we delve into enigmatic phenomena and puzzling questions, exploring the mysteries that intrigue us.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const five = {
  title: "Conversations Unveiled",
  image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
  episode: "Episode 5",
  description: "Discover the sparks of creativity that fuel artistic minds as we talk to innovative thinkers from various fields.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const six = {
  title: "Adventures Within",
  image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80",
  episode: "Episode ",
  description: "Embark on a journey of self-discovery and exploration as we discuss personal growth and transformative experiences.",
  date: " February 24, 2022",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const bytitle = {
  one,
  two,
  three,
  four,
  five,
  six
};
const episodes = Object.values(bytitle);

const $$RecentEpisodes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="border-y border-zinc-800"> <div class="py-12 max-w-screen-xl mx-auto px-8 md:px-12"> <div class="divide-y divide-zinc-900 mx-auto"> ${episodes.map((template) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <article class="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-4 gap-12"> <div> <img class="aspect-square object-cover object-center grayscale"${addAttribute(template.image, "src")}${addAttribute(template.title, "alt")}> </div> <div class="flex flex-col items-start md:col-span-3 justify-between"> <time datetime="2022-02-24T00:00:00.000Z" class="order-first font-mono text-sm leading-7 text-zinc-500"> ${template.date} </time> <div> <p class="mt-8 text-xl lg:text-6xl leading-7 text-white font-serif uppercase"> ${template.title} </p> <h2 class="mt-2 text-lg font-light text-zinc-500 lg:text-2xl"> ${template.description} </h2> <div x-data="{ open: false }" class="w-full mt-12"> <span x-on:click="open = true"> <button type="button" class="flex justify-between items-center gap-x-3 text-sm font-light leading-6 text-white hover:text-zinc-500 duration-300 active:text-zinc-300"> <span><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 32 32"><path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28ZM8 6.69v18.62L24.925 16Z"></path></svg></span>
Listen episode
</button> </span> <div x-show="open" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title-1" style="display: none;"> <div x-show="open" x-transition.opacity="" class="fixed inset-0 bg-black bg-opacity-50" style="display: none;"></div> <div x-show="open" x-transition="" x-on:click="open = false" class="relative flex min-h-screen items-center justify-center" style="display: none;"> <div x-on:click.stop="" x-trap.noscroll.inert="open"> <button x-on:click="open = false" class="absolute top-8 right-5 border border-zinc-800 p-1 hover:text-accent-600 duration-200 focus:text-white text-white cursor-pointer"> <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 32 32"> <path fill="currentColor" d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"></path> </svg> </button> <div class="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120"> <div class="flex items-center gap-6 bg-black/90 px-4 py-4 shadow shadow-zinc-200/80 ring-1 ring-zinc-900/5 backdrop-blur-sm md:px-6"> <audio controls="" class="w-full"> <source src="https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3" type="audio/mpeg"> </audio> </div> </div> </div> </div> </div> </div> </div> </div> </article> ` })}`)} </div> </div></section>`;
}, "/home/mishal/code/audiotheft-web-streamer/src/components/landing/RecentEpisodes.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "RecentEpisodes", $$RecentEpisodes, {})} ` })}`;
}, "/home/mishal/code/audiotheft-web-streamer/src/pages/index.astro", void 0);

const $$file = "/home/mishal/code/audiotheft-web-streamer/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
