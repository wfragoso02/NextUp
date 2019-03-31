export const fetchVideo = (id) => (
    $.ajax({
        method: "GET",
        url: `api/videos/${id}`
    })
);