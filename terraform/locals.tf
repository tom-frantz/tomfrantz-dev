locals {
  build_dir  = "${path.root}/../out"
  mime_types = jsondecode(file("${path.root}/utils/mime.json"))

  region = "ap-southeast-2"
}
