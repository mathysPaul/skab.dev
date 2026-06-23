import * as React from "react"

/**
 * Outer lavender gradient + centered floating white card.
 * Wraps every page; Nav, page content and Footer are rendered inside the card.
 */
function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-app-gradient px-4 sm:px-6">
      <div className="w-full max-w-[1180px] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_90px_-34px_rgba(78,72,160,0.4),0_3px_10px_rgba(78,72,160,0.07)]">
        {children}
      </div>
    </div>
  )
}

export { SiteShell }
