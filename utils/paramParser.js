export function paramParser(url, route) {
  const urlParts = url.split("/");
  const routeParts = route.split("/");
  const params = {};

  for (let i = 0; i < routeParts.length; i++) {
    const routePart = routeParts[i];
    if (routePart.startsWith(":")) {
      const paramName = routePart.slice(1);
      params[paramName] = urlParts[i];
    }
  }

  return params;
}
