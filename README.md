# cf-wrangler-starter

## Configuration

- `main` filed in `package.json` will be used as `miniflare` and deployment entrance.

### dev

```bash
pnpm dev
```

Goto:

- asset example: http://127.0.0.1:8787/img/avatar.jpeg
- custom handler example: http://127.0.0.1:8787/

### deploy

```bash
pnpm deploy
```

## References

1. https://github.com/cloudflare/wrangler
2. https://miniflare.dev/
3. https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys
4. https://github.com/cloudflare/worker-typescript-template
