const Spotify = {
    // Obtain the access token from the URL
    getAccessToken() {
      const accessToken = window.location.href.match(/access_token=([^&]*)/);
      const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
  
      if (accessToken && expiresIn) {
        // Clear the parameters from the URL
        window.setTimeout(() => (window.location.href = '/'), expiresIn[1] * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken[1];
      } else {
        // Redirect the user to the Spotify authorization endpoint
        const clientId = 'YOUR_CLIENT_ID';
        const redirectUri = 'http://localhost:3000'; // Replace with your app's redirect URI
        const scope = 'playlist-modify-public'; // Specify the required scopes for your app
  
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
      }
    },
  };
  
  export default Spotify;
  