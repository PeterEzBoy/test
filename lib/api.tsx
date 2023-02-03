const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query = '') {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPageAllMongkol() {
  const data = await fetchAPI(`
  {
    pages(where: {nameIn: ["peak-mongkol-header", "peak-mongkol-faq"]}) {
      edges {
        node {
          content
        }
      }
    }
  }
  `);
  return data?.pages;
}

export async function getScoreBySlug(slugName) {
  const data = await fetchAPI(`
  {
      score(id: "${slugName}", idType: SLUG) {
      scoreData {
          avgDays
          avgDaysRank
          group
          invoices
          isFast
          isSure
          merchants
          payRank
          payRate
          point
          score
          topsis
      }
      }
  }
  `);
  return data?.score;
}