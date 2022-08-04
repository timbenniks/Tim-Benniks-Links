<script lang="ts" setup>
useSchemaOrg([
  defineWebSite({
    name: "Tim Benniks Links",
  }),
  definePerson({
    name: "Tim Benniks",
    image: "/icon.png",
    sameAs: ["https://timbenniks.dev/"],
  }),
  defineWebPagePartial(),
]);

useHead({
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",

  htmlAttrs: {
    lang: "en",
  },

  link: [
    { rel: "icon", href: "/icon.png" },
    { rel: "apple-touch-icon", href: "/icon.png" },
    { rel: "manifest", href: "/manifest.json" },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#14356b",
    },
    {
      name: "description",
      content: "This page contains all links about Tim Benniks",
    },
    {
      name: "og:description",
      content: "This page contains all links about Tim Benniks",
    },
    {
      name: "twitter:description",
      content: "This page contains all links about Tim Benniks",
    },

    {
      property: "og:site_name",
      content: "Tim Benniks Links",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://links.timbenniks.dev",
    },
    {
      property: "og:title",
      content: "Tim Benniks Links",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png",
    },
    {
      property: "twitter:image",
      content:
        "https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png",
    },

    {
      property: "twitter:title",
      content: "Tim Benniks Links",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://links.timbenniks.dev/",
    },
    {
      property: "twitter:domain",
      content: "links.timbenniks.dev",
    },
    {
      property: "twitter:site",
      content: "@timbenniks",
    },
  ],
});
</script>

<template>
  <Head>
    <Style
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
    ></Style>
    <Title>Tim Benniks Links</Title>
  </Head>
  <article class="mx-auto w-full mt-8 text-center px-4">
    <img
      src="https://res.cloudinary.com/dwfcofnrd/image/fetch/w_400,q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png"
      width="400"
      height="400"
      alt="Tim Benniks"
      class="w-52 rounded-full mx-auto"
    />

    <h1
      class="font-black uppercase bg-red p-2 text-5xl inline-block relative -top-4"
    >
      Tim Benniks
    </h1>
    <p class="mb-8">
      Principal Developer Advocate at
      <a
        href="https://uniform.dev"
        target="_blank"
        rel="noopener"
        class="underline"
        >Uniform</a
      >
    </p>

    <ul class="mb-6 grid grid-cols-1 sm:grid-cols-2 max-w-md mx-auto gap-1">
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="tim"
          url="https://timbenniks.dev/"
          text="timbenniks.dev"
        />
      </li>
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="twitter"
          url="https://twitter.com/timbenniks"
          text="@timbenniks"
        />
      </li>
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="youtube"
          url="https://youtube.com/timbenniks"
          text="timbenniks"
        />
      </li>
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="linkedin"
          url="https://linkedin.com/in/timbenniks"
          text="/in/timbenniks"
        />
      </li>
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="github"
          url="https://github.com/timbenniks"
          text="timbenniks"
        />
      </li>
      <li class="bg-blue-darker p-2">
        <icon
          class="text-xl"
          icon="tim"
          url="https://presskit.timbenniks.dev/"
          text="Press kit"
        />
      </li>
    </ul>

    <p class="mb-6">
      <a
        href="https://nuxtjs.org/teams"
        target="_blank"
        rel="noopener"
        class="underline"
      >
        NuxtJS</a
      >
      Ambassador<br />

      <a
        href="https://machalliance.org"
        target="_blank"
        rel="noopener"
        class="underline"
        >MACH Alliance</a
      >
      tech council member<br />

      <a
        href="https://cloudinary.com/mde"
        target="_blank"
        rel="noopener"
        class="underline"
        >Cloudinary</a
      >
      MDE
    </p>
  </article>
</template>
