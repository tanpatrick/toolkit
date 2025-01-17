/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MergeGroupPayload {
  base_ref: string
  base_sha: string
  head_commit: {
    author?: {
      email: string
      name: string
    }
    committer?: {
      email: string
      name: string
    }
    id: string
    message: string
    tree_id: string
    timestamp: string
  }
  head_ref: string
  head_sha: string
}

export interface PayloadRepository {
  [key: string]: any
  full_name?: string
  name: string
  owner: {
    [key: string]: any
    login: string
    name?: string
  }
  html_url?: string
}

export interface WebhookPayload {
  [key: string]: any
  repository?: PayloadRepository
  issue?: {
    [key: string]: any
    number: number
    html_url?: string
    body?: string
  }
  merge_group?: MergeGroupPayload
  pull_request?: {
    [key: string]: any
    number: number
    html_url?: string
    body?: string
  }
  sender?: {
    [key: string]: any
    type: string
  }
  action?: string
  installation?: {
    id: number
    [key: string]: any
  }
  comment?: {
    id: number
    [key: string]: any
  }
}
