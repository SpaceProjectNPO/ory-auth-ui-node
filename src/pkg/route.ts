// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0
import { FrontendApi, IdentityApi, OAuth2Api, PermissionApi } from "@ory/client"
import { Theme } from "@ory/elements-markup"
import { Application, NextFunction, Request, Response } from "express"

export interface RouteOptions {
  frontend: FrontendApi
  oauth2: OAuth2Api
  permissions: PermissionApi
  identity: IdentityApi
  kratosBrowserUrl: string
  logoUrl?: string
  theme?: Theme
}

export type RouteOptionsCreator = (req: Request, res: Response) => RouteOptions

export type RouteCreator = (
  opts: RouteOptionsCreator,
) => (req: Request, res: Response, next: NextFunction) => void

export type RouteRegistrator = (
  app: Application,
  createHelpers?: RouteOptionsCreator,
  route?: string,
) => void
