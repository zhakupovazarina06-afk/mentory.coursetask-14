const api = new ApiClient({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'Bearer TOKEN_123'
  },
  timeout: 5000
});

(async () => {
  try {
    const newPost = await api.post('/posts', {
      title: 'Hello',
      body: 'World',
      userId: 1
    });

    console.log('POST:', newPost);

    const posts = await api.get('/posts');
    console.log('GET:', posts);

    const updated = await api.put('/posts/1', {
      title: 'Updated title',
      body: 'Updated body',
      userId: 1
    });

    console.log('PUT:', updated);

    await api.delete('/posts/1');
    console.log('DELETE: success');

  } catch (e) {
    console.error(e);
  }
})();
