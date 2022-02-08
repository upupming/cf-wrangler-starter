import './circle.js'
import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from '@cloudflare/kv-asset-handler'

async function handleAssets(event: FetchEvent) {

  try {
    return await getAssetFromKV(event)
  } catch (e) {
    if (e instanceof NotFoundError) {
      return new Response('NotFoundError', { status: 500 })
    } else if (e instanceof MethodNotAllowedError) {
      return new Response('MethodNotAllowedError', { status: 500 })
    } else {
      return new Response('An unexpected error occurred', { status: 500 })
    }
  }

}

addEventListener('fetch', event => {
  if (event.request.url.endsWith('.jpeg')) {
    return event.respondWith(handleAssets(event))
  }
  event.respondWith(new Response(JSON.stringify(JSON.decycle(event))))
})
