variable "certificate_arn" {
  description = "The ARN of the certificate to use for HTTPS"
}

variable "frontend_bucket_name" {
  description = "The name of the S3 bucket to use for the frontend"
}

variable "hosted_zone_id" {
  description = "The name of the Route53 hosted zone to use for the frontend"
}

variable "domain" {
  description = "The domain name to use for the frontend"
}