// constants/roles.ts

export const ROLES = {
    STUDENT: 'student',
    LECTURER: 'lecturer',
  } as const;
  
  export type Role = typeof ROLES[keyof typeof ROLES];
  
  export const LECTURER_TYPES = {
    SUPERVISOR: 'supervisor',
    EXAMINER: 'examiner',
  } as const;
  
  export type LecturerType = typeof LECTURER_TYPES[keyof typeof LECTURER_TYPES];
  
  export const ACCESS_LEVELS = {
    STUDENT: 1,
    LECTURER: 2,
    SUPERVISOR: 3,
    EXAMINER: 4,
  } as const;
  
  export type AccessLevel = typeof ACCESS_LEVELS[keyof typeof ACCESS_LEVELS];
  
  export interface User {
    role: Role;
    lecturerType?: LecturerType;
  }
  
  export function getAccessLevel(user: User): AccessLevel {
    if (user.role === ROLES.STUDENT) {
      return ACCESS_LEVELS.STUDENT;
    } else if (user.role === ROLES.LECTURER) {
      if (user.lecturerType === LECTURER_TYPES.SUPERVISOR) {
        return ACCESS_LEVELS.SUPERVISOR;
      } else if (user.lecturerType === LECTURER_TYPES.EXAMINER) {
        return ACCESS_LEVELS.EXAMINER;
      } else {
        return ACCESS_LEVELS.LECTURER;
      }
    }
    return ACCESS_LEVELS.STUDENT; // Default to lowest access level
  }