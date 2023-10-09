import { findNetworkEndpoint } from "..";

describe("findNetworkEndpoint", () => {
  it("should return the correct endpoint when given a valid start node and valid from and to arrays", () => {
    const startNodeId = 1;
    const fromIds = [1, 2, 3];
    const toIds = [2, 3, 4];
    const expectedEndpoint = 4;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  // Returns the correct endpoint when given a start node that is already an endpoint.
  it("should return the correct endpoint when given a start node that is already an endpoint", () => {
    const startNodeId = 4;
    const fromIds = [1, 2, 3];
    const toIds = [2, 3, 4];
    const expectedEndpoint = 4;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  // Returns the correct endpoint when given a start node that is not in the from array but is in the to array.
  it("should return the correct endpoint when given a start node that is not in the from array but is in the to array", () => {
    const startNodeId = 4;
    const fromIds = [1, 2, 3];
    const toIds = [2, 3, 4];
    const expectedEndpoint = 4;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  // Returns the correct endpoint when given a start node that is not in the from or to arrays.
  it("should return the correct endpoint when given a start node that is not in the from or to arrays", () => {
    const startNodeId = 5;
    const fromIds = [1, 2, 3];
    const toIds = [2, 3, 4];
    const expectedEndpoint = 5;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  // Returns the correct endpoint when given empty from and to arrays.
  it("should return the correct endpoint when given empty from and to arrays", () => {
    const startNodeId = 1;
    const fromIds: number[] = [];
    const toIds: number[] = [];
    const expectedEndpoint = 1;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  // Returns the correct endpoint when given from and to arrays with duplicate values.
  it("should return the correct endpoint when given from and to arrays with duplicate values", () => {
    const startNodeId = 1;
    const fromIds = [1, 2, 3, 1];
    const toIds = [2, 3, 4, 4];
    const expectedEndpoint = 4;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("simple network", () => {
    const startNodeId = 6;
    const fromIds = [4, 9, 6, 1];
    const toIds = [9, 5, 1, 4];
    const expectedEndpoint = 5;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("simple loop", () => {
    const startNodeId = 9;
    const fromIds = [11, 7, 10, 9, 8, 4, 1];
    const toIds = [1, 10, 11, 10, 11, 8, 4];
    const expectedEndpoint = 8;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("large network", () => {
    const startNodeId = 0;
    const fromIds = Array.from({ length: 1000 }, (_, i) => i);
    const toIds = Array.from({ length: 1000 }, (_, i) => i + 1);
    const expectedEndpoint = 1000;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("network tree", () => {
    const startNodeId = 0;
    const fromIds = [10, 8, 9, 3, 7, 1, 2, 6, 4, 0, 12];
    const toIds = [9, 9, 3, 5, 3, 7, 5, 2, 2, 4, 4];
    const expectedEndpoint = 5;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("Circle", () => {
    const startNodeId = 500;
    const fromIds = [100, 200, 300, 500, 900];
    const toIds = [500, 900, 200, 300, 100];
    const expectedEndpoint = 100;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });

  it("disjoint networks", () => {
    const startNodeId = 1;
    const fromIds = [4, 9, 6, 1, 100, 200, 300, 500, 900];
    const toIds = [9, 5, 1, 4, 500, 900, 200, 300, 100];
    const expectedEndpoint = 5;

    const result = findNetworkEndpoint(startNodeId, fromIds, toIds);

    expect(result).toBe(expectedEndpoint);
  });
});
