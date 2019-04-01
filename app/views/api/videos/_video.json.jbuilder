json.set! video.id do 
    json.extract! video, :id, :title, :year, :description, :image_url 
    # json.image_url url_for(video.image)
end