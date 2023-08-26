resource "aws_s3_object" "nextjs_build" {
  for_each = fileset(local.build_dir, "**")

  bucket = aws_s3_bucket.tomfrantz_dev_frontend.id
  key    = each.key

  source       = "${local.build_dir}/${each.key}"
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.key), null)

#  etag   = filemd5("${local.build_dir}/${each.value}")
  etag = uuid()
}
