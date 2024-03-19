import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="">
      <h1>hello world</h1>
      <h1 className={titleFont.className}>hello world</h1>
    </div>
  );
}
