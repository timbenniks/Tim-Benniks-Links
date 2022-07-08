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
      property: "twitter:site",
      content: "@timbenniks",
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
  <article class="mx-auto w-full mt-8 text-center" style="max-width: 332px">
    <img
      src="https://res.cloudinary.com/dwfcofnrd/image/fetch/w_200,q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png"
      width="200"
      class="w-52 rounded-full mx-auto mb-8"
    />
    <h1 class="font-black uppercase bg-red p-2 text-5xl inline-block">
      Tim Benniks
    </h1>

    <ul class="bg-blue-darker pt-4">
      <li class="border-b border-b-blue-dark pb-4 mb-4">
        <icon
          class="text-xl"
          icon="tim"
          url="https://timbenniks.dev/"
          text="timbenniks.dev"
        />
      </li>
      <li class="border-b border-b-blue-dark pb-4 mb-4">
        <icon
          class="text-xl"
          icon="twitter"
          url="https://twitter.com/timbenniks"
          text="@timbenniks"
        />
      </li>
      <li class="border-b border-b-blue-dark pb-4 mb-4">
        <icon
          class="text-xl"
          icon="linkedin"
          url="https://linkedin.com/in/timbenniks"
          text="/in/timbenniks"
        />
      </li>
      <li class="border-b border-b-blue-dark pb-4 mb-4">
        <icon
          class="text-xl"
          icon="github"
          url="https://github.com/timbenniks"
          text="timbenniks"
        />
      </li>
      <li class="border-b border-b-blue-dark pb-4 mb-4">
        <icon
          class="text-xl"
          icon="youtube"
          url="https://youtube.com/timbenniks"
          text="timbenniks"
        />
      </li>

      <li class="pb-4">
        <icon
          class="text-xl"
          icon="tim"
          url="https://timbenniks.dev/presskit"
          text="Presskit"
        />
      </li>
    </ul>
  </article>
</template>
