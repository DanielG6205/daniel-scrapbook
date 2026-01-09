"use client";

import { usePathname } from "next/navigation";

export default function ProgressNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <nav className="progress-nav">
      <div className="progress-nav__inner">
        <a href="/" className="progress-nav__title">
          The Museum of Me
        </a>
        <ol className="progress-nav__track">
          <li className={isActive("/early-childhood") ? "is-active" : ""}>
            <a href="/early-childhood">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">Early Childhood</span>
            </a>
          </li>
          <li className={isActive("/elementary") ? "is-active" : ""}>
            <a href="/elementary">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">Elementary</span>
            </a>
          </li>
          <li className={isActive("/high-school") ? "is-active" : ""}>
            <a href="/high-school">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">High School</span>
            </a>
          </li>
          <li className={isActive("/media") ? "is-active" : ""}>
            <a href="/media">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">Media</span>
            </a>
          </li>
          <li className={isActive("/interview") ? "is-active" : ""}>
            <a href="/interview">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">Interview</span>
            </a>
          </li>
          <li className={isActive("/life-plan") ? "is-active" : ""}>
            <a href="/life-plan">
              <span className="progress-nav__node" />
              <span className="progress-nav__label">Life Plan</span>
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
}
