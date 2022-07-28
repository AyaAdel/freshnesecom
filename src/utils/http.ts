export const http = (url: string) => {
  const controller = new AbortController();
  const signal = controller.signal;

  return fetch(url, {
    method: 'get',
    signal: signal,
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch(function (err) {
      console.error(` Err: ${err}`);
    });
};
