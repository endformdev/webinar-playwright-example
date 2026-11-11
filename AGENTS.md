<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Testing

The end-to-end suite in `tests/` runs against Vercel deployments, not a local server. Every pushed commit gets a preview deployment, and CI runs the suite against it with Endform and with plain Playwright.

- **Find the preview for a commit:** `gh api "repos/endformdev/webinar-playwright-example/deployments?sha=<sha>"` gives the deployment, and `gh api repos/endformdev/webinar-playwright-example/deployments/<id>/statuses` gives its `environment_url`. Production is https://webinar-playwright-example.vercel.app.
- **Run tests against a deployment:** set `BASE_URL`, for example `BASE_URL=<preview url> npx endform test --repeat-each 100 -g "<test name>"`. Previews are public, so no extra headers are needed.
- **Endform history:** the organization is `2G1ZCj7X`. Other repositories in that organization have tests with the same names and a `main` branch, so filter history queries by `suite.repository = webinar-playwright-example` as well as by branch.
- **One run per checkout:** `.auth/` is shared by everything in a checkout, and one run's teardown deletes another's files. To run two suites at the same time, use separate worktrees.
