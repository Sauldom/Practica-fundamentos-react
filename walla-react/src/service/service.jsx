import { client } from "../client/client";

const adsUrl = "/api/v1/adverts";

export const getAds = () => {
  return client.get(adsUrl);
};

export const getAdsDetail = (adsId) => {
  const url = `${adsUrl}/${adsId}`;
  return client.get(url);
};

export const getTags = () => {
  const url = `${adsUrl}/tags`;
  return client.get(url);
};
export const createAd = (ad) => {
  return client.post(adsUrl, ad);
};
