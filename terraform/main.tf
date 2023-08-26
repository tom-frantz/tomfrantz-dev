resource "aws_route53_record" "www_a" {
  zone_id = var.hosted_zone_id
  name    = var.domain
  type    = "A"

  ttl     = "60"
  records = [
    var.vercel_a_ip
  ]
}

resource "aws_route53_record" "www_cname" {
  zone_id = var.hosted_zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"

  ttl     = "60"
  records = [
    local.vercel_cname
  ]
}


data "aws_caller_identity" "current" {}