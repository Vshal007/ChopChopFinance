import axios from "axios";
const your_api_key = "6f0dd90f69b9414b9c05c154d6c8942e"; //twelevedata api key
const url = `https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=${your_api_key}`;

export function getTheTestData() {
  try {
    const data = axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// rapid api finance
const options = {
  method: "GET",
  url: "https://real-time-finance-data.p.rapidapi.com/search",
  params: {
    query: "Apple",
    language: "en",
  },
  headers: {
    "X-RapidAPI-Key": "7f1355f309mshdda47a5c8832c60p1212aejsn3d2f85a7fec2",
    "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  },
};

export async function RapidApiFinanceData() {
  try {
    const data = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function RapidApiStockNews() {
  const options = {
    method: "GET",
    url: "https://real-time-finance-data.p.rapidapi.com/stock-news",
    params: {
      symbol: "AAPL:NASDAQ",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "7f1355f309mshdda47a5c8832c60p1212aejsn3d2f85a7fec2",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  try {
    const data = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}
