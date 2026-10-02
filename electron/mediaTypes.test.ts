import { describe, expect, it } from "vitest";
import { getMediaContentType, isSupportedLocalMediaPath } from "./mediaTypes";

describe("media types", () => {
	it("allows macOS mic and system audio sidecars", () => {
		for (const sidecar of ["recording-1.mic.m4a", "recording-1.system.m4a"]) {
			expect(isSupportedLocalMediaPath(`/recordings/${sidecar}`)).toBe(true);
			expect(getMediaContentType(`/recordings/${sidecar}`)).toBe("audio/mp4");
		}
	});
});
