import { paginate } from "./pagination";

describe("paginate", () => {
  it("paginates a limit and an offset to url query parameters", () => {
    expect(paginate(1, 2)).toBe("?limit=1&offset=2");
  });
});
