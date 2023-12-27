# Hono API Starter Typescript Deno

## Descripción

Starter to create a API with Hono y Typescript for Deno.

Includes API Server utilities:

* [secure-headers](https://hono.dev/middleware/builtin/secure-headers)
  * Secure Headers Middleware simplifies the setup of security headers.
* [compress](https://hono.dev/middleware/builtin/compress)
  * This middleware compresses the response body, according to Accept-Encoding request header.
* [logger](https://hono.dev/middleware/builtin/logger)
  * It's a simple logger.

## Test

``` bash
deno task test
```

## Development

``` bash
deno task dev
```