// 사용자 프로필 타입 정의
export interface AdminProfile {
  id: number;
  name: string;
  profile_img: string | null;
  bio: string | null;
  email: string | null;
  phone: string | null;
  created_at: string;
}

// 게시물(학습 내용 + TIL) 타입 정의
export type PostType = "BLOG" | "TIL";

export interface Post {
  id: number;
  title: string;
  slug: string;
  summary: string;
  type: PostType;
  views?: number;
  created_at: string | Date;
}
