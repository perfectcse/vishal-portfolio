import React from "react";

export default function ExternalLink({ href, children, className = "", ...props }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
