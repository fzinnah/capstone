import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { AppError } from './errorHandler';

interface AuthRequest extends Request {
  user?: any; // Replace 'any' with proper User type once defined
}

export const requireToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    
    if (!token) {
      throw new AppError('Authentication required', 401);
    }

    const user = await User.verifyByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(new AppError('Authentication failed', 401));
  }
};

export const isSitter = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user || req.user.role !== 'sitter') {
      throw new AppError('Sitter access required', 403);
    }
    next();
  } catch (error) {
    next(new AppError('Access denied', 403));
  }
};

export const isAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      throw new AppError('Admin access required', 403);
    }
    next();
  } catch (error) {
    next(new AppError('Access denied', 403));
  }
}; 