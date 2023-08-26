locals {
  build_dir  = "${path.root}/../out"
  mime_types = jsondecode(file("${path.root}/utils/mime.json"))

  vercel_cname = "cname.vercel-dns.com."

  region = "ap-southeast-2"
}
