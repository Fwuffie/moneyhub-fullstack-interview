const csv = require("../src/lib/csv")

test('Generate CSV From Arrays', () => {
    testHeaders = ["1", "2", "3", "4", "5"]
    testData = [["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]]

    expect(csv.generateCSV(testData, testHeaders)).toBe("1,2,3,4,5\n1,2,3,4,5\n1,2,3,4,5\n1,2,3,4,5\n");
});  