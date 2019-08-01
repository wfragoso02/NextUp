export const createListItem = (listItem) => (
  $.ajax({
    method: "POST",
    url: "api/list_items",
    data: { listItem }
  })
);

export const deleteListItem = (data) => (
  $.ajax({
    method: "DELETE",
    url: `api/list_items/`,
    data: { data }
  })
);