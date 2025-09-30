export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hasia.ai";

// For GitHub Pages project sites, base path is the repo name
export const PATH_PREFIX: string = (() => {
  try {
    const url = new URL(SITE_URL);
    // If custom domain is used (non github.io), no base path
    if (!url.hostname.endsWith("github.io")) return "";
    return url.pathname.replace(/\/$/, "");
  } catch {
    return "";
  }
})();
