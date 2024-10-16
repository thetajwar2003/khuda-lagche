from fastapi import Depends, HTTPException, status
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer
import requests

COGNITO_REGION = "us-east-1"
USER_POOL_ID = "your-user-pool-id"
COGNITO_PUBLIC_KEY_URL = f"https://cognito-idp.{COGNITO_REGION}.amazonaws.com/{USER_POOL_ID}/.well-known/jwks.json"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def get_cognito_public_key():
    response = requests.get(COGNITO_PUBLIC_KEY_URL)
    return response.json()


def decode_jwt_token(token: str):
    public_keys = get_cognito_public_key()
    try:
        header = jwt.get_unverified_header(token)
        kid = header["kid"]
        key = next(
            (key for key in public_keys["keys"] if key["kid"] == kid), None)
        if key is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
        return jwt.decode(token, key, algorithms=["RS256"], audience="your-client-id")
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate credentials")


def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_jwt_token(token)
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="User not authenticated")
    return user_id
