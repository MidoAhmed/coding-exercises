import { solve } from ".";

describe("distributeBoxesEvenly", () => {
  // Return "PLACE" if boxInClaw is true and boxes[clawPos] < avgBoxesPerStack
  it('should return "PLACE" when boxInClaw is true and boxes[clawPos] < avgBoxesPerStack', () => {
    const clawPos = 0;
    const boxes = [2, 3, 3];
    const boxInClaw = true;

    const result = solve(clawPos, boxes, boxInClaw);

    expect(result).toBe("PLACE");
  });

  it('should return "PICK" when boxInClaw is false and boxes[clawPos] > avgBoxesPerStack', () => {
    const clawPos = 2;
    const boxes = [2, 3, 4];
    const boxInClaw = false;

    const result = solve(clawPos, boxes, boxInClaw);

    expect(result).toBe("PICK");
  });

  it('should return "RIGHT" when boxes[clawPos] === avgBoxesPerStack and indexExcessedStack > clawPos', () => {
    const clawPos = 1;
    const boxes = [2, 3, 4];
    const boxInClaw = false;

    const result = solve(clawPos, boxes, boxInClaw);

    expect(result).toBe("RIGHT");
  });

  it('should return "LEFT" when boxes[clawPos] === avgBoxesPerStack and indexNonCompleteStack < clawPos', () => {
    const clawPos = 1;
    const boxes = [2, 3, 3];
    const boxInClaw = true;

    const result = solve(clawPos, boxes, boxInClaw);

    expect(result).toBe("LEFT");
  });

  it('should return the expected ["PICK", "RIGHT", "PLACE"] ', () => {
    let clawPos = 0;
    const boxes = [3, 1, 2, 2];
    let boxInClaw = false;

    const result = [];
    const avgBoxesPerStack = 2;

    while (
      boxes.some((stackBoxes) => stackBoxes !== avgBoxesPerStack) &&
      result.length < 200
    ) {
      const action = solve(clawPos, boxes, boxInClaw);

      if (!["PICK", "RIGHT", "LEFT", "PLACE"].includes(action)) {
        break;
      } else if (action === "PICK") {
        boxInClaw = true;
        boxes[clawPos] -= 1;
      } else if (action === "PLACE") {
        boxInClaw = false;
        boxes[clawPos] += 1;
      } else if (action === "RIGHT") {
        clawPos += 1;
      } else if (action === "LEFT") {
        clawPos -= 1;
      }

      result.push(action);
    }
    const expected = ["PICK", "RIGHT", "PLACE"];

    expect(result).toEqual(expected);
  });

  it("should result final be one box in each stack", () => {
    let clawPos = 0;
    const boxes = [1, 0, 3, 0, 0, 1, 2];
    let boxInClaw = false;

    const result = [];
    const avgBoxesPerStack = 1;

    while (
      boxes.some((stackBoxes) => stackBoxes !== avgBoxesPerStack) &&
      result.length < 200
    ) {
      const action = solve(clawPos, boxes, boxInClaw);

      if (!["PICK", "RIGHT", "LEFT", "PLACE"].includes(action)) {
        break;
      } else if (action === "PICK") {
        boxInClaw = true;
        boxes[clawPos] -= 1;
      } else if (action === "PLACE") {
        boxInClaw = false;
        boxes[clawPos] += 1;
      } else if (action === "RIGHT") {
        clawPos += 1;
      } else if (action === "LEFT") {
        clawPos -= 1;
      }

      result.push(action);
    }
    const expected = [
      "RIGHT",
      "RIGHT",
      "PICK",
      "LEFT",
      "PLACE",
      "RIGHT",
      "PICK",
      "RIGHT",
      "PLACE",
      "RIGHT",
      "RIGHT",
      "RIGHT",
      "PICK",
      "LEFT",
      "LEFT",
      "PLACE",
    ];

    expect(result).toEqual(expected);
  });

  it("should result final be 3 boxes in each stack", () => {
    let clawPos = 0;
    const boxes = [4, 2, 3, 4, 3, 2];
    let boxInClaw = false;

    const result = [];
    const avgBoxesPerStack = 3;

    while (
      boxes.some((stackBoxes) => stackBoxes !== avgBoxesPerStack) &&
      result.length < 200
    ) {
      const action = solve(clawPos, boxes, boxInClaw);

      if (!["PICK", "RIGHT", "LEFT", "PLACE"].includes(action)) {
        break;
      } else if (action === "PICK") {
        boxInClaw = true;
        boxes[clawPos] -= 1;
      } else if (action === "PLACE") {
        boxInClaw = false;
        boxes[clawPos] += 1;
      } else if (action === "RIGHT") {
        clawPos += 1;
      } else if (action === "LEFT") {
        clawPos -= 1;
      }

      result.push(action);
    }
    const expected = [
      "PICK",
      "RIGHT",
      "PLACE",
      "RIGHT",
      "RIGHT",
      "PICK",
      "RIGHT",
      "RIGHT",
      "PLACE",
    ];

    expect(result).toEqual(expected);
  });

  it("should result final be 2 boxes in each stack", () => {
    let clawPos = 6;
    const boxes = [2, 2, 2, 1, 3, 0, 4, 2];
    let boxInClaw = false;

    const result = [];
    const avgBoxesPerStack = 2;

    while (
      boxes.some((stackBoxes) => stackBoxes !== avgBoxesPerStack) &&
      result.length < 200
    ) {
      const action = solve(clawPos, boxes, boxInClaw);

      if (!["PICK", "RIGHT", "LEFT", "PLACE"].includes(action)) {
        break;
      } else if (action === "PICK") {
        boxInClaw = true;
        boxes[clawPos] -= 1;
      } else if (action === "PLACE") {
        boxInClaw = false;
        boxes[clawPos] += 1;
      } else if (action === "RIGHT") {
        clawPos += 1;
      } else if (action === "LEFT") {
        clawPos -= 1;
      }

      result.push(action);
    }
    const expected = [
      "PICK",
      "LEFT",
      "PLACE",
      "LEFT",
      "PICK",
      "LEFT",
      "PLACE",
      "RIGHT",
      "RIGHT",
      "RIGHT",
      "PICK",
      "LEFT",
      "PLACE",
    ];

    expect(result).toEqual(expected);
  });
});
