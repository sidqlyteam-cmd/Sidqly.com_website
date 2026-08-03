export const createResponse = (statusCode: number, body: unknown) => {
  const origin = process.env.ALLOWED_ORIGINS || '*';
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
    body: JSON.stringify(body),
  };
};

export const handleOptions = () => {
  return createResponse(204, {});
};
