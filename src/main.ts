import { NodeHttpServer, NodeRuntime } from "@effect/platform-node"
import { Config, Layer } from "effect"
import { HttpRouter, HttpServerResponse } from "effect/http"
import { createServer } from "node:http"

const Routes = HttpRouter.add("GET", "/", HttpServerResponse.text("Hello, world"))

const Server = HttpRouter.serve(Routes).pipe(
  Layer.provide(
    NodeHttpServer.layerConfig(createServer, {
      port: Config.Port("PORT").pipe(Config.withDefault(3000))
    })
  )
)

Layer.launch(Server).pipe(NodeRuntime.runMain)
