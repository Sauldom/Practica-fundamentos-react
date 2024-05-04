import { client } from "../client/client";

const adsUrl = "/api/v1/adverts";

export const getAds = () => {
  return client.get(adsUrl);
};

export const getAdsDetail = (adsId) => {
  const url = `${adsUrl}/${adsId}`;
  return client.get(url);
};
