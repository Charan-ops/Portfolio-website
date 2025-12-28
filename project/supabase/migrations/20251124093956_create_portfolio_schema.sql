/*
  # Portfolio Website Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Project details
      - `technologies` (text[]) - Array of tech stack items
      - `github_url` (text) - GitHub repository link
      - `live_url` (text) - Live demo link
      - `image_url` (text) - Project screenshot/image
      - `display_order` (integer) - Sort order
      - `created_at` (timestamptz)
    
    - `certifications`
      - `id` (uuid, primary key)
      - `title` (text) - Certification name
      - `issuer` (text) - Issuing organization
      - `issue_date` (date) - Date obtained
      - `credential_id` (text) - Certification ID
      - `credential_url` (text) - Verification link
      - `image_url` (text) - Certificate badge/image
      - `display_order` (integer) - Sort order
      - `created_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Sender name
      - `email` (text) - Sender email
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz)
    
    - `resume_files`
      - `id` (uuid, primary key)
      - `file_name` (text) - Original file name
      - `file_url` (text) - Storage URL
      - `file_type` (text) - resume or cover_letter
      - `uploaded_at` (timestamptz)
      - `is_active` (boolean) - Currently active file

  2. Security
    - Enable RLS on all tables
    - Public read access for projects, certifications, and active resume files
    - No public write access (admin only through service role)
    - Public insert for contact_messages only
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  technologies text[] DEFAULT '{}',
  github_url text,
  live_url text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  issuer text NOT NULL,
  issue_date date,
  credential_id text,
  credential_url text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS resume_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  file_url text NOT NULL,
  file_type text NOT NULL CHECK (file_type IN ('resume', 'cover_letter')),
  uploaded_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Anyone can view certifications"
  ON certifications FOR SELECT
  USING (true);

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view active resume files"
  ON resume_files FOR SELECT
  USING (is_active = true);