export const fetchList = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/lists/${id}`
  })
);