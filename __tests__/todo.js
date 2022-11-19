/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
//creating my todos
describe("mytodo testings", () => {
  beforeAll(() => {
    const date_today = new Date();
    const total_secs = 86400000;
    [
      {
        title: "mytodo 1",
        completed: false,
        dueDate: new Date(date_today.getTime() - total_secs).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "mytodo 2",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "mytodo 3",
        completed: false,
        dueDate: new Date(date_today.getTime() + total_secs).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });

  test("new todo creation", () => {
    expect(all.length).toEqual(3);
    add({
      title: "mytodo 4",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });
  //different tests to be performed
  test("marking todo to be complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("overdue items retrieval", () => {
    expect(overdue().length).toEqual(1);
  });

  test("due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("due later items", () => {
    expect(dueLater().length).toEqual(1);
  });
});
