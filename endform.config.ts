import { defineEndformConfig } from "endform";

export default defineEndformConfig({
	organizationId: "2G1ZCj7X",
	// The intent agent reads its saved steps from .intent at runtime and calls
	// the model from the runner.
	additionalFiles: [".intent/**/*"],
	environmentVariables: ["AI_GATEWAY_API_KEY"],
});
