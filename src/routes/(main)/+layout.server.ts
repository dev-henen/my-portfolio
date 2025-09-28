import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
  const myEmail = "henen.dev@gmail.com";
  const theme = cookies.get("theme") || "dark";

  const startYear = 2022; // year i started working
  const years = getExperienceYears(startYear);

  return {
    myEmail,
    numberOfWOrkYears: years,
    theme,
  };
};

function getExperienceYears(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return Math.max(0, currentYear - startYear);
}
