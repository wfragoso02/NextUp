export const fetchVideo = (id) => (
    $.ajax({
        method: "GET",
        url: `api/videos/${id}`
    })
);

export const fetchVideos = (filter) => (
    $.ajax({
        method: "GET",
        url: `api/videos`,
        data: filter
    })
);