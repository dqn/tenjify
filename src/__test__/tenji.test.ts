import path from "path";
import { tenjify } from "./../tenji";

describe("tenjify", () => {
  it("test", async () => {
    await tenjify(path.resolve(__dirname, "./foo.png"));
  });
});
