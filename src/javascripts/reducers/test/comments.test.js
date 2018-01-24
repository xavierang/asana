import comments from "../comments";

test("Adding new comment", () => {
  expect(
    comments(undefined, {
      type: "ADD_COMMENT",
      id: 0,
      text: "This is a new comment",
      likes: 0
    })
  ).toEqual([
    {
      id: 0,
      text: "This is a new comment",
      likes: 0
    }
  ]);
});

test("Adding second comment", () => {
  expect(
    comments(
      [
        {
          id: 0,
          text: "This is comment 1",
          likes: 0
        }
      ],
      {
        type: "ADD_COMMENT",
        id: 1,
        text: "This is comment 2",
        likes: 0
      }
    )
  ).toEqual([
    {
      id: 0,
      text: "This is comment 1",
      likes: 0
    },
    {
      id: 1,
      text: "This is comment 2",
      likes: 0
    }
  ]);
});

test("Deleting a comment", () => {
  expect(
    comments(
      [
        {
          id: 0,
          text: "1",
          likes: 0
        },
        {
          id: 1,
          text: "2",
          likes: 0
        }
      ],
      {
        type: "DELETE_COMMENT",
        id: 1
      }
    )
  ).toEqual([
    {
      id: 0,
      text: "1",
      likes: 0
    }
  ]);
});

test("Liking a comment", () => {
  expect(
    comments(
      [
        {
          id: 0,
          text: "Test",
          likes: 0
        }
      ],
      {
        type: "LIKE_COMMENT",
        id: 0
      }
    )
  ).toEqual([
    {
      id: 0,
      text: "Test",
      likes: 1
    }
  ]);
});
