const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43457086-387a778f7067f42a675238c14';

export function fetchRequest(name) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}