/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // URLs moved to mirror the reference site's structure.
  async redirects() {
    return [
      { source: "/who-we-serve/dental-groups", destination: "/dental-dsos", permanent: true },
      { source: "/who-we-serve/life-sciences", destination: "/pharma", permanent: true },
      { source: "/who-we-serve/payers", destination: "/platform/payers", permanent: true },
      { source: "/who-we-serve/:slug", destination: "/:slug", permanent: true },
      { source: "/case-studies/:slug", destination: "/case-study/:slug", permanent: true },
      { source: "/solutions/automation-teams", destination: "/solutions/rpa-automation-teams", permanent: true },
    ];
  },
};
export default nextConfig;
