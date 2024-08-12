export const getLandingPageQuery = async ({ input }) => {
  const { page, tag } = input;

  try {
    const response = await fetch(
      `/api/templates?page=${page}&limit=6&category=${tag}`
    );

    return response.json();
  } catch (error) {
    return new Error("Error in the api");
  }
};

export const getLandingPageDetailsQuery = async ({ input }) => {
  const { templateName } = input;

  try {
    const response = await fetch(`/api/templates/details?name=${templateName}`);
    return response.json();
  } catch (error) {
    return new Error("Error in the api");
  }
};
