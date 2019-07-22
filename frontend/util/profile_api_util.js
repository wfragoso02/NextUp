export const fetchProfiles = () => (
  $.ajax({
    method: 'GET',
    url: 'api/profiles'
  })
);

export const fetchProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/profiles/${id}`
  })
}

export const createProfile = (profile) => (
  $.ajax({
    url: 'api/profiles',
    method: 'POST',
    data: { profile }
  })
);

export const updateProfile = (profile) => (
  $.ajax({
    url: `api/profiles/${profile.id}`,
    method: 'PATCH',
    data: { profile }
  })
);

export const deleteProfile = (id) => (
  $.ajax({
    url: `api/profiles/${id}`,
    method: 'DELETE'
  })
);
