import type { APIRoute } from 'astro';

// Placeholder data - replace with actual SoundCloud API fetch later
const placeholderTracks = [
  { id: 1, title: "Sand Trails to Valhalla", artist: "Audio Theft", artwork_url: "/placeholder-art.png", stream_url: null, waveform_url: null },
  { id: 2, title: "Chants of Acanthis", artist: "Audio Theft", artwork_url: "/placeholder-art.png", stream_url: null, waveform_url: null },
  { id: 3, title: "Bells of Elea", artist: "Audio Theft", artwork_url: "/placeholder-art.png", stream_url: null, waveform_url: null },
  // Add more tracks as needed or fetch dynamically
];

export const GET: APIRoute = async ({ params, request }) => {
  // TODO: Implement actual SoundCloud API fetch here
  // const SOUNDCLOUD_API_KEY = import.meta.env.SOUNDCLOUD_API_KEY; // Use environment variables
  // const SOUNDCLOUD_USER_ID = 'YOUR_USER_ID'; // Replace with actual User ID
  // const response = await fetch(`https://api.soundcloud.com/users/${SOUNDCLOUD_USER_ID}/tracks?client_id=${SOUNDCLOUD_API_KEY}`);
  // if (!response.ok) {
  //   return new Response(JSON.stringify({ error: 'Failed to fetch tracks' }), { status: 500 });
  // }
  // const tracks = await response.json();

  // For now, return placeholder data
  const tracks = placeholderTracks;

  return new Response(JSON.stringify(tracks), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
