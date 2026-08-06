import type { NextConfig } from "next";

/**
 * Security headers applied to every request.
 *
 * These headers help protect against common web attacks while
 * following modern browser security best practices.
 */
const securityHeaders = [
  /**
   * Allows DNS prefetching for improved performance.
   */
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  /**
   * Prevents clickjacking by disallowing the site
   * from being embedded inside iframes.
   */
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  /**
   * Prevents browsers from MIME-sniffing a response
   * away from the declared content type.
   */
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  /**
   * Controls how much referrer information is shared.
   */
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  /**
   * Isolates this browsing context from cross-origin pages.
   * Helps mitigate certain cross-origin attacks.
   */
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },

  /**
   * Forces browsers to use HTTPS for future requests.
   *
   * We intentionally omit "preload" for now until we're
   * certain every present and future subdomain will always
   * support HTTPS.
   */
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },

  /**
   * Restricts access to powerful browser APIs.
   */
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "gyroscope=()",
      "magnetometer=()",
      "payment=()",
      "usb=()",
      "fullscreen=(self)",
    ].join(", "),
  },

  /**
   * Content Security Policy.
   *
   * NOTE:
   * We intentionally keep the current script policy until
   * we perform dedicated production testing. Removing
   * 'unsafe-eval' prematurely could break future framework
   * behavior or third-party integrations.
   */
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      object-src 'none';
      img-src 'self' data: blob:;
      font-src 'self' data:;
      style-src 'self' 'unsafe-inline';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      connect-src 'self';
      upgrade-insecure-requests;
    `
      .replace(/\n/g, "")
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
];

const nextConfig: NextConfig = {
  /**
   * Enables additional React runtime checks during development.
   */
  reactStrictMode: true,

  /**
   * Removes the X-Powered-By header.
   */
  poweredByHeader: false,

  /**
   * Apply security headers to every route.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;