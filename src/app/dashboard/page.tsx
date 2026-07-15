'use client';

import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/common/Button';
import { Card, CardBody, CardHeader } from '@/components/common/Card';
import { BookOpen, Users, Briefcase, Award } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-sica-light flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sica-blue"></div>
          <p className="mt-4 text-sica-gray">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-sica-light flex items-center justify-center">
        <Card>
          <CardBody className="text-center space-y-4 p-8">
            <h2 className="text-2xl font-bold text-sica-blue">Please Sign In</h2>
            <p className="text-sica-gray">You need to be signed in to view your dashboard.</p>
            <Link href="/login">
              <Button variant="primary">Go to Sign In</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sica-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-sica-blue mb-2">Welcome back, {user.fullName || 'Learner'}!</h1>
          <p className="text-sica-gray">Here's your learning progress and opportunities.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardBody className="flex items-center gap-4">
              <BookOpen size={32} className="text-sica-cyan" />
              <div>
                <p className="text-sm text-sica-gray">Enrolled Courses</p>
                <p className="text-3xl font-bold text-sica-blue">3</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex items-center gap-4">
              <Users size={32} className="text-sica-emerald" />
              <div>
                <p className="text-sm text-sica-gray">Mentorship Sessions</p>
                <p className="text-3xl font-bold text-sica-blue">1</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex items-center gap-4">
              <Briefcase size={32} className="text-sica-cyan" />
              <div>
                <p className="text-sm text-sica-gray">Project Teams</p>
                <p className="text-3xl font-bold text-sica-blue">2</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="flex items-center gap-4">
              <Award size={32} className="text-sica-emerald" />
              <div>
                <p className="text-sm text-sica-gray">Certificates</p>
                <p className="text-3xl font-bold text-sica-blue">1</p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Learning Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-sica-blue">In Progress</h2>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-sica-blue">Research Circles: Climate Tech Initiative</h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-sica-gray">Building sustainable climate solutions for African communities.</p>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-sica-blue">Progress</span>
                    <span className="text-sm text-sica-gray">65%</span>
                  </div>
                  <div className="w-full bg-sica-light rounded-full h-2">
                    <div className="bg-sica-cyan h-2 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <Button variant="ghost" size="sm">Continue</Button>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-bold text-sica-blue">Builders Fellowship Cohort 5</h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <p className="text-sica-gray">Building your startup from idea to MVP.</p>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-sica-blue">Progress</span>
                    <span className="text-sm text-sica-gray">40%</span>
                  </div>
                  <div className="w-full bg-sica-light rounded-full h-2">
                    <div className="bg-sica-emerald h-2 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
                <Button variant="ghost" size="sm">Continue</Button>
              </CardBody>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-sica-blue">Quick Actions</h2>
            <Card>
              <CardBody className="space-y-3">
                <Link href="/dashboard/profile">
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    Edit Profile
                  </Button>
                </Link>
                <Link href="/dashboard/mentorship">
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    Book Mentorship
                  </Button>
                </Link>
                <Link href="/opportunities">
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    Browse Opportunities
                  </Button>
                </Link>
                <Link href="/dashboard/community">
                  <Button variant="outline" size="sm" fullWidth className="justify-start">
                    Join Community
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
