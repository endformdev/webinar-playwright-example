import { defineEndformConfig } from "endform";

export default defineEndformConfig({
	organizationId: "2G1ZCj7X",
	// The intent agent reads its saved steps from .intent at runtime and calls
	// the model from the runner. CI makes it record step changes for the
	// reporter, which commits them to the pull request.
	additionalFiles: [".intent/**/*"],
	environmentVariables: ["CI", "AI_GATEWAY_API_KEY"],
});
