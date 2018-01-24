import todos from "../todos";

test("Adding a task to an empty todos", () => {
  expect(
    todos(undefined, {
      type: "ADD_TODO",
      id: 0,
      task: "Test",
      completed: false
    })
  ).toEqual([
    {
      id: 0,
      task: "Test",
      completed: false
    }
  ]);
});

test("Adding a second task to todos", () => {
  expect(
    todos(
      [
        {
          id: 0,
          task: "Test",
          completed: false
        }
      ],
      {
        type: "ADD_TODO",
        id: 1,
        task: "Test 2.0",
        completed: false
      }
    )
  ).toEqual([
    {
      id: 0,
      task: "Test",
      completed: false
    },
    {
      id: 1,
      task: "Test 2.0",
      completed: false
    }
  ]);
});

test("Toggling the todo", () => {
  expect(
    todos(
      [
        {
          id: 0,
          task: "Test",
          completed: true
        }
      ],
      {
        type: "TOGGLE_TODO",
        id: 0
      }
    )
  ).toEqual([
    {
      id: 0,
      task: "Test",
      completed: false
    }
  ]);
});
