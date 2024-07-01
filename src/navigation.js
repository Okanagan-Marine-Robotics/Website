import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Home",
      href: "/",
    },
    // {
    //   text: "Blog",
    //   href: getPermalink("/blog"),
    // },
    // {
    //   text: "Sponsorships",
    //   href: getPermalink("/contact"),
    // },
  ],
  actions: [
    {
      text: "Join Us!",
      href: "/contact",
      icon: "fluent:people-community-20-filled",
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/okmarinedesign/",
      target: "_blank",
    },
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://ca.linkedin.com/company/okanagan-marine-design",
      target: "_blank",
    },
  ],
  footNote: `
    Made with ❤️ by <a class="text-blue-600 underline dark:text-muted" href="https://andrecox.io/">Andre Cox</a> · All rights reserved.
  `,
};
