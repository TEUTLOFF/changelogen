import { promises as fsp } from "node:fs";
import { describe, expect, test } from "vitest";
import { parseChangelogMarkdown } from "../src";

describe("markdown", () => {
  test("should parse markdown", async () => {
    const contents = await fsp.readFile(
      new URL("fixtures/CHANGELOG.md", import.meta.url),
      "utf8"
    );
    expect(parseChangelogMarkdown(contents)).toMatchInlineSnapshot(`
      {
        "releases": [
          {
            "body": "[compare changes](https://github.com/unjs/changelogen/compare/v0.4.0...v0.4.1)

      ### 🐞 Bug Fixes

      - Bump by patch by default ([7e38438](https://github.com/unjs/changelogen/commit/7e38438))",
            "version": "0.4.1",
          },
          {
            "body": "[compare changes](https://github.com/unjs/changelogen/compare/v0.3.5...v0.4.0)

      ### 🚀 Features

      - ⚠️ Resolve github usernames using \`ungh/ungh\` ([#46](https://github.com/unjs/changelogen/pull/46))

      ### 🐞 Bug Fixes

      - **markdown:** Avoid rendering \`noreply.github.com\` emails ([4871721](https://github.com/unjs/changelogen/commit/4871721))
      - Avoid rendering authors with \`[bot]\` in their name ([4f3f644](https://github.com/unjs/changelogen/commit/4f3f644))
      - Format name to avoid duplicates ([f74a988](https://github.com/unjs/changelogen/commit/f74a988))

      #### ⚠️ Breaking Changes

      - ⚠️ Resolve github usernames using \`ungh/ungh\` ([#46](https://github.com/unjs/changelogen/pull/46))",
            "version": "0.4.0",
          },
        ],
      }
    `);
  });
});
