'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { Card, CardBody } from '@/components/common/Card';
import { ArrowRight, Users, BookOpen, Zap, Globe, Target, Award } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Research Circles',
    description: 'Collaborative research groups tackling Africa\'s greatest challenges',
    icon: '🔬',
    duration: '12 weeks',
  },
  {
    id: 2,
    title: 'Builders Fellowship',
    description: 'Turn your innovations into sustainable businesses and ventures',
    icon: '🏗️',
    duration: '16 weeks',
  },
  {
    id: 3,
    title: 'Innovation Challenges',
    description: 'Compete, innovate, and win funding for breakthrough solutions',
    icon: '⚡',
    duration: '8 weeks',
  },
  {
    id: 4,
    title: 'Science-to-Society Projects',
    description: 'Apply scientific research to solve real-world community problems',
    icon: '🌍',
    duration: '12 weeks',
  },
  {
    id: 5,
    title: 'Community Science Labs',
    description: 'Access world-class labs and collaborate with peer scientists',
    icon: '🧪',
    duration: 'Self-paced',
  },
  {
    id: 6,
    title: 'Leadership Development',
    description: 'Build leadership skills to lead research teams and organizations',
    icon: '👥',
    duration: '10 weeks',
  },
];

const challenges = [
  'Skills gap among graduates',
  'Theoretical education systems',
  'Lack of mentorship opportunities',
  'Fragmented talent ecosystem',
  'Youth unemployment',
  'Limited innovation infrastructure',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sica-light via-white to-sica-light">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-sica-blue leading-tight">
            Building Africa's Next Generation of Scientists, Innovators and Institution Builders
          </h1>
          <p className="text-xl text-sica-gray max-w-3xl mx-auto">
            A community and learning ecosystem helping young Africans gain practical skills, mentorship, opportunities, and collaborations to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="primary" size="lg" className="flex items-center justify-center gap-2">
              Apply to Join <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center justify-center gap-2">
              Explore Programs <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why SICA Exists */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-sica-blue mb-4 text-center">Why SICA Exists</h2>
          <p className="text-center text-sica-gray mb-12 max-w-2xl mx-auto">
            Africa's talent is unmatched. But the infrastructure to develop, connect, and empower this talent is fragmented. We're changing that.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <Card key={idx} hoverable>
                <CardBody className="flex items-start gap-4">
                  <div className="text-3xl">📊</div>
                  <p className="font-semibold text-sica-blue">{challenge}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-sica-blue mb-4 text-center">Our Programs</h2>
        <p className="text-center text-sica-gray mb-12 max-w-2xl mx-auto">
          Choose from our comprehensive range of programs designed to build your skills, expand your network, and launch your career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} hoverable>
              <CardBody className="space-y-4">
                <div className="text-5xl">{program.icon}</div>
                <h3 className="text-xl font-bold text-sica-blue">{program.title}</h3>
                <p className="text-sica-gray">{program.description}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-sica-cyan font-semibold">{program.duration}</span>
                  <Button variant="ghost" size="sm">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Experience */}
      <section className="bg-sica-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Premium Learning Experience</h2>
              <p className="text-sica-cyan/90 text-lg">
                Learn from world-class instructors and access cutting-edge educational content designed specifically for African scientists and innovators.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <BookOpen size={24} className="text-sica-cyan flex-shrink-0" />
                  <span>Interactive courses and video lessons</span>
                </li>
                <li className="flex gap-3">
                  <Zap size={24} className="text-sica-emerald flex-shrink-0" />
                  <span>Hands-on projects and assignments</span>
                </li>
                <li className="flex gap-3">
                  <Award size={24} className="text-sica-cyan flex-shrink-0" />
                  <span>Industry-recognized certificates</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg">
                Start Learning
              </Button>
            </div>
            <div className="bg-gradient-to-br from-sica-cyan/20 to-sica-emerald/20 rounded-2xl h-96" />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-sica-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-sica-blue mb-4 text-center">Join a Thriving Community</h2>
          <p className="text-center text-sica-gray mb-12 max-w-2xl mx-auto">
            Connect with thousands of African scientists, innovators, and researchers. Collaborate, learn, and grow together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable>
              <CardBody className="text-center space-y-4">
                <Users size={48} className="mx-auto text-sica-cyan" />
                <h3 className="text-xl font-bold text-sica-blue">Member Directory</h3>
                <p className="text-sica-gray">Find and connect with like-minded innovators and researchers across Africa.</p>
              </CardBody>
            </Card>
            <Card hoverable>
              <CardBody className="text-center space-y-4">
                <Globe size={48} className="mx-auto text-sica-emerald" />
                <h3 className="text-xl font-bold text-sica-blue">Discussion Forums</h3>
                <p className="text-sica-gray">Share ideas, ask questions, and learn from the collective intelligence of our community.</p>
              </CardBody>
            </Card>
            <Card hoverable>
              <CardBody className="text-center space-y-4">
                <Target size={48} className="mx-auto text-sica-cyan" />
                <h3 className="text-xl font-bold text-sica-blue">Project Teams</h3>
                <p className="text-sica-gray">Collaborate on research and innovation projects with peer scientists.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sica-blue to-sica-cyan py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-sica-cyan/90">
            Join thousands of African scientists and innovators building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="secondary" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
