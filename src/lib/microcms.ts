//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Topic = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type TopicResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Topic[];
};

//APIの呼び出し
export const getTopics = async (queries?: MicroCMSQueries) => {
  return await client.get<TopicResponse>({ endpoint: "topics", queries });
};
export const getTopicDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Topic>({
    endpoint: "topics",
    contentId,
    queries,
  });
};