import React, { useState } from "react";

const initials = (name) =>
  name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

// Company logo from the site's favicon. Falls back to a monogram when the
// company has no website, the logo fails to load, or it is too low-resolution.
const CompanyLogo = ({ name, url, logo, size = 48 }) => {
  const [failed, setFailed] = useState(false);
  let domain = "";
  try {
    domain = url ? new URL(url).hostname : "";
  } catch {
    domain = "";
  }
  const showImg = (logo || domain) && !failed;

  return (
    <span
      className="shrink-0 grid place-items-center overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: size / 4,
        background: showImg ? "#fff" : "var(--bg-soft)",
        border: "1px solid var(--border)",
      }}
      aria-hidden="true"
    >
      {showImg ? (
        <img
          src={logo ? `${process.env.PUBLIC_URL}${logo}` : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
          alt=""
          width={logo ? size : size * 0.62}
          height={logo ? size : size * 0.62}
          loading="lazy"
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth < 32) setFailed(true);
          }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-display font-medium" style={{ fontSize: size * 0.36, color: "var(--accent)" }}>
          {initials(name)}
        </span>
      )}
    </span>
  );
};

export default CompanyLogo;
