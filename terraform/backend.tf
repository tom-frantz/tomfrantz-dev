terraform {
  backend "s3" {
    bucket = "tom-frantz-dev-terraform-state"
    key    = "lock"
    region = "ap-southeast-2"
  }
}
