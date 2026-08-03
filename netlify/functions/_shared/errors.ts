export class ApiError extends Error {
  statusCode: number;
  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (error: unknown) => {
  console.error("Function error:", error);
  if (error instanceof ApiError) {
    return {
      statusCode: error.statusCode,
      error: error.message
    };
  }
  return {
    statusCode: 500,
    error: "Internal Server Error"
  };
};
