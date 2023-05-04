import jwt from "jsonwebtoken";

// JWT 생성
export const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.REACT_APP_SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};

// JWT 검증
export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};
