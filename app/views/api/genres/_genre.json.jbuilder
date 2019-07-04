json.extract! genre, :id, :name, :video_ids
json.videos do 
    json.array! genre.videos do |video| 
        json.partial! 'api/videos/video', video: video
    end
end