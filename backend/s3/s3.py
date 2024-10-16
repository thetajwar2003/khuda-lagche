import boto3
from botocore.exceptions import ClientError

s3_client = boto3.client('s3', region_name='us-east-1')
BUCKET_NAME = "your-s3-bucket-name"


def upload_image_to_s3(file):
    try:
        file_name = file.filename
        s3_client.upload_fileobj(file.file, BUCKET_NAME, file_name)
        return f"https://{BUCKET_NAME}.s3.amazonaws.com/{file_name}"
    except ClientError as e:
        raise Exception(f"Error uploading to S3: {str(e)}")
