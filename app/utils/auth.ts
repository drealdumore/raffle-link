import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error(
    "Please define the JWT_SECRET environment variable inside .env.local"
  );
}

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const createJWT = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwt.decode(token);
    return !!decoded;
  } catch (error) {
    return false;
  }
};

// export const isUserLoggedIn = () => {
//   const token =
//     typeof window !== "undefined" ? localStorage.getItem("token") : null;
//   if (!token) return null;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// };



export const isUserLoggedIn = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded; // assuming the token contains user details like name and image
  } catch (error) {
    return null;
  }
};

