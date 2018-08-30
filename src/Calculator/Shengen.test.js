import {SchengenCalculator} from "./Shengen";

describe("ShengenCalculator", () => {
    it("1", () => {
        const sc = new SchengenCalculator(
            [
                ["Sun Jul 1 2018 20:22:56 GMT+0300 (Moscow Standard Time)", "Sun Jul 15 2018 20:22:56 GMT+0300 (Moscow Standard Time)"]
            ]
        );

        expect(sc.countFrom()).toBe(75);
    })
});
