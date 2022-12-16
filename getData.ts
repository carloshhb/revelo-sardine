export interface RandomFact {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

const fetchCategoriesList = async (): Promise<string[]> => {
  const categoriesResponse = await fetch(
    'https://api.chucknorris.io/jokes/categories',
  );
  return (await categoriesResponse.json()) as string[];
};

const fetchData = async (category: string): Promise<RandomFact> => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`,
  );
  const data = response.json();
  return data;
};

const fetchRandomFacts = async () => {
  const categoriesList = await fetchCategoriesList();
  const promises = categoriesList.map(async (category) => {
    return await fetchData(category);
  });

  return await Promise.all(promises);
};

export const execute = async () => {
  const response = await fetchRandomFacts();
  console.log(response);
};

execute();
