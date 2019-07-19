# frozen_string_literal: true

@profiles.each do |profile|
  json.set! profile.id do
    json.partial! 'api/profiles/profile', profile: profile
  end
end
