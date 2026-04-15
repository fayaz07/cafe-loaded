import type { MenuData } from "@/types/menu";
import fallbackMenu from "@/data/menu.json";

export async function getMenu(): Promise<MenuData> {
  const url = process.env.MENU_JSON_URL;

  if (url) {
    try {
      // Validate that it's a safe HTTP/HTTPS URL (env-configured, not user input)
      const parsed = new URL(url);
      if (!["http:", "https:"].includes(parsed.protocol)) {
        throw new Error("MENU_JSON_URL must use http or https");
      }

      const res = await fetch(url, {
        next: { revalidate: 86400 }, // ISR: revalidate once per day
      });

      if (!res.ok) {
        throw new Error(`Remote menu returned HTTP ${res.status}`);
      }

      return (await res.json()) as MenuData;
    } catch (err) {
      console.error("[cafe-loaded] Failed to load remote menu, using fallback:", err);
    }
  }

  return fallbackMenu as MenuData;
}
