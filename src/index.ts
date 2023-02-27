/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  PUBLIC: string;
  SECRET: string;
  ENV_VAR_KV: KVNamespace;
  ENV_VAR_DB: D1Database;
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

const JSON_OK = {
  status: 200,
  headers: { 'content-type': 'application/json' },
};

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const v = await env.ENV_VAR_KV.get('test');
    const dbRows = await env.ENV_VAR_DB.prepare(
      'SELECT * FROM customers'
    ).all();
    const data = {
      hello: 'world',
      test: 'test',
      public: env.PUBLIC,
      secret: env.SECRET,
      kv: { key: 'test', value: v },
      dbRows,
    };
    const json = JSON.stringify(data, null, 2);

    return new Response(json, JSON_OK);
  },
};
