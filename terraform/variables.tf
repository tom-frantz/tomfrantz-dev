variable "vercel_a_ip" {
  description = "The IP that Vercel requested for your domains A record"
}

variable "hosted_zone_id" {
  description = "The name of the Route53 hosted zone to use for the frontend"
}

variable "domain" {
  description = "The domain name to use for the frontend"
}