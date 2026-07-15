/**
 * SICA Platform Type Definitions
 */

// User Types
export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  photo?: string;
  institution?: string;
  fieldOfStudy?: string;
  skills: string[];
  interests: string[];
  bio?: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserRole {
  id: string;
  userId: string;
  role: 'member' | 'mentor' | 'admin' | 'program_lead';
  createdAt: string;
}

// Program Types
export interface Program {
  id: string;
  name: string;
  slug: string;
  description: string;
  duration: string;
  eligibility: string[];
  category: 'research' | 'builders' | 'innovation' | 'science' | 'leadership' | 'startup';
  maxParticipants?: number;
  currentParticipants: number;
  applicationDeadline?: string;
  startDate: string;
  endDate: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProgramEnrollment {
  id: string;
  userId: string;
  programId: string;
  status: 'enrolled' | 'completed' | 'dropped';
  enrolledAt: string;
  completedAt?: string;
}

// Course Types
export interface Course {
  id: string;
  programId: string;
  title: string;
  description: string;
  instructor: string;
  duration: number; // in minutes
  videoUrl?: string;
  materials?: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CourseProgress {
  id: string;
  userId: string;
  courseId: string;
  completed: boolean;
  progress: number; // 0-100
  completedAt?: string;
}

// Mentorship Types
export interface MentorProfile {
  id: string;
  userId: string;
  expertise: string[];
  bio: string;
  yearsOfExperience: number;
  isAvailable: boolean;
  maxMentees: number;
  currentMentees: number;
  hourlyRate?: number;
  createdAt: string;
  updatedAt: string;
}

export interface MentorshipSession {
  id: string;
  mentorId: string;
  menteeId: string;
  title: string;
  description?: string;
  scheduledAt: string;
  duration: number; // in minutes
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Opportunity Types
export interface Opportunity {
  id: string;
  title: string;
  type: 'scholarship' | 'grant' | 'internship' | 'competition' | 'fellowship' | 'research';
  description: string;
  organization: string;
  applicationDeadline: string;
  amount?: number;
  currency?: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OpportunitySave {
  id: string;
  userId: string;
  opportunityId: string;
  savedAt: string;
}

// Project Types
export interface Project {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: 'research' | 'startup' | 'community' | 'innovation';
  status: 'idea' | 'development' | 'launched' | 'completed';
  teamMembers: string[];
  images?: string[];
  link?: string;
  createdAt: string;
  updatedAt: string;
}

// Community Types
export interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  category: string;
  members: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommunityPost {
  id: string;
  groupId: string;
  userId: string;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  createdAt: string;
  updatedAt: string;
}

// Certificate Types
export interface Certificate {
  id: string;
  userId: string;
  programId?: string;
  courseId?: string;
  title: string;
  issuedAt: string;
  expiresAt?: string;
  credentialUrl?: string;
}
