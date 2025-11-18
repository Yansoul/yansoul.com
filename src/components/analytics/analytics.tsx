import GoogleAnalytics from "./google-analytics";
import OpenPanelAnalytics from "./open-panel-analytics";
import { PlausibleAnalytics } from "./plausible-analytics";
import ClarityAnalytics from "./clarity-analytics";
import VercelAnalytics from "./vercel-analytics";
import VercelSpeedInsights from "./speed-insights";

export function Analytics() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* vercel analytics */}
      <VercelAnalytics />

      {/* vercel speed insights */}
      <VercelSpeedInsights />

      {/* openpanel analytics */}
      <OpenPanelAnalytics />

      {/* google analytics */}
      <GoogleAnalytics />

      {/* plausible analytics */}
      <PlausibleAnalytics />

      {/* microsoft clarity analytics */}
      <ClarityAnalytics />
    </>
  );
}
