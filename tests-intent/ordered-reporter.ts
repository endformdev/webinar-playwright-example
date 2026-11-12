import type { FullConfig, Suite } from "@playwright/test/reporter";
import IntentReporter from "playwright-intent/reporter";

// Endform's local report can list a test's attempts in the order they were
// downloaded. The intent reporter reads the last attempt as the outcome, so
// put the attempts back in retry order first.
export default class OrderedIntentReporter extends IntentReporter {
	#suite: Suite | undefined;

	override onBegin(config: FullConfig, suite: Suite) {
		this.#suite = suite;
		super.onBegin(config, suite);
	}

	override async onEnd() {
		for (const test of this.#suite?.allTests() ?? []) {
			test.results.sort((a, b) => a.retry - b.retry);
		}
		await super.onEnd();
	}
}
