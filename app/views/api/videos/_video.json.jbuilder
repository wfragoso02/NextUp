json.set! video.id do 
    json.extract! video, :id, :title, :year, :description 
    json.image_url url_for(video.image)
end