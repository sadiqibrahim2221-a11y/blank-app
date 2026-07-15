'use client';

import React from 'react';
import { Button } from '@/components/common/Button';
import { Card, CardBody, CardHeader, CardFooter } from '@/components/common/Card';

const programsData = [
  {
    id: 1,
    name: 'Research Circles',
    slug: 'research-circles',
    description: 'Collaborative research groups tackling Africa\'s greatest challenges in science and technology.',
    duration: '12 weeks',
    eligibility: ['Bachelor\'s degree in Science or Engineering', 'Research interest', 'Commitment to 15hrs/week'],
    maxParticipants: 20,
    currentParticipants: 15,
    category: 'research',
  },
  {
    id: 2,
    name: 'Builders Fellowship',
    slug: 'builders-fellowship',
    description: 'Turn your innovations into sustainable businesses and ventures with mentorship from experienced entrepreneurs.',
    duration: '16 weeks',
    eligibility: ['Innovative idea or MVP', 'Passion for entrepreneurship', 'Team of 1-3 founders'],
    maxParticipants: 30,
    currentParticipants: 24,
    category: 'builders',
  },
  {
    id: 3,
    name: 'Innovation Challenges',
    slug: 'innovation-challenges',
    description: 'Compete with peers, innovate, and win funding for breakthrough solutions to real problems.',
    duration: '8 weeks',
    eligibility: ['Open to all students and young professionals', 'Problem-solving mindset'],
    maxParticipants: 50,
    currentParticipants: 42,
    category: 'innovation',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-sica-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-sica-blue mb-4">Our Programs</h1>
          <p className="text-lg text-sica-gray max-w-2xl mx-auto">
            Choose from our comprehensive range of programs designed to develop your skills, expand your network, and accelerate your impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programsData.map((program) => (
            <Card key={program.id} className="flex flex-col">
              <CardHeader>
                <h2 className="text-2xl font-bold text-sica-blue">{program.name}</h2>
                <p className="text-sica-cyan font-semibold mt-2">{program.duration}</p>
              </CardHeader>
              <CardBody className="flex-grow">
                <p className="text-sica-gray mb-6">{program.description}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sica-blue mb-2">Eligibility</h3>
                    <ul className="list-disc list-inside text-sm text-sica-gray space-y-1">
                      {program.eligibility.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sica-blue mb-2">Availability</h3>
                    <p className="text-sm text-sica-gray">
                      {program.currentParticipants} of {program.maxParticipants} spots filled
                    </p>
                    <div className="w-full bg-sica-light rounded-full h-2 mt-2">
                      <div
                        className="bg-sica-cyan h-2 rounded-full"
                        style={{
                          width: `${(program.currentParticipants / program.maxParticipants) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Button variant="primary" fullWidth>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
