import path from "path";
import { tenjify } from "./../tenji";

describe("tenjify", () => {
  it("test", async () => {
    const src = path.resolve(__dirname, "./tenjify.png");
    const result = await tenjify(src);

    expect(result).toBe(
      "" +
        "⠀⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⡦⠰⣶⠀⢀⣶⠶⠆⠀⠀⠀⠀⠀\n" +
        "⠰⢾⣷⠶⠄⣠⡶⠶⣦⠀⢰⣦⡶⢶⣦⠀⢰⡆⢀⣶⠰⢾⣿⠶⢴⣆⠀⠀⣴⡆\n" +
        "⠀⢸⡇⠀⢰⣿⣤⣤⣾⠇⢸⡏⠀⠀⣿⠀⢸⡇⢸⣿⠀⢸⣿⠀⠀⢿⡆⣰⡟⠀\n" +
        "⠀⠸⣧⣤⡈⢿⣄⣠⣴⠆⢸⡇⠀⠀⣿⠀⢸⡇⠸⣿⠀⢸⣿⠀⠀⠈⢿⡿⠁⠀\n" +
        "⠀⠀⠈⠉⠀⠀⠈⠉⠀⠀⠈⠀⠀⠀⠁⣄⣼⡇⠀⠁⠀⠀⠁⠀⢠⣠⡾⠃⠀⠀\n" +
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀\n",
    );
  });
});
