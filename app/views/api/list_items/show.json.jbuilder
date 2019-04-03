json.extract! @list_item, :id, :video_id, :list_id
json.video do
    json.partial! 'api/videos/video', video: @list_item.video
end