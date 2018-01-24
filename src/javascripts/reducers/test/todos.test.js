import todos from "../todos";

test("Adding a task to an empty todos", () => {
  expect(
    todos(undefined, {
      type: "ADD_TODO",
      id: 0,
      task: "",
      completed: false
    })
  ).toEqual([
    {
      id: 0,
      task: "",
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
          task: "",
          completed: false
        }
      ],
      {
        type: "ADD_TODO",
        id: 1,
        task: "",
        completed: false
      }
    )
  ).toEqual([
    {
      id: 0,
      task: "",
      completed: false
    },
    {
      id: 1,
      task: "",
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

test("Updating selected task", () => {
  expect(
    todos(
      [
        {
          id: 0,
          task: "",
          completed: false
        }
      ],
      {
        type: "UPDATE_TODO",
        id: 0,
        char: "1"
      }
    )
  ).toEqual([
    {
      id: 0,
      task: "1",
      completed: false
    }
  ]);
});
