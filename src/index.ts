type Record1<K extends keyof any, T> = {
  [P in K]: T;
};
interface PageInfo {
  title: string;
}
type Page = "home" | "about" | "contact";
const x: Record1<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" },
};
